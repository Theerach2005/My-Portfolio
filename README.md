# Modern Portfolio | Theerach Sae-Ngow

A high-performance, visually immersive portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. This site showcases my journey as a 3rd-year Computer Engineering student at Chulalongkorn University, specializing in Fullstack Development and Machine Learning.

![Portfolio Preview](public/preview.png) *(Note: Replace with an actual screenshot of your site)*

## 🚀 Live Demo
[View Live Site](https://your-deployment-link.vercel.app)

---

## 🛠️ Tech Stack

| Category           | Technology                                                                 |
|--------------------|----------------------------------------------------------------------------|
| **Framework** | Next.js 15 (App Router)                                                   |
| **Styling** | Tailwind CSS                                                               |
| **Animations** | Framer Motion                                                              |
| **Components** | Shadcn UI                                                                  |
| **Icons** | Lucide React                                                               |
| **Typeface** | Geist Sans & Mono                                                         |

---

## ✨ Features

- **Clean URL Navigation:** Custom JavaScript scroll handling that navigates between sections (Home, Works) without adding ugly hashes (`#works`) to the URL.
- **Dynamic Project Grid:** Interactive cards displaying tech stacks, GitHub links, and deep-dive documentation (PDFs/Reports).
- **Glassmorphism Design:** A modern dark-theme aesthetic using backdrop blurs, cyan gradients, and glowing hover effects.
- **Responsive Layout:** Fully optimized for mobile, tablet, and desktop viewing.
- **Direct Mail Integration:** Uses the Gmail Compose API for a frictionless "Contact Me" experience.

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css      # Custom CSS variables & Tailwind layers
│   ├── layout.tsx       # Root layout & Metadata
│   └── page.tsx         # Main entry point (combines components)
├── components/
│   ├── ui/              # Shadcn primitive components
│   ├── navbar.tsx       # Fixed navigation with scroll logic
│   ├── profile.tsx      # Hero section / Profile
│   └── projects.tsx     # Project grid component
├── public/
│   ├── docs/            # Project reports & PDFs
│   └── projects/        # Project screenshots