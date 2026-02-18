import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, Wrench, Database, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code2,
    skills: ["Java", "C", "C++"],
  },
  {
    name: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "Angular"],
  },
  {
    name: "Frameworks & Tools",
    icon: Wrench,
    skills: ["Spring Boot", "VS Code", "Eclipse", "Git"],
  },
  {
    name: "Database",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    name: "Concepts",
    icon: Lightbulb,
    skills: ["OOP", "SDLC", "REST APIs", "Database Design"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.name}
              className={`bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-500 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary/40 transition-colors">
                    {skill}
                  </Badge>
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
