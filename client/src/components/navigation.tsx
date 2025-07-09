import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'sticky-nav' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="text-burnt-orange text-2xl" />
            <h1 className="text-2xl font-bold font-inter text-white">The Charcoal Diner</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-burnt-orange transition-colors font-dm-sans">Home</a>
            <a href="#menu" className="text-white hover:text-burnt-orange transition-colors font-dm-sans">Menu</a>
            <a href="#about" className="text-white hover:text-burnt-orange transition-colors font-dm-sans">About</a>
            <a href="#contact" className="text-white hover:text-burnt-orange transition-colors font-dm-sans">Contact</a>
            <a 
              href="https://wa.me/918742234567" 
              className="btn-primary text-white px-6 py-2 rounded-full font-dm-sans font-medium inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 2.002c-5.514 0-9.985 4.472-9.985 9.985 0 1.765.459 3.422 1.263 4.853L2.002 22.002l5.177-1.285c1.383.744 2.965 1.166 4.666 1.166 5.514 0 9.985-4.472 9.985-9.985s-4.472-9.985-9.985-9.985zM12.017 20.336c-1.458 0-2.864-.377-4.076-1.096l-.293-.175-3.037.754.764-3.004-.191-.304c-.785-1.25-1.199-2.691-1.199-4.169 0-4.339 3.531-7.87 7.87-7.87s7.87 3.531 7.87 7.87-3.531 7.87-7.87 7.87z"/>
                <path d="M16.735 14.492c-.248-.124-1.469-.725-1.696-.808-.228-.083-.394-.124-.559.124-.165.248-.641.808-.785.975-.145.165-.289.186-.537.062-.248-.124-1.045-.385-1.992-1.229-.736-.657-1.233-1.469-1.378-1.717-.145-.248-.015-.382.109-.506.111-.111.248-.289.372-.434.124-.145.165-.248.248-.414.083-.165.041-.31-.021-.434-.062-.124-.559-1.346-.765-1.844-.2-.484-.404-.418-.559-.426-.145-.007-.31-.009-.476-.009-.165 0-.434.062-.662.31-.228.248-.869.85-.869 2.072 0 1.222.89 2.401 1.014 2.567.124.165 1.752 2.674 4.244 3.751.593.256 1.056.409 1.417.523.595.189 1.135.162 1.563.098.477-.071 1.469-.6 1.675-1.178.207-.578.207-1.074.145-1.178-.062-.103-.228-.165-.476-.289z"/>
              </svg>
              Order Now
            </a>
          </div>
          
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-charcoal">
          <div className="px-6 py-4 space-y-4">
            <a href="#home" className="block text-white hover:text-burnt-orange transition-colors font-dm-sans">Home</a>
            <a href="#menu" className="block text-white hover:text-burnt-orange transition-colors font-dm-sans">Menu</a>
            <a href="#about" className="block text-white hover:text-burnt-orange transition-colors font-dm-sans">About</a>
            <a href="#contact" className="block text-white hover:text-burnt-orange transition-colors font-dm-sans">Contact</a>
            <a 
              href="https://wa.me/918742234567" 
              className="block btn-primary text-white px-6 py-2 rounded-full font-dm-sans font-medium text-center"
            >
              <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 2.002c-5.514 0-9.985 4.472-9.985 9.985 0 1.765.459 3.422 1.263 4.853L2.002 22.002l5.177-1.285c1.383.744 2.965 1.166 4.666 1.166 5.514 0 9.985-4.472 9.985-9.985s-4.472-9.985-9.985-9.985zM12.017 20.336c-1.458 0-2.864-.377-4.076-1.096l-.293-.175-3.037.754.764-3.004-.191-.304c-.785-1.25-1.199-2.691-1.199-4.169 0-4.339 3.531-7.87 7.87-7.87s7.87 3.531 7.87 7.87-3.531 7.87-7.87 7.87z"/>
                <path d="M16.735 14.492c-.248-.124-1.469-.725-1.696-.808-.228-.083-.394-.124-.559.124-.165.248-.641.808-.785.975-.145.165-.289.186-.537.062-.248-.124-1.045-.385-1.992-1.229-.736-.657-1.233-1.469-1.378-1.717-.145-.248-.015-.382.109-.506.111-.111.248-.289.372-.434.124-.145.165-.248.248-.414.083-.165.041-.31-.021-.434-.062-.124-.559-1.346-.765-1.844-.2-.484-.404-.418-.559-.426-.145-.007-.31-.009-.476-.009-.165 0-.434.062-.662.31-.228.248-.869.85-.869 2.072 0 1.222.89 2.401 1.014 2.567.124.165 1.752 2.674 4.244 3.751.593.256 1.056.409 1.417.523.595.189 1.135.162 1.563.098.477-.071 1.469-.6 1.675-1.178.207-.578.207-1.074.145-1.178-.062-.103-.228-.165-.476-.289z"/>
              </svg>
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
