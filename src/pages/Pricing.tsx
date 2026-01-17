import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { HelpCircle } from "lucide-react";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";

const lashPricing = [
  { service: "Classic Full Set", duration: "2 hours", price: "£45" },
  { service: "Classic Infill (2 weeks)", duration: "1 hour", price: "£30" },
  { service: "Classic Infill (3 weeks)", duration: "1.5 hours", price: "£35" },
  { service: "Hybrid / 2D Full Set", duration: "2 hours", price: "£50" },
  { service: "Hybrid / 2D Infill (2 weeks)", duration: "1 hour", price: "£35" },
  { service: "Hybrid / 2D Infill (3 weeks)", duration: "1.5 hours", price: "£40" },
  { service: "Volume 3D–5D Full Set", duration: "2.5 hours", price: "£55" },
  { service: "Volume 3D–5D Infill (2 weeks)", duration: "1.25 hours", price: "£38" },
  { service: "Volume 3D–5D Infill (3 weeks)", duration: "1.5 hours", price: "£42" },
  { service: "Lash Tint (top + bottom)", duration: "15 mins", price: "£10" },
  { service: "Lash Tint – bottom (add-on)", duration: "10 mins", price: "£5" },
  { service: "Lash Extension Removal", duration: "30 mins", price: "£10" },
];

const browPricing = [
  { service: "Eyebrow Tint", duration: "15 mins", price: "£8" },
  { service: "Eyebrow Shape (tweezers)", duration: "15 mins", price: "£8" },
  { service: "Eyebrow Tint & Shape", duration: "30 mins", price: "£15" },
];

const browAddOnPricing = [
  { service: "Eyebrow Tint (add-on)", duration: "10 mins", price: "£5" },
  { service: "Eyebrow Shape (add-on)", duration: "10 mins", price: "£5" },
  { service: "Eyebrow Tint & Shape (add-on)", duration: "15 mins", price: "£10" },
];

const facialPricing = [
  { service: "Calm & Glow Facial", duration: "1 hour", price: "£50", description: "Relaxing treatment with Medik8 enzyme peel, soothing face, neck & décolleté massage, hydrating bio-cellulose mask, and Dermalux LED red light." },
  { service: "Clear Skin Facial", duration: "1 hour", price: "£50", description: "Deep cleansing facial with steam, gentle extractions, Medik8 AHA peel, hydrating mask, and Dermalux LED blue + NIR light." },
  { service: "Back Detox Peel", duration: "1 hour", price: "£50", description: "Targeted skin peel for the back, chest, or arms. Smooths texture, clears congestion, and reduces breakouts with Dermalux LED finish." },
];

const ledPricing = [
  { service: "Single Treatment", duration: "30 mins", price: "£25" },
  { service: "Course of 3", duration: "3 x 30 mins", price: "£60" },
];

const termsConditions = [
  { title: "Age Requirement", content: "Clients must be 18 years or older to book." },
  { title: "No Children", content: "For safety and comfort, no children are allowed in the studio. There is no waiting area available." },
  { title: "Arrival Time", content: "Please arrive exactly at your appointment time. Arriving more than 10 minutes late or early may affect my schedule. If running late or early, message me so I can try to accommodate." },
  { title: "Cancellations", content: "No deposits are taken, but please cancel at least 48 hours before where possible. Repeated late cancellations or no-shows may result in refusal of future bookings." },
  { title: "Health", content: "Let me know about any eye infections, recent surgery, or allergies before your appointment. Treatment may be refused if unsafe to proceed." },
  { title: "Aftercare", content: "Follow my aftercare advice for best retention — results vary with your natural lash cycle." },
  { title: "Photography", content: "Before & after photos may be taken for my portfolio/social media unless you request otherwise." },
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
        <meta name="keywords" content="lash extension prices Chatteris, classic lashes price, volume lashes cost, facial prices PE16, LED therapy cost" />
        <link rel="canonical" href="/pricing" />
        <meta property="og:title" content="Pricing | Lash Extensions & Facials | Timeless Chatteris" />
        <meta property="og:description" content="Transparent pricing for lash extensions, brow services, Medik8 facials & Dermalux LED therapy." />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHero
        title="Pricing"
        subtitle="Transparent pricing for all treatments. Book online to secure your appointment."
      />

      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <div className="grid gap-8">
            <PricingTable title="Lash Extensions" items={lashPricing} />
            <PricingTable title="Brows" items={browPricing} />
            <div className="bg-cream-dark rounded-2xl p-6 md:p-8">
              <p className="text-sm text-muted-foreground mb-4 italic">Add-on prices when booked with a lash service:</p>
              <div className="space-y-4">
                {browAddOnPricing.map((item, index) => (
                  <div
                    key={item.service}
                    className={`flex items-center justify-between py-3 ${
                      index !== browAddOnPricing.length - 1 ? "border-b border-border" : ""
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
            
            {/* Facials with descriptions */}
            <div className="bg-cream-dark rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-2xl text-foreground mb-6">Medik8 Facials & Body Peels</h3>
              <div className="space-y-6">
                {facialPricing.map((item, index) => (
                  <div
                    key={item.service}
                    className={`pb-6 ${
                      index !== facialPricing.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-foreground">{item.service}</p>
                      <span className="font-serif text-lg text-rose-gold">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                I use Medik8 professional skincare — UK-made, dermatologist-recommended, and B Corp-certified. Expect a gentle tingle or temporary redness during treatments; that's the skin responding to powerful, skin-loving actives.
              </p>
            </div>

            {/* Dermalux LED */}
            <div className="bg-cream-dark rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-2xl text-foreground mb-6">Dermalux LED Light Therapy</h3>
              <div className="space-y-4">
                {ledPricing.map((item, index) => (
                  <div
                    key={item.service}
                    className={`flex items-center justify-between py-3 ${
                      index !== ledPricing.length - 1 ? "border-b border-border" : ""
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
              <p className="text-sm text-muted-foreground mt-6 italic">
                A soothing, non-invasive treatment using the award-winning Dermalux LED device. Clinically proven light energy helps accelerate natural healing and renewal — effective for acne, rosacea, eczema, redness, and collagen boost with zero downtime.
              </p>
            </div>
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

      {/* Terms & Conditions */}
      <section className="section-padding-sm bg-cream">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-foreground">Terms & Conditions</h2>
            <p className="text-muted-foreground mt-2">Please read before booking</p>
          </div>
          
          <div className="bg-background rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              {termsConditions.map((term, index) => (
                <div
                  key={term.title}
                  className={`pb-4 ${
                    index !== termsConditions.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <h4 className="font-medium text-foreground mb-2">{term.title}</h4>
                  <p className="text-sm text-muted-foreground">{term.content}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-rose-gold mt-6 text-center font-medium">
              ♥ By booking, you agree to these terms. Thank you for your respect and understanding.
            </p>
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
