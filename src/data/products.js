/* Freesia Tone — Product Data (Prototype) */

export const products = [
  {
    id: 'multiway-top',
    name: 'Multiway Top',
    slug: 'multiway-top',
    price: 35000,
    currency: 'RWF',
    description: 'One piece. Multiple possibilities. Our signature top transforms to create five distinct looks — from classic to statement. Hand-cut and made to order in Kigali using premium natural fabrics that hold drape and movement effortlessly.',
    shortDescription: 'Five ways to wear it. One piece to own.',
    category: 'tops',
    collection: 'multiway',
    isMultiway: true,
    isFeatured: true,
    isNew: true,
    heroImage: '/images/look-1.jpg',
    images: [
      '/images/look-1.jpg',
      '/images/look-2.jpg',
      '/images/look-3.jpg',
      '/images/look-4.jpg',
      '/images/look-5.jpg'
    ],
    fabrics: [
      { name: 'Terracotta Silk Sateen', color: '#B23704' },
      { name: 'Natural Sand Linen', color: '#D8CFC2' },
      { name: 'Raw Ivory Cotton', color: '#F4F1EA' },
      { name: 'Deep Espresso Crepe', color: '#2B1914' }
    ],
    sizes: ['XS (UK 6)', 'S (UK 8)', 'M (UK 10-12)', 'L (UK 14)', 'XL (UK 16)', 'Custom Sizing'],
    madeToOrder: true,
    productionTime: '2–3 weeks',
    care: ['Gentle cold wash with mild detergent', 'Lay flat in shade to dry', 'Low-temp steam or reverse iron']
  },
  {
    id: 'freesia-set',
    name: 'Freesia Set',
    slug: 'freesia-set',
    price: 55000,
    currency: 'RWF',
    description: 'A coordinated two-piece set in pure washed sand linen. Features tailored wide-leg trousers and a fluid boatneck shell that moves with you.',
    shortDescription: 'Effortless coordination. Pure linen elegance.',
    category: 'sets',
    collection: 'essentials',
    isMultiway: false,
    isFeatured: true,
    isNew: false,
    heroImage: '/images/freesia-set.jpg',
    images: ['/images/freesia-set.jpg'],
    fabrics: [
      { name: 'Natural Sand Linen', color: '#D8CFC2' },
      { name: 'Terracotta Clay', color: '#B23704' },
      { name: 'Olive Taupe', color: '#8A8567' }
    ],
    sizes: ['XS (UK 6)', 'S (UK 8)', 'M (UK 10-12)', 'L (UK 14)', 'XL (UK 16)', 'Custom Sizing'],
    madeToOrder: true,
    productionTime: '2–3 weeks',
    care: ['Gentle machine wash cold', 'Hang dry in shade', 'Warm iron while slightly damp']
  },
  {
    id: 'slit-pants',
    name: 'Slit Pants',
    slug: 'slit-pants',
    price: 30000,
    currency: 'RWF',
    description: 'High-waisted wide-leg trousers cut with a deep side slit that reveals a subtle glimpse of movement with each stride. Designed to pair with the Multiway Top.',
    shortDescription: 'Movement in every step.',
    category: 'bottoms',
    collection: 'essentials',
    isMultiway: false,
    isFeatured: true,
    isNew: false,
    heroImage: '/images/look-4.jpg',
    images: ['/images/look-4.jpg'],
    fabrics: [
      { name: 'Ivory Linen Weave', color: '#F4F1EA' },
      { name: 'Deep Espresso Linen', color: '#2B1914' }
    ],
    sizes: ['XS (UK 6)', 'S (UK 8)', 'M (UK 10-12)', 'L (UK 14)', 'XL (UK 16)', 'Custom Sizing'],
    madeToOrder: true,
    productionTime: '2–3 weeks',
    care: ['Hand wash or delicate cycle', 'Hang to dry', 'Cool iron']
  },
  {
    id: 'poncho-wrap',
    name: 'Poncho Wrap',
    slug: 'poncho-wrap',
    price: 42000,
    currency: 'RWF',
    description: 'An architectural outerwear piece that doubles as a draped shawl, asymmetric cape, and travelling cocoon wrap.',
    shortDescription: 'Layer, wrap, transform.',
    category: 'outerwear',
    collection: 'outerwear',
    isMultiway: false,
    isFeatured: true,
    isNew: true,
    heroImage: '/images/hero.jpg',
    images: ['/images/hero.jpg'],
    fabrics: [
      { name: 'Terracotta Fine Wool', color: '#B23704' },
      { name: 'Charcoal Blend', color: '#3D2A24' }
    ],
    sizes: ['One Size (Adaptable Drape)', 'Custom Length'],
    madeToOrder: true,
    productionTime: '3–4 weeks',
    care: ['Specialist dry clean or spot wash only', 'Steam to refresh']
  }
];

export const collections = [
  {
    id: 'multiway',
    name: 'Multiway Collection',
    slug: 'multiway',
    description: 'Pieces designed to transform. One garment, multiple possibilities.',
    tagline: 'More ways to be you.',
    image: '/images/look-1.jpg',
    count: 1
  },
  {
    id: 'essentials',
    name: 'The Essentials',
    slug: 'essentials',
    description: 'The foundation of an intentional wardrobe. Clean, versatile, timeless silhouettes.',
    tagline: 'Less, but better.',
    image: '/images/freesia-set.jpg',
    count: 2
  },
  {
    id: 'outerwear',
    name: 'Architectural Layers',
    slug: 'outerwear',
    description: 'Sculptural wraps and ponchos designed for graceful protection and motion.',
    tagline: 'Wrap yourself in intention.',
    image: '/images/hero.jpg',
    count: 1
  }
];

export function formatPrice(price, currency = 'RWF') {
  return `${price.toLocaleString()} ${currency}`;
}
