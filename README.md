# Fairplay Moving Website

A professional Jekyll website for Fairplay Moving Inc., a licensed and insured moving company in Chicago, IL.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Quote Form**: Multi-step form with inventory management
- **Animated Elements**: Smooth animations and gradient button effects
- **Form Integration**: Ready for Formspree form submission
- **SEO Optimized**: Built with SEO best practices
- **Fast Loading**: Optimized CSS and JavaScript

## Company Information

- **Name**: Fairplay Moving Inc.
- **Address**: 2117 W Hubbard St. Chicago IL 60612
- **Phone**: (312) 858-0611
- **Email**: info@fairplaymoving.com
- **License**: ILCC License #241666

## Setup Instructions

### Prerequisites

- Ruby 2.7 or higher
- Jekyll 4.3 or higher
- Bundler

### Installation

1. Clone or download the website files
2. Install dependencies:
   ```bash
   bundle install
   ```

3. Update configuration:
   - Edit `_config.yml` with your information
   - Replace `YOUR_FORMSPREE_FORM_ID` in `index.html` with your actual Formspree form ID

4. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

5. Open your browser to `http://localhost:4000`

### Formspree Setup

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Copy the form ID
4. Replace `YOUR_FORMSPREE_FORM_ID` in the form action URL

## File Structure

```
fairplay-moving/
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Main layout template
├── assets/
│   ├── css/
│   │   └── main.css     # Main stylesheet
│   └── js/
│       └── main.js      # Interactive functionality
├── index.html           # Main page with quote form
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Customization

### Colors

Edit CSS variables in `assets/css/main.css`:

```css
:root {
  --primary-blue: #1e40af;
  --secondary-blue: #3b82f6;
  --success-green: #10b981;
  /* ... more variables
}
```

### Content

- Edit `index.html` to update service descriptions and company information
- Modify `_config.yml` for site-wide settings
- Update contact information in the footer and navigation

### Inventory Items

Add or modify inventory categories and items in the quote form section of `index.html`.

## Deployment

### GitHub Pages

1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Choose source branch (usually `main` or `gh-pages`)

### Netlify

1. Connect your repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`

### Other Hosting

Build the site locally:
```bash
bundle exec jekyll build
```

Then upload the `_site` folder to your web server.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This website template is provided as-is for Fairplay Moving Inc. All company-specific content and branding are property of Fairplay Moving Inc.

## Support

For technical support or questions about the website, please contact the development team.

For moving services, contact:
- Phone: (312) 858-0611
- Email: info@fairplaymoving.com