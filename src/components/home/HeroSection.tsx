import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/hero-lashes.jpg";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";
const INSTAGRAM_URL = "https://www.instagram.com/timeless_lashandskin?igsh=cnZzMDhtNjkwdGh3&utm_source=qr";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful natural lash extensions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-20">
        <div className="max-w-xl">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-rose-gold mb-4 animate-fade-up">
            Chatteris, Cambridgeshire
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Natural lashes & healthy skin in Chatteris
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Clean, flattering lash extensions and Medik8-powered facials in a calm home studio. Book online in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
