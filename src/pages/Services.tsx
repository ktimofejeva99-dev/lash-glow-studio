import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import classicLashes from "@/assets/classic-lashes.jpg";
import hybridLashes from "@/assets/hybrid-lashes.jpg";
import volumeLashes from "@/assets/volume-lashes.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import ledTreatment from "@/assets/led-treatment.jpg";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";

const lashServices = [
  {
    title: "Classic Lash Extensions",
    description: "One extension per natural lash for a soft, natural enhancement. Perfect if you want that 'mascara effect' — defined, feminine lashes that look like your own, only better.",
    image: classicLashes,
  },
  {
    title: "Hybrid / 2D Volume",
    description: "A mix of classic and volume techniques for a little extra fullness while keeping things soft and wearable. Ideal for everyday glamour without looking overdone.",
    image: hybridLashes,
  },
  {
    title: "Volume 3D–5D",
    description: "Fluffy, textured fans for more impact and definition. These lashes are still tailored to your eye shape — dramatic doesn't have to mean unnatural.",
    image: volumeLashes,
  },
  {
    title: "Lash Infills",
    description: "Keep your lashes looking fresh with regular maintenance. 2-week infills are perfect if you like them looking pristine; 3-week infills work well if you have good retention and prefer less frequent appointments.",
  },
  {
    title: "Lash Removal",
    description: "Safe, gentle removal of lash extensions using professional products. No damage to your natural lashes.",
  },
];

const browServices = [
  {
    title: "Brow Shape",
    description: "Precise tweezer shaping to create clean, defined brows that complement your face shape.",
  },
  {
    title: "Brow Tint",
    description: "Professional tinting to add depth and definition. Lasts 3-4 weeks and reduces the need for daily brow makeup.",
  },
  {
    title: "Brow Shape + Tint",
    description: "The complete brow treatment. Shaping plus tinting for polished, low-maintenance brows.",
  },
];

const skinServices = [
  {
    title: "Medik8 Facial",
    image: skincareProducts,
    description: "A professional facial using Medik8's acclaimed skincare range. Tailored to your skin type — whether you need a deep cleanse, hydration boost, or radiance pick-me-up. Includes cleanse, targeted treatment, and finishing care.",
  },
];

const ledServices = [
  {
    title: "Dermalux Flex LED Add-on",
    description: "Enhance any facial with LED light therapy. Calms inflammation, boosts collagen, and supports skin health. Add-on only when combined with a facial.",
  },
  {
    title: "Dermalux Flex LED Standalone",
    image: ledTreatment,
    description: "A standalone LED session using clinically proven wavelengths. Great for maintaining results between facials or as a quick skin boost.",
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-cream-dark rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300">
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Services | Lash Extensions, Brows & Facials | Timeless Chatteris</title>
        <meta
          name="description"
          content="Classic, hybrid & volume lash extensions using London Lash Pro. Medik8 facials & Dermalux LED. Brow shaping & tinting. Book online in Chatteris, PE16."
        />
      </Helmet>

      <PageHero
        title="Our Services"
        subtitle="Expert lash, brow, and skin treatments using premium professional products. All treatments are tailored to you."
      />

      {/* Lashes Section */}
      <section id="lashes" className="section-padding-sm bg-background scroll-mt-24">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-sm tracking-[0.2em] uppercase text-rose-gold">London Lash Pro Products</span>
            <h2 className="font-serif text-3xl text-foreground mt-2 mb-3">Lash Extensions</h2>
            <p className="text-muted-foreground max-w-2xl">
              Whether you prefer a soft, natural look or fuller, more dramatic lashes — we'll create the perfect set for your eye shape and lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lashServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="cta" size="lg" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Lashes
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Brows Section */}
      <section id="brows" className="section-padding-sm bg-cream-dark scroll-mt-24">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-sm tracking-[0.2em] uppercase text-rose-gold">Shape & Define</span>
            <h2 className="font-serif text-3xl text-foreground mt-2 mb-3">Brow Services</h2>
            <p className="text-muted-foreground max-w-2xl">
              Polished, well-defined brows that frame your face beautifully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {browServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="cta" size="lg" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Brows
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skin Section */}
      <section id="skin" className="section-padding-sm bg-background scroll-mt-24">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-sm tracking-[0.2em] uppercase text-rose-gold">Medik8 Skincare</span>
            <h2 className="font-serif text-3xl text-foreground mt-2 mb-3">Skin Treatments</h2>
            <p className="text-muted-foreground max-w-2xl">
              Professional facials focused on cleanse, glow, and hydration — tailored to your skin's needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skinServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* LED Section */}
      <section id="led" className="section-padding-sm bg-cream-dark scroll-mt-24">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-sm tracking-[0.2em] uppercase text-rose-gold">Dermalux Flex</span>
            <h2 className="font-serif text-3xl text-foreground mt-2 mb-3">LED Light Therapy</h2>
            <p className="text-muted-foreground max-w-2xl">
              Clinically proven LED light therapy to calm, repair, and rejuvenate your skin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ledServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="cta" size="lg" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Skin Treatment
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Services;
