import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Menu from "./components/Menu";
import Catering from "./components/Catering";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer";
import Drinks from "./components/Drinks";
import Experiance from "./components/Experiance";

import { motion } from "framer-motion";

const dishImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"; 

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        
        <VideoSection/>
        
        <section id="about" className="relative py-24 md:py-40 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="block font-sans text-xs tracking-widest uppercase text-gold mb-4">Since 1996</span>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                  A Legacy of <br/><span className="text-gold italic">Authentic Flavors</span>
                </h2>
                <div className="space-y-6 text-white/70 font-sans font-light leading-relaxed">
                  <p>Founded over two decades ago, Amrit Palace began as a humble tribute to the royal kitchens of Northern India. Our philosophy is simple: honor the traditional methods while embracing modern presentation.</p>
                </div>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={dishImage} alt="Signature Dish" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Menu />

        <Catering/>
        <Drinks/>
        <Experiance/>
       
        
        <section id="reservations" className="py-24 bg-gold text-black text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Experience the Royal Feast</h2>
            <button className="px-8 py-3 bg-black text-gold font-sans text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              Make a Reservation
            </button>
          </div>
        </section>
      </main>
       <Feedback />
      <Footer />
    </div>
  );
}

export default App;
