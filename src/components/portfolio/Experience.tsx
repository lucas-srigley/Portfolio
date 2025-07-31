import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "Celestica",
      location: "Toronto, ON",
      period: "May 2024 – Aug 2025",
      description: [
        "Contributing to the development and maintenance of 30+ internal web apps on GCP to streamline enterprise operations",
        "Leveraging Angular, SpringBoot, Node.js, Maven, Git, Bootstrap, Postman, and Jenkins to support 17,000+ active users",
        "Upgraded a key legacy app to a modern stack, increasing user activity by 110% and performance by 60%",
        "Ensuring consistent test coverage across the codebase by implementing automated tests using Cypress and JUnit",
        "Resolving ServiceNow tickets by investigating issues, fixing bugs, and providing timely support via email",
        "Participating in code review and security vulnerability meetings to ensure the quality of software and changes",
        "Providing mentorship and ongoing support to incoming interns, ensuring a smooth and efficient transition into the team"
      ]
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "Smith Engineering",
      location: "Kingston, ON", 
      period: "Sep 2023 – Dec 2023",
      description: [
        "Delivered clear explanations and assisted 30 students with coding challenges in an introductory C programming course",
        "Assisted in labs and graded assignments, providing constructive feedback to help students identify areas for improvement",
        "Provided tailored guidance to students across varying skill levels, enhancing student understanding and engagement"
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
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
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