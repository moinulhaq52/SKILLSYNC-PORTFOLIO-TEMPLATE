import { portfolioData } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-center max-w-2xl mx-auto">
      <p className="text-accent font-medium mb-4">What&apos;s Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
        Get In Touch
      </h2>
      <p className="text-muted leading-relaxed mb-10">
        Although I&apos;m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </p>
      
      <a
        href={`mailto:${portfolioData.about.email}`}
        className="inline-block px-8 py-4 border-2 border-accent text-accent font-medium rounded-md hover:bg-accent/10 transition-colors duration-300"
      >
        Say Hello
      </a>
    </section>
  );
}
