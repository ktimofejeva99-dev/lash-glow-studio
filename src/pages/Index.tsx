import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { CTABanner } from "@/components/shared/CTABanner";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Timeless Lash & Skin Studio | Lash Extensions Chatteris, PE16</title>
        <meta
          name="description"
          content="Expert lash extensions, Medik8 facials & Dermalux LED in Chatteris, Cambridgeshire. Book online for natural-looking lashes in a calm home studio. Serving PE16, March, Ely, Huntingdon."
        />
        <meta property="og:title" content="Timeless Lash & Skin Studio | Chatteris" />
        <meta property="og:description" content="Natural lashes & healthy skin in a calm home studio. Classic, hybrid & volume lash extensions, Medik8 facials, Dermalux LED." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Timeless Lash & Skin Studio",
            "description": "Lash extensions, Medik8 facials, and Dermalux LED treatments in Chatteris, Cambridgeshire",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chatteris",
              "addressRegion": "Cambridgeshire",
              "postalCode": "PE16",
              "addressCountry": "GB"
            },
            "areaServed": ["Chatteris", "March", "Ely", "Huntingdon", "St Ives", "Cambridge"],
            "priceRange": "££",
            "serviceType": ["Lash Extensions", "Facials", "LED Therapy", "Brow Services"]
          })}
        </script>
      </Helmet>
      <HeroSection />
      <TrustSection />
      <ServicesPreview />
      <HowItWorksSection />
      <TestimonialsSection />
      <InstagramSection />
      <CTABanner />
    </Layout>
  );
};

export default Index;
