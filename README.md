# React Contact Cards Manager

A single-page app for filing and browsing digital contact/business cards.

## Folder structure

```
contact-cards-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ContactForm.js   (handles input + submit)
│   │   ├── ContactCard.js   (reusable card for one contact)
│   │   └── ContactList.js   (renders all cards from state)
│   ├── App.js               (main component: state + composition)
│   ├── App.css              (card + layout styling)
│   ├── index.js             (React entry point)
│   └── index.css            (base reset)
├── package.json
└── README.md
```

## Running it

### Option 1: Quick Browser Preview (No installation required)
Simply double-click or open `preview.html` in any browser (Chrome, Edge, Firefox, Safari) to test the app immediately.

### Option 2: Standard React Dev Server (Node.js & npm)
1. Open this folder in VS Code (`File > Open Folder…`).
2. Open a terminal (`` Ctrl+` ``) and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm start
   ```
4. It opens at `http://localhost:3000`.

## Features

- Form to add a contact (name, title, company, phone, email, bio, optional avatar URL)
- New cards appear instantly — no page refresh
- Responsive grid of cards with hover effects
- Live search/filter by name or company (case-insensitive)
- State managed entirely with `useState` in `App.js`
