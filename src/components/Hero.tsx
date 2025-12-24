import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import nashProfile from "@/assets/nash-profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Ambient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl bg-primary pointer-events-none" />

      <div className="section-container flex flex-col items-center text-center z-10">
        {/* Profile Image */}
        <div className="relative mb-8 opacity-0 animate-scale-in">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/30 p-1 bg-card/50 backdrop-blur-sm">
            <img
              src={nashProfile}
              alt="Nash Henley"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse scale-110" />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up">
          Nash Henley
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 opacity-0 animate-fade-up delay-100">
          BS Information Systems Student
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300">
          <Button
            asChild
            size="lg"
            className="px-8 glow-effect"
          >
            <a href="#about">View Portfolio</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors opacity-0 animate-fade-in delay-500"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
