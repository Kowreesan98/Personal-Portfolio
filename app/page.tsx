"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, User, Code, Briefcase, ChevronDown, Component, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect, useMemo, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Component as GlowBackground } from "@/components/ui/background-components";

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");

  const navLinks = useMemo(
    () => [
      { id: "intro", label: "Intro" },
      { id: "about", label: "About Me" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(link.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skills = [
    { category: "Backend", items: ["Django","FastAPI","Spring Boot", "Laravel", "ASP.NET", "REST APIs", "MySQL"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript", "Bootstrap"] },
    { category: "Tools", items: ["Git", "jira", "BitBucket","CI/CD","Docker","Kubernetes","VectorDB","Airflow"] },
  ];

  const projects = [
   
    {
      title: "AI Customer Support Chatbot RAG-Based Intelligence System",
      description: "Python/FastAPI backend with LangChain + FAISS for semantic search, Ollama for RAG-based question answering, and RESTful APIs with Pydantic validation.",
      tech: ["Python", "FastAPI", "LangChain", "FAISS", "Ollama", "RAG", "Pydantic", "REST APIs"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "AI Knowledge Base Search Assistant Retrieval-Augmented Intelligence Platform",
      description: "Python/FastAPI backend with LangChain, Pinecone embeddings, SQLite logging, and Ollama for RAG-based semantic search with PyMuPDF PDF processing.",
      tech: ["Python", "FastAPI", "LangChain", "Pinecone", "SQLite", "Ollama", "PyMuPDF", "RAG"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "E & T Employee Management System",
      description: "Full-stack employee management solution with secure authentication.",
      tech: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "E-Learning Platform",
      description: "A comprehensive e-learning solution with real-time content management.",
      tech: ["Next.js", "Laravel", "Bootstrap 5", "jQuery", "MySQL"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    }
  
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="sticky top-4 z-50 px-4">
        <nav className="max-w-5xl mx-auto rounded-full border border-white/30 bg-white/70 px-4 sm:px-6 shadow-xl backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Portfolio
            </div>
            <div className="relative flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeSection === link.id
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <span
                    className={`absolute inset-0 -z-10 rounded-full transition-all duration-300 ${
                      activeSection === link.id
                        ? "bg-emerald-100/80 shadow-[0_8px_20px_-10px_rgba(16,185,129,1)]"
                        : "bg-transparent"
                    }`}
                  ></span>
                  <span className="relative flex items-center gap-1">
                    {link.label}
                    {activeSection === link.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 transition" />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-700 sm:inline-flex"
              onClick={() => handleNavClick("contact")}
            >
              Let’s Connect
            </Button>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 transition-all duration-500"
              style={{
                width: `${((navLinks.findIndex((link) => link.id === activeSection) + 1) / navLinks.length) * 100}%`,
              }}
            />
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <section id="intro" className="relative">
        <AuroraBackground className="h-screen text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            className="space-y-6 flex flex-col items-center justify-center"
          >
            <Avatar className="w-32 h-32 mx-auto ring-4 ring-white/40 shadow-xl">
              <img
                src="/cv_pics.jpg"
                alt="Kowreesan"
                className="w-full h-full object-cover"
              />
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white bounce">
              Kowreesan
            </h1>
            <p className="text-xl text-muted-foreground">
              AI-Driven Full-Stack Engineer
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/Kowreesan98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/kowreesan-parameswaran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:kowreesan06@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          {/* <div className="absolute bottom-10 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-700 dark:text-slate-200" />
          </div> */}
        </AuroraBackground>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
          With over 2 years of industrial experience as an AI-Driven Full-Stack Software Engineer, I bring strong problem-solving skills, leadership experience, and a deep passion for technological innovation. I have contributed to multiple R&D initiatives and led projects focused on building intelligent, scalable, and high-impact software solutions. I am seeking a challenging role where I can apply my expertise, creativity, and dedication to drive meaningful improvements and support organizational growth.            {/* I am a passionate Full Stack Developer with 2 years of industrial experience, specializing in creating responsive, user-friendly applications using modern technologies. I graduated with a Bachelor of Science (BIIT Hons) from Uva Wellassa University of Sri Lanka. When I'm not coding, you can find me contributing to open-source projects and exploring new technologies. */}
          </p>
        </Card>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-20 bg-secondary/50">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skillSet) => (
            <Card key={skillSet.category} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-20">
        <GlowBackground className="min-h-fit rounded-3xl border border-slate-200 bg-white/80 px-4 py-16 shadow-[0_20px_70px_-40px_rgba(148,163,184,0.7)]">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </GlowBackground>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-20 bg-secondary/50">
        <GlowBackground className="min-h-fit rounded-3xl border border-slate-200 bg-white/90 px-6 py-16 shadow-[0_20px_70px_-40px_rgba(148,163,184,0.7)]">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="max-w-xl mx-auto p-6 bg-white/90 backdrop-blur">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">kowreesan06@gmail.com</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/kowreesan-parameswaran</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-muted-foreground">github.com/Kowreesan98</p>
                </div>
              </div>
            </div>
          </Card>
        </GlowBackground>
      </section>
    </main>
  );
}