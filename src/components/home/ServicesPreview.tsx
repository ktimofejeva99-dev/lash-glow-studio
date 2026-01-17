import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import classicLashes from "@/assets/classic-lashes.jpg";
import hybridLashes from "@/assets/hybrid-lashes.jpg";
import volumeLashes from "@/assets/volume-lashes.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";

const services = [
  {
    title: "Lash Extensions",
    description: "From soft classic to full volume — tailored to your eye shape and lifestyle.",
    image: classicLashes,
    link: "/services#lashes",
  },
  {
    title: "Brow Shaping & Tinting",
    description: "Defined, polished brows that frame your face beautifully.",
    image: hybridLashes,
    link: "/services#brows",
  },
  {
    title: "Medik8 Facials",
    description: "Professional skincare for cleanse, glow, and hydration.",
    image: skincareProducts,
    link: "/services#skin",
  },
  {
    title: "LED Light Therapy",
    description: "Dermalux Flex LED for calming, boosting glow, and skin health.",
    image: volumeLashes,
    link: "/services#led",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Our services
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Expert lash, brow, and skin treatments using premium professional products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl text-primary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm text-rose-gold-light group-hover:text-rose-gold transition-colors">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="subtle" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
