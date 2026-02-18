import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Lecturer",
    company: "LJ Polytechnic, Ahmedabad",
    period: "July 2025 – Present",
    current: true,
    points: [
      "Delivering lectures in Programming, Java, and Web Technologies",
      "Conducting practical lab sessions for diploma engineering students",
      "Mentoring student projects and academic development",
      "Preparing structured academic materials and evaluation systems",
    ],
  },
  {
    title: "Lecturer",
    company: "Sal Institute of Diploma Studies",
    period: "Aug 2023 – March 2024",
    points: [
      "Taught core Computer Science subjects",
      "Supervised practical sessions and guided mini-projects",
      "Assisted students in academic and technical skill development",
    ],
  },
  {
    title: "Software Developer",
    company: "HOPS Healthcare Pvt. Ltd.",
    period: "Sept 2022 – April 2023",
    points: [
      "Developed modules for HMIS (Hospital Management Integrated System)",
      "Built IPD, OPD & Nurse Notes modules",
      "Backend development using Java, Frontend using Angular",
      "Database management using MySQL",
    ],
  },
  {
    title: "Intern Software Developer",
    company: "HOPS Healthcare Pvt. Ltd.",
    period: "June 2022 – Sept 2022",
    points: [
      "Assisted in full-stack healthcare application development",
      "Worked on Java backend services and Angular UI components",
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Professional <span className="text-gradient">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-10 last:mb-0 transition-all duration-700 delay-${i * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 top-8 z-10 ${exp.current ? "bg-primary shadow-lg shadow-primary/50" : "bg-muted-foreground"}`}
              />

              <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"}`}>
                <div className="bg-card border border-border rounded-xl p-5 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-xs font-medium text-primary">{exp.period}</span>
                    {exp.current && (
                      <span className="text-[10px] px-2 py-0.5 bg-primary/20 text-primary rounded-full font-semibold">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {point}
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
