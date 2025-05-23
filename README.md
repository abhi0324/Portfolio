# Abhiswant Chaudhary - Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support
- Smooth animations and transitions
- Modern UI with clean design
- Sections for:
  - About
  - Skills
  - Projects
  - Achievements
  - Contact

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

- Update the content in each component to match your information
- Modify the color scheme in `tailwind.config.js`
- Add or remove sections as needed
- Customize animations in the components

## License

MIT License 