
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-border/40 bg-card/60 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <div className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 relative">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="h-full w-full object-cover absolute inset-0"
            />
          </div>
        </div>
      </Link>
      <CardContent className="pt-4">
        <Link to={`/product/${product.id}`} className="hover:underline">
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2 mt-2">{product.description.split('.')[0]}.</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="font-semibold">₦{product.price.toLocaleString()}</div>
        <Button size="sm" className="animate-pulse-glow">
          <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
