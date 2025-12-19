# Chicago Pro Movers - Jekyll Website

A professional Jekyll website for a Chicago-based moving company, converted from a cleaning service website template.

## Features

- **Responsive Design:** Mobile-first design that works on all devices
- **Service Pages:** Individual pages for each moving service
- **Quote System:** Multi-step booking form with instant pricing
- **Service Areas:** Comprehensive coverage of all Chicago neighborhoods
- **Contact Forms:** Multiple ways for customers to get in touch
- **SEO Optimized:** Built with SEO best practices in mind
- **Fast Loading:** Optimized performance and minimal dependencies

## Installation

1. **Prerequisites:**
   - Ruby 2.7 or higher
   - Jekyll 4.3 or higher
   - Bundler

2. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd chicago-movers
   ```

3. **Install dependencies:**
   ```bash
   bundle install
   ```

4. **Build and serve the site:**
   ```bash
   bundle exec jekyll serve
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:4000
   ```

## File Structure

```
chicago-movers/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page templates
│   ├── default.html         # Main layout template
│   └── service.html         # Service page layout
├── _includes/               # Reusable components
│   ├── navbar.html          # Navigation bar
│   └── footer.html          # Footer
├── _sass/                   # Sass stylesheets
│   ├── _base.scss          # Base styles
│   ├── _layout.scss        # Layout styles
│   ├── _components.scss    # Component styles
│   └── _utilities.scss     # Utility classes
├── _services/              # Service content
│   ├── residential-moving.md
│   └── commercial-moving.md
├── assets/                 # Static assets
│   ├── css/
│   │   └── style.scss     # Main stylesheet
│   ├── js/
│   │   └── main.js        # Main JavaScript
│   └── images/
│       └── logo.svg       # Company logo
├── index.html             # Homepage
├── services.html          # Services overview
├── book-now.html          # Booking form
├── areas.html             # Service areas
├── about.html             # About page
├── contact.html           # Contact page
├── Gemfile                # Ruby dependencies
└── README.md              # This file
```

## Customization

### Company Information
Update the following in `_config.yml`:
- Company name and description
- Contact information (phone, email, address)
- Social media links
- Service areas and ZIP codes

### Colors and Styling
Modify the color scheme in `_sass/_base.scss`:
- Primary color: `#2563eb` (blue)
- Secondary colors can be updated in the variables section

### Content Updates
- Update service descriptions in `_services/`
- Modify page content in HTML files
- Add new services by creating new `.md` files in `_services/`

## Services Included

1. **Residential Moving** - Homes, apartments, condos
2. **Commercial Moving** - Offices, retail spaces, businesses
3. **Packing Services** - Professional packing and materials
4. **Storage Solutions** - Short and long-term storage
5. **Long Distance** - Interstate moving services
6. **Specialty Items** - Pianos, artwork, antiques

## Service Areas

The website covers all Chicago neighborhoods including:
- Downtown Chicago (Loop, River North, Streeterville)
- North Side (Lincoln Park, Lakeview, Wicker Park)
- South Side (Hyde Park, Bridgeport, Bronzeville)
- West Side (West Loop, Ukrainian Village)
- Northwest Side (Portage Park, Belmont Cragin)
- Southwest Side (Garfield Ridge, Clearing)
- Far North Side (Rogers Park, Edgewater)
- Far South Side (Morgan Park, Beverly)

## Features

### Multi-Step Booking Form
- Step 1: Move details (type, size, locations, date)
- Step 2: Contact information
- Step 3: Instant quote generation
- Form validation and error handling
- Phone number and ZIP code formatting

### Interactive Elements
- Mobile-friendly navigation
- FAQ accordion sections
- Service area checker
- Contact forms with validation
- Smooth scrolling and animations

### SEO Features
- Semantic HTML structure
- Meta tags and descriptions
- Schema markup ready
- Fast loading times
- Mobile optimization

## Deployment

### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Site will be available at `https://[username].github.io/[repository-name]`

### Netlify
1. Connect your repository to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`
4. Deploy automatically on each push

### Other Hosting
Build the site with `bundle exec jekyll build` and upload the `_site` directory to your web server.

## Maintenance

### Regular Updates
- Keep Jekyll and dependencies updated
- Review and update service information
- Check contact details and pricing
- Update testimonials and reviews

### Content Management
- Services are managed in `_services/` directory
- Global settings in `_config.yml`
- Page content in HTML files
- Images in `assets/images/`

## Support

For technical issues or questions about customization:
1. Check Jekyll documentation
2. Review the file structure and code organization
3. Test changes locally before deploying
4. Keep backups of your customizations

## License

This Jekyll theme is open source and available under the MIT License.

---

**Chicago Pro Movers**  
Professional moving services in Chicago, IL  
Licensed, insured, and trusted by thousands of satisfied customers.
