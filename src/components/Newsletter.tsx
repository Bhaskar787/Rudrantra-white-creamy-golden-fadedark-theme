import { useState } from 'react';
import { GiByzantinTemple, GiFlame, GiMoon, GiBookCover } from 'react-icons/gi';

const offerings = [
  {
    icon: GiByzantinTemple,
    title: 'Rare Bead Arrivals',
    desc: 'First access to naturally-formed, high-mukhi and collector-grade beads sourced from Nepal, before they reach our shelves.',
  },
  {
    icon: GiMoon,
    title: 'Panchang & Muhurta Alerts',
    desc: 'Auspicious tithis for energization, mala-wearing, and abhishekam — timed to the lunar calendar and Vedic panchang.',
  },
  {
    icon: GiBookCover,
    title: 'Wisdom from Our Scholars',
    desc: 'Short teachings on mantra, mukhi significance, and the Shiva Purana, shared by our resident Vedic pandits.',
  },
];

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#FAF3E8' }}>
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-xl sm:text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>

      {/* Himalayan misty peaks background */}
      <div 
        className="absolute inset-0 opacity-[0.7] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1920&q=80")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF3E8]/60 via-[#FAF3E8]/20 to-[#FAF3E8]/45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/90 backdrop-blur border border-[#E8D5B0] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative">
          
          {/* Giant decorative OM watermark */}
          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 text-[160px] sm:text-[220px] md:text-[300px] text-gold/5 font-serif select-none pointer-events-none leading-none">
            ॐ
          </div>

          {/* Left/Top Content & Form Area */}
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-between relative z-10 border-r border-[#E8D5B0]">
            <div>
              <span className="flex items-center gap-2 text-[9px] sm:text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-gold mb-4 sm:mb-6">
                <span className="w-6 sm:w-8 h-px bg-gold"></span>
                Parivar · Our Sacred Circle
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gold-gradient tracking-tight leading-tight mb-4 sm:mb-6">
                Join Our Spiritual Circle
              </h2>
              <p className="text-[#6B5A3E] font-body text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8 sm:mb-12">
                Receive updates on rare bead arrivals, auspicious days for energization, and exclusive insights from
                our Vedic scholars — a quiet correspondence rooted in tradition, sent only when it truly matters.
              </p>

              {/* Dynamic Subscription State Area */}
              {submitted ? (
                <div className="bg-gold/10 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gold/30 max-w-md animate-in zoom-in duration-500">
                  <GiFlame className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-3 sm:mb-4" />
                  <h3 className="font-display text-lg sm:text-xl text-gold mb-2">Welcome to the Circle</h3>
                  <p className="font-body text-[#6B5A3E] text-xs sm:text-sm leading-relaxed">
                    You are now part of Rudrantra's Parivar. Sacred correspondence will arrive at your doorstep, only when it truly matters.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 max-w-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 bg-[#FFF8F0] border border-[#E8D5B0] rounded-full text-xs sm:text-sm font-body text-[#2D2400] placeholder:text-[#6B5A3E]/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 bg-[#FFF8F0] border border-[#E8D5B0] rounded-full text-xs sm:text-sm font-body text-[#2D2400] placeholder:text-[#6B5A3E]/50 focus:outline-none focus:border-gold transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-5 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-gold to-gold-soft text-white font-heading font-bold uppercase tracking-widest text-[10px] sm:text-xs rounded-full hover:shadow-[0_0_20px_rgba(201,151,58,0.4)] transition-all shrink-0 whitespace-nowrap"
                    >
                      Join Now
                    </button>
                  </div>
                  <p className="text-[10px] sm:text-xs font-body text-[#6B5A3E]/60 px-1">
                    Sacred correspondence only. No spam, ever. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right: Offerings */}
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 lg:col-span-5 flex flex-col gap-6 sm:gap-8 relative z-10">
            <span className="text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#6B5A3E]">
              What you'll receive
            </span>
            <div className="flex flex-col gap-5 sm:gap-7">
              {offerings.map((o, i) => (
                <div key={i} className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold/30 bg-[#FFF8F0] flex items-center justify-center text-gold shrink-0">
                    <o.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#2D2400] mb-1 tracking-wide">{o.title}</h4>
                    <p className="font-body text-xs sm:text-sm text-[#6B5A3E] leading-relaxed">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
