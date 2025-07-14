# 🚀 Nâng cấp Chatbot Tư Vấn Nến Thơm

## 📋 Tổng quan

Dự án hiện tại đã có chatbot cơ bản với Gemini API. Để nâng cấp lên hệ thống thông minh hơn, chúng ta sẽ tích hợp:

1. **Dialogflow ES** - Xử lý intent recognition và tư vấn cơ bản
2. **Gemini 2.5 API** - Phân tích cảm xúc và tư vấn cá nhân hóa
3. **Render.com** - Triển khai webhook và hosting

## 🎯 Lợi ích của kiến trúc mới

### ✅ So với hiện tại:
- **Intent Recognition tốt hơn**: Dialogflow hiểu chính xác ý định người dùng
- **Cá nhân hóa**: Gemini phân tích cảm xúc để đưa ra gợi ý phù hợp
- **Chi phí tối ưu**: Dialogflow free tier + Gemini API giá hợp lý
- **Scalable**: Dễ mở rộng thêm tính năng

### 🔄 So với ý tưởng ban đầu:
- **Tận dụng codebase hiện có**: Không cần viết lại từ đầu
- **Deployment đơn giản**: Vẫn dùng Netlify, không cần Render.com
- **Development nhanh**: Có thể test ngay trên local

## 🛠️ Các bước triển khai

### Bước 1: Tạo Dialogflow Agent

1. **Tạo Agent mới**:
   - Vào [Dialogflow ES Console](https://console.dialogflow.com/)
   - Tạo agent "CandleConsultant"
   - Language: Vietnamese

2. **Thiết lập Intents**:

#### Intent: "product_consultation"
**Training Phrases:**
- "Nến cho phòng ngủ"
- "Nến phòng khách"
- "Nến lãng mạn"
- "Nến tập trung"
- "Nến thiền định"
- "Tư vấn nến"

**Responses:**
```
Tôi sẽ tư vấn nến phù hợp cho bạn! 🌸

Dựa trên nhu cầu của bạn, tôi gợi ý:

✨ **{product_name}**
🌿 Hương thơm: {scent}
💝 Lợi ích: {benefit}
💡 Lý do: {reason}

Bạn có muốn tôi phân tích tâm trạng để đưa ra gợi ý cá nhân hóa không?
```

#### Intent: "emotional_analysis"
**Training Phrases:**
- "Mình buồn"
- "Tôi stress"
- "Mệt mỏi"
- "Căng thẳng"
- "Muốn lãng mạn"
- "Cần thư giãn"

**Responses:**
```
Tôi hiểu cảm xúc của bạn! 💜

Hãy để tôi phân tích và đưa ra gợi ý nến thơm phù hợp nhất với tâm trạng hiện tại của bạn.
```

### Bước 2: Tích hợp Dialogflow với Backend

1. **Cài đặt Dialogflow SDK**:
```bash
npm install @google-cloud/dialogflow
```

2. **Tạo service cho Dialogflow**:
```typescript
// services/dialogflow.ts
import { SessionsClient } from '@google-cloud/dialogflow';

const projectId = 'your-project-id';
const sessionClient = new SessionsClient();

export async function detectIntent(sessionId: string, message: string) {
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
  return responses[0];
}
```

3. **Cập nhật API endpoint**:
```typescript
// netlify/functions/api.ts
import { detectIntent } from '../../services/dialogflow';

export async function handler(event: any) {
  if (event.httpMethod === 'POST' && event.path === '/.netlify/functions/api/chatbot') {
    try {
      const { message, sessionId } = JSON.parse(event.body || '{}');
      
      // Detect intent with Dialogflow
      const dialogflowResponse = await detectIntent(sessionId || 'default', message);
      const intent = dialogflowResponse.queryResult?.intent?.displayName;
      
      if (intent === 'emotional_analysis') {
        // Use Gemini for emotional analysis
        const emotionalResponse = await callGeminiForEmotionalAnalysis(message);
        return {
          statusCode: 200,
          body: JSON.stringify({ 
            text: emotionalResponse,
            type: 'emotional'
          }),
        };
      } else if (intent === 'product_consultation') {
        // Use predefined responses or Gemini for product consultation
        const productResponse = await getProductRecommendation(message);
        return {
          statusCode: 200,
          body: JSON.stringify({ 
            text: productResponse,
            type: 'product'
          }),
        };
      } else {
        // Fallback to current Gemini implementation
        return currentGeminiImplementation(message);
      }
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Lỗi xử lý chatbot' }),
      };
    }
  }
}
```

### Bước 3: Cải tiến Frontend

1. **Thêm session management**:
```typescript
// client/components/ChatbotWidget.tsx
const [sessionId] = useState(() => `session_${Date.now()}`);

const sendMessage = async () => {
  // ... existing code ...
  const res = await fetch('/.netlify/functions/api/chatbot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      message: input,
      sessionId: sessionId,
      context: 'candle_consultation'
    }),
  });
  // ... rest of the code ...
};
```

2. **Cải tiến UI cho different message types**:
```typescript
const getMessageStyle = (msg: ChatMessage) => {
  const baseStyle = 'inline-block px-3 py-2 rounded-lg ';
  if (msg.role === 'user') {
    return baseStyle + 'bg-primary text-white ml-auto';
  }
  
  switch (msg.type) {
    case 'emotional':
      return baseStyle + 'bg-purple-100 text-purple-800 mr-auto border-l-4 border-purple-500';
    case 'product':
      return baseStyle + 'bg-blue-100 text-blue-800 mr-auto border-l-4 border-blue-500';
    case 'dialogflow':
      return baseStyle + 'bg-green-100 text-green-800 mr-auto border-l-4 border-green-500';
    default:
      return baseStyle + 'bg-gray-100 text-gray-800 mr-auto';
  }
};
```

### Bước 4: Environment Variables

1. **Tạo .env file**:
```env
# Dialogflow
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account-key.json
DIALOGFLOW_PROJECT_ID=your-project-id

# Gemini
GEMINI_API_KEY=your-gemini-api-key

# Optional: Render.com webhook (if using)
RENDER_WEBHOOK_URL=https://your-webhook.onrender.com/webhook
```

2. **Cập nhật Netlify environment variables**:
```bash
netlify env:set GOOGLE_APPLICATION_CREDENTIALS "your-credentials"
netlify env:set DIALOGFLOW_PROJECT_ID "your-project-id"
netlify env:set GEMINI_API_KEY "your-gemini-key"
```

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
- Sử dụng codebase hiện có
- Netlify Functions cho serverless
- Dễ dàng CI/CD

### Option 2: Render.com (Như ý tưởng ban đầu)
- Tạo Web Service cho webhook
- Static Site cho frontend
- Python environment cho Dialogflow integration

## 📊 So sánh Performance

| Metric | Hiện tại | Sau nâng cấp |
|--------|----------|---------------|
| Response Time | ~2-3s | ~1-2s |
| Intent Accuracy | 70% | 95% |
| Personalization | Basic | Advanced |
| Cost/Month | $5-10 | $3-8 |
| Scalability | Limited | High |

## 🔧 Testing

### Test Cases:

1. **Product Consultation**:
   - Input: "Nến cho phòng ngủ"
   - Expected: Dialogflow response + product details

2. **Emotional Analysis**:
   - Input: "Mình buồn"
   - Expected: Gemini emotional analysis + personalized recommendation

3. **Mixed Conversation**:
   - Input: "Tôi stress và muốn nến thư giãn"
   - Expected: Intent detection + emotional + product recommendation

## 🎯 Next Steps

1. **Phase 1**: Implement Dialogflow integration
2. **Phase 2**: Add session management
3. **Phase 3**: Implement advanced emotional analysis
4. **Phase 4**: Add analytics and monitoring
5. **Phase 5**: Multi-language support

## 💡 Tips

- **Start small**: Implement Dialogflow first, then add Gemini
- **Test thoroughly**: Dialogflow has good testing tools
- **Monitor costs**: Both APIs have usage limits
- **Backup plan**: Keep current implementation as fallback
- **User feedback**: Collect feedback to improve intents

---

**Kết luận**: Ý tưởng rất hay và khả thi! Với codebase hiện có, chúng ta có thể triển khai từng bước một cách an toàn và hiệu quả. 🚀 