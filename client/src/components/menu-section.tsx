import { useState } from "react";
import { Star, StarHalf } from "lucide-react";
import { menuData } from "@/lib/menu-data";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("signature");

  const categories = [
    { id: "signature", name: "Signature Dishes" },
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Mains" },
    { id: "desserts", name: "Desserts" }
  ];

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-inter">Our Menu</h2>
          <p className="text-lg text-warm-grey max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Indian dishes, each prepared with love and traditional techniques
          </p>
        </div>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-dm-sans font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-burnt-orange text-white'
                  : 'bg-white text-charcoal border border-gray-200 hover:bg-burnt-orange hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-charcoal font-inter">{item.name}</h3>
                  <span className="text-burnt-orange font-bold text-lg">₹{item.price}</span>
                </div>
                <p className="text-warm-grey text-sm mb-4">{item.description}</p>
                <div className="flex items-center">
                  <div className="flex">
                    {renderStars(item.rating)}
                  </div>
                  <span className="ml-2 text-warm-grey text-sm">
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <a 
            href="https://wa.me/918742234567" 
            className="btn-primary text-white px-8 py-4 rounded-full font-dm-sans font-medium text-lg inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 2.002c-5.514 0-9.985 4.472-9.985 9.985 0 1.765.459 3.422 1.263 4.853L2.002 22.002l5.177-1.285c1.383.744 2.965 1.166 4.666 1.166 5.514 0 9.985-4.472 9.985-9.985s-4.472-9.985-9.985-9.985zM12.017 20.336c-1.458 0-2.864-.377-4.076-1.096l-.293-.175-3.037.754.764-3.004-.191-.304c-.785-1.25-1.199-2.691-1.199-4.169 0-4.339 3.531-7.87 7.87-7.87s7.87 3.531 7.87 7.87-3.531 7.87-7.87 7.87z"/>
              <path d="M16.735 14.492c-.248-.124-1.469-.725-1.696-.808-.228-.083-.394-.124-.559.124-.165.248-.641.808-.785.975-.145.165-.289.186-.537.062-.248-.124-1.045-.385-1.992-1.229-.736-.657-1.233-1.469-1.378-1.717-.145-.248-.015-.382.109-.506.111-.111.248-.289.372-.434.124-.145.165-.248.248-.414.083-.165.041-.31-.021-.434-.062-.124-.559-1.346-.765-1.844-.2-.484-.404-.418-.559-.426-.145-.007-.31-.009-.476-.009-.165 0-.434.062-.662.31-.228.248-.869.85-.869 2.072 0 1.222.89 2.401 1.014 2.567.124.165 1.752 2.674 4.244 3.751.593.256 1.056.409 1.417.523.595.189 1.135.162 1.563.098.477-.071 1.469-.6 1.675-1.178.207-.578.207-1.074.145-1.178-.062-.103-.228-.165-.476-.289z"/>
            </svg>
            Order Full Menu on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
