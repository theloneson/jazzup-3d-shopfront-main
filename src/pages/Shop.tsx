
import React, { useState } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products;

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col">
            <h1 className="text-4xl font-graffiti mb-8 text-center">SHOP ALL</h1>
            
            <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === null
                    ? "bg-primary text-white"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium">No products found</h3>
                <p className="text-muted-foreground mt-2">
                  Try a different category or check back later
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
