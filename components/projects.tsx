"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";

const projectsData = [
  {
    title: "Rent My Ride",
    href: "https://rentmyride-mu.vercel.app/", 
    docHref: "/docs/rent-my-ride-report.pdf",
    description:
      "Rent My Ride is a modern web app for car rentals. Users can browse and filter cars by location, seats, and price; check availability for a date range; book and pay with Stripe.",
    tags: ["Next.js", "React", "TailwindCSS", "Supabase"],
  },
  {
    title: "Taskmaster",
    href: "https://github.com/Theerach2005/Taskmaster", 
    docHref: "",
    description:
      "A high-performance productivity app built with a Go REST API and a React frontend. Features secure Supabase authentication with a custom cross-tab verification flow.",
    tags: ["Vite", "React", "TailwindCSS", "Go", "Supabase"],
  },
  {
    title: "Rhythm game",
    href: "https://github.com/Theerach2005/project-embedded",
    docHref: "/docs/rhythm-game.pdf",
    description:
      "Integrates IoT devices and Cloud services. Utilizes an STM microcontroller to process signals via joystick inputs, synced to Firebase Realtime Database.",
    tags: ["Next.js", "React", "TailwindCSS", "Firebase", "Embedded Systems"],
  },
  {
    title: "Rogue Evil",
    href: "https://github.com/2110215-ProgMeth/project-2024-term-1-pakbokwai_jaibokthorn",
    docHref: "/docs/rogue-evil.pdf",
    description:
      "A rogue-like game inspired by Soul Knight and Resident Evil, developed from the ground up using Java and JavaFX.",
    tags: ["Java", "JavaFX"],
  },
  {
    title: "QuickCatch",
    href: "https://github.com/Theerach2005/Project_Com_Eng_Ess",
    docHref: "/docs/quickcatch.pdf",
    description:
      "An arcade-style game hosted on AWS. Features character customization and a competitive MongoDB-powered leaderboard system.",
    tags: ["HTML", "CSS", "JavaScript", "AWS", "MongoDB"],
  }
];

export default function Projects() {
  return (
    <section id="works" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-center text-white mb-20 tracking-tight"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const imageName = project.title.toLowerCase().replace(/\s+/g, '-') + ".png";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full bg-[#0a0f1a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
              >
                <Link 
                  href={project.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={`/projects/${imageName}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Text Details */}
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed text-[15px] mb-8 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full border border-cyan-500/10 bg-cyan-500/5 text-cyan-400/90 text-[11px] font-bold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                <div className="absolute bottom-6 right-6 z-20">
                  <Link
                    href={project.docHref}
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-lg"
                    title="View Documentation"
                  >
                    <FileText size={24} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}