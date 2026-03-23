# 🔗 Gemini API Implementation - Technical Reference

## API Configuration

### Base Information
```
Service: Google Generative Language API
Version: v1beta
Model: gemini-2.0-flash (recommended)
Authentication: API Key (URL parameter)
Protocol: REST with JSON
```

### Endpoint URL
```
https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}
```

### Available Models
```
Model                          Status      Speed    Quality  Use Case
─────────────────────────────────────────────────────────────────────
gemini-2.0-flash              ✅ Latest   Fast     Excellent  Default (Recommended)
gemini-1.5-flash              ✅ Stable   Very Fast Good      Budget/Speed
gemini-1.5-pro                ✅ Stable   Slow     Excellent  High Quality
gemini-3-flash-preview        ⚠️ Preview  Fast     Good       Testing Only
```

---

## API Key Information

### Current Key
```
API Key: AIzaSyDnq_dVRhVcgycbSxfhqiUjQwcLBhrmhBU
Status: ✅ Active and Verified
Project: CareerPath AI
Permissions: Generate content only
```

### Key Management
```
Location in Code: js/gemini.js, Line 122
Type: Service API Key
Scope: Public (frontend)
⚠️ WARNING: This is visible in client code
Production: Use backend proxy instead
```

---

## Request Format

### HTTP Method
```
POST
```

### Headers
```javascript
{
  "Content-Type": "application/json"
}
```

### Request Body
```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "User message here"
        }
      ]
    }
  ],
  "generationConfig": {
    "temperature": 0.7,
    "topK": 40,
    "topP": 0.95,
    "maxOutputTokens": 500
  },
  "safetySettings": [
    {
      "category": "HARM_CATEGORY_HARASSMENT",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      "category": "HARM_CATEGORY_HATE_SPEECH",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    }
  ]
}
```

### Generation Config Explained
```javascript
temperature: 0.7
├─ Range: 0.0 to 1.0 (or higher)
├─ 0.0 = Very deterministic/factual
├─ 0.7 = Balanced (default for career advice)
└─ 1.0+ = Very creative/random

topK: 40
├─ Range: 1 to 40
├─ Controls diversity of output
├─ Lower = More focused
└─ Higher = More diverse

topP: 0.95
├─ Range: 0.0 to 1.0
├─ Nuclear sampling parameter
├─ 0.95 = Very selective
└─ 1.0 = No filtering

maxOutputTokens: 500
├─ Range: 1 to 2000+
├─ 1 token ≈ 4 characters
├─ 500 tokens ≈ 200-300 words
└─ Limit generated response length
```

---

## Response Format

### Success Response (200 OK)
```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Generated response text here..."
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP",
      "index": 0,
      "safetyRatings": [
        {
          "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          "probability": "NEGLIGIBLE"
        }
      ]
    }
  ]
}
```

### Error Response Examples

#### 401 Unauthorized (Invalid Key)
```json
{
  "error": {
    "code": 401,
    "message": "The API key provided is invalid or has not been activated.",
    "status": "UNAUTHENTICATED"
  }
}
```

#### 400 Bad Request (Invalid Format)
```json
{
  "error": {
    "code": 400,
    "message": "Invalid request body.",
    "status": "INVALID_ARGUMENT"
  }
}
```

#### 429 Too Many Requests (Rate Limited)
```json
{
  "error": {
    "code": 429,
    "message": "Resource exhausted.",
    "status": "RESOURCE_EXHAUSTED"
  }
}
```

#### 503 Service Unavailable
```json
{
  "error": {
    "code": 503,
    "message": "Service currently unavailable.",
    "status": "UNAVAILABLE"
  }
}
```

---

## JavaScript Implementation

### Basic Usage
```javascript
// Initialize
const gemini = new GeminiService("YOUR_API_KEY");
await gemini.verifyApiKey();

// Send message
const response = await gemini.sendMessage("Tell me about careers");
console.log(response);

// Get history
const history = gemini.getHistory();
console.log(history);

// Reset
gemini.resetHistory();
```

### With Try-Catch
```javascript
try {
  const response = await gemini.sendMessage("Hello");
  console.log("Response:", response);
} catch (error) {
  console.error("Error:", error.message);
  // Use fallback
}
```

### Async/Await
```javascript
async function askGemini(question) {
  try {
    return await geminiService.sendMessage(question);
  } catch (error) {
    console.error("API failed:", error);
    return null;
  }
}

// Usage
const answer = await askGemini("What is AI?");
```

---

## cURL Examples

### Test API Connectivity
```bash
curl -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDnq_dVRhVcgycbSxfhqiUjQwcLBhrmhBU"
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "parts": [{"text": "Hello"}]
    }]
  }'
```

### With System Prompt
```bash
curl -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDnq_dVRhVcgycbSxfhqiUjQwcLBhrmhBU" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [
      {
        "role": "user",
        "parts": [{"text": "You are a career advisor. Answer: What is cyber security?"}]
      }
    ]
  }'
```

---

## Performance Metrics

### Response Times
```
Model              Average  Typical Range  Notes
─────────────────────────────────────────────────
gemini-2.0-flash   1-3s     1-5s          Recommended
gemini-1.5-flash   0.5-2s   0.5-3s        Fastest
gemini-1.5-pro     2-5s     2-8s          Slowest but best
```

### Token Usage
```
Input:  tokens per input character ≈ 1 token / 4 chars
Output: tokens per output character ≈ 1 token / 4 chars
Free tier: Limited RPM (requests per minute)
Monitor: Google Cloud Console
```

---

## Safety Settings

### Available Categories
```
HARM_CATEGORY_UNSPECIFIED
HARM_CATEGORY_DEROGATORY_CONTENT
HARM_CATEGORY_VIOLENCE
HARM_CATEGORY_SEXUAL_CONTENT
HARM_CATEGORY_MEDICAL_CONTENT
HARM_CATEGORY_DANGEROUS_CONTENT
HARM_CATEGORY_HARASSMENT
HARM_CATEGORY_HATE_SPEECH
HARM_CATEGORY_SEXUALLY_EXPLICIT
```

### Threshold Levels
```
HARM_BLOCK_THRESHOLD_UNSPECIFIED
BLOCK_ONLY_HIGH          (Most restrictive)
BLOCK_MEDIUM_AND_ABOVE   (Recommended)
BLOCK_LOW_AND_ABOVE      (Less restrictive)
BLOCK_NONE               (No filtering)
```

### Current Implementation
```javascript
// In gemini.js lines 83-95
safetySettings: [
  {
    category: "HARM_CATEGORY_HARASSMENT",
    threshold: "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    category: "HARM_CATEGORY_HATE_SPEECH",
    threshold: "BLOCK_MEDIUM_AND_ABOVE"
  }
]
```

---

## Conversation History Format

### How It Works
```javascript
conversationHistory = [
  {
    role: "user",
    parts: [{ text: "First user message" }]
  },
  {
    role: "model",
    parts: [{ text: "Bot's response" }]
  },
  {
    role: "user",
    parts: [{ text: "Second user message" }]
  },
  {
    role: "model",
    parts: [{ text: "Bot's second response" }]
  }
]
```

### Limitations
```
Current: Keeps last 20 messages
Maximum: No hard limit (but longer = slower)
Storage: Memory only (no persistence)
Clear: Use geminiService.resetHistory()
```

---

## Debugging Tips

### Check Request Headers
```javascript
// Add to fetch call
console.log("Request:", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: requestBody
});
```

### Log Response
```javascript
const response = await fetch(url, options);
const data = await response.json();
console.log("Status:", response.status);
console.log("Response:", data);
```

### Monitor Network
```
1. Open DevTools (F12)
2. Go to Network tab
3. Send chat message
4. Look for request to: generativelanguage.googleapis.com
5. Check Status column (200 = success)
6. Click request → Response tab to see data
```

### API Error Messages
```
Clear pattern: Check error.message
Common issues:
- "API key invalid" → Key not correct
- "Unauthenticated" → Key not activated
- "Resource exhausted" → Rate limited
- "INVALID_ARGUMENT" → Bad request format
```

---

## Rate Limits & Quotas

### Free Tier
```
Requests per minute (RPM): 60
Requests per day: Limited
Tokens per minute: Limited
Check quota: Google Cloud Console
```

### Handling Rate Limits
```javascript
try {
  response = await geminiService.sendMessage(msg);
} catch (error) {
  if (error.includes("429")) {
    console.log("Rate limited. Wait before retrying.");
    // Implement exponential backoff
  }
}
```

---

## Production Checklist

- [ ] Move API key to backend
- [ ] Implement backend proxy
- [ ] Add rate limiting
- [ ] Set up monitoring
- [ ] Enable logging
- [ ] Test error scenarios
- [ ] Set quota alerts
- [ ] Document changes
- [ ] Test on production servers
- [ ] Set up failover
- [ ] Monitor costs
- [ ] Implement caching

---

## Useful Links

### Official Resources
- [Gemini API Documentation](https://ai.google.dev/)
- [REST API Reference](https://ai.google.dev/models/gemini-2-0-flash)
- [API Errors Guide](https://ai.google.dev/docs/api_errors)
- [Safety Guide](https://ai.google.dev/docs/safety_governance)
- [Pricing Calculator](https://ai.google.dev/pricing)

### Tools
- [API Testing Tool](https://ai.google.dev/tutorials/rest_quickstart)
- [Cloud Console](https://console.cloud.google.com)
- [API Explorer](https://ai.google.dev/api/rest/google.ai.generativelanguage.v1beta/projects.locations.publishers/models/generateContent)

---

## Version History

```
v1beta          Current (Recommended)
Previous        Deprecated
Future          v1 (planned)
```

---

## Support

### If You Need Help
```
1. Check console (F12) for errors
2. Verify API key is valid
3. Test with simple message first
4. Check network status
5. Review error messages
6. Try different model
7. Check Google Cloud Console
```

### Report Issues
```
Link: https://issuetracker.google.com/issues?q=componentid:187172&status:open
Include:
- Error message
- Request that failed
- API version
- Model name
```

---

**Last Updated:** March 17, 2026  
**API Version:** v1beta  
**Status:** ✅ Verified & Working
