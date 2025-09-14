import { Code, Database, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "PHP", "SQL", "Swift", "HTML/CSS", "R"]
    },
    {
      title: "Frameworks & Libraries", 
      icon: Globe,
      skills: ["Angular", "React.js", "Next.js", "Node.js", "Express.js", "Spring Boot", "Flask", "jQuery", "Bootstrap", "JUnit", "Cypress", "Pytest"]
    },
    {
      title: "Cloud & DevOps Tools",
      icon: Wrench,
      skills: ["GCP", "Microsoft Azure", "AWS", "Jenkins", "GitHub Actions"]
    },
    {
      title: "AI/ML Tools",
      icon: Globe,
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "Pandas", "NumPy", "LangChain"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Data Formats",
      icon: Wrench,
      skills: ["JSON", "XML", "YAML", "CSV"]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["Postman", "Maven", "Git", "Linux", "Bash", "Snyk", "Android Studio", "Google Analytics", "Webpack"]
    },
    {
      title: "Concepts & Methodologies",
      icon: Globe,
      skills: ["REST APIs", "Microservices", "CI/CD", "SDLC", "Agile/Scrum", "Test-Driven Development (TDD)"]
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
