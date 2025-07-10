
import React from "react";
import { getFeaturedProducts, Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { RotatingProduct } from "./rotating-product";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  const [activeProduct, setActiveProduct] = React.useState<Product | null>(
    featuredProducts.length > 0 ? featuredProducts[0] : null
  );

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-graffiti mb-4 text-white">
            FEATURED PRODUCTS
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {activeProduct?.name || "Featured Product"}
                </h3>
                <p className="text-gray-300 mb-4">
                  {activeProduct?.description || "Loading product details..."}
                </p>
                <div className="text-xl font-bold text-primary mb-6">
                  ₦{activeProduct?.price.toLocaleString() || "0"}
                </div>

                {activeProduct && (
                  <div className="h-64 w-full">
                    <RotatingProduct 
                      imageSrc={activeProduct.images[0]} 
                      size={240}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setActiveProduct(product)}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
