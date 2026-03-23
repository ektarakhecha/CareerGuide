// ============================================================
// GEMINI AI API SERVICE
// ============================================================

class GeminiService {
  constructor(apiKey, modelName = "gemini-2.0-flash") {
    this.apiKey = apiKey;
    this.modelName = modelName;
    this.apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent`;
    this.conversationHistory = [];
    this.initialized = false;
    
    // Validate API key format
    if (!apiKey || apiKey.length < 20) {
      console.error("⚠️ Invalid or missing Gemini API key");
    }
  }

  /**
   * Verify API key is valid by making a test call
   * @returns {Promise<boolean>} - True if API key is valid
   */
  async verifyApiKey() {
    try {
      const response = await fetch(`${this.apiEndpoint}?key=${this.apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: "Hello" }] }]
        })
      });

      if (response.ok) {
        this.initialized = true;
        console.log("✓ Gemini API key verified successfully");
        return true;
      } else {
        const errorData = await response.json();
        console.error("✗ Gemini API verification failed:", errorData.error?.message);
        return false;
      }
    } catch (error) {
      console.error("✗ Gemini API connection failed:", error.message);
      return false;
    }
  }

  /**
   * Send a message to Gemini AI and get a response
   * @param {string} userMessage - User's message
   * @param {string} context - Context about the career guidance platform
   * @returns {Promise<string>} - AI response
   */
  async sendMessage(userMessage, context = "") {
    if (!this.initialized) {
      throw new Error("Gemini API not initialized. Call verifyApiKey() first.");
    }

    try {
      // Add user message to history
      this.conversationHistory.push({
        role: "user",
        parts: [{ text: userMessage }]
      });

      // Build system prompt for career guidance context
      const systemPrompt = `You are CareerBot, an expert AI career advisor for Indian students. You provide personalized career guidance based on:
- Career profiles, salaries, and demand in India
- Learning roadmaps and skill requirements
- Comparison between government and private sector careers
- Future career trends for 2030
- Exams like UPSC, SSC, Banking, etc.

${context ? `Current user context: ${context}` : ""}

Keep responses concise, encouraging, and actionable. Use emojis to make responses engaging. When discussing careers, include:
- Salary ranges (in LPA - Lakhs Per Annum)
- Key skills needed
- Learning path or certifications
- Growth potential

Always be supportive and motivating. If asked about non-career topics, politely redirect to career discussions.`;

      // Prepare the request payload
      const requestBody = {
        contents: [
          {
            role: "user",
            parts: [{ text: systemPrompt }]
          },
          ...this.conversationHistory
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 500
        },
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
      };

      // Make API request
      const response = await fetch(`${this.apiEndpoint}?key=${this.apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Gemini API Error:", errorData);
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || "Unknown error"}`);
      }

      const data = await response.json();

      // Extract the response text
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const botResponse = data.candidates[0].content.parts[0].text;
        
        // Add bot response to history
        this.conversationHistory.push({
          role: "model",
          parts: [{ text: botResponse }]
        });

        // Keep history manageable (last 20 messages)
        if (this.conversationHistory.length > 20) {
          this.conversationHistory = this.conversationHistory.slice(-20);
        }

        return botResponse;
      } else {
        throw new Error("Invalid response format from Gemini API");
      }
    } catch (error) {
      console.error("Gemini Service Error:", error);
      throw error;
    }
  }

  /**
   * Reset conversation history
   */
  resetHistory() {
    this.conversationHistory = [];
  }

  /**
   * Get conversation history
   */
  getHistory() {
    return this.conversationHistory;
  }

  /**
   * Change the model name (for API version testing)
   * @param {string} modelName - New model name (e.g., "gemini-2.0-flash", "gemini-1.5-flash")
   */
  setModel(modelName) {
    this.modelName = modelName;
    this.apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent`;
    this.initialized = false;
  }
}

// Initialize Gemini service with API key
// API KEY: AIzaSyDnq_dVRhVcgycbSxfhqiUjQwcLBhrmhBU
// MODEL: gemini-2.0-flash (stable), or gemini-1.5-flash, or gemini-3-flash-preview
// ⚠️ SECURITY WARNING: Never expose API keys in production. Use environment variables or backend proxy.
const GEMINI_API_KEY = "AIzaSyDnq_dVRhVcgycbSxfhqiUjQwcLBhrmhBU";
const GEMINI_MODEL = "gemini-2.0-flash"; // Can be changed to other valid models

let geminiService = null;

async function initializeGemini() {
  if (!geminiService) {
    geminiService = new GeminiService(GEMINI_API_KEY, GEMINI_MODEL);
    // Verify the API key on initialization
    const isValid = await geminiService.verifyApiKey();
    if (!isValid) {
      console.warn("⚠️ Gemini API verification failed. Chatbot will use fallback mode.");
    }
  }
  return geminiService;
}
