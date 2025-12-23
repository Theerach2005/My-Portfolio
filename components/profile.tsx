"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-20 pb-10 bg-gradient-to-br from-cyan-400 via-blue-600 to-slate-950">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Theerach <br /> Sae-Ngow
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-cyan-200">
            Fullstack Developer & Machine Learning Engineer
          </h2>
          
          <p className="text-2xl text-white/80 max-w-lg leading-relaxed">
            I'm a 3rd-year Computer Engineering student at Chulalongkorn University with a passion for building secure, intelligent digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              onClick={() => {
                const worksSection = document.getElementById('works');
                worksSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full bg-white text-blue-700 hover:bg-cyan-50 px-8 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold bg-transparent">
              <Link 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=theerat.sc@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact Me
              </Link>
            </Button>
          </div>

          <div className="flex gap-6 pt-6 text-white/70">
            {/* GitHub Link */}
            <Link href="https://github.com/Theerach2005" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 cursor-pointer hover:text-cyan-300 transition-all transform hover:scale-110" />
            </Link>

            {/* LinkedIn Link */}
            <Link href="https://www.linkedin.com/in/theerach-sae-ngow-999551389/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-cyan-300 transition-all transform hover:scale-110" />
            </Link>

            {/* Email Link */}
            <Link 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=theerat.sc@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6 cursor-pointer hover:text-cyan-300 transition-all transform hover:scale-110" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Cyan Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition duration-1000"></div>
            
            <Avatar className="w-64 h-64 md:w-96 md:h-96 border-4 border-white/20 shadow-2xl relative">
              <AvatarImage 
                src="/profile-photo.jpg" 
                alt="Theerach Sae-Ngow" 
                className="object-cover"
              />
              <AvatarFallback className="bg-slate-900 text-white text-6xl font-bold">TS</AvatarFallback>
            </Avatar>
            
            {/* Status Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </div>
              <span className="text-white text-sm font-semibold whitespace-nowrap">Available for hire</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}