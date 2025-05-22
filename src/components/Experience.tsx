
import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Web Developer Intern",
      company: "BNB Tech Pvt. Ltd.",
      duration: "May 2024 – Jul 2024",
      location: "Jaipur, Hybrid",
      description: [
        "Built innovative web solutions to increase traffic and customer satisfaction.",
        "Optimized performance and led new feature development in agile teams."
      ],
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      duration: "May 2024 – Aug 2024",
      location: "",
      description: [
        "Contributed to open source, collaborated via Git, mentored others.",
        "Worked on C++, JavaScript, and full-stack development frameworks."
      ],
    },
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="md:flex items-center justify-between">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:order-last"}`}>
                    <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <div className="text-accent font-medium mb-1">{experience.company}</div>
                      <div className="text-sm text-foreground/70 mb-4">
                        {experience.duration} {experience.location && `• ${experience.location}`}
                      </div>
                      <ul className="space-y-2">
                        {experience.description.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 text-accent">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
