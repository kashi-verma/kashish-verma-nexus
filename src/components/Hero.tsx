
import React from "react";
import { GitHub, Linkedin, Code, ExternalLink } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight fade-in">
              Hi, I'm <span className="text-accent">Kashish Verma</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-foreground/80 fade-in" style={{ animationDelay: "200ms" }}>
              Full-Stack Developer & DSA Expert
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl fade-in" style={{ animationDelay: "400ms" }}>
              Crafting robust and user-centric digital experiences with clean, efficient code.
              Passionate about solving complex challenges and continuous learning.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 fade-in" style={{ animationDelay: "600ms" }}>
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex space-x-5 pt-4 fade-in" style={{ animationDelay: "800ms" }}>
              <a
                href="https://github.com/kashi-verma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/kashish-verma-2801332a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="https://leetcode.com/u/kashish_verma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LeetCode"
              >
                <Code />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 fade-in" style={{ animationDelay: "1000ms" }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
              <div className="relative bg-card border border-border p-8 rounded-lg shadow-lg">
                <pre className="text-sm sm:text-base overflow-x-auto">
                  <code>
{`// kashish-verma.js

class Developer {
  constructor() {
    this.name = "Kashish Verma";
    this.role = "Full-Stack Developer";
    this.skills = [
      "C++", "JavaScript", 
      "React", "Node.js"
    ];
    this.location = "India";
    this.interests = [
      "DSA", "Web Development",
      "Open Source"
    ];
  }

  // Always learning...
  code() {
    return "Building the future";
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
