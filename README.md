# Inkora

Inkora is a modern, minimal blogging platform built with React.

What started as a small weekend project turned into an experiment in building a clean content discovery experience — with article search, topic filtering, pagination, featured content, and a responsive interface.

The project uses the public **DEV.to API** to discover and display articles, while keeping the frontend lightweight and component-driven.

## Features

* 🔎 Search articles using the DEV.to API
* 🏷️ Filter articles by technology/topic
* 📄 Paginated article results
* ⭐ Featured article section
* 📖 Reading-focused article cards
* 🔗 Direct links to original DEV.to articles
* 👤 Author information and reading time
* 🧭 Client-side routing
* 📱 Responsive design
* 🎨 Minimal dark UI with interactive hover effects
* 🧩 Reusable React components
* ⚡ Fast Vite development environment

## Tech Stack

* React
* React Router
* Tailwind CSS
* JavaScript
* Vite
* DEV.to API

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Author.jsx
│   ├── Blogs.jsx
│   ├── FeaturedPost.jsx
│   ├── Footer.jsx
│   ├── MouseFollowingEyes.jsx
│   ├── Navbar.jsx
│   └── Search.jsx
├── pages/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── Home.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

The project follows a simple component-based structure, keeping reusable UI elements separate from page-level content.

## Routing

Navigation is handled using `react-router-dom`.

```text
/
├── /about
├── /blog
└── /contact
```

## DEV.to API

Inkora uses the public DEV.to API to retrieve article content.

Articles can be fetched by:

* Topic/tag
* Search query
* Page number
* Number of results per page

Example API endpoints:

```text
https://dev.to/api/articles
https://dev.to/api/articles/search
```

The application handles loading states, API errors, retries, and pagination on the client side.

## Installation

Clone the repository:

```bash
git clone https://github.com/tamanghawana09/Inkora.git
```

Move into the project directory:

```bash
cd Inkora
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Inkora is deployed using Vercel.

The project can be deployed by connecting the GitHub repository to Vercel. Vite provides the required production build configuration.

## Design

Inkora follows a minimal, dark, reading-focused design.

The interface uses:

* Rounded pill-shaped elements
* Subtle borders
* Smooth hover animations
* Responsive layouts
* Large typography
* Minimal visual clutter

The goal is to keep the interface visually interesting without taking attention away from the content.

## Why Inkora?

There wasn't a huge product idea behind Inkora.

It started as a simple weekend project — a chance to step away from regular work, experiment with React, and build something from scratch.

Instead of trying to create another massive application, the goal was to keep things simple:

**Build something. Make it useful. Make it look good. Ship it.**

And that's what Inkora became.

## Future Improvements

Possible future additions include:

* Markdown-based publishing
* User authentication
* Author profiles
* Comments
* Bookmarks
* Personal reading lists
* Backend/CMS integration
* User-created posts
* SEO improvements
* Content recommendations
* Persistent user preferences

## Developer

**Hawana Tamang & her never-ending mind.** 🧠

Built with curiosity, caffeine, and the occasional *"wait, what in the world is this ?!!"*