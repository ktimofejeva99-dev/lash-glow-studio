import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Katie Tubbs-Murphy",
    location: "Google Review",
    text: "Kristine is absolutely lovely! I see Kristine regularly (for nearly 18 months!) for both eyelash extensions and eyebrow shaping, she is the best! Lovely calming atmosphere, she truly makes me feel at ease!",
    rating: 5,
  },
  {
    name: "Demi Law",
    location: "Google Review",
    text: "The lashes I got were literally 10/10. I had some gaps from where I had pulled some out but Kristine managed to work her magic and you couldn't even see there was any damage. Very relaxed environment, so much you'll ALWAYS fall asleep!",
    rating: 5,
  },
  {
    name: "Poppy Pennington",
    location: "Google Review",
    text: "My visits with Kristine are always 10/10 — the lashes she does are gorgeous and she's always so friendly and polite. I can't recommend her more!",
    rating: 5,
  },
  {
    name: "Olha Sukhar",
    location: "Google Review",
    text: "Amazing lash artist! My lashes are always done beautifully and with great quality. I've been coming regularly for a year now and couldn't be happier.",
    rating: 5,
  },
  {
    name: "Karena Vanlife",
    location: "Google Review",
    text: "Very pleased with the whole service and my new lashes look very natural.",
    rating: 5,
  },
  {
    name: "Elina M",
    location: "Google Review",
    text: "Best experience, totally recommend!",
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
