import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* 
        Side social links for desktop. Hidden on mobile.
        This provides a nice "frame" for the content on larger screens.
      */}
      <div className="hidden md:flex flex-col items-center fixed left-10 bottom-0 z-50">
        <div className="h-24 w-[1px] bg-muted/50 mt-8"></div>
      </div>
      <div className="hidden md:flex flex-col items-center fixed right-10 bottom-0 z-50">
        <div className="h-24 w-[1px] bg-muted/50 mt-8"></div>
      </div>

      <main className="container mx-auto px-6 md:px-12 lg:px-24 max-w-5xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
