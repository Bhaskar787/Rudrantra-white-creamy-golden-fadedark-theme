import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    tag: 'Sacred Origin · Nepal',
    heading: 'Beads Blessed\nAt Pashupatinath',
    sub: "Every Rudraksha from the sacred Arun Valley, energized by Vedic pandits at Nepal's most holy Shiva temple before it reaches you.",
    cta: 'Explore Collections',
    href: '#',
    image: 'https://www.travelhimalayan.com/wp-content/uploads/2026/01/Pashupatinath-to-Mount-Kailash-1.webp',
  },
  {
    tag: 'X-Ray Certified · Lab Verified',
    heading: 'Authenticity\nYou Can See',
    sub: 'Every bead ships with a GIA-process X-ray certification and full mukhi count report. Zero guesswork, complete peace of mind.',
    cta: 'See Our Guarantee',
    href: '#',
    image: 'https://as1.ftcdn.net/v2/jpg/09/74/62/96/1000_F_974629665_AOBh7xezMAcwDnDtGIT9Xy4I1JxElMAn.jpg',
  },
  {
    tag: 'Shravan Special — Live Now',
    heading: 'The Siddha Mala\nComplete Set',
    sub: '1 through 14 Mukhi, naturally strung on red silk thread and energized in one sacred ceremony. The rarest offering in our collection.',
    cta: 'Shop Siddha Mala',
    href: '#',
    image: 'https://hsj.com.np/uploads/0000/1/2026/01/01/pexels-aidun-10792604.jpg',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const go = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((index + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  const handlers = useSwipeable({
    onSwipedLeft: () => go(current + 1),
    onSwipedRight: () => go(current - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, go]);

  const slide = slides[current];

  return (
    <section 
      {...handlers} 
      className="relative w-full h-[75vh] sm:h-[80vh] md:h-[85vh] min-h-[480px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden bg-[#F5EAD0] touch-pan-y"
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-90'}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Left-to-right dark wash: dark enough on the left for the golden
          gradient headline to stay legible, fading to nearly clear on the
          right so the photo itself stays properly visible there. Replaces
          the previous pale cream overlay, which washed the image out on
          the left and gave the gold text too little contrast to read. */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F1706]/85 via-[#1F1706]/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className={`max-w-2xl transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold mb-4 sm:mb-6 border-b border-gold pb-1">
            {slide.tag}
          </span>

          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 whitespace-pre-line bg-gradient-to-b from-[#F3D98A] via-[#E8C15A] to-[#C9973A] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            {slide.heading}
          </h1>

          <p className="font-body text-[#F5EAD0] text-sm sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-10 max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            {slide.sub}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href={slide.href}
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-gold text-white font-bold uppercase tracking-widest text-[11px] sm:text-sm hover:bg-gold-bright transition-all shadow-[0_4px_16px_rgba(201,151,58,0.4)]"
            >
              {slide.cta}
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 border border-gold/70 text-[#F5EAD0] font-bold uppercase tracking-widest text-[11px] sm:text-sm hover:bg-white/10 transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows: Hidden on mobile, shown on desktop */}
      <div className="hidden md:block">
        <button
          onClick={() => go(current - 1)}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-gold/60 bg-transparent flex items-center justify-center text-gold hover:border-gold hover:bg-gold/10 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => go(current + 1)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-gold/60 bg-transparent flex items-center justify-center text-gold hover:border-gold hover:bg-gold/10 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators: Hidden on mobile, shown on desktop */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1 transition-all duration-300 ${
              i === current ? 'w-12 bg-gold' : 'w-6 bg-gold/30'
            }`}
          />
        ))}
      </div>

      {/* Mobile dot indicators (added since desktop nav is hidden below md) */}
      <div className="flex md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 z-20 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-gold' : 'w-3 bg-gold/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}