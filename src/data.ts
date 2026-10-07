// All portfolio content lives here so it can be edited without touching layout code.
// Source material: public/data (resume PDF, SPINDLE IRIS report & patent draft, event photos).

export const profile = {
  firstName: 'Rohan',
  name: 'Rohan Manchanda',
  location: 'Gurugram, Haryana, India',
  email: 'manchanda.rohan09@gmail.com',
  phone: '+91 99584 44171',
  linkedin: 'https://www.linkedin.com/in/rohan-manchanda-7b0039215/',
  resumeUrl: '/resume.pdf',
  image: null as string | null, // TODO: add a portrait, e.g. '/media/rohan.jpg'
  intro:
    'IB Diploma student building at the intersection of AI, robotics and economics — from an MIT Media Lab medical assistant to a patented mine-rescue robot field-tested in the Jharia coal belt.',
}

export const nav = [
  { to: '/#about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/research', label: 'Research' },
  { to: '/impact', label: 'Impact' },
  { to: '/awards', label: 'Honors & Awards' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export const marquee = [
  'AI Research',
  'Robotics',
  'Econometrics',
  'Mine Safety',
  'Social Impact',
  'Entrepreneurship',
]

export const stats = [
  { value: '1560', label: 'SAT Score' },
  { value: '4×5', label: 'AP Exams' },
  { value: 'Top 1%', label: 'Grade 11, IBDP' },
  { value: '1', label: 'Indian Patent' },
]

export type Link = { label: string; href: string }

/* ---------------- Education ---------------- */

export const education = [
  {
    school: 'Heritage International Xperiential School',
    place: 'Gurugram',
    date: 'May 2025 – Present',
    program: 'IB Diploma Programme',
    detail: 'HL: Economics, Mathematics AA, Physics, Spanish Ab Initio; SL: Business Management, English',
    highlight: 'Grade 11 — Top 1%',
  },
  {
    school: 'Lancers International School',
    place: 'Gurugram',
    date: 'Jul 2019 – May 2025',
    program: 'IGCSE — Grade 10: 8 A*, 1 A',
    detail: '',
    highlight: 'Academic Excellence Award (Top 1% of 250+ students)',
  },
]

export const testing = {
  sat: { value: '1560', detail: 'Math 800 · EBRW 760' },
  aps: [
    'Physics C – Mechanics',
    'Physics C – E&M',
    'Calculus BC',
    'Microeconomics',
  ],
}

/* ---------------- Research ---------------- */

export const research = [
  {
    icon: 'spark',
    title: 'Research Fellow — AI Summer Fellowship',
    org: 'MIT Media Lab',
    date: 'Jun – Jul 2025',
    bullets: [
      'Built CarePal, an AI medical assistant that collects patient symptoms, detects contradictions, and generates structured clinical reports, under the mentorship of MIT Prof. Ramesh Raskar.',
      'Currently leading efforts to pilot CarePal in hospitals across the Delhi NCR and Kolkata regions.',
    ],
    links: [{ label: 'MIT Media Lab', href: 'https://www.media.mit.edu/' }] as Link[],
  },
  {
    icon: 'shield',
    title: 'Research Investigator',
    org: 'National Centre for Coal and Energy Research',
    date: 'Jun 2024 – Jun 2025',
    bullets: [
      "Selected as the programme's only high-school intern across two consecutive summer fieldwork assignments.",
      'Investigated safety gaps and operational risks at 15+ collieries in the Jharia coal belt, a region affected by 68 active underground fires.',
      'Analysed ventilation failures, methane accumulation, fire-suppression systems, and emergency preparedness; authored an investigative memorandum submitted to the Ministry of Coal.',
      'Collaborated with geological-survey teams and disaster-response personnel during live rescue drills and emergency simulations.',
    ],
    links: [] as Link[],
  },
  {
    icon: 'chart',
    title: 'Exchange Rate Dynamics & Recent Shocks in India',
    org: 'With Prof. Colin Constantine (Cambridge)',
    date: 'Published',
    bullets: [
      'Conducted an econometric study on the impact of demonetization, COVID-19, and the global financial crisis on INR/USD exchange-rate dynamics.',
      'Published the research in the Academic Journal of Health Sciences and Research and presented the methodology at a virtual Cambridge economics research symposium.',
    ],
    links: [
      {
        label: 'Read the paper',
        href: 'https://terra-docs.s3.us-east-2.amazonaws.com/IJHSR/Articles/volume8-issue6/IJHSR_2026_86_43.pdf',
      },
    ] as Link[],
  },
  {
    icon: 'trend',
    title: 'Stock Market Analysis',
    org: 'S.T. Yau High School Science Award (Asia)',
    date: 'Honourable Mention',
    bullets: [
      'Ran advanced statistical analyses linking investor trading activity to market volatility and liquidity, surfacing patterns in institutional behaviour that shape capital flows in emerging markets.',
      'Paper: Impact of Institutional Investors and Mutual Funds on BSE Volatility.',
      'Honourable Mention, Pan-Asia S.T. Yau (Economics & Financial Modeling); presented at SBMIT 2025 with an Honourable Mention in the Youngest Researcher category.',
    ],
    links: [
      {
        label: 'Read the paper',
        href: 'https://ajosr.org/wp-content/uploads/journal/published_paper/volume-3/issue-5/ajsr2025_931ezf9Z.pdf',
      },
      { label: 'S.T. Yau Award', href: 'https://yauaward-asia.hk/' },
    ] as Link[],
  },
]

export const extendedEssay =
  'IB Extended Essay in Economics — “Econometric Analysis of Coal-Industry Labour Productivity and the Impact of Safety Regulation in India, 2000–2025”'

/* ---------------- Projects ---------------- */

export const spindle = {
  title: 'SPINDLE',
  subtitle: 'Hybrid Legged-Wheeled Mine-Rescue Robot',
  badge: 'Indian Patent Holder',
  summary:
    'A bio-inspired, spider-like quadruped that walks over rubble and rolls on flat ground. Built for collapsed, hazardous mine environments where tracked and wheeled robots get stuck — it can scout tunnels ahead of miners, inspect weak structures, monitor conditions and deliver tools or supplies.',
  bullets: [
    'Designed a hybrid rescue-and-inspection robot for collapsed, hazardous mine environments, integrating methane detection, oxygen sensing, LiDAR, thermal imaging, and structural-integrity assessment.',
    'Built the prototype at ~85% below the cost of comparable commercial rescue robots and field-tested it in an active Jharia colliery under disaster-response supervision.',
    'Secured an Indian patent (publication pending); presented at the Sigma Xi International Research Conference and currently under evaluation for field-deployment trials.',
    'Recognised with the BSA CREST Gold Award and the Youth Changemaker Award for mine-safety innovation.',
  ],
  specs: [
    { value: '12', label: 'Degrees of freedom' },
    { value: '0.6 m/s', label: 'Rolling speed' },
    { value: '25 mm', label: 'Obstacle clearance' },
    { value: '35–40%', label: 'Power saved rolling' },
    { value: '<250 ms', label: 'Video latency' },
    { value: '<4 mm', label: 'Foot-placement error' },
  ],
  features: [
    {
      title: 'Hybrid locomotion',
      text: 'Three-joint legs (coxa, femur, tibia) with wheels at each foot — software switches between walking and rolling modes based on terrain.',
    },
    {
      title: 'Inverse kinematics',
      text: 'Target foot positions are converted to joint angles in real time, enabling tripod and ripple gaits with precise foot placement.',
    },
    {
      title: '4-DOF manipulator arm',
      text: 'Base, shoulder, elbow and a single-servo geared claw for pick-and-place tasks such as moving debris or placing sensors.',
    },
    {
      title: 'Vision teleoperation',
      text: 'ESP32-CAM live video with a web control interface over WebSockets for low-latency, two-way remote operation.',
    },
  ],
  stack: [
    'Arduino Nano',
    'PCA9685 servo driver',
    'ESP32-CAM',
    'L298N motor driver',
    'N20 300 RPM gear motors',
    'MG90S & Goteck servos',
    'Ultrasonic sensing',
    '3D-printed PLA chassis',
    'Node.js + Socket.IO relay',
  ],
  videos: [
    { src: '/media/spindle/pickup.mp4', caption: 'Pick-up demo with the manipulator arm' },
    { src: '/media/spindle/rolling.mp4', caption: 'Rolling mode on a flat surface' },
    { src: '/media/spindle/teleoperation.mp4', caption: 'Phone-based teleoperation with live camera feed' },
    { src: '/media/spindle/manipulator.mp4', caption: 'Manipulator arm and leg articulation close-up' },
  ],
  gallery: [
    { src: '/media/spindle/robot.jpg', caption: 'Final prototype with arm and wheeled legs' },
    { src: '/media/spindle/top-view.jpg', caption: 'Top view — 4 legs, 12 joints' },
    { src: '/media/spindle/chassis.jpg', caption: 'Chassis and leg assembly' },
    { src: '/media/spindle/cad.jpg', caption: '3D design of chassis and arm' },
    { src: '/media/spindle/circuit.jpg', caption: 'Control electronics and power' },
    { src: '/media/spindle/prototype-v1.jpg', caption: 'Early prototype' },
    { src: '/media/spindle/planning.jpg', caption: 'Planning the kinematics and build' },
  ],
}

export const projects = [
  {
    title: 'CarePal — AI Medical Assistant',
    date: 'MIT Media Lab · 2025',
    description:
      'Collects patient symptoms, detects contradictions and generates structured clinical reports for doctors. Now being piloted in hospitals across Delhi NCR and Kolkata.',
    tags: ['AI', 'LangChain', 'Healthcare'],
    image: null as string | null,
  },
  {
    title: 'Delivery Route Optimization',
    date: 'Infonet Technologies · 2024',
    description:
      'Modeled real-world delivery constraints — time, demand and vehicle capacity — and built linear-optimization algorithms that improved scheduling and routing efficiency.',
    tags: ['Optimization', 'Python', 'PuLP'],
    image: null as string | null,
  },
]

/* ---------------- Leadership & Impact ---------------- */

export type Experience = {
  role: string
  org: string
  date: string
  bullets: string[]
  stats?: { value: string; label: string }[]
  links?: Link[]
  gallery?: { src: string; caption: string }[]
}

export const leadership: Experience[] = [
  {
    role: 'Business Strategy Intern',
    org: 'Harvard Ventures Technology Scholars Program',
    date: 'Jul – Aug 2025',
    bullets: [
      'Selected into a competitive SEAS-TECH and Harvard Undergraduate Ventures program pairing students with VC-backed startups, with seminars from founders, investors, and faculty (past speakers include several Forbes 30 Under 30 honorees).',
      'Placed at DocuBridge.ai to lead a go-to-market, competitor-landscape, and customer-discovery project for an AI Excel add-in that automates financial modeling for private-equity and growth-equity teams.',
    ],
    stats: [{ value: 'GTM', label: 'strategy for DocuBridge.ai' }],
  },
  {
    role: 'Coal-Worker Welfare & Safety Advocate',
    org: 'All India Coal and Mines Workers Federation',
    date: 'Sep 2024 – Present',
    bullets: [
      'Supported 120 pension claims, 53 workplace-injury compensation cases, and 29 widow-entitlement claims.',
      'Built a worker-led safety-reporting system across five collieries in the Jharia and Bokaro regions, documenting 500+ hazards, ~73% of which were resolved by site management.',
      'Conducted field interviews across 12 mines and submitted policy recommendations to the Ministry of Coal on pension delays, workplace safety, and protocol enforcement.',
    ],
    stats: [
      { value: '500+', label: 'hazards documented' },
      { value: '73%', label: 'resolved by management' },
      { value: '200+', label: 'worker claims supported' },
    ],
  },
  {
    role: 'Founder',
    org: 'LokGharana',
    date: 'Oct 2023 – Present',
    bullets: [
      'Founded a non-profit reviving lesser-known and dying musical instruments, reaching a 35k+ audience online and in person.',
      'Enabled 52+ musicians across 6+ Indian states to stage 30+ events (₹280k / ~$3,140 in ticket sales) and partnered with government schools and orphanages to deliver free music education.',
    ],
    stats: [
      { value: '35k+', label: 'audience reached' },
      { value: '52+', label: 'musicians, 6+ states' },
      { value: '30+', label: 'events staged' },
    ],
    links: [
      { label: 'LokGharana on LinkedIn', href: 'https://www.linkedin.com/company/lokgharana/posts/?feedView=all' },
    ],
    gallery: [
      { src: '/media/lokgharana/performance-1.jpg', caption: 'Live performance' },
      { src: '/media/lokgharana/team.jpg', caption: 'LokGharana team' },
      { src: '/media/lokgharana/performance-2.jpg', caption: 'Musicians on stage' },
      { src: '/media/lokgharana/community.jpg', caption: 'Artists and audience' },
      { src: '/media/lokgharana/certificate.jpg', caption: 'Recognising performers' },
    ],
  },
  {
    role: 'Optimization Intern',
    org: 'Infonet Technologies Pvt. Ltd., Gurugram',
    date: 'Jan – Mar 2024',
    bullets: [
      'Modeled real-world delivery constraints (time, demand, vehicle capacity) and built linear-optimization algorithms that improved delivery scheduling and routing efficiency.',
    ],
  },
  {
    role: 'Co-Founder',
    org: 'Bake to Educate (India)',
    date: 'Oct 2021 – Oct 2023',
    bullets: [
      'Co-founded a philanthropic venture funding education for underprivileged children, raising ₹80,000+ through large-scale bake sales while managing operations, pricing, and outreach.',
    ],
    stats: [{ value: '₹80k+', label: "raised for children's education" }],
  },
  {
    role: 'Athletics — Basketball',
    org: 'Heritage International Xperiential School',
    date: 'Aug 2024 – Present',
    bullets: [
      "Founded the school's inaugural league (60+ participants), ran training clinics, and secured equipment sponsorships.",
    ],
    stats: [{ value: '60+', label: 'league participants' }],
  },
]

/* ---------------- Awards ---------------- */

export const awards = [
  { year: '2025', title: 'CREST Gold Award (Robotics)', note: 'Top 1% globally' },
  { year: '2025', title: 'Indian Patent Holder', note: 'SPINDLE Hybrid Legged-Wheeled Rescue Robot' },
  { year: '2025', title: 'International Research Olympiad', note: 'Semifinalist — Top 100 of 45,000+ registrants' },
  { year: '2025', title: 'Youth Changemaker Award', note: 'Mine-Safety Innovation' },
  { year: '2025', title: 'Youngest Researcher Award', note: 'SBMIT Conference' },
  { year: '2025', title: 'Australian Mathematics Competition', note: 'Distinction (Top 20% globally)' },
  { year: '2024', title: 'S.T. Yau High School Science Award (Asia)', note: 'Top 24 Finalist & Honourable Mention, Economics & Financial Modeling' },
]

/* ---------------- Skills ---------------- */

export const skills = [
  { label: 'Programming', value: 'Python, SQL, C, C++, JavaScript, HTML, CSS' },
  { label: 'AI & Development', value: 'LangChain, LangGraph, OpenAI APIs, Streamlit, Flutter, Git, GitHub' },
  { label: 'Data & Quantitative Tools', value: 'Jupyter, Advanced Excel, MATLAB, Wolfram Alpha, PuLP, Gurobi' },
  { label: 'Robotics & Simulation', value: 'Arduino IDE, PyBullet, Robot Operating System (ROS)' },
  {
    label: 'Quantitative Methods',
    value: 'Linear optimisation, OLS, ARDL, ECM, Johansen cointegration, Granger causality, ARIMA, VAR, time-series analysis, statistical hypothesis testing',
  },
  { label: 'Data Visualisation', value: 'Matplotlib, Seaborn, Plotly' },
  { label: 'Languages', value: 'English (fluent), Hindi (native), Spanish (conversational), German (advanced academic proficiency)' },
]

export const coursework = [
  { label: 'Harvard CS50W: Web Programming with Python and JavaScript', href: 'https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript' },
  { label: extendedEssay, href: '' },
]

/* ---------------- About (home page) ---------------- */

export const aboutTabs: Record<string, { head?: string; text: string }[]> = {
  'Who I Am': [
    {
      text: "I'm a student researcher and builder from Gurugram. My work started in the Jharia coal belt, where I investigated safety gaps across 15+ collieries — and grew into a patented rescue robot, policy memoranda to the Ministry of Coal, and a worker-led safety reporting system.",
    },
    {
      text: 'Alongside that, I study how economies move: econometric research on INR/USD exchange-rate shocks with a Cambridge professor, and market-volatility analysis recognised at the S.T. Yau Science Award.',
    },
  ],
  Education: education.map((e) => ({ head: e.school, text: `${e.program} · ${e.highlight}` })),
  Skills: skills
    .filter((s) => s.label !== 'Languages')
    .map((s) => ({ head: s.label, text: s.value })),
  Languages: [
    { head: 'English', text: 'Fluent' },
    { head: 'Hindi', text: 'Native' },
    { head: 'German', text: 'Advanced academic proficiency' },
    { head: 'Spanish', text: 'Conversational' },
  ],
}
