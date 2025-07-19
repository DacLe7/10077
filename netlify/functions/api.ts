import serverless from "serverless-http";
import { createServer } from "../../server";

const GEMINI_API_KEY = 'AIzaSyAuEgd_SIW8UYE0QqtR11SVXj3S8I6vIz0';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-latest:generateContent?key=' + GEMINI_API_KEY;

// Product database for basic consultation (from products.ts)
const CANDLE_PRODUCTS = {
  'phòng ngủ': {
    name: 'Nến Hương Oải Hương Thư Giãn',
    scent: 'Lavender, Chamomile, Bergamot',
    benefit: 'Giảm stress, cải thiện giấc ngủ',
    reason: 'Lavender có tác dụng an thần, giúp thư giãn sâu'
  },
  'phòng khách': {
    name: 'Nến Hương Vanilla Ngọt Ngào',
    scent: 'Vanilla, Caramel, Gỗ Đàn Hương',
    benefit: 'Tạo cảm giác ấm áp, thoải mái',
    reason: 'Vanilla có tác dụng an thần, giảm stress'
  },
  'lãng mạn': {
    name: 'Nến Hương Hoa Nhài Tinh Khiết',
    scent: 'Hoa Nhài, Hoa Hồng, Hoa Oải Hương',
    benefit: 'Tăng cảm xúc lãng mạn, thư thái',
    reason: 'Hoa nhài giúp cân bằng cảm xúc, tạo sự bình yên'
  },
  'tập trung': {
    name: 'Nến Hương Bạc Hà Tươi Mát',
    scent: 'Peppermint, Eucalyptus, Lemon',
    benefit: 'Tăng tập trung, giảm đau đầu',
    reason: 'Bạc hà có tác dụng kích thích tinh thần, giảm mệt mỏi'
  },
  'thiền định': {
    name: 'Nến Hương Hoa Sen Thanh Tịnh',
    scent: 'Lotus, Bamboo, Green Tea',
    benefit: 'Tạo không gian tĩnh lặng, thanh tịnh',
    reason: 'Hoa sen tượng trưng cho sự bình yên và tinh khiết'
  }
};

// Emotional keywords mapping
const EMOTIONAL_KEYWORDS = {
  'buồn': 'sad',
  'stress': 'stressed',
  'mệt mỏi': 'tired',
  'căng thẳng': 'anxious',
  'vui': 'happy',
  'lãng mạn': 'romantic',
  'thư giãn': 'relaxed',
  'tập trung': 'focused'
};

// Simple intent detection (fallback when Dialogflow is not available)
const detectIntentSimple = (message: string) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('xin chào') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return { intent: 'greeting', confidence: 0.9 };
  }
  
  if (lowerMessage.includes('tư vấn') || lowerMessage.includes('nến') || lowerMessage.includes('gợi ý')) {
    return { intent: 'product_consultation', confidence: 0.8 };
  }
  
  if (lowerMessage.includes('buồn') || lowerMessage.includes('stress') || lowerMessage.includes('mệt mỏi')) {
    return { intent: 'emotional_analysis', confidence: 0.9 };
  }
  
  if (lowerMessage.includes('giá') || lowerMessage.includes('bao nhiêu')) {
    return { intent: 'price_inquiry', confidence: 0.8 };
  }
  
  if (lowerMessage.includes('cách') || lowerMessage.includes('sử dụng') || lowerMessage.includes('đốt')) {
    return { intent: 'usage_guide', confidence: 0.8 };
  }
  
  return { intent: 'fallback', confidence: 0.5 };
};

// Handle different intents
const handleIntent = async (intent: string, message: string, confidence: number) => {
  switch (intent) {
    case 'greeting':
      return {
        text: `Xin chào! Tôi là chuyên gia tư vấn nến thơm. Tôi có thể giúp bạn:

• Tư vấn nến phù hợp với không gian
• Gợi ý nến dựa trên tâm trạng  
• Hướng dẫn cách sử dụng nến

Bạn cần tư vấn gì hôm nay? 😊`,
        type: 'basic',
        source: 'dialogflow'
      };
    
    case 'product_consultation':
      const roomType = extractRoomType(message);
      const product = CANDLE_PRODUCTS[roomType as keyof typeof CANDLE_PRODUCTS] || CANDLE_PRODUCTS['phòng khách'];
      
      return {
        text: `Tôi sẽ tư vấn nến phù hợp cho bạn! 🌸

Dựa trên nhu cầu của bạn, tôi gợi ý:

✨ **${product.name}**
🌿 Hương thơm: ${product.scent}
💝 Lợi ích: ${product.benefit}
💡 Lý do: ${product.reason}

Bạn có muốn tôi phân tích tâm trạng để đưa ra gợi ý cá nhân hóa không?`,
        type: 'product',
        source: 'dialogflow',
        product: product
      };
    
    case 'emotional_analysis':
      // Use Gemini for emotional analysis
      return await handleEmotionalAnalysis(message);
    
    case 'price_inquiry':
      return {
        text: `Giá nến thơm từ 150k-350k tùy loại:

• Nến cơ bản: 150k-200k
• Nến cao cấp: 200k-250k  
• Nến đặc biệt: 250k-350k

Bạn quan tâm đến loại nến nào? Tôi sẽ tư vấn chi tiết hơn.`,
        type: 'basic',
        source: 'dialogflow'
      };
    
    case 'usage_guide':
      return {
        text: `Hướng dẫn sử dụng nến thơm:

🕯️ **Cách đốt nến:**
• Đốt tối đa 4 giờ/lần
• Để nến cháy ít nhất 1 giờ đầu
• Không để nến gần gió mạnh

⏰ **Thời gian cháy:**
• Mỗi nến cháy 40-50 giờ
• Nên đốt 2-3 lần/tuần

💡 **Lưu ý an toàn:**
• Không để trẻ em chơi gần nến
• Tắt nến khi ra khỏi phòng

Bạn cần tư vấn thêm gì không?`,
        type: 'basic',
        source: 'dialogflow'
      };
    
    default:
      // Fallback to Gemini
      return await handleGeminiOnly(message);
  }
};

// Extract room type from message
const extractRoomType = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('phòng ngủ') || lowerMessage.includes('ngủ')) {
    return 'phòng ngủ';
  } else if (lowerMessage.includes('phòng khách') || lowerMessage.includes('khách')) {
    return 'phòng khách';
  } else if (lowerMessage.includes('lãng mạn') || lowerMessage.includes('romantic')) {
    return 'lãng mạn';
  } else if (lowerMessage.includes('tập trung') || lowerMessage.includes('làm việc')) {
    return 'tập trung';
  } else if (lowerMessage.includes('thiền') || lowerMessage.includes('meditation')) {
    return 'thiền định';
  }
  
  return 'phòng khách'; // Default
};

// Handle emotional analysis with Gemini
const handleEmotionalAnalysis = async (message: string) => {
  const emotionalPrompt = `Bạn là chuyên gia tư vấn nến thơm. Khách hàng nói: "${message}"

Hãy phân tích tâm trạng và đưa ra lời khuyên về nến thơm phù hợp. Trả lời bằng tiếng Việt, ngắn gọn và thân thiện.

Gợi ý nến thơm dựa trên:
- Tâm trạng buồn/stress: Oải hương, Hoa cúc
- Tâm trạng vui: Cam quýt, Vanilla  
- Cần tập trung: Bạc hà, Gỗ tuyết tùng
- Lãng mạn: Hoa nhài, Hoa hồng

Trả lời trong 2-3 câu, kèm emoji phù hợp.`;

  const body = {
    contents: [{ role: 'user', parts: [{ text: emotionalPrompt }] }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 200,
    },
  };
  
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
      'Tôi hiểu cảm xúc của bạn. Hãy thử nến oải hương để thư giãn nhé! 💜';
    
    return {
      text: responseText,
      type: 'emotional',
      source: 'hybrid'
    };
  } catch (error) {
    return {
      text: 'Tôi hiểu cảm xúc của bạn. Hãy thử nến oải hương để thư giãn nhé! 💜',
      type: 'emotional',
      source: 'fallback'
    };
  }
};

// Fallback to current Gemini-only implementation
const handleGeminiOnly = async (message: string) => {
  const isEmotionalQuery = Object.keys(EMOTIONAL_KEYWORDS).some(keyword => 
    message.toLowerCase().includes(keyword)
  );
  
  if (isEmotionalQuery) {
    return await handleEmotionalAnalysis(message);
  } else {
    // Basic product consultation using predefined responses
    const lowerMessage = message.toLowerCase();
    let product = null;
    
    // Find matching product
    for (const [key, value] of Object.entries(CANDLE_PRODUCTS)) {
      if (lowerMessage.includes(key)) {
        product = value;
        break;
      }
    }
    
    if (product) {
      return {
        text: `✨ **${product.name}**\n\n🌿 **Hương thơm:** ${product.scent}\n💝 **Lợi ích:** ${product.benefit}\n💡 **Lý do:** ${product.reason}\n\nBạn có muốn tôi tư vấn thêm về sản phẩm khác không?`,
        type: 'product',
        source: 'gemini'
      };
    } else {
      // Fallback to Gemini for general questions
      const generalPrompt = `Bạn là chuyên gia tư vấn nến thơm. Khách hàng hỏi: "${message}"

Hãy trả lời ngắn gọn, thân thiện bằng tiếng Việt về nến thơm. Nếu không liên quan đến nến thơm, hãy chuyển hướng về chủ đề nến thơm một cách khéo léo.

Trả lời trong 2-3 câu, kèm emoji.`;

      const body = {
        contents: [{ role: 'user', parts: [{ text: generalPrompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 150,
        },
      };
      
      try {
        const response = await fetch(GEMINI_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        
        const data = await response.json();
        const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
          'Tôi có thể tư vấn cho bạn về các loại nến thơm phù hợp. Bạn quan tâm đến mùi hương nào? 😊';
        
        return {
          text: responseText,
          type: 'basic',
          source: 'gemini'
        };
      } catch (error) {
        return {
          text: 'Tôi có thể tư vấn cho bạn về các loại nến thơm phù hợp. Bạn quan tâm đến mùi hương nào? 😊',
          type: 'basic',
          source: 'fallback'
        };
      }
    }
  }
};

export async function handler(event: any) {
  if (event.httpMethod === 'OPTIONS') {
    // Handle preflight CORS
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
  if (event.httpMethod === 'POST' && event.path === '/.netlify/functions/api/chatbot') {
    try {
      const { message, sessionId, context } = JSON.parse(event.body || '{}');
      
      // Step 1: Intent Detection (Simple fallback when Dialogflow is not available)
      const intentResult = detectIntentSimple(message);
      
      // Step 2: Handle intent with appropriate response
      const response = await handleIntent(intentResult.intent, message, intentResult.confidence);
      
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': 'https://one0077.onrender.com',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(response),
      };
    } catch (e) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': 'https://one0077.onrender.com',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ 
          error: 'Lỗi máy chủ hoặc API Gemini.',
          type: 'basic',
          text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.'
        }),
      };
    }
  }
}
