import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import classicLashes from "@/assets/classic-lashes.jpg";
import hybridLashes from "@/assets/hybrid-lashes.jpg";
import volumeLashes from "@/assets/volume-lashes.jpg";
import studioSpace from "@/assets/studio-space.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import ledTreatment from "@/assets/led-treatment.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/timeless_lashandskin?igsh=cnZzMDhtNjkwdGh3&utm_source=qr";

const images = [
  { src: classicLashes, alt: "Classic lash extensions" },
  { src: hybridLashes, alt: "Hybrid lash extensions" },
  { src: volumeLashes, alt: "Volume lash extensions" },
  { src: studioSpace, alt: "Calm studio space" },
  { src: skincareProducts, alt: "Medik8 skincare products" },
  { src: ledTreatment, alt: "LED therapy treatment" },
];

export function InstagramSection() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Follow the journey
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            See the latest lash work, skincare tips, and behind-the-scenes on Instagram.
          </p>
          <Button variant="heroOutline" size="lg" asChild>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              @timeless_lashandskin
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-xl overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
