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
    date: 'Mar 2026 – Present',
    role: 'Software Developer',
    company: 'Margin Research',
    location: 'New York, NY',
    badge: 'Current',
    bullets: [
      'Building features across a full-stack SaaS product in a small, fast-moving startup environment with real end-to-end ownership.',
      'Backend-focused work: designing and querying databases, developing and maintaining REST APIs, and writing unit tests to ensure reliability.',
      'Contributing to frontend development alongside backend responsibilities, collaborating closely with a small team to ship quickly and iterate.',
    ],
  },
  {
    date: 'Sep – Dec 2025',
    role: 'Software Engineer Intern',
    company: 'Pieces for Developers',
    location: 'New York, NY',
    bullets: [
      'Owned full product lifecycle of a React + Flask feature: scoped requirements, designed UI, and shipped synthetic patient-record generation backed by the Gemini API.',
      'Improved data exploration flow by 70% (measured via user-testing sessions) by iterating on wireframes and refactoring frontend state management.',
      'Hardened backend API reliability in Python/Flask — improved error handling and response formatting to support future analytics pipeline scale.',
    ],
  },
  {
    date: 'Feb – Jun 2025',
    role: 'Data Analytics Fellow',
    company: 'COOP Careers',
    location: 'New York, NY',
    bullets: [
      'Cleaned and analyzed real-world datasets using Python (Pandas, NumPy) and SQL; surfaced insights that informed project recommendations.',
      'Built and presented Tableau dashboards on movie ROI trends to a cohort of 20+ professionals.',
    ],
  },
  {
    date: 'Jun – Dec 2023',
    role: 'Software Engineer Intern',
    company: 'ISO New England',
    location: 'Holyoke, MA',
    bullets: [
      'Optimized a Java-based Total Transfer Capability Calculator — the production tool that models power-transfer capacity across New England\'s electrical grid — achieving a 4% speed improvement via targeted JUnit testing and profiling.',
      'Engineered an automated reporting pipeline (Java, Spring Boot, Apache Camel, Thymeleaf) that eliminated manual PL/SQL data extraction and HTML email generation.',
      'Presented both projects at a company-wide expo (100+ attendees) and led a technical demo for a 10-person engineering team.',
    ],
  },
  {
    date: 'Jan – May 2023',
    role: 'Teaching Assistant — Intro to CS',
    company: 'Rensselaer Polytechnic Institute',
    location: 'Troy, NY',
    bullets: [
      'Held weekly office hours and ran exam prep sessions for 350+ students; graded 100+ assignments weekly with written feedback.',
    ],
  },
  {
    date: 'Jun – Aug 2022',
    role: 'Teaching Assistant',
    company: 'Girls Who Code',
    location: 'New York, NY',
    bullets: [
      'Taught web development (JavaScript, HTML/CSS) to 40+ high school students; mentored them through 4 end-to-end projects and career exploration.',
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
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Flask', 'Python', 'Java', 'Spring Boot', 'REST APIs'] },
  { category: 'Data & SQL', items: ['PostgreSQL', 'Supabase', 'Pandas', 'NumPy', 'Firebase'] },
  { category: 'ML & AI APIs', items: ['LangChain', 'Gemini API', 'OpenAI API', 'Groq', 'scikit-learn'] },
  { category: 'Visualization', items: ['Tableau', 'Plotly', 'Seaborn', 'Matplotlib'] },
  { category: 'Workflow', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Jupyter', 'JUnit'] },
]

export const organizations: Organization[] = [
  { name: 'Girls Who Code', img: 'images/gwc.png', fallbackEmoji: '💻', description: 'GWC Summer Immersion Program alum, past club President, and Teaching Assistant — introduced 40+ students to software engineering.' },
  { name: 'COOP Careers', img: 'images/COOP.jpg', fallbackEmoji: '🚀', description: 'Data Analytics Fellow — applied Python and SQL to real-world datasets and developed data storytelling skills.' },
  { name: 'CodePath', img: 'images/codePath.jpg', fallbackEmoji: '⌨️', description: 'Technical Interview Prep participant, focused on algorithms, data structures, and system design.' },
  { name: 'Opal', img: 'images/opal.png', fallbackEmoji: '💎', description: 'Post-grad mentee building professional leadership and career strategy skills.' },
  { name: 'OppNet', img: 'images/oppnet.jpg', fallbackEmoji: '🌐', description: 'Prep Program participant focused on professional skills and tech-industry networking.' },
  { name: 'America on Tech', img: 'images/aot.jpeg', fallbackEmoji: '🇺🇸', description: 'Tech 360 Program participant — expanded technical skills through hands-on project work.' },
]