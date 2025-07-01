# CV/Resume File Setup

## How to Add Your CV

1. **Create your CV** as a PDF file
2. **Name it** `Abdulhakim_CV.pdf`
3. **Place it in this folder** (`assets/documents/`)
4. **The download button will automatically work**

## Alternative Options

### Option 1: Use a different filename
If you want to use a different filename, update the link in `index.html`:
```html
<a href="assets/documents/YOUR_FILENAME.pdf" download class="download-cv">Download CV</a>
```

### Option 2: Link to external CV
You can also link to a CV hosted elsewhere (Google Drive, Dropbox, etc.):
```html
<a href="https://your-external-link.com/cv.pdf" target="_blank" class="download-cv">Download CV</a>
```

### Option 3: Contact form only
If you prefer not to share your CV publicly, you can change the button to:
```html
<a href="#contact" class="download-cv">Request CV</a>
```

## Recommended CV Format
- **File type**: PDF (most professional)
- **File size**: Under 5MB
- **Content**: Include your updated information matching your portfolio
- **Design**: Keep it clean and professional

## Current Status
The download button is ready and will work once you add your CV file here! 

# Environment variables for Abdulhakim S. Portfolio
# Add your Formspree endpoint or other secrets here
FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id 