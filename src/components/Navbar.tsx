import { useUI } from '@/context/UIContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Menu, Search, Heart, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';

export function Navbar() {
  const { setIsMenuOpen, setIsSearchOpen } = useUI();
  const { setIsCartOpen, cartCount } = useCart();
  const { setIsWishlistOpen, wishlistCount } = useWishlist();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="relative py-2 text-[11px] sm:text-xs md:text-sm font-heading font-medium text-[#2D2400] hover:text-gold transition-colors group whitespace-nowrap shrink-0">
      {children}
      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(201,151,58,0.08)] border-[#E8D5B0]' : 'bg-white border-[#E8D5B0]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex items-center justify-between h-16 sm:h-20 gap-2">

        {/* LEFT */}
        <div className="flex items-center gap-1.5 sm:gap-4 shrink-0 min-w-0">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-1.5 sm:p-2 -ml-1 sm:-ml-2 text-gold hover:text-gold-bright transition-colors focus:outline-none shrink-0"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 group min-w-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-gold overflow-hidden flex items-center justify-center p-1 relative shrink-0">
              <div className="absolute inset-0 bg-gold/10 rounded-full animate-sacred-glow"></div>
              <img
                src="https://res.cloudinary.com/deiusxdk9/image/upload/v1771952737/rudrantra/cms/rswcale9xcfa697s2kvw.png"
                alt="Rudrantra Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-display text-[17px] sm:text-lg md:text-2xl font-bold tracking-widest text-gold text-gold-gradient whitespace-nowrap truncate">
              Rudrantra
            </span>
          </Link>
        </div>

        {/* CENTER (Desktop Only) */}
        <nav className="hidden xl:flex items-center justify-center gap-4 2xl:gap-6 flex-1 min-w-0 px-4">
          <NavLink href="/">Home</NavLink>

          <div className="relative group cursor-pointer py-2 shrink-0">
            <span className="text-sm font-heading font-medium text-[#2D2400] group-hover:text-gold transition-colors flex items-center gap-1 whitespace-nowrap">
              Rudraksha
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white border border-[#E8D5B0] shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-xl p-2 w-56 flex flex-col gap-1 relative overflow-hidden">
                {['Single Beads', 'Rudraksha Bracelets', 'Japa Mala', 'Combination & Kawach', 'Siddha Mala'].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="px-4 py-2.5 text-sm font-heading text-[#2D2400] hover:text-gold hover:bg-[#FFF8F0] rounded-lg transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink href="#">Siddha Mala</NavLink>
          <NavLink href="#">Consultation</NavLink>
          <Link href="#" className="text-sm font-heading font-medium text-[#2D2400] hover:text-gold transition-colors py-2 flex items-center gap-2 shrink-0 whitespace-nowrap">
            Shravan
            <span className="text-[9px] tracking-widest uppercase bg-crimson text-white px-1.5 py-0.5 rounded-full font-bold shadow-[0_0_8px_rgba(139,26,26,0.5)]">Event</span>
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-1 sm:gap-2 md:gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-1 text-[10px] sm:text-xs font-heading font-medium text-gold shrink-0">
            <span>₹</span>
            <select className="bg-transparent border-none focus:outline-none cursor-pointer appearance-none text-gold hover:text-gold-bright pr-3">
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>

          <button onClick={() => setIsSearchOpen(true)} className="p-1.5 sm:p-2 text-[#2D2400] hover:text-gold transition-colors rounded-full hover:bg-[#FFF0DC] shrink-0">
            <Search className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </button>

          <button className="hidden sm:block p-1.5 sm:p-2 text-[#2D2400] hover:text-gold transition-colors rounded-full hover:bg-[#FFF0DC] shrink-0">
            <User className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </button>

          <button onClick={() => setIsWishlistOpen(true)} className="p-1.5 sm:p-2 text-[#2D2400] hover:text-gold transition-colors relative rounded-full hover:bg-[#FFF0DC] shrink-0">
            <Heart className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-crimson text-white text-[8px] sm:text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                {wishlistCount}
              </span>
            )}
          </button>

          <button onClick={() => setIsCartOpen(true)} className="p-1.5 sm:p-2 text-[#2D2400] hover:text-gold transition-colors relative rounded-full hover:bg-[#FFF0DC] shrink-0">
            <ShoppingBag className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gold text-white text-[8px] sm:text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
