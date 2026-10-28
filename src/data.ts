// All portfolio content lives here so it can be edited without touching layout code.
// Source material: public/data (resume PDF, SPINDLE IRIS report & patent draft, event photos)
// and the final activity list (public/Activity List - Rohan Manchanda.xlsx, sheet "Athena (DB + SG)").

export const profile = {
  firstName: 'Rohan',
  name: 'Rohan Manchanda',
  location: 'Gurugram, Haryana, India',
  email: 'manchanda.rohan09@gmail.com',
  phone: '+91 99584 44171',
  linkedin: 'https://www.linkedin.com/in/rohan-manchanda-7b0039215/',
  resumeUrl: '/resume.pdf',
  image: '/media/rohan.jpg' as string | null,
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
    title: 'Founder & Lead Developer, CarePal — AI Summer Fellowship',
    org: 'MIT Media Lab',
    date: 'Jun 2025 – Present',
    bullets: [
      'Built CarePal, a multilingual AI symptom-intake assistant for language-diverse, high-volume clinics in India that collects patient symptoms, detects contradictions, and generates structured clinical reports, under the mentorship of MIT Prof. Ramesh Raskar.',
      'Deployed across 3 government hospitals, reaching ~7,000+ patients; reduced follow-up visits by 47% and consultation time by 40%, with 78.3% intake accuracy.',
      'Published the underlying research in the Oxford student research journal OJSS.',
    ],
    links: [{ label: 'MIT Media Lab', href: 'https://www.media.mit.edu/' }] as Link[],
  },
  {
    icon: 'shield',
    title: 'Sole High School Researcher, Inaugural Cohort',
    org: "National Centre for Coal & Energy Research (NaCCER) — Ministry of Coal's Research & Innovation Hub",
    date: 'Jun 2024 – Jun 2025',
    bullets: [
      "Selected as the programme's only high-school researcher in its inaugural cohort, across two consecutive summer fieldwork assignments.",
      'Audited rescue tools and safety gaps at 15+ collieries in the Jharia coal belt, a region affected by 68 active underground fires — and found that rescue relied entirely on humans entering blind.',
      'Analysed ventilation failures, methane accumulation, fire-suppression systems, and emergency preparedness; authored an investigative memorandum submitted to the Ministry of Coal and began designing a rescue robot (SPINDLE).',
      'Collaborated with geological-survey teams and disaster-response personnel during live rescue drills and emergency simulations.',
    ],
    links: [] as Link[],
  },
  {
    icon: 'spark',
    title: 'Multilingual Structured Symptom Intake with Adaptive Clinical Questioning',
    org: 'Independent Researcher & Published Author — OJSS',
    date: 'Published',
    bullets: [
      'Computational study evaluating contradiction-aware symptom intake using a T5 model fine-tuned with LoRA.',
      'Showed that adaptive questioning improved consistency across 1,260 multilingual patient dialogues.',
    ],
    links: [] as Link[],
  },
  {
    icon: 'chart',
    title: 'Exchange Rate Dynamics & Recent Shocks in India',
    org: 'Research Apprentice & Published Author — with Prof. Colin Constantine (Cambridge)',
    date: 'Published',
    bullets: [
      'Conducted an econometric study on the impact of demonetization, COVID-19, and the 2008 global financial crisis on INR/USD exchange-rate dynamics, analysing 45 years of data.',
      'Found that reserves and trade explained 7% more INR variation than interest rates, informing resilience lessons for a $3.7T economy facing major shocks.',
      'Published in the American Journal of Student Research (AJSR) and presented the methodology at a virtual Cambridge economics research symposium.',
    ],
    links: [
      {
        label: 'Read the paper',
        href: 'https://ajosr.org/wp-content/uploads/journal/published_paper/volume-3/issue-5/ajsr2025_931ezf9Z.pdf',
      },
    ] as Link[],
  },
  {
    icon: 'trend',
    title: 'Impact of Institutional Investors & Mutual Funds on BSE Volatility (2007–2024)',
    org: 'Independent Researcher & Published Author — IJHSR',
    date: 'Honourable Mention',
    bullets: [
      'Modeled 17 years of BSE data on institutional trading, volatility and liquidity, surfacing patterns in institutional behaviour that shape capital flows in emerging markets.',
      'Published in the International Journal of High School Research (IJHSR).',
      'Top 24 Finalist & Honourable Mention, S.T. Yau High School Science Award (Asia) — Economics & Financial Modeling; Youngest Researcher Award & Honourable Mention at SBMIT 2025.',
    ],
    links: [
      {
        label: 'Read the paper',
        href: 'https://terra-docs.s3.us-east-2.amazonaws.com/IJHSR/Articles/volume8-issue6/IJHSR_2026_86_43.pdf',
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
    'Built the prototype at ~85% below the cost of comparable commercial rescue robots and field-tested it in a live Jharia colliery alongside mine-rescue teams.',
    'Presented to senior mine inspectors; now under Ministry of Coal review for national use.',
    'Secured an Indian patent (publication pending); presented at the Sigma Xi International Research Conference.',
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
  fieldTests: [
    { src: '/media/spindle/field/crew-demo.jpg', caption: 'Demonstrating SPINDLE to the mine crew on the coal yard' },
    { src: '/media/spindle/field/operating.jpg', caption: 'Teleoperating the robot on site' },
    { src: '/media/spindle/field/rubble-climb.jpg', caption: 'Walking mode over loose rock' },
    { src: '/media/spindle/field/rubble-deploy.jpg', caption: 'Deploying the robot onto a rubble pile' },
    { src: '/media/spindle/field/coal-inspection.jpg', caption: 'Inspecting a coal-rubble pile with site officials' },
    { src: '/media/spindle/field/site-trial.jpg', caption: 'Mine officials observing a trial run' },
    { src: '/media/spindle/field/briefing.jpg', caption: 'Briefing mine management on the robot' },
    { src: '/media/spindle/field/officials.jpg', caption: 'With the mine team at the pit overlook' },
    { src: '/media/spindle/field/mine-staff.jpg', caption: 'With mine staff at the coal yard' },
    { src: '/media/spindle/field/open-cast-mine.jpg', caption: 'The open-cast mine where testing took place' },
  ],
}

export const projects = [
  {
    title: 'CarePal — Multilingual AI Symptom Intake',
    date: 'Founder & Lead Developer · MIT Media Lab · 2025',
    description:
      'Multilingual AI assistant for language-diverse, high-volume clinics in India. Reached ~7K+ patients in 3 government hospitals, cutting follow-ups by 47% and consult time by 40% at 78.3% accuracy.',
    tags: ['AI', 'LangChain', 'Healthcare'],
    image: '/media/carepal/lor-preview.jpg' as string | null,
    // Shows the image as a document preview that opens the full file.
    document: {
      href: '/docs/carepal-lor.pdf',
      label: 'LOR — Dr. Jayadev Nanda, Govt. CHC Sukinda',
    } as { href: string; label: string } | undefined,
  },
  {
    title: 'Delivery Route Optimization',
    date: 'Infonet Technologies · 2024',
    description:
      'Linear optimization of time, demand and vehicle capacity that reduced route costs by 65% across 10 scenarios — integrated into a live client deployment.',
    tags: ['Optimization', 'Python', 'PuLP'],
    image: '/media/projects/route-optimization.svg' as string | null,
    document: undefined,
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
    role: 'Strategy & Market Research Intern',
    org: 'Harvard Ventures Technology Scholars Program — DocuBridge.ai',
    date: 'Jul – Aug 2025',
    bullets: [
      'Selected into a competitive SEAS-TECH and Harvard Undergraduate Ventures summer program pairing students with VC-backed startups, with seminars from founders, investors, and faculty (past speakers include several Forbes 30 Under 30 honorees).',
      'Placed at DocuBridge.ai to lead a go-to-market, competitor-landscape, and customer-discovery study for an AI Excel add-in that automates financial modeling for private-equity teams.',
      "Mapped PE users' needs and adoption barriers to shape the product strategy.",
    ],
    stats: [{ value: 'GTM', label: 'strategy for DocuBridge.ai' }],
  },
  {
    role: 'Field Investigator & Worker-Rights Advocate',
    org: 'All India Coal & Mines Workers Federation (~500K miners) — Worker Welfare & Mine Safety Initiative',
    date: 'Sep 2024 – Present',
    bullets: [
      'Activated 120 pensions and won 53 workplace-injury compensation claims across 7+ mining towns.',
      "Secured widows' benefits (29 entitlement claims) and scholarships for miners' children.",
      'Built a miner-run hazard log across collieries in the Jharia and Bokaro regions, with 500+ hazard reports filed — ~73% of which were resolved by site management.',
      'Conducted field interviews across 12 mines and submitted policy recommendations to the Ministry of Coal on pension delays, workplace safety, and protocol enforcement.',
    ],
    stats: [
      { value: '120', label: 'pensions activated' },
      { value: '53', label: 'injury claims won' },
      { value: '500+', label: 'hazard reports logged' },
    ],
  },
  {
    role: 'Founder & Director',
    org: 'LokGharana',
    date: 'Oct 2023 – Present',
    bullets: [
      'Founded a non-profit creating opportunities for marginalized folk and classical musicians and reviving lesser-known instruments, reaching a 35k+ audience online and in person.',
      'Enabled 52+ marginalized musicians across 6+ Indian states to stage 30+ events, generating ₹280K (~$3,140) in ticket sales.',
      'Runs free music classes for children in 4 government schools and orphanages.',
    ],
    stats: [
      { value: '35k+', label: 'audience reached' },
      { value: '52+', label: 'musicians, 6+ states' },
      { value: '30+', label: 'events staged' },
    ],
    links: [
      { label: 'LokGharana on LinkedIn', href: 'https://www.linkedin.com/company/lokgharana/posts/?feedView=all' },
      {
        label: 'EdexLive feature',
        href: 'https://www.edexlive.com/news/2025/Jul/17/rohan-manchanda-championing-indias-musical-roots-with-lokgharana',
      },
      {
        label: 'Bhagwa Sanatan Times coverage',
        href: 'https://bhagwasanatantimes.com/2025/05/26/हरिद्वार-की-मेहफिल-ऑन-स्/?amp=1',
      },
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
    role: 'Tech & Optimization Intern',
    org: 'Infonet Technologies Pvt. Ltd. (hardware & networking services), Gurugram',
    date: 'Jan – Mar 2024',
    bullets: [
      'Modeled real-world delivery constraints (time, demand, vehicle capacity) and built linear-optimization algorithms that reduced route costs by 65% across 10 scenarios.',
      'The model was integrated into a live client deployment.',
    ],
    stats: [{ value: '65%', label: 'lower route costs' }],
  },
  {
    role: 'Co-Founder & Operations Lead',
    org: 'Bake to Educate, Gurugram',
    date: 'Oct 2021 – Oct 2023',
    bullets: [
      'Co-founded a fundraising venture for the education of underprivileged children in Gurugram, raising ₹80,000+ through large-scale bake sales.',
      'Ran pricing, operations, and outreach; the funds covered education for 80+ children.',
    ],
    stats: [
      { value: '₹80k+', label: 'raised' },
      { value: '80+', label: 'children funded' },
    ],
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
  { year: '2025', title: 'CREST Gold Award (Robotics)', note: 'Top 1% globally — SPINDLE hybrid mine-rescue robot' },
  { year: '2025', title: 'Indian Patent (publication pending)', note: 'SPINDLE Hybrid Legged-Wheeled Rescue Robot' },
  { year: '2025', title: 'Youth Changemaker Award (Ministry of Coal & Mines)', note: 'National honour for mine-safety innovation' },
  { year: '2025', title: 'International Research Olympiad', note: 'Semifinalist — Top 100 of 45,000+ registrants (Top 0.2% globally)' },
  { year: '2025', title: 'SBMIT Youngest Researcher Award & Honourable Mention', note: 'Sustainable Business Management, Innovation & Technology conference' },
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
