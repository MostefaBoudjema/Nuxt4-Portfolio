# Mostefa Boudjema Portfolio

A modern, responsive web portfolio built with Nuxt 4 and Tailwind CSS. This project showcases a professional portfolio website with a clean design, smooth animations, and server-side rendering capabilities.

## 🚀 Features

- Built with Nuxt 4 for optimal performance and SEO
- Server-side rendering (SSR) for better SEO and performance
- Styled with Tailwind CSS for modern, responsive design
- Internationalization support (i18n) with Vue I18n
- Smooth animations using GSAP and AOS
- Image optimization with @nuxt/image
- Lazy loading for optimized performance
- Contact form with backend integration
- Responsive design for all devices
- SEO optimized with meta tags and structured data
- Dark/Light theme switcher
- Blog functionality with markdown support
- WhatsApp integration
- Google Analytics integration

## 🛠️ Tech Stack

- **Framework:** Nuxt 4
- **Frontend:** Vue 3
- **CSS Framework:** Tailwind CSS
- **Animation Libraries:** GSAP, AOS
- **Icons:** Bootstrap Icons, Feather Icons
- **Internationalization:** Vue I18n
- **Image Optimization:** @nuxt/image
- **Carousel:** Vue3 Carousel
- **Back to Top:** Vue Back to Top
- **Markdown:** Marked
- **Lottie Animations:** @lottiefiles/dotlottie-vue
- **Auto Counter:** Vue3 Auto Counter

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd N01-Nuxt3-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🏗️ Project Structure

```
├── assets/           # Static assets (CSS, fonts, images, videos)
│   ├── css/         # Global styles
│   ├── fonts/       # Custom fonts
│   ├── images/      # Image assets
│   └── videos/      # Video assets
├── components/       # Vue components
│   ├── about/       # About page components
│   ├── blog/        # Blog components
│   ├── contact/     # Contact components
│   ├── projects/    # Project components
│   ├── reusable/    # Reusable UI components
│   └── shared/      # Shared layout components
├── composables/      # Vue 3 composables
├── data/            # Static data files
├── layouts/         # Nuxt layouts
├── locales/         # Internationalization files
├── pages/           # Nuxt pages (auto-routing)
├── plugins/         # Nuxt plugins
├── public/          # Public static files
├── server/          # Server-side code
└── store/           # Pinia stores (if using)
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run postinstall` - Prepare Nuxt (runs automatically after install)

## 🌐 Internationalization

The project supports multiple languages using Vue I18n. Language files are stored in the `locales` directory and can be configured via environment variables:

- `I18N_LOCALE` - Default locale
- `I18N_FALLBACK_LOCALE` - Fallback locale

## 🎨 Theme System

The portfolio includes a dark/light theme switcher that persists user preferences across sessions.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for all device sizes, from mobile to desktop, using Tailwind CSS responsive utilities.

## 📧 Contact Form

The contact form is integrated with a backend server and can be configured via environment variables:

- `API_URL` - Backend API endpoint
- `SHOW_CONTACT_FORM` - Toggle contact form visibility

## 🔧 Configuration

### Environment Variables

The project uses several environment variables for configuration:

```env
# Internationalization
I18N_LOCALE=en
I18N_FALLBACK_LOCALE=en

# Content
AUTHOR_NAME=Mostefa Boudjema
SHOW_CV=true
SHOW_MULTI_LANG=true
SHOW_HIRE_ME=true
SHOW_BLOG=true
SHOW_CONTACT_FORM=true

# Assets
CV_PATH=/files/MostefaBoudjema-Resume.pdf
VIDEO_LINK_EN=https://www.youtube.com/embed/CMu_27ZURwA?si=sriXHIbvcos5620e

# Contact
WHATSAPP_NUMBER=213793692289

# Project Lists
FULL_LIST=[3,9,1,10,0,11,5,2,4,6,7,8]
HOME_LIST=[3,14,15,6,9,10]
```

### Nuxt Configuration

The main configuration is in `nuxt.config.ts` and includes:

- Tailwind CSS integration
- Image optimization
- SSR enabled
- Vercel deployment preset
- Google Analytics integration
- Custom head configuration

## 🚀 Deployment

The project is configured for deployment on Vercel with the following features:

- Server-side rendering (SSR)
- Static site generation support
- Image optimization
- Automatic builds and deployments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📞 Support

For support, please open an issue in the repository or contact the maintainer.

## 🔗 Links

- **Live Demo:** [Portfolio URL]
- **Backend API:** [API URL]
- **GitHub Repository:** [Repository URL]
