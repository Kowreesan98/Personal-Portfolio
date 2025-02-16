"use client";

import { Github, Linkedin, Mail, User, Code, Briefcase, ChevronDown, Component, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
// import cv_img  from "@/components/image/cv_pics.jpg";
import cv_img from "@/components/image/cv_pics.jpg";


export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript", "Bootstrap"] },
    { category: "Backend", items: ["Spring Boot", "Laravel", "ASP.NET", "REST APIs", "MySQL","Livewire"] },
    { category: "Tools", items: ["Git", "jira", "BitBucket","CI/CD"] },
  ];

  const projects = [
   
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
    },
    {
      title: "Storekeeper - Product Management",
      description: "Inventory and product management system with real-time tracking.",
      tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Cli-Man",
      description: "Manage the internal clients.",
      tech: ["Spring Boot", "Thymeleaf","Bootstrap", "MySQL"],
      image: "https://plus.unsplash.com/premium_photo-1664476794112-15afc6de2e0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjByZXNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="space-y-6">
          <Avatar className="w-32 h-32 mx-auto">
          <img src="https://media-hosting.imagekit.io//b7de7ea7b07a4320/cv%20pics.jpg?Expires=1834331782&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iolXPDnlbt6lIKuHERPM6fHsFjBjn5BLHVCaEnbl1XDL~DLqz0bw-TetLNzu-yXkwRlq~aH~6Vzb5LOUDfvRPX~EEnEGRdqslFBYzRwkGKc949SeDIP-XbQYTMTZrppBAstog6NBHdavYLWYJtpAMG01VSzP~SN4Ufc1ZbeIrUN7SXOz4ldQDzwYF-UFLOoqaLh7j3Eb8vqIA5R82n61B64J4d~dYdPKd92gMti99S1A0vSyH6t7QpUcYWV7VVwqOKLI-TD6lUBKqF8K7JX12QxBlTdDv2~jbGRb1O9cMiWcqy3SJ0ibfLXOCsEePIl~7ErpD4ukdSn65BvbrskLdg__" alt="Kowreesan" className="w-full h-full object-cover" />
            {/* <image></image> */}
          </Avatar>
          {/* <div className="sticky "> */}
          <h1 className="text-4xl md:text-6xl font-bold bounce ">Kowreesan</h1>
          {/* </div> */}
          <p className="text-xl text-muted-foreground back-in-left">Full Stack Developer</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/Kowreesan98" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/kowreesan-parameswaran" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:kowreesan06@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            I am a passionate Full Stack Developer with 2 years of industrial experience, specializing in creating responsive, user-friendly applications using modern technologies. I graduated with a Bachelor of Science (BIIT Hons) from Uva Wellassa University of Sri Lanka. When I'm not coding, you can find me contributing to open-source projects and exploring new technologies.
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-20 bg-secondary/50">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <Card className="max-w-xl mx-auto p-6">
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
      </section>
    </main>
  );
}