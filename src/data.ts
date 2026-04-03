export interface Experience {
  date: string
  role: string
  company: string
  location: string
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
    date: 'Sep 2025 – Present',
    role: 'Software Engineer Intern',
    company: 'Pieces',
    location: 'New York, NY',
    bullets: [
      'Led full product lifecycle of a React + Flask feature — research, design, and implementation of synthetic patient record generation using Gemini API.',
      'Built wireframes and ran user testing to improve data exploration flow, increasing engagement efficiency by 70%.',
      'Optimized backend data formatting and API handling in Python to enhance reliability and scalability for future analytics pipelines.',
    ],
  },
  {
    date: 'Feb – Jun 2025',
    role: 'Data Analytics Fellow',
    company: 'COOP Careers',
    location: 'New York, NY',
    bullets: [
      'Applied Python (Pandas, NumPy) and SQL for data cleaning and quantitative research on real-world datasets.',
      'Designed and presented interactive Tableau dashboards analyzing movie ROI and viewer engagement trends.',
    ],
  },
  {
    date: 'Jun – Dec 2023',
    role: 'Software Engineer Intern',
    company: 'ISO New England',
    location: 'Holyoke, MA',
    bullets: [
      'Tested and optimized a Java-based Total Transfer Capability Calculator modeling power transfer across New England\'s grid — improved speed by 4%.',
      'Built an automated reporting system (Java, Spring Boot, Apache Camel) replacing manual PL/SQL data extraction and email generation.',
      'Presented both projects at a company-wide expo (100+ employees) and demoed new backend workflows to a 10-person dev team.',
    ],
  },
  {
    date: 'Jan – May 2023',
    role: 'Teaching Assistant',
    company: 'Rensselaer Polytechnic Institute',
    location: 'Troy, NY',
    bullets: [
      'Supported 350+ students in core CS concepts through weekly office hours, exam reviews, and grading 100+ assignments weekly.',
    ],
  },
  {
    date: 'Jun – Aug 2022',
    role: 'Teaching Assistant',
    company: 'Girls Who Code',
    location: 'New York, NY',
    bullets: [
      'Led virtual web development lessons (JavaScript, HTML, CSS) for 40+ high school students and mentored them through 4 full projects.',
    ],
  },
]

export const projects: Project[] = [
  {
    icon: '📈',
    name: 'Sentivest',
    desc: 'Real-time financial news and social sentiment aggregator with interactive visualizations. Integrates Gemini API for NLP-powered sentiment scoring.',
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
    desc: 'Finds the optimal meeting spot for groups of friends across NYC, factoring in everyone\'s public transit times. Uses LangChain for intelligent location reasoning.',
    tags: ['fullstack', 'ml'],
    tech: ['React', 'Node.js', 'LangChain', 'Google Maps API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tasmiachow/DivHacks' },
      { label: 'Live ↗', url: 'https://linkup-nyc-client.onrender.com/' },
    ],
  },
  {
    icon: '✈️',
    name: 'JetGenie',
    desc: 'AI-powered travel itinerary builder that generates personalized day-by-day plans. Backed by Groq API for fast inference.',
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
    desc: 'Movie recommendation platform tailored to user preferences. Built end-to-end with a Python/Flask backend and responsive frontend.',
    tags: ['fullstack'],
    tech: ['Python', 'Flask'],
    links: [
      { label: 'GitHub', url: 'https://github.com/afsanab/MovieMate' },
      { label: 'Live ↗', url: 'https://moviemate-virid.vercel.app/' },
    ],
  },
  {
    icon: '🌌',
    name: 'Genre Galaxy',
    desc: 'Interactive network graph mapping relationships between 100+ literary genres across 10,000+ Goodreads books.',
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
    desc: 'Tableau dashboard analyzing KPI trends across U.S. states, surfacing regional performance patterns from raw marketing data.',
    tags: ['analytics', 'viz'],
    tech: ['Tableau', 'SQL'],
    links: [
      {
        label: 'Tableau ↗',
        url: 'https://public.tableau.com/views/SpatialStrategyDashboard/SpatialDashboard',
      },
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Flask', 'Python', 'Java', 'REST APIs'] },
  { category: 'Data & SQL', items: ['PostgreSQL', 'Supabase', 'Pandas', 'NumPy', 'Firebase'] },
  { category: 'ML & AI', items: ['scikit-learn', 'LangChain', 'Gemini API', 'OpenAI API', 'Groq'] },
  { category: 'Visualization', items: ['Tableau', 'Plotly', 'Seaborn', 'Matplotlib'] },
  { category: 'Workflow', items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Jupyter'] },
]

export const organizations: Organization[] = [
  {
    name: 'Girls Who Code',
    img: 'images/gwc.png',
    fallbackEmoji: '💻',
    description: 'GWC Summer Immersion Program alum, past club President, and Teaching Assistant.',
  },
  {
    name: 'COOP Careers',
    img: 'images/COOP.jpg',
    fallbackEmoji: '🚀',
    description: 'Data Analytics Fellow — building professional skills and a peer network in tech.',
  },
  {
    name: 'CodePath',
    img: 'images/codePath.jpg',
    fallbackEmoji: '⌨️',
    description: 'Technical Interview Prep participant, sharpening algorithmic problem-solving and system design skills.',
  },
  {
    name: 'Opal',
    img: 'images/opal.png',
    fallbackEmoji: '💎',
    description: 'Post-grad mentee developing professional leadership and career navigation skills.',
  },
  {
    name: 'OppNet',
    img: 'images/oppnet.jpg',
    fallbackEmoji: '🌐',
    description: 'Prep Program participant, learning professional skills and expanding my network in tech.',
  },
  {
    name: 'America on Tech',
    img: 'images/aot.jpeg',
    fallbackEmoji: '🇺🇸',
    description: 'Tech 360 Program participant, building technical skills through hands-on real-world projects.',
  },
]
