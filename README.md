# Class Work Project

A small static web application built with HTML, CSS, and JavaScript. The project includes a simple navigation layout, a login modal, and basic page switching for a home and about section.

## Features

- Responsive page layout
- Top navigation with Home and About links
- Login button and modal form
- Toast-style notifications for user feedback
- Simple JavaScript routing using hash-based page loading
- Modular page content in separate JavaScript files

## Project Structure

```text
class-work/
├── index.html
├── css/
│   └── styles.css
├── images/
├── pages/
│   ├── home.js
│   └── about.js
├── src/
│   ├── app.js
│   ├── model.js
│   └── utility.js
└── README.md
```

## Getting Started

1. Open the project folder in a browser-friendly environment.
2. Launch the app by opening `index.html` in a browser.
3. You can also use a local development server if preferred.

Example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Main Files

- `index.html` – page structure and app entry point
- `src/app.js` – initializes app behavior and login interactions
- `src/model.js` – loads page content based on the current route
- `pages/home.js` – content for the Home page
- `pages/about.js` – content for the About page
- `css/styles.css` – styling for the layout and modal

## Notes

This is a beginner-friendly front-end project meant for classroom use and practice with JavaScript modules, DOM manipulation, and lightweight routing.

## SIte Link

