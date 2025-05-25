# Discussion With The Changemakers (DWC)

A modern, interactive website for a community-driven event platform that brings together innovators, leaders, and community members to address pressing social challenges through collaborative dialogue and action.

![DWC Logo](./src/assets/DC%20Black.png)

## 📱 Mobile-First Design

DWC website is built with a mobile-first approach, ensuring optimal user experience across all devices:

- **Adaptive Navigation**

  - Collapsible hamburger menu on mobile
  - Sticky navigation with scroll indicators
  - Touch-friendly interactive elements

- **Responsive Components**

  - Fluid typography that scales with viewport
  - Flexible grid layouts using CSS Grid and Flexbox
  - Optimized images with automatic scaling
  - Touch-friendly buttons and interactive elements

- **Performance Optimization**
  - Lazy loading for images and components
  - Optimized animations for mobile devices
  - Reduced motion preferences support
  - Fast loading times across all devices

## 🌟 Features

- **Modern UI/UX Design**

  - Responsive layout for all devices
  - Smooth animations and transitions
  - Intuitive navigation with section indicators
  - Interactive components with Framer Motion
  - Adaptive layouts for different screen sizes
  - Touch-optimized interactions

- **Key Sections**

  - Responsive hero section with dynamic content
  - Adaptive grid layouts for team and gallery
  - Mobile-optimized FAQ accordion
  - Touch-friendly contact form
  - Responsive blog cards
  - Fluid timeline display
  - Adaptive sponsor showcase
  - Mobile-friendly navigation

- **Technical Features**
  - Mobile-first development approach
  - Progressive enhancement
  - Responsive image optimization
  - Touch event handling
  - Viewport-based animations
  - SEO-friendly structure

## 🚀 Tech Stack

- **Frontend Framework**: React.js with Vite
- **Styling**:
  - TailwindCSS for responsive utilities
  - Custom responsive mixins
  - Mobile-first media queries
- **Animations**:
  - Framer Motion with mobile optimization
  - Performance-focused animations
- **Development Tools**:
  - ESLint for code quality
  - PostCSS for CSS processing
  - Node.js environment

## 📱 Responsive Design Implementation

### Breakpoints

```js
screens: {
  'sm': '640px',   // Mobile devices
  'md': '768px',   // Large mobile/Tablets
  'lg': '1024px',  // Tablets/Laptops
  'xl': '1280px',  // Desktops
  '2xl': '1536px', // Large screens
}
```

### Key Responsive Features

1. **Navigation**

   - Mobile: Hamburger menu with slide-out navigation
   - Tablet: Condensed navigation with dropdowns
   - Desktop: Full horizontal navigation

2. **Grid Layouts**

   ```css
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   ```

   - Mobile: Single column
   - Tablet: 2 columns
   - Desktop: 3-4 columns

3. **Typography**

   ```css
   font-size: clamp(1rem, 2.5vw, 2rem);
   ```

   - Mobile: Optimized for readability
   - Tablet: Scaled proportionally
   - Desktop: Maximum comfortable size

4. **Images**

   - Mobile: Optimized resolution
   - Tablet: Medium resolution
   - Desktop: Full resolution
   - Using `srcset` for responsive images

5. **Interactive Elements**
   - Touch targets: Minimum 44x44px
   - Hover states: Only on capable devices
   - Focus states: Enhanced visibility

### Testing Breakpoints

- 📱 Mobile S: 320px
- 📱 Mobile M: 375px
- 📱 Mobile L: 425px
- 📱 Tablet: 768px
- 💻 Laptop: 1024px
- 🖥️ Desktop: 1440px

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dwc-website.git
   cd dwc-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=DWC Website
VITE_APP_DESCRIPTION=Discussion With The Changemakers
```

### Customization

- Update `tailwind.config.js` for theme customization
- Modify `src/data/index.js` for content management
- Add images to `src/assets/` directory

## 🎨 Color Scheme

```js
colors: {
  'brand-primary': '#[Your Primary Color]',
  'brand-light': '#[Your Light Variant]',
  'neutral-black': '#2A2A2A',
  'neutral-white': '#FFFFFF',
  'neutral-gray': '#666666',
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Project Lead: Abdullah Al Mubin
- UI/UX Design: Abdullah Al Mubin
- Frontend Development: Abdullah Al Mubin
- Content Strategy: Abdullah Al Mubin

## 📞 Contact

For questions and support, please contact:

- Email: mubinalakib786@gmail.com
- Website: mubin.xyz
- Twitter: MubinAkib

## 🙏 Acknowledgments

- [List any libraries, inspirations, or resources you'd like to acknowledge]
- Special thanks to all contributors and community members

---

Made with ❤️ by Abdullah Al Mubin
