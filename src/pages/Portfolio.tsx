import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { cn } from "@/lib/utils";

// Classic Lashes
import classicLash1 from "@/assets/classic-lash-1.jpg";
import classicLash2 from "@/assets/classic-lash-2.jpg";
import classicLash3 from "@/assets/classic-lash-3.jpg";
import classicLash4 from "@/assets/classic-lash-4.jpg";
import classicLash5 from "@/assets/classic-lash-5.jpg";
import classicLash6 from "@/assets/classic-lash-6.jpg";
import classicLash8 from "@/assets/classic-lash-8.jpg";
import classicLash9 from "@/assets/classic-lash-9.jpg";
import classicLash10 from "@/assets/classic-lash-10.jpg";
import classicLash11 from "@/assets/classic-lash-11.jpg";
import classicLash12 from "@/assets/classic-lash-12.jpg";
import classicLash13 from "@/assets/classic-lash-13.jpg";
import classicLash14 from "@/assets/classic-lash-14.jpg";
import classicLash15 from "@/assets/classic-lash-15.jpg";

// Hybrid Lashes
import hybridLash1 from "@/assets/hybrid-lash-1.jpg";
import hybridLash2 from "@/assets/hybrid-lash-2.jpg";
import hybridLash3 from "@/assets/hybrid-lash-3.jpg";
import hybridLash4 from "@/assets/hybrid-lash-4.jpg";
import hybridLash5 from "@/assets/hybrid-lash-5.jpg";

// Volume Lashes
import volumeLash1 from "@/assets/volume-lash-1.jpg";
import volumeLash2 from "@/assets/volume-lash-2.jpg";
import volumeLash3 from "@/assets/volume-lash-3.jpg";
import volumeLash4 from "@/assets/volume-lash-4.jpg";
import volumeLash5 from "@/assets/volume-lash-5.jpg";

// Brows
import brow1 from "@/assets/brow-1.jpg";
import brow2 from "@/assets/brow-2.jpg";
import brow3 from "@/assets/brow-3.jpg";
import brow4 from "@/assets/brow-4.jpg";

type Category = "all" | "classic" | "hybrid" | "volume" | "brows";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "classic", label: "Classic Lashes" },
  { id: "hybrid", label: "Hybrid Lashes" },
  { id: "volume", label: "Volume Lashes" },
  { id: "brows", label: "Eyebrow Tint & Shape" },
];

const portfolioItems = [
  // Classic Lashes
  { src: classicLash1, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash2, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash3, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash4, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash5, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash6, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash8, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash9, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash10, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash11, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash12, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash13, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash14, alt: "Classic lash extensions", category: "classic" as const },
  { src: classicLash15, alt: "Classic lash extensions", category: "classic" as const },
  // Hybrid Lashes
  { src: hybridLash1, alt: "Hybrid lash extensions", category: "hybrid" as const },
  { src: hybridLash2, alt: "Hybrid lash extensions", category: "hybrid" as const },
  { src: hybridLash3, alt: "Hybrid lash extensions", category: "hybrid" as const },
  { src: hybridLash4, alt: "Hybrid lash extensions", category: "hybrid" as const },
  { src: hybridLash5, alt: "Hybrid lash extensions", category: "hybrid" as const },
  // Volume Lashes
  { src: volumeLash1, alt: "Volume lash extensions", category: "volume" as const },
  { src: volumeLash2, alt: "Volume lash extensions", category: "volume" as const },
  { src: volumeLash3, alt: "Volume lash extensions", category: "volume" as const },
  { src: volumeLash4, alt: "Volume lash extensions", category: "volume" as const },
  { src: volumeLash5, alt: "Volume lash extensions", category: "volume" as const },
  // Brows
  { src: brow1, alt: "Eyebrow tint and shaping", category: "brows" as const },
  { src: brow2, alt: "Eyebrow tint and shaping", category: "brows" as const },
  { src: brow3, alt: "Eyebrow tint and shaping", category: "brows" as const },
  { src: brow4, alt: "Eyebrow tint and shaping", category: "brows" as const },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Timeless Lash & Skin Studio</title>
        <meta
          name="description"
          content="Browse our portfolio of lash extensions and brow transformations. See examples of classic, hybrid, and volume lashes, plus eyebrow tinting and shaping results."
        />
      </Helmet>

      <PageHero
        title="Portfolio"
        subtitle="Browse our work and get inspired for your next appointment"
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-rose-gold text-white shadow-soft"
                    : "bg-warm-cream text-foreground hover:bg-rose-gold/20"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-medium">
                    {categories.find(c => c.id === item.category)?.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:opacity-70 transition-opacity"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Portfolio image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <CTABanner />
    </Layout>
  );
}
