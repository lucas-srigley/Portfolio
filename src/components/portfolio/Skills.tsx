import { Code, Database, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "C/C++", "HTML/CSS", "PHP", "JavaScript", "TypeScript", "SQL", "Arduino", "Swift"]
    },
    {
      title: "Developer Tools", 
      icon: Wrench,
      skills: ["GCP", "Azure", "AWS S3", "GitHub Actions", "Jenkins", "MongoDB", "MySQL", "PostgreSQL", "Postman", "Maven"]
    },
    {
      title: "Frameworks",
      icon: Globe, 
      skills: ["Angular", "SpringBoot", "React", "Node.js", "Express", "Bootstrap", "JUnit", "Cypress"]
    }
  ];

  return (
    <section id="skills" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through academic learning, professional experience, and personal projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="card-elevated p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="bg-muted/50 hover:bg-primary/10 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;