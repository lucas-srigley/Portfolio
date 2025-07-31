import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "qRate",
      description: "Deployed a full-stack website for a course/professor review platform, enabling students to share and explore ratings",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Azure"],
      features: [
        "Set up CI/CD pipelines with GitHub Actions to automate testing and deployment, improving development speed",
        "Secured the platform using JWT for user authentication and input validation filters to ensure safe user engagement"
      ],
      period: "May 2025 - Present",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "ReceiptMe",
      description: "Built a full-stack expense tracker with React, Express, and MongoDB, enabling receipt uploads and budget insights",
      technologies: ["React", "Express", "MongoDB", "Gemini API", "Google OAuth"],
      features: [
        "Integrated Gemini AI API to generate personalized 30-day summaries with natural language insights from spending data",
        "Implemented Google OAuth and demographic comparisons to benchmark spending by age, location, or income"
      ],
      period: "June 2025",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "FrameMax",
      description: "Published an AI-powered iOS app in Swift using the OpenAI API for physique analysis and personalized feedback",
      technologies: ["Swift", "Node.js", "Express", "PostgreSQL", "AWS S3", "OpenAI API"],
      features: [
        "Built PostgreSQL schemas and used Express to optimize queries and maintain data integrity for user metrics",
        "Integrated AWS S3 for secure, scalable storage of user photos and data, ensuring reliable access and management"
      ],
      period: "Jan 2025 – June 2025",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills through full-stack applications, mobile apps, and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-elevated p-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
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