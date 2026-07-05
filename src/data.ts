export interface Experience {
  date: string
  role: string
  company: string
  location: string
  badge?: string
  bullets: string[]
}

export interface Project {
  icon: string
  name: string
  desc: string
  tags: string[]
  tech: string[]
  links: { label: string; url: string }[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Organization {
  name: string
  img: string
  description: string
  fallbackEmoji: string
}

export const experiences: Experience[] = [
  {
    date: 'Feb 2026 – Present',
    role: 'Software Engineer (Contract)',
    company: 'Margin Research',
    location: 'New York, NY',
    badge: 'Current',
    bullets: [
      'Took Reagent — a SaaS code-analysis platform with graph-based threat detection for open-source software — from prototype to deployed v1 in 3 months for U.S. government customers, building its FastAPI service layer and React frontend from scratch.',
      'Designed and built a Celery-based orchestrator coordinating a five-stage analysis pipeline, using Redis/Valkey for task queuing and Elasticsearch to index and search graph analysis results.',
      'Built a reusable TypeScript graph-visualization tool that ingests NetworkX and JSON graphs, auto-detects node and relationship types, and surfaces per-node analytics including centrality and community detection — adopted across 2 internal projects.',
      'Containerized platform services with Docker and authored pytest suites covering the orchestrator\'s task routing and failure handling, deploying through the team\'s CI/CD pipeline.',
    ],
  },
  {
    date: 'Sep – Dec 2025',
    role: 'Software Engineer Intern',
    company: 'Pieces',
    location: 'New York, NY',
    bullets: [
      'Built a full-stack synthetic patient-record generator (Flask REST API + JavaScript frontend) using the Gemini API to produce realistic EHR data for training and testing the company\'s AI document-summarization product.',
      'Designed the nested JSON schema for longitudinal patient records — demographics, conditions, and 4–6 encounters with vitals, labs, and separate nurse/provider note streams — validating clinical realism with two physician consultants.',
      'Engineered prompt specifications and a self-healing parsing pipeline that detects malformed LLM JSON output and auto-repairs it via a secondary repair prompt before re-validation, enabling reliable generation of 200+ clinician-note entries per patient.',
      'Implemented user-configurable batch generation and a JSON export feature for downstream model training, with an interactive timeline UI featuring collapsible encounter views.',
    ],
  },
  {
    date: 'Jan – Jun 2025',
    role: 'Data Analytics Fellow',
    company: 'COOP Careers',
    location: 'New York, NY',
    bullets: [
      'Built an interactive Tableau dashboard analyzing digital ad-campaign performance (CPC, CPM, CPA, CTR, CVR) across U.S. states and device types, ranking top and bottom markets and flagging states that met CPA efficiency targets to guide ad-spend allocation.',
      'Cleaned and analyzed a 508-movie box-office dataset using Python (pandas/NumPy), engineering profit metrics and Tableau visualizations that showed franchise presence and genre were the strongest drivers of profitability.',
      'Presented findings and strategic recommendations to a 500+ person audience.',
    ],
  },
  {
    date: 'Sep 2024 – Jun 2025',
    role: 'Substitute Teacher',
    company: 'NYC Board of Education',
    location: 'New York, NY',
    bullets: [],
  },
  {
    date: 'Jun – Dec 2023',
    role: 'Software Engineer Intern',
    company: 'ISO New England',
    location: 'Holyoke, MA',
    bullets: [
      'Built an automated reporting pipeline (Java, Spring Boot, Apache Camel, Thymeleaf) that queries PL/SQL databases and emails the team scheduled dashboards of daily power-pricing data.',
      'Wrote a JUnit test suite for the Total Transfer Capability Calculator — a Java tool that models how much power can be transferred across New England\'s grid at projected future intervals — validating correctness of a domain-complex calculation engine.',
    ],
  },
  {
    date: '2020 – 2024',
    role: 'Teaching Assistant & GWC Club President',
    company: 'Rensselaer Polytechnic Institute',
    location: 'Troy, NY',
    bullets: [
      'Served as a Discrete Mathematics Teaching Assistant and President of the Girls Who Code club, mentoring students and running technical programming.',
    ],
  },
]

export const projects: Project[] = [
  {
    icon: '📈',
    name: 'Sentivest',
    desc: 'Full-stack financial sentiment platform. Aggregates real-time news and social data, runs NLP scoring via Gemini API, and renders results as interactive dashboards. Built end-to-end at a hackathon.',
    tags: ['fullstack'],
    tech: ['React', 'Flask', 'Supabase', 'Gemini API', 'Tailwind'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tasmiachow/HackKnight' },
      { label: 'Live ↗', url: 'https://sentivent-frontend.onrender.com/' },
    ],
  },
  {
    icon: '📍',
    name: 'LinkUP',
    desc: 'Location-optimization app that finds the fairest meetup spot by analyzing public transit times for all users. React frontend with Google Maps integration, Node/Express backend, and LangChain reasoning layer.',
    tags: ['fullstack', 'ml'],
    tech: ['React', 'Node.js', 'Express', 'LangChain', 'Google Maps API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tasmiachow/DivHacks' },
      { label: 'Live ↗', url: 'https://linkup-nyc-client.onrender.com/' },
    ],
  },
  {
    icon: '✈️',
    name: 'JetGenie',
    desc: 'AI travel planner that generates day-by-day itineraries from user preferences. React + Firebase frontend; Groq API for low-latency LLM inference.',
    tags: ['fullstack', 'ml'],
    tech: ['React', 'Firebase', 'Groq API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tasmiachow/JetGenie' },
      { label: 'DevPost ↗', url: 'https://devpost.com/software/jetgenie' },
    ],
  },
  {
    icon: '🎬',
    name: 'MovieMate',
    desc: 'Recommendation engine that suggests films based on user preferences and viewing history. Python/Flask backend with a lightweight frontend; deployed on Vercel.',
    tags: ['fullstack'],
    tech: ['Python', 'Flask', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/afsanab/MovieMate' },
      { label: 'Live ↗', url: 'https://moviemate-virid.vercel.app/' },
    ],
  },
  {
    icon: '🌌',
    name: 'Genre Galaxy',
    desc: 'Graph analysis pipeline over 10,000+ Goodreads books — builds a NetworkX co-occurrence graph across 100+ genres and renders it as an interactive Plotly visualization.',
    tags: ['viz'],
    tech: ['Python', 'Flask', 'NetworkX', 'Plotly'],
    links: [
      { label: 'GitHub', url: 'https://github.com/afsanab/GenreGalaxy' },
      { label: 'Live ↗', url: 'https://genregalaxy.onrender.com/' },
    ],
  },
  {
    icon: '🗺️',
    name: 'Spatial Marketing Dashboard',
    desc: 'Tableau dashboard analyzing U.S. state-level marketing KPIs — surfaces regional performance patterns and trend anomalies from raw SQL data.',
    tags: ['analytics', 'viz'],
    tech: ['Tableau', 'SQL'],
    links: [
      { label: 'Tableau ↗', url: 'https://public.tableau.com/views/SpatialStrategyDashboard/SpatialDashboard' },
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C++'] },
  { category: 'Frontend', items: ['React', 'HTML/CSS', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Flask', 'FastAPI', 'Spring Boot', 'REST APIs'] },
  { category: 'Infrastructure & Tools', items: ['Docker', 'Celery', 'Redis/Valkey', 'Elasticsearch', 'Pytest', 'JUnit', 'Git', 'Linux'] },
  { category: 'Data & Databases', items: ['PostgreSQL', 'Supabase', 'Pandas', 'NumPy', 'Tableau', 'Excel'] },
  { category: 'AI & Visualization', items: ['Gemini API', 'LangChain', 'Groq', 'NetworkX', 'Plotly'] },
]

export const organizations: Organization[] = [
  { name: 'Girls Who Code', img: 'images/gwc.png', fallbackEmoji: '💻', description: 'GWC Summer Immersion Program alum, past club President, and Teaching Assistant — introduced 40+ students to software engineering.' },
  { name: 'COOP Careers', img: 'images/COOP.jpg', fallbackEmoji: '🚀', description: 'Data Analytics Fellow — applied Python and SQL to real-world datasets and developed data storytelling skills.' },
  { name: 'CodePath', img: 'images/codePath.jpg', fallbackEmoji: '⌨️', description: 'Technical Interview Prep participant, focused on algorithms, data structures, and system design.' },
  { name: 'Opal', img: 'images/opal.png', fallbackEmoji: '💎', description: 'Post-grad mentee building professional leadership and career strategy skills.' },
  { name: 'OppNet', img: 'images/oppnet.jpg', fallbackEmoji: '🌐', description: 'Prep Program participant focused on professional skills and tech-industry networking.' },
  { name: 'America on Tech', img: 'images/aot.jpeg', fallbackEmoji: '🇺🇸', description: 'Tech 360 Program participant — expanded technical skills through hands-on project work.' },
]