import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


const menuData = [
  {
    left: {
      category: "Signature Starters",
      items: [
        { name: "Samosa Chaat", price: "$14", desc: "Crispy pastry, spiced potatoes, tamarind glaze" },
        { name: "Tandoori Prawns", price: "$22", desc: "Jumbo prawns, mustard oil, carom seeds" },
        { name: "Lamb Seekh Kebab", price: "$18", desc: "Minced lamb, smoked spices, mint chutney" },
        { name: "Paneer Tikka", price: "$16", desc: "Cottage cheese, bell peppers, yogurt marinade" },
        { name: "Chicken 65", price: "$15", desc: "Spicy tempered chicken, curry leaves, chili" },
        { name: "Onion Bhaji", price: "$12", desc: "Crispy onion fritters, chickpea flour, mint dip" },
        { name: "Hara Bhara Kebab", price: "$14", desc: "Spinach patties, ginger, green chili" },
        { name: "Fish Amritsari", price: "$19", desc: "Batter fried fish, carom seeds, lime" }
      ]
    },
    right: {
      category: "Royal Tandoor",
      items: [
        { name: "Murg Malai Tikka", price: "$17", desc: "Creamy chicken skewers, cardamom, cheese" },
        { name: "Vegetable Pakora", price: "$11", desc: "Assorted vegetable fritters, spiced gram flour" },
        { name: "Aloo Tikki", price: "$12", desc: "Spiced potato cakes, chickpeas, yogurt" },
        { name: "Chicken Tikka", price: "$16", desc: "Classic yogurt marinated chicken, clay oven" },
        { name: "Gobi 65", price: "$13", desc: "Crispy cauliflower, ginger, garlic, spices" },
        { name: "Lamb Chops", price: "$24", desc: "Tandoori grilled lamb, garam masala, yogurt" },
        { name: "Seekh Kebab Veg", price: "$14", desc: "Minced vegetables, skewers, aromatic spices" },
        { name: "Chili Paneer", price: "$15", desc: "Indo-Chinese style, bell peppers, soy" }
      ]
    }
  },
  {
    left: {
      category: "Main Curries",
      items: [
        { name: "Butter Chicken", price: "$26", desc: "Tomato cream sauce, fenugreek, tandoori chicken" },
        { name: "Rogan Josh", price: "$28", desc: "Kashmiri lamb curry, fennel, dried ginger" },
        { name: "Dal Makhani", price: "$20", desc: "Black lentils, cream, churned butter" },
        { name: "Palak Paneer", price: "$22", desc: "Spinach puree, cottage cheese, garlic, cumin" },
        { name: "Chicken Biryani", price: "$24", desc: "Basmati rice, saffron, spiced chicken" },
        { name: "Lamb Vindaloo", price: "$27", desc: "Spicy Goan curry, vinegar, roasted garlic" },
        { name: "Paneer Lababdar", price: "$23", desc: "Cottage cheese, onion tomato gravy" },
        { name: "Chicken Tikka Masala", price: "$25", desc: "Grilled chicken, spicy tomato sauce" }
      ]
    },
    right: {
      category: "Traditional Specialties",
      items: [
        { name: "Prawn Malabar", price: "$29", desc: "Coconut based prawn curry, curry leaves" },
        { name: "Baingan Bharta", price: "$19", desc: "Smoked eggplant mash, peas, green chilies" },
        { name: "Vegetable Korma", price: "$21", desc: "Mixed vegetables, cashew nut gravy" },
        { name: "Aloo Gobi", price: "$18", desc: "Cauliflower and potatoes, ginger, turmeric" },
        { name: "Lamb Madras", price: "$27", desc: "Southern spice blend, coconut, curry leaves" },
        { name: "Saag Meat", price: "$28", desc: "Lamb cooked with fresh mustard greens" },
        { name: "Chana Masala", price: "$18", desc: "Chickpeas, tangy tomato-onion sauce" },
        { name: "Jeera Rice", price: "$8", desc: "Cumin tempered aromatic basmati rice" }
      ]
    }
  },
  {
    left: {
      category: "Royal Desserts",
      items: [
        { name: "Gulab Jamun", price: "$10", desc: "Milk dumplings, saffron syrup, cardamom" },
        { name: "Mango Lassi", price: "$8", desc: "Fresh mango pulp, yogurt, honey" },
        { name: "Kulfi", price: "$12", desc: "Traditional Indian ice cream, pistachio, saffron" },
        { name: "Ras Malai", price: "$11", desc: "Soft paneer discs, sweetened milk, saffron" },
        { name: "Gajar Ka Halwa", price: "$12", desc: "Carrot pudding, nuts, condensed milk" },
        { name: "Kheer", price: "$10", desc: "Creamy rice pudding, cardamom, almonds" },
        { name: "Paan Ice Cream", price: "$12", desc: "Betel leaf infused ice cream, rose petals" },
        { name: "Falooda", price: "$13", desc: "Rose syrup, vermicelli, basil seeds, kulfi" }
      ]
    },
    right: {
      category: "House Drinks",
      items: [
        { name: "Masala Chai", price: "$6", desc: "Brewed black tea, milk, aromatic spices" },
        { name: "Fresh Mint Lemonade", price: "$7", desc: "Muddled mint, lime juice, black salt" },
        { name: "Rose Sherbet", price: "$7", desc: "Chilled milk, rose syrup, basil seeds" },
        { name: "Filter Coffee", price: "$6", desc: "Strong South Indian decoction, frothed milk" },
        { name: "Sweet Lassi", price: "$8", desc: "Creamy yogurt drink, rose water, nuts" },
        { name: "Salted Lassi", price: "$8", desc: "Cumin, rock salt, creamy yogurt" },
        { name: "Jal Jeera", price: "$7", desc: "Cumin water, mint, tamarind, black salt" },
        { name: "Mango Shake", price: "$9", desc: "Fresh mango, milk, cream, vanilla" }
      ]
    }
  }
];

export default function MenuPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const flipPage = (direction) => {
    setPageIndex(prev => prev + direction);
  };

  const Page = ({ data, side }) => (
    <div className={`w-1/2 h-full bg-[#111] p-10 md:p-14 flex flex-col relative border-gold/10 ${side === 'left' ? 'border-r' : ''}`}>
      <div className="flex justify-between items-center mb-8 pb-3 border-b border-gold/5">
        <h2 className="font-serif text-2xl text-gold italic">{data.category}</h2>
        <span className="text-white/20 text-[8px] uppercase tracking-widest font-sans">Amrit Palace</span>
      </div>
      <div className="flex-1 space-y-4 overflow-hidden">
        {data.items.map((item, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-serif text-[15px] text-white group-hover:text-gold transition-colors">{item.name}</h3>
              <div className="flex-1 mx-2 border-b border-white/5 border-dashed" />
              <span className="font-sans text-[10px] text-gold/80">{item.price}</span>
            </div>
            <p className="font-sans text-[9px] text-white/30 leading-tight italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 overflow-hidden">
      <Link to="/">
  <button className="absolute top-8 left-8 text-gold/60 hover:text-gold transition-colors font-sans text-[10px] uppercase tracking-[0.4em] z-50 cursor-pointer">
    ← Return to Palace
  </button>
</Link>


      <div className="relative w-full max-w-6xl aspect-[16/9] perspective-2000">
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="cover"
              initial={{ rotateY: 0, scale: 0.9, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              exit={{ rotateY: -90, x: "-25%", opacity: 0, transition: { duration: 0.8 } }}
              onClick={() => setIsOpen(true)}
              className="absolute left-1/4 w-1/2 h-full bg-[#111] shadow-2xl rounded-r-lg cursor-pointer flex flex-col items-center justify-center text-center p-12 border border-gold/20"
            >
              <div className="w-16 h-[1px] bg-gold/30 mb-6" />
              <h1 className="font-serif text-5xl md:text-7xl text-gold uppercase tracking-tighter leading-none mb-4">Amrit<br/>Palace</h1>
              <p className="font-sans text-[9px] text-white/40 uppercase tracking-[0.4em] italic mb-6">The Royal Menu</p>
              <div className="w-16 h-[1px] bg-gold/30" />
              <motion.p animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-16 font-sans text-[8px] text-gold uppercase tracking-[0.2em]">Open Menu</motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="spread"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex bg-[#111] shadow-2xl border border-gold/10 overflow-hidden rounded-sm"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={pageIndex}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex w-full h-full"
                >
                  <Page data={menuData[pageIndex].left} side="left" />
                  <Page data={menuData[pageIndex].right} side="right" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-8 flex justify-center items-center gap-12 z-50">
                <button
                  onClick={() => pageIndex > 0 && flipPage(-1)}
                  className={`text-gold/40 hover:text-gold transition-all flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.2em] ${pageIndex === 0 ? 'opacity-0 cursor-default' : 'cursor-pointer'}`}
                >
                  ← Prev
                </button>
                <div className="flex gap-2">
                  {menuData.map((_, i) => (
                    <div key={i} className={`w-1 h-1 rounded-full transition-all duration-300 ${pageIndex === i ? 'bg-gold w-3' : 'bg-gold/20'}`} />
                  ))}
                </div>
                <button
                  onClick={() => pageIndex < menuData.length - 1 && flipPage(1)}
                  className={`text-gold/40 hover:text-gold transition-all flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.2em] ${pageIndex === menuData.length - 1 ? 'opacity-0 cursor-default' : 'cursor-pointer'}`}
                >
                  Next →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="absolute bottom-8 text-white/10 font-sans text-[8px] uppercase tracking-[0.6em]">Royal Culinary Heritage</div>
    </div>
  );
}