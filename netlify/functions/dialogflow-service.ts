import { V2beta1 } from 'dialogflow';
import * as fs from 'fs';
import * as path from 'path';

const CREDENTIALS_PATH = path.resolve(__dirname, '../../saasbot-credentials.json');
const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

const projectId = credentials.project_id;
const sessionClient = new V2beta1.SessionsClient({ credentials });

export async function handler(event: any) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://one0077.onrender.com',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod === 'POST') {
    try {
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
          'Access-Control-Allow-Origin': 'https://one0077.onrender.com',
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
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': 'https://one0077.onrender.com',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Dialogflow error', details: e.message }),
      };
    }
  }
  return { statusCode: 404, body: 'Not found' };
} 