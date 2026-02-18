import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Certified Java Developer",
    org: "TOPS Technologies",
    period: "Sep 2025 – Jan 2026",
  },
  {
    title: "AICTE ATAL Faculty Development Program",
    org: "Emerging Technologies for Healthcare Applications",
    period: "Jan 2026",
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gradient">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-lg group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="p-2.5 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <Award size={22} className="text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.org}</p>
              <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                <Calendar size={12} />
                {cert.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
