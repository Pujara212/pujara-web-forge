import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, ShoppingCart, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Hospital Management Integrated System (HMIS)",
    icon: Hospital,
    tech: ["Java", "Angular", "MySQL"],
    features: [
      "Developed IPD, OPD & Nurse Notes modules",
      "Designed backend services using Java",
      "Built responsive UI with Angular",
      "Managed patient data using MySQL",
      "Implemented secure data handling practices",
    ],
  },
  {
    title: "Online E-Commerce Web Application",
    icon: ShoppingCart,
    tech: ["Angular", "Spring Boot", "REST APIs"],
    features: [
      "Full-stack application using Angular & Spring Boot",
      "Designed REST APIs with authentication system",
      "Integrated payment gateway functionality",
      "Created responsive and user-friendly interface",
    ],
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card
              key={i}
              className={`bg-card border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <project.icon size={22} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
