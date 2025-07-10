import { ChevronDown, Utensils, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2070&q=80')" 
        }}
      />
      <div className="absolute inset-0 hero-bg" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-inter fade-in">
          Welcome to<br />
          <span className="text-burnt-orange">The Charcoal Diner</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-poppins fade-in">
          Experience authentic Indian cuisine with our signature charcoal-grilled dishes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <a 
            href="#menu" 
            className="btn-primary text-white px-8 py-4 rounded-full font-dm-sans font-medium text-lg inline-flex items-center gap-2 justify-center"
          >
            <Utensils className="w-5 h-5" />
            View Menu
          </a>
          <a 
            href="tel:+918742234567" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-dm-sans font-medium text-lg hover:bg-white hover:text-charcoal transition-all duration-300 inline-flex items-center gap-2 justify-center"
          >
            <Phone className="w-5 h-5" />
            Reserve Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
