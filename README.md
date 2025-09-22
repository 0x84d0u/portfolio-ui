UI Library - @0x84d0u/portfolio-ui
This is a personal UI component library built using the excellent shadcn/ui components, React, and Tailwind CSS. It's designed to provide a consistent look and feel across all my portfolio projects.

Installation
First, install the library package from npm (once it's published):

npm install @0x84d0u/portfolio-ui

You'll also need to have react and tailwindcss installed in your project.

Usage in Your Project
To use the components from this library, you need to configure your project's Tailwind CSS setup and import the library's stylesheet.

1. Configure Tailwind CSS
Your project's tailwind.config.js file needs to be updated to scan the class names from this library's components.

// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Your project's source files
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // IMPORTANT: Add the path to the installed UI library
    "./node_modules/@0x84d0u/portfolio-ui/dist/**/*.js",
  ],
  theme: {
    // You can extend the theme here if needed
  },
  plugins: [require("tailwindcss-animate")],
}

2. Import the CSS
Import the library's stylesheet in your main CSS file. This file contains all the necessary Tailwind base styles and CSS variables for the components to work correctly.

/* In your global CSS file, e.g., src/index.css */

/* Import the library styles */
@import "@0x84d0u/portfolio-ui/dist/style.css";

/* Your own global styles can go here */

3. Use the Components
Now you can import and use the components in your React application.

import React from 'react';
import { Button } from '@0x84d0u/portfolio-ui';

function MyApp() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Awesome App</h1>
      <Button onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
    </div>
  );
}

export default MyApp;

Developing the Library
Clone the repository.

Install dependencies with npm install.

Run the development server with npm run dev.

To add new shadcn/ui components, use the CLI: npx shadcn-ui@latest add [component-name].

After making changes, build the library with npm run build.