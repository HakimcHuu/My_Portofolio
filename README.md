# Abdulhakim S. - Full-Stack Developer & App Developer Portfolio

A modern, minimalist, and tech-focused portfolio website showcasing my skills, certifications, and projects as a Full-Stack and App Developer.

## Features

- Responsive, mobile-first design
- Animated, branded SVG logo and consistent site identity
- Smooth navigation and modern UI/UX
- Professional resume and timeline (certifications, experience)
- Project showcase gallery
- Contact form with email functionality (Formspree)
- Services overview
- Modern animations and transitions

## Quick Stats

- **5+ Projects Completed**
- **2+ Years Experience**
- Cisco, Android, Programming, and Data Analysis certifications

## Contact Form Setup

The contact form uses Formspree for email delivery. To set it up:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your endpoint (e.g. `https://formspree.io/f/your_form_id`)
3. Update the `action` attribute in `index.html` or store it in a `.env` file (see below)

### Example:
```html
<form class="contact-form" action="https://formspree.io/f/your_form_id" method="POST" id="contactForm">
```

## Environment Variables

You can use a `.env` file to store sensitive data or configuration, such as:

```
FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

> **Note:** This project is static HTML/CSS/JS, so environment variables are only used if you add a build tool or server-side integration. Do **not** commit your real secrets to public repos.

## CV Download Setup

1. Place your PDF CV as `assets/documents/Abdulhakim_CV.pdf`
2. The download button will work automatically

## Technologies Used

- HTML5, CSS3, JavaScript (Vanilla)
- Font Awesome Icons
- Formspree (for contact form)

## File Structure

```
portifolio/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # All CSS styles
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── logos/          # Logo images (SVG, PNG)
│   ├── misc/           # Profile and other images
│   ├── documents/      # CV and other documents
│   └── Design/         # Design assets
├── .env                # (Optional) Environment variables
└── README.md           # This file
```

## Getting Started

1. Clone or download this repository
2. Set up Formspree (see above)
3. Add your CV file
4. Open `index.html` in your browser
5. Customize content as needed

## Customization

- Update personal info in HTML
- Change colors in CSS `:root` variables
- Add/remove projects, update skills and certifications
- Update contact/social links
- Replace images with your own

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Font Awesome for icons
- Inter & Montserrat font families
- Inspiration from modern web design trends 