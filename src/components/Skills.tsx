import { portfolioData } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Skills & Technologies
        </h2>
        <div className="h-px bg-border flex-grow max-w-xs"></div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {portfolioData.skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 rounded-full bg-card border border-border text-muted font-medium hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
