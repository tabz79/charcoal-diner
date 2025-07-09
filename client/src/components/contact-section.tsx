import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">Visit Us Today</h2>
            <p className="text-gray-300 text-lg mb-8">
              Experience the authentic flavors of India at The Charcoal Diner. We're located in the heart of Khammam, ready to serve you the finest Indian cuisine.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="text-burnt-orange text-xl mr-4" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-300">123 Station Road, Wyra, Khammam, Telangana 507165</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-burnt-orange text-xl mr-4" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+918742234567" className="text-gray-300 hover:text-burnt-orange transition-colors">
                    +91-8742-234567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-burnt-orange text-xl mr-4" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:info@charcoaldiner.com" className="text-gray-300 hover:text-burnt-orange transition-colors">
                    info@charcoaldiner.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="text-burnt-orange text-xl mr-4" />
                <div>
                  <div className="font-semibold">Opening Hours</div>
                  <div className="text-gray-300">Daily: 11:00 AM - 11:00 PM</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <a 
                href="https://wa.me/918742234567" 
                className="block btn-primary text-white px-6 py-3 rounded-full font-dm-sans font-medium text-center"
              >
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 2.002c-5.514 0-9.985 4.472-9.985 9.985 0 1.765.459 3.422 1.263 4.853L2.002 22.002l5.177-1.285c1.383.744 2.965 1.166 4.666 1.166 5.514 0 9.985-4.472 9.985-9.985s-4.472-9.985-9.985-9.985zM12.017 20.336c-1.458 0-2.864-.377-4.076-1.096l-.293-.175-3.037.754.764-3.004-.191-.304c-.785-1.25-1.199-2.691-1.199-4.169 0-4.339 3.531-7.87 7.87-7.87s7.87 3.531 7.87 7.87-3.531 7.87-7.87 7.87z"/>
                  <path d="M16.735 14.492c-.248-.124-1.469-.725-1.696-.808-.228-.083-.394-.124-.559.124-.165.248-.641.808-.785.975-.145.165-.289.186-.537.062-.248-.124-1.045-.385-1.992-1.229-.736-.657-1.233-1.469-1.378-1.717-.145-.248-.015-.382.109-.506.111-.111.248-.289.372-.434.124-.145.165-.248.248-.414.083-.165.041-.31-.021-.434-.062-.124-.559-1.346-.765-1.844-.2-.484-.404-.418-.559-.426-.145-.007-.31-.009-.476-.009-.165 0-.434.062-.662.31-.228.248-.869.85-.869 2.072 0 1.222.89 2.401 1.014 2.567.124.165 1.752 2.674 4.244 3.751.593.256 1.056.409 1.417.523.595.189 1.135.162 1.563.098.477-.071 1.469-.6 1.675-1.178.207-.578.207-1.074.145-1.178-.062-.103-.228-.165-.476-.289z"/>
                </svg>
                Order on WhatsApp
              </a>
              <a 
                href="tel:+918742234567" 
                className="block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-dm-sans font-medium text-center hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call for Reservations
              </a>
            </div>
          </div>
          
          <div className="fade-in">
            <div className="bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.234567890123!2d80.15!3d17.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE1JzAwLjAiTiA4MMKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1632123456789!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{border: 0, borderRadius: '12px'}}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
