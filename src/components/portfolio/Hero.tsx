import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/portfolio/ThemeProvider";
import { useEffect, useState } from "react";
import profilePicture from "@/assets/profile-picture.jpeg";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hi, I'm
              </motion.p>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="text-gradient">Lucas Srigley</span>
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl font-medium text-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Computer Engineering Student
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I love to build things.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex gap-3">
                <a href="https://github.com/lucas-srigley/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost">
                        <Github className="h-5 w-5" />
                    </Button>
                </a>
                <a href="https://linkedin.com/in/lucas-srigley/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost">
                        <Linkedin className="h-5 w-5" />
                    </Button>
                </a>
                <a href="mailto:lucas.srigley@queensu.ca" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost">
                        <Mail className="h-5 w-5" />
                    </Button>
                </a>
              </div>
              <Button 
                size="icon" 
                variant="ghost"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90" 
              onClick={() => {
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}>
                My Experience
              </Button>
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Explore My Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={profilePicture} 
                  alt="Lucas Srigley"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-border/20"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" 
          onClick={() => {
            document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
          }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;