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
  // Signature Dishes
  {
    id: "signature-biryani",
    name: "Charcoal Chicken Biryani",
    description: "Juicy, marinated chicken cooked over charcoal and layered with saffron rice — a house special.",
    price: 349,
    category: "signature",
    image: "https://images.unsplash.com/photo-1563379091336-d5b6de0b3946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.9,
    reviews: 87
  },
  
  // Starters
  {
    id: "starter-chicken-tikka",
    name: "Charcoal Chicken Tikka",
    description: "Juicy chicken marinated in smoked spices and grilled to perfection.",
    price: 249,
    category: "starters",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.8,
    reviews: 92
  },
  {
    id: "starter-paneer-tikka",
    name: "Angara Paneer Tikka",
    description: "Paneer cubes grilled with fiery masala and aromatic spices.",
    price: 229,
    category: "starters",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.6,
    reviews: 76
  },
  {
    id: "starter-mushroom",
    name: "Tandoori Stuffed Mushroom",
    description: "Smoky mushrooms stuffed with cheese & herbs.",
    price: 199,
    category: "starters",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.5,
    reviews: 54
  },
  
  // Mains
  {
    id: "main-butter-chicken",
    name: "Charcoal Butter Chicken",
    description: "Creamy, smoky twist on the classic butter chicken with tender charcoal-grilled chicken.",
    price: 319,
    category: "mains",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.9,
    reviews: 124
  },
  {
    id: "main-dal",
    name: "Dal Charcoal-e-Diner",
    description: "Signature black lentils slow-cooked overnight with aromatic spices.",
    price: 199,
    category: "mains",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.7,
    reviews: 89
  },
  {
    id: "main-bhuna-ghost",
    name: "Bhuna Ghost",
    description: "Slow-cooked mutton in thick roasted masala.",
    price: 349,
    category: "mains",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.8,
    reviews: 96
  },
  {
    id: "main-paneer-lababdar",
    name: "Paneer Lababdar",
    description: "Cottage cheese in a rich Mughlai gravy.",
    price: 239,
    category: "mains",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.6,
    reviews: 73
  },
  
  // Desserts
  {
    id: "dessert-kulfi",
    name: "Matka Kulfi",
    description: "Traditional Indian ice cream served in clay pot with pistachios and almonds.",
    price: 129,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.5,
    reviews: 67
  },
  {
    id: "dessert-gulab-jamun",
    name: "Smoky Gulab Jamun",
    description: "Traditional gulab jamun with a smoky twist.",
    price: 99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1606471191009-63a3d3ba3b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.7,
    reviews: 82
  },
  {
    id: "dessert-cold-coffee",
    name: "Charcoal Cold Coffee",
    description: "Rich cold coffee with a hint of charcoal flavor.",
    price: 89,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    rating: 4.4,
    reviews: 58
  }
];
