
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="mb-6 text-muted-foreground"
          >
            <Link to="/shop">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to shop
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <div className="bg-black rounded-lg overflow-hidden border border-white/10">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, i) => (
                    <div 
                      key={i}
                      className="aspect-square rounded-md overflow-hidden border border-white/10 cursor-pointer hover:border-primary transition-colors"
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-graffiti mb-2">{product.name}</h1>
                <p className="text-2xl font-semibold text-primary">₦{product.price.toLocaleString()}</p>
              </div>
              
              <div className="h-px w-full bg-border"></div>
              
              <div className="prose prose-invert">
                <p className="text-gray-300">{product.description}</p>
              </div>
              
              <div className="pt-4 space-y-4">
                <div>
                  <label 
                    htmlFor="size" 
                    className="block text-sm font-medium mb-2"
                  >
                    Size
                  </label>
                  <select 
                    id="size"
                    className="w-full rounded-md border border-border bg-secondary p-2 text-sm"
                  >
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">Extra Large</option>
                  </select>
                </div>
                
                <div>
                  <label 
                    htmlFor="quantity" 
                    className="block text-sm font-medium mb-2"
                  >
                    Quantity
                  </label>
                  <select 
                    id="quantity"
                    className="w-full rounded-md border border-border bg-secondary p-2 text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Button size="lg" className="w-full text-lg animate-pulse-glow mt-6">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center mt-4">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
                  </svg>
                  Handmade with love. Please allow 5-7 business days for production.
                </div>
                <div className="flex items-center mt-2">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.995 6.9L19.133 5a1 1 0 0 0-.64-.264l-3.495-.261 1.33-1.51a1.04 1.04 0 0 0 .03-1.266 1.049 1.049 0 0 0-1.538-.067l-2.457 2.953H9.312L6.855 1.632a1.049 1.049 0 0 0-1.538.067 1.04 1.04 0 0 0 .03 1.266l1.33 1.51L3.18 4.736a1.01 1.01 0 0 0-.631.257l-1.82 1.9A1 1 0 0 0 0 7.4V12a1 1 0 0 0 1 1h1v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7h1a1 1 0 0 0 1-1V7.4a1 1 0 0 0-.093-.5zM20 13h-2c-.551 0-1 .448-1 1v7H7v-7c0-.552-.449-1-1-1H4v-3h16v3z"></path>
                  </svg>
                  Free shipping on orders over ₦200,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
