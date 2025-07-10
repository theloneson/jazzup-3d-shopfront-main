
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/70 z-0"></div>
      
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-red-500/30"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:flex lg:h-[85vh] lg:items-center">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="font-graffiti text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6">
              <span className="block">CUSTOM</span>
              <span className="block text-primary animate-pulse-glow">STREETWEAR</span>
              <span className="block">BY JAZZUP</span>
            </h1>
            
            <p className="mt-6 max-w-lg text-xl text-gray-300 mb-8">
              Unique custom-designed clothing that makes a statement. Each piece is hand-crafted with an artistic edge that defies convention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/shop">
                  Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg border-white/20 hover:bg-white/10">
                <Link to="/about">
                  About JAZZUP
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative animate-float">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-500 to-red-700 opacity-70 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/lovable-uploads/10414d99-dd9c-4c00-a1d6-bfac53ab170d.png" 
                  alt="JAZZUP Tank Top"
                  className="w-full h-auto transform rotate-3 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-red-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
