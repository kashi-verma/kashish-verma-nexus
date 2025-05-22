
import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "Bash"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
        "Redux",
        "JWT",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VScode", "Linux", "Appwrite", "Plaid", "Figma"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "Firebase", "Prisma"],
    },
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 shadow-lg fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground/80 rounded-md text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
