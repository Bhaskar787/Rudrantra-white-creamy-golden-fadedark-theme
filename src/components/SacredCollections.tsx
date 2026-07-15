import { GiSpiralArrow } from 'react-icons/gi';

const collections = [
  { name: '1 Mukhi', image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.3' },
  { name: '2 Mukhi', image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg' },
  { name: '5 Mukhi', image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg' },
  { name: '7 Mukhi', image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg' },
  { name: 'Siddha Mala', image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840' },
];

export function SacredCollections() {
  return (
    <section className="py-14 sm:py-20 md:py-24 border-t border-[#E8D5B0]" style={{ backgroundColor: '#FFF8F0' }}>
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-xl sm:text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.2em] text-gold border border-gold/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block mb-4 sm:mb-6 bg-gold/5">
              Shop by Mukhi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gold-gradient">
              Browse Collections
            </h2>
          </div>
          <p className="text-[#6B5A3E] font-body text-sm sm:text-base max-w-md border-l border-gold/30 pl-4">
            Explore our curated selection of authentic Nepali Rudraksha, naturally formed and blessed to support your path.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {collections.map((item, i) => (
            <a key={i} href="#" className="group flex flex-col gap-2.5 sm:gap-3.5 md:gap-5">
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8D5B0] relative shadow-sm group-hover:border-gold/50 group-hover:shadow-[0_8px_30px_rgba(201,151,58,0.12)] group-hover:-translate-y-1.5 transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#2D2400]/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Corner index number */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-gold/40 bg-white/80 backdrop-blur-sm flex items-center justify-center text-gold text-[8px] sm:text-[10px] font-heading font-bold tracking-wide">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Gold hairline that draws in on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-gold to-gold-bright w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
              <span className="font-heading font-semibold text-center text-[11px] sm:text-sm md:text-base text-[#2D2400] group-hover:text-gold transition-colors tracking-wide">
                {item.name}
              </span>
            </a>
          ))}
          
          <a href="#" className="group flex flex-col gap-2.5 sm:gap-3.5 md:gap-5">
            <div className="aspect-square rounded-xl sm:rounded-2xl border border-[#E8D5B0] bg-white flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_8px_30px_rgba(201,151,58,0.12)] group-hover:-translate-y-1.5 relative overflow-hidden">
              <div className="absolute inset-0 bg-mandala opacity-10 pointer-events-none" />
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors relative z-10">
                <GiSpiralArrow className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-display text-sm sm:text-base md:text-lg text-gold group-hover:text-gold-bright transition-colors relative z-10">All Products</span>
            </div>
            <span className="font-heading font-semibold text-center text-transparent text-[11px] sm:text-sm md:text-base">View</span>
          </a>
        </div>
      </div>
    </section>
  );
}
