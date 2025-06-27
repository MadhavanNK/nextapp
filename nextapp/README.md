# Next.js + Tailwind CSS: Complete Documentation

This guide explains how to build a responsive, modern web application using Next.js with Tailwind CSS.

Table of Contents

Introduction  
Why Next.js + Tailwind  
Installation and Setup  
Folder Structure  
Tailwind Configuration Tips  
Creating Components  
Using Layouts  
Deploying the App  
Tools and Extensions  
Learning Roadmap  
FAQ  
Sample Page Code  
Conclusion

Introduction

Next.js is a React framework that enables features like server-side rendering (SSR), static site generation (SSG), API routes, and performance optimization out of the box.

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to rapidly build custom user interfaces without writing traditional CSS.

Why Next.js + Tailwind

Feature                | Next.js                            | Tailwind CSS  
---------------------- | ---------------------------------- | ---------------------------------  
Performance            | SSR and SSG                        | JIT compilation  
SEO                    | Built-in support                   | Easy responsive design  
Developer Experience   | Fast Refresh, File-based routing  | No custom CSS required  
Scalability            | Full-stack capabilities            | Component-based UI  

Installation and Setup

Step 1: Create a Next.js Project

npx create-next-app my-next-tailwind-app  
cd my-next-tailwind-app

Step 2: Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer  
npx tailwindcss init -p

Step 3: Configure Tailwind

Edit tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

Edit styles/globals.css

@tailwind base;  
@tailwind components;  
@tailwind utilities;

Step 4: Start the Development Server

npm run dev

Folder Structure

my-next-tailwind-app  
pages               - Routing and page components  
components          - Reusable UI components  
layouts             - Layout wrappers  
styles              - Global styles  
public              - Static files  
tailwind.config.js  - Tailwind setup  
postcss.config.js   - PostCSS setup  
package.json        - Project metadata

Tailwind Configuration Tips

To enable dark mode, update your config

darkMode: 'class'

To add custom colors

theme: {
  extend: {
    colors: {
      primary: '#2563EB',
      secondary: '#F97316'
    }
  }
}

Creating Components

You can create reusable components inside the `components` folder and import them into your pages. Tailwind CSS classes can be used directly inside JSX elements.

Using Layouts

Layouts help you wrap multiple pages with a consistent structure. Create a layout component in `layouts/` and use it in any page you want.

Deploying the App

To deploy your project using Vercel

npm install -g vercel  
vercel login  
vercel

Follow the prompts to deploy your project

Tools and Extensions

Tailwind CSS IntelliSense  
Prettier  
ESLint  
Heroicons  
Headless UI

Learning Roadmap

Level        | Focus Areas  
-------------|--------------------------  
Beginner     | Pages, Routing, Tailwind Basics, Components  
Intermediate | API Routes, Layouts, SSR and SSG, Responsive Design  
Advanced     | Middleware, CMS Integration, Authentication, Performance

FAQ

Q: Can Tailwind and CSS modules be used together  
A: Yes, you can use Tailwind for utilities and CSS modules for scoped styles.

Q: Can I use TypeScript with this setup  
A: Yes. Use create-next-app with the --typescript flag.

Q: Is Tailwind suitable for large projects  
A: Yes. Tailwind is scalable and used in many enterprise-level applications.

Sample Page Code

Below is the main page layout built using Next.js and Tailwind CSS. It includes a navigation bar and a hero section with a call-to-action button.

File: pages/index.js

```js
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-600">Next.js App</h1>
          <ul className="flex space-x-4 text-gray-700">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Next.js App</h2>
        <p className="text-lg text-gray-600 mb-6">
          This base page is styled using Tailwind CSS and includes a simple layout with a navbar.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}
