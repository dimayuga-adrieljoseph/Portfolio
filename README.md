# Personal Portfolio — Adriel Joseph Dimayuga

A modern, responsive personal portfolio website built with Vue 3, Vite, and Tailwind CSS. Features dark/light mode, smooth page transitions, and a single data file so all content can be updated without touching any component.

## Live Demo

> Update this link once deployed

## Tech Stack

- [Vue 3](https://vuejs.org/) with Composition API
- [Vite](https://vitejs.dev/) — build tool
- [Vue Router](https://router.vuejs.org/) — client-side routing
- [Pinia](https://pinia.vuejs.org/) — dark mode persistence
- [Tailwind CSS](https://tailwindcss.com/) — via CDN
- [Font Awesome 6](https://fontawesome.com/) — icons

## Pages

| Page | Route |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Projects | `/projects` |
| Resume | `/resume` |

## Getting Started

```bash
npm install
npm run dev
```

```bash
# production build
npm run build
npm run preview
```

## Customization

All content is managed from a single file:

```
src/data/portfolio.js
```

Edit it to update your name, title, bio, photo, skills, experience, education, projects, social links, and resume PDF path — no need to touch any Vue components.

### Adding a project

1. Place the screenshot in `/public/projects/` (e.g. `my-app.png`)
2. Add an entry to the `projects` array:

```js
{
  title: 'My Project',
  description: 'Short description.',
  image: '/projects/my-app.png',  // omit to show gradient instead
  gradient: 'from-[#a98b76] to-[#bfa28c]',
  stack: ['Vue 3', 'Laravel', 'MySQL'],
  github: 'https://github.com/your-repo',
  demo: 'https://your-demo.com',  // omit to hide the Live Demo button
  tags: ['Full Stack']
}
```

### Adding your photo

1. Place the image in `/public/` (e.g. `me.png`)
2. Set `photo: '/me.png'` in the `personal` object

### Resume PDF

1. Place the file at `/public/resume.pdf`
2. Confirm `resumePdf: '/resume.pdf'` in the `personal` object

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

## License

MIT
