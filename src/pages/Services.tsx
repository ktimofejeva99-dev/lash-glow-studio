import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import classicLash1 from "@/assets/classic-lash-1.jpg";
import hybridLashHero from "@/assets/hybrid-lash-main.jpg";
import volumeLashHero from "@/assets/volume-lash-hero.jpg";
import medik8FacialHero from "@/assets/medik8-facial-hero.jpg";
import dermaluxStandalone from "@/assets/dermalux-standalone.jpg";
import kristine from "@/assets/kristine.jpg";
import studioRoom from "@/assets/studio-room.jpg";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";

const lashServices = [
  {
    title: "Classic Lash Extensions",
    description: "One extension per natural lash for a soft, natural enhancement. Perfect if you want that 'mascara effect' — defined, feminine lashes that look like your own, only better.",
    image: classicLash1,
  },
  {
    title: "Hybrid / 2D Volume",
    description: "A mix of classic and volume techniques for a little extra fullness while keeping things soft and wearable. Ideal for everyday glamour without looking overdone.",
    image: hybridLashHero,
  },
  {
    title: "Volume 3D–5D",
    description: "Fluffy, textured fans for more impact and definition. These lashes are still tailored to your eye shape — dramatic doesn't have to mean unnatural.",
    image: volumeLashHero,
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
    image: medik8FacialHero,
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
    image: dermaluxStandalone,
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
        <meta name="keywords" content="lash extensions Chatteris, classic lashes, hybrid lashes, volume lashes, Medik8 facial, Dermalux LED, brow tint, brow shape, PE16" />
        <link rel="canonical" href="/services" />
        <meta property="og:title" content="Services | Lash Extensions, Brows & Facials | Timeless Chatteris" />
        <meta property="og:description" content="Classic, hybrid & volume lash extensions using London Lash Pro. Medik8 facials & Dermalux LED therapy." />
        <meta property="og:type" content="website" />
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

      {/* Skin Peels Section */}
      <section id="peels" className="section-padding-sm bg-cream-dark scroll-mt-24">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-sm tracking-[0.2em] uppercase text-rose-gold">Medik8 Professional</span>
            <h2 className="font-serif text-3xl text-foreground mt-2 mb-3">Skin Peels</h2>
            <p className="text-muted-foreground max-w-2xl">
              I work with Medik8 Professional Skin Peels — a medical-grade, science-led system designed to deliver visible results while respecting the skin barrier. Each peel is selected following a consultation to suit your skin type, concerns and tolerance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Superfacial Enzyme Peel */}
            <div className="bg-background rounded-2xl p-6 md:p-8 hover:shadow-card transition-all duration-300">
              <h3 className="font-serif text-xl text-foreground mb-3">Superfacial™ Enzyme Peel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A gentle enzyme exfoliation ideal for dull, tired or sensitive skin. This peel refreshes the complexion, smooths texture and boosts natural glow without irritation.
              </p>
              <p className="text-sm">
                <span className="text-rose-gold font-medium">Best for:</span>{" "}
                <span className="text-muted-foreground">Sensitive skin, dullness, maintenance, pre-event glow</span>
              </p>
            </div>

            {/* Universal AHA Peel */}
            <div className="bg-background rounded-2xl p-6 md:p-8 hover:shadow-card transition-all duration-300">
              <h3 className="font-serif text-xl text-foreground mb-3">Universal AHA Peel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A balanced peel suitable for most skin types and concerns. It brightens, smooths and revitalises the skin, making it ideal for first-time peel clients or ongoing skin maintenance.
              </p>
              <p className="text-sm">
                <span className="text-rose-gold font-medium">Best for:</span>{" "}
                <span className="text-muted-foreground">First-time peels, uneven texture, dull skin</span>
              </p>
            </div>

            {/* Sensitive PHA Peel */}
            <div className="bg-background rounded-2xl p-6 md:p-8 hover:shadow-card transition-all duration-300">
              <h3 className="font-serif text-xl text-foreground mb-3">Sensitive PHA Peel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A gentle yet effective peel designed for sensitive, redness-prone or compromised skin. It exfoliates while strengthening the skin barrier and improving overall skin comfort.
              </p>
              <p className="text-sm">
                <span className="text-rose-gold font-medium">Best for:</span>{" "}
                <span className="text-muted-foreground">Sensitive skin, rosacea-prone skin, weakened skin barrier</span>
              </p>
            </div>

            {/* Mono Mandelic Peel */}
            <div className="bg-background rounded-2xl p-6 md:p-8 hover:shadow-card transition-all duration-300">
              <h3 className="font-serif text-xl text-foreground mb-3">Mono Mandelic Peel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A targeted peel with antibacterial properties that helps to reduce breakouts, congestion and pigmentation. Mandelic acid works more slowly, making it effective yet well-tolerated.
              </p>
              <p className="text-sm">
                <span className="text-rose-gold font-medium">Best for:</span>{" "}
                <span className="text-muted-foreground">Acne-prone skin, pigmentation, oily skin</span>
              </p>
            </div>

            {/* Clarity Peel */}
            <div className="bg-background rounded-2xl p-6 md:p-8 hover:shadow-card transition-all duration-300">
              <h3 className="font-serif text-xl text-foreground mb-3">Clarity Peel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A purifying peel that helps to decongest pores, control breakouts and improve skin clarity. Ideal for problematic skin needing a more corrective approach.
              </p>
              <p className="text-sm">
                <span className="text-rose-gold font-medium">Best for:</span>{" "}
                <span className="text-muted-foreground">Active breakouts, congestion, oily skin</span>
              </p>
            </div>

            {/* Rewind Peel */}
            <div className="bg-background rounded-2xl p-6 md:p-8 hover:shadow-card transition-all duration-300">
              <h3 className="font-serif text-xl text-foreground mb-3">Rewind Peel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                An age-defying peel designed to stimulate cell renewal and support collagen production. It smooths fine lines, improves skin texture and restores a fresher, more youthful appearance.
              </p>
              <p className="text-sm">
                <span className="text-rose-gold font-medium">Best for:</span>{" "}
                <span className="text-muted-foreground">Fine lines, ageing skin, dull or tired complexion</span>
              </p>
            </div>
          </div>

          {/* Post-peel info */}
          <div className="mt-10 bg-background rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center">
                <span className="text-rose-gold text-xl">✦</span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-2">What's Included</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every peel includes the <strong className="text-foreground">Medik8 Ultimate Recovery Bio-Cellulose Mask</strong> and <strong className="text-foreground">Dermalux LED therapy</strong> to calm, hydrate and enhance your results. Peel type and strength are always customised following consultation to ensure safe, effective and results-driven treatments.
                </p>
              </div>
            </div>
          </div>

          {/* Medik8 Stockist Info */}
          <div className="mt-6 bg-background rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center">
                <span className="text-rose-gold text-xl">♡</span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-2">Official Medik8 Stockist</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm an official Medik8 stockist and offer products to my clients at a <strong className="text-foreground">reduced price</strong>. I place orders 1–2 times a month — feel free to <a href="/contact" className="text-rose-gold hover:underline">message me</a> to check prices or place an order.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="cta" size="lg" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Skin Peel
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* LED Section */}
      <section id="led" className="section-padding-sm bg-background scroll-mt-24">
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

      {/* Meet Kristine Section */}
      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm tracking-[0.2em] uppercase text-rose-gold">Meet Your Therapist</span>
              <h2 className="font-serif text-3xl text-foreground mt-2 mb-6">Hi, I'm Kristine</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm the founder and sole therapist at Timeless Lash Studio. I opened my home studio almost two years ago after several years of working within the beauty and aesthetics industry, including experience in leading skin clinics in London.
                </p>
                <p>
                  My passion has always been creating <strong className="text-foreground">natural, timeless results</strong> while delivering a calm, professional experience for every client.
                </p>
                <p>
                  I hold <strong className="text-foreground">Level 3 Beauty Therapy</strong> and <strong className="text-foreground">Level 4 Laser & Skin Rejuvenation</strong> qualifications, and I am fully certified in classic and volume lash extensions with London Lash Pro. I am fully insured and work exclusively with professional, trusted brands.
                </p>
                <p>
                  I'm a true perfectionist at heart — I take time to listen, assess, and tailor every treatment to you. My goal is not just beautiful results on the day, but long-term confidence and comfort, ensuring you always leave feeling your best.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={kristine}
                    alt="Kristine - Founder of Timeless Lash Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={studioRoom}
                    alt="Timeless Lash Studio treatment space"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Services;
