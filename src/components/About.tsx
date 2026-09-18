import { portfolioData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 animate-fade-in">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h2>
        <div className="h-px bg-border flex-grow max-w-xs"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            Hello! My name is {portfolioData.about.name.split(" ")[0]} and I enjoy creating things that live on the internet.
            {portfolioData.about.bio}
          </p>
          <p>
            Whether I&apos;m working on a complex enterprise application or a sleek digital portfolio,
            my goal is always to build scalable, performant, and accessible products.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/20 rounded-xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="relative bg-card border border-border rounded-xl aspect-square flex items-center justify-center overflow-hidden">
            {/* Placeholder for an image, for now just an icon or initial */}
            <span className="text-9xl font-bold text-muted/30 group-hover:text-accent transition-colors duration-500">
              {portfolioData.about.name.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
