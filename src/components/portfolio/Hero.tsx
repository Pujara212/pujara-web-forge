import { MapPin, Phone, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 text-center relative z-10">
        <div className="animate-fade-up">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <span className="text-3xl font-bold text-gradient">MP</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-gradient">Meet Pujara</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Lecturer · Java Developer · Angular Specialist · Full-Stack Developer
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-primary" /> Bavla, Ahmedabad
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={16} className="text-primary" /> +91 9624968900
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={16} className="text-primary" /> pujarameet212@gmail.com
            </span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Download size={18} /> Download Resume
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
