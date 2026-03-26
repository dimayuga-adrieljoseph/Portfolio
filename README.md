<<<<<<< HEAD
# Portfolio
=======
# Personal Portfolio — Adriel Joseph Dimayuga

A modern, responsive personal portfolio website built with Vue 3, Vite, and Tailwind CSS (CDN). Features dark mode, smooth page transitions, and a single data file for easy content management.

---

## Live Demo

[puptas.undraftedbsit2027.com](https://puptas.undraftedbsit2027.com) *(update with your portfolio URL)*

---

## Tech Stack

- [Vue 3](https://vuejs.org/) — Composition API
- [Vite](https://vitejs.dev/) — build tool
- [Vue Router](https://router.vuejs.org/) — client-side routing
- [Pinia](https://pinia.vuejs.org/) — dark mode state
- [Tailwind CSS](https://tailwindcss.com/) — via CDN
- [Font Awesome 6](https://fontawesome.com/) — icons

---

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Projects | `/projects` |
| Resume | `/resume` |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## Customization

All content lives in one file:

```
src/data/portfolio.js
```

Edit it to update your name, bio, skills, experience, education, projects, and social links — no need to touch any Vue components.

### Adding a Project

1. Place the image in `/public/projects/` (e.g. `my-app.png`)
2. Add an entry to the `projects` array in `portfolio.js`:

```js
{
  title: 'My Project',
  description: 'What it does.',
  image: '/projects/my-app.png',   // optional — gradient shown if omitted
  gradient: 'from-[#a98b76] to-[#bfa28c]',
  stack: ['Vue 3', 'Laravel', 'MySQL'],
  github: 'https://github.com/your-repo',
  demo: 'https://your-demo.com',   // optional — omit to hide the button
  tags: ['Full Stack']
}
```

### Adding Your Photo

1. Place your photo in `/public/` (e.g. `me.png`)
2. Set `photo: '/me.png'` in the `personal` object in `portfolio.js`

### Resume PDF

1. Place your PDF in `/public/resume.pdf`
2. Confirm `resumePdf: '/resume.pdf'` in `portfolio.js`

---

## Project Structure

```
├── public/
│   ├── resume.pdf
│   └── projects/
├── src/
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── ProjectCard.vue
│   │   ├── SkillBadge.vue
│   │   └── TimelineItem.vue
│   ├── data/
│   │   └── portfolio.js   ← edit all content here
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── theme.js
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   └── Resume.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── vite.config.js
└── package.json
```

---

## License

MIT — free to use and modify.
>>>>>>> a40202a (add README, .gitignore, projects page, dark mode, palette update, and content data file)
