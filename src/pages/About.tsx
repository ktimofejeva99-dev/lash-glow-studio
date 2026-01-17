import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Helmet } from "react-helmet-async";
import studioSpace from "@/assets/studio-space.jpg";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Kristine | Timeless Lash & Skin Studio Chatteris</title>
        <meta
          name="description"
          content="Meet Kristine — experienced lash technician & skincare specialist. Trained in London, now based in Chatteris. Natural results, calm studio, attention to detail."
        />
      </Helmet>

      <PageHero
        title="About"
        subtitle="Creating natural-looking lashes and healthy, glowing skin in a calm, professional setting."
      />

      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm tracking-[0.2em] uppercase text-rose-gold">Meet Kristine</span>
              <h2 className="font-serif text-3xl text-foreground mt-2 mb-6">
                Passionate about natural beauty & skin health
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Kristine, and I've been working in the beauty and aesthetics industry for several years. I trained and worked in a top London skin clinic, where I developed a deep understanding of both lash artistry and professional skincare.
                </p>
                <p>
                  Now based in Chatteris, I've created a calm, clean home studio where you can relax and enjoy your treatment in a professional but welcoming environment. I believe beauty treatments should enhance your natural features — not mask them.
                </p>
                <p>
                  My focus is always on <strong className="text-foreground">natural-looking results</strong>, <strong className="text-foreground">attention to detail</strong>, and <strong className="text-foreground">skin health</strong>. Whether you're after soft, flattering lashes or a glow-boosting facial, I'll take the time to understand what you want and tailor the treatment to you.
                </p>
                <p>
                  I use only professional-grade products — London Lash Pro for lashes, Medik8 for facials, and the clinically proven Dermalux Flex for LED therapy. Quality products matter.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={studioSpace}
                  alt="Timeless Lash & Skin Studio treatment space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-cream-dark">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="font-serif text-4xl text-rose-gold mb-2">5+</h3>
              <p className="text-sm text-muted-foreground">Years in Beauty & Aesthetics</p>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-4xl text-rose-gold mb-2">London</h3>
              <p className="text-sm text-muted-foreground">Trained in Top Skin Clinic</p>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-4xl text-rose-gold mb-2">100%</h3>
              <p className="text-sm text-muted-foreground">Focus on Natural Results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl text-foreground text-center mb-10">
            Why choose Timeless?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Professional Products Only",
                description: "London Lash Pro, Medik8, and Dermalux Flex — trusted by professionals worldwide.",
              },
              {
                title: "Natural-Looking Results",
                description: "Lashes and skin treatments tailored to enhance, not overwhelm.",
              },
              {
                title: "Clean, Calm Environment",
                description: "A private home studio where you can truly relax. No salon noise or rush.",
              },
              {
                title: "Attention to Detail",
                description: "Every lash, every application — precision matters. Your results will show it.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-cream-dark rounded-xl">
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default About;
