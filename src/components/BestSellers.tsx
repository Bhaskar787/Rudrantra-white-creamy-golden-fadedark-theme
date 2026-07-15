import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice } from '@/lib/utils';
import { Heart, ShoppingBag } from 'lucide-react';
import { GiStarSattelites } from 'react-icons/gi';
import { useMemo, useState } from 'react';

interface Product {
  id: string;
  name: string;
  mukhi: string;
  origin: 'Nepal' | 'Java';
  desc: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  stockLeft?: number;
}

const products: Product[] = [
  {
    id: 'p1',
    name: '5 Mukhi Rudraksha Bracelet',
    mukhi: '5 Mukhi',
    origin: 'Nepal',
    desc: 'An authentic bracelet symbolizing abundance and calm. Lab certified, Nepal origin, silver-capped.',
    price: 9170,
    originalPrice: 11800,
    rating: 4.8,
    reviews: 612,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Bestseller',
    stockLeft: 6,
  },
  {
    id: 'p2',
    name: '7 Mukhi Rudraksha Beads',
    mukhi: '7 Mukhi',
    origin: 'Nepal',
    desc: 'Seven natural lines symbolizing abundance and grace, ruled by Goddess Mahalakshmi.',
    price: 1742.3,
    originalPrice: 2100,
    rating: 4.7,
    reviews: 348,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Natural',
    stockLeft: 14,
  },
  {
    id: 'p3',
    name: '10 Mukhi Rudraksha Beads',
    mukhi: '10 Mukhi',
    origin: 'Nepal',
    desc: 'Contains natural clefts symbolizing Lord Vishnu — ultimate divine protection and stability.',
    price: 5226.9,
    originalPrice: 6500,
    rating: 4.9,
    reviews: 289,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Featured',
    stockLeft: 9,
  },
  {
    id: 'p4',
    name: '2 Mukhi Rudraksha Beads',
    mukhi: '2 Mukhi',
    origin: 'Nepal',
    desc: 'Naturally formed with two clear lines or faces, fostering unity, harmony, and partnership.',
    price: 39431,
    originalPrice: 45000,
    rating: 4.9,
    reviews: 96,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Rare',
    stockLeft: 3,
  },
  {
    id: 'p5',
    name: 'Siddha Mala (1–14 Mukhi)',
    mukhi: 'Combination',
    origin: 'Nepal',
    desc: 'A complete devotional set spanning fourteen mukhi types, energized and strung on red silk thread.',
    price: 24999,
    originalPrice: 29999,
    rating: 5.0,
    reviews: 154,
    image: 'https://images.unsplash.com/photo-1650809652935-2e5002ba40bf?auto=format&fit=crop&w=600&q=80',
    badge: "Collector's Choice",
    stockLeft: 4,
  },
  {
    id: 'p6',
    name: '1 Mukhi Rudraksha Pendant',
    mukhi: '1 Mukhi',
    origin: 'Nepal',
    desc: 'The rarest of all mukhis, representing Lord Shiva himself. Comes with a dedicated silver locket and certificate.',
    price: 128500,
    rating: 5.0,
    reviews: 21,
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.3',
    badge: 'Ultra Rare',
    stockLeft: 1,
  },
  {
    id: 'p7',
    name: '3 Mukhi Rudraksha Mala, 108 Beads',
    mukhi: '3 Mukhi',
    origin: 'Nepal',
    desc: 'A full 108-bead japa mala ruled by Agni, aiding focus, willpower, and the release of past guilt.',
    price: 6850,
    originalPrice: 8200,
    rating: 4.6,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1650809652935-2e5002ba40bf?auto=format&fit=crop&w=600&q=80&crop=focalpoint&fp-x=0.4&fp-y=0.6',
    badge: 'Natural',
    stockLeft: 11,
  },
  {
    id: 'p8',
    name: '6 Mukhi Rudraksha Bracelet',
    mukhi: '6 Mukhi',
    origin: 'Java',
    desc: 'A gentle, affordable entry point ruled by Lord Kartikeya, favoured for confidence and clear communication.',
    price: 3200,
    originalPrice: 4100,
    rating: 4.5,
    reviews: 178,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Entry Level',
    stockLeft: 22,
  },
];

type FilterType = 'All' | 'Nepal' | 'Java' | 'Bestseller' | 'Rare';

const filters: FilterType[] = ['All', 'Nepal', 'Java', 'Bestseller', 'Rare'];

export function BestSellers() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return products;
    if (activeFilter === 'Nepal') return products.filter((p) => p.origin === 'Nepal');
    if (activeFilter === 'Java') return products.filter((p) => p.origin === 'Java');
    if (activeFilter === 'Bestseller') return products.filter((p) => p.badge === 'Bestseller');
    if (activeFilter === 'Rare') return products.filter((p) => p.badge === 'Rare' || p.badge === 'Ultra Rare');
    return products;
  }, [activeFilter]);

  return (
    <section className="py-14 sm:py-20 md:py-24 border-t border-[#E8D5B0]" style={{ backgroundColor: '#FFFAF4' }}>
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-xl sm:text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.2em] text-gold border border-gold/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block mb-4 sm:mb-6 bg-gold/5">
            Most Loved
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gold-gradient mb-3 sm:mb-4 px-2">
            Best Sellers
          </h2>
          <p className="text-[#6B5A3E] font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            The beads chosen most often by seekers worldwide — certified, energized, and trusted.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-heading font-bold uppercase tracking-widest transition-all border ${
                activeFilter === f
                  ? 'bg-gold text-white border-gold shadow-[0_0_15px_rgba(201,151,58,0.3)]'
                  : 'border-[#E8D5B0] text-[#6B5A3E] hover:border-gold hover:text-gold bg-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filtered.map((product) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-white border border-[#E8D5B0] rounded-xl sm:rounded-2xl overflow-hidden hover:border-gold/50 hover:shadow-[0_8px_30px_rgba(201,151,58,0.12)] transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Top-left stack: stock warning + badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col items-start gap-1 sm:gap-1.5 max-w-[70%]">
                    {product.stockLeft !== undefined && product.stockLeft <= 5 && (
                      <div className="bg-crimson text-white text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded shadow">
                        Only {product.stockLeft} left
                      </div>
                    )}
                    {product.badge && (
                      <div className="bg-gold text-white text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded shadow">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Persistent Wishlist Button - always visible, top-right */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                    className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border shadow transition-colors ${
                      inWishlist
                        ? 'bg-crimson border-crimson text-white'
                        : 'bg-white/90 border-[#E8D5B0] text-[#6B5A3E] hover:border-gold hover:text-gold'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${inWishlist ? 'fill-current' : ''}`} />
                  </button>

                  {/* Hover Add to Cart (Desktop) */}
                  <div className="absolute inset-x-0 bottom-0 bg-white/95 border-t border-[#E8D5B0] py-2 sm:py-3 px-3 sm:px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden lg:block">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full py-2 sm:py-2.5 bg-gold text-white text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest rounded hover:bg-gold-bright transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  {/* Origin & Mukhi */}
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className={`text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 rounded ${product.origin === 'Nepal' ? 'bg-gold/15 text-gold' : 'bg-[#E8D5B0]/60 text-[#6B5A3E]'}`}>
                      {product.origin}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-heading font-medium text-[#6B5A3E] tracking-wider">{product.mukhi}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <GiStarSattelites
                        key={i}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-[#E8D5B0]'}`}
                      />
                    ))}
                    <span className="text-[9px] sm:text-[10px] font-heading text-[#6B5A3E] ml-0.5">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <h3 className="font-heading text-xs sm:text-sm md:text-base font-bold text-[#2D2400] mb-1 sm:mb-2 line-clamp-1 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-[#6B5A3E] line-clamp-2 mb-3 sm:mb-4 flex-1">
                    {product.desc}
                  </p>

                  <div className="flex items-baseline gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4 border-t border-[#E8D5B0]">
                    <span className="font-display text-base sm:text-lg md:text-xl font-bold text-[#2D2400]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm font-body text-[#6B5A3E]/60 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Lab Certified Strip */}
                  <div className="mt-3 sm:mt-4 bg-gold/8 border border-gold/20 py-1 sm:py-1.5 px-2 sm:px-3 rounded flex items-center justify-center gap-1.5 sm:gap-2">
                    <img src="https://img.icons8.com/color/48/warranty.png" alt="cert" className="w-3.5 h-3.5 sm:w-4 sm:h-4 sepia opacity-80" />
                    <span className="text-[8px] sm:text-[10px] font-heading font-bold text-gold uppercase tracking-widest">
                      Lab Certified
                    </span>
                  </div>

                  {/* Mobile Add Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2.5 sm:mt-3 w-full py-2.5 sm:py-3 border border-gold text-gold text-[11px] sm:text-xs font-heading font-bold uppercase tracking-widest rounded hover:bg-gold hover:text-white transition-colors lg:hidden"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Sub Anchor Link */}
        <div className="flex justify-center mt-8 sm:mt-12 md:hidden">
          <a
            href="#"
            className="text-gold font-heading font-bold uppercase tracking-widest text-xs border-b border-gold/30 pb-1"
          >
            View All Best Sellers
          </a>
        </div>
      </div>
    </section>
  );
}