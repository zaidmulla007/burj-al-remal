# Burj Al Remal - Auto Spare Parts Website

A beautiful, fully animated, and responsive website for **Burj Al Remal Auto Spare Parts TR LLC** built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### ✨ Beautiful Design
- **Modern Dark Theme** with red accents matching the company's branding
- **Buttery Smooth Animations** powered by Framer Motion
- **Glass-morphism Effects** and gradient backgrounds
- **Custom Red Scrollbar** matching the brand colors
- **Professional Typography** using Geist font family

### 📱 Fully Responsive
Optimized for all device sizes:
- **Mobile** (320px+): Single column layouts, hamburger menu
- **Tablet** (768px+): 2-column grids, optimized spacing
- **Desktop** (1024px+): Multi-column layouts, expanded navigation
- **Large Screens** (1440px+): Full-width experience

### 🎨 Pages

#### 1. **Home Page** (`/`)
- Hero section with animated background gradients
- Stats counter (5000+ Products, 500+ Clients, 50+ Brands)
- Features showcase (Premium Quality, Wide Range, Fast Delivery, Expert Support)
- Brand logos carousel with infinite scroll animation
- Call-to-action sections

#### 2. **About Page** (`/about`)
- Company story and history
- Mission & Vision cards with hover effects
- Core values (Quality, Customer Satisfaction, Reliability, Trust)
- Interactive timeline (2015-2025)
- Statistics showcase

#### 3. **Products Page** (`/products`)
- Search functionality for products/categories
- 7 main product categories with expandable subcategories:
  - **Engine**: Engine Components, Gaskets, Mountings, Belts, Filters, Lubrication Parts, Cooling System Parts, Fuel System Parts, Manifolds
  - **Power Train**: Brake & Wheel Parts, Clutch, Final Drive, Gear Box, Steering, Suspension
  - **Body**: A/C & Heater Parts, Body Parts, Fasteners
  - **Electrical**: Battery, Electronic Control Units, Horn, Ignition System, Lamps & Mirrors, Switches/Relays/Connectors, Starting & Charging System
  - **Tools**: Garage Tools
  - **Accessories**: Auto Accessories
  - **Liquids & Lubricants**: Engine Oil, ATF Oil

#### 4. **Contact Page** (`/contact`)
- Interactive contact form with validation
- Contact information cards (Phone, Email, Address, Hours)
- Google Maps integration
- Grand Opening banner (February 1, 2026)
- FAQ section

### 🎯 Components

- **Navbar**: Fixed navbar with dropdown menus, mobile-responsive
- **Footer**: Complete footer with links and contact info
- **BrandLogos**: Animated carousel showcasing 16+ automotive brands
- **PageTransition**: Smooth page transitions
- **Loading**: Beautiful loading animation

### 🎨 Brand Colors
- **Primary Red**: `#E31E24`
- **Gold**: `#FFD700`
- **Black**: `#000000`, `#0a0a0a`
- **Gray**: `#2a2a2a`, `#f5f5f5`

### 🏢 Company Information
- **Name**: Burj Al Remal Auto Spare Parts TR LLC
- **Location**: Al Sajaa Industrial Area, Sharjah, UAE
- **Phone**: 0544313168 / 0554956941
- **Email**: burjalremal2025@gmail.com
- **Grand Opening**: Sunday, February 1, 2026 at 5:00 PM

### 🚗 Brands Supplied
Lexus, Toyota, Nissan, Honda, Mitsubishi, Mazda, Suzuki, Hyundai, Kia, Audi, BMW, Mercedes-Benz, Isuzu, MG, Jeep, Chery

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Font**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd burj-al-remal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
burj-al-remal/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── products/
│   │   └── page.tsx          # Products page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   └── loading.tsx           # Loading component
├── components/
│   ├── Navbar.tsx            # Navigation component
│   ├── Footer.tsx            # Footer component
│   ├── BrandLogos.tsx        # Brand carousel
│   └── PageTransition.tsx    # Page transitions
├── public/
│   ├── logo.png              # Company logo
│   └── logos/                # Brand logos
├── next.config.ts            # Next.js config
├── tailwind.config.ts        # Tailwind config
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## 🎨 Animation Features

- **Scroll-triggered animations**: Elements animate when scrolled into view
- **Hover effects**: Interactive hover states on all clickable elements
- **Page transitions**: Smooth transitions between pages
- **Infinite carousel**: Auto-scrolling brand logos
- **Loading states**: Beautiful loading animations
- **Floating elements**: Animated background elements
- **Staggered animations**: Sequential animation delays for lists

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large**: > 1280px

## 🎯 Performance Optimizations

- Next.js Image optimization for all images
- Lazy loading with `whileInView` for scroll animations
- Optimized animations using GPU-accelerated transforms
- Code splitting with Next.js App Router
- Turbopack for faster development builds

## 📞 Contact

For any inquiries about the website:
- **Email**: burjalremal2025@gmail.com
- **Phone**: 0544313168 / 0554956941

## 📝 License

© 2025 Burj Al Remal Auto Spare Parts TR LLC. All rights reserved.

---

Built with ❤️ using Next.js and Framer Motion
