# Chicago Pro Movers - Tailwind CSS Version

A modern, responsive moving company website built with Jekyll and Tailwind CSS.

## Features

### 🏠 Homepage
- Hero section with ZIP code mini-form
- Trust indicators (licensed, insured, trusted, A+ rating)
- About section with statistics
- Services overview
- FAQ section with accordion functionality
- Service areas preview
- Call-to-action sections

### 📋 Booking System
- Multi-step booking form with progress indicator
- Inventory management with quantity selectors
- Additional services selection
- Contact information collection
- Form validation and submission

### 🗺️ Service Areas
- Comprehensive Chicago area coverage
- Suburbs and surrounding areas
- ZIP code checker functionality
- Interactive service area display

### 📄 Pages
- **Home** (`index.html`) - Main landing page
- **Services** (`services.html`) - Service overview
- **About** (`about.html`) - Company information
- **Areas** (`areas.html`) - Service areas and ZIP codes
- **Book Now** (`book-now.html`) - Multi-step booking form

### 🎨 Design Features
- Modern Tailwind CSS styling
- Responsive design for all devices
- Smooth animations and transitions
- Professional color scheme
- Accessible design patterns
- Font Awesome icons
- Google Fonts (Inter)

## Technology Stack

- **Jekyll** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## Getting Started

### Prerequisites
- Ruby 2.7+ 
- Jekyll 4.0+
- Node.js 14+ (for Tailwind CSS)

### Installation

1. Clone or download the project files
2. Install Jekyll dependencies:
   ```bash
   bundle install
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

4. Build Tailwind CSS:
   ```bash
   npm run build-css
   ```

5. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

6. Open your browser to `http://localhost:4000`

### Development Commands

- `npm run build-css` - Build Tailwind CSS for production
- `npm run watch-css` - Watch and rebuild CSS during development
- `bundle exec jekyll serve` - Serve site locally with live reload
- `bundle exec jekyll build` - Build static site for deployment

## Project Structure

```
chicago-movers-tailwind/
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable components
│   ├── navbar.html         # Navigation header
│   └── footer.html         # Footer with mini-form
├── _layouts/               # Page layouts
│   ├── default.html        # Base layout
│   └── service.html        # Service page layout
├── _services/              # Service content
│   ├── residential-moving.md
│   └── commercial-moving.md
├── assets/                 # Static assets
│   ├── css/               # Compiled CSS
│   └── js/                # JavaScript files
├── src/                   # Source files
│   └── input.css          # Tailwind CSS input
├── index.html             # Homepage
├── services.html          # Services page
├── areas.html             # Service areas page
├── about.html             # About page
├── book-now.html          # Booking form
├── package.json           # Node.js dependencies
├── tailwind.config.js     # Tailwind configuration
└── README.md              # This file
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    600: '#2563eb', // Main brand color
    700: '#1d4ed8',
    // ... more shades
  },
  secondary: {
    800: '#1e293b',
    900: '#0f172a',
  }
}
```

### Contact Information
Update contact details in `_config.yml`:

```yaml
contact:
  phone: "(312) 555-0123"
  email: "info@chicagopromovers.com"
  address: "123 N Michigan Ave, Chicago, IL 60601"
```

### Content
- Homepage content: `index.html`
- Service descriptions: `_services/*.md`
- About page: `about.html`
- Service areas: `areas.html`

## Features Implemented

✅ Responsive design (mobile-first)
✅ Tailwind CSS styling
✅ Multi-step booking form
✅ FAQ accordion
✅ ZIP code validation
✅ Service area checker
✅ Trust indicators
✅ Professional typography
✅ Smooth animations
✅ Form validation
✅ Local storage for form data
✅ SEO-friendly structure
✅ Accessibility features

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Site will be available at `https://[username].github.io/[repository-name]/`

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build-css && bundle exec jekyll build`
3. Set publish directory: `_site`

### Other Static Hosting
Build the site with `bundle exec jekyll build` and upload the `_site` folder to your hosting provider.

## Performance

- Optimized CSS with Tailwind's purge feature
- Minified JavaScript
- Optimized images (when added)
- Fast loading times
- Mobile-optimized

## License

This project is created for Chicago Pro Movers. All rights reserved.

## Support

For questions or support, please contact the development team.