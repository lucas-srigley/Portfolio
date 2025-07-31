import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:lucas.srigley@queensu.ca"
              className="card-elevated p-6 text-center group"
            >
              <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">lucas.srigley@queensu.ca</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild>
              <a href="https://linkedin.com/in/lucas-srigley" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/lucas-srigley" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </a>
            </Button>
          </div>

          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;