import CelesticaLogo from "../../assets/celestica.png";
import SmithLogo from "../../assets/smith_eng.jpg";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Cloud Developer Intern",
      company: "Celestica",
      logo: CelesticaLogo,
      location: "Toronto, ON",
      period: <p>September 2025 - Present (On-Call)<br />May 2024 – Aug 2025 (Full-Time)</p>,
      description: [
        "Developed scalable microservices and APIs across 20+ enterprise supply chain apps on GCP, supporting 18K+ users",
        "Boosted performance of 10+ apps by 20–40% on average through upgrades, reducing load times and backend usage",
        "Increased user engagement 117% by migrating the main news site from AngularJS to Angular and upgrading Spring Boot",
        "Implemented the Mochawesome reporter for Cypress E2E tests, integrating with Jenkins to improve test visibility, tracking, and CI/CD efficiency",
        "Resolved 100+ ServiceNow tickets by diagnosing and fixing issues, improving turnaround times and overall user experience",
        "Enhanced software quality and security by writing JUnit tests, participating in code reviews, and demonstrating best practices",
        "Mentored and onboarded new interns, accelerating ramp-up time and ensuring smooth integration into Agile workflows",
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Smith Engineering",
      logo: SmithLogo,
      location: "Kingston, ON",
      period: <p>Operating Systems (Fall 2025)<br />Introduction to Programming (Fall 2023)</p>,    
      description: [
        "Guided students through labs, coding challenges, and projects using C, Linux Bash, and Git, offering clear explanations and personalized feedback to enhance problem-solving skills",
        "Assisted students in learning foundational programming concepts, debugging techniques, and completing coding assignments, supporting skill development across diverse experience levels",
        "Provided constructive guidance and feedback to help students strengthen coding proficiency and analytical thinking",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building real-world solutions and helping others learn through hands-on development and teaching.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-elevated p-8 group">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4">
                    {/* Logo replaces blue background and fills container */}
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <p className="font-medium text-primary mb-2">{exp.company}</p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
