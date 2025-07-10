
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "jazzup-tank-top-red",
    name: "Just Create JAZZUP Tank Top (Red)",
    price: 45000,
    images: ["/lovable-uploads/10414d99-dd9c-4c00-a1d6-bfac53ab170d.png"],
    description: "Red tank top featuring the 'Just Create' design on the front and JAZZUP branding on the back. The perfect statement piece that doesn't have to make sense.",
    category: "tops",
    featured: true
  },
  {
    id: "jazzup-tank-top-black",
    name: "Just Create JAZZUP Tank Top (Black)",
    price: 45000,
    images: ["/lovable-uploads/a5b07c1d-8e73-45e1-b4ad-510d1aa2da17.png"],
    description: "Black tank top featuring the 'Just Create' design on the front and JAZZUP branding on the back. For those who create without boundaries.",
    category: "tops"
  },
  {
    id: "jazzup-tank-top-blue",
    name: "Just Create JAZZUP Tank Top (Blue)",
    price: 45000,
    images: ["/lovable-uploads/0aa5067f-4b1d-40cf-9b14-9504959f4573.png"],
    description: "Blue tank top featuring the 'Just Create' design on the front and JAZZUP branding on the back. Cool, casual and creative.",
    category: "tops"
  },
  {
    id: "king-culture-jacket",
    name: "King Culture Denim Jacket",
    price: 70000,
    images: ["/lovable-uploads/199a06a3-c482-4316-903b-db388f53464f.png"],
    description: "Custom painted denim jacket featuring vibrant King Culture design. Each piece is uniquely hand-crafted with exceptional attention to detail.",
    category: "jackets",
    featured: true
  },
  {
    id: "black-universe-pants",
    name: "Black Universe Custom Pants with Planets",
    price: 80000,
    images: ["/lovable-uploads/c7b8871b-97df-41c4-ae2a-270cf2bcfc57.png"],
    description: "Journey through the cosmos with these custom painted pants featuring a stunning galaxy design with planets and space elements.",
    category: "pants"
  },
  {
    id: "naruto-sasuke-pants",
    name: "Naruto and Sasuke Custom Pants",
    price: 70000,
    images: ["/lovable-uploads/0469aeed-8a66-4ecb-8d43-2dcad7ab0579.png", "/lovable-uploads/2b25048f-c8c6-40d1-be92-faf54ad81f1e.png"],
    description: "Anime-inspired custom pants featuring the iconic Naruto and Sasuke design. Perfect for anime enthusiasts and streetwear lovers alike.",
    category: "pants",
    featured: true
  },
  {
    id: "rugrats-nike-slides",
    name: "Custom Rug Rats Nike Slides",
    price: 45000,
    images: ["/lovable-uploads/3eb61c6e-b10d-4abc-af3f-ea333e3f03ba.png"],
    description: "Step out in style with these custom Nike slides featuring classic Rugrats characters. Nostalgic and unique footwear for the bold.",
    category: "footwear"
  },
  {
    id: "juiceworld-hoodie",
    name: "Black JuiceWrld Hoodie",
    price: 60000,
    images: ["/lovable-uploads/4c540300-8c18-428d-8cf3-596db99c5640.png"],
    description: "Pay tribute to a legend with this custom JuiceWrld hoodie. Features distinctive artwork and premium quality material for comfort and style.",
    category: "hoodies"
  }
];

export const categories = [
  { id: "tops", name: "Tops" },
  { id: "jackets", name: "Jackets" },
  { id: "pants", name: "Pants" },
  { id: "hoodies", name: "Hoodies" },
  { id: "footwear", name: "Footwear" }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}
