import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Calendar, MapPin, Clock } from "lucide-react";

const BOOKING_URL = "https://bookings.gettimely.com/lashescambridgeshire/bb/book";

const BookOnline = () => {
  return (
    <Layout>
      <Helmet>
        <title>Book Online | Lash Extensions Chatteris | Timeless</title>
        <meta
          name="description"
          content="Book your lash extension, facial, or LED treatment online. View live availability and secure your appointment at Timeless Lash & Skin Studio, Chatteris."
        />
      </Helmet>

      <PageHero
        title="Book Online"
        subtitle="View live availability and book your appointment in minutes."
      />

      <section className="section-padding-sm bg-background">
        <div className="container-narrow text-center">
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-cream-dark rounded-xl">
                <Calendar className="w-6 h-6 text-rose-gold mx-auto mb-3" />
                <p className="text-sm text-foreground font-medium">Live Availability</p>
                <p className="text-xs text-muted-foreground mt-1">See real-time slots</p>
              </div>
              <div className="p-6 bg-cream-dark rounded-xl">
                <Clock className="w-6 h-6 text-rose-gold mx-auto mb-3" />
                <p className="text-sm text-foreground font-medium">Instant Confirmation</p>
                <p className="text-xs text-muted-foreground mt-1">Email confirmation sent</p>
              </div>
              <div className="p-6 bg-cream-dark rounded-xl">
                <MapPin className="w-6 h-6 text-rose-gold mx-auto mb-3" />
                <p className="text-sm text-foreground font-medium">Address Shared</p>
                <p className="text-xs text-muted-foreground mt-1">After booking</p>
              </div>
            </div>

            <Button variant="cta" size="xl" className="w-full sm:w-auto" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Now on GetTimely
              </a>
            </Button>

            <p className="mt-8 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 inline mr-1" />
              Home studio in Chatteris (PE16), Cambridgeshire — full address shared after booking.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-cream-dark">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl text-foreground text-center mb-8">
            What to expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-background rounded-xl">
              <h3 className="font-serif text-lg text-foreground mb-2">Before your appointment</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Arrive with clean, makeup-free eyes (for lash treatments)</li>
                <li>• Avoid caffeine if it makes your eyes flutter</li>
                <li>• The full address will be sent to your email after booking</li>
              </ul>
            </div>
            <div className="p-6 bg-background rounded-xl">
              <h3 className="font-serif text-lg text-foreground mb-2">During your visit</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Relax in a clean, calm home studio environment</li>
                <li>• Treatment tailored to your preferences</li>
                <li>• Aftercare advice provided</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookOnline;
