
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold flex items-center">
              <span className="text-accent">K</span>ashish<span className="text-accent">V</span>erma
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <a href="#home" className="hover:text-accent transition-colors py-2">Home</a>
            <a href="#about" className="hover:text-accent transition-colors py-2">About</a>
            <a href="#skills" className="hover:text-accent transition-colors py-2">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors py-2">Projects</a>
            <a href="#experience" className="hover:text-accent transition-colors py-2">Experience</a>
            <a href="#contact" className="hover:text-accent transition-colors py-2">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center text-foreground/70">
          <p>© 2024 Kashish Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
