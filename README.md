# Euclid Interactive Proofs

An interactive, step-by-step proof visualizer for Euclid's *Elements* — covering Book I, Propositions I.38 through I.42. Each proposition pairs an SVG geometric diagram with a Statement–Reason table so learners can walk through classical proofs one step at a time.

**[Launch the app →](https://emmanuelsimon123.github.io/Euclid-Propositions/)**

---

## Features

- **Study mode** — advance through each proof step with Previous / Next buttons
- **Practice modes** — Easy, Medium, and Hard, with Jaccard-similarity–based distractor generation so wrong-answer choices are plausible
- **Focus mode** — dims geometry not relevant to the current step
- **Explore mode** — draggable handles let you manipulate the diagram and build intuition
- **Autoplay** — hands-free playback with Play / Pause control
- **Dark mode** — persisted in `localStorage`
- **MCQ quizzes** — multiple-choice questions embedded at key proof steps
- **Q.E.D. / Q.E.F. stamp** — animated completion stamp at the end of each proof
- **Keyboard navigation** — ← / → arrows, Space, R (reset), Home / End
- **Accessibility** — ARIA labels, `aria-live` regions, focus trap in modals, `prefers-reduced-motion` support, `.sr-only` announcements
- **Progress bar** — clickable and keyboard-accessible; jump to any step
- **Deep-linking** — `#line-N` URL hash jumps to a specific proof step
- **Lesson selection** — `?lesson=I38` query parameter selects the proposition

---

## How to Use

The app is deployed via **GitHub Pages**. Open the landing page to choose a proposition:

```
https://emmanuelsimon123.github.io/Euclid-Propositions/
```

You can also deep-link directly to a specific proposition:

```
https://emmanuelsimon123.github.io/Euclid-Propositions/engine.html?lesson=I38
https://emmanuelsimon123.github.io/Euclid-Propositions/engine.html?lesson=I42
```

The supported `lesson` values are `I38`, `I39`, `I40`, `I41`, and `I42`.

To run locally, serve the repository root with any static file server, for example:

```bash
npx serve .
```

Then open `http://localhost:3000` in your browser.

---

## How to Add a New Proposition

The project uses an **engine / lesson** architecture:

1. **Create `lessons/IXXXX.lesson.js`** — export a `window.LESSON` object with `meta`, `steps`, and optional `quizzes`. Use an existing lesson file (e.g. `I42.lesson.js`) as a template.
2. **Create `lessons/IXXXX.svg`** — the geometric diagram for the proposition.
3. **Add a card** to `index.html` so users can discover the new lesson.

The engine (`engine.js` + `engine.html`) requires no changes — it loads the lesson file dynamically via the `?lesson=` query parameter.

---

## Tech Stack

- **Vanilla JavaScript** — no frameworks, no build tools
- **HTML & CSS** — with CSS custom properties for theming and dark mode
- **SVG** — inline diagrams with draggable handles in Explore mode
- **GitHub Pages** — zero-config static hosting

---

## License

No license has been added to this repository yet. If you would like to use or contribute to this project, please open an issue to discuss licensing (MIT is a common choice for educational open-source projects).
