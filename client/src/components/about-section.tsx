export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-inter">
              Our Story
            </h2>
            <p className="text-lg text-warm-grey mb-6 leading-relaxed">
              At The Charcoal Diner, we believe in preserving the authentic flavors of Indian cuisine while adding our own modern twist. Our signature charcoal-grilled dishes are prepared using traditional techniques passed down through generations.
            </p>
            <p className="text-lg text-warm-grey mb-8 leading-relaxed">
              Located in the heart of Khammam, we source the finest ingredients and spices to create an unforgettable dining experience that celebrates the rich culinary heritage of India.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-burnt-orange">15+</div>
                <div className="text-warm-grey font-dm-sans">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burnt-orange">50+</div>
                <div className="text-warm-grey font-dm-sans">Signature Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burnt-orange">4.7</div>
                <div className="text-warm-grey font-dm-sans">Rating</div>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Chef preparing tandoori dishes" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
