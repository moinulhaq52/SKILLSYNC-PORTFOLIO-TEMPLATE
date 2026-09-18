import { portfolioData } from "@/lib/data";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const iconMap: Record<string, React.ElementType> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: FaEnvelope,
  Twitter: FaTwitter,
};

export default function Footer() {
  return (
    <footer className="py-8 text-center text-muted/60 text-sm">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        {portfolioData.socials.map((social) => {
          const Icon = iconMap[social.icon as keyof typeof iconMap];
          if (!Icon) return null;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label={social.name}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
      <p>
        Designed & Built by{" "}
        <a 
          href={portfolioData.socials.find(s => s.name === "GitHub")?.url || "#"} 
          className="text-muted hover:text-accent transition-colors"
        >
          {portfolioData.about.name}
        </a>
      </p>
    </footer>
  );
}
