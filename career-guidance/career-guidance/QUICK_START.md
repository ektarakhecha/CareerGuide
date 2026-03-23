# ⚡ Quick Reference - Gemini ChatBot Integration

## 🎯 One-Minute Setup Check

### ✅ Verification Checklist:

1. **API Key Installed?**
   ```javascript
   // Location: js/gemini.js (line 122)
   const GEMINI_API_KEY = "AIzaSyDnq_dVRhVcgycbSxfhqiUjQwcLBhrmhBU";  ✓
   ```

2. **Model Configured?**
   ```javascript
   // Location: js/gemini.js (line 138)
   const GEMINI_MODEL = "gemini-2.0-flash";  ✓
   ```

3. **Scripts Loaded?**
   ```html
   <!-- Location: index.html -->
   <script src="js/gemini.js"></script>  ✓
   <script src="js/engine.js"></script>  ✓
   <script src="js/app.js"></script>     ✓
   ```

---

## 🚀 How to Test

### Test 1: Check Console Status
```
Open browser (Open Browser DevTools: F12)
→ Console tab
→ Look for: ✓ Gemini API key verified successfully
```

### Test 2: Send First Message
```
1. Click "AI Chat" in navigation
2. Type: "Hello"
3. Check for loading animation
4. Verify response appears
```

### Test 3: Test AI Features
```
Try these example queries:
- "Tell me about cyber security"
- "What is UPSC?"
- "Best careers in 2030?"
```

---

## 📋 Files at a Glance

| File | Status | Purpose |
|------|--------|---------|
| `js/gemini.js` | ✅ NEW | Gemini API service |
| `js/engine.js` | ✅ UPDATED | ChatBot engine with AI |
| `js/app.js` | ✅ UPDATED | UI handlers for async chat |
| `css/styles.css` | ✅ UPDATED | Loading animation |
| `index.html` | ✅ UPDATED | Added gemini.js script |

---

## ⚡ Common Commands (Browser Console)

### Check Gemini Status:
```javascript
geminiService
// Shows: GeminiService object with methods
```

### Check if Ready:
```javascript
geminiService && geminiService.initialized
// Shows: true (ready) or false (not ready)
```

### Send Direct Message (for testing):
```javascript
await geminiService.sendMessage("What is machine learning?")
// Returns: AI response
```

### View Conversation History:
```javascript
geminiService.getHistory()
// Shows: Array of all messages
```

### Reset Chat:
```javascript
chatbotEngine.resetHistory()
// Clears conversation history
```

---

## 🔧 Configuration Guide

### Change Model (Recommended):
```javascript
// File: js/gemini.js, Line 138

// BEFORE:
const GEMINI_MODEL = "gemini-2.0-flash";

// TO USE 1.5-FLASH (faster):
const GEMINI_MODEL = "gemini-1.5-flash";

// TO USE 1.5-PRO (better quality):
const GEMINI_MODEL = "gemini-1.5-pro";
```

### Change Max Response Length:
```javascript
// File: js/gemini.js, Line 84
maxOutputTokens: 500  // Change this number

// 500 = Default (about 200-300 words)
// 1000 = Longer responses
// 200 = Shorter responses
```

### Change Temperature (Creativity):
```javascript
// File: js/gemini.js, Line 79
temperature: 0.7  // Change this number

// 0.0 = Very factual
// 0.7 = Balanced (default)
// 1.0 = Very creative
```

---

## 🚨 If Something Goes Wrong

### Chatbot Not Responding?

**Step 1:** Check Console (F12)
```javascript
// Look for any red error messages
// Common: "CORS error", "API key invalid", "Network error"
```

**Step 2:** Verify API Key
```javascript
// Console:
GEMINI_API_KEY
// Should show: AIzaSyDnq_dVRhVcgycbSxfhqiUjQwcLBhrmhBU
```

**Step 3:** Test Fallback (Manual)
```javascript
// Console:
chatbotEngine.processMessageWithFallback("Hello")
// Should return: Greeting from knowledge base
```

**Step 4:** Check Connection
```javascript
// Open DevTools Network tab
// Send a message
// Look for request to: generativelanguage.googleapis.com
```

---

## 💡 Tips & Tricks

### Tip 1: Faster Responses
```
Use gemini-1.5-flash instead of gemini-2.0-flash
(Trades slight quality for speed)
```

### Tip 2: Better Context
```
Fill in the assessment first!
This gives the AI more context about you
→ Better personalized recommendations
```

### Tip 3: Monitor Usage
```
Check Google Cloud Console:
https://console.cloud.google.com
→ Monitor API quota usage
→ Set up billing alerts
```

### Tip 4: Clear History
```javascript
// If chat history seems stuck, reset it:
chatbotEngine.resetHistory()
```

---

## 📊 Integration Summary

```
┌─────────────────────────────────────┐
│   CareerPath AI ChatBot Status       │
├─────────────────────────────────────┤
│ Gemini API:        ✅ Integrated    │
│ API Key:           ✅ Configured    │
│ Model:             ✅ gemini-2.0    │
│ Fallback System:   ✅ Active        │
│ Error Handling:    ✅ Enabled       │
│ UI Animation:      ✅ Loading dots  │
│ Context Awareness: ✅ User profile  │
│ History Tracking:  ✅ Last 20 msgs  │
└─────────────────────────────────────┘
```

---

## 🎓 Learning Resources

- [Google Generative AI Docs](https://ai.google.dev/)
- [Gemini API Quickstart](https://ai.google.dev/tutorials/rest_quickstart)
- [REST API Reference](https://ai.google.dev/models/gemini-2-0-flash)
- [API Error Handling](https://ai.google.dev/docs/api_errors)

---

## ✨ What's Next?

1. **Test the chatbot** - Try the AI Chat feature
2. **Monitor performance** - Check console for issues
3. **Customize responses** - Edit system prompt in gemini.js
4. **Add analytics** - Track user questions
5. **Improve fallback** - Expand knowledge base

---

**🎉 Your Gemini ChatBot is Ready!**

Start chatting: `CareerPath AI → AI Chat`

---

**Need Help?**
1. Check browser console (F12) for errors
2. Verify API key in js/gemini.js
3. Try a simple test message first
4. Review GEMINI_INTEGRATION.md for detailed guide

**Last Updated:** March 17, 2026
