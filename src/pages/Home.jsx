import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import Menu from "../components/Menu";
import Catering from "../components/Catering";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer";
import Drinks from "../components/Drinks";
import Experiance from "../components/Experiance";
import { motion } from "framer-motion";

const dishImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <div className="grain-overlay" />

      <Navbar />

      <main>
        <Hero />
        <VideoSection />

        {/* ABOUT */}
        <section id="about" className="relative py-24 md:py-40 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="block font-sans text-xs tracking-widest uppercase text-gold mb-4">
                  Since 1996
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                  A Legacy of <br />
                  <span className="text-gold italic">Authentic Flavors</span>
                </h2>
                <p className="text-white/70 font-sans font-light">
                  Founded over two decades ago, Amrit Palace began as a humble tribute to the royal kitchens of Northern India.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={dishImage} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Menu />
        <Catering />
        <Drinks />
        <Experiance />

        {/* RESERVATION */}
        <section
          id="reservations"
          className="py-24 text-black text-center"
          style={{ backgroundColor: "#D4AF6A" }}
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            Experience the Royal Feast
          </h2>
          <button className="px-8 py-3 bg-black text-[#f5e6b0] uppercase">
            Make a Reservation
          </button>
        </section>
      </main>

      <Feedback />
      <Footer />
    </div>
  );
}
