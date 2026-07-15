import { GiFlame, GiMeditation, GiYinYang, GiLotusFlower } from 'react-icons/gi';
import { ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: GiYinYang,
    title: "Healing & Wellness",
    desc: "Ancient texts and modern seekers alike report increased vitality, reduced stress, and stabilized energy levels when wearing authentic beads.",
  },
  {
    icon: GiFlame,
    title: "Protection & Blessing",
    desc: "Create a spiritual armor against negative energies. Each mukhi offers distinct protective qualities for the wearer's journey.",
  },
  {
    icon: GiMeditation,
    title: "Meditation & Prayer",
    desc: "Deepen your sadhana. A genuine rudraksha mala serves as a powerful anchor, magnifying the resonance of your mantras.",
  },
  {
    icon: GiLotusFlower,
    title: "Spiritual Growth",
    desc: "Align with higher frequencies. Wearing these sacred seeds facilitates intuition, clarity, and connection to divine consciousness.",
  }
];

export function WhyChoose() {
  return (
    <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Pashupatinath Background Overlay — opacity raised so the photo
          actually reads, since the previous cream overlay flattened it */}
      <div 
        className="absolute inset-0 opacity-[0.85] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/069/690/059/large_2x/serene-monk-meditating-in-mountain-cave-illuminated-by-golden-rays-of-setting-sun-surrounded-by-lush-greenery-and-majestic-mountains-evokes-sense-of-peace-and-tranquility-free-photo.jpeg")' }}
      />
      {/* Dark at the top where the heading and intro copy sit directly on the
          photo (dark brown text needs a dark backdrop, not a pale cream one),
          fading through to a lighter cream lower down so it blends into the
          feature cards' own white background instead of covering the image
          everywhere. */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1706]/75 via-[#1F1706]/25 to-[#F5EDD8]/70" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xl sm:text-2xl md:text-3xl text-gold">ॐ</span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold-gradient mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Spiritual Tools for Your Journey
          </h2>
          <p className="text-[#F5EAD0] font-body text-sm sm:text-lg md:text-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
            Beyond beautiful adornments, these are spiritual tools. Discover how authentic Rudraksha can transform your daily experience and inner life.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {reasons.map((item, i) => (
            <div 
              key={i} 
              className="bg-white/85 backdrop-blur p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-t border-gold/30 hover:border-gold hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(201,151,58,0.2)] group flex flex-col relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-gold/30 bg-[#FFF8F0] flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500 mb-5 sm:mb-6 md:mb-8 mx-auto lg:mx-0">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              
              <h3 className="font-display text-base sm:text-lg text-gold mb-3 sm:mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-[#3D2B1F] font-body text-xs sm:text-sm leading-relaxed flex-1 mb-5 sm:mb-6">
                {item.desc}
              </p>
              
              <a href="#" className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-gold border-b border-gold/30 pb-0.5 inline-flex items-center gap-1.5 w-fit group-hover:gap-2.5 transition-all">
                Explore <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}