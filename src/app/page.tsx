import Hero from "@/components/pages/hero";
import AboutMe from "@/components/pages/aboutme";
import Footer from "@/components/pages/footer";
import Projects from "@/components/pages/projects";
import History from "@/components/pages/history";
import Contact from "@/components/pages/contact";

/**
 * Karan Upadhyay - Portfolio Home Page
 * This file assembles the sections of the portfolio.
 */
export default function Home() {
  return (
    <>
      {/* The Hero component likely contains your name and primary role */}
      <Hero />

      {/* This div gives the rest of the page a solid background,
            creating the parallax effect as it scrolls over the fixed Vanta canvas. */}
      <div className="relative z-100 bg-background">
        {/* AboutMe: Contains your summary and background */}
        <AboutMe />

        {/* History: This is where we will feed your MCA and B.Sc details */}
        <History />

        {/* Projects: This is where we will feed 'Shortly' and 'Shopping Assistant' */}
        <Projects />

        {/* Contact: Linked to your email and social handles */}
        <Contact />

        <Footer />
      </div>
    </>
  );
}
