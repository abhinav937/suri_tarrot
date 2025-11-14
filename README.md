# Šuri - Balkan Witch & Tarot Website

A beautiful, modern website for advertising mehendi (henna) services and tarot reading services.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **Service Showcase**: Dedicated sections for Mehendi and Tarot Reading services
- **Pricing Information**: Clear pricing for all services
- **Venmo Integration**: Easy payment links via Venmo
- **Scheduling Integration**: Calendly widget for booking appointments
- **Contact Form**: Easy way for customers to get in touch

## Setup Instructions

### 1. Update Venmo Links

Open `index.html` and `assets/js/script.js` and replace the Venmo URLs with your actual Venmo profile:

- In `index.html`: Update the `href` attributes for Venmo links
- In `assets/js/script.js`: Update the `venmoProfileUrl` variable (line ~95)

Example:
```javascript
const venmoProfileUrl = 'https://venmo.com/YourUsername';
```

### 2. Set Up Calendly Scheduling

1. Create a free account at [Calendly.com](https://calendly.com)
2. Create your event types (e.g., "Mehendi Service", "Tarot Reading")
3. Get your Calendly username
4. In `index.html`, find the Calendly widget section (around line 120)
5. Replace `data-url="https://calendly.com/your-username"` with your actual Calendly URL

Example:
```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/suri-services" 
     style="min-width:320px;height:700px;">
</div>
```

### 3. Update Contact Information

In `index.html`, update the contact section with your actual information:
- Email address
- Phone number
- Venmo handle

### 4. Customize Content

Feel free to customize:
- Service descriptions
- Pricing information
- About section content
- Colors and styling in `assets/css/styles.css`

## File Structure

```
suri_tarrot/
├── index.html              # Main HTML file
├── README.md               # This file
└── assets/
    ├── css/
    │   └── styles.css      # All styling
    ├── js/
    │   └── script.js       # JavaScript functionality
    ├── images/             # Place your images here
    │   └── README.md       # Image folder guide
    └── fonts/              # Place custom fonts here (optional)
        └── README.md       # Font folder guide
```

## How to Use

1. Simply open `index.html` in a web browser to view the website
2. For production, upload all files to a web hosting service
3. Make sure all file paths are correct when hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The contact form currently shows an alert on submission. For production, you'll want to integrate with a backend service or email service like:
  - Formspree
  - EmailJS
  - Your own backend API
- All images and icons use emojis. You can replace these with actual images if desired.
- The design is fully responsive and will work on all screen sizes.

## Customization

### Colors

You can customize the color scheme by modifying the CSS variables in `assets/css/styles.css`:

```css
:root {
    --primary-color: #d4a574;    /* Main brand color */
    --secondary-color: #8b6f47;  /* Secondary color */
    --accent-color: #f5e6d3;     /* Accent color */
    --dark-color: #2c2416;       /* Dark text */
    --light-color: #faf8f5;      /* Light background */
}
```

### Fonts

The website uses Google Fonts:
- **Playfair Display**: For headings
- **Poppins**: For body text

You can change these in the `<head>` section of `index.html`.

## Support

For questions or issues, please refer to the code comments or update the contact information in the website.

