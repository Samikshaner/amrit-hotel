import { motion } from "framer-motion";
const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Samosa Chaat", description: "Crispy pastry, spiced potatoes, tamarind yogurt glaze", price: "14" },
      { name: "Tandoori Prawns", description: "Jumbo prawns, mustard oil, carom seeds, clay oven roasted", price: "22" },
      { name: "Lamb Seekh Kebab", description: "Minced lamb, smoked spices, mint chutney", price: "18" },
    ]
  },
  {
    category: "Mains",
    items: [
      { name: "Butter Chicken", description: "Classic tomato cream sauce, fenugreek, tandoori chicken", price: "26" },
      { name: "Rogan Josh", description: "Kashmiri style lamb curry, fennel, dried ginger", price: "28" },
      { name: "Dal Makhani", description: "Slow cooked black lentils, cream, churned butter", price: "20" },
    ]
  }
];
const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-card relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <span className="block font-sans text-xs tracking-widest uppercase text-gold mb-4">Culinary Masterpieces</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Curated Menu</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {menuItems.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="font-serif text-3xl text-gold mb-8 italic border-b border-white/10 pb-4 inline-block pr-12">
                {section.category}
              </h3>
              <div className="space-y-10">
                {section.items.map((item) => (
                  <div key={item.name} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-xl text-white group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="font-sans text-sm text-gold/80">${item.price}</span>
                    </div>
                    <p className="font-sans text-sm text-white/50 font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <button className="inline-block px-10 py-4 border border-gold text-gold font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-300">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};
export default Menu;