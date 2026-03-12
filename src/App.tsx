/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Twitter, Facebook, Instagram,  Menu } from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
    <div className="flex flex-col gap-1.5 cursor-pointer group">
      <div className="w-12 h-0.5 bg-white transition-all group-hover:w-8" />
      <div className="w-12 h-0.5 bg-white transition-all group-hover:w-10" />
    </div>

    <div className="flex items-center gap-1">
      <h1 className="text-2xl font-display tracking-tighter uppercase">Kerala Chai</h1>
      <span className="text-[10px] border border-white/30 rounded-full w-4 h-4 flex items-center justify-center -mt-3">©</span>
    </div>

    <div className="flex gap-3">
      {[Twitter, Facebook, Instagram].map((Icon, i) => (
        <motion.a
          key={i}
          href="#"
          whileHover={{ scale: 1.1, backgroundColor: 'white', color: 'black' }}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors"
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  </header>
);

const RotatingBadge = () => {
  const text = "AUTHENTIC KERALA CHAI • FRESH BREW • ";
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full animate-rotate-slow"
        style={{ originX: "50%", originY: "50%" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[8px] font-bold uppercase fill-brand-yellow">
            <textPath href="#circlePath">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shadow-2xl relative z-10">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 mb-1">
            <div className="w-2 h-4 bg-black rounded-full" />
            <div className="w-2 h-4 bg-black rounded-full" />
          </div>
          <div className="w-8 h-4 border-b-4 border-black rounded-full" />
        </div>
      </div>
      {/* Decorative star shape behind */}
      <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-3xl -z-10" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Side Images - positioned under text */}
      <motion.div
        initial={{ x: -200, opacity: 0, rotate: -10 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-150px] md:left-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full overflow-hidden border-8 border-brand-dark shadow-2xl z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1887&auto=format&fit=crop"
          alt="Kerala Tea"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0, rotate: 10 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[-150px] md:right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full overflow-hidden border-8 border-brand-dark shadow-2xl z-10"
      >
        <img
          src="https://cookingfromheart.com/wp-content/uploads/2020/08/Sulaimani-Tea-5.jpg"
          alt="Tea Pouring"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-50 flex flex-col items-center text-center max-w-7xl px-4">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="mb-[-40px] relative z-30"
        >
          <RotatingBadge />
        </motion.div>

        <div className="relative">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[16vw] md:text-[14vw] font-display leading-[0.8] uppercase tracking-tighter mb-6 md:mb-8 bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center"
          >
            Sip The
          </motion.h2>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-[16vw] md:text-[14vw] font-display leading-[0.8] uppercase tracking-tighter"
          >
            Tradition
          </motion.h2>

          {/* Decorative Spice Overlays */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1, y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute top-[10%] left-[5%] text-6xl md:text-8xl pointer-events-none"
          >
            🍃
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1, y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1.2 }}
            className="absolute bottom-[20%] right-[10%] text-6xl md:text-8xl pointer-events-none"
          >
            🫚
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1, x: [0, 10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.4 }}
            className="absolute top-[40%] right-[20%] text-6xl md:text-8xl pointer-events-none"
          >
            🪵
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-8 max-w-2xl">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#FFD200',
              color: 'black',
              borderColor: '#FFD200',
              boxShadow: '0 15px 50px rgba(255, 210, 0, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white font-bold px-10 py-5 rounded-full text-lg shadow-lg transition-all duration-300 whitespace-nowrap border-2 border-white"
          >
            Order Now
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2 }}
            className="text-white text-sm leading-relaxed text-left"
          >
            Experience the authentic taste of Malabar tea, brewed with fresh spices and love from the heart of Kerala's tea plantations.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const BottomNav = ({ active, setActive }: { active: string; setActive: (val: string) => void }) => {
  const items = [
    { name: 'Chai', emoji: '☕' },
    { name: 'Snacks', emoji: '🥨' },
    { name: 'Coffee', emoji: '🥤' },
    { name: 'Juices', emoji: '🍹' },
    { name: 'Sweets', emoji: '🍩' },
  ];

  return (
    <nav className="w-full bg-brand-dark/80 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between px-8">
        {items.map((item, i) => (
          <React.Fragment key={item.name}>
            <button
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 py-6 px-4 transition-all relative group ${active === item.name ? 'text-brand-yellow' : 'text-white/50 hover:text-white'
                }`}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="font-bold uppercase tracking-widest text-xs">{item.name}</span>
              {active === item.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow"
                />
              )}
            </button>
            {i < items.length - 1 && (
              <div className="w-[1px] h-8 bg-white/10 self-center" />
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

const GallerySection = ({ active, setActive }: { active: string; setActive: (val: string) => void }) => {
  const categories = [
    { name: 'Chai', emoji: '☕' },
    { name: 'Snacks', emoji: '🥨' },
    { name: 'Coffee', emoji: '🥤' },
    { name: 'Juices', emoji: '🍹' },
    { name: 'Sweets', emoji: '🍩' },
  ];

  const categoryImages: Record<string, string[]> = {
    'Chai': [
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop",
      "https://www.munatycooking.com/wp-content/uploads/2024/04/Three-glasses-filled-with-karak-chai-500x500.jpg",
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop"
    ],
    'Snacks': [
      "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
      "https://img.freepik.com/free-photo/juicy-delicious-meat-cutlets-dark-table-russian-cuisine_2829-7278.jpg?semt=ais_rp_50_assets&w=740&q=80"
    ],
    'Coffee': [
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
    ],
    'Juices': [
      "https://t4.ftcdn.net/jpg/01/60/44/93/360_F_160449396_E2yxHeN892NeSK41yuNu8ewxgCF3siGw.jpg",
      "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop"
    ],
    'Sweets': [
      "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop"
    ]
  };

  const galleryImages = categoryImages[active] || categoryImages['Chai'];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto mb-20">
      {/* Category Bar */}
      <div className="flex justify-between items-center border-t border-b border-white/10 mb-12 overflow-x-auto scrollbar-hide">
        {categories.map((cat, i) => (
          <React.Fragment key={cat.name}>
            <button
              onClick={() => setActive(cat.name)}
              className={`flex items-center gap-3 py-8 px-6 transition-all relative group whitespace-nowrap flex-shrink-0 ${active === cat.name ? 'text-brand-yellow' : 'text-white/50 hover:text-white'
                }`}
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className={`font-bold uppercase tracking-widest text-sm border-b-2 transition-colors ${active === cat.name ? 'border-brand-yellow' : 'border-transparent group-hover:border-white/20'
                }`}>
                {cat.name}
              </span>
            </button>
            {i < categories.length - 1 && (
              <div className="hidden md:block w-[1px] h-10 bg-white/10" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence mode="wait">
          {galleryImages.map((src, i) => (
            <motion.div
              key={`${active}-${i}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-[4/5] overflow-hidden group cursor-pointer relative"
            >
              <img
                src={src}
                alt={`${active} Gallery`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ComfortFoodSection = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white/60 italic text-lg md:text-xl mb-6 font-serif"
      >
        Your local Malabar Tea Sanctuary
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[8vw] md:text-[7vw] font-display leading-[0.9] uppercase mb-16 tracking-tight"
      >
        The Finest <br /> Malabar Chai <br /> In Munnar
      </motion.h2>

      <div className="relative group max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="aspect-video overflow-hidden rounded-sm shadow-2xl relative"
        >
          <img
            src="https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?q=80&w=2070&auto=format&fit=crop"
            alt="Munnar Tea Plantation"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#ffffff',
            color: 'black',
            boxShadow: '0 15px 50px rgba(255, 210, 0, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-brand-yellow text-black font-bold px-8 py-4 rounded-full flex items-center gap-4 shadow-xl z-30"
        >
          <span className="uppercase text-sm tracking-widest">Watch Video</span>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-black border-b-[5px] border-b-transparent ml-1" />
          </div>
        </motion.button>
      </div>

      <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 text-left">
        <p className="max-w-md text-white/50 text-sm leading-relaxed">
          From the mist-covered hills of Munnar to your cup, we bring you the most authentic tea experience. Every blend is a tribute to Kerala's rich heritage.
        </p>

        <div className="flex flex-wrap gap-12 md:gap-20">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-display text-white tracking-tighter">+50</span>
            <div className="text-[10px] uppercase tracking-widest leading-tight text-white/40">
              Unique <br /> Blends
            </div>
          </div>

          <div className="w-[1px] h-12 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
            <span className="text-5xl font-display text-white tracking-tighter">100%</span>
            <div className="text-[10px] uppercase tracking-widest leading-tight text-white/40">
              Organic <br /> Leaves
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PremiumRestaurantSection = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display uppercase leading-[1.1] max-w-2xl tracking-tight"
        >
          A Traditional <br /> Tea House In The <br /> Heart of Kerala
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Step into a world of tradition where every cup tells a story of the lush green hills and the ancient art of tea making.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#ffffff',
              boxShadow: '0 10px 40px rgba(255, 210, 0, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-yellow text-black font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest shadow-lg"
          >
            Our Menu
          </motion.button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="aspect-[4/3] overflow-hidden rounded-sm group"
        >
          <img
            src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070&auto=format&fit=crop"
            alt="Tea Making"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="aspect-[4/3] overflow-hidden rounded-sm group"
        >
          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
            alt="Kerala Snacks"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const WhereToNextSection = () => {
  return (
    <section className="py-40 px-8 border-t border-b border-white/10 relative overflow-hidden bg-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-[-60px] relative z-20 scale-110 md:scale-125">
          <RotatingBadge />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[14vw] md:text-[12vw] font-display uppercase leading-[0.8] mb-20 tracking-tighter"
        >
          <span className="block mb-4 md:mb-8">Where</span>
          To Next?
        </motion.h2>
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: '#FFD200',
            color: 'black',
            borderColor: '#FFD200',
            boxShadow: '0 15px 50px rgba(255, 210, 0, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent text-white font-bold px-12 py-5 rounded-full text-lg shadow-xl relative z-30 border-2 border-white transition-all duration-300"
        >
          Order Your Chai
        </motion.button>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Location Map"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display uppercase tracking-tight"
          >
            Visit Our <br /> Sanctuary
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-brand-yellow font-bold uppercase tracking-widest text-xs">Address</h3>
              <p className="text-white/80 text-xl">Tea Garden Road, <br /> Munnar, Kerala, India</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-brand-yellow font-bold uppercase tracking-widest text-xs">Hours</h3>
              <p className="text-white/80 text-xl">Mon - Sun: 11:00 AM - 11:00 PM</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-brand-yellow font-bold uppercase tracking-widest text-xs">Contact</h3>
              <p className="text-white/80 text-xl">+1 (234) 567-890</p>
            </div>
          </motion.div>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#FFD200',
              boxShadow: '0 10px 40px rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest self-start"
          >
            Get Directions
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-8 bg-brand-dark pb-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-1">
            <h2 className="text-3xl font-display tracking-tighter uppercase">Kerala Chai</h2>
            <span className="text-[10px] border border-white/30 rounded-full w-4 h-4 flex items-center justify-center -mt-3">©</span>
          </div>
          <p className="text-white/40 text-sm">
            © KERALA CHAI 2023. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold uppercase tracking-widest text-white">Location</h3>
          <p className="text-white/60 leading-relaxed text-lg">
            Tea Garden Road, <br />
            Munnar, Kerala, India
          </p>
          <div className="flex gap-4 mt-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all bg-white/5"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Chai');

  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <ComfortFoodSection />
        <PremiumRestaurantSection />
        <GallerySection active={activeCategory} setActive={setActiveCategory} />
        <LocationSection />
        <WhereToNextSection />
      </main>
      <Footer />
      {/* <BottomNav active={activeCategory} setActive={setActiveCategory} /> */}

      {/* Background grain/noise effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
