import { GiAllSeeingEye } from 'react-icons/gi';
import { ShieldCheck, Award, FlaskConical, Leaf } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'X-Ray Certification',
    desc: 'Every bead is X-ray certified, confirming its internal structure matches the external mukhi count — zero artificial carving or tampering.',
    stat: '100%',
    statLabel: 'Beads Certified',
  },
  {
    icon: Award,
    title: 'AAA Quality Standard',
    desc: 'We apply a rigorous 14-point grading system covering bead density, mukhi depth, surface texture, and energetic field strength.',
    stat: '14-pt',
    statLabel: 'Quality Check',
  },
  {
    icon: FlaskConical,
    title: 'Lab Verified',
    desc: 'Independent laboratory verification of species, origin, and structural integrity — provided with every single bead we sell.',
    stat: '3rd Party',
    statLabel: 'Lab Verified',
  },
  {
    icon: Leaf,
    title: 'Nepal Origin',
    desc: 'Direct relationships with Arun Valley growers since 1973. No middlemen, no adulterated stock — traceable to the source.',
    stat: '50yr+',
    statLabel: 'Sourcing Heritage',
  },
];

const galleryImages = [
  {
    src: 'https://as1.ftcdn.net/v2/jpg/09/74/62/96/1000_F_974629665_AOBh7xezMAcwDnDtGIT9Xy4I1JxElMAn.jpg',
    label: 'X-Ray Certification',
  },
  {
    src: 'https://hsj.com.np/uploads/0000/1/2026/01/01/pexels-aidun-10792604.jpg',
    label: 'Arun Valley Origin',
  },
  {
    src: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80',
    label: 'Premium Quality',
  },
];

export function AuthenticityGrid() {
  return (
    <section className="py-14 sm:py-20 md:py-24 border-t border-[#E8D5B0] relative overflow-hidden" style={{ backgroundColor: '#FFF8F0' }}>
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-xl sm:text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.2em] text-gold border border-gold/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block mb-4 sm:mb-6 bg-gold/5">
            Our Promise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gold-gradient mb-3 sm:mb-4 px-2">
            Why Rudrantra
          </h2>
          <p className="text-[#6B5A3E] font-body text-sm sm:text-base md:text-lg px-2">
            Every claim we make is backed by verifiable, third-party evidence. Authenticity is not a marketing word here — it is a legal standard we hold ourselves to.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-14 md:mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-[#E8D5B0] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(201,151,58,0.1)] transition-all duration-500 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold/30 bg-[#FFF8F0] flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors mb-4 sm:mb-5">
                <p.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-display text-base sm:text-lg text-gold mb-2.5 sm:mb-3 leading-tight">{p.title}</h3>
              <p className="font-body text-[#6B5A3E] text-xs sm:text-sm leading-relaxed flex-1 mb-5 sm:mb-6">{p.desc}</p>
              <div className="pt-4 sm:pt-5 border-t border-[#E8D5B0]">
                <span className="font-display text-2xl sm:text-3xl text-gold-bright block">{p.stat}</span>
                <span className="text-[9px] sm:text-[10px] font-heading uppercase tracking-widest text-[#6B5A3E]/50">{p.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {galleryImages.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl border border-[#E8D5B0] group ${i === 1 ? 'md:row-span-1' : ''}`}>
              <div className="aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2400]/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
                  <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-white border border-white/30 bg-[#2D2400]/60 backdrop-blur px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                    {img.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-14 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-[#E8D5B0] rounded-2xl px-6 sm:px-8 md:px-10 py-6 sm:py-8 shadow-[0_4px_20px_rgba(201,151,58,0.08)]">
            <GiAllSeeingEye className="w-8 h-8 sm:w-10 sm:h-10 text-gold shrink-0" />
            <div className="text-center sm:text-left">
              <h4 className="font-display text-lg sm:text-xl text-gold mb-1">Still have doubts?</h4>
              <p className="font-body text-[#6B5A3E] text-xs sm:text-sm">Speak with our certified Vedic consultants before you buy — it's complimentary.</p>
            </div>
            <a href="#" className="shrink-0 px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-gold to-gold-soft text-white font-heading font-bold uppercase tracking-widest text-[11px] sm:text-xs rounded-full hover:shadow-[0_0_20px_rgba(201,151,58,0.4)] transition-all w-full sm:w-auto">
              Book Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
