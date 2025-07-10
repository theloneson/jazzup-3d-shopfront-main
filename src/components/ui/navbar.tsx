
import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartCount, setCartCount] = React.useState(0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-graffiti text-primary text-2xl tracking-wider">JAZZUP</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80">Home</Link>
            <Link to="/shop" className="transition-colors hover:text-foreground/80">Shop</Link>
            <Link to="/categories" className="transition-colors hover:text-foreground/80">Categories</Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80">About</Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden w-full md:flex md:w-auto md:flex-none">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Button>

          <Link to="/login">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 pb-4 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80">Home</Link>
            <Link to="/shop" className="transition-colors hover:text-foreground/80">Shop</Link>
            <Link to="/categories" className="transition-colors hover:text-foreground/80">Categories</Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80">About</Link>
            <Link to="/login" className="transition-colors hover:text-foreground/80">Login</Link>
            <Link to="/register" className="transition-colors hover:text-foreground/80">Register</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
