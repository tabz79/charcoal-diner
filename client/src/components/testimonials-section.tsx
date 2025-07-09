import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Food Blogger",
      initial: "R",
      rating: 5,
      text: "The Charcoal Chicken Biryani is absolutely divine! The smoky flavor and tender chicken make it the best biryani I've ever tasted. Highly recommend!"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Regular Customer",
      initial: "P",
      rating: 5,
      text: "Amazing ambiance and authentic flavors! The staff is incredibly friendly and the food quality is consistently excellent. Our family's favorite restaurant!"
    },
    {
      id: 3,
      name: "Anil Reddy",
      role: "Business Owner",
      initial: "A",
      rating: 5,
      text: "Best Indian restaurant in Khammam! The charcoal-grilled dishes are exceptional and the service is top-notch. Will definitely visit again!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-inter">
            What Our Customers Say
          </h2>
          <p className="text-lg text-warm-grey max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 fade-in">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-warm-grey mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-warm-grey text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
