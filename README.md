# Barber's Town Salon

A premium barber shop landing page built with React, Vite, and Tailwind CSS. Features bilingual support (English/Arabic) with a modern, responsive design.

## ✨ Features

- 🌐 **Bilingual Support**: English and Arabic with RTL layout support
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎨 **Modern UI**: Beautiful dark theme with gold accents
- ⚡ **Performance**: Optimized with Vite for fast loading
- 🔄 **Language Toggle**: Easy switching between English and Arabic
- 📞 **WhatsApp Integration**: Direct booking via WhatsApp
- 🗺️ **Google Maps**: Embedded location map
- 📸 **Gallery**: Image gallery with lightbox functionality

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Icons**: Custom SVG icons
- **Deployment**: Ready for static hosting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/metarick8/barbers-town-salon.git
cd barbers-town-salon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝️ Customization

The landing page is fully customizable through configuration files:

### English Configuration
Edit `src/config.js` to customize:
- Shop information (name, description, contact)
- Services and pricing
- Working hours
- Gallery images
- Social media links

### Arabic Configuration  
Edit `src/config-ar.js` to customize Arabic content:
- Arabic shop name and descriptions
- Translated service information
- Arabic contact details

## 🌐 Language Support

The application supports:
- **English** (LTR layout)
- **Arabic** (RTL layout)

Language preference is automatically saved and restored on return visits.

## 📱 Features Breakdown

### Navigation
- Responsive header with mobile menu
- Language toggle button (En/Ar)
- Smooth scroll navigation
- WhatsApp booking button

### Hero Section
- Full-screen hero with background image
- Shop name and tagline
- Call-to-action buttons
- Animated entrance effects

### Services
- Service cards with pricing
- Professional SVG icons
- Hover effects and animations
- Direct booking links

### Gallery
- Horizontal scroll gallery
- Lightbox image viewer
- Navigation controls
- Mobile swipe support

### About
- Shop story and description
- Working hours display
- Statistics showcase
- Location information

### Contact
- Contact information cards
- Interactive Google Maps
- Social media links
- WhatsApp integration

### Footer
- Quick navigation links
- Contact information
- Social media links
- Copyright information

## 🎨 Design System

### Colors
- **Primary**: Gold (#D4AF37)
- **Dark**: Charcoal (#0F0F0F)
- **Surface**: Dark gray (#1A1A1A)
- **Text**: Light gray (#E5E5E5)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Outfit (sans-serif)

### Components
- Glass morphism effects
- Smooth animations
- Hover states
- Loading states

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment
The build output is in the `dist` folder and can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── components/          # React components
├── contexts/           # React contexts (language)
├── assets/            # Static assets (images, logos)
├── config.js          # English configuration
├── config-ar.js       # Arabic configuration
├── App.jsx            # Main App component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 📞 Contact Information

**Barber's Town Salon**
- 📍 Address: C38 Doroub Al Khair St - Al Khalidiyah - W9, Abu Dhabi, UAE
- 📞 Phone: +971 55 942 0201
- 📧 Email: info@barberstownsalon.ae
- 🕐 Working Hours: Daily 10:00 AM - 12:30 AM

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons from Heroicons
- Images from Unsplash
- Inspired by modern barber shop designs
