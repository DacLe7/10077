import { Router } from 'express';
import { v2beta1 } from 'dialogflow';
import * as fs from 'fs';

const router = Router();

router.post('/dialogflow', async (req, res) => {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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

    const { message, sessionId = 'default-session' } = req.body;
    const sessionPath = `projects/${projectId}/agent/sessions/${sessionId}`;
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
    
    res.json({
      text: result.fulfillmentText,
      intent: result.intent?.displayName,
      parameters: result.parameters,
    });
  } catch (e) {
    console.error('Dialogflow error:', e);
    res.status(500).json({ 
      error: 'Dialogflow error', 
      details: e.message,
      text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.'
    });
  }
});

export default router; 