import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const heroImage = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000";

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.span 
          className="block font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold mb-6"
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Welcome to Amrit Palace
        </motion.span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-light tracking-tight leading-none mb-8">
          Flavours  <br/>
          <span className="italic text-gold">That Stay</span>
        </h1>

        <p className="font-sans text-white/80 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-12 font-light">
          At Amrit Palace, every dish is a tribute to tradition and every moment is crafted for today. 
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#about" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-sans font-medium tracking-widest text-white border border-white/20 hover:border-gold transition-colors duration-300 bg-transparent">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gold group-hover:w-full group-hover:h-full opacity-10"></span>
            <span className="relative text-xs uppercase group-hover:text-gold transition-colors duration-300">Explore Our Story</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest font-sans">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
};

export default Hero;