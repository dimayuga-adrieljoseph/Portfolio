// ── Personal info ────────────────────────────────────────────
export const personal = {
  name: 'Adriel Joseph Dimayuga',
  title: 'Frontend Developer in Training',
  tagline: 'I build scalable web systems using modern technologies such as Vue.js and Laravel, focusing on solving real-world problems and delivering efficient, user-centered experiences. My work emphasizes performance, clean architecture, and maintainability, ensuring that each application is reliable, adaptable, and designed to support long-term growth.',
  photo: '/me.jpg',   // ← place your photo in /public/
  email: 'dimayuga.adrieljoseph03@gmail.com',
  resumePdf: '/resume.pdf'
}

// ── Social links ─────────────────────────────────────────────
export const socials = [
  { label: 'GitHub',   href: 'https://github.com/dimayuga-adrieljoseph',   icon: 'fa-brands fa-github' },
  { label: 'Facebook',  href: 'https://www.facebook.com/adriel.joseph.dimayuga.2025',   icon: 'fa-brands fa-facebook' },
  { label: 'Email',    href: 'mailto:dimayuga.adrieljoseph03@gmail.com', icon: 'fa-solid fa-envelope' }
]

// ── Home page highlights ──────────────────────────────────────
export const highlights = [
  { icon: 'fa-solid fa-code',           title: 'Clean Code',       desc: 'Readable, maintainable, and well-structured code following best practices.' },
  { icon: 'fa-solid fa-mobile-screen',  title: 'Responsive Design', desc: 'Layouts that work beautifully on any screen size.' },
  { icon: 'fa-solid fa-bolt',           title: 'Performance',       desc: 'Optimized builds, lazy loading, and fast load times out of the box.' },
  { icon: 'fa-solid fa-palette',        title: 'UI/UX Focus',       desc: 'Thoughtful design with smooth animations and great user experience.' },
  { icon: 'fa-solid fa-server',         title: 'Full Stack',        desc: 'Comfortable across the entire stack from database to deployment.' },
  { icon: 'fa-solid fa-shield-halved',  title: 'Security',          desc: 'Security-first mindset with proper validation and best practices.' }
]

// ── About — bio ───────────────────────────────────────────────
export const bio = `I’m an IT student who enjoys building web applications that actually solve real problems. I work with Vue.js and Laravel to create systems that are clean, efficient, and easy to use. I’m always learning and improving my skills while working on projects that have real-world impact.`

// ── About — skill progress bars ──────────────────────────────
export const skills = [
  { name: 'Vue.js / React', icon: 'fa-brands fa-vuejs',    level: 70 },
  { name: 'Python', icon: 'fa-brands fa-python', level: 70},
  { name: 'MySQL', icon: 'fa-solid fa-database',  level: 50 },
  { name: 'Docker / DevOps', icon: 'fa-brands fa-docker',   level: 50 }
]

// ── Skill badges (About + Resume) ────────────────────────────
export const badges = [
  { label: 'Vue 3', icon: 'fa-brands fa-vuejs' },
  { label: 'React', icon: 'fa-brands fa-react' },
  { label: 'Python', icon: 'fa-brands fa-python'},
  { label: 'Tailwind CSS' },
  { label: 'MySQL', icon: 'fa-solid fa-database' },
  { label: 'Docker', icon: 'fa-brands fa-docker' },
  { label: 'Git', icon: 'fa-brands fa-git-alt' },
  { label: 'Github', icon: 'fa-brands fa-github'},
  { label: 'Railway' }
]

// ── Experience timeline ───────────────────────────────────────
export const experience = [
  {
    period: '2022-2023',
    title: 'Insurance Virtual Assistant Specialist',
    org: 'InsBOSS - Insurance Back Office Solutions and Services',
    description: 'Covered the whole US insurance process and communicated with clients regularly'
  }
]

// ── Education timeline ────────────────────────────────────────
export const education = [
  {
    period: '2016 – 2022',
    title: 'Information and Communication Technology',
    org: 'De La Salle Santiago Zobel School',
    description: 'Robotics team member, focused on building and programming robots'
  },
  {
    period: '2024 - Current',
    title: 'Information Technology',
    org: 'Polytechnic University of the Philippines - Taguig',
    description: 'Focused on learning full-stack development'
  }
]

// ── Resume summary ────────────────────────────────────────────
export const resumeSummary = `I’m an IT student who enjoys building web applications that actually solve real problems. I work with Vue.js and Laravel to create systems that are clean, efficient, and easy to use. I’m always learning and improving my skills while working on projects that have real-world impact.`


// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    title: 'PUP-Taguig Admission System',
    description: 'An ongoing development of the admission system. Created for tracking, recording, notifying, and updating PUPCET passers regarding their admission status',
    image: '/projects/puptas.png',
    gradient: 'from-[#a98b76] to-[#bfa28c]',
    stack: ['Vue 3', 'Laravel', 'MySQL'],
    github: 'https://github.com/dimayuga-adrieljoseph/Undrafted-PUPTAS.git',
    demo: 'https://puptas.undraftedbsit2027.com',
    tags: ['Full Stack']
  },
  {
    title: 'Simple Photobooth',
    description: 'A barebones photobooth program that tracks the face of the user to add a filters and stickers',
    gradient: 'from-[#a98b76] to-[#bfa28c]',
    stack: ['Python'],
    github: 'https://github.com/dimayuga-adrieljoseph/Undrafted-PUPTAS.git',
    tags: ['Backend']
  }
]

// ── Project filter tags ───────────────────────────────────────
export const projectFilters = ['Full Stack', 'Frontend', 'Backend']
