## GSAP Agency Hero Reveal

A high-end cinematic intro animation for a creative agency landing page. Features a stacked image card shuffle, synchronized overlay transitions, and responsive kinetic typography reveal.

## Overview

This project showcases a modern agency website with advanced animations powered by **GSAP** (GreenSock Animation Platform). The hero section includes:

- **Stacked Image Card Shuffle**: Dynamic image transitions with staggered animations
- **Synchronized Overlay Transitions**: Coordinated visual effects during reveals
- **Kinetic Typography**: Animated text reveals with character-level animation control
- **Responsive Design**: Typography that respects line breaks on smaller screens

## Features

✨ **Advanced Animations**

- GSAP timeline-based orchestration
- Smooth staggered transitions
- Expo easing for natural motion

🎨 **Modern Design**

- Custom typography (Dirtyline font)
- Elegant color palette
- Responsive layout

⚡ **Performance Optimized**

- Vite build tool with Rolldown bundler
- WebP image format support
- Font preloading and optimization

🛠️ **Developer Experience**

- ESLint with modern config
- Hot Module Replacement (HMR)
- Module-based architecture

## Tech Stack

- **Animation**: [GSAP](https://gsap.com/) v3.14.2
- **Build Tool**: [Vite](https://vitejs.dev/) with Rolldown
- **Linting**: ESLint 9.x
- **Package Manager**: pnpm
- **Module System**: ES Modules

## Project Structure

```
.
├── index.html              # Main HTML entry point
├── src/
│   ├── scripts/
│   │   └── main.js        # Animation logic and DOM manipulation
│   ├── styles/
│   │   ├── style.css      # Main stylesheet
│   │   └── fonts.css      # Font imports
│   └── assets/
│       ├── fonts/         # Custom font files
│       └── images/        # Project images (image-1.webp through image-7.webp)
├── public/
│   ├── _headers           # HTTP headers configuration
│   ├── fonts/             # Public fonts
│   └── images/            # Public images
├── docs/                  # Documentation
├── package.json           # Project dependencies
├── eslint.config.mjs      # ESLint configuration
└── pnpm-lock.yaml         # Dependency lock file
```

## Getting Started

### Prerequisites

- Node.js 18+ (or latest LTS)
- pnpm 8+ (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jmarellanes/gsap__website-reveal--change-rules.git
cd gsap__website-reveal--01
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Scripts

| Script          | Purpose                           |
| --------------- | --------------------------------- |
| `pnpm dev`      | Start development server with HMR |
| `pnpm build`    | Create production-optimized build |
| `pnpm preview`  | Preview production build locally  |
| `pnpm lint`     | Run ESLint to check code quality  |
| `pnpm lint:fix` | Auto-fix ESLint issues            |

## How It Works

### Animation Flow

The project uses GSAP timelines to orchestrate a complex sequence of animations:

1. **Image Cards Reveal** (0.3s - 2.3s)
   - 7 stacked image blocks slide up from bottom
   - Staggered with 0.4s delay between each

2. **Overlay Transition** (2s duration, parallel)
   - Images scale and shift while overlay appears
   - Creates a cinematic transition effect

3. **Content Reveal** (1.6s - 3.9s)
   - Navbar elements fade in and slide down
   - Menu items follow with staggered animation
   - Title text reveals character by character

### Key Components

**HTML**

- Navbar with site info and navigation menu
- Hero section with title and image container
- Semantic HTML structure

**CSS**

- Custom CSS Reset (Layer-based approach)
- CSS variables for theming
- Flexbox and grid layouts
- Responsive design patterns

**JavaScript**

- Dynamic image DOM generation
- Text character wrapping for animation
- GSAP timeline orchestration
- Module-based architecture

## Customization

### Colors

Edit CSS variables in src/styles/style.css:

```css
:root {
  --color-bg: #e3dcc7;
  --color-text-main: #6d6458;
  --color-text-title: #393833;
}
```

### Images

Replace image files in `src/assets/images/` with your own:

- Format: WebP recommended
- Naming: `image-1.webp` through `image-7.webp`
- Adjust `totalImages` in src/scripts/main.js if using different count

### Animations

Modify animation timing and easing in src/scripts/main.js:

- Duration values (in seconds)
- Stagger values
- Easing functions (e.g., `expo.inOut`, `power2.out`)

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android

## Performance Tips

- Images use WebP format for smaller file sizes
- Font files are preloaded in the `<head>`
- GSAP uses GPU acceleration for smooth animations
- Vite's code splitting minimizes initial bundle size

## Troubleshooting

**Images not loading?**

- Ensure image files exist in `src/assets/images/`
- Check file naming matches the script (image-1.webp, etc.)
- Verify image paths are correct

**Animations not playing?**

- Check browser console for JavaScript errors
- Ensure GSAP is properly imported
- Verify DOM elements match selectors in JavaScript

**Build failing?**

- Clear node_modules: `rm -rf node_modules && pnpm install`
- Check pnpm version: `pnpm --version`
- Review ESLint errors: `pnpm lint`

## Credits

- Developed by Jose Arellanes
- Animations powered by [GSAP](https://gsap.com/)
- Built with [Vite](https://vitejs.dev/)

## License

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 José Manuel Díaz

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or feedback, please reach out to the project author.

---

**Last Updated**: February 2026
