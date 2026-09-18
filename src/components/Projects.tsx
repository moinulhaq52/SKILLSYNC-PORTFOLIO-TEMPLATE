import { portfolioData } from "@/lib/data";
import { ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Some Things I&apos;ve Built
        </h2>
        <div className="h-px bg-border flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-card rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-card-hover border border-border flex flex-col h-full"
          >
            <div className="flex justify-between items-center mb-8">
              <Folder size={40} className="text-accent" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={`View ${project.title}`}
              >
                <ExternalLink size={24} />
              </a>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            
            <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-muted/80 mt-auto">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
