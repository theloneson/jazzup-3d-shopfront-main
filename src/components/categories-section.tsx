
import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const backgroundImages = {
  "tops": "/lovable-uploads/10414d99-dd9c-4c00-a1d6-bfac53ab170d.png",
  "jackets": "/lovable-uploads/199a06a3-c482-4316-903b-db388f53464f.png",
  "pants": "/lovable-uploads/0469aeed-8a66-4ecb-8d43-2dcad7ab0579.png",
  "hoodies": "/lovable-uploads/4c540300-8c18-428d-8cf3-596db99c5640.png",
  "footwear": "/lovable-uploads/3eb61c6e-b10d-4abc-af3f-ea333e3f03ba.png"
};

export function CategoriesSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-graffiti mb-4 text-white">
            SHOP BY CATEGORY
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/80 group-hover:from-black/50 group-hover:to-black/90 transition-all duration-300 z-10"></div>
              
              <img
                src={backgroundImages[category.id as keyof typeof backgroundImages] || "/placeholder.svg"}
                alt={category.name}
                className={cn(
                  "w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110",
                  category.id === "footwear" ? "object-contain bg-white/10" : "object-cover"
                )}
              />
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-graffiti text-white group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
