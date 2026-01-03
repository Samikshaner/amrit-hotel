import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Our Story" },
    { href: "#menu", label: "Menu" },
    { href: "#reservations", label: "Reservations" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md py-4 border-b border-white/5" 
          : "bg-transparent py-8"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
  href="#home"
  className="flex items-center gap-3 z-50 cursor-pointer"
>
  <img
    src={logo}
    alt="Amrit Palace"
    className="h-10 w-auto object-contain"
  />
  <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-gold uppercase">
    Amrit Palace
  </span>
</a>


        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="font-sans text-sm tracking-widest uppercase text-white/80 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#reservations">
            <button className="ml-4 px-6 py-2 border border-gold text-gold font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300">
              Order Now
            </button>
          </a>
        </div>

        <div className="md:hidden text-gold cursor-pointer">
          <span className="font-sans text-xs uppercase tracking-widest">Menu</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;