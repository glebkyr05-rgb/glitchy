import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 hero-gradient">
      {/* Badge */}
      <div className="flex items-center gap-2 mb-8 animate-fade-in">
        <Star className="w-4 h-4 text-primary fill-primary" />
        <span className="text-sm font-medium text-foreground/90">
          Premium Netflix Reviewer Program
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-center mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold text-gradient">
          Get Paid
        </span>
        <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mt-2">
          To Watch Netflix
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-center text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        Join Netflix's official reviewer program and earn money by watching and rating new content. Get paid for honest reviews of movies and TV shows before they're released to the public.
      </p>

      {/* CTA Button */}
      <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <Button 
          variant="hero" 
          size="xl"
          onClick={() => window.open("https://uplevelrewarded.com/aff_c?offer_id=973&aff_id=2457&source=Netflix", "_blank")}
        >
          Apply Now
        </Button>
      </div>

      {/* Sub-text */}
      <p className="mt-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
        No experience required • Start immediately
      </p>
    </section>
  );
};

export default HeroSection;
