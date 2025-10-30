# Veelux Watches

A premium e-commerce website showcasing luxury watches with a modern, elegant design. Built with vanilla HTML, CSS, and JavaScript, featuring a responsive layout and interactive elements.

## Table of Contents

- [Project Purpose](#project-purpose)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Purpose

Veelux Watches is a static e-commerce website designed to showcase and sell luxury watches. The project aims to provide an elegant, user-friendly online shopping experience that highlights premium watch collections with modern web technologies. It serves as a digital storefront for watch enthusiasts, offering detailed product information, responsive design, and interactive features.

## Key Features

### 🏠 Hero Section
- Full-screen hero image with compelling tagline
- Call-to-action buttons for shopping and collection viewing
- Responsive design with elegant typography

### 🏷️ Brand Showcase
- Interactive swiper carousel displaying trusted watch brands
- Smooth animations and hover effects
- Auto-playing slideshow with customizable speed

### ⭐ Features Section
- Highlighted product benefits:
  - Precision quartz movement
  - Water resistance
  - Luxury comfort design
  - Long-lasting battery
  - Worldwide shipping

### 🛍️ Product Collection
- Grid layout showcasing watch products
- Product cards with images, descriptions, and pricing
- Hover effects and smooth transitions
- "Add to Cart" functionality (UI placeholder)

### 📞 Contact Form
- Customer inquiry form with validation
- Success message display
- Professional contact interface

### 🎨 Design Features
- **Mobile-First Responsive Design**: Optimized for mobile devices with progressive enhancement for tablets and desktops
- **Fixed Navigation**: Persistent header with hamburger menu for mobile and horizontal menu for larger screens
- **Touch-Friendly Interface**: Minimum 44px touch targets and appropriate spacing for mobile usability
- Dark/light mode toggle (UI placeholder)
- Custom typography with Google Fonts
- Elegant color scheme and gradients

## Tech Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with responsive design
- **JavaScript (ES6+)**: Interactive functionality

### Libraries & Frameworks
- **Swiper.js**: Touch-enabled slider/carousel library
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Custom typography (Cormorant Garamond, Playfair Display, Merriweather)

### Dependencies
```json
{
  "dependencies": {
    "swiper": "^12.0.3"
  }
}
```

### Development Tools
- **NPM**: Package management
- **VS Code**: Development environment

## Architecture

### File Structure
```
veelux-watches/
├── index.html          # Main HTML file with semantic structure
├── index.js            # JavaScript functionality (Swiper carousel, mobile navigation)
├── styles.css          # Mobile-first responsive stylesheet
├── mediaquery.css      # Media queries for tablets (768px+) and desktops (1024px+)
├── package.json        # Project dependencies
├── package-lock.json   # Dependency lock file
├── assets/             # Brand logos
│   ├── brand 1.png
│   ├── brand 2.png
│   └── ...
├── images/             # Product and hero images
│   ├── hero bg.jpg
│   ├── apple.jpg
│   ├── silver-luxury.jpg
│   └── ...
└── README.md           # Project documentation
```

### Code Organization
- **HTML**: Semantic structure with sections for hero, brands, features, collection, and contact
- **CSS**: Mobile-first responsive design with base styles for mobile, progressive enhancement via media queries
- **JavaScript**: Event-driven interactions for Swiper carousel and mobile navigation toggle

### Responsive Design Approach
- **Mobile-First**: Base styles optimized for mobile devices (320px+)
- **Tablet Enhancement**: Media queries at 768px+ for tablets
- **Desktop Enhancement**: Media queries at 1024px+ for desktops
- **Touch-Friendly**: Minimum 44px touch targets, appropriate spacing
- **Fixed Navigation**: Persistent header with hamburger menu for mobile, horizontal menu for larger screens
- **Flexible Layouts**: Grid and flexbox systems that adapt to screen sizes

## Setup and Installation

### Prerequisites
- Node.js (for package management)
- Modern web browser
- Text editor (VS Code recommended)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd veelux-watches
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Open in browser**
   - Open `index.html` directly in your web browser
   - Or use a local server for better development experience

4. **Run the project**
```

## Usage

### Viewing the Website
1. Open `index.html` in a web browser
2. Navigate through sections using the header menu
3. Browse products in the collection section
4. Use the contact form to send inquiries

### Customization
- **Styling**: Modify `styles.css` for visual changes
- **Content**: Update `index.html` for content changes
- **Functionality**: Enhance `index.js` for additional features

### Example Code Snippets

#### Adding a New Product
```html
<div class="product">
  <img src="images/new-watch.jpg" alt="New Watch">
  <h3>New Watch Model</h3>
  <p>Description of the new watch.</p>
  <p class="price">₦XX,XXX</p>
  <button>Add to Cart</button>
</div>
```

#### Customizing Swiper Configuration
```javascript
const swiper = new Swiper('.brandSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000, // Change delay in milliseconds
    disableOnInteraction: false,
  },
  speed: 1500, // Change transition speed
  // ... other options
});
```

## Testing

### Manual Testing Checklist
- [x] **Mobile-First Responsive Design**: Base styles for mobile (320px+), enhanced for tablets (768px+) and desktops (1024px+)
- [x] **Fixed Navigation**: Persistent header with hamburger menu toggle for mobile, horizontal menu for larger screens
- [x] **Touch-Friendly Interface**: Minimum 44px touch targets, appropriate spacing for mobile usability
- [x] **Navigation Menu Functionality**: Hamburger menu toggle, link clicks, and outside clicks to close
- [x] **Swiper Carousel**: Autoplay and interactions across all screen sizes
- [x] **Contact Form**: Validation and submission with success message
- [x] **Hover Effects**: Transitions and animations on supported devices
- [x] **Image Loading**: Responsive images that scale appropriately
- [x] **Cross-Browser Compatibility**: Tested in modern browsers


### Performance Testing
- [x] Page load times optimized for mobile-first approach
- [x] Responsive images that scale appropriately across devices
- [x] Touch-friendly interactions for mobile usability

### Accessibility Testing
- [x] Keyboard navigation support
- [x] Screen reader compatibility with semantic HTML
- [x] Color contrast ratios meeting WCAG guidelines
- [x] Touch targets minimum 44px for mobile accessibility

## Contributing

We welcome contributions to improve Veelux Watches! Please follow these guidelines:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Open a Pull Request

### Code Style Guidelines
- Use semantic HTML5 elements
- Follow CSS BEM methodology where applicable
- Write clean, readable JavaScript with comments
- Ensure responsive design principles
- Optimize images and assets

### Areas for Contribution
- Enhanced interactivity (e.g., shopping cart functionality)
- Additional product categories
- Improved accessibility features
- Performance optimizations
- New design themes
- Multi-language support

### Reporting Issues
- Use GitHub Issues for bug reports
- Provide detailed steps to reproduce
- Include browser and device information
- Attach screenshots if applicable

## License

© 2025 Veelux Watches. All Rights Reserved.

This project is proprietary and all rights are reserved. No part of this project may be reproduced, distributed, or transmitted in any form or by any means without prior written permission from Veelux Watches.


### Business Information
- **Location**: Nigeria (Worldwide Shipping Available)
- **Currency**: Nigerian Naira (₦)
- **Shipping**: Worldwide delivery available
- **Returns**: 30-day return policy

---

*Built with passion for luxury timepieces and modern web development.*# Veelux
# Veelux
