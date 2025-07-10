
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { CategoriesSection } from "@/components/categories-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="py-16 bg-gradient-to-b from-black to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-graffiti mb-6">CUSTOM STREETWEAR</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              JAZZUP creates unique, hand-painted custom clothing that celebrates individuality and artistic expression. 
              Each piece is crafted to make a bold statement that defies convention.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Handcrafted</h3>
                <p className="text-gray-400">Each item is individually hand-painted with meticulous attention to detail.</p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Unique</h3>
                <p className="text-gray-400">No two pieces are alike, ensuring your style remains truly one-of-a-kind.</p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-gray-400">Made from high-quality materials to ensure durability and comfort.</p>
              </div>
            </div>
          </div>
        </div>
        
        <FeaturedProducts />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
