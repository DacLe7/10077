# 🚀 Nâng cấp Chatbot Tư Vấn Nến Thơm - Phiên bản điều chỉnh

## 📋 Tổng quan dự án hiện tại

**Dataset hiện có:**
- 9 loại nến: Cam Quýt, Vanilla, Hoa Nhài, Oải Hương, Gỗ Đàn Hương, Bạc Hà, Hoa Cúc, Gỗ Tuyết Tùng, Hoa Sen
- Keywords: energizing, fresh, mood_boost, cozy, stress_relief, relaxing, meditation, spiritual, natural
- Emotions: [0.5, 1.0], [0.0, 0.5], [-0.5, 0.0], etc.

## 🎯 Mục tiêu nâng cấp

### Brand Identity (Điều chỉnh cho dự án hiện tại)
```
REQUIRED SYSTEM PROMPTS:
- Tôi là nhân viên tư vấn nến thơm chuyên nghiệp
- Luôn giao tiếp bằng tiếng Việt, thân thiện và chuyên nghiệp
- Tôi là chuyên gia về nến thơm, hiểu rõ từng loại hương và công dụng
- Mục tiêu: giúp khách hàng tìm được nến phù hợp với nhu cầu và cảm xúc
- Tone: Ấm áp, tư vấn chân thành, không áp đặt bán hàng
```

### Product Knowledge (Dựa trên dataset hiện tại)
```
PRODUCT DATABASE HIỆN TẠI:
- 9 loại nến chính: Cam Quýt, Vanilla, Hoa Nhài, Oải Hương, Gỗ Đàn Hương, Bạc Hà, Hoa Cúc, Gỗ Tuyết Tùng, Hoa Sen
- Mỗi hương có công dụng riêng: energizing, relaxing, romantic, focus, meditation
- Biết giá, thành phần, thời gian cháy, phòng phù hợp
- Gợi ý combo nến cho từng không gian và thời điểm
```

## 🔐 Security Implementation

### Environment Variables Setup
```bash
# .env - Add these to Netlify environment variables
GEMINI_API_KEY=your_gemini_api_key_here
DIALOGFLOW_PROJECT_ID=your_dialogflow_project_id
WEBHOOK_SECRET=random_strong_secret_for_verification
```

### Security Best Practices
```typescript
// netlify/functions/api.ts - Security implementation
const validateRequest = (req: any) => {
  const secret = req.headers['x-webhook-secret'];
  if (secret !== process.env.WEBHOOK_SECRET) {
    throw new Error('Unauthorized');
  }
};

// Never expose API keys in frontend
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY not configured');
}
```

## 📊 Dataset Integration (Dựa trên products.ts hiện tại)

### Intent Mapping cho Dialogflow
```
REQUIRED DIALOGFLOW INTENTS:

Intent: "product_consultation"
Training Phrases:
- "Nến cho phòng ngủ"
- "Nến phòng khách" 
- "Nến lãng mạn"
- "Nến tập trung"
- "Nến thiền định"
- "Tư vấn nến"

Intent: "emotional_analysis"
Training Phrases:
- "Mình buồn"
- "Tôi stress"
- "Mệt mỏi"
- "Căng thẳng"
- "Muốn lãng mạn"
- "Cần thư giãn"

Intent: "greeting"
Training Phrases:
- "Xin chào"
- "Hello"
- "Chào bạn"
- "Hi"
```

### Product Database Integration
```typescript
// Sử dụng dataset hiện tại từ products.ts
const CANDLE_PRODUCTS = {
  'phòng ngủ': {
    name: 'Nến Hương Oải Hương Thư Giãn',
    scent: 'Lavender, Chamomile, Bergamot',
    benefit: 'Giảm stress, cải thiện giấc ngủ',
    reason: 'Lavender có tác dụng an thần, giúp thư giãn sâu',
    emotions: [-0.5, 0.0],
    tags: ['sleep', 'stress_relief', 'relaxing', 'meditation']
  },
  'phòng khách': {
    name: 'Nến Hương Vanilla Ngọt Ngào',
    scent: 'Vanilla, Caramel, Gỗ Đàn Hương',
    benefit: 'Tạo cảm giác ấm áp, thoải mái',
    reason: 'Vanilla có tác dụng an thần, giảm stress',
    emotions: [0.0, 0.5],
    tags: ['cozy', 'stress_relief', 'relaxing']
  },
  'lãng mạn': {
    name: 'Nến Hương Hoa Nhài Tinh Khiết',
    scent: 'Hoa Nhài, Hoa Hồng, Hoa Oải Hương',
    benefit: 'Tăng cảm xúc lãng mạn, thư thái',
    reason: 'Hoa nhài giúp cân bằng cảm xúc, tạo sự bình yên',
    emotions: [0.0, 0.5],
    tags: ['romantic', 'luxury', 'relaxing']
  },
  'tập trung': {
    name: 'Nến Hương Bạc Hà Tươi Mát',
    scent: 'Peppermint, Eucalyptus, Lemon',
    benefit: 'Tăng tập trung, giảm đau đầu',
    reason: 'Bạc hà có tác dụng kích thích tinh thần, giảm mệt mỏi',
    emotions: [-0.5, 0.0],
    tags: ['focus', 'fresh', 'energizing']
  },
  'thiền định': {
    name: 'Nến Hương Hoa Sen Thanh Tịnh',
    scent: 'Lotus, Bamboo, Green Tea',
    benefit: 'Tạo không gian tĩnh lặng, thanh tịnh',
    reason: 'Hoa sen tượng trưng cho sự bình yên và tinh khiết',
    emotions: [0.0, 0.0],
    tags: ['meditation', 'spiritual', 'natural']
  }
};

// Emotional keywords mapping (dựa trên dataset hiện tại)
const EMOTIONAL_KEYWORDS = {
  'buồn': 'sad',
  'stress': 'stressed', 
  'mệt mỏi': 'tired',
  'căng thẳng': 'anxious',
  'vui': 'happy',
  'lãng mạn': 'romantic',
  'thư giãn': 'relaxed',
  'tập trung': 'focused',
  'energizing': 'energized',
  'fresh': 'refreshed'
};
```

## 🔄 Hybrid Architecture Workflow

### Request Flow Design
```
USER INPUT → DIALOGFLOW → INTENT DETECTION → PRODUCT LOOKUP → GEMINI → RESPONSE

Detailed Flow:
1. User: "Tôi buồn, muốn nến thư giãn"
2. Dialogflow: Intent="emotional_analysis", Confidence=0.95
3. Backend: Extract emotion="buồn" 
4. Product Lookup: Query products.ts → Return Oải Hương, Hoa Cúc
5. Gemini: Analyze + personalize with product data
6. Response: "Tôi hiểu bạn đang buồn. Nến Oải Hương sẽ giúp bạn thư giãn..."
```

### Implementation trong API hiện tại
```typescript
// netlify/functions/api.ts - Enhanced version
export const handler = async (event: any, context: any) => {
  try {
    const { message, sessionId } = JSON.parse(event.body);
    
    // Step 1: Dialogflow Intent Detection
    const intentResult = await detectIntent(message, sessionId);
    
    // Step 2: Product Data Lookup (sử dụng products.ts hiện tại)
    if (intentResult.intent === 'emotional_analysis') {
      // Extract emotion from message
      const emotion = extractEmotion(message);
      const products = getProductsByEmotion(emotion); // Từ products.ts
      
      // Step 3: Gemini Personalization
      const personalizedResponse = await generatePersonalizedResponse(
        message, 
        products, 
        intentResult.parameters
      );
      
      return {
        statusCode: 200,
        body: JSON.stringify({
          response: personalizedResponse,
          intent: intentResult.intent,
          products: products,
          source: 'dialogflow+gemini',
          type: 'emotional'
        })
      };
    } else if (intentResult.intent === 'product_consultation') {
      // Use predefined responses from CANDLE_PRODUCTS
      const productResponse = getProductRecommendation(message);
      return {
        statusCode: 200,
        body: JSON.stringify({
          response: productResponse,
          intent: intentResult.intent,
          source: 'dialogflow',
          type: 'product'
        })
      };
    }
    
    // Fallback to current Gemini-only flow
    return await handleGeminiOnly(message);
    
  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Xin lỗi, hệ thống đang bảo trì. Vui lòng thử lại sau.' 
      })
    };
  }
};
```

## 🎯 Implementation Priority & Timeline

### Phase 1: Core Integration (Week 1-2)
```
TODO:
□ Setup Dialogflow agent với intents cơ bản
□ Tích hợp dataset hiện tại (products.ts) với Dialogflow
□ Modify existing API để handle hybrid flow
□ Test intent recognition accuracy
□ Add proper error handling
```

### Phase 2: Enhanced Features (Week 3)
```
TODO:
□ Implement emotion analysis từ user input
□ Add session management cho conversation context
□ Create admin interface cho product management
□ Add analytics tracking
□ Performance optimization
```

### Phase 3: Polish & Deploy (Week 4)
```
TODO:
□ UI/UX improvements trong ChatbotWidget
□ Add typing indicators và message status
□ Implement feedback collection
□ Load testing và optimization
□ Production deployment
```

## 🔧 Technical Implementation Details

### ChatbotWidget Enhancements
```typescript
// client/components/ChatbotWidget.tsx - Add these features
interface EnhancedMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  intent?: string;
  confidence?: number;
  products?: Product[];
  source: 'dialogflow' | 'gemini' | 'hybrid';
  type: 'basic' | 'emotional' | 'product';
}

// Add visual indicators cho different response types
const MessageBubble = ({ message }: { message: EnhancedMessage }) => {
  const getSourceIcon = () => {
    switch(message.source) {
      case 'dialogflow': return '🤖';
      case 'gemini': return '✨';
      case 'hybrid': return '🧠';
      default: return '💬';
    }
  };
  
  return (
    <div className={`message ${message.sender}`}>
      <span className="source-icon">{getSourceIcon()}</span>
      <div className="message-content">{message.text}</div>
      {message.products && <ProductCarousel products={message.products} />}
    </div>
  );
};
```

## 📈 Expected Outcomes & Metrics

### Success Metrics
```
BEFORE → AFTER:
- Response Time: 2-3s → 1-2s
- Intent Accuracy: 70% → 95%
- Personalization: Basic → Advanced
- User Satisfaction: 6/10 → 9/10
- Conversion Rate: 5% → 15%
```

### Testing Scenarios (Dựa trên dataset hiện tại)
```
TEST CASES:
1. "Xin chào" → Should trigger greeting intent
2. "Tôi muốn nến cho phòng ngủ" → Should suggest Oải Hương
3. "Tôi đang buồn" → Should recommend Oải Hương, Hoa Cúc
4. "Cần nến tập trung" → Should recommend Bạc Hà
5. "Muốn lãng mạn" → Should recommend Hoa Nhài
```

## 🚀 Next Steps

### Immediate Actions
1. **Review existing codebase** trong `client/components/ChatbotWidget.tsx`
2. **Analyze current API** trong `netlify/functions/api.ts`
3. **Setup Dialogflow agent** với intents cơ bản
4. **Implement hybrid API workflow**
5. **Test với dataset hiện tại**

### Development Order
1. Dialogflow integration first (easier to test)
2. Enhanced UI/UX second
3. Performance optimization last
4. Analytics tracking throughout

---

**Kết luận**: Đã điều chỉnh để phù hợp với dataset và requirements của dự án hiện tại. Bạn có muốn bắt đầu với Phase 1 không? 🚀 