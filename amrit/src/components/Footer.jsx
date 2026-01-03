const Footer = () => {
  return (
    <footer id="contact" className="bg-card text-white py-20 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 space-y-6">
          <h3 className="font-serif text-2xl text-gold">Amrit Palace</h3>
          <p className="font-sans text-white/60 text-sm leading-relaxed max-w-xs">
            Authentic Indian fine dining experience honoring centuries of culinary tradition.
          </p>
        </div>

        <div className="md:col-span-1 space-y-6">
          <h4 className="font-serif text-lg text-gold/80">Navigation</h4>
          <ul className="space-y-3 font-sans text-sm text-white/60">
            <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-gold transition-colors">Menu</a></li>
            <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="#reservations" className="hover:text-gold transition-colors">Reservations</a></li>
          </ul>
        </div>

        <div className="md:col-span-1 space-y-6">
          <h4 className="font-serif text-lg text-gold/80">Contact</h4>
          <ul className="space-y-3 font-sans text-sm text-white/60">
            <li>123 Culinary Avenue</li>
            <li>New York, NY 10012</li>
            <li className="pt-2">+1 (212) 555-0199</li>
            <li>info@amritpalace.com</li>
          </ul>
        </div>

        <div className="md:col-span-1 space-y-6">
          <h4 className="font-serif text-lg text-gold/80">Opening Hours</h4>
          <ul className="space-y-3 font-sans text-sm text-white/60">
            <li className="flex justify-between"><span>Mon - Thu</span> <span>5pm - 10pm</span></li>
            <li className="flex justify-between"><span>Fri - Sat</span> <span>5pm - 11pm</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>4pm - 9:30pm</span></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-sans tracking-wide">
        <p>&copy; {new Date().getFullYear()} Amrit Palace. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;