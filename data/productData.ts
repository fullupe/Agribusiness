export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export const products: Product[] = [
//   {
//     id: "1",
//     name: "Scotch Bonnet Pepper Seedlings",
//     description: "High-yield, disease-resistant pepper seedlings ready for transplanting. Ideal for commercial farming.",
//     price: "GHS 2.50/seedling",
//     category: "Seedlings",
//     image: "https://images.unsplash.com/photo-1594282486756-576b93f43e01?w=400&h=300&fit=crop"
//   },
  {
    id: "2",
    name: "NPK 15-15-15 Fertilizer",
    description: "Balanced compound fertilizer for all-purpose crop nutrition. 50kg bag.",
    price: "GHS 450/bag",
    category: "Fertilizers",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    name: "Hybrid Maize Seeds",
    description: "High-yielding, drought-tolerant maize variety. 10kg pack for 1 acre coverage.",
    price: "GHS 180/pack",
    category: "Seeds",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop"
  },
  {
    id: "4",
    name: "Tomato Seedlings (Roma VF)",
    description: "Vigorous, high-yielding tomato seedlings with excellent disease resistance.",
    price: "GHS 1.80/seedling",
    category: "Seedlings",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=300&fit=crop"
  },
  {
    id: "5",
    name: "Glyphosate Herbicide",
    description: "Broad-spectrum systemic herbicide for weed control. 20L container.",
    price: "GHS 320/container",
    category: "Agrochemicals",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
  },
  {
    id: "6",
    name: "Onion Seeds (Red Creole)",
    description: "Premium quality onion seeds with high germination rate. 500g pack.",
    price: "GHS 85/pack",
    category: "Seeds",
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&h=300&fit=crop"
  },
  {
    id: "7",
    name: "Urea Fertilizer 46-0-0",
    description: "High nitrogen fertilizer for vegetative growth. 50kg bag.",
    price: "GHS 380/bag",
    category: "Fertilizers",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
  },
  {
    id: "8",
    name: "Cabbage Seedlings",
    description: "Healthy, robust cabbage seedlings for commercial production.",
    price: "GHS 1.50/seedling",
    category: "Seedlings",
    image: "https://images.unsplash.com/photo-1594282486756-576b93f43e01?w=400&h=300&fit=crop"
  },
  {
    id: "9",
    name: "Insecticide (Cypermethrin)",
    description: "Effective broad-spectrum insecticide for pest control. 1L bottle.",
    price: "GHS 65/bottle",
    category: "Agrochemicals",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop"
  },
  {
    id: "10",
    name: "Cowpea Seeds",
    description: "Improved cowpea variety with high protein content. 25kg bag.",
    price: "GHS 220/bag",
    category: "Seeds",
    image: "https://images.unsplash.com/photo-1515543904067-4057ef8e828b?w=400&h=300&fit=crop"
  }
];

export const categories = ["All", "Seedlings", "Seeds", "Fertilizers", "Agrochemicals"];
