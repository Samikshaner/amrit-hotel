import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import drink1 from "../assets/drink1.jpg";
import drink2 from "../assets/drink2.jpg";
import drink3 from "../assets/drink3.jpg";

const drinks = [
  {
    name: "Tamarind Margarita",
    price: "$11.99",
    description: "Tamarind with our signature in-house mix for a distinct take on the classic margarita. Pro-tip: make it spicy!"
  },
  {
    name: "Tipsy Lassi",
    price: "$10.99",
    description: "Our renowned signature mango lassi with a boozy rum kick."
  },
  {
    name: "Lychee-Tini",
    price: "$10.99",
    description: "Fresh lychees and vodka; shaken not stirred."
  },
  {
    name: "Ginger Peach Soda",
    price: "$5.99",
    description: "A bright fusion of spicy ginger and juicy peach — refreshing, smooth, and perfectly balanced for any moment."
  },
  {
    name: "Smoked Old Fashioned",
    price: "$13.99",
    description: "The classic cocktail smoked to excellence."
  },
  {
    name: "Mint Cucumber Fizz",
    price: "$5.99",
    description: "Cool cucumber meets crisp mint in this sparkling blend that feels like pure, chilled freshness in a glass."
  }
];

const drinkImages = [drink1, drink2, drink3];

export default function Drinks() {

  const containerRef = useRef(null);
  
  // Track the scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map the scroll progress (0 to 1) to the vertical position of the image strip
  // Since there are 3 images, we move the strip up by 66.66% to reveal the 3rd image
  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* 
          Sticky Section: This stays pinned to the screen for 300vh.
          The height is 'h-screen' so it fills exactly one viewport.
      */}
      <section className="sticky top-0 flex flex-col md:flex-row h-screen bg-[#D8CDBB] text-[#2C2420] overflow-hidden">
        
        {/* Left Content - Menu items */}
        <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-14 h-full flex flex-col justify-center overflow-hidden">
          <div className="max-w-xl flex flex-col">
            <div className="mb-4 lg:mb-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl tracking-tight uppercase leading-[0.85] mb-3 lg:mb-4">
                Drinks That<br />Complete<br />The Experience
              </h2>
              <p className="font-sans text-xs md:text-sm lg:text-base mb-4 lg:mb-6 opacity-90 max-w-md leading-relaxed">
                From house-special cocktails to traditional Indian lassi, every drink is designed to pair perfectly with your meal.
              </p>
              
              <button className="border border-black px-5 py-1.5 md:px-6 md:py-2 uppercase tracking-widest text-[10px] md:text-xs hover:bg-black hover:text-[#DCD7CD] transition-colors duration-300">
                Open Menu
              </button>
            </div>

            <div className="space-y-2 lg:space-y-3">
              {drinks.map((drink, idx) => (
                <div key={idx} className="border-b border-black/20 pb-1.5 lg:pb-2">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-serif text-sm md:text-base lg:text-lg">{drink.name}</h3>
                    <span className="font-sans text-[10px] md:text-xs font-medium">{drink.price}</span>
                  </div>
                  <p className="font-sans text-[9px] md:text-[10px] lg:text-xs opacity-80 leading-tight">
                    {drink.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Images that move as you scroll the page */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden">
          <motion.div 
            style={{ y: yTranslate }}
            className="flex flex-col h-[300%] w-full"
          >
            {drinkImages.map((img, idx) => (
              <div key={idx} className="h-1/3 w-full shrink-0">
                <img 
                  src={img} 
                  alt={`Signature Drink ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}