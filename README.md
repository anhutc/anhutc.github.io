# My Links - Social Media Link Tree

A beautiful, modern, and responsive link tree website to showcase all your social media links and CV in one place.

## ✨ Features

- 🎨 Modern, clean design with gradient backgrounds
- 📱 Fully responsive - works on all devices
- 🌙 Dark mode support
- ✨ Smooth animations and hover effects
- 🔗 All major social media platforms included
- 📄 CV download link
- 🎯 Easy to customize
- ⚡ Fast loading with optimized assets

## 🚀 Quick Start

1. **Download/Clone** this repository to your computer
2. **Open** `index.html` in your web browser to preview
3. **Customize** the links in `script.js` (see customization guide below)
4. **Deploy** to your preferred hosting service

## 🛠️ Customization Guide

### 1. Update Your Personal Information

Open `script.js` and modify the `config` object at the top:

```javascript
const config = {
    name: "Your Name", // Replace with your actual name
    bio: "Your bio here", // Replace with your bio
    profileImage: "path/to/your/image.jpg", // Replace with your profile picture
    links: {
        // Update each platform with your actual URLs
    }
};
```

### 2. Update Social Media Links

In the same `config` object, update each platform's URL:

```javascript
links: {
    facebook: {
        url: "https://facebook.com/yourusername", // Your Facebook profile
        title: "Facebook",
        description: "Follow me on Facebook"
    },
    youtube: {
        url: "https://youtube.com/@yourchannel", // Your YouTube channel
        title: "YouTube", 
        description: "Watch my videos"
    },
    zalo: {
        url: "https://zalo.me/yourphonenumber", // Your Zalo contact
        title: "Zalo",
        description: "Connect on Zalo"
    },
    instagram: {
        url: "https://instagram.com/yourusername", // Your Instagram profile
        title: "Instagram",
        description: "Follow my journey"
    },
    tiktok: {
        url: "https://tiktok.com/@yourusername", // Your TikTok profile
        title: "TikTok",
        description: "Check out my TikTok"
    },
    github: {
        url: "https://github.com/yourusername", // Your GitHub profile
        title: "GitHub",
        description: "View my projects"
    },
    cv: {
        url: "path/to/your/cv.pdf", // Your CV file
        title: "Curriculum Vitae",
        description: "Download my CV"
    }
}
```

### 3. Add Your Profile Picture

Replace the placeholder image with your actual profile picture:

1. Add your image file to the project folder
2. Update the `profileImage` URL in `script.js`
3. Or replace the placeholder URL in `index.html` directly

### 4. Add Your CV File

1. Add your CV file (PDF recommended) to the project folder
2. Update the `cv.url` in the config to point to your file

## 🎨 Customizing Colors and Styling

### Platform Colors

Each social media platform has its own brand colors. You can customize these in `styles.css`:

```css
.facebook {
    --platform-color: #1877f2; /* Facebook blue */
    --platform-color-dark: #166fe5;
}
```

### Background Gradient

Change the background gradient in `styles.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Fonts

The website uses Inter font by default. You can change this in `styles.css`:

```css
body {
    font-family: 'Your-Font', sans-serif;
}
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. Get a custom domain or use the provided URL

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically
4. Get a custom domain

### Option 4: Traditional Web Hosting

1. Upload all files to your web hosting provider
2. Access via your domain name

## 🔧 Advanced Customization

### Adding New Platforms

To add a new social media platform:

1. Add the HTML structure in `index.html`:
```html
<a href="#" class="link-card newplatform" id="newplatform-link">
    <div class="link-icon">
        <i class="fab fa-newplatform"></i>
    </div>
    <div class="link-content">
        <h3>New Platform</h3>
        <p>Connect on New Platform</p>
    </div>
    <div class="link-arrow">
        <i class="fas fa-arrow-right"></i>
    </div>
</a>
```

2. Add CSS styling in `styles.css`:
```css
.newplatform {
    --platform-color: #your-color;
    --platform-color-dark: #your-dark-color;
}

.newplatform .link-icon {
    background: linear-gradient(135deg, #your-color 0%, #your-dark-color 100%);
}
```

3. Add configuration in `script.js`:
```javascript
newplatform: {
    url: "https://newplatform.com/yourusername",
    title: "New Platform",
    description: "Connect on New Platform"
}
```

### Analytics Integration

The website includes basic click tracking. To integrate with Google Analytics:

1. Add your Google Analytics tracking code to `index.html`
2. Uncomment the gtag tracking code in `script.js`

## 📁 File Structure

```
my-links/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Optional: for images, CV, etc.
    ├── profile.jpg
    └── cv.pdf
```

## 🎯 SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Fast loading times

## 🔒 Privacy

- No tracking cookies by default
- No external analytics unless you add them
- All external links open in new tabs

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you have improvements, consider submitting a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help customizing or deploying your link tree:

1. Check this README first
2. Look at the code comments for guidance
3. Open an issue on GitHub if you found a bug

## ✨ Tips for Best Results

1. **Use high-quality images** for your profile picture
2. **Keep your bio concise** and engaging
3. **Test all links** before deploying
4. **Use a PDF format** for your CV
5. **Regularly update** your links and information

---

**Happy linking! 🌟** 