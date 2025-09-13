# 🥗 SlimMind Nutrition Website

**A modern, high-performance, and responsive portfolio website for nutritionist João Paulo, built with Next.js and TypeScript.**

---

_[Read this in Portuguese / Leia em Português](README-PT.md)_

---

## The Problem

In today's digital age, a compelling online presence is essential for health and wellness professionals to connect with potential clients. Nutritionist João Paulo needed a platform that not only showcased his services and methodology but also reflected his modern, holistic approach to nutrition. The challenge was to move beyond a static, generic website and create an engaging, performant, and interactive experience that could effectively convert visitors into clients.

The goal was to build a site that was not just a digital business card, but a dynamic tool for client acquisition, featuring testimonials, detailed service plans, and direct lines of communication.

## The Solution

The **SlimMind Nutrition Website** is a single-page application designed to provide an immersive and informative user experience. It serves as the digital front door for João Paulo's nutrition consultancy, "SlimMind."

The application presents all essential information in a seamless, scrolling format, divided into logical sections. It dynamically fetches client ratings from an external Google Sheet, displays testimonials in an interactive carousel, and integrates direct WhatsApp call-to-actions to facilitate easy communication and appointment scheduling.

## Key Features

The architecture of this tool leverages a modern tech stack to achieve a high degree of performance, responsiveness, and interactivity.

-    **Modern Frontend Architecture:** Built with **Next.js 15** using the App Router, ensuring a fast, SEO-friendly, and scalable foundation.
-    **Fully Responsive Design:** Utilizes **CSS Modules** with extensive media queries to deliver a flawless viewing experience across all devices, from small mobile screens to large desktops.
-    **Dynamic Content Integration:** Fetches and displays client ratings in real-time from a Google Sheet via a custom API route, providing social proof and building trust.
-    **Optimized Media:** Leverages the `next-video` library for efficient video streaming and `next/image` for optimized image loading, enhancing performance and user experience.
-    **Interactive UI/UX:** Features an interactive testimonial carousel (`react-alice-carousel`) and smooth animations on scroll, creating an engaging and professional user journey.
-    **Direct Client Engagement:** Implements clear call-to-action buttons that open pre-filled WhatsApp chats, reducing friction for potential clients to get in touch.
-    **Typed JavaScript:** Written entirely in **TypeScript** for robust, maintainable, and error-free code.

## Demo

The final application is a visually appealing and professional single-page website. It guides the user through various sections: an introduction with a video, details about the nutritionist and the SlimMind philosophy, service plans, client testimonials, and a contact section.

_{ Vídeo} _

## Installation & Usage

Follow these steps to run the project on your local machine.

1.   **Clone the repository:**

     ```bash
     git clone https://github.com/armandomonteir-o/nutri-jampa
     cd nutri-jampa
     ```

2.   **Set up a virtual environment (Recommended):**
     This project uses Node.js. Ensure you have it installed.

3.   **Install dependencies:**

     ```bash
     yarn install
     # or
     npm install
     ```

4.   **Run the development server:**
     This command will also sync the video assets.

     ```bash
     yarn dev
     ```

     Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## Tech Stack

-    **Framework:** [Next.js](https://nextjs.org/) Chosen for its powerful features like Server-Side Rendering (SSR) and Static Site Generation (SSG), which provide excellent performance and SEO—critical for a public-facing portfolio. The App Router was used for a modern, scalable architecture.
-    **Library:** [React](https://react.dev/) As the foundation of Next.js, React allows for the creation of a modular and interactive user interface through a component-based architecture, making the code reusable and easy to maintain.
-    **Language:** [TypeScript](https://www.typescriptlang.org/) - Selected to add static typing to JavaScript. This increases code quality, reduces runtime errors, and improves the developer experience by making the codebase more robust and self-documenting.
-    **Styling:** [CSS Modules](https://github.com/css-modules/css-modules) - Used for styling to ensure that class names are locally scoped to their components. This approach prevents style conflicts and makes the CSS more manageable and scalable as the project grows.
-    **Video:** [next-video](https://next-video.dev/) - A library specifically designed for Next.js that simplifies and optimizes video delivery. It was chosen to handle the main video, providing automatic transcoding, adaptive streaming, and optimized loading.
-    **Carousel:** [React Alice Carousel](https://github.com/maxmarinich/react-alice-carousel) - A lightweight and customizable carousel component used to display client testimonials in an interactive and space-efficient way.
-    **Icons:** [React Icons](https://react-icons.github.io/react-icons/) - This library provides a vast collection of popular icons as React components, simplifying the process of adding and styling icons throughout the application, such as in the social media links.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributor

A project conceived and developed by Armando Monteiro."

<a href="https://github.com/armandomonteir-o">
  <img src="https://avatars.githubusercontent.com/u/141039211?v=4" width="75" height="75">
</a>

---
