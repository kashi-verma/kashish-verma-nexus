
import React from "react";
import { GitHub, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Fidelio – AI-Powered Feedback Website",
      description:
        "Enables feedback collection via unique shareable URLs. Includes email verification and AI-powered message suggestions.",
      stack: ["React.js", "Next.js", "MongoDB", "OpenAI API"],
      githubUrl: "https://github.com/kashi-verma/Fidelio-feedback-app",
      image: "/placeholder.svg",
    },
    {
      title: "Horizon – Banking SaaS Platform",
      description:
        "A responsive platform for managing multiple bank accounts and real-time fund transfers using Dwolla API.",
      stack: [
        "Next.js",
        "TypeScript",
        "Appwrite",
        "Plaid",
        "Zod",
        "Node.js",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/kashi-verma/Horizon",
      image: "/placeholder.svg",
    },
    {
      title: "Ekatra – Corporate Gifting Platform",
      description:
        "Personalized gifting solution for employees and clients with sleek UI.",
      stack: ["React.js", "Tailwind CSS"],
      githubUrl: "https://github.com/kashi-verma/Ekatra",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="tech-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-foreground/70 hover:text-foreground transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GitHub size={18} />
                    <span>Code</span>
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-foreground/70 hover:text-foreground transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
