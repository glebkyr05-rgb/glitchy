import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AlternativeOfferSection from "@/components/AlternativeOfferSection";
import SocialProofNotification from "@/components/SocialProofNotification";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <AlternativeOfferSection />
      <SocialProofNotification />
    </main>
  );
};

export default Index;
