import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aftercareItems = [
  {
    id: "prep",
    title: "Before Your Lash Appointment",
    content: `
      <ul class="space-y-2">
        <li><strong>Arrive with clean eyes</strong> — no eye makeup, mascara, or oily residue.</li>
        <li><strong>Avoid caffeine</strong> if it makes your eyes flutter during the treatment.</li>
        <li><strong>Remove contact lenses</strong> if you wear them (you can put them back in after).</li>
        <li>Feel free to bring earphones if you'd like to listen to something during your treatment.</li>
      </ul>
    `,
  },
  {
    id: "aftercare",
    title: "Lash Aftercare",
    content: `
      <ul class="space-y-2">
        <li><strong>First 24 hours:</strong> Avoid water, steam, and humidity on your lashes.</li>
        <li><strong>Daily care:</strong> Gently brush your lashes each morning with a clean spoolie.</li>
        <li><strong>Cleansing:</strong> Use an oil-free lash cleanser or micellar water. Clean lashes = better retention.</li>
        <li><strong>Avoid:</strong> Oil-based products, waterproof mascara, rubbing or pulling at your lashes.</li>
        <li><strong>Sleeping:</strong> Try to sleep on your back or use a silk pillowcase to reduce friction.</li>
      </ul>
    `,
  },
  {
    id: "infills",
    title: "Infill Rules",
    content: `
      <p class="mb-3">To book an infill, you'll need to have a minimum percentage of lashes still attached from your previous set.</p>
      <ul class="space-y-2">
        <li><strong>2-week infill:</strong> Ideal if you want your lashes looking consistently full and fresh.</li>
        <li><strong>3-week infill:</strong> Works well if you have good retention and don't mind a slightly grown-out look.</li>
        <li><strong>Beyond 3 weeks or too many gaps?</strong> You may need a removal and fresh full set. Don't worry — I'll advise on the day.</li>
      </ul>
    `,
  },
  {
    id: "cancellation",
    title: "Late & Cancellation Policy",
    content: `
      <p class="mb-3">I understand life happens, but please give as much notice as possible if you need to reschedule.</p>
      <ul class="space-y-2">
        <li><strong>24+ hours notice:</strong> Reschedule or cancel with no charge.</li>
        <li><strong>Less than 24 hours:</strong> A late cancellation fee may apply.</li>
        <li><strong>No-shows:</strong> May be charged the full treatment cost.</li>
      </ul>
      <p class="mt-3 text-sm italic">Specific fees and policy details available on request.</p>
    `,
  },
  {
    id: "patchtest",
    title: "Patch Test Note",
    content: `
      <p>For brow tinting, a patch test may be required at least 24 hours before your first treatment. This helps ensure you don't have a reaction to the tint.</p>
      <p class="mt-2">If you've had tinting done elsewhere recently (within 3 months), you may not need a new test — just let me know.</p>
    `,
  },
];

const faqItems = [
  {
    id: "pain",
    title: "Do lash extensions hurt?",
    content: "No — lash extensions shouldn't hurt at all. You'll have your eyes closed throughout the treatment, and many clients find it so relaxing they fall asleep. If you ever feel any discomfort, let me know immediately.",
  },
  {
    id: "retention",
    title: "How long do lash extensions last?",
    content: "With proper aftercare, your lash extensions will last the natural growth cycle of your lashes — typically 4–6 weeks. However, for the fullest look, most clients book infills every 2–3 weeks.",
  },
  {
    id: "damage",
    title: "Will lash extensions damage my natural lashes?",
    content: "Not when applied correctly. I use appropriate weights and lengths for your natural lashes, so they're never overloaded. Proper aftercare also plays a big part in keeping your natural lashes healthy.",
  },
  {
    id: "facial-frequency",
    title: "How often should I have a facial?",
    content: "For best results, a professional facial every 4–6 weeks is ideal. This aligns with your skin's natural renewal cycle. However, even occasional facials can make a real difference to your skin's health and glow.",
  },
  {
    id: "led-frequency",
    title: "How often can I have LED therapy?",
    content: "LED is gentle and can be done frequently — even weekly for intensive courses. As a maintenance treatment, once a month alongside your facial is a great option.",
  },
  {
    id: "first-time",
    title: "What if I've never had lash extensions before?",
    content: "No problem! I'll talk you through everything before we start, help you choose the right style and length, and make sure you're comfortable throughout. We'll keep it natural for your first set so you can see how you like them.",
  },
];

const Aftercare = () => {
  return (
    <Layout>
      <Helmet>
        <title>Aftercare & Policies | Timeless Lash & Skin Studio</title>
        <meta
          name="description"
          content="Lash aftercare tips, infill rules, cancellation policy & FAQs. Everything you need to know before and after your lash or facial appointment in Chatteris."
        />
      </Helmet>

      <PageHero
        title="Aftercare & Policies"
        subtitle="Everything you need to know before and after your treatment."
      />

      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl text-foreground mb-6">Preparation & Aftercare</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {aftercareItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-cream-dark rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-foreground font-medium hover:no-underline py-5">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding-sm bg-cream-dark">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl text-foreground mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-background rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-foreground font-medium hover:no-underline py-5">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Aftercare;
