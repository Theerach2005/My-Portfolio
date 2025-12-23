"use client";
import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "My Works", href: "#works" },
  { 
    name: "Contact", 
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=theerat.sc@gmail.com", 
    target: "_blank", 
    rel: "noopener noreferrer" 
  },
];

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    elem?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  }
};

  return (
    <nav className="fixed top-0 w-full h-20 border-b border-white/10 bg-black/50 backdrop-blur-md z-[100]">
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        
        {/* Logo / Home Link */}
        <Link 
          href="/" 
          className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Portfolio
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              target={link.target}
              rel={link.rel}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-white/80 hover:text-cyan-400 transition-colors text-lg font-semibold tracking-wide cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}