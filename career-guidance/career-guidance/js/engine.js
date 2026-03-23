// ============================================================
// CAREER GUIDANCE PLATFORM — ENGINE MODULE
// ============================================================

class CareerEngine {
  constructor() {
    this.userProfile = {
      interests: [],
      strengths: [],
      academicLevel: '',
      workStyle: '',
      careerGoals: [],
      personality: [],
      constraints: [],
      assessmentResults: { personality: {}, aptitude: {}, scenario: {} }
    };
    this.recommendations = [];
  }

  // ----------------------------------------------------------
  // Profile Management
  // ----------------------------------------------------------
  updateProfile(section, data) {
    if (Array.isArray(this.userProfile[section])) {
      this.userProfile[section] = data;
    } else {
      this.userProfile[section] = data;
    }
    this.generateRecommendations();
  }

  setAssessmentResult(type, questionId, value) {
    if (!this.userProfile.assessmentResults[type]) {
      this.userProfile.assessmentResults[type] = {};
    }
    this.userProfile.assessmentResults[type][questionId] = value;
  }

  // ----------------------------------------------------------
  // Career Matching Algorithm
  // ----------------------------------------------------------
  generateRecommendations() {
    const scores = CAREERS.map(career => {
      let score = 0;
      let reasons = [];

      // Interest matching (weight: 35%)
      const interestScore = this.calculateInterestMatch(career);
      score += interestScore * 0.35;
      if (interestScore > 50) reasons.push("Strong interest alignment");

      // Work style matching (weight: 20%)
      const workStyleScore = this.calculateWorkStyleMatch(career);
      score += workStyleScore * 0.20;
      if (workStyleScore > 50) reasons.push("Matching work style preference");

      // Personality matching (weight: 20%)
      const personalityScore = this.calculatePersonalityMatch(career);
      score += personalityScore * 0.20;
      if (personalityScore > 50) reasons.push("Personality fit");

      // Career goals matching (weight: 15%)
      const goalsScore = this.calculateGoalsMatch(career);
      score += goalsScore * 0.15;
      if (goalsScore > 50) reasons.push("Aligned with career goals");

      // Assessment bonus (weight: 10%)
      const assessmentScore = this.calculateAssessmentBonus(career);
      score += assessmentScore * 0.10;
      if (assessmentScore > 50) reasons.push("Assessment results support this");

      return {
        career,
        score: Math.min(Math.round(score), 99),
        reasons,
        skillGap: this.analyzeSkillGap(career)
      };
    });

    this.recommendations = scores.sort((a, b) => b.score - a.score);
    return this.recommendations;
  }

  calculateInterestMatch(career) {
    if (!this.userProfile.interests.length) return 30;
    
    const matchingInterests = this.userProfile.interests.filter(interest => {
      const interestLower = interest.toLowerCase();
      return career.matchCriteria.interests.some(ci => 
        ci.includes(interestLower) || interestLower.includes(ci)
      ) || career.tags.some(tag => 
        tag.includes(interestLower) || interestLower.includes(tag)
      );
    });

    return Math.min((matchingInterests.length / Math.max(this.userProfile.interests.length, 1)) * 100, 100);
  }

  calculateWorkStyleMatch(career) {
    if (!this.userProfile.workStyle) return 30;
    const wsLower = this.userProfile.workStyle.toLowerCase();
    return career.matchCriteria.workStyle.some(ws => ws.includes(wsLower) || wsLower.includes(ws)) ? 80 : 20;
  }

  calculatePersonalityMatch(career) {
    if (!this.userProfile.personality.length) return 30;
    
    const matches = this.userProfile.personality.filter(p => {
      const pLower = p.toLowerCase();
      return career.matchCriteria.personality.some(cp => 
        cp.includes(pLower) || pLower.includes(cp)
      );
    });

    return Math.min((matches.length / Math.max(career.matchCriteria.personality.length, 1)) * 100, 100);
  }

  calculateGoalsMatch(career) {
    if (!this.userProfile.careerGoals.length) return 30;
    
    let score = 30;
    
    if (this.userProfile.careerGoals.includes('money') && career.salary.avg > 1500000) score += 25;
    if (this.userProfile.careerGoals.includes('stability') && career.type === 'government') score += 25;
    if (this.userProfile.careerGoals.includes('innovation') && career.category === 'tech') score += 25;
    if (this.userProfile.careerGoals.includes('government') && (career.type === 'government' || career.type === 'both')) score += 30;
    if (this.userProfile.careerGoals.includes('growth') && career.demand.trend === 'rising') score += 20;
    if (this.userProfile.careerGoals.includes('creativity') && career.category === 'creative') score += 25;
    
    return Math.min(score, 100);
  }

  calculateAssessmentBonus(career) {
    const results = this.userProfile.assessmentResults;
    let score = 30;
    
    // Count relevant assessment answers
    const allValues = [
      ...Object.values(results.personality || {}),
      ...Object.values(results.aptitude || {}),
      ...Object.values(results.scenario || {})
    ];

    if (allValues.length === 0) return score;

    // Map assessment values to career categories
    const techValues = ['tech', 'analytical', 'tech-advocate', 'entrepreneur-tech', 'implementer', 'action-oriented'];
    const creativeValues = ['creative', 'visual-thinker', 'passion-driven'];
    const socialValues = ['social', 'social-impact', 'education-oriented', 'communicator', 'empathetic'];
    const govValues = ['governance', 'humanities', 'stability-seeker', 'management'];
    const financeValues = ['finance', 'finance-oriented', 'pragmatic', 'financial'];
    const scienceValues = ['science', 'researcher', 'medical'];

    const countMatches = (values) => allValues.filter(v => values.includes(v)).length;

    if (career.category === 'tech') score += countMatches(techValues) * 8;
    if (career.category === 'creative') score += countMatches(creativeValues) * 10;
    if (career.category === 'government') score += countMatches(govValues) * 10;
    if (career.category === 'finance') score += countMatches(financeValues) * 10;
    if (career.category === 'medical') score += countMatches(scienceValues) * 10;
    if (career.category === 'marketing') score += countMatches(creativeValues) * 6 + countMatches(socialValues) * 6;

    // Personality traits
    if (allValues.includes('introvert') && career.matchCriteria.personality.includes('introvert')) score += 10;
    if (allValues.includes('extrovert') && career.matchCriteria.personality.includes('extrovert')) score += 10;
    if (allValues.includes('leader') && career.matchCriteria.personality.includes('leader')) score += 10;
    if (allValues.includes('logical') && career.matchCriteria.personality.includes('logical')) score += 10;

    return Math.min(score, 100);
  }

  // ----------------------------------------------------------
  // Skill Gap Analysis
  // ----------------------------------------------------------
  analyzeSkillGap(career) {
    const userSkills = this.userProfile.strengths.map(s => s.toLowerCase());
    
    const analysis = career.requiredSkills.map(skill => {
      const skillLower = skill.toLowerCase();
      const hasSkill = userSkills.some(us => 
        skillLower.includes(us) || us.includes(skillLower) ||
        skillLower.split(/[\s/()]+/).some(word => us.includes(word)) ||
        us.split(/[\s/()]+/).some(word => skillLower.includes(word))
      );
      
      return {
        skill,
        status: hasSkill ? 'have' : 'need',
        priority: hasSkill ? 'low' : 'high'
      };
    });

    return {
      skills: analysis,
      haveCount: analysis.filter(a => a.status === 'have').length,
      needCount: analysis.filter(a => a.status === 'need').length,
      readiness: Math.round((analysis.filter(a => a.status === 'have').length / analysis.length) * 100)
    };
  }

  // ----------------------------------------------------------
  // Get top N recommendations
  // ----------------------------------------------------------
  getTopRecommendations(n = 5) {
    if (this.recommendations.length === 0) {
      this.generateRecommendations();
    }
    return this.recommendations.slice(0, n);
  }

  // ----------------------------------------------------------
  // Get career by ID
  // ----------------------------------------------------------
  getCareerById(id) {
    return CAREERS.find(c => c.id === id);
  }

  // ----------------------------------------------------------
  // Filter careers by type
  // ----------------------------------------------------------
  getCareersByType(type) {
    if (type === 'all') return CAREERS;
    return CAREERS.filter(c => c.type === type || c.type === 'both');
  }

  // ----------------------------------------------------------
  // Resume Data Generator
  // ----------------------------------------------------------
  generateResumeData() {
    const profile = this.userProfile;
    const topCareer = this.recommendations[0]?.career;

    return {
      objective: `Aspiring ${topCareer?.title || 'Professional'} with a passion for ${profile.interests.slice(0, 3).join(', ') || 'learning and growth'}. Seeking opportunities to leverage my strengths in ${profile.strengths.slice(0, 3).join(', ') || 'various domains'} to build a successful career.`,
      skills: {
        technical: profile.strengths,
        soft: profile.personality
      },
      education: profile.academicLevel,
      careerObjective: profile.careerGoals,
      suggestedSections: [
        'Education',
        'Skills',
        'Projects',
        'Certifications',
        'Internships',
        'Achievements',
        'Extra-curricular Activities'
      ]
    };
  }
}

// ============================================================
// CHATBOT ENGINE
// ============================================================

class ChatbotEngine {
  constructor() {
    this.history = [];
    this.isFirstMessage = true;
    this.geminiReady = false;
    this.useGemini = true;
    
    // Initialize Gemini when the engine is created
    this.initializeGeminiAsync();
  }

  /**
   * Initialize Gemini asynchronously
   */
  async initializeGeminiAsync() {
    try {
      const service = await initializeGemini();
      if (service && service.initialized) {
        this.geminiReady = true;
        console.log("✓ Gemini AI Service initialized successfully");
      } else {
        console.warn("⚠ Gemini service initialized but verification pending");
        this.geminiReady = false;
      }
    } catch (error) {
      console.warn("Gemini initialization error, using fallback mode:", error);
      this.geminiReady = false;
    }
  }

  /**
   * Process message with Gemini AI (primary method)
   * @param {string} message - User's message
   * @returns {Promise<string>} - Response from Gemini AI
   */
  async processMessageWithGemini(message) {
    try {
      if (!this.geminiReady || !geminiService) {
        throw new Error("Gemini service not ready");
      }

      // Get user profile context for better recommendations
      const context = this.buildUserContext();
      
      const response = await geminiService.sendMessage(message, context);
      this.history.push({ role: 'user', content: message });
      this.history.push({ role: 'bot', content: response });
      
      return response;
    } catch (error) {
      console.error("Gemini API error, falling back to knowledge base:", error);
      // Fall back to knowledge base
      return this.processMessageWithFallback(message);
    }
  }

  /**
   * Process message with fallback knowledge base
   * @param {string} message - User's message
   * @returns {string} - Response from knowledge base
   */
  processMessageWithFallback(message) {
    const msg = message.toLowerCase().trim();
    this.history.push({ role: 'user', content: message });

    let response;

    if (this.isFirstMessage || msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      response = CHATBOT_KNOWLEDGE.greetings[Math.floor(Math.random() * CHATBOT_KNOWLEDGE.greetings.length)];
      this.isFirstMessage = false;
    } else if (msg.includes('cyber') || msg.includes('security') || msg.includes('hacking') || msg.includes('ethical hack')) {
      response = CHATBOT_KNOWLEDGE["cyber security"];
    } else if (msg.includes('upsc') || msg.includes('ias') || msg.includes('ips') || msg.includes('civil service')) {
      response = CHATBOT_KNOWLEDGE["upsc"];
    } else if (msg.includes('data scien') || msg.includes('data analyst') || msg.includes('machine learning') || msg.includes('ml')) {
      response = CHATBOT_KNOWLEDGE["data science"];
    } else if (msg.includes('software') || msg.includes('developer') || msg.includes('programming') || msg.includes('coder') || msg.includes('coding')) {
      response = CHATBOT_KNOWLEDGE["software engineering"];
    } else if (msg.includes('government') || msg.includes('sarkari') || msg.includes('govt') || msg.includes('ssc')) {
      response = CHATBOT_KNOWLEDGE["government jobs"];
    } else if (msg.includes('salary') || msg.includes('package') || msg.includes('pay') || msg.includes('ctc') || msg.includes('earning')) {
      response = CHATBOT_KNOWLEDGE["salary"];
    } else if (msg.includes('career') && (msg.includes('best') || msg.includes('top') || msg.includes('2030') || msg.includes('future'))) {
      response = "🚀 **Top Careers for the Future (2030):**\n\n1. 🤖 AI/ML Engineer (40% growth)\n2. 🛡️ Cyber Security Specialist (35% growth)\n3. ⚛️ Quantum Computing Engineer (30% growth)\n4. 📊 Data Scientist (28% growth)\n5. ☁️ Cloud Architect (25% growth)\n6. ✨ Prompt Engineer (50% growth)\n\nThese careers combine high demand, excellent salaries, and future-proof skills!";
    } else if (msg.includes('help') || msg.includes('what can you do') || msg.includes('features')) {
      response = "🤖 **Here's what I can help you with:**\n\n1. 💼 Career recommendations\n2. 💰 Salary comparisons\n3. 📚 Learning roadmaps\n4. 🏛️ Government vs Private career paths\n5. 🔮 Future career predictions\n6. 🛡️ Specific career deep-dives\n7. 📝 Exam preparation guidance\n\n**Try asking:**\n- 'Is cyber security good for me?'\n- 'What's the salary of a data scientist?'\n- 'Should I prepare for UPSC or go into IT?'\n- 'What are the best careers in 2030?'";
    } else if (msg.includes('thank')) {
      response = "You're welcome! 😊 Remember, the best career is one that matches your skills, interests, AND values. Feel free to ask more anytime! 🚀";
    } else {
      response = CHATBOT_KNOWLEDGE["default"];
    }

    this.history.push({ role: 'bot', content: response });
    return response;
  }

  /**
   * Process message - for backward compatibility
   * Uses fallback mode for immediate response
   * @param {string} message - User's message
   * @returns {string} - Response
   */
  processMessage(message) {
    // For synchronous calls, use fallback
    return this.processMessageWithFallback(message);
  }

  /**
   * Build user context for Gemini
   * @returns {string} - User context string
   */
  buildUserContext() {
    if (typeof careerEngine === 'undefined') return "";
    
    const profile = careerEngine.userProfile;
    const parts = [];
    
    if (profile.interests.length > 0) {
      parts.push(`Interests: ${profile.interests.join(', ')}`);
    }
    if (profile.strengths.length > 0) {
      parts.push(`Strengths: ${profile.strengths.join(', ')}`);
    }
    if (profile.academicLevel) {
      parts.push(`Academic Level: ${profile.academicLevel}`);
    }
    if (profile.workStyle) {
      parts.push(`Preferred Work Style: ${profile.workStyle}`);
    }
    
    return parts.length > 0 ? parts.join(" | ") : "";
  }

  /**
   * Reset conversation history
   */
  resetHistory() {
    this.history = [];
    this.isFirstMessage = true;
    if (geminiService) {
      geminiService.resetHistory();
    }
  }

  /**
   * Get conversation history
   */
  getHistory() {
    return this.history;
  }
}

// Initialize engines
const careerEngine = new CareerEngine();
const chatbotEngine = new ChatbotEngine();
