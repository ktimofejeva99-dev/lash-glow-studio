import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Chatteris",
    text: "Absolutely love my lashes! Kristine takes such care to get the perfect natural look. The studio is so relaxing too.",
    rating: 5,
  },
  {
    name: "Emma T.",
    location: "March",
    text: "Best lash technician I've ever been to. My 3-week retention is amazing and I always leave feeling pampered.",
    rating: 5,
  },
  {
    name: "Lucy H.",
    location: "Ely",
    text: "The Medik8 facial was incredible — my skin was glowing for days. Can't wait to come back for my next appointment!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What clients say
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real reviews from clients in Chatteris and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-cream-dark rounded-2xl p-8 hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-rose-gold text-rose-gold" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
