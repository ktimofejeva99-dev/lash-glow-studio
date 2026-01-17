import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { Instagram, Facebook, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";
const INSTAGRAM_URL = "https://www.instagram.com/timeless_lashandskin?igsh=cnZzMDhtNjkwdGh3&utm_source=qr";
const FACEBOOK_URL = "https://www.facebook.com/share/17QgfYtrGD/?mibextid=wwXIfr";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an email service
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact | Timeless Lash & Skin Studio Chatteris</title>
        <meta
          name="description"
          content="Get in touch with Timeless Lash & Skin Studio in Chatteris. Follow on Instagram & Facebook, or send a message. Home studio address shared after booking."
        />
        <meta name="keywords" content="contact lash studio Chatteris, book lashes PE16, lash extensions near me, beauty studio Cambridgeshire" />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content="Contact | Timeless Lash & Skin Studio" />
        <meta property="og:description" content="Get in touch or book an appointment at Timeless Lash & Skin Studio in Chatteris, Cambridgeshire." />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHero
        title="Contact"
        subtitle="Have a question? Get in touch or follow along on social media."
      />

      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">Get in touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream-dark rounded-lg">
                    <MapPin className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Chatteris, PE16 6DX<br />
                      <span className="italic">Home studio — full address shared after booking</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream-dark rounded-lg">
                    <Mail className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a 
                      href="mailto:lashescambridgeshire@gmail.com" 
                      className="text-muted-foreground text-sm mt-1 hover:text-rose-gold transition-colors"
                    >
                      lashescambridgeshire@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl text-foreground mb-4">Follow & Connect</h3>
              <div className="flex gap-3 mb-8">
                <Button variant="heroOutline" size="lg" asChild>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </Button>
                <Button variant="subtle" size="lg" asChild>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                </Button>
              </div>

              <div className="p-6 bg-rose-gold-light/30 rounded-xl">
                <h3 className="font-serif text-lg text-foreground mb-2">Ready to book?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  View live availability and book your appointment online.
                </p>
                <Button variant="cta" asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book Online
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">Send a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-1.5"
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Serving areas */}
      <section className="section-padding-sm bg-cream-dark">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-2xl text-foreground mb-4">Serving the local area</h2>
          <p className="text-muted-foreground mb-6">
            Clients visit from across Cambridgeshire and the surrounding area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Chatteris", "March", "Ely", "Huntingdon", "St Ives", "Cambridge", "Ramsey", "Whittlesey"].map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-background rounded-full text-sm text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
