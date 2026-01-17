import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { HelpCircle } from "lucide-react";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";

const lashPricing = [
  { service: "Classic Full Set", duration: "2 hours", price: "£XX" },
  { service: "Classic 2-Week Infill", duration: "1 hour", price: "£XX" },
  { service: "Classic 3-Week Infill", duration: "1.5 hours", price: "£XX" },
  { service: "Hybrid / 2D Full Set", duration: "2 hours", price: "£XX" },
  { service: "Hybrid / 2D 2-Week Infill", duration: "1 hour", price: "£XX" },
  { service: "Hybrid / 2D 3-Week Infill", duration: "1.5 hours", price: "£XX" },
  { service: "Volume 3D–5D Full Set", duration: "2.5 hours", price: "£XX" },
  { service: "Volume 3D–5D 2-Week Infill", duration: "1.25 hours", price: "£XX" },
  { service: "Volume 3D–5D 3-Week Infill", duration: "1.5 hours", price: "£XX" },
  { service: "Lash Removal", duration: "30 mins", price: "£XX" },
];

const browPricing = [
  { service: "Brow Shape", duration: "15 mins", price: "£XX" },
  { service: "Brow Tint", duration: "15 mins", price: "£XX" },
  { service: "Brow Shape + Tint", duration: "30 mins", price: "£XX" },
];

const skinPricing = [
  { service: "Medik8 Facial", duration: "1 hour", price: "£XX" },
  { service: "Dermalux LED Add-on", duration: "20 mins", price: "£XX" },
  { service: "Dermalux LED Standalone", duration: "30 mins", price: "£XX" },
];

interface PricingTableProps {
  title: string;
  items: { service: string; duration: string; price: string }[];
}

function PricingTable({ title, items }: PricingTableProps) {
  return (
    <div className="bg-cream-dark rounded-2xl p-6 md:p-8">
      <h3 className="font-serif text-2xl text-foreground mb-6">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.service}
            className={`flex items-center justify-between py-3 ${
              index !== items.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div>
              <p className="font-medium text-foreground">{item.service}</p>
              <p className="text-sm text-muted-foreground">{item.duration}</p>
            </div>
            <span className="font-serif text-lg text-rose-gold">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Pricing = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pricing | Lash Extensions & Facials | Timeless Chatteris</title>
        <meta
          name="description"
          content="View prices for lash extensions, infills, brow services, Medik8 facials & Dermalux LED in Chatteris. Transparent pricing, book online."
        />
      </Helmet>

      <PageHero
        title="Pricing"
        subtitle="Transparent pricing for all treatments. Book online to secure your appointment."
      />

      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <div className="grid gap-8">
            <PricingTable title="Lashes" items={lashPricing} />
            <PricingTable title="Brows" items={browPricing} />
            <PricingTable title="Skin & LED" items={skinPricing} />
          </div>

          {/* Help box */}
          <div className="mt-10 p-6 md:p-8 bg-sage/50 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-background rounded-lg">
                <HelpCircle className="w-5 h-5 text-sage-dark" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-foreground mb-3">
                  Not sure what to book?
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">2-week infill</strong> — if you want your lashes looking super fresh and full
                  </li>
                  <li>
                    <strong className="text-foreground">3-week infill</strong> — if you have good retention and prefer less frequent appointments
                  </li>
                  <li>
                    <strong className="text-foreground">Too many outgrown or missing?</strong> — we may need a removal + full set. Don't worry, I'll advise on the day
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button variant="cta" size="xl" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Questions about services?"
        subtitle="Get in touch or check the aftercare page for more details."
        buttonText="Contact Us"
      />
    </Layout>
  );
};

export default Pricing;
