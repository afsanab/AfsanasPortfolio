export interface Experience {
  date: string
  role: string
  company: string
  location: string
  description?: string
}

export interface Project {
  name: string
  desc: string
  tech: string[]
  links: { label: string; url: string }[]
}

export const experiences: Experience[] = [
  {
    date: 'Jun 2026 – Present',
    role: 'Software Engineer (Freelance)',
    company: 'Riverside Health & Rehabilitation Center',
    location: 'Remote',
    description: 'Built and maintain CareTrack, the admissions and physician-task app the facility runs in production.',
  }, {
    date: 'Feb 2026 – Jun 2026',
    role: 'Software Engineer (Contract)',
    company: 'Margin Research',
    location: 'New York, NY',
    description: 'Designed the FastAPI service and Celery/Redis job pipeline for the first SaaS release of Reagent, shipped to government customers in four months.',
  },
  {
    date: 'Sep 2025 – Jan 2026',
    role: 'Software Engineer Intern',
    company: 'Pieces',
    location: 'New York, NY',
    description: 'Created a Flask and Gemini API tool that generates synthetic patient records for testing an AI clinical-summarization product.',
  },
  {
    date: 'Jun 2023 – Dec 2023',
    role: 'Software Engineer Intern',
    company: 'ISO New England',
    location: 'Holyoke, MA',
    description: 'Automated a daily power-pricing chart report with a Spring Boot service.',
  },
]

export const leadershipExperiences: Experience[] = [
  {
    date: 'Jan 2023 – May 2023',
    role: 'Computer Science Teaching Assistant',
    company: 'Rensselaer Polytechnic Institute',
    location: 'Troy, NY',
  },
  {
    date: 'Jun 2022 – Aug 2022',
    role: 'Web Development Teaching Assistant',
    company: 'Girls Who Code Summer Immersion Program',
    location: 'New York, NY',
  },
]

export const projects: Project[] = [
  {
    name: 'CareTrack',
    desc: 'Clinical workflow app in production at a nursing home. Tracks admissions and automates physician documentation tasks and deadlines for up to 100 residents. Built around HIPAA\'s technical safeguards: role-based access control, audit logging, JWT auth in httpOnly cookies with CSRF protection, account lockout, and idle-session timeouts. Dockerized and deployed on Azure, with CI in GitHub Actions.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Azure'],
    links: [
      { label: 'GitHub', url: 'https://github.com/afsanab/careTrack' },
      { label: 'Demo ↗', url: 'https://youtu.be/6kJ9ejD63v0' },
    ],
  },
  {
    name: 'El Principito',
    desc: 'A Spanish reading companion I\'m building to practice my own Spanish: read short stories, tap a word for its translation, and save new words to review. Layered ASP.NET Core REST API (EF Core, SQLite) with a React Native/Expo client in TypeScript.',
    tech: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQLite', 'React Native'],
    links: [
      { label: 'GitHub', url: 'https://github.com/afsanab/elprincipito' },
    ],
  },
  {
    name: 'Sentivest',
    desc: 'A stock-sentiment dashboard built with a team of four at a weekend hackathon at Queens College. Users add tickers to a watchlist and see AI-scored sentiment from news and social posts, with the headlines behind each score and sentiment history over time. I set up the Supabase backend: user authentication, the database schema, and the code that populates it, with each user\'s data tied to their account.',
    tech: ['Supabase', 'Flask', 'Gemini API', 'React'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tasmiachow/HackKnight' },
      { label: 'Live ↗', url: 'https://sentivent-frontend.onrender.com/' },
    ],
  },
  {
    name: 'LinkUP',
    desc: 'A meetup-spot finder for groups in NYC, built with a team of four in 24 hours at Columbia DivHacks. Everyone drops a location, and it ranks fair spots using Google\'s transit travel times, with LangChain-written explanations for each pick. I built on the React frontend.',
    tech: ['React', 'Node.js', 'Express', 'Google Maps API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tasmiachow/DivHacks' },
      { label: 'Live ↗', url: 'https://linkup-nyc-client.onrender.com/' },
    ],
  },
  // {
  //   name: 'JetGenie',
  //   desc: 'AI travel planner that generates day-by-day itineraries from user preferences. React + Firebase frontend; Groq API for low-latency LLM inference.',
  //   tech: ['React', 'Firebase', 'Groq API'],
  //   links: [
  //     { label: 'GitHub', url: 'https://github.com/tasmiachow/JetGenie' },
  //     { label: 'DevPost ↗', url: 'https://devpost.com/software/jetgenie' },
  //   ],
  // },
  // {
  //   name: 'MovieMate',
  //   desc: 'Recommendation engine that suggests films based on user preferences and viewing history. Python/Flask backend with a lightweight frontend; deployed on Vercel.',
  //   tech: ['Python', 'Flask', 'Vercel'],
  //   links: [
  //     { label: 'GitHub', url: 'https://github.com/afsanab/MovieMate' },
  //     { label: 'Live ↗', url: 'https://moviemate-virid.vercel.app/' },
  //   ],
  // },
  // {
  //   name: 'Genre Galaxy',
  //   desc: 'Graph analysis pipeline over 10,000+ Goodreads books — builds a NetworkX co-occurrence graph across 100+ genres and renders it as an interactive Plotly visualization.',
  //   tech: ['Python', 'Flask', 'NetworkX', 'Plotly'],
  //   links: [
  //     { label: 'GitHub', url: 'https://github.com/afsanab/GenreGalaxy' },
  //     { label: 'Live ↗', url: 'https://genregalaxy.onrender.com/' },
  //   ],
  // },
  // {
  //   name: 'Spatial Marketing Dashboard',
  //   desc: 'Tableau dashboard analyzing U.S. state-level marketing KPIs — surfaces regional performance patterns and trend anomalies from raw SQL data.',
  //   tech: ['Tableau', 'SQL'],
  //   links: [
  //     { label: 'Tableau ↗', url: 'https://public.tableau.com/views/SpatialStrategyDashboard/SpatialDashboard' },
  //   ],
  // },
]
