import { v2beta1 } from 'dialogflow';
import * as fs from 'fs';

export async function handler(event: any) {
  // Xác định origin được phép
  const allowedOrigin = event.headers.origin === 'http://localhost:8081' 
    ? 'http://localhost:8081' 
    : 'https://one0077.onrender.com';

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod === 'POST') {
    try {
      // Đọc credentials từ Render Secret Files
      let credentials;
      try {
        // Thử đọc từ Render Secret Files trước
        const CREDENTIALS_PATH = '/etc/secrets/saasbot-credentials.json';
        credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
      } catch (fileError) {
        // Fallback: thử đọc từ biến môi trường
        const credentialsStr = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
        if (!credentialsStr) {
          throw new Error('No credentials found. Please check Render Secret Files or environment variables.');
        }
        credentials = JSON.parse(credentialsStr);
      }

      const projectId = credentials.project_id;
      const sessionClient = new v2beta1.SessionsClient({ credentials });

      const { message, sessionId = 'default-session' } = JSON.parse(event.body || '{}');
      const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: message,
            languageCode: 'vi',
          },
        },
      };
      const responses = await sessionClient.detectIntent(request);
      const result = responses[0].queryResult;
      
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': allowedOrigin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({
          text: result.fulfillmentText,
          intent: result.intent?.displayName,
          parameters: result.parameters,
        }),
      };
    } catch (e) {
      console.error('Dialogflow error:', e);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': allowedOrigin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ 
          error: 'Dialogflow error', 
          details: e.message,
          text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.'
        }),
      };
    }
  }
  return { statusCode: 404, body: 'Not found' };
} 