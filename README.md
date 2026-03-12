<div align="center">

# ☕ Kerala Chai - Landing Page

### A stunning, editorial-style landing page celebrating the rich tradition of Malabar tea culture



[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Documentation](#-documentation)

</div>

---

## ✨ Features

### 🎨 Design & UI
- **Dramatic Hero Section** - Eye-catching typography with animated spice overlays and circular image frames
- **Rotating Badge Animation** - Custom SVG circular text animation with emoji face design
- **Modern Editorial Design** - Clean, magazine-style layout with dramatic typography
- **Responsive Layout** - Fully optimized for mobile, tablet, and desktop devices
- **Smooth Scrolling** - Horizontal scrollable category tabs on mobile

### 🎭 Animations & Interactions
- **Motion-Powered Animations** - Fluid page transitions using Framer Motion
- **Interactive Gallery** - Category-based image gallery with smooth transitions
- **Hover Effects** - Enhanced button interactions with scale and color changes
- **Scroll Animations** - Components animate as they enter the viewport
- **Continuous Animations** - Rotating badge and floating spice elements

### 🎯 Sections
- **Header** - Fixed navigation with social media links
- **Hero** - Massive typographic treatment with animated elements
- **Comfort Food** - Brand story and video showcase
- **Premium Restaurant** - Traditional tea house presentation
- **Gallery** - Interactive category-based image gallery (Chai, Snacks, Coffee, Juices, Sweets)
- **Location** - Map and contact information
- **Call-to-Action** - Engaging conversion sections
- **Footer** - Site information and social links
- **Bottom Navigation** - Fixed category navigation bar

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0.0 | UI Framework |
| **TypeScript** | 5.8.2 | Type Safety |
| **Vite** | 6.2.0 | Build Tool |
| **Tailwind CSS** | 4.1.14 | Styling |
| **Motion** | 12.23.24 | Animations |
| **Lucide React** | 0.546.0 | Icons |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd kerala-chai-landing

# 2. Install dependencies
npm install

# 3. Set up environment variables (optional)
cp .env.example .env

# 4. Start development server
npm run dev
```

The application will be available at **http://localhost:3000**

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove build artifacts |

---

## 🎨 Design System

### Color Palette

```css
--color-brand-dark: #0F0F0F    /* Primary Background */
--color-brand-yellow: #FFD200  /* Accent Color */
--color-text: #FFFFFF          /* Text Color */
```

### Typography

- **Display Font**: Anton - Used for large, impactful headings
- **Body Font**: Inter - Clean, readable font for content

### Responsive Breakpoints

| Breakpoint | Size | Target |
|------------|------|--------|
| Mobile | < 768px | Phones |
| Tablet | 768px - 1024px | Tablets |
| Desktop | > 1024px | Desktops |

---

## 📂 Project Structure

```
kerala-chai-landing/
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind config
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── .env.example             # Environment variables template
└── README.md                # Project documentation
```

---

## 🎯 Key Components

### Header Component
- Fixed navigation bar
- Brand logo with copyright symbol
- Social media links (Twitter, Facebook, Instagram, GitHub)
- Hover animations on social icons

### Hero Component
- Massive typographic display
- Circular side images with border styling
- Animated rotating badge with SVG text
- Floating spice emojis (🍃 🫚 🪵)
- Call-to-action button

### Gallery Component
- Category-based filtering system
- Smooth image transitions with AnimatePresence
- Hover effects with scale animations
- Horizontal scrollable tabs on mobile

### Location Component
- Interactive map display
- Contact information
- Business hours
- Direction button with hover effects

---

## 🎭 Animation Details

The project uses **Motion (Framer Motion)** for all animations:

### Animation Types

```tsx
// Initial Animations - Page Load
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}

// Scroll Animations - Viewport Entry
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

// Hover Effects - Interactive Elements
whileHover={{ scale: 1.05, backgroundColor: '#FFD200' }}

// Tap Effects - Button Press
whileTap={{ scale: 0.95 }}

// Layout Animations - Category Switching
<AnimatePresence mode="wait">
```

---

## 🎨 Customization Guide

### Changing Brand Colors

Edit `src/index.css`:

```css
@theme {
  --color-brand-yellow: #YOUR_COLOR;
  --color-brand-dark: #YOUR_COLOR;
}
```

### Adding Gallery Categories

Edit the `GallerySection` component in `src/App.tsx`:

```tsx
const categories = [
  { name: 'Your Category', emoji: '🎯' },
  // Add more categories
];

const categoryImages: Record<string, string[]> = {
  'Your Category': [
    "image-url-1.jpg",
    "image-url-2.jpg",
    "image-url-3.jpg"
  ]
};
```

### Modifying Animations

Adjust Motion component parameters:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy --prod
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
# Add to package.json
"homepage": "https://yourusername.github.io/kerala-chai-landing"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest ✅ |
| Firefox | Latest ✅ |
| Safari | Latest ✅ |
| Edge | Latest ✅ |

---

## 📸 Image Credits

Images are sourced from:
- [Unsplash](https://unsplash.com/) - High-quality free images
- [Freepik](https://www.freepik.com/) - Additional food photography

**Note**: Replace with your own images for production use.

---

## 🔧 Configuration

### Vite Configuration

The project uses custom Vite configuration (`vite.config.ts`):

- React plugin integration
- Tailwind CSS v4 plugin
- Path aliases (`@` for root directory)
- Environment variable handling
- HMR (Hot Module Replacement) settings

### TypeScript Configuration

Strict type checking is enabled in `tsconfig.json` for better code quality and developer experience.

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Images not loading
```bash
# Solution: Check image URLs and CORS settings
# Ensure referrerPolicy="no-referrer" is set on img tags
```

**Issue**: Animations not working
```bash
# Solution: Verify Motion is installed
npm install motion
```

**Issue**: Tailwind styles not applying
```bash
# Solution: Rebuild the project
npm run clean && npm run dev
```

---

## 📝 License

This project is licensed under the **Apache-2.0 License**.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact & Support

- **Email**: [contact@keralachai.com](mailto:contact@keralachai.com)
- **Twitter**: [@keralachai](https://twitter.com/keralachai)
- **Instagram**: [@keralachai](https://instagram.com/keralachai)

---

## 🙏 Acknowledgments

- Design inspiration from modern editorial layouts
- Kerala's rich tea culture and heritage
- The React and Vite communities
- All contributors and supporters

---

<div align="center">

### Made with ❤️ and ☕ for Kerala Chai

**[⬆ Back to Top](#-kerala-chai---landing-page)**

</div>
