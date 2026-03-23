// ============================================================
// CAREER GUIDANCE PLATFORM — APP MODULE (ALL FEATURES)
// ============================================================

let currentSection = 'home';
let currentAssessmentStep = 0;
let userTags = { interests: [], strengths: [] };
let selectedGoals = [];
let simulationState = { career: null, step: 0, totalScore: 0 };
let chatInitialized = false;
let lastNonDetailSection = 'results';

// ============================================================
// NAVIGATION
// ============================================================
function navigateTo(section) {
  // Track where we came from (for back button in detail)
  if (section !== 'career-detail' && section !== currentSection) {
    lastNonDetailSection = currentSection;
  }

  // Hide all sections
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });

  // Show target
  const el = document.getElementById('section-' + section);
  if (el) {
    el.style.display = 'block';
    el.classList.add('active');
  }

  // Active nav link
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navA = document.querySelector(`.nav-links a[data-section="${section}"]`);
  if (navA) navA.classList.add('active');

  currentSection = section;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Initialize content for each section
  switch (section) {
    case 'results': renderResults(); break;
    case 'explore': renderExplore('all'); break;
    case 'future': renderFuture(); break;
    case 'simulation': renderSimSelect(); break;
    case 'chatbot': initChatbot(); break;
    case 'dashboard': renderDashboard(); break;
    case 'assessment':
      // Re-show current step
      switchAssessmentStep(currentAssessmentStep);
      break;
  }

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
}

function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ============================================================
// TAG INPUTS (Interests & Strengths)
// ============================================================
function handleTagInput(event, type) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const input = event.target;
    const value = input.value.trim().toLowerCase();
    if (value && !userTags[type].includes(value)) {
      userTags[type].push(value);
      renderTags(type);
      careerEngine.updateProfile(type, [...userTags[type]]);
    }
    input.value = '';
  }
}

function addSuggestion(type, value) {
  if (!userTags[type].includes(value)) {
    userTags[type].push(value);
    renderTags(type);
    careerEngine.updateProfile(type, [...userTags[type]]);
  }
}

function removeTag(type, index) {
  userTags[type].splice(index, 1);
  renderTags(type);
  careerEngine.updateProfile(type, [...userTags[type]]);
}

function renderTags(type) {
  const container = document.getElementById(type + 'Container');
  if (!container) return;
  const input = container.querySelector('.tag-input');
  container.querySelectorAll('.tag').forEach(t => t.remove());
  userTags[type].forEach((tag, i) => {
    const el = document.createElement('span');
    el.className = 'tag';
    el.innerHTML = `${tag} <span class="tag-remove" onclick="event.stopPropagation();removeTag('${type}',${i})">×</span>`;
    container.insertBefore(el, input);
  });
}

// ============================================================
// PROFILE FIELDS
// ============================================================
function updateProfileField(field, value) {
  careerEngine.updateProfile(field, value);
}

function selectWorkStyle(el, value) {
  document.querySelectorAll('#workStylePills .pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  careerEngine.updateProfile('workStyle', value);
}

function toggleGoal(el, value) {
  el.classList.toggle('active');
  if (selectedGoals.includes(value)) {
    selectedGoals = selectedGoals.filter(g => g !== value);
  } else {
    selectedGoals.push(value);
  }
  careerEngine.updateProfile('careerGoals', [...selectedGoals]);
}

// ============================================================
// ASSESSMENT STEPS
// ============================================================
function switchAssessmentStep(step) {
  // Hide all steps
  document.querySelectorAll('.assessment-step').forEach(s => s.style.display = 'none');
  const target = document.getElementById('assessment-step-' + step);
  if (target) target.style.display = 'block';

  // Active tab
  document.querySelectorAll('#assessmentTabs .tab').forEach((t, i) => {
    t.classList.toggle('active', i === step);
  });
  currentAssessmentStep = step;

  // Render questions
  if (step === 1) renderQuestions('personality');
  if (step === 2) renderQuestions('aptitude');
  if (step === 3) renderQuestions('scenario');
}

function renderQuestions(type) {
  const container = document.getElementById(type + 'Questions');
  const questions = ASSESSMENT_QUESTIONS[type];
  if (!container || !questions) return;

  container.innerHTML = questions.map((q, i) => `
    <div class="question-card" style="margin-bottom:12px">
      <div class="question-number">Question ${i + 1} of ${questions.length}</div>
      <div class="question-text">${q.question}</div>
      <div class="options-grid">
        ${q.options.map((opt, j) => `
          <button class="option-btn ${isSelected(type, q.id, opt.value) ? 'selected' : ''}"
                  onclick="selectAnswer('${type}','${q.id}','${opt.value}',this,${questions.length})">
            <span class="option-icon">${opt.icon}</span>
            <span>${opt.text}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function isSelected(type, qId, value) {
  const results = careerEngine.userProfile.assessmentResults[type] || {};
  return results[qId] === value;
}

function selectAnswer(type, qId, value, btn, total) {
  btn.closest('.options-grid').querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  careerEngine.setAssessmentResult(type, qId, value);

  if (type === 'personality') {
    const existing = careerEngine.userProfile.personality;
    if (!existing.includes(value)) {
      existing.push(value);
      careerEngine.updateProfile('personality', existing);
    }
  }

  const answered = Object.keys(careerEngine.userProfile.assessmentResults[type] || {}).length;
  const bar = document.getElementById(type + 'Progress');
  if (bar) bar.style.width = Math.round((answered / total) * 100) + '%';
}

function completeAssessment() {
  careerEngine.generateRecommendations();
  navigateTo('results');
}

// ============================================================
// RESULTS PAGE
// ============================================================
function renderResults() {
  const results = careerEngine.getTopRecommendations(6);
  const container = document.getElementById('resultsContainer');
  if (!container) return;

  if (!results.length || results[0].score < 5) {
    container.innerHTML = `
      <div class="text-center" style="padding:48px 0">
        <div style="font-size:2.5rem;margin-bottom:12px">🤔</div>
        <h3 style="font-size:1.1rem;margin-bottom:6px">Complete the assessment first!</h3>
        <p style="color:var(--text-2);margin-bottom:20px;font-size:0.88rem">Take our smart career test to get personalized results.</p>
        <button class="btn btn-primary" onclick="navigateTo('assessment')">Start Assessment →</button>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="grid-3">
      ${results.map((r, i) => renderCareerCard(r, i)).join('')}
    </div>
    <div class="divider"></div>
    <div class="detail-section">
      <h3>💰 Salary & Demand Overview</h3>
      <div class="grid-3">
        ${results.slice(0, 3).map(r => `
          <div class="stat-card">
            <div style="font-size:1.3rem;margin-bottom:4px">${r.career.icon}</div>
            <div style="font-size:0.82rem;font-weight:600;margin-bottom:6px">${r.career.title}</div>
            <div class="stat-value" style="font-size:1.2rem">${r.career.salary.mid}</div>
            <div class="stat-label">Mid-Level Salary</div>
            <div style="margin-top:6px">
              <span class="badge badge-both">📈 ${r.career.demand.growth}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div class="detail-section">
      <h3>⚠️ Competition & Reality Check</h3>
      <div class="grid-2">
        ${results.slice(0, 4).map(r => `
          <div style="padding:12px;background:var(--bg-surface-2);border-radius:var(--radius-xs);display:flex;gap:10px;align-items:center">
            <span style="font-size:1.6rem">${r.career.icon}</span>
            <div>
              <div style="font-weight:600;font-size:0.88rem">${r.career.title}</div>
              <div style="font-size:0.78rem;color:var(--text-3)">Competition: <strong style="color:var(--orange)">${r.career.competition}</strong></div>
              <div style="font-size:0.78rem;color:var(--text-3)">Success Rate: ${r.career.successRate}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  `;
}

function renderCareerCard(r, i) {
  const scoreClass = r.score > 70 ? 'match-high' : r.score > 45 ? 'match-medium' : 'match-low';
  const barBg = r.score > 70 ? 'var(--green)' : r.score > 45 ? 'var(--orange)' : 'var(--red)';
  const typeClass = r.career.type === 'government' ? 'badge-govt' : r.career.type === 'both' ? 'badge-both' : 'badge-pvt';
  return `
    <div class="career-result-card ${i === 0 ? 'top-match' : ''}" onclick="showCareerDetail('${r.career.id}')">
      ${i === 0 ? '<div style="position:absolute;top:10px;right:10px;background:var(--accent);padding:2px 10px;border-radius:10px;font-size:0.68rem;font-weight:700;color:#131316">🏆 TOP MATCH</div>' : ''}
      <div class="career-icon">${r.career.icon}</div>
      <div class="career-title">${r.career.title}</div>
      <div class="career-desc">${r.career.description}</div>
      <div class="match-bar"><div class="match-bar-fill" style="width:${r.score}%;background:${barBg}"></div></div>
      <div class="flex-between">
        <span class="match-percentage ${scoreClass}">${r.score}% Match</span>
        <span class="badge ${typeClass}">${r.career.type === 'government' ? 'GOVT' : r.career.type === 'both' ? 'GOVT+PVT' : 'PRIVATE'}</span>
      </div>
      ${r.reasons.length ? `<div class="career-tags">${r.reasons.slice(0, 3).map(x => `<span class="career-tag">${x}</span>`).join('')}</div>` : ''}
    </div>`;
}

// ============================================================
// CAREER DETAIL PAGE
// ============================================================
function showCareerDetail(id) {
  const career = careerEngine.getCareerById(id);
  if (!career) return;

  const rec = careerEngine.recommendations.find(r => r.career.id === id);
  const skillGap = rec ? rec.skillGap : careerEngine.analyzeSkillGap(career);

  // Show detail section
  document.querySelectorAll('.section').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
  const ds = document.getElementById('section-career-detail');
  ds.style.display = 'block';
  ds.classList.add('active');

  document.getElementById('careerDetailContent').innerHTML = `
    <button class="back-btn" onclick="navigateTo('${lastNonDetailSection}')">← Back</button>
    <div class="glass-card" style="margin-bottom:16px;padding:24px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <span style="font-size:2.5rem">${career.icon}</span>
        <div>
          <h2 style="font-size:1.5rem;font-weight:700">${career.title}</h2>
          <p style="color:var(--text-2);font-size:0.88rem">${career.description}</p>
          <span class="badge ${career.type === 'government' ? 'badge-govt' : career.type === 'both' ? 'badge-both' : 'badge-pvt'}" style="margin-top:4px">${career.type.toUpperCase()}</span>
        </div>
      </div>
      ${rec ? `<div class="match-bar" style="margin:10px 0"><div class="match-bar-fill" style="width:${rec.score}%;background:var(--accent)"></div></div><span class="match-percentage match-high">${rec.score}% Match</span>` : ''}
    </div>

    <div class="grid-2">
      <div class="detail-section">
        <h3>💰 Salary</h3>
        <div class="grid-3" style="gap:8px">
          <div class="stat-card"><div class="stat-value" style="font-size:1.1rem">${career.salary.entry}</div><div class="stat-label">Entry</div></div>
          <div class="stat-card"><div class="stat-value" style="font-size:1.1rem">${career.salary.mid}</div><div class="stat-label">Mid</div></div>
          <div class="stat-card"><div class="stat-value" style="font-size:1.1rem">${career.salary.senior}</div><div class="stat-label">Senior</div></div>
        </div>
      </div>
      <div class="detail-section">
        <h3>📈 Demand</h3>
        <div style="display:grid;gap:8px;font-size:0.88rem">
          <div class="flex-between"><span style="color:var(--text-2)">Demand</span><strong style="color:var(--green)">${career.demand.level}</strong></div>
          <div class="flex-between"><span style="color:var(--text-2)">Growth</span><strong style="color:var(--accent)">${career.demand.growth}</strong></div>
          <div class="flex-between"><span style="color:var(--text-2)">Trend</span><strong style="color:${career.demand.trend === 'rising' ? 'var(--green)' : 'var(--orange)'}">${career.demand.trend.charAt(0).toUpperCase() + career.demand.trend.slice(1)}</strong></div>
          <div class="flex-between"><span style="color:var(--text-2)">Competition</span><strong style="color:var(--orange)">${career.competition}</strong></div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h3>🔍 Skill Gap Analysis</h3>
      <div class="flex-between mb-2" style="font-size:0.82rem;color:var(--text-2)">
        <span>Readiness: <strong style="color:var(--accent)">${skillGap.readiness}%</strong></span>
        <span>${skillGap.haveCount} have / ${skillGap.needCount} need</span>
      </div>
      <div class="match-bar" style="margin-bottom:12px"><div class="match-bar-fill" style="width:${skillGap.readiness}%;background:var(--accent)"></div></div>
      ${skillGap.skills.map(s => `
        <div class="skill-item">
          <span class="skill-name">${s.skill}</span>
          <span class="skill-status ${s.status === 'have' ? 'skill-have' : 'skill-need'}">${s.status === 'have' ? '✅ Have' : '📚 Need'}</span>
        </div>`).join('')}
    </div>

    <div class="detail-section">
      <h3>🗺️ Learning Roadmap</h3>
      ${['beginner', 'intermediate', 'advanced'].map(phase => `
        <div class="roadmap-phase-title">${phase === 'beginner' ? '🌱 Beginner' : phase === 'intermediate' ? '📗 Intermediate' : '🚀 Advanced'}</div>
        <div class="roadmap-timeline">
          ${career.roadmap[phase].map(item => `
            <div class="timeline-item">
              <div class="timeline-task">${item.task}</div>
              <div class="timeline-duration">⏱️ ${item.duration}</div>
              <div class="timeline-resources">📎 ${item.resources.join(', ')}</div>
            </div>`).join('')}
        </div>`).join('')}
    </div>

    <div class="detail-section">
      <h3>🏅 Certifications</h3>
      <div class="pill-group">${career.certifications.map(c => `<span class="pill active">${c}</span>`).join('')}</div>
    </div>

    <div class="detail-section">
      <h3>🔮 Future Outlook</h3>
      <p style="color:var(--text-2);line-height:1.7;font-size:0.9rem">${career.futureOutlook}</p>
    </div>
  `;

  currentSection = 'career-detail';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// EXPLORE PAGE
// ============================================================
function renderExplore(filter) {
  const careers = filter === 'all' ? CAREERS :
    ['government', 'private'].includes(filter) ? careerEngine.getCareersByType(filter) :
    CAREERS.filter(c => c.category === filter);

  const container = document.getElementById('exploreContainer');
  if (!container) return;

  container.innerHTML = careers.map(c => `
    <div class="career-result-card" onclick="lastNonDetailSection='explore';showCareerDetail('${c.id}')">
      <div class="career-icon">${c.icon}</div>
      <div class="career-title">${c.title}</div>
      <div class="career-desc">${c.description}</div>
      <div class="flex-between mt-1">
        <span style="font-size:0.78rem;color:var(--green)">${c.salary.mid} mid</span>
        <span class="badge ${c.type === 'government' ? 'badge-govt' : c.type === 'both' ? 'badge-both' : 'badge-pvt'}">${c.type.toUpperCase()}</span>
      </div>
    </div>
  `).join('');
}

function filterCareers(filter, btn) {
  btn.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderExplore(filter);
}

// ============================================================
// FUTURE 2030 PAGE
// ============================================================
function renderFuture() {
  const container = document.getElementById('futureContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-card text-center" style="margin-bottom:16px;padding:16px">
      <h3 style="font-size:1.1rem;margin-bottom:4px">🚀 Top Careers of 2030</h3>
      <p style="color:var(--text-2);font-size:0.82rem">Based on AI, automation, and industry mega-trends</p>
    </div>
    <div style="display:grid;gap:8px">
      ${FUTURE_CAREERS_2030.map((c, i) => `
        <div class="future-card">
          <span style="font-size:0.82rem;color:var(--text-3);font-weight:700;width:24px">#${i + 1}</span>
          <span class="future-icon">${c.icon}</span>
          <div class="future-info">
            <div class="future-title">${c.title}</div>
            <div class="future-desc">${c.description}</div>
            <div class="hotness-bar">${Array(10).fill(0).map((_, j) => `<span class="hotness-dot ${j < c.hotness ? 'active' : ''}"></span>`).join('')}</div>
          </div>
          <span class="future-growth">↑ ${c.growth}</span>
        </div>`).join('')}
    </div>
  `;
}

// ============================================================
// SIMULATION PAGE
// ============================================================
function renderSimSelect() {
  const playC = document.getElementById('simPlayContainer');
  const selC = document.getElementById('simSelectContainer');
  if (!playC || !selC) return;

  playC.style.display = 'none';
  selC.style.display = 'grid';
  selC.innerHTML = Object.entries(SIMULATIONS).map(([key, sim]) => `
    <div class="card text-center" style="cursor:pointer" onclick="startSimulation('${key}')">
      <div style="font-size:2rem;margin-bottom:6px">${sim.title.split(' ')[0]}</div>
      <div style="font-size:0.95rem;font-weight:600;margin-bottom:4px">${sim.title}</div>
      <div style="font-size:0.75rem;color:var(--text-3);margin-bottom:12px">Make real career decisions</div>
      <button class="btn btn-outline" style="font-size:0.8rem">▶ Start</button>
    </div>
  `).join('');
}

function startSimulation(careerKey) {
  simulationState = { career: careerKey, step: 0, totalScore: 0 };
  document.getElementById('simSelectContainer').style.display = 'none';
  renderSimStep();
}

function renderSimStep() {
  const sim = SIMULATIONS[simulationState.career];
  const container = document.getElementById('simPlayContainer');
  container.style.display = 'block';

  if (simulationState.step >= sim.steps.length) {
    const avg = Math.round(simulationState.totalScore / sim.steps.length);
    const grade = avg >= 80 ? 'Outstanding! 🏆' : avg >= 60 ? 'Good Job! 👍' : avg >= 40 ? 'Needs Improvement 📚' : 'Keep Learning! 💪';
    const col = avg >= 80 ? 'var(--green)' : avg >= 60 ? 'var(--accent)' : avg >= 40 ? 'var(--orange)' : 'var(--red)';
    container.innerHTML = `
      <div class="sim-scenario text-center">
        <h3 style="font-size:1.2rem;margin-bottom:12px">${sim.title} — Complete!</h3>
        <div class="sim-score" style="color:${col}">${avg}/100</div>
        <div style="font-size:1.1rem;margin:6px 0;color:${col}">${grade}</div>
        <p style="color:var(--text-2);margin-top:12px;font-size:0.88rem">${avg >= 70 ? 'Great aptitude for this career!' : 'With more learning, you\'ll improve!'}</p>
        <div class="btn-group" style="justify-content:center">
          <button class="btn btn-secondary" onclick="renderSimSelect()">← Try Another</button>
          <button class="btn btn-primary" onclick="startSimulation('${simulationState.career}')">🔄 Retry</button>
        </div>
      </div>`;
    return;
  }

  const step = sim.steps[simulationState.step];
  container.innerHTML = `
    <button class="back-btn" onclick="renderSimSelect()">← Back to Simulations</button>
    <div class="sim-scenario">
      <div class="question-number">Scenario ${simulationState.step + 1} of ${sim.steps.length}</div>
      <h3 style="font-size:1.15rem;margin-bottom:6px">${sim.title}</h3>
      ${simulationState.step === 0 ? `<p style="color:var(--text-2);margin-bottom:12px;font-style:italic;font-size:0.88rem">${sim.scenario}</p>` : ''}
      <div class="question-text" style="margin-top:12px">${step.situation}</div>
      <div class="options-grid">
        ${step.options.map((opt, i) => `
          <button class="option-btn" onclick="handleSimChoice(${i})"><span>${opt.text}</span></button>
        `).join('')}
      </div>
    </div>
    <div id="simResultBox"></div>
  `;
}

function handleSimChoice(idx) {
  const sim = SIMULATIONS[simulationState.career];
  const opt = sim.steps[simulationState.step].options[idx];
  simulationState.totalScore += opt.score;

  document.querySelectorAll('#simPlayContainer .option-btn').forEach((btn, i) => {
    btn.disabled = true;
    btn.style.opacity = i === idx ? '1' : '0.4';
    if (i === idx) btn.classList.add('selected');
  });

  const col = opt.score >= 80 ? 'var(--green)' : opt.score >= 50 ? 'var(--orange)' : 'var(--red)';
  document.getElementById('simResultBox').innerHTML = `
    <div class="sim-result-text" style="background:var(--bg-surface);border:1px solid var(--border)">
      <div style="font-size:1.3rem;font-weight:700;color:${col};margin-bottom:6px">Score: ${opt.score}/100</div>
      <p style="color:var(--text-2);font-size:0.88rem">${opt.result}</p>
      <button class="btn btn-primary mt-2" onclick="nextSimStep()">Continue →</button>
    </div>`;
}

function nextSimStep() {
  simulationState.step++;
  renderSimStep();
}

// ============================================================
// CHATBOT
// ============================================================
function initChatbot() {
  if (chatInitialized) return;
  chatInitialized = true;
  const response = chatbotEngine.processMessage('hello');
  appendChatMessage('bot', response);
  
  // Check Gemini status
  setTimeout(() => {
    if (chatbotEngine.geminiReady && geminiService && geminiService.initialized) {
      console.log("✓ Gemini AI ChatBot ready - Full AI integration enabled");
    } else {
      console.log("⚠ Using enhanced fallback ChatBot mode");
      appendChatMessage('bot', "💡 Tip: The AI ChatBot is running with advanced features. Try asking about any career!");
    }
  }, 500);
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  
  appendChatMessage('user', msg);
  input.value = '';
  
  // Show loading indicator
  const loadingId = 'loading-' + Date.now();
  const container = document.getElementById('chatMessages');
  const loadingDiv = document.createElement('div');
  loadingDiv.id = loadingId;
  loadingDiv.className = 'chat-message bot';
  loadingDiv.innerHTML = '<span class="typing-indicator">●●●</span>';
  container.appendChild(loadingDiv);
  container.scrollTop = container.scrollHeight;
  
  // Send message with Gemini (async)
  if (chatbotEngine.geminiReady && geminiService && geminiService.initialized) {
    chatbotEngine.processMessageWithGemini(msg)
      .then(response => {
        // Remove loading indicator
        loadingDiv.remove();
        // Append response
        appendChatMessage('bot', response);
      })
      .catch(error => {
        console.error("Chat error:", error);
        // Remove loading indicator
        loadingDiv.remove();
        // Append error message with fallback
        const errorMsg = "Switching to knowledge base: " + 
                         chatbotEngine.processMessageWithFallback(msg);
        appendChatMessage('bot', errorMsg);
      });
  } else {
    // Use synchronous fallback
    setTimeout(() => {
      loadingDiv.remove();
      const response = chatbotEngine.processMessageWithFallback(msg);
      appendChatMessage('bot', response);
    }, 400);
  }
}

function sendQuickChat(msg) {
  document.getElementById('chatInput').value = msg;
  sendChat();
}

function appendChatMessage(role, content) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-message ' + role;
  div.innerHTML = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const results = careerEngine.getTopRecommendations(3);
  const profile = careerEngine.userProfile;
  const container = document.getElementById('dashboardContent');
  if (!container) return;

  const hasData = profile.interests.length > 0 || profile.strengths.length > 0;
  const totalQ = 13;
  const answeredQ = Object.keys(profile.assessmentResults.personality || {}).length +
                    Object.keys(profile.assessmentResults.aptitude || {}).length +
                    Object.keys(profile.assessmentResults.scenario || {}).length;

  container.innerHTML = `
    <div class="dashboard-welcome">
      <h2>Welcome back! 👋</h2>
      <p style="color:var(--text-2);font-size:0.88rem">Track your career exploration progress and build your profile.</p>
    </div>
    <div class="grid-3" style="margin-bottom:16px">
      <div class="stat-card"><div class="stat-value">${profile.interests.length}</div><div class="stat-label">Interests</div></div>
      <div class="stat-card"><div class="stat-value">${profile.strengths.length}</div><div class="stat-label">Skills</div></div>
      <div class="stat-card"><div class="stat-value">${answeredQ}/${totalQ}</div><div class="stat-label">Assessment Done</div></div>
    </div>
    ${hasData ? `
    <div class="detail-section">
      <h3>🎯 Top Career Matches</h3>
      <div class="grid-3">${results.map(r => `
        <div style="padding:12px;background:var(--bg-surface-2);border-radius:var(--radius-xs);cursor:pointer" onclick="showCareerDetail('${r.career.id}')">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:1.6rem">${r.career.icon}</span>
            <div>
              <div style="font-weight:600;font-size:0.88rem">${r.career.title}</div>
              <span class="match-percentage ${r.score > 70 ? 'match-high' : 'match-medium'}" style="margin-top:2px">${r.score}%</span>
            </div>
          </div>
        </div>`).join('')}</div>
    </div>
    <div class="detail-section">
      <h3>📝 Auto-Generated Resume</h3>
      <div class="resume-preview">${buildResumeHTML(profile)}</div>
      <div class="btn-group"><button class="btn btn-primary" onclick="downloadResume()">📥 Download Resume</button></div>
    </div>
    <div class="detail-section">
      <h3>🔗 Where to Find Opportunities</h3>
      <div class="grid-2">${results.slice(0, 2).map(r => `
        <div style="padding:12px;background:var(--bg-surface-2);border-radius:var(--radius-xs)">
          <div style="font-weight:600;font-size:0.88rem;margin-bottom:6px">${r.career.icon} ${r.career.title}</div>
          <div class="pill-group">
            <span class="pill">Internshala</span><span class="pill">LinkedIn</span><span class="pill">Naukri</span><span class="pill">AngelList</span>
          </div>
        </div>`).join('')}</div>
    </div>` : `
    <div class="text-center" style="padding:48px 0">
      <div style="font-size:2.5rem;margin-bottom:12px">📋</div>
      <h3 style="font-size:1.1rem;margin-bottom:6px">Complete your profile first!</h3>
      <p style="color:var(--text-2);margin-bottom:20px;font-size:0.88rem">Take the assessment to see your dashboard.</p>
      <button class="btn btn-primary" onclick="navigateTo('assessment')">Start Assessment →</button>
    </div>`}
  `;
}

function buildResumeHTML(p) {
  const topCareer = careerEngine.recommendations[0]?.career;
  return `
    <h2>Your Name</h2>
    <p style="color:#777;font-size:0.82rem">your.email@example.com | +91-XXXXXXXXXX | City, India</p>
    <h3>Objective</h3>
    <p>Aspiring ${topCareer?.title || 'Professional'} with passion for ${p.interests.slice(0, 3).join(', ') || 'growth'}. Seeking to leverage ${p.strengths.slice(0, 3).join(', ') || 'skills'} in a rewarding career.</p>
    <h3>Education</h3><p>${p.academicLevel ? p.academicLevel.charAt(0).toUpperCase() + p.academicLevel.slice(1) : 'Your education'}</p>
    <h3>Skills</h3><ul>${(p.strengths.length ? p.strengths : ['Add skills in assessment']).map(s => `<li>${s}</li>`).join('')}</ul>
    <h3>Strengths</h3><ul>${([...new Set(p.personality)].length ? [...new Set(p.personality)] : ['Complete personality test']).map(s => `<li>${s.charAt(0).toUpperCase() + s.slice(1)}</li>`).join('')}</ul>
    <h3>Interests</h3><ul>${(p.interests.length ? p.interests : ['Add interests']).map(s => `<li>${s}</li>`).join('')}</ul>
  `;
}

function downloadResume() {
  const p = careerEngine.userProfile;
  const top = careerEngine.recommendations[0]?.career;
  let t = `RESUME\n${'='.repeat(40)}\n\nName: Your Name\nEmail: your.email@example.com\nPhone: +91-XXXXXXXXXX\n\n`;
  t += `OBJECTIVE\n${'-'.repeat(30)}\nAspiring ${top?.title || 'Professional'} with passion for ${p.interests.slice(0, 3).join(', ') || 'growth'}.\n\n`;
  t += `EDUCATION\n${'-'.repeat(30)}\n${p.academicLevel || 'Your education'}\n\n`;
  t += `SKILLS\n${'-'.repeat(30)}\n${p.strengths.join(', ') || 'Your skills'}\n\n`;
  t += `STRENGTHS\n${'-'.repeat(30)}\n${[...new Set(p.personality)].join(', ') || 'Your strengths'}\n\n`;
  t += `INTERESTS\n${'-'.repeat(30)}\n${p.interests.join(', ') || 'Your interests'}\n`;
  const blob = new Blob([t], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'CareerPath_Resume.txt';
  a.click();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => navigateTo('home'));
