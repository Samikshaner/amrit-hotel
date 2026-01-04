import { motion } from "framer-motion";
import experienceImg from "../assets/experiance.jpg";

export default function Experiance() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Dark Wash */}
      <div className="absolute inset-0">
        <img 
          src={experienceImg} 
          alt="Restaurant Interior" 
          className="h-full w-full object-cover opacity-80"
        />
        {/* Dark wash gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full w-full flex flex-col justify-between p-8 md:p-16 lg:p-24 text-white">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
         <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-[#DCD7CD]">

            Rooted In<br />Experience
          </h2>
        </motion.div>

        {/* Bottom Text Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl self-start"
        >
         <p className="font-sans text-xs md:text-sm lg:text-sm leading-[1.7] opacity-85 text-[#DCD7CD]">

            Since 1996, Amrit Palace has been more than a destination for Indian cuisine. It has been a space for celebration, connection, and tradition reimagined. Each visit is a quiet ritual; the warmth of spice, the hum of conversation, the comfort of something familiar yet elevated. Whether it's your first time or your fiftieth, we believe the best meals are the ones that stay with you long after the last bite.
          </p>
        </motion.div>
      </div>
    </section>
  );
}