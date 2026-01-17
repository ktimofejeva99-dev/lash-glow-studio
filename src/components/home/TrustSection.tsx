import { Sparkles, Award, Home } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Natural Results",
    description: "From mascara-look classic to fuller volume — always tailored to suit you.",
  },
  {
    icon: Award,
    title: "Professional Products",
    description: "London Lash Pro • Medik8 • Dermalux Flex LED",
  },
  {
    icon: Home,
    title: "Calm Home Studio",
    description: "Clean, cosy, appointment-only. Just you, relaxing.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 bg-cream-dark rounded-2xl hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-gold-light/50 text-rose-gold mb-5">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
