# Fairplay Moving Website

A professional moving company website built with Jekyll for Fairplay Moving in Chicago.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Booking System**: Instant quote calculator and booking form
- **Modern Aesthetic**: Clean, professional design inspired by MyClean.com
- **3D Cartoon Illustrations**: Custom-generated images for process steps
- **SEO Optimized**: Built with SEO best practices and structured data
- **Fast Loading**: Optimized for performance and user experience

## Pages Included

- **Homepage**: Hero section, instant quote, services overview, testimonials
- **Services**: Detailed service descriptions and pricing
- **About**: Company story, team, and values
- **Contact**: Contact form, FAQ, and company information
- **Booking**: Complete booking form with service options

## Technology Stack

- **Jekyll**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family
- **Vanilla JavaScript**: Interactive functionality

## Getting Started

### Local Development

1. **Install Jekyll** (requires Ruby 2.5+):
   ```bash
   gem install jekyll bundler
   ```

2. **Clone or download the website files**

3. **Install dependencies**:
   ```bash
   bundle install
   ```

4. **Build and serve locally**:
   ```bash
   bundle exec jekyll serve
   ```

5. **Open your browser** and visit `http://localhost:4000`

### GitHub Pages Deployment

1. **Create a new repository** on GitHub (e.g., `fairplay-moving`)

2. **Upload all files** to the repository

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to GitHub Pages section
   - Select source branch (usually `main` or `master`)
   - Click Save

4. **Your site will be available at**: `https://[username].github.io/[repository-name]/`

## Customization

### Brand Colors

Edit the Tailwind CSS configuration in each HTML file to update brand colors:

```javascript
colors: {
    'brand-blue': '#2563eb',
    'brand-blue-dark': '#1d4ed8',
    'brand-blue-light': '#3b82f6',
    'brand-gray': '#6b7280',
    'brand-gray-light': '#f8fafc',
    'brand-gray-dark': '#374151'
}
```

### Company Information

Update the following information in the relevant files:

- **Phone Number**: Search and replace `(312) 555-MOVE`
- **Email**: Search and replace `info@fairplaymoving.com`
- **Company Name**: Update "Fairplay Moving" throughout
- **Service Areas**: Modify in services.html and contact.html

### Images

Replace the placeholder images in `/assets/images/` with your own:

- `hero-mover.png`: Main hero image
- `process-scheduling.png`: Step 1 illustration
- `process-packing.png`: Step 2 illustration
- `process-loading.png`: Step 3 illustration
- `process-transport.png`: Step 4 illustration
- `process-delivery.png`: Step 5 illustration

## File Structure

```
fairplay-moving/
├── _config.yml              # Jekyll configuration
├── _layouts/
│   └── default.html         # Main layout template
├── assets/
│   ├── css/
│   │   └── main.css         # Custom styles
│   ├── js/
│   │   └── main.js          # JavaScript functionality
│   └── images/              # All website images
├── index.html               # Homepage
├── services.html            # Services page
├── about.html               # About page
├── contact.html             # Contact page
├── book.html                # Booking page
├── Gemfile                  # Ruby dependencies
└── README.md                # This file
```

## Performance Optimizations

- **Minified CSS**: Compressed styles for faster loading
- **Optimized Images**: All images are compressed for web
- **Lazy Loading**: Images load as needed
- **CDN Integration**: External libraries loaded from CDN
- **Mobile First**: Responsive design prioritizes mobile experience

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Features

- **Meta Tags**: Proper title, description, and Open Graph tags
- **Structured Data**: Schema.org markup for local business
- **Sitemap**: Automatic sitemap generation
- **Clean URLs**: SEO-friendly URL structure
- **Fast Loading**: Optimized for Core Web Vitals

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Meets WCAG contrast requirements
- **Focus Management**: Clear focus indicators

## Support

For technical support or customization questions:

1. Check this README for common customizations
2. Review the code comments for specific functionality
3. Ensure all dependencies are properly installed

## License

This website template is provided as-is for Fairplay Moving. All custom illustrations and design elements are created specifically for this project.

---

*Built with ❤️ for Chicago's moving community*