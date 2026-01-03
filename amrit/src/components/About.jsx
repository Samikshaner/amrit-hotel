import { motion } from "framer-motion";
import dishImage from "@assets/generated_images/elegant_indian_cuisine_plating_on_dark_background..png";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block font-sans text-xs tracking-widest uppercase text-gold mb-4">Since 1996</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
              A Legacy of <br/><span className="text-gold italic">Authentic Flavors</span>
            </h2>
            <div className="space-y-6 text-white/70 font-sans font-light leading-relaxed">
              <p>
                Founded over two decades ago, Amrit Palace began as a humble tribute to the royal kitchens of Northern India. Our philosophy is simple: honor the traditional methods while embracing modern presentation.
              </p>
              <p>
                Each dish is a masterpiece, crafted with spices hand-picked from the finest markets in India and locally sourced fresh ingredients. We invite you to step into a world where every meal is a celebration of culture, passion, and artistry.
              </p>
            </div>
            
            <div className="mt-12">
              <button className="text-gold font-serif italic text-xl hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                Read our full story 
                <span className="block w-8 h-[1px] bg-gold group-hover:w-12 transition-all duration-300"></span>
              </button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <motion.img 
                src={dishImage} 
                alt="Signature Dish" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 border border-gold/20 m-4 pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-gold rounded-full flex items-center justify-center p-2 hidden md:flex animate-spin-slow">
              <div className="text-black text-center">
                <span className="block font-serif text-2xl font-bold">25+</span>
                <span className="block text-[10px] uppercase tracking-widest font-sans">Years of<br/>Excellence</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}