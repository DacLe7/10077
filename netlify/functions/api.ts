import serverless from "serverless-http";

import { createServer } from "../../server";
import fetch from 'node-fetch';

const GEMINI_API_KEY = 'AIzaSyAuEgd_SIW8UYE0QqtR11SVXj3S8I6vIz0';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-latest:generateContent?key=' + GEMINI_API_KEY;

export const handler = serverless(createServer());

export async function handler(event: any) {
  if (event.httpMethod === 'POST' && event.path === '/.netlify/functions/api/chatbot') {
    try {
      const { message, history } = JSON.parse(event.body || '{}');
      const prompt = [
        { role: 'user', parts: [{ text: message }] },
        // Có thể thêm history nếu muốn giữ ngữ cảnh
      ];
      const body = {
        contents: prompt,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        },
      };
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Xin lỗi, tôi chưa có câu trả lời phù hợp.';
      return {
        statusCode: 200,
        body: JSON.stringify({ text }),
      };
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Lỗi máy chủ hoặc API Gemini.' }),
      };
    }
  }
}
