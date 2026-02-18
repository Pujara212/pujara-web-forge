import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gradient">Education</span>
        </h2>

        <div className="space-y-5">
          {/* B.E. */}
          <div
            className={`bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">B.E. Information Technology</h3>
                <p className="text-sm text-muted-foreground mb-2">Sal College of Engineering (GTU) · 2017 – 2021</p>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  CGPA: 9.50
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div
              className={`bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-500 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="font-bold text-foreground mb-1">12th Science</h3>
              <p className="text-2xl font-bold text-gradient">76%</p>
            </div>
            <div
              className={`bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-500 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="font-bold text-foreground mb-1">10th</h3>
              <p className="text-2xl font-bold text-gradient">82%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
