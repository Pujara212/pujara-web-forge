import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Passionate and dedicated Computer Engineering Lecturer with industry experience in Java & Angular
            development. Skilled in delivering engaging lectures, mentoring students, and developing scalable web
            applications. Strong background in backend development, REST APIs, and responsive frontend design.
            Committed to academic excellence and real-world project guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
