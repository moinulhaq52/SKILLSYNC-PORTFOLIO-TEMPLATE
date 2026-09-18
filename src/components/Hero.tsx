import { portfolioData } from "@/lib/data";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const iconMap: Record<string, React.ElementType> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: FaEnvelope,
  Twitter: FaTwitter,
};

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center animate-fade-in-up">
      <div className="space-y-6">
        <p className="text-accent font-medium tracking-wide">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
          {portfolioData.about.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-muted">
          {portfolioData.about.role}.
        </h2>
        <p className="max-w-xl text-lg text-muted/80 leading-relaxed pt-4">
          {portfolioData.about.bio}
        </p>

        <div className="flex items-center gap-6 pt-8">
          {portfolioData.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            if (!Icon) return null;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-300 hover:-translate-y-1 transform"
                aria-label={social.name}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
