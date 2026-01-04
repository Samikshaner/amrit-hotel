import { motion, useScroll, useTransform } from "framer-motion";
import cinematicVideo from "../assets/cinematic_steaming_indian_dishes.mp4";

export default function Video() {
  const { scrollY } = useScroll();

  // Subtle upward settling as user scrolls
  const y = useTransform(scrollY, [0, 300], [40, 0]);

  return (
    <section className="w-full bg-background overflow-hidden">
      
      {/* VERY SMALL GAP FROM HERO */}
      <div className="h-8 md:h-12" />

      <motion.div
        style={{ y }}
        className="relative w-full max-h-[560px] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={cinematicVideo} type="video/mp4" />
        </video>

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
              Exquisite Tastes, Royal Traditions
            </h2>
            <div className="w-20 h-[2px] bg-gold mx-auto mb-5" />
            <p className="text-white/80 text-lg font-light italic">
              Indulge in the aromatic symphony of authentic Indian spices
            </p>
          </div>
        </div>
      </motion.div>

     
      

    </section>
  );
}
