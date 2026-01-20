import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Aftercare", href: "/aftercare" },
  { name: "Contact", href: "/contact" },
];

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";
const INSTAGRAM_URL = "https://www.instagram.com/timeless_lashandskin?igsh=cnZzMDhtNjkwdGh3&utm_source=qr";
const FACEBOOK_URL = "https://www.facebook.com/share/17QgfYtrGD/?mibextid=wwXIfr";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl tracking-tight text-foreground">
            Timeless
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground -mt-1">
            Lash & Skin Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-rose-gold",
                location.pathname === item.href
                  ? "text-rose-gold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-rose-gold transition-colors"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-rose-gold transition-colors"
            aria-label="Follow on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <Button variant="cta" size="sm" asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Online
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background shadow-card transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-wide py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "block py-2 text-base font-medium transition-colors",
                location.pathname === item.href
                  ? "text-rose-gold"
                  : "text-foreground hover:text-rose-gold"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border space-y-3">
            <Button variant="cta" size="lg" className="w-full" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </Button>
            <div className="flex gap-4 justify-center pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-rose-gold transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-rose-gold transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
