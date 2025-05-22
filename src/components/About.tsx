
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Hey there! I'm a <span className="font-bold">𝐃𝐒𝐀 𝐞𝐱𝐩𝐞𝐫𝐭 𝐚𝐧𝐝 𝐅𝐮𝐥𝐥-𝐒𝐭𝐚𝐜𝐤 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫</span> who loves solving complex challenges with clean, efficient code.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <p>
                I craft efficient algorithms and robust data structures to optimize performance and scalability.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <p>
                I create seamless, user-centric full-stack experiences—from intuitive front-end designs to reliable back-end systems.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <p>
                Skilled in C, C++, Python, JavaScript, React, Node.js, Next.js, and more.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <p>
                I'm a continuous learner, always exploring emerging technologies.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <p>
                Excited to collaborate with forward-thinking professionals to drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
