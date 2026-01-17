import { Search, Calendar, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose your treatment",
    description: "Browse our lash, brow, and skin services to find what's right for you.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Book online via GetTimely",
    description: "Select your preferred date and time — instant confirmation.",
  },
  {
    icon: Smile,
    number: "03",
    title: "Arrive, relax, leave feeling fresh",
    description: "Enjoy a calm, professional treatment in our cosy home studio.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Booking your appointment is simple and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-soft mb-5">
                <span className="font-serif text-rose-gold text-lg">{step.number}</span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
