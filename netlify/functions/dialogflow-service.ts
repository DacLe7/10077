import { SessionsClient } from '@google-cloud/dialogflow';

interface DialogflowResponse {
  intent: string;
  confidence: number;
  parameters: any;
  response: string;
}

export class DialogflowService {
  private sessionClient: SessionsClient;
  private projectId: string;

  constructor() {
    this.projectId = process.env.DIALOGFLOW_PROJECT_ID || '';
    if (!this.projectId) {
      throw new Error('DIALOGFLOW_PROJECT_ID not configured');
    }
    
    // For Netlify Functions, we'll use API key authentication
    this.sessionClient = new SessionsClient({
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS || undefined,
      apiEndpoint: 'dialogflow.googleapis.com'
    });
  }

  async detectIntent(sessionId: string, message: string): Promise<DialogflowResponse> {
    try {
      const sessionPath = this.sessionClient.projectAgentSessionPath(this.projectId, sessionId);
      
      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: message,
            languageCode: 'vi',
          },
        },
      };

      const responses = await this.sessionClient.detectIntent(request);
      const result = responses[0].queryResult;

      return {
        intent: result?.intent?.displayName || 'fallback',
        confidence: result?.intentDetectionConfidence || 0,
        parameters: result?.parameters || {},
        response: result?.fulfillmentText || 'Xin lỗi, tôi không hiểu. Bạn có thể nói rõ hơn không?'
      };
    } catch (error) {
      console.error('Dialogflow Error:', error);
      return {
        intent: 'fallback',
        confidence: 0,
        parameters: {},
        response: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.'
      };
    }
  }

  async handleWebhook(body: any): Promise<any> {
    try {
      const { queryResult } = body;
      const intent = queryResult?.intent?.displayName;
      const parameters = queryResult?.parameters || {};
      const userMessage = queryResult?.queryText || '';

      // Handle different intents
      switch (intent) {
        case 'greeting':
          return this.handleGreeting();
        
        case 'product_consultation':
          return this.handleProductConsultation(userMessage, parameters);
        
        case 'emotional_analysis':
          return this.handleEmotionalAnalysis(userMessage);
        
        case 'price_inquiry':
          return this.handlePriceInquiry();
        
        case 'usage_guide':
          return this.handleUsageGuide();
        
        default:
          return this.handleFallback();
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      return this.handleFallback();
    }
  }

  private handleGreeting() {
    return {
      fulfillmentText: `Xin chào! Tôi là chuyên gia tư vấn nến thơm. Tôi có thể giúp bạn:

• Tư vấn nến phù hợp với không gian
• Gợi ý nến dựa trên tâm trạng  
• Hướng dẫn cách sử dụng nến

Bạn cần tư vấn gì hôm nay? 😊`,
      source: 'dialogflow'
    };
  }

  private handleProductConsultation(userMessage: string, parameters: any) {
    const roomType = parameters.room_type || this.extractRoomType(userMessage);
    
    const productRecommendations = {
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

    const product = productRecommendations[roomType] || productRecommendations['phòng khách'];

    return {
      fulfillmentText: `Tôi sẽ tư vấn nến phù hợp cho bạn! 🌸

Dựa trên nhu cầu của bạn, tôi gợi ý:

✨ **${product.name}**
🌿 Hương thơm: ${product.scent}
💝 Lợi ích: ${product.benefit}
💡 Lý do: ${product.reason}

Bạn có muốn tôi phân tích tâm trạng để đưa ra gợi ý cá nhân hóa không?`,
      source: 'dialogflow',
      type: 'product',
      product: product
    };
  }

  private handleEmotionalAnalysis(userMessage: string) {
    return {
      fulfillmentText: `Tôi hiểu cảm xúc của bạn! 💜

Hãy để tôi phân tích và đưa ra gợi ý nến thơm phù hợp nhất với tâm trạng hiện tại của bạn.`,
      source: 'dialogflow',
      type: 'emotional',
      requiresGemini: true // Flag để backend gọi Gemini
    };
  }

  private handlePriceInquiry() {
    return {
      fulfillmentText: `Giá nến thơm từ 150k-350k tùy loại:

• Nến cơ bản: 150k-200k
• Nến cao cấp: 200k-250k  
• Nến đặc biệt: 250k-350k

Bạn quan tâm đến loại nến nào? Tôi sẽ tư vấn chi tiết hơn.`,
      source: 'dialogflow'
    };
  }

  private handleUsageGuide() {
    return {
      fulfillmentText: `Hướng dẫn sử dụng nến thơm:

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
      source: 'dialogflow'
    };
  }

  private handleFallback() {
    return {
      fulfillmentText: 'Xin lỗi, tôi không hiểu rõ. Bạn có thể nói rõ hơn về nhu cầu của mình không? Tôi có thể tư vấn về nến thơm phù hợp với không gian hoặc tâm trạng của bạn.',
      source: 'dialogflow'
    };
  }

  private extractRoomType(message: string): string {
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
  }
} 