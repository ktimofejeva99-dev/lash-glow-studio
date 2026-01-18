import { Sparkles, Award, Home } from "lucide-react";
import studioRoom from "@/assets/studio-room-new.png";

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
        {/* Studio Image Feature */}
        <div className="mb-16 animate-fade-up">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={studioRoom}
              alt="Timeless Lash & Skin studio interior"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="font-serif text-2xl md:text-3xl mb-2">Welcome to the Studio</h2>
              <p className="text-cream/90 text-sm md:text-base">A calm, cosy space designed for your relaxation and beauty</p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
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
