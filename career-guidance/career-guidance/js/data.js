// ============================================================
// CAREER GUIDANCE PLATFORM — DATA MODULE
// ============================================================

const CAREERS = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    icon: "💻",
    category: "tech",
    type: "private",
    description: "Design, develop, and maintain software applications and systems.",
    tags: ["coding", "problem-solving", "logic", "technology"],
    requiredSkills: ["Programming (Python/Java/JS)", "Data Structures & Algorithms", "System Design", "Version Control (Git)", "Database Management", "API Development"],
    softSkills: ["Problem Solving", "Teamwork", "Communication", "Adaptability"],
    salary: { entry: "₹4-8 LPA", mid: "₹12-25 LPA", senior: "₹30-60+ LPA", avg: 1500000 },
    demand: { level: "Very High", growth: "22%", trend: "rising" },
    competition: "Moderate",
    successRate: "High (with consistent practice)",
    futureOutlook: "AI-augmented development will reshape the role by 2030, but demand remains strong.",
    roadmap: {
      beginner: [
        { task: "Learn HTML, CSS, JavaScript", duration: "2-3 months", resources: ["freeCodeCamp", "MDN Web Docs"] },
        { task: "Learn a programming language (Python/Java)", duration: "2-3 months", resources: ["Codecademy", "CS50 Harvard"] },
        { task: "Understand Data Structures & Algorithms", duration: "3-4 months", resources: ["GeeksforGeeks", "LeetCode"] },
        { task: "Build 2-3 small projects", duration: "2 months", resources: ["GitHub", "Personal Portfolio"] }
      ],
      intermediate: [
        { task: "Learn a framework (React/Spring/Django)", duration: "2-3 months", resources: ["Udemy", "Official Docs"] },
        { task: "Study System Design basics", duration: "2 months", resources: ["System Design Primer", "Grokking"] },
        { task: "Contribute to Open Source", duration: "Ongoing", resources: ["GitHub", "First Timers Only"] },
        { task: "Complete internships", duration: "3-6 months", resources: ["LinkedIn", "Internshala", "AngelList"] }
      ],
      advanced: [
        { task: "Master System Design & Architecture", duration: "3-6 months", resources: ["Designing Data-Intensive Applications"] },
        { task: "Specialize (Full Stack/Backend/ML)", duration: "6+ months", resources: ["Specialization courses"] },
        { task: "Get AWS/GCP/Azure certified", duration: "2-3 months", resources: ["Cloud provider training"] },
        { task: "Build production-grade projects", duration: "Ongoing", resources: ["Personal/Freelance projects"] }
      ]
    },
    certifications: ["AWS Certified Developer", "Google Associate Cloud Engineer", "Meta Front-End Developer"],
    matchCriteria: { interests: ["coding", "technology", "problem-solving", "computers", "math"], workStyle: ["analytical", "creative"], personality: ["introvert", "detail-oriented", "logical"] }
  },
  {
    id: "cyber-security",
    title: "Cyber Security Analyst",
    icon: "🛡️",
    category: "tech",
    type: "both",
    description: "Protect organizations from digital threats, identify vulnerabilities, and respond to security incidents.",
    tags: ["security", "hacking", "networks", "protection"],
    requiredSkills: ["Networking (TCP/IP, DNS)", "Linux Administration", "Ethical Hacking", "SIEM Tools", "Penetration Testing", "Incident Response"],
    softSkills: ["Attention to Detail", "Critical Thinking", "Communication", "Ethical Judgment"],
    salary: { entry: "₹5-8 LPA", mid: "₹15-30 LPA", senior: "₹35-70+ LPA", avg: 1800000 },
    demand: { level: "Very High", growth: "35%", trend: "rising" },
    competition: "Low-Moderate",
    successRate: "High (niche skill, growing demand)",
    futureOutlook: "Critical career by 2030 with increasing cyber threats and regulatory requirements.",
    roadmap: {
      beginner: [
        { task: "Learn Computer Networking fundamentals", duration: "2-3 months", resources: ["CompTIA Network+", "Cisco Networking Academy"] },
        { task: "Master Linux command line", duration: "1-2 months", resources: ["Linux Journey", "OverTheWire"] },
        { task: "Learn basic programming (Python)", duration: "2 months", resources: ["Automate the Boring Stuff"] },
        { task: "Study CompTIA Security+ material", duration: "2-3 months", resources: ["Professor Messer", "CompTIA Official"] }
      ],
      intermediate: [
        { task: "Practice on CTF platforms", duration: "Ongoing", resources: ["HackTheBox", "TryHackMe", "PicoCTF"] },
        { task: "Learn SIEM tools (Splunk/ELK)", duration: "2 months", resources: ["Splunk Free Training"] },
        { task: "Study Ethical Hacking (CEH)", duration: "3-4 months", resources: ["EC-Council", "Udemy"] },
        { task: "Get Security+ / CEH certified", duration: "2-3 months", resources: ["Official Cert Programs"] }
      ],
      advanced: [
        { task: "Master Penetration Testing (OSCP)", duration: "4-6 months", resources: ["Offensive Security"] },
        { task: "Specialize (Cloud Security/Malware Analysis)", duration: "6+ months", resources: ["SANS Institute"] },
        { task: "Bug Bounty Hunting", duration: "Ongoing", resources: ["HackerOne", "Bugcrowd"] },
        { task: "Get CISSP certified", duration: "3-4 months", resources: ["ISC²"] }
      ]
    },
    certifications: ["CompTIA Security+", "CEH", "OSCP", "CISSP"],
    matchCriteria: { interests: ["security", "hacking", "puzzles", "technology", "investigation"], workStyle: ["analytical", "practical"], personality: ["detail-oriented", "curious", "ethical"] }
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: "📊",
    category: "tech",
    type: "private",
    description: "Extract insights from complex data using statistics, machine learning, and analytical tools.",
    tags: ["data", "analytics", "machine-learning", "statistics"],
    requiredSkills: ["Python/R Programming", "Statistics & Probability", "Machine Learning", "SQL & Databases", "Data Visualization", "Deep Learning"],
    softSkills: ["Analytical Thinking", "Storytelling with Data", "Business Acumen", "Curiosity"],
    salary: { entry: "₹6-10 LPA", mid: "₹15-30 LPA", senior: "₹35-60+ LPA", avg: 2000000 },
    demand: { level: "Very High", growth: "28%", trend: "rising" },
    competition: "Moderate-High",
    successRate: "High (strong math background helps)",
    futureOutlook: "AI and automation will make data science even more integral to business decisions by 2030.",
    roadmap: {
      beginner: [
        { task: "Learn Python programming", duration: "2-3 months", resources: ["Python.org", "Kaggle Learn"] },
        { task: "Study Statistics & Probability", duration: "2-3 months", resources: ["Khan Academy", "StatQuest"] },
        { task: "Learn SQL fundamentals", duration: "1-2 months", resources: ["SQLZoo", "Mode Analytics"] },
        { task: "Data Visualization (Matplotlib/Tableau)", duration: "1-2 months", resources: ["Kaggle", "Tableau Public"] }
      ],
      intermediate: [
        { task: "Learn Machine Learning (Scikit-learn)", duration: "3-4 months", resources: ["Andrew Ng's ML Course", "fast.ai"] },
        { task: "Work on Kaggle competitions", duration: "Ongoing", resources: ["Kaggle Competitions"] },
        { task: "Study Feature Engineering", duration: "2 months", resources: ["Feature Engineering Book"] },
        { task: "Complete a data science internship", duration: "3-6 months", resources: ["Internshala", "LinkedIn"] }
      ],
      advanced: [
        { task: "Deep Learning (TensorFlow/PyTorch)", duration: "3-4 months", resources: ["deeplearning.ai", "fast.ai"] },
        { task: "NLP / Computer Vision specialization", duration: "4-6 months", resources: ["Hugging Face", "Papers With Code"] },
        { task: "MLOps & Model Deployment", duration: "2-3 months", resources: ["MLflow", "Docker", "AWS SageMaker"] },
        { task: "Publish research / Build portfolio", duration: "Ongoing", resources: ["Medium", "GitHub", "arXiv"] }
      ]
    },
    certifications: ["Google Data Analytics", "IBM Data Science", "AWS ML Specialty", "TensorFlow Developer"],
    matchCriteria: { interests: ["math", "data", "analytics", "research", "patterns"], workStyle: ["analytical", "creative"], personality: ["curious", "logical", "patient"] }
  },
  {
    id: "upsc-officer",
    title: "UPSC Civil Services (IAS/IPS/IFS)",
    icon: "🏛️",
    category: "government",
    type: "government",
    description: "Serve as an administrator in the Indian government, making policy decisions that impact millions.",
    tags: ["government", "administration", "public-service", "leadership"],
    requiredSkills: ["General Studies", "Current Affairs", "Essay Writing", "Optional Subject Mastery", "Interview Skills", "Administrative Knowledge"],
    softSkills: ["Leadership", "Decision Making", "Communication", "Empathy", "Integrity"],
    salary: { entry: "₹6-8 LPA + perks", mid: "₹12-18 LPA + perks", senior: "₹20-30 LPA + perks", avg: 1400000 },
    demand: { level: "Limited (fixed vacancies)", growth: "Stable", trend: "stable" },
    competition: "Extremely High",
    successRate: "Very Low (~0.1-0.2% selection rate)",
    futureOutlook: "Prestigious and stable career with significant societal impact. Digital governance expanding the role.",
    roadmap: {
      beginner: [
        { task: "Understand UPSC syllabus & pattern", duration: "1 month", resources: ["UPSC Official Site", "Insights IAS"] },
        { task: "Read NCERTs (6th-12th) for all subjects", duration: "3-4 months", resources: ["NCERT Official"] },
        { task: "Start reading newspapers (The Hindu/Indian Express)", duration: "Daily habit", resources: ["The Hindu", "Indian Express"] },
        { task: "Choose Optional Subject", duration: "1 month", resources: ["Previous year analysis", "Mentors"] }
      ],
      intermediate: [
        { task: "Complete standard reference books", duration: "4-6 months", resources: ["Laxmikanth", "Spectrum", "Shankar IAS Environment"] },
        { task: "Join a test series (Prelims)", duration: "6 months", resources: ["Vision IAS", "Forum IAS", "Insights"] },
        { task: "Practice Answer Writing (Mains)", duration: "6+ months", resources: ["Secure Initiative", "Test series"] },
        { task: "Current Affairs compilation", duration: "Monthly", resources: ["Yojana", "Kurukshetra", "PIB"] }
      ],
      advanced: [
        { task: "Give Mock Interviews", duration: "2-3 months", resources: ["Coaching centers", "Peer groups"] },
        { task: "Revise & refine all subjects", duration: "3-4 months", resources: ["Personal notes"] },
        { task: "Attempt UPSC Prelims", duration: "June", resources: ["UPSC Official"] },
        { task: "Mains preparation & writing practice", duration: "3-4 months", resources: ["Answer writing groups"] }
      ]
    },
    certifications: ["No formal certifications — UPSC CSE is the exam"],
    matchCriteria: { interests: ["governance", "public-service", "politics", "current-affairs", "leadership"], workStyle: ["social", "analytical"], personality: ["leader", "extrovert", "disciplined", "patient"] }
  },
  {
    id: "ssc-cgl",
    title: "SSC CGL Officer",
    icon: "📋",
    category: "government",
    type: "government",
    description: "Work in various government ministries and departments through the SSC Combined Graduate Level exam.",
    tags: ["government", "administrative", "accounting", "tax"],
    requiredSkills: ["Quantitative Aptitude", "English Language", "General Awareness", "Reasoning Ability", "Computer Proficiency", "Accounting (for some posts)"],
    softSkills: ["Discipline", "Time Management", "Attention to Detail", "Integrity"],
    salary: { entry: "₹4-6 LPA + perks", mid: "₹8-14 LPA + perks", senior: "₹16-24 LPA + perks", avg: 900000 },
    demand: { level: "Moderate (annual vacancies)", growth: "Stable", trend: "stable" },
    competition: "Very High",
    successRate: "Low (~1-2% selection rate)",
    futureOutlook: "Stable government career with job security and pension benefits.",
    roadmap: {
      beginner: [
        { task: "Understand SSC CGL exam pattern & syllabus", duration: "2 weeks", resources: ["SSC Official Site"] },
        { task: "Build strong Quant foundation", duration: "2-3 months", resources: ["RS Aggarwal", "Rakesh Yadav"] },
        { task: "Improve English (Grammar + Vocab)", duration: "2-3 months", resources: ["Wren & Martin", "SP Bakshi"] },
        { task: "Study General Awareness", duration: "Ongoing", resources: ["Lucent GK", "Daily newspapers"] }
      ],
      intermediate: [
        { task: "Advanced Reasoning & Aptitude", duration: "2-3 months", resources: ["RS Aggarwal Reasoning"] },
        { task: "Join Test Series (Tier 1)", duration: "3 months", resources: ["Testbook", "Adda247"] },
        { task: "Previous year papers practice", duration: "2 months", resources: ["SSC PYQ books"] },
        { task: "Speed & accuracy improvement", duration: "Ongoing", resources: ["Daily practice sets"] }
      ],
      advanced: [
        { task: "Tier 2 preparation (Quant + English)", duration: "3 months", resources: ["Advanced books"] },
        { task: "Master descriptive paper (if applicable)", duration: "2 months", resources: ["Essay writing practice"] },
        { task: "Computer Proficiency Test prep", duration: "1 month", resources: ["Typing practice"] },
        { task: "Document verification preparation", duration: "1 month", resources: ["Official guidelines"] }
      ]
    },
    certifications: ["No formal certifications — SSC CGL is the exam"],
    matchCriteria: { interests: ["government", "stability", "accounting", "administration"], workStyle: ["practical", "analytical"], personality: ["disciplined", "patient", "detail-oriented"] }
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    icon: "🎨",
    category: "creative",
    type: "private",
    description: "Design user interfaces and experiences that are intuitive, beautiful, and user-centered.",
    tags: ["design", "creativity", "user-experience", "visual"],
    requiredSkills: ["Figma/Sketch/Adobe XD", "User Research", "Wireframing & Prototyping", "Visual Design Principles", "HTML/CSS Basics", "Design Systems"],
    softSkills: ["Empathy", "Creativity", "Communication", "Collaboration"],
    salary: { entry: "₹4-7 LPA", mid: "₹10-20 LPA", senior: "₹25-45+ LPA", avg: 1200000 },
    demand: { level: "High", growth: "18%", trend: "rising" },
    competition: "Moderate",
    successRate: "High (strong portfolio is key)",
    futureOutlook: "AI-assisted design tools will augment designers. Focus shifts to strategy and complex interactions.",
    roadmap: {
      beginner: [
        { task: "Learn Design Principles (color theory, typography)", duration: "1-2 months", resources: ["Refactoring UI", "Design Course"] },
        { task: "Master Figma", duration: "2-3 months", resources: ["Figma Official", "YouTube tutorials"] },
        { task: "Study UX fundamentals", duration: "2 months", resources: ["Don Norman - Design of Everyday Things"] },
        { task: "Recreate existing designs for practice", duration: "1-2 months", resources: ["Dribbble", "Behance"] }
      ],
      intermediate: [
        { task: "Learn User Research methods", duration: "2 months", resources: ["UX Research courses"] },
        { task: "Build 3-5 case studies", duration: "3-4 months", resources: ["Real/concept projects"] },
        { task: "Learn HTML & CSS basics", duration: "2 months", resources: ["freeCodeCamp"] },
        { task: "Study Design Systems", duration: "2 months", resources: ["Material Design", "Apple HIG"] }
      ],
      advanced: [
        { task: "Specialize (Product Design/Interaction Design)", duration: "4-6 months", resources: ["Advanced courses"] },
        { task: "Build a stunning portfolio website", duration: "1-2 months", resources: ["Personal domain"] },
        { task: "Learn motion design (After Effects/Lottie)", duration: "2-3 months", resources: ["School of Motion"] },
        { task: "Get Google UX Design Certificate", duration: "3-4 months", resources: ["Coursera"] }
      ]
    },
    certifications: ["Google UX Design Certificate", "Interaction Design Foundation", "Nielsen Norman Group UX"],
    matchCriteria: { interests: ["design", "art", "creativity", "user-experience", "aesthetics"], workStyle: ["creative", "social"], personality: ["empathetic", "creative", "visual-thinker"] }
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Specialist",
    icon: "📱",
    category: "marketing",
    type: "private",
    description: "Plan and execute marketing campaigns across digital channels to grow businesses.",
    tags: ["marketing", "social-media", "seo", "advertising"],
    requiredSkills: ["SEO/SEM", "Social Media Marketing", "Google Ads & Analytics", "Content Marketing", "Email Marketing", "Data Analysis"],
    softSkills: ["Creativity", "Communication", "Analytical Thinking", "Adaptability"],
    salary: { entry: "₹3-5 LPA", mid: "₹8-15 LPA", senior: "₹20-40+ LPA", avg: 1000000 },
    demand: { level: "High", growth: "20%", trend: "rising" },
    competition: "Moderate",
    successRate: "High (results-driven field)",
    futureOutlook: "AI-powered personalization and voice search will redefine digital marketing by 2030.",
    roadmap: {
      beginner: [
        { task: "Learn Digital Marketing fundamentals", duration: "1-2 months", resources: ["Google Digital Garage", "HubSpot Academy"] },
        { task: "Understand SEO basics", duration: "2 months", resources: ["Moz Beginner Guide", "Ahrefs Blog"] },
        { task: "Learn Social Media Marketing", duration: "1-2 months", resources: ["Hootsuite Academy", "Buffer Blog"] },
        { task: "Set up Google Analytics", duration: "2 weeks", resources: ["Google Analytics Academy"] }
      ],
      intermediate: [
        { task: "Master Google Ads", duration: "2-3 months", resources: ["Google Ads Certification"] },
        { task: "Learn Content Marketing Strategy", duration: "2 months", resources: ["Content Marketing Institute"] },
        { task: "Email Marketing (Mailchimp/Sendgrid)", duration: "1 month", resources: ["Mailchimp Academy"] },
        { task: "Run real campaigns (freelance/personal)", duration: "3+ months", resources: ["Fiverr", "Personal projects"] }
      ],
      advanced: [
        { task: "Advanced Analytics & Attribution", duration: "2-3 months", resources: ["Google Analytics Advanced"] },
        { task: "Marketing Automation", duration: "2 months", resources: ["HubSpot", "Marketo"] },
        { task: "Performance Marketing & ROI Optimization", duration: "3+ months", resources: ["Industry blogs"] },
        { task: "Build personal brand & portfolio", duration: "Ongoing", resources: ["LinkedIn", "Blog"] }
      ]
    },
    certifications: ["Google Ads Certification", "HubSpot Inbound Marketing", "Facebook Blueprint", "Google Analytics"],
    matchCriteria: { interests: ["marketing", "social-media", "content", "business", "advertising"], workStyle: ["creative", "social"], personality: ["extrovert", "creative", "analytical"] }
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    icon: "⚙️",
    category: "engineering",
    type: "both",
    description: "Design, analyze, and manufacture mechanical systems from automobiles to robotics.",
    tags: ["mechanical", "manufacturing", "design", "automotive"],
    requiredSkills: ["CAD/CAM (SolidWorks/AutoCAD)", "Thermodynamics", "Material Science", "Manufacturing Processes", "FEA/CFD Analysis", "Project Management"],
    softSkills: ["Problem Solving", "Teamwork", "Technical Communication", "Innovation"],
    salary: { entry: "₹3-6 LPA", mid: "₹8-18 LPA", senior: "₹20-40+ LPA", avg: 1000000 },
    demand: { level: "Moderate", growth: "10%", trend: "stable" },
    competition: "High",
    successRate: "Moderate (depends on specialization)",
    futureOutlook: "Robotics, EVs, and sustainable manufacturing will drive new opportunities by 2030.",
    roadmap: {
      beginner: [
        { task: "Strong foundation in Physics & Mathematics", duration: "Ongoing", resources: ["NPTEL", "MIT OCW"] },
        { task: "Learn Engineering Drawing & CAD basics", duration: "2-3 months", resources: ["SolidWorks tutorials"] },
        { task: "Study core subjects (Thermo, Fluid Mechanics)", duration: "Semester-wise", resources: ["University curriculum"] },
        { task: "Workshop practice & lab work", duration: "As per university", resources: ["College workshops"] }
      ],
      intermediate: [
        { task: "Master CAD/CAM/CAE tools", duration: "3-4 months", resources: ["CATIA", "ANSYS tutorials"] },
        { task: "Internship at manufacturing company", duration: "2-6 months", resources: ["Internshala", "Company websites"] },
        { task: "Learn about Industry 4.0 concepts", duration: "2 months", resources: ["Online courses"] },
        { task: "GATE preparation (for PSUs/M.Tech)", duration: "6+ months", resources: ["Made Easy", "Unacademy"] }
      ],
      advanced: [
        { task: "Specialize (Robotics/Automotive/HVAC)", duration: "6+ months", resources: ["Specialization courses"] },
        { task: "Get professional certifications", duration: "3-4 months", resources: ["ASME", "Six Sigma"] },
        { task: "Research & innovation projects", duration: "Ongoing", resources: ["University labs", "R&D departments"] },
        { task: "Apply for core companies or PSUs", duration: "As applicable", resources: ["GATE score", "Company recruitment"] }
      ]
    },
    certifications: ["CATIA Certified", "Six Sigma Green Belt", "ASME Certifications", "GATE Score"],
    matchCriteria: { interests: ["machines", "automotive", "manufacturing", "physics", "robotics"], workStyle: ["practical", "analytical"], personality: ["hands-on", "logical", "innovative"] }
  },
  {
    id: "doctor-mbbs",
    title: "Doctor (MBBS/MD)",
    icon: "🩺",
    category: "medical",
    type: "both",
    description: "Diagnose, treat, and prevent diseases to improve patient health and save lives.",
    tags: ["medical", "healthcare", "biology", "patient-care"],
    requiredSkills: ["Medical Knowledge", "Clinical Skills", "Diagnosis", "Patient Communication", "Medical Ethics", "Research Skills"],
    softSkills: ["Empathy", "Patience", "Decision Making", "Stress Management", "Communication"],
    salary: { entry: "₹6-10 LPA", mid: "₹15-30 LPA", senior: "₹30-80+ LPA", avg: 2000000 },
    demand: { level: "Very High", growth: "15%", trend: "rising" },
    competition: "Extremely High (NEET)",
    successRate: "Moderate (limited seats in medical colleges)",
    futureOutlook: "Telemedicine, AI diagnostics, and personalized medicine will transform healthcare by 2030.",
    roadmap: {
      beginner: [
        { task: "Excel in PCB (Physics, Chemistry, Biology) in 11th-12th", duration: "2 years", resources: ["NCERT", "School"] },
        { task: "Prepare for NEET exam", duration: "1-2 years", resources: ["Allen", "Aakash", "Unacademy"] },
        { task: "Score well in NEET", duration: "May exam", resources: ["Previous year papers", "Mock tests"] },
        { task: "Secure admission in MBBS", duration: "Counseling", resources: ["MCC website", "State counseling"] }
      ],
      intermediate: [
        { task: "Complete MBBS curriculum (5.5 years)", duration: "5.5 years", resources: ["Medical college"] },
        { task: "Excel in clinical rotations", duration: "During MBBS", resources: ["Hospitals", "Mentors"] },
        { task: "Prepare for NEET PG / USMLE", duration: "1-2 years", resources: ["Marrow", "DAMS"] },
        { task: "Choose specialization", duration: "During MBBS", resources: ["Exposure in rotations"] }
      ],
      advanced: [
        { task: "Complete MD/MS (3 years)", duration: "3 years", resources: ["PG college"] },
        { task: "Super-specialization (DM/MCh) if desired", duration: "3 years", resources: ["Super-specialty institutes"] },
        { task: "Build practice / Join hospital", duration: "Ongoing", resources: ["Hospitals", "Private practice"] },
        { task: "Continuous Medical Education", duration: "Lifelong", resources: ["Conferences", "Journals"] }
      ]
    },
    certifications: ["MBBS Degree", "MD/MS Degree", "NEET Qualification", "Medical Council Registration"],
    matchCriteria: { interests: ["biology", "healthcare", "patient-care", "science", "helping-others"], workStyle: ["social", "practical"], personality: ["empathetic", "patient", "dedicated", "disciplined"] }
  },
  {
    id: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    icon: "📈",
    category: "finance",
    type: "both",
    description: "Provide financial advisory, audit, tax, and accounting services to businesses and individuals.",
    tags: ["finance", "accounting", "tax", "audit"],
    requiredSkills: ["Accounting & Auditing", "Taxation (Direct & Indirect)", "Financial Reporting", "Corporate Law", "Tally/SAP", "Excel Advanced"],
    softSkills: ["Attention to Detail", "Ethics", "Communication", "Time Management"],
    salary: { entry: "₹6-10 LPA", mid: "₹15-25 LPA", senior: "₹30-60+ LPA", avg: 1500000 },
    demand: { level: "High", growth: "12%", trend: "stable" },
    competition: "Very High",
    successRate: "Low (~5-8% pass rate in finals)",
    futureOutlook: "Automation of routine tasks; CAs will focus more on advisory and strategic roles by 2030.",
    roadmap: {
      beginner: [
        { task: "Register for CA Foundation after 12th", duration: "Immediately", resources: ["ICAI Official Site"] },
        { task: "Clear CA Foundation exam", duration: "4-5 months prep", resources: ["ICAI Study Material", "Coaching"] },
        { task: "Register for CA Intermediate", duration: "After Foundation", resources: ["ICAI"] },
        { task: "Start Articleship registration process", duration: "After clearing Inter Group 1", resources: ["ICAI"] }
      ],
      intermediate: [
        { task: "Clear CA Intermediate (both groups)", duration: "8-12 months per group", resources: ["Coaching", "Self-study"] },
        { task: "Complete 3 years of Articleship", duration: "3 years", resources: ["CA firm"] },
        { task: "Gain practical experience in Audit & Tax", duration: "During Articleship", resources: ["CA firm mentors"] },
        { task: "Prepare for CA Final", duration: "6-8 months", resources: ["ICAI material", "Coaching classes"] }
      ],
      advanced: [
        { task: "Clear CA Final (both groups)", duration: "6-12 months", resources: ["Intensive coaching"] },
        { task: "Specialize (Tax/Audit/Corporate Finance)", duration: "2-3 years", resources: ["Industry experience"] },
        { task: "Get licensed & start practice or join firm", duration: "Ongoing", resources: ["ICAI membership"] },
        { task: "Continuous Professional Education (CPE)", duration: "Ongoing", resources: ["ICAI seminars"] }
      ]
    },
    certifications: ["CA Final Certificate (ICAI)", "DISA", "Forensic Accounting", "IFRS Certificate"],
    matchCriteria: { interests: ["finance", "accounting", "math", "business", "tax"], workStyle: ["analytical", "practical"], personality: ["detail-oriented", "disciplined", "ethical", "patient"] }
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    icon: "🤖",
    category: "tech",
    type: "private",
    description: "Build intelligent systems using machine learning, deep learning, and AI technologies.",
    tags: ["ai", "machine-learning", "deep-learning", "neural-networks"],
    requiredSkills: ["Python", "Machine Learning Algorithms", "Deep Learning (TensorFlow/PyTorch)", "Mathematics (Linear Algebra, Calculus)", "NLP/Computer Vision", "MLOps"],
    softSkills: ["Research Mindset", "Problem Solving", "Communication", "Continuous Learning"],
    salary: { entry: "₹8-15 LPA", mid: "₹20-40 LPA", senior: "₹40-80+ LPA", avg: 2500000 },
    demand: { level: "Extremely High", growth: "40%", trend: "rising" },
    competition: "High",
    successRate: "High (for strong math/CS backgrounds)",
    futureOutlook: "The defining career of the 2030s. AI will be integrated into virtually every industry.",
    roadmap: {
      beginner: [
        { task: "Master Python programming", duration: "2-3 months", resources: ["Python.org", "Automate the Boring Stuff"] },
        { task: "Learn Linear Algebra & Calculus", duration: "2-3 months", resources: ["3Blue1Brown", "Khan Academy"] },
        { task: "Study Statistics & Probability", duration: "2 months", resources: ["StatQuest", "Khan Academy"] },
        { task: "Introduction to Machine Learning", duration: "2-3 months", resources: ["Andrew Ng's Coursera", "fast.ai"] }
      ],
      intermediate: [
        { task: "Deep Learning fundamentals (CNNs, RNNs)", duration: "3-4 months", resources: ["deeplearning.ai", "fast.ai"] },
        { task: "Hands-on ML projects", duration: "3+ months", resources: ["Kaggle", "Personal projects"] },
        { task: "Learn NLP or Computer Vision", duration: "3-4 months", resources: ["Hugging Face", "CS231n"] },
        { task: "Study MLOps basics (Docker, APIs)", duration: "2 months", resources: ["MLOps courses"] }
      ],
      advanced: [
        { task: "Generative AI & LLMs", duration: "3-4 months", resources: ["OpenAI docs", "Research papers"] },
        { task: "Research & publish papers", duration: "6+ months", resources: ["arXiv", "Conferences"] },
        { task: "Build production ML systems", duration: "Ongoing", resources: ["Industry experience"] },
        { task: "Contribute to open-source AI projects", duration: "Ongoing", resources: ["GitHub", "Hugging Face"] }
      ]
    },
    certifications: ["TensorFlow Developer Certificate", "AWS ML Specialty", "Google Professional ML Engineer", "deeplearning.ai Specializations"],
    matchCriteria: { interests: ["ai", "machine-learning", "math", "research", "technology", "innovation"], workStyle: ["analytical", "creative"], personality: ["curious", "logical", "innovative", "patient"] }
  },
  {
    id: "content-creator",
    title: "Content Creator / YouTuber",
    icon: "🎬",
    category: "creative",
    type: "private",
    description: "Create engaging content across platforms like YouTube, Instagram, and blogs to build an audience.",
    tags: ["content", "video", "social-media", "creativity"],
    requiredSkills: ["Video Editing (Premiere Pro/DaVinci)", "Content Strategy", "Camera/Audio Skills", "SEO & Analytics", "Scriptwriting", "Thumbnail Design"],
    softSkills: ["Creativity", "Consistency", "Communication", "Resilience"],
    salary: { entry: "₹0-3 LPA", mid: "₹5-20 LPA", senior: "₹30-100+ LPA", avg: 800000 },
    demand: { level: "High", growth: "25%", trend: "rising" },
    competition: "Very High",
    successRate: "Low (requires persistence & unique value)",
    futureOutlook: "Creator economy booming. Short-form video, AI tools, and niche content will dominate by 2030.",
    roadmap: {
      beginner: [
        { task: "Choose your niche & platform", duration: "2 weeks", resources: ["YouTube", "Instagram", "Blog research"] },
        { task: "Learn basic video editing", duration: "1-2 months", resources: ["DaVinci Resolve (free)", "CapCut"] },
        { task: "Build content creation setup", duration: "1 month", resources: ["Budget equipment guides"] },
        { task: "Publish first 10 pieces of content", duration: "1-2 months", resources: ["Just start creating!"] }
      ],
      intermediate: [
        { task: "Learn SEO & content strategy", duration: "2-3 months", resources: ["VidIQ", "TubeBuddy"] },
        { task: "Master thumbnail & title optimization", duration: "Ongoing", resources: ["A/B testing", "Analytics"] },
        { task: "Build community & engagement", duration: "Ongoing", resources: ["Comments", "Social media"] },
        { task: "Monetize (ads, sponsorships, merch)", duration: "After milestones", resources: ["YouTube Partner Program"] }
      ],
      advanced: [
        { task: "Build a brand & diversify income", duration: "Ongoing", resources: ["Courses", "Merch", "Consulting"] },
        { task: "Expand to multiple platforms", duration: "3-6 months", resources: ["Cross-platform strategy"] },
        { task: "Hire team / Scale operations", duration: "As needed", resources: ["Freelancers", "Hiring platforms"] },
        { task: "Build long-term media company", duration: "Ongoing", resources: ["Business development"] }
      ]
    },
    certifications: ["YouTube Certified", "Google Analytics", "HubSpot Content Marketing"],
    matchCriteria: { interests: ["content", "video", "social-media", "entertainment", "teaching"], workStyle: ["creative", "social"], personality: ["extrovert", "creative", "resilient", "consistent"] }
  }
];

// ============================================================
// ASSESSMENT QUESTIONS
// ============================================================

const ASSESSMENT_QUESTIONS = {
  personality: [
    {
      id: "p1",
      question: "At a party or gathering, you usually…",
      options: [
        { text: "Talk to many different people", value: "extrovert", icon: "🎉" },
        { text: "Have deep conversations with a few people", value: "introvert", icon: "🤝" },
        { text: "Observe and listen more than talk", value: "introvert", icon: "👀" },
        { text: "Organize activities for everyone", value: "leader", icon: "🎯" }
      ]
    },
    {
      id: "p2",
      question: "When facing a tough problem, you prefer to…",
      options: [
        { text: "Break it down logically step by step", value: "logical", icon: "🧩" },
        { text: "Think of creative and unique solutions", value: "creative", icon: "💡" },
        { text: "Discuss with others and brainstorm", value: "social", icon: "💬" },
        { text: "Research thoroughly before deciding", value: "detail-oriented", icon: "🔍" }
      ]
    },
    {
      id: "p3",
      question: "Which best describes your ideal weekend?",
      options: [
        { text: "Building or coding a project", value: "hands-on", icon: "🔧" },
        { text: "Reading books or articles", value: "curious", icon: "📚" },
        { text: "Hanging out with friends / volunteering", value: "social", icon: "🏃" },
        { text: "Creating art, music, or content", value: "creative", icon: "🎨" }
      ]
    },
    {
      id: "p4",
      question: "How do you handle deadlines?",
      options: [
        { text: "Plan ahead and finish early", value: "disciplined", icon: "📋" },
        { text: "Work best under pressure at the last minute", value: "adaptable", icon: "⚡" },
        { text: "Delegate tasks and manage others", value: "leader", icon: "👑" },
        { text: "Prioritize quality over speed", value: "detail-oriented", icon: "✨" }
      ]
    },
    {
      id: "p5",
      question: "Which environment makes you most productive?",
      options: [
        { text: "Quiet room, working independently", value: "introvert", icon: "🏠" },
        { text: "Collaborative team with brainstorming", value: "extrovert", icon: "🏢" },
        { text: "Structured environment with clear rules", value: "disciplined", icon: "📏" },
        { text: "Flexible environment with creative freedom", value: "creative", icon: "🌈" }
      ]
    }
  ],
  aptitude: [
    {
      id: "a1",
      question: "Would you rather…",
      options: [
        { text: "Solve a complex coding bug", value: "tech", icon: "🐛" },
        { text: "Design a beautiful product interface", value: "creative", icon: "🎨" },
        { text: "Analyze financial reports for trends", value: "finance", icon: "📊" },
        { text: "Help someone through a difficult time", value: "social", icon: "❤️" }
      ]
    },
    {
      id: "a2",
      question: "Which school subject did you enjoy most?",
      options: [
        { text: "Mathematics & Physics", value: "analytical", icon: "🔢" },
        { text: "Biology & Chemistry", value: "science", icon: "🧬" },
        { text: "History & Political Science", value: "humanities", icon: "📜" },
        { text: "Art & Literature", value: "creative", icon: "✍️" }
      ]
    },
    {
      id: "a3",
      question: "If you could create anything, what would it be?",
      options: [
        { text: "An app that solves a real problem", value: "tech", icon: "📱" },
        { text: "A policy that helps millions", value: "governance", icon: "🏛️" },
        { text: "A cure for a disease", value: "medical", icon: "💊" },
        { text: "A brand or business empire", value: "business", icon: "🚀" }
      ]
    },
    {
      id: "a4",
      question: "What motivates you the most?",
      options: [
        { text: "Solving challenging puzzles", value: "analytical", icon: "🧠" },
        { text: "Making a difference in society", value: "social-impact", icon: "🌍" },
        { text: "Earning well and financial freedom", value: "financial", icon: "💰" },
        { text: "Getting recognition and fame", value: "recognition", icon: "⭐" }
      ]
    },
    {
      id: "a5",
      question: "In a group project, you usually take the role of…",
      options: [
        { text: "The coder/builder — you implement solutions", value: "implementer", icon: "⚒️" },
        { text: "The researcher — you gather all the info", value: "researcher", icon: "🔬" },
        { text: "The presenter — you communicate the findings", value: "communicator", icon: "🎤" },
        { text: "The leader — you coordinate the team", value: "leader", icon: "👨‍💼" }
      ]
    }
  ],
  scenario: [
    {
      id: "s1",
      question: "Your company's website is hacked. What do you do first?",
      options: [
        { text: "Isolate the system and investigate the breach", value: "security-minded", icon: "🔒" },
        { text: "Notify stakeholders and manage crisis communication", value: "management", icon: "📢" },
        { text: "Look at the data/logs to understand the attack pattern", value: "analytical", icon: "📊" },
        { text: "Start fixing the code vulnerabilities immediately", value: "action-oriented", icon: "🔧" }
      ]
    },
    {
      id: "s2",
      question: "You're given ₹10 lakhs to start something. What do you do?",
      options: [
        { text: "Build a tech startup", value: "entrepreneur-tech", icon: "💻" },
        { text: "Invest in stocks and mutual funds", value: "finance-oriented", icon: "📈" },
        { text: "Open a coaching center or school", value: "education-oriented", icon: "🏫" },
        { text: "Fund a social cause or NGO", value: "social-impact", icon: "🤲" }
      ]
    },
    {
      id: "s3",
      question: "A friend asks for career advice. You suggest they…",
      options: [
        { text: "Learn to code — it's the future", value: "tech-advocate", icon: "👨‍💻" },
        { text: "Prepare for government exams — stability matters", value: "stability-seeker", icon: "🏛️" },
        { text: "Follow their passion regardless of money", value: "passion-driven", icon: "❤️‍🔥" },
        { text: "Choose based on salary and job market data", value: "pragmatic", icon: "💼" }
      ]
    }
  ]
};

// ============================================================
// FUTURE CAREERS 2030
// ============================================================

const FUTURE_CAREERS_2030 = [
  { title: "AI/ML Engineer", growth: "40%", icon: "🤖", description: "Building intelligent systems that learn and adapt", hotness: 10 },
  { title: "Cyber Security Specialist", growth: "35%", icon: "🛡️", description: "Protecting digital infrastructure from evolving threats", hotness: 9 },
  { title: "Data Scientist", growth: "28%", icon: "📊", description: "Extracting insights from massive datasets", hotness: 9 },
  { title: "Cloud Architect", growth: "25%", icon: "☁️", description: "Designing scalable cloud infrastructure solutions", hotness: 8 },
  { title: "Blockchain Developer", growth: "22%", icon: "⛓️", description: "Building decentralized applications and systems", hotness: 7 },
  { title: "Quantum Computing Engineer", growth: "30%", icon: "⚛️", description: "Pioneering the next revolution in computing", hotness: 8 },
  { title: "Robotics Engineer", growth: "20%", icon: "🦾", description: "Creating autonomous systems and intelligent robots", hotness: 8 },
  { title: "AR/VR Developer", growth: "18%", icon: "🥽", description: "Building immersive mixed reality experiences", hotness: 7 },
  { title: "Sustainability Consultant", growth: "15%", icon: "🌱", description: "Helping organizations go green and sustainable", hotness: 7 },
  { title: "Prompt Engineer", growth: "50%", icon: "✨", description: "Crafting effective prompts for AI systems", hotness: 10 }
];

// ============================================================
// CHATBOT RESPONSES
// ============================================================

const CHATBOT_KNOWLEDGE = {
  greetings: [
    "Hey there! 👋 I'm CareerBot, your AI career advisor. Ask me anything about careers, exams, skills, or your future!",
    "Hi! 🚀 Ready to explore career paths? I'm here to help you find your ideal career. What would you like to know?"
  ],
  "cyber security": "🛡️ **Cyber Security** is one of the fastest-growing careers! India alone needs **1 million+ cybersecurity professionals** by 2025. If you enjoy solving puzzles, investigating threats, and protecting systems — this is for you!\n\n📈 **Average salary:** ₹15-30 LPA (mid-level)\n🔥 **Growth rate:** 35%\n✅ **Start with:** CompTIA Security+ → CEH → OSCP\n\nBoth government (CERT-In, NIA Cyber Cell) and private sector opportunities are booming!",
  "upsc": "🏛️ **UPSC Civil Services** is one of the most prestigious exams in India. Here's the reality:\n\n⚠️ **Competition:** ~10 lakh applicants, ~1000 selections (0.1% success rate)\n📚 **Preparation:** 12-18 months minimum dedicated study\n💰 **Salary:** ₹56,100 - ₹2,50,000 per month + perks\n\n**Can you crack it?** Absolutely, if you have:\n- Strong analytical skills\n- Excellent writing ability\n- Discipline & consistency\n- Good general knowledge\n\n**Tip:** Start with NCERTs, read newspapers daily, and join a test series!",
  "data science": "📊 **Data Science** is called the \"sexiest job of the 21st century\"! Here's why:\n\n💰 **Average salary:** ₹15-30 LPA\n🔥 **Growth:** 28% annually\n🎯 **Skills needed:** Python, Statistics, ML, SQL\n\n**Path:** Learn Python → Statistics → ML → Deep Learning → Specialize\n\n**Best for:** People who love math, finding patterns, and telling stories with data!",
  "software engineering": "💻 **Software Engineering** is the backbone of the tech industry!\n\n💰 **Salary range:** ₹4-60+ LPA\n🌍 **Demand:** Global & consistently high\n🎯 **Key skills:** DSA, System Design, Web/App Development\n\n**Path:** Learn coding → Build projects → Internships → Full-time roles\n\n**Top companies:** Google, Microsoft, Amazon, Flipkart, Razorpay",
  "government jobs": "🏛️ **Government Jobs in India** offer:\n\n✅ Job security & pension\n✅ Social status & respect\n✅ Work-life balance\n✅ Housing & medical benefits\n\n**Popular exams:** UPSC, SSC CGL, Banking (IBPS/SBI), Railways, State PSC\n\n⚠️ **Competition is intense** — lakhs apply for thousands of posts\n💡 **Tip:** Choose your exam wisely based on your strengths and start preparing early!",
  "salary": "💰 **Salary Comparison (India, 2024-25):**\n\n| Career | Entry | Mid | Senior |\n|--------|-------|-----|--------|\n| AI/ML Engineer | ₹8-15L | ₹20-40L | ₹40-80L+ |\n| Data Scientist | ₹6-10L | ₹15-30L | ₹35-60L+ |\n| Cyber Security | ₹5-8L | ₹15-30L | ₹35-70L+ |\n| Software Engineer | ₹4-8L | ₹12-25L | ₹30-60L+ |\n| CA | ₹6-10L | ₹15-25L | ₹30-60L+ |\n| UPSC (IAS) | ₹6-8L | ₹12-18L | ₹20-30L+ |\n\n*Note: Government salaries include additional perks (housing, DA, medical)*",
  "default": "🤔 That's an interesting question! While I don't have a specific answer for that, here are some things I can help you with:\n\n• Career recommendations based on your profile\n• Salary and demand information\n• Skill gap analysis\n• Government vs private career paths\n• Exam preparation guidance\n• Future career trends\n\nTry asking about specific careers like 'cyber security', 'UPSC', 'data science', or 'salary comparison'!"
};

// ============================================================
// SIMULATION SCENARIOS
// ============================================================

const SIMULATIONS = {
  "cyber-security": {
    title: "🛡️ A Day as a Cyber Security Analyst",
    scenario: "It's Monday 9 AM. You arrive at the Security Operations Center (SOC). An alert has been triggered — suspicious login attempts detected from an unknown IP address on the company's main server.",
    steps: [
      {
        situation: "The SIEM dashboard shows 500+ failed login attempts from IP 192.168.45.23 in the last hour. What do you do first?",
        options: [
          { text: "Block the IP immediately at the firewall", result: "Good instinct! You blocked the IP. But wait — you should have investigated first to understand the full scope. The attacker might have other IPs.", score: 60 },
          { text: "Analyze the logs to understand the attack pattern", result: "Excellent! You discovered it's a brute-force attack targeting admin accounts. The attacker is using a botnet with multiple IPs. Now you can block the entire range.", score: 90 },
          { text: "Ignore it — could be a false positive", result: "Risky choice! The attacks escalated and the attacker gained access to a test server. Always investigate alerts promptly.", score: 20 },
          { text: "Restart the server to clear the threat", result: "Not the best approach. Restarting doesn't address the root cause and you lose valuable log data for forensics.", score: 30 }
        ]
      },
      {
        situation: "After investigation, you find the attacker has planted a backdoor on a staging server. What's your next move?",
        options: [
          { text: "Isolate the compromised server and preserve evidence", result: "Perfect! You followed incident response best practices. The forensic team can now analyze the backdoor safely.", score: 95 },
          { text: "Delete the backdoor and patch the vulnerability", result: "You stopped the immediate threat, but you lost forensic evidence. The attacker's methods remain unknown.", score: 60 },
          { text: "Monitor the backdoor to track the attacker", result: "Bold strategy! This can work but is risky. If the attacker notices, they might escalate. Best done in a controlled honeypot.", score: 70 },
          { text: "Shut down all servers as a precaution", result: "Too aggressive! This causes massive business disruption. Targeted isolation is more effective.", score: 40 }
        ]
      },
      {
        situation: "The incident is contained. Management asks for a report. What do you include?",
        options: [
          { text: "Timeline, attack vector, impact, remediation steps, and lessons learned", result: "Outstanding! A comprehensive report that helps prevent future incidents. You're promoted to Senior Analyst! 🎉", score: 100 },
          { text: "Just the technical details of the attack", result: "Good but incomplete. Management needs to understand business impact and recommended actions too.", score: 60 },
          { text: "A brief email saying 'Issue fixed'", result: "This lacks professionalism and detail. Incident documentation is crucial for compliance and learning.", score: 20 },
          { text: "Recommend buying expensive new security tools", result: "Tools help, but process and people matter more. Focus on what happened and how to prevent it.", score: 40 }
        ]
      }
    ]
  },
  "upsc-officer": {
    title: "🏛️ A Day as an IAS Officer",
    scenario: "You're the District Magistrate of a rural district in Madhya Pradesh. It's the onset of monsoon season, and you've received reports of heavy rainfall warnings from the Met Department.",
    steps: [
      {
        situation: "Heavy rains are predicted for 3 days. Reports suggest low-lying villages are at flood risk. What's your priority?",
        options: [
          { text: "Activate the disaster management plan and alert all agencies", result: "Excellent leadership! You coordinated with NDRF, police, medical teams, and local panchayats. Evacuation started early, saving lives.", score: 95 },
          { text: "Wait for actual flooding before taking action", result: "Too late! By the time floods hit, 3 villages were submerged. Prevention is always better than reaction.", score: 20 },
          { text: "Issue a press release and hope for the best", result: "Communication is important but insufficient without ground action. People needed evacuation, not just information.", score: 35 },
          { text: "Focus only on your headquarters area", result: "As DM, your responsibility covers the entire district. The worst-affected areas were the ones you ignored.", score: 30 }
        ]
      },
      {
        situation: "During evacuation, a village sarpanch refuses to cooperate, claiming false alarm. 200 families haven't moved. What do you do?",
        options: [
          { text: "Personally visit, explain the risk with data, and persuade the sarpanch", result: "Your presence and evidence convinced the sarpanch. All families were evacuated, and the village was indeed flooded 12 hours later.", score: 100 },
          { text: "Send police to force evacuation", result: "This works but creates resentment. Persuasion before force is the hallmark of good administration.", score: 60 },
          { text: "Respect their decision and move on", result: "Unfortunately, 5 people drowned. As the DM, you had the authority and duty to ensure safety.", score: 15 },
          { text: "Call the sarpanch's political leaders to pressure him", result: "Mixing politics with disaster management is unprofessional. Direct engagement is more effective.", score: 40 }
        ]
      },
      {
        situation: "After the flood, relief camps need management. Multiple challenges: food supply, sanitation, and disease outbreak risk. How do you prioritize?",
        options: [
          { text: "Set up a command center, assign teams for each challenge, and ensure daily review meetings", result: "Masterful administration! Clean water prevented disease, medical camps treated the sick, and food reached everyone. The state government commends your work! 🏆", score: 100 },
          { text: "Focus solely on food distribution", result: "Food reached people, but a diarrhea outbreak spread due to poor sanitation. Multiple priorities need parallel action.", score: 50 },
          { text: "Delegate everything to subordinates and monitor from office", result: "Delegation is good, but crisis situations need visible leadership. Your absence lowered morale.", score: 45 },
          { text: "Request additional funds from the state government first", result: "Funds are important, but people can't wait for bureaucratic processes. Use existing resources and request funds simultaneously.", score: 55 }
        ]
      }
    ]
  },
  "software-engineer": {
    title: "💻 A Day as a Software Engineer",
    scenario: "You're a backend engineer at a growing fintech startup. It's 10 AM, and Slack is blowing up — the payment processing system went down during a major sale event!",
    steps: [
      {
        situation: "The payment system is returning 500 errors. Transactions are failing. Users are angry. What's your first action?",
        options: [
          { text: "Check the monitoring dashboard and logs for error patterns", result: "Smart! You identified a database connection pool exhaustion issue. The DB couldn't handle the spike in concurrent transactions.", score: 90 },
          { text: "Roll back the last deployment", result: "There was no recent deployment! The issue is traffic-related, not code-related. Always diagnose before acting.", score: 40 },
          { text: "Restart all services", result: "Temporary relief! Services came back but crashed again in 15 minutes. You needed to find the root cause.", score: 50 },
          { text: "Post on social media that you're working on it", result: "Communication is good, but engineering action is needed first. Let the comms team handle public messaging.", score: 25 }
        ]
      },
      {
        situation: "You've identified the issue: database connection pool is maxed out. How do you fix it?",
        options: [
          { text: "Increase connection pool size, add read replicas, and implement connection pooling with PgBouncer", result: "Excellent system design thinking! The system recovered and now handles 3x the previous traffic. VP of Engineering is impressed!", score: 95 },
          { text: "Just increase the connection pool size", result: "Quick fix that helps, but the underlying architecture still can't scale. You'll face this again during the next spike.", score: 60 },
          { text: "Switch to a NoSQL database immediately", result: "Major architectural change during an outage? This would take weeks and cause more downtime. Fix first, redesign later.", score: 20 },
          { text: "Rate limit all incoming requests aggressively", result: "This prevents crashes but also blocks legitimate users from making payments. Revenue loss continues.", score: 45 }
        ]
      },
      {
        situation: "System is stable. CTO asks you to present a post-mortem. What do you include?",
        options: [
          { text: "Root cause, timeline, impact metrics, immediate fix, and long-term architecture improvements", result: "Outstanding! Your post-mortem led to a company-wide initiative to improve system reliability. You're now leading the platform scaling team! 🚀", score: 100 },
          { text: "Blame the DevOps team for not monitoring properly", result: "Blame culture is toxic. Blameless post-mortems drive real improvement.", score: 15 },
          { text: "Just the technical fix details", result: "Good but incomplete. Business impact and prevention strategies are equally important for leadership.", score: 55 },
          { text: "Recommend hiring more engineers", result: "More people doesn't always solve technical problems. Architecture improvements matter more.", score: 35 }
        ]
      }
    ]
  }
};
