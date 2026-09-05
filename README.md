# Inkora

Inkora is a small weekend project built as a simple blogging platform.

The project started as a way to step away from regular work for a bit and build something straightforward from scratch. The focus is on a clean reading experience, simple navigation, and a lightweight structure for publishing blog content.

## Features

* Create and display blog posts
* Dedicated blog post pages
* Simple responsive navigation
* Clean reading-focused UI
* Reusable React components
* Client-side routing
* Responsive layout for different screen sizes

## Tech Stack

* React
* React Router
* Tailwind CSS
* JavaScript
* Vite

## Project Structure

```text
src/
├── assets/
├── components/
├── pages/
├── App.jsx
├── main.jsx
└── index.css
```

The project is kept intentionally simple, with reusable components separated from page-level content.

## Routing

Navigation is handled using `react-router-dom`.

Example routes:

```text
/
 /about
 /blog
 /contact
 /blog/:slug
```

## Installation

Clone the repository:

```bash
git clone https://github.com/tamanghawana09/Inkora.git
```

Move into the project directory:

```bash
cd inkora
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

Create a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Current Status

Inkora is currently a small experimental project rather than a production-ready blogging platform.

The main goal is to keep the codebase simple while gradually experimenting with features around writing, publishing, and content presentation.

## Possible Improvements

Some features that may be added later:

* Markdown support
* Blog categories and tags
* Search
* Author profiles
* Comments
* Dark mode
* Blog filtering
* Backend or CMS integration
* Authentication
* Post creation dashboard
* SEO metadata
* Pagination

## Why Inkora?

There was no major product idea behind it.

Inkora was simply a weekend build to get away from regular work, write some code, experiment with a blogging interface, and make something small without turning it into a huge project.

## License

This project is primarily for learning and experimentation.
