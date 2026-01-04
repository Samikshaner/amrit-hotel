import { motion } from "framer-motion";
import buffetImg from "../assets/img2.jpg";
import chefImg from "../assets/img1.jpg";
import puriImg from "../assets/img3.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Catering() {

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#BFB4A3] text-[#2C2420] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeIn}
            className="space-y-2 md:space-y-4"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wider uppercase leading-tight">
              Catering
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full">
              <span className="hidden md:block font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium border-t border-black/20 pt-2 w-32 text-center">
                Exceptional Food
              </span>
              
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wider uppercase leading-tight italic relative px-6">
                <span className="relative z-10">The Amrit Way</span>
              </h2>
              
              <span className="hidden md:block font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium border-t border-black/20 pt-2 w-32 text-center">
                Anywhere
              </span>
            </div>

            {/* Mobile subtext */}
            <div className="flex md:hidden justify-between w-full max-w-xs mx-auto mt-4 px-4">
               <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-medium">Exceptional Food</span>
               <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-medium">Anywhere</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
            className="mt-12 max-w-2xl mx-auto"
          >
            <p className="font-sans text-base md:text-lg leading-relaxed text-center font-light opacity-90">
              Whether you're hosting a wedding, corporate gathering, or private celebration, our catering brings the warmth of Indian hospitality straight to your table. From full-service spreads to curated menus, Amrit Palace delivers flavor, style, and care — wherever the occasion takes you.
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeIn}
            className="flex flex-col group"
          >
            <div className="overflow-hidden mb-8 aspect-[4/5] relative">
              <img 
                src={buffetImg} 
                alt="Buffet Display" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-center">Buffet Displays</h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-center opacity-80 px-4">
              Elegant and abundant buffet setups that showcase our dishes beautifully while making service smooth and efficient.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeIn}
            className="flex flex-col group"
          >
            <div className="overflow-hidden mb-8 aspect-[4/5] relative">
              <img 
                src={chefImg} 
                alt="Professional Chef" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-center">Professional Service Team</h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-center opacity-80 px-4">
              Our experienced staff provides courteous, attentive service so your event runs seamlessly.
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeIn}
            className="flex flex-col group"
          >
            <div className="overflow-hidden mb-8 aspect-[4/5] relative">
              <img 
                src={puriImg} 
                alt="Frying Puri" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-center">Years of Experience</h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-center opacity-80 px-4">
              Decades of catering knowledge and event expertise to ensure a stress-free, memorable experience for you and your guests.
            </p>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}