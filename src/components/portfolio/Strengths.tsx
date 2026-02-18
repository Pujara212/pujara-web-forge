import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MessageSquare, Brain, Layers, Users, Zap } from "lucide-react";

const strengths = [
  { icon: MessageSquare, label: "Strong Communication & Teaching Skills" },
  { icon: Brain, label: "Analytical & Problem-Solving Ability" },
  { icon: Layers, label: "Industry + Academic Experience" },
  { icon: Users, label: "Student Mentorship & Project Guidance" },
  { icon: Zap, label: "Quick Learner & Technology Adaptable" },
];

const Strengths = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Key <span className="text-gradient">Strengths</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {strengths.map((s, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-xl p-5 text-center hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto mb-3 p-3 rounded-full bg-primary/10 w-fit">
                <s.icon size={22} className="text-primary" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
