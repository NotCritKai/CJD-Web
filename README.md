# CJD Guide

An educational website about Creutzfeldt-Jakob disease (CJD), designed to make information about symptoms, risk factors, diagnosis, treatments, and causes easier to explore.

## Project status

The original HTML and CSS website is preserved on the `html-css-js` branch. A new version is planned using React and JavaScript, with interactive learning features.

The React and JavaScript foundation is set up with Vite. A starter overview page is available; the original content pages and interactive features have not been migrated yet.

## Branches

| Branch | Purpose |
| --- | --- |
| `main` | Project overview and future home of the React website. Currently documentation only. |
| `html-css-js` | Original website, including its pages, styling, assets, and history. |
| `react` | Development branch for the new React and JavaScript version. Contains the React starter application. |

To view the original website locally, switch to `html-css-js` and open `index.html` in a browser or use VS Code Live Preview. Save or commit your work before switching branches; the files in your working folder change with the selected branch.

## Learning with Codecademy

This starter is organized around the JSX and function-component concepts in [Codecademy Learn React](https://www.codecademy.com/learn/react-101). The public syllabus does not require a particular folder structure; this is a simple organization for this website, not a copy of the course workspace.

- Edit `src/pages/Overview.jsx` for the homepage.
- Use `.jsx` for components that return markup and `.js` for ordinary JavaScript helpers.
- Keep styling in `src/styles/global.css`; apply classes with `className`.
- Put an image in `public/images/brain.png` and use `<img src="/images/brain.png" alt="Description of the image" />`.
- Create new page components in `src/pages/`. A new file does not automatically create a URL; routing still needs to be added before linking between pages.
- Practice props by passing information from App to a child component. Add state and event handlers as you reach those lessons; no extra library is required for these concepts.

TypeScript was removed from this starter to reduce differences from the JavaScript course. It can be added later. Vite still provides the local server and production build.

## Run locally

Use Node.js 22.12+ or a supported newer version (this project was set up with Node.js 24).

```sh
npm install
npm run dev
```

Open the local address printed in the terminal. Keep that terminal running while working; press Ctrl+C to stop the server. React development uses Vite rather than VS Code Live Preview or opening `index.html` directly.

- `npm run build`: create production files in `dist/`.
- `npm run preview`: preview the production build locally after building.

Commit `package-lock.json` so collaborators install the same dependency versions. Do not commit `node_modules/` or `dist/`.

## Folder structure

```text
CJD-Web/
├── public/
│   ├── images/
│   ├── icons/
│   └── models/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Overview.jsx
│   └── styles/
│       └── global.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

- `public/`: static images, icons, and 3D model files.
- `src/components/`: shared React components, such as navigation, a footer, and reusable cards.
- `src/pages/`: page components such as `Overview.jsx` and `Symptoms.jsx`. React pages use `.jsx`, not separate HTML files.
- `src/styles/`: shared CSS.
Add feature-specific folders when those features are actually built. For now, keep reusable pieces in `components/` and whole pages in `pages/`.

Each empty folder contains a `.gitkeep` placeholder so Git can include it when the structure is committed. Remove the placeholder once you add real files to that folder.

The root `index.html` loads `src/main.jsx`, which renders `src/App.jsx`. App combines the shared header, overview page, and footer. Shared CSS is loaded from `src/styles/global.css`. `vite.config.js` configures Vite. The chatbot backend will be organized separately once its hosting is chosen; private API keys must never go in `src/` or `public/`.

## Planned technology

- **React** for reusable page sections and interactive interfaces.
- **JavaScript and JSX** for application logic and React components, matching the learning focus of the course.
- **CSS** for styling and responsive layouts.
- **A backend service** for chatbot requests, keeping private API keys out of browser code.

Vite runs the development server and builds the website. The chatbot provider and interactive model library have not been selected yet.

## Content

- Overview of CJD
- Symptoms
- Risk factors
- Diagnosis
- Treatments
- Cause and effect
- Sources and further reading

## Planned features

- **Quiz:** questions, answer feedback, explanations, and a final score.
- **Interactive model:** explore relevant anatomy and select areas to learn more.
- **AI chatbot:** help visitors explore educational material, with source references and clear limits around medical advice.
- **Shared navigation:** consistent links and page layouts across the website.

These features are planned, not implemented.

## Design goals

- Retain the existing green color palette and straightforward layout.
- Make text readable and pages easy to scan.
- Support desktop, tablet, and phone screens.
- Provide keyboard navigation and visible focus indicators.
- Keep the code understandable as the project grows.

## Roadmap

- [x] Preserve the original website on a separate branch
- [x] Create a React development branch
- [x] Set up React and JavaScript
- [ ] Recreate the existing pages and shared navigation
- [ ] Build the quiz
- [ ] Add the interactive model
- [ ] Build and connect the chatbot backend
- [ ] Review medical claims and supporting sources
- [ ] Test accessibility, responsive layouts, and interactive features
- [ ] Publish the React website

## Educational purpose

CJD Guide is an educational project, not a diagnostic tool or a replacement for professional medical advice. Medical content and any future AI-generated responses need source review before publication.
