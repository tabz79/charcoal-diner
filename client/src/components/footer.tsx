import { Flame, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="text-burnt-orange text-2xl" />
              <h3 className="text-xl font-bold font-inter">The Charcoal Diner</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Experience authentic Indian cuisine with our signature charcoal-grilled dishes in the heart of Khammam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-burnt-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-burnt-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-burnt-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918742234567" className="text-gray-400 hover:text-burnt-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 2.002c-5.514 0-9.985 4.472-9.985 9.985 0 1.765.459 3.422 1.263 4.853L2.002 22.002l5.177-1.285c1.383.744 2.965 1.166 4.666 1.166 5.514 0 9.985-4.472 9.985-9.985s-4.472-9.985-9.985-9.985zM12.017 20.336c-1.458 0-2.864-.377-4.076-1.096l-.293-.175-3.037.754.764-3.004-.191-.304c-.785-1.25-1.199-2.691-1.199-4.169 0-4.339 3.531-7.87 7.87-7.87s7.87 3.531 7.87 7.87-3.531 7.87-7.87 7.87z"/>
                  <path d="M16.735 14.492c-.248-.124-1.469-.725-1.696-.808-.228-.083-.394-.124-.559.124-.165.248-.641.808-.785.975-.145.165-.289.186-.537.062-.248-.124-1.045-.385-1.992-1.229-.736-.657-1.233-1.469-1.378-1.717-.145-.248-.015-.382.109-.506.111-.111.248-.289.372-.434.124-.145.165-.248.248-.414.083-.165.041-.31-.021-.434-.062-.124-.559-1.346-.765-1.844-.2-.484-.404-.418-.559-.426-.145-.007-.31-.009-.476-.009-.165 0-.434.062-.662.31-.228.248-.869.85-.869 2.072 0 1.222.89 2.401 1.014 2.567.124.165 1.752 2.674 4.244 3.751.593.256 1.056.409 1.417.523.595.189 1.135.162 1.563.098.477-.071 1.469-.6 1.675-1.178.207-.578.207-1.074.145-1.178-.062-.103-.228-.165-.476-.289z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-burnt-orange transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-burnt-orange transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-burnt-orange transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-burnt-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Dine-in</li>
              <li>Takeaway</li>
              <li>Home Delivery</li>
              <li>Catering</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Station Road, Wyra</p>
              <p>Khammam, Telangana 507165</p>
              <p>Phone: +91-8742-234567</p>
              <p>Email: info@charcoaldiner.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Charcoal Diner. All rights reserved. | Made with ❤️ in Khammam</p>
        </div>
      </div>
    </footer>
  );
}
