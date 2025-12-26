import { Play, FileText, DollarSign } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Play,
    title: "Watch & Enjoy",
    description: "Stream your favorite Netflix content as you normally would. No special requirements or limitations.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Share Your Thoughts",
    description: "Write honest, detailed reviews about the shows and movies you've watched. Quality over quantity.",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "Receive Payment",
    description: "Get paid directly for approved reviews. Higher quality reviews earn premium compensation rates.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three simple steps to start earning money from your Netflix viewing habits
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="card-gradient rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
