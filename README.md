# Chicago Pro Movers - Jekyll Website

A modern, responsive Jekyll website for Chicago Pro Movers - a professional moving service in Chicago.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Isometric Illustrations**: Custom-generated isometric images for moving services
- **Service Areas**: Comprehensive coverage of all Chicago neighborhoods
- **Contact Forms**: Easy quote request functionality
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Loading**: Optimized for performance

## Technologies Used

- Jekyll - Static site generator
- Tailwind CSS - Utility-first CSS framework
- Font Awesome - Icon library
- Inter Font - Modern typography
- JavaScript - Interactive functionality

## Structure

```
chicago-movers-jekyll/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page templates
│   └── default.html     # Main layout template
├── assets/              # Static assets
│   └── images/          # Images and illustrations
├── index.html           # Main landing page
├── about.md             # About page
├── services.md          # Services page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Local Development

1. **Prerequisites**: Install Ruby and Jekyll
   ```bash
   ruby --version  # Should be 2.5.0 or higher
   gem install jekyll bundler
   ```

2. **Clone and Setup**:
   ```bash
   git clone <repository-url>
   cd chicago-movers-jekyll
   bundle install
   ```

3. **Run Locally**:
   ```bash
   bundle exec jekyll serve
   # Site will be available at http://localhost:4000
   ```

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages:

1. **Create GitHub Repository**:
   - Create a new repository named `chicago-movers-jekyll`
   - Push your code to the main branch

2. **Enable GitHub Pages**:
   - Go to Settings → Pages in your repository
   - Select "GitHub Actions" as the source
   - The site will automatically deploy when you push to main

3. **Custom Domain** (Optional):
   - Add your custom domain in the Pages settings
   - Update the `url` in `_config.yml` with your domain

## Customization

### Update Company Information
Edit the following files to customize for your moving company:
- `_config.yml` - Site title, description, URL
- `index.html` - Main content, hero section, services
- `about.md` - Company information and story
- `services.md` - Detailed service descriptions

### Add/Remove Services
Modify the services section in `index.html` and update `services.md` accordingly.

### Update Service Areas
Edit the service areas section in `index.html` to reflect your coverage area.

### Change Colors and Styling
Update the CSS variables in `_layouts/default.html`:
```css
:root {
    --primary-color: #1e40af;
    --secondary-color: #3b82f6;
    --accent-color: #f59e0b;
    /* Add more custom colors */
}
```

### Replace Images
Add your own images to the `assets/images/` directory and update the image paths in the HTML files.

## Contact Form Setup

The contact form is currently a placeholder. To make it functional:

1. **Use a Form Service**:
   - Netlify Forms (free tier available)
   - Formspree (free tier available)
   - EmailJS (free tier available)

2. **Update the Form Action**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## SEO Optimization

The site includes basic SEO optimization:
- Meta tags for title, description, and keywords
- Open Graph tags for social media
- Structured data markup
- Sitemap generation

Update the SEO information in `_config.yml` and individual page front matter.

## Performance Optimization

- Images are optimized for web
- CSS and JavaScript are minified
- Fonts are loaded efficiently
- Lazy loading for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue in the GitHub repository.

---

**Built with ❤️ for Chicago movers**