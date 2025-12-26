import { Button } from "@/components/ui/button";

const countries = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
];

const AlternativeOfferSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border/50">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Alternative{" "}
              <span className="text-gradient">$250</span>{" "}
              Netflix Gift Card Offer
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Since the Netflix reviewer program is exclusively available to US residents, we're offering a $250 Netflix gift card to qualified applicants from other regions.
            </p>
          </div>

          {/* Geographic Eligibility */}
          <div className="mb-10">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 text-center">
              Geographic Eligibility
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              This alternative offer is available to residents of:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-sm font-medium text-foreground">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              variant="claim"
              size="lg"
              onClick={() => window.open("https://usetrk.com/aff_c?offer_id=2216&aff_id=2457&source=Gift+Card+Netflix", "_blank")}
            >
              Claim Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeOfferSection;
