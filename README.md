# Chibueze Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and React Router, powered by Vite.

## Features

- 🚀 **React 18** with TypeScript for type safety
- ⚡ **Vite** for lightning-fast development and builds
- 🎨 **Tailwind CSS** for modern, responsive styling
- 🧭 **React Router** for client-side routing
- ✨ **Prettier** for consistent code formatting
- 🔍 **ESLint** for code quality and best practices
- 📱 **Responsive Design** that works on all devices
- 🎯 **Modern UI/UX** with smooth transitions and hover effects

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Code Quality**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd chibueze-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start the development server with Vite
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx     # Navigation component
├── pages/              # Page components
│   ├── Home.tsx       # Home page
│   ├── About.tsx      # About page
│   ├── Projects.tsx   # Projects page
│   └── Contact.tsx    # Contact page
├── App.tsx            # Main app component
├── main.tsx           # Entry point (Vite convention)
└── index.css          # Global styles with Tailwind
```

## Configuration Files

- **`vite.config.ts`** - Vite configuration
- **`.prettierrc`** - Prettier formatting rules
- **`.eslintrc.js`** - ESLint configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration
- **`postcss.config.js`** - PostCSS configuration

## Why Vite?

- ⚡ **Lightning Fast** - Instant server start and hot module replacement
- 🚀 **Modern Build** - Uses native ES modules for faster builds
- 🔧 **Rich Features** - Built-in TypeScript, JSX, and CSS support
- 📦 **Optimized Output** - Rollup-based bundling for production
- 🎯 **Developer Experience** - Excellent error messages and debugging

## Customization

### Styling

- Modify `tailwind.config.js` to customize colors, fonts, and other design tokens
- Update `src/index.css` for global styles
- Use Tailwind utility classes in your components

### Content

- Update page content in the respective page components
- Modify the navigation in `src/components/Navbar.tsx`
- Update project information in `src/pages/Projects.tsx`

### Routing

- Add new routes in `src/App.tsx`
- Create corresponding page components in `src/pages/`

## Code Formatting

This project uses Prettier for consistent code formatting. The configuration includes:

- Semicolons enabled
- Single quotes for strings
- ES5 trailing commas
- 2-space indentation
- 80 character line width
- Always use parentheses for arrow function parameters

Run `npm run format` to format all files automatically.

## Code Quality

ESLint is configured with:

- TypeScript support
- React best practices
- Prettier integration
- Common code quality rules

Run `npm run lint` to check for issues and `npm run lint:fix` to fix them automatically.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## Deployment

The built app can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist/` folder to an S3 bucket

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run format` and `npm run lint`
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Vite
