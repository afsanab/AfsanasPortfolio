export interface Experience {
  date: string
  role: string
  company: string
  location: string
  badge?: string
}

export interface Project {
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
}

export const experiences: Experience[] = [
  {
    date: 'Feb – Jun 2026',
    role: 'Software Engineer (Contract)',
    company: 'Margin Research',
    location: 'New York, NY',
  },
  {
    date: 'Sep – Dec 2025',
    role: 'Software Engineer Intern',
    company: 'Pieces',
    location: 'New York, NY',
  },
  {
    date: 'Jun – Dec 2023',
    role: 'Software Engineer Intern',
    company: 'ISO New England',
    location: 'Holyoke, MA',
  },
]

export const projects: Project[] = [
  {
    name: 'elprincipito',
    desc: 'A language-learning reading companion where users can browse short children\'s stories, look up words, and save unfamiliar vocabulary to a personal list.',
    tags: ['fullstack'],
    tech: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQLite', 'Razor Pages'],
    links: [
      { label: 'GitHub', url: 'https://github.com/afsanab/elprincipito' },
    ],
  },
  {
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
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'] },
  { category: 'Frontend', items: ['React', 'HTML/CSS', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Flask', 'FastAPI', 'Spring Boot', 'REST APIs'] },
  { category: 'Infrastructure & Tools', items: ['Docker', 'Celery', 'Redis/Valkey', 'Elasticsearch', 'Pytest', 'JUnit', 'Git', 'Linux'] },
  { category: 'Data & Databases', items: ['PostgreSQL', 'Supabase'] },
  { category: 'AI & Visualization', items: ['Gemini API', 'LangChain', 'Groq', 'NetworkX'] },
]

export const organizations: Organization[] = [
  { name: 'Girls Who Code', img: 'images/gwc.png', description: 'Summer Immersion Program alum, club President, and Discrete Mathematics TA at RPI — introduced 40+ students to software engineering.' },
  { name: 'COOP Careers', img: 'images/COOP.jpg', description: 'Data Analytics Fellow — built dashboards and analyzed datasets using Python, SQL, and Tableau; presented to a 500+ person audience.' },
]