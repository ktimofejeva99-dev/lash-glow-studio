import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function CTABanner({
  title = "Ready to book?",
  subtitle = "View live availability and book your appointment in minutes.",
  buttonText = "Book Online",
}: CTABannerProps) {
  return (
    <section className="bg-cream-dark">
      <div className="container-narrow section-padding-sm text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          {subtitle}
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      </div>
    </section>
  );
}
