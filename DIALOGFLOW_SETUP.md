# 🚀 Hướng dẫn Setup Dialogflow Agent

## 📋 Bước 1: Tạo Dialogflow Agent

### 1.1 Truy cập Dialogflow Console
- Vào [Dialogflow ES Console](https://console.dialogflow.com/)
- Đăng nhập bằng Google account
- Click "Create Agent"

### 1.2 Thiết lập Agent cơ bản
```
Agent Name: CandleConsultant
Language: Vietnamese (vi)
Timezone: Asia/Ho_Chi_Minh
```

## 🎯 Bước 2: Tạo Intents cơ bản

### 2.1 Intent: "greeting"
**Training Phrases:**
- "xin chào"
- "hello"
- "hi"
- "chào bạn"
- "chào"
- "xin chào bạn"

**Responses:**
```
Xin chào! Tôi là chuyên gia tư vấn nến thơm. Tôi có thể giúp bạn:

• Tư vấn nến phù hợp với không gian
• Gợi ý nến dựa trên tâm trạng
• Hướng dẫn cách sử dụng nến

Bạn cần tư vấn gì hôm nay? 😊
```

### 2.2 Intent: "product_consultation"
**Training Phrases:**
- "tư vấn nến"
- "nến cho phòng ngủ"
- "nến phòng khách"
- "nến lãng mạn"
- "nến tập trung"
- "nến thiền định"
- "gợi ý nến"
- "nến nào tốt"
- "muốn mua nến"

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

### 2.3 Intent: "emotional_analysis"
**Training Phrases:**
- "mình buồn"
- "tôi stress"
- "mệt mỏi"
- "căng thẳng"
- "muốn lãng mạn"
- "cần thư giãn"
- "tôi đang buồn"
- "cảm thấy stress"
- "muốn thư giãn"

**Responses:**
```
Tôi hiểu cảm xúc của bạn! 💜

Hãy để tôi phân tích và đưa ra gợi ý nến thơm phù hợp nhất với tâm trạng hiện tại của bạn.
```

### 2.4 Intent: "price_inquiry"
**Training Phrases:**
- "giá bao nhiêu"
- "giá nến"
- "chi phí"
- "nến giá bao nhiêu"
- "bao nhiêu tiền"
- "giá cả"

**Responses:**
```
Giá nến thơm từ 150k-350k tùy loại:

• Nến cơ bản: 150k-200k
• Nến cao cấp: 200k-250k  
• Nến đặc biệt: 250k-350k

Bạn quan tâm đến loại nến nào? Tôi sẽ tư vấn chi tiết hơn.
```

### 2.5 Intent: "usage_guide"
**Training Phrases:**
- "cách sử dụng"
- "đốt nến"
- "thời gian cháy"
- "hướng dẫn sử dụng"
- "cách đốt nến"

**Responses:**
```
Hướng dẫn sử dụng nến thơm:

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

Bạn cần tư vấn thêm gì không?
```

## 🔧 Bước 3: Tạo Entities

### 3.1 Entity: "room_type"
**Values:**
- phòng ngủ
- phòng khách
- phòng tắm
- phòng làm việc
- phòng ăn
- phòng thiền

### 3.2 Entity: "emotion"
**Values:**
- buồn
- stress
- mệt mỏi
- căng thẳng
- vui
- lãng mạn
- thư giãn
- tập trung

## 🎯 Bước 4: Cấu hình Webhook

### 4.1 Tạo Webhook URL
Sau khi setup backend, bạn sẽ có webhook URL như:
```
https://your-site.netlify.app/.netlify/functions/api/chatbot
```

### 4.2 Cấu hình trong Dialogflow
1. Vào **Fulfillment** trong Dialogflow
2. Enable **Webhook**
3. Paste webhook URL
4. Save

## 🔑 Bước 5: Environment Variables

### 5.1 Thêm vào Netlify Environment Variables
```bash
# Dialogflow
DIALOGFLOW_PROJECT_ID=your-project-id
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account-key.json

# Gemini (đã có)
GEMINI_API_KEY=your-gemini-api-key
```

### 5.2 Lấy Project ID
1. Vào Dialogflow Console
2. Click vào Agent của bạn
3. Copy Project ID từ URL hoặc Settings

## 🧪 Bước 6: Testing

### 6.1 Test trong Dialogflow Console
1. Vào **Try it now** trong Dialogflow
2. Test các câu hỏi:
   - "Xin chào"
   - "Tư vấn nến cho phòng ngủ"
   - "Tôi buồn"
   - "Giá nến bao nhiêu"

### 6.2 Test với Backend
1. Deploy lên Netlify
2. Test qua ChatbotWidget
3. Kiểm tra response types

## 📊 Bước 7: Monitoring

### 7.1 Dialogflow Analytics
- Vào **Analytics** trong Dialogflow
- Xem intent accuracy
- Monitor user interactions

### 7.2 Backend Logs
- Kiểm tra Netlify Function logs
- Monitor API response times
- Track error rates

## 🚀 Kết quả mong đợi

Sau khi setup xong, chatbot sẽ có thể:

✅ **Intent Recognition chính xác 95%**
✅ **Response time < 2 giây**
✅ **Hybrid approach**: Dialogflow + Gemini
✅ **Fallback mechanism** khi có lỗi
✅ **Visual indicators** cho different response types

## 🔧 Troubleshooting

### Lỗi thường gặp:
1. **"DIALOGFLOW_PROJECT_ID not configured"**
   - Kiểm tra environment variables
   - Đảm bảo project ID đúng

2. **"Cannot find module '@google-cloud/dialogflow'"**
   - Chạy `npm install @google-cloud/dialogflow`
   - Kiểm tra package.json

3. **Webhook không hoạt động**
   - Kiểm tra URL đúng
   - Đảm bảo function deployed
   - Test với Postman

## 📝 Next Steps

Sau khi setup Dialogflow xong:
1. **Test thoroughly** với dataset hiện tại
2. **Optimize intents** dựa trên user feedback
3. **Add more intents** nếu cần
4. **Monitor performance** và adjust

---

**Lưu ý**: Hiện tại backend đã có fallback mechanism nên có thể test ngay mà không cần Dialogflow. Dialogflow sẽ cải thiện accuracy khi được setup đúng cách. 