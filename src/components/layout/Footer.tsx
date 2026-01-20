import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";
const INSTAGRAM_URL = "https://www.instagram.com/timeless_lashandskin?igsh=cnZzMDhtNjkwdGh3&utm_source=qr";
const FACEBOOK_URL = "https://www.facebook.com/share/17QgfYtrGD/?mibextid=wwXIfr";

const navigation = {
  services: [
    { name: "Lash Extensions", href: "/services#lashes" },
    { name: "Brow Services", href: "/services#brows" },
    { name: "Medik8 Facials", href: "/services#skin" },
    { name: "Skin Peels", href: "/services#peels" },
    { name: "LED Therapy", href: "/services#led" },
  ],
  info: [
    { name: "Pricing", href: "/pricing" },
    { name: "About Kristine", href: "/about" },
    { name: "Aftercare & Policies", href: "/aftercare" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-border">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-tight text-foreground">
                Timeless
              </span>
              <span className="block text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Lash & Skin Studio
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Natural lashes & healthy skin in a calm home studio. Serving Chatteris, March, Ely, Huntingdon & Cambridge area.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Chatteris (PE16), Cambridgeshire</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-rose-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Information</h4>
            <ul className="space-y-2">
              {navigation.info.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-rose-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Book Now</h4>
            <p className="text-sm text-muted-foreground mb-4">
              View live availability and book your appointment online.
            </p>
            <Button variant="cta" className="w-full mb-4" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </Button>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg text-muted-foreground hover:text-rose-gold hover:bg-rose-gold-light/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg text-muted-foreground hover:text-rose-gold hover:bg-rose-gold-light/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Timeless Lash & Skin Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Home Studio in Chatteris, Cambridgeshire
          </p>
        </div>
      </div>
    </footer>
  );
}
