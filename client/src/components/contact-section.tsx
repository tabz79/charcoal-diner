import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-charcoal text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
              Visit Us Today
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience the bold, smoky flavors of India at{" "}
              <strong className="text-foreground">The Charcoal Diner</strong> —
              located in the heart of Khammam, right beside Reliance Smart.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="text-burnt-orange w-5 h-5 mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Address</div>
                  <p className="text-muted-foreground">
                    Revathi Centre, Nehru Nagar<br />
                    Landmark: Reliance Smart<br />
                    Khammam – 507001, Telangana
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="text-burnt-orange w-5 h-5 mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <a
                    href="tel:+917569031298"
                    className="text-muted-foreground hover:text-burnt-orange transition-colors"
                  >
                    +91 75690 31298
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="text-burnt-orange w-5 h-5 mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a
                    href="mailto:charcoal.dinerr@gmail.com"
                    className="text-muted-foreground hover:text-burnt-orange transition-colors"
                  >
                    charcoal.dinerr@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <Clock className="text-burnt-orange w-5 h-5 mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Opening Hours</div>
                  <p className="text-muted-foreground">
                    Daily: 10:00 AM – 11:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917569031298"
                className="block bg-burnt-orange text-charcoal px-6 py-3 rounded-full font-dm-sans font-medium text-center hover:bg-orange-400 transition-colors"
              >
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 2.002c-5.514 0-9.985 4.472-9.985 9.985 0 1.765.459 3.422 1.263 4.853L2.002 22.002l5.177-1.285c1.383.744 2.965 1.166 4.666 1.166 5.514 0 9.985-4.472 9.985-9.985s-4.472-9.985-9.985-9.985zM12.017 20.336c-1.458 0-2.864-.377-4.076-1.096l-.293-.175-3.037.754.764-3.004-.191-.304c-.785-1.25-1.199-2.691-1.199-4.169 0-4.339 3.531-7.87 7.87-7.87s7.87 3.531 7.87 7.87-3.531 7.87-7.87 7.87z"/>
                  <path d="M16.735 14.492c-.248-.124-1.469-.725-1.696-.808-.228-.083-.394-.124-.559.124-.165.248-.641.808-.785.975-.145.165-.289.186-.537.062-.248-.124-1.045-.385-1.992-1.229-.736-.657-1.233-1.469-1.378-1.717-.145-.248-.015-.382.109-.506.111-.111.248-.289.372-.434.124-.145.165-.248.248-.414.083-.165.041-.31-.021-.434-.062-.124-.559-1.346-.765-1.844-.2-.484-.404-.418-.559-.426-.145-.007-.31-.009-.476-.009-.165 0-.434.062-.662.31-.228.248-.869.85-.869 2.072 0 1.222.89 2.401 1.014 2.567.124.165 1.752 2.674 4.244 3.751.593.256 1.056.409 1.417.523.595.189 1.135.162 1.563.098.477-.071 1.469-.6 1.675-1.178.207-.578.207-1.074.145-1.178-.062-.103-.228-.165-.476-.289z"/>
                </svg>
                Order on WhatsApp
              </a>

              {/* Call */}
              <a
                href="tel:+917569031298"
                className="block border-2 border-foreground text-foreground px-6 py-3 rounded-full font-dm-sans font-medium text-center hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call for Reservations
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in">
            <div className="bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=revathi+centre+khammam&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "12px" }}
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
