export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
}

export const menuData: MenuItem[] = [
  // Best Sellers
  {
    id: "bestseller-dum-biryani",
    name: "Chicken Dum Biryani",
    description: "Fragrant basmati rice layered with slow-cooked chicken and aromatic spices, sealed in dum.",
    price: 299,
    category: "bestsellers",
    image: "/assets/chicken-dum-biryani.jpg",
    rating: 4.8,
    reviews: 112
  },
  {
    id: "bestseller-charcoal-biryani",
    name: "Charcoal Chicken Biryani",
    description: "Juicy, marinated chicken cooked over charcoal and layered with saffron rice — a house special.",
    price: 349,
    category: "bestsellers",
    image: "/assets/charcoal-chicken-biryani.jpg",
    rating: 4.9,
    reviews: 87
  },
  {
    id: "bestseller-bhuna-ghost",
    name: "Bhuna Ghost",
    description: "Slow-cooked mutton in thick roasted masala.",
    price: 349,
    category: "bestsellers",
    image: "/assets/buna-gosht.jpg",
    rating: 4.8,
    reviews: 96
  },
  {
    id: "bestseller-chicken-tikka",
    name: "Charcoal Chicken Tikka",
    description: "Juicy chicken marinated in smoked spices and grilled to perfection.",
    price: 249,
    category: "bestsellers",
    image: "/assets/charcoal-chicken-tikka.jpg",
    rating: 4.8,
    reviews: 92
  },

  // Starters
  {
    id: "starter-paneer-tikka",
    name: "Angara Paneer Tikka",
    description: "Paneer cubes grilled with fiery masala and aromatic spices.",
    price: 229,
    category: "starters",
    image: "/assets/angara-paneer-tikka.jpg",
    rating: 4.6,
    reviews: 76
  },
  {
    id: "starter-mushroom",
    name: "Tandoori Stuffed Mushroom",
    description: "Smoky mushrooms stuffed with cheese & herbs.",
    price: 199,
    category: "starters",
    image: "/assets/Grilled-baby-bella-mushrooms.jpg",
    rating: 4.5,
    reviews: 54
  },
  {
    id: "starter-prawns",
    name: "Ghee Roast Prawns",
    description: "Coastal-style prawns sautéed in ghee and red chili masala.",
    price: 299,
    category: "starters",
    image: "/assets/ghee-roast-prawns.jpg",
    rating: 4.7,
    reviews: 88
  },

  // Mains
  {
    id: "main-dum-biryani",
    name: "Chicken Dum Biryani",
    description: "Fragrant basmati rice layered with slow-cooked chicken and aromatic spices, sealed in dum.",
    price: 299,
    category: "mains",
    image: "/assets/chicken-dum-biryani.jpg",
    rating: 4.8,
    reviews: 112
  },
  {
    id: "main-shahi-mutton",
    name: "Shahi Mutton Biryani",
    description: "Tender mutton cooked with rich spices, saffron rice, and a royal touch.",
    price: 379,
    category: "mains",
    image: "/assets/shahi-mutton-biryani.jpg",
    rating: 4.9,
    reviews: 98
  },
  {
    id: "main-butter-chicken",
    name: "Charcoal Butter Chicken",
    description: "Creamy, smoky twist on the classic butter chicken with tender charcoal-grilled chicken.",
    price: 319,
    category: "mains",
    image: "/assets/charcoal-butter-chicken.jpg",
    rating: 4.9,
    reviews: 124
  },
  {
    id: "main-bhuna-ghost",
    name: "Bhuna Ghost",
    description: "Slow-cooked mutton in thick roasted masala.",
    price: 349,
    category: "mains",
    image: "/assets/buna-gosht.jpg",
    rating: 4.8,
    reviews: 96
  },

  // Desserts
  {
    id: "dessert-kulfi",
    name: "Matka Kulfi",
    description: "Traditional kulfi served in a clay pot, rich with saffron and pistachios.",
    price: 129,
    category: "desserts",
    image: "/assets/matka-kulfi.jpg",
    rating: 4.8,
    reviews: 150
  },
  {
    id: "dessert-gulab-jamun",
    name: "Smoky Gulab Jamun",
    description: "Traditional gulab jamun with a smoky twist.",
    price: 99,
    category: "desserts",
    image: "/assets/gulab-jamun.jpg",
    rating: 4.7,
    reviews: 82
  },
  {
    id: "dessert-cold-coffee",
    name: "Charcoal Cold Coffee",
    description: "Chilled cold coffee with a subtle smoky twist and creamy finish.",
    price: 89,
    category: "desserts",
    image: "/assets/charcoal-coffee.jpg",
    rating: 4.4,
    reviews: 58
  }
];
