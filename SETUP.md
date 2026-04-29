# OpenHand Frontend - Setup Guide

## File Placement

Copy these files into your existing React project:

```
src/
├── data/
│   └── dummyData.js              ← Mock data (replace with API calls later)
│
├── components/
│   ├── Navbar.jsx                ← Top navigation bar
│   ├── Footer.jsx                ← Site footer
│   ├── AnimatedSection.jsx       ← Scroll-triggered reveal animation
│   ├── SectionHeader.jsx         ← Reusable section header component
│   ├── ProjectCard.jsx           ← Project preview card
│   ├── ContributorCard.jsx       ← Contributor profile card
│   └── StatusBadge.jsx           ← Status pill badge component
│
├── pages/
│   ├── HomePage.jsx              ← Landing page (hero, mission, projects, stories, CTA)
│   ├── ProjectsPage.jsx          ← Project list with status filters
│   ├── ProjectDetailPage.jsx     ← Full project view (tabs: overview, stages, status board, assembly, BOM, stories, team)
│   ├── ContributorsPage.jsx      ← All contributors + how to contribute
│   ├── AboutUsPage.jsx           ← Mission, design principles, philosophy
│   ├── ContactUsPage.jsx         ← Contact form + info cards
│   ├── PoliciesPage.jsx          ← Licenses, disclaimers, community standards
│   └── NotFoundPage.jsx          ← 404 page
│
├── router/
│   ├── router.jsx                ← Updated router with all routes
│   └── PageLayoutWrapper.jsx     ← Layout wrapper (Navbar + Outlet + Footer)
│
└── styles/
    └── globals.css               ← Add these styles to your existing CSS
```

## Dependencies

Make sure you have these installed:

```bash
npm install lucide-react
# You should already have: react-router-dom, tailwindcss, @tanstack/react-query
```

## Font Setup

Add to your `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
```

## Tailwind Config

Make sure your `tailwind.config.js` includes:

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## Routes

| Path               | Page                | Description                              |
|--------------------|--------------------|------------------------------------------|
| `/`                | HomePage            | Landing page                             |
| `/projects`        | ProjectsPage        | All projects with filters                |
| `/projects/:id`    | ProjectDetailPage   | Single project with tabbed sections      |
| `/contributors`    | ContributorsPage    | All contributors + how to contribute     |
| `/about`           | AboutUsPage         | Mission, principles, philosophy          |
| `/contact`         | ContactUsPage       | Contact form                             |
| `/policies`        | PoliciesPage        | Legal & community standards              |
| `*`                | NotFoundPage        | 404                                      |

## Connecting to Django Backend

The dummy data in `dummyData.js` mirrors your Django models. To connect to the real API:

1. Replace dummy imports with TanStack Query hooks:

```jsx
import { useQuery } from '@tanstack/react-query';

const { data: projects, isLoading } = useQuery({
  queryKey: ['projects'],
  queryFn: () => fetch('/api/projects/all').then(res => res.json()),
});
```

2. Your Django endpoints:
   - `GET /projects/all` - All projects
   - `GET /projects/:id` - Single project
   - `GET /contributors/all` - All contributors

3. The data shapes in `dummyData.js` match your Django models exactly, so the transition should be seamless.
