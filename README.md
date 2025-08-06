# Frame & Flight Website

A professional website for Frame & Flight, a drone and real estate media company with the creative motto "Elevating Real Estate. Capturing the Future."

## Features

- **Modern React/TypeScript Architecture** - Built with Vite for fast development
- **Tailwind CSS v4** - Latest styling with custom design system
- **Motion Animations** - Smooth, engaging animations throughout
- **Responsive Design** - Optimized for all screen sizes
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Code splitting and lazy loading

## Design System

- **Primary Color**: Navy Blue (#0A1137)
- **Secondary Color**: White (#ffffff)
- **Typography**: Montserrat (Regular 400, Semi-Bold 600, Bold 700)
- **Brand Motto**: "Elevating Real Estate. Capturing the Future."

## Sections

1. **Hero Section** - Full-screen hero with company motto and CTA
2. **Services Section** - Aerial videography, architectural photography, 3D mapping
3. **Portfolio Section** - Dynamic grid showcasing work
4. **About Section** - Two-column layout with company story
5. **Contact Section** - Professional contact form

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The website will open at `http://localhost:3000`

### Building for Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── App.tsx                 # Main application component
├── components/             # Reusable React components
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── PortfolioSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── ScrollDrone.tsx     # Animated drone component
│   ├── DroneIcon.tsx       # SVG drone icon
│   ├── figma/              # Figma-compatible components
│   └── ui/                 # Shadcn/UI components
├── styles/
│   └── globals.css         # Global styles and Tailwind config
├── src/
│   └── main.tsx           # React entry point
└── public/                # Static assets
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling framework
- **Motion** - Animation library (formerly Framer Motion)
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Code splitting for optimal loading
- Image optimization with fallbacks
- Reduced motion support for accessibility
- GPU-accelerated animations
- Responsive images with proper sizing

## Figma/Webflow Compatibility

The project follows Auto Layout principles and uses clean naming conventions for easy export to Figma or Webflow:

- Semantic component structure
- Consistent spacing system
- Reusable design tokens
- Optimized for visual design tools

## License

© 2025 Frame & Flight. All rights reserved.