# CJD Guide

An educational website about Creutzfeldt-Jakob disease (CJD), designed to make information about symptoms, risk factors, diagnosis, treatments, and causes easier to explore.

## Project status

The original HTML and CSS website is preserved on the `html-css-js` branch. A new version is planned using React and TypeScript, with interactive learning features.

The React application has not been set up yet. This branch currently contains project documentation, so there are no installation or development commands to run yet.

## Branches

| Branch | Purpose |
| --- | --- |
| `main` | Project overview and future home of the React website. Currently documentation only. |
| `html-css-js` | Original website, including its pages, styling, assets, and history. |
| `react` | Development branch for the new React and TypeScript version. Currently documentation only. |

To view the original website locally, switch to `html-css-js` and open `index.html` in a browser or use VS Code Live Preview. Save or commit your work before switching branches; the files in your working folder change with the selected branch.

## Planned technology

- **React** for reusable page sections and interactive interfaces.
- **TypeScript** for application logic and clearer data types; React components will use `.tsx` files.
- **CSS** for styling and responsive layouts.
- **A backend service** for chatbot requests, keeping private API keys out of browser code.

The build tooling, chatbot provider, and interactive model library have not been selected yet.

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
- [ ] Set up React and TypeScript
- [ ] Recreate the existing pages and shared navigation
- [ ] Build the quiz
- [ ] Add the interactive model
- [ ] Build and connect the chatbot backend
- [ ] Review medical claims and supporting sources
- [ ] Test accessibility, responsive layouts, and interactive features
- [ ] Publish the React website

## Educational purpose

CJD Guide is an educational project, not a diagnostic tool or a replacement for professional medical advice. Medical content and any future AI-generated responses need source review before publication.
