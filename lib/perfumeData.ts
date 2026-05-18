export interface PerfumeAccord {
  name: string;
  strength: number; // 0-100
  color: string; // hex
}

export interface Perfume {
  name: string;
  slug: string;
  brand: string;
  year: number;
  gender: 'men' | 'women' | 'unisex';
  description: string;
  bottleImage: string; // unsplash URL
  concentration: 'EDP' | 'EDT' | 'Parfum' | 'EDC';
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  mainAccord: string;
  accords: PerfumeAccord[];
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  longevity: number; // 1-5
  sillage: number; // 1-5
  versatility: number; // 1-5
  seasons: ('spring' | 'summer' | 'fall' | 'winter')[];
  timeOfDay: ('day' | 'night')[];
  tags: string[];
  similarFragrances: string[]; // slugs of other perfumes
}

// Accord colors
const ACCORD_COLORS: Record<string, string> = {
  Woody: '#8B6F47',
  Citrus: '#F5A623',
  Floral: '#E8A0BF',
  Aromatic: '#7B9E87',
  Musky: '#C4A882',
  'Amber/Warm': '#C9843C',
  Fresh: '#7EC8C8',
  Spicy: '#C24B2A',
  Sweet: '#D4899A',
  Powdery: '#C8A8C8',
  Smoky: '#8B8B8B',
  Fruity: '#E8733A',
  Green: '#6B9E5E',
  Leather: '#8B5E3C',
  Oud: '#5C3317',
  Vanilla: '#D4A853',
};

// Unique Unsplash bottle images — one per perfume
const BOTTLE_IMAGES = [
  'https://images.unsplash.com/photo-1590736969596-0c88d2a7a80f?w=400', // Aventus
  'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400',   // Baccarat Rouge
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400', // Sauvage
  'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400', // Chanel No.5
  'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400', // Black Orchid
  'https://images.unsplash.com/photo-1563170351-be54751b0f18?w=400',   // Santal 33
  'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?w=400', // Black Opium
  'https://images.unsplash.com/photo-1588514912908-c0d9de2c2a26?w=400', // Beach Walk
  'https://images.unsplash.com/photo-1557053964-937650b63311?w=400',   // Oud Al Layl
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400', // Layton
  'https://images.unsplash.com/photo-1592945403252-ca22ba89b1a3?w=400', // Wood Sage
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400', // Colonia
  'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=400', // Oud for Greatness
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400', // Flowerbomb
  'https://images.unsplash.com/photo-1603903631918-a50a0d854e3e?w=400', // Interlude Man
];

export const PERFUMES: Perfume[] = [
  {
    name: 'Aventus',
    slug: 'creed-aventus',
    brand: 'Creed',
    year: 2010,
    gender: 'men',
    description:
      'Aventus is a celebration of strength, power, and success. Inspired by the life of Napoleon Bonaparte, this bold fragrance opens with a burst of smoky, tart pineapple before revealing a heart of birch, jasmine, and rose. The dry-down settles into a smoky oakmoss and ambergris base that is unmistakably Creed. It has become the best-selling niche fragrance of the modern era and the most cloned scent on earth — a testament to its enduring mastery.',
    bottleImage: BOTTLE_IMAGES[0],
    concentration: 'EDP',
    priceRange: '$$$',
    mainAccord: 'Fruity',
    accords: [
      { name: 'Fruity', strength: 78, color: ACCORD_COLORS.Fruity },
      { name: 'Smoky', strength: 65, color: ACCORD_COLORS.Smoky },
      { name: 'Woody', strength: 60, color: ACCORD_COLORS.Woody },
      { name: 'Musky', strength: 45, color: ACCORD_COLORS.Musky },
      { name: 'Floral', strength: 30, color: ACCORD_COLORS.Floral },
    ],
    notes: {
      top: ['Pineapple', 'Bergamot', 'Black Currant', 'Apple'],
      heart: ['Birch', 'Jasmine', 'Rose', 'Patchouli'],
      base: ['Oakmoss', 'Ambergris', 'Musk', 'Vanilla'],
    },
    longevity: 4,
    sillage: 4,
    versatility: 4,
    seasons: ['spring', 'summer', 'fall'],
    timeOfDay: ['day', 'night'],
    tags: ['Signature', 'Compliment-getter', 'Powerful', 'Iconic'],
    similarFragrances: ['armaf-club-de-nuit', 'parfums-de-marly-layton', 'amouage-interlude-man'],
  },
  {
    name: 'Baccarat Rouge 540',
    slug: 'mfk-baccarat-rouge-540',
    brand: 'Maison Francis Kurkdjian',
    year: 2015,
    gender: 'unisex',
    description:
      'Created to celebrate the 250th anniversary of the crystal maker Baccarat, Baccarat Rouge 540 has become the defining luxury fragrance of the 2010s. Its extraordinary jasmine and ambergris accord is laced with a peculiar woody-metallic note from Ambroxan, creating a scent that reads simultaneously clean, warm, and carnal. The crystal-clear amber accord projects beautifully at close quarters for well over twelve hours. No modern fragrance has been cloned more often — a measure of its incomparable appeal.',
    bottleImage: BOTTLE_IMAGES[1],
    concentration: 'EDP',
    priceRange: '$$$$',
    mainAccord: 'Amber/Warm',
    accords: [
      { name: 'Amber/Warm', strength: 85, color: ACCORD_COLORS['Amber/Warm'] },
      { name: 'Floral', strength: 70, color: ACCORD_COLORS.Floral },
      { name: 'Sweet', strength: 55, color: ACCORD_COLORS.Sweet },
      { name: 'Woody', strength: 50, color: ACCORD_COLORS.Woody },
      { name: 'Musky', strength: 40, color: ACCORD_COLORS.Musky },
    ],
    notes: {
      top: ['Jasmine', 'Saffron'],
      heart: ['Amberwood', 'Ambergris', 'Fir Resin'],
      base: ['Oakmoss', 'Cedar'],
    },
    longevity: 5,
    sillage: 4,
    versatility: 3,
    seasons: ['fall', 'winter'],
    timeOfDay: ['day', 'night'],
    tags: ['Luxury', 'Iconic', 'Compliment-getter', 'Statement'],
    similarFragrances: ['initio-oud-for-greatness', 'tom-ford-black-orchid', 'viktor-rolf-flowerbomb'],
  },
  {
    name: 'Sauvage',
    slug: 'dior-sauvage',
    brand: 'Dior',
    year: 2015,
    gender: 'men',
    description:
      'Dior Sauvage EDP deepened the original EDT formula into something richer and more complex. Where the EDT is a clean, airy aromatic, the EDP pushes darker and warmer, with a prominent Ambroxan base that delivers remarkable longevity and a standout presence. The lavender-spice heart over that amber base has made this one of the most-purchased fragrances in the world. It is not a challenging or complex scent — it is a perfectly constructed crowd-pleaser that reliably generates compliments, whatever the occasion.',
    bottleImage: BOTTLE_IMAGES[2],
    concentration: 'EDP',
    priceRange: '$$',
    mainAccord: 'Aromatic',
    accords: [
      { name: 'Aromatic', strength: 82, color: ACCORD_COLORS.Aromatic },
      { name: 'Amber/Warm', strength: 70, color: ACCORD_COLORS['Amber/Warm'] },
      { name: 'Spicy', strength: 55, color: ACCORD_COLORS.Spicy },
      { name: 'Woody', strength: 50, color: ACCORD_COLORS.Woody },
      { name: 'Fresh', strength: 35, color: ACCORD_COLORS.Fresh },
    ],
    notes: {
      top: ['Bergamot', 'Pepper'],
      heart: ['Lavender', 'Sichuan Pepper', 'Vetiver', 'Patchouli', 'Geranium'],
      base: ['Ambroxan', 'Cedar', 'Labdanum'],
    },
    longevity: 4,
    sillage: 4,
    versatility: 5,
    seasons: ['fall', 'winter', 'spring'],
    timeOfDay: ['day', 'night'],
    tags: ['Versatile', 'Compliment-getter', 'Office-friendly', 'Best-seller'],
    similarFragrances: ['parfums-de-marly-layton', 'creed-aventus', 'jo-malone-wood-sage-sea-salt'],
  },
  {
    name: 'No.5',
    slug: 'chanel-no5',
    brand: 'Chanel',
    year: 1921,
    gender: 'women',
    description:
      'Chanel No.5 is the most famous fragrance in history, created by perfumer Ernest Beaux at the request of Coco Chanel, who wanted "a woman\'s scent that smells like a woman." The abstract floral aldehyde composition — built around a sublime rose-jasmine heart over a deep sandalwood and civet base — was revolutionary for 1921 and remains extraordinary a century later. Every few years the formula is subtly adjusted to comply with IFRA regulations, but its essential character — powdery, warm, immortal — endures. Marilyn Monroe famously wore nothing to bed but a few drops.',
    bottleImage: BOTTLE_IMAGES[3],
    concentration: 'EDP',
    priceRange: '$$$',
    mainAccord: 'Floral',
    accords: [
      { name: 'Floral', strength: 90, color: ACCORD_COLORS.Floral },
      { name: 'Powdery', strength: 75, color: ACCORD_COLORS.Powdery },
      { name: 'Musky', strength: 55, color: ACCORD_COLORS.Musky },
      { name: 'Woody', strength: 40, color: ACCORD_COLORS.Woody },
      { name: 'Citrus', strength: 25, color: ACCORD_COLORS.Citrus },
    ],
    notes: {
      top: ['Aldehyde', 'Neroli', 'Ylang-Ylang', 'Bergamot'],
      heart: ['Rose', 'Jasmine', 'Lily of the Valley', 'Orris Root'],
      base: ['Sandalwood', 'Vetiver', 'Civit', 'Oakmoss', 'Amber'],
    },
    longevity: 4,
    sillage: 3,
    versatility: 3,
    seasons: ['fall', 'winter', 'spring'],
    timeOfDay: ['day', 'night'],
    tags: ['Classic', 'Iconic', 'Feminine', 'Heritage'],
    similarFragrances: ['viktor-rolf-flowerbomb', 'mfk-baccarat-rouge-540', 'ysl-black-opium'],
  },
  {
    name: 'Black Orchid',
    slug: 'tom-ford-black-orchid',
    brand: 'Tom Ford',
    year: 2006,
    gender: 'unisex',
    description:
      'Tom Ford Black Orchid was the inaugural fragrance from Tom Ford\'s own brand and set the template for what niche-adjacent luxury could smell like. A rich, dark composition built around a rare black orchid accord, it layers truffle, dark chocolate, and patchouli over a plummy-floral heart to create something genuinely opulent and adult. It is not subtle or easygoing — it demands attention and rewards those prepared to commit to something bold. At its best, wearing Black Orchid feels like putting on a piece of extraordinary theatre.',
    bottleImage: BOTTLE_IMAGES[4],
    concentration: 'EDP',
    priceRange: '$$$',
    mainAccord: 'Floral',
    accords: [
      { name: 'Floral', strength: 75, color: ACCORD_COLORS.Floral },
      { name: 'Woody', strength: 70, color: ACCORD_COLORS.Woody },
      { name: 'Spicy', strength: 60, color: ACCORD_COLORS.Spicy },
      { name: 'Sweet', strength: 50, color: ACCORD_COLORS.Sweet },
      { name: 'Musky', strength: 45, color: ACCORD_COLORS.Musky },
    ],
    notes: {
      top: ['Black Truffle', 'Ylang-Ylang', 'Bergamot', 'Black Currant'],
      heart: ['Black Orchid', 'Fruity Notes', 'Lotus', 'Patchouli', 'Gardenia'],
      base: ['Vetiver', 'Balsamic Notes', 'Musk', 'Sandalwood', 'Dark Chocolate', 'Incense'],
    },
    longevity: 5,
    sillage: 4,
    versatility: 2,
    seasons: ['fall', 'winter'],
    timeOfDay: ['night'],
    tags: ['Dark', 'Opulent', 'Statement', 'Evening'],
    similarFragrances: ['mfk-baccarat-rouge-540', 'initio-oud-for-greatness', 'amouage-interlude-man'],
  },
  {
    name: 'Santal 33',
    slug: 'le-labo-santal-33',
    brand: 'Le Labo',
    year: 2011,
    gender: 'unisex',
    description:
      'Santal 33 has arguably done more to define a particular strain of contemporary New York cool than any other fragrance. Its unusual accord — Australian sandalwood, cardamom, iris, violet, and papyrus — creates something that smells like the American West filtered through a downtown Manhattan sensibility. It became such a signature of a certain creative class that writer Molly Young famously wrote that "you can smell Santal 33 everywhere in New York." Whether that ubiquity is a selling point or a warning depends entirely on your point of view.',
    bottleImage: BOTTLE_IMAGES[5],
    concentration: 'EDP',
    priceRange: '$$$',
    mainAccord: 'Woody',
    accords: [
      { name: 'Woody', strength: 88, color: ACCORD_COLORS.Woody },
      { name: 'Aromatic', strength: 60, color: ACCORD_COLORS.Aromatic },
      { name: 'Spicy', strength: 45, color: ACCORD_COLORS.Spicy },
      { name: 'Musky', strength: 40, color: ACCORD_COLORS.Musky },
      { name: 'Leather', strength: 35, color: ACCORD_COLORS.Leather },
    ],
    notes: {
      top: ['Violet', 'Cardamom', 'Iris'],
      heart: ['Ambrette', 'Sandalwood', 'Papyrus'],
      base: ['Cedarwood', 'Leather', 'Musk'],
    },
    longevity: 4,
    sillage: 3,
    versatility: 4,
    seasons: ['spring', 'fall', 'winter'],
    timeOfDay: ['day', 'night'],
    tags: ['Niche', 'Cult', 'Unisex', 'Downtown'],
    similarFragrances: ['jo-malone-wood-sage-sea-salt', 'maison-margiela-beach-walk', 'dior-sauvage'],
  },
  {
    name: 'Black Opium',
    slug: 'ysl-black-opium',
    brand: 'YSL',
    year: 2014,
    gender: 'women',
    description:
      'YSL Black Opium took the oriental template of the original Opium and gave it a thoroughly modern coffee-and-vanilla makeover. The bold coffee accord in the heart is its signature — rich, dark, and slightly addictive — layered over white floral notes and a warm vanilla-patchouli base. It is one of the most successful feminine fragrance launches of the past decade, beloved for its accessibility and for striking a balance between sweetness and edge. The sillage in the first few hours is outstanding, making it a reliable choice for evenings out.',
    bottleImage: BOTTLE_IMAGES[6],
    concentration: 'EDP',
    priceRange: '$$',
    mainAccord: 'Sweet',
    accords: [
      { name: 'Sweet', strength: 85, color: ACCORD_COLORS.Sweet },
      { name: 'Vanilla', strength: 70, color: ACCORD_COLORS.Vanilla },
      { name: 'Floral', strength: 55, color: ACCORD_COLORS.Floral },
      { name: 'Woody', strength: 35, color: ACCORD_COLORS.Woody },
      { name: 'Musky', strength: 30, color: ACCORD_COLORS.Musky },
    ],
    notes: {
      top: ['Pink Pepper', 'Orange Blossom', 'Pear'],
      heart: ['Coffee', 'White Flowers', 'Jasmine'],
      base: ['Patchouli', 'Vanilla', 'Cedar', 'Cashmeran'],
    },
    longevity: 4,
    sillage: 4,
    versatility: 3,
    seasons: ['fall', 'winter'],
    timeOfDay: ['night'],
    tags: ['Gourmand', 'Evening', 'Feminine', 'Crowd-pleaser'],
    similarFragrances: ['chanel-no5', 'viktor-rolf-flowerbomb', 'mfk-baccarat-rouge-540'],
  },
  {
    name: 'Replica Beach Walk',
    slug: 'maison-margiela-beach-walk',
    brand: 'Maison Margiela',
    year: 2013,
    gender: 'unisex',
    description:
      "Part of Maison Margiela's celebrated Replica line — a collection of fragrances designed to recreate specific sensory memories — Beach Walk captures the essence of Île de Ré off the French Atlantic coast. Sunscreen, salt air, warm skin, and the faint bittersweet quality of coconut husks drying in the sun. It is one of the most technically accomplished fresh-floral compositions of the past decade, remarkable for how precisely it conjures a specific physical sensation: warmth on bare skin, light breeze, sand underfoot. A masterclass in molecular perfumery.",
    bottleImage: BOTTLE_IMAGES[7],
    concentration: 'EDT',
    priceRange: '$$',
    mainAccord: 'Fresh',
    accords: [
      { name: 'Fresh', strength: 82, color: ACCORD_COLORS.Fresh },
      { name: 'Floral', strength: 60, color: ACCORD_COLORS.Floral },
      { name: 'Woody', strength: 45, color: ACCORD_COLORS.Woody },
      { name: 'Musky', strength: 40, color: ACCORD_COLORS.Musky },
      { name: 'Citrus', strength: 35, color: ACCORD_COLORS.Citrus },
    ],
    notes: {
      top: ['Bergamot', 'Lemon', 'Aldehydes'],
      heart: ['Lily of the Valley', 'Ylang-Ylang', 'Coconut'],
      base: ['White Musk', 'Sandalwood', 'Cedar'],
    },
    longevity: 3,
    sillage: 2,
    versatility: 5,
    seasons: ['spring', 'summer'],
    timeOfDay: ['day'],
    tags: ['Summer', 'Fresh', 'Intimate', 'Iconic'],
    similarFragrances: ['jo-malone-wood-sage-sea-salt', 'acqua-di-parma-colonia', 'le-labo-santal-33'],
  },
  {
    name: 'Oud Al Layl',
    slug: 'lattafa-oud-al-layl',
    brand: 'Lattafa',
    year: 2015,
    gender: 'unisex',
    description:
      "Oud Al Layl — Night Oud in Arabic — is Lattafa's best-selling fragrance globally and one of the most celebrated value propositions in the entire fragrance world. Its opening is a dense, smoky oud that is neither aggressive nor medicinal, followed by a classical rose heart inspired by traditional Gulf attar-style perfumery. The warm amber base persists well past the eight-hour mark. In blind tests against European oud fragrances at three times the price, it consistently wins for raw pleasantness. For those new to Arabic perfumery, this is the ideal entry point.",
    bottleImage: BOTTLE_IMAGES[8],
    concentration: 'EDP',
    priceRange: '$',
    mainAccord: 'Oud',
    accords: [
      { name: 'Oud', strength: 90, color: ACCORD_COLORS.Oud },
      { name: 'Amber/Warm', strength: 75, color: ACCORD_COLORS['Amber/Warm'] },
      { name: 'Floral', strength: 55, color: ACCORD_COLORS.Floral },
      { name: 'Spicy', strength: 45, color: ACCORD_COLORS.Spicy },
      { name: 'Vanilla', strength: 35, color: ACCORD_COLORS.Vanilla },
    ],
    notes: {
      top: ['Bergamot', 'Saffron', 'Cinnamon'],
      heart: ['Rose', 'Oud', 'Jasmine'],
      base: ['Amber', 'Musk', 'Sandalwood', 'Vanilla'],
    },
    longevity: 4,
    sillage: 4,
    versatility: 3,
    seasons: ['fall', 'winter'],
    timeOfDay: ['night'],
    tags: ['Arabic', 'Oud', 'Value', 'Powerful'],
    similarFragrances: ['initio-oud-for-greatness', 'tom-ford-black-orchid', 'amouage-interlude-man'],
  },
  {
    name: 'Layton',
    slug: 'parfums-de-marly-layton',
    brand: 'Parfums de Marly',
    year: 2016,
    gender: 'men',
    description:
      "Parfums de Marly Layton is widely considered the house's finest achievement and one of the best masculine fragrances of the 2010s. It opens with an unusual lavender and green apple combination that is simultaneously crisp and sweet, before developing into a warm, spiced heart of geranium and cardamom. The base — vanilla, sandalwood, pepper — is beautifully balanced and delivers remarkable longevity. It has that rare quality of a fragrance that works in almost any context, from a job interview to a black-tie event. The bottle, inspired by the stables of Versailles, is suitably magnificent.",
    bottleImage: BOTTLE_IMAGES[9],
    concentration: 'EDP',
    priceRange: '$$$',
    mainAccord: 'Aromatic',
    accords: [
      { name: 'Aromatic', strength: 80, color: ACCORD_COLORS.Aromatic },
      { name: 'Sweet', strength: 65, color: ACCORD_COLORS.Sweet },
      { name: 'Woody', strength: 60, color: ACCORD_COLORS.Woody },
      { name: 'Spicy', strength: 50, color: ACCORD_COLORS.Spicy },
      { name: 'Floral', strength: 30, color: ACCORD_COLORS.Floral },
    ],
    notes: {
      top: ['Lavender', 'Green Apple', 'Bergamot'],
      heart: ['Geranium', 'Cardamom', 'Violet'],
      base: ['Vanilla', 'Sandalwood', 'Pepper', 'Musk'],
    },
    longevity: 5,
    sillage: 4,
    versatility: 5,
    seasons: ['spring', 'fall', 'winter'],
    timeOfDay: ['day', 'night'],
    tags: ['Versatile', 'Compliment-getter', 'Sophisticated', 'Best-seller'],
    similarFragrances: ['creed-aventus', 'dior-sauvage', 'amouage-interlude-man'],
  },
  {
    name: 'Wood Sage & Sea Salt',
    slug: 'jo-malone-wood-sage-sea-salt',
    brand: 'Jo Malone',
    year: 2014,
    gender: 'unisex',
    description:
      'Jo Malone Wood Sage & Sea Salt captures the sensation of standing at the edge of the sea on a grey British morning — ambergris-laced sea salt, earthy sage, and a whisper of driftwood. It became one of the house\'s best-selling compositions almost immediately, prized for its simplicity and for a naturalistic quality that feels genuinely effortless. It layers beautifully with other Jo Malone colognes, as is the house\'s tradition, but stands alone as a complete statement in its own right. Best worn close to the skin; it is not a fragrance that shouts.',
    bottleImage: BOTTLE_IMAGES[10],
    concentration: 'EDC',
    priceRange: '$$',
    mainAccord: 'Aromatic',
    accords: [
      { name: 'Aromatic', strength: 78, color: ACCORD_COLORS.Aromatic },
      { name: 'Fresh', strength: 72, color: ACCORD_COLORS.Fresh },
      { name: 'Woody', strength: 50, color: ACCORD_COLORS.Woody },
      { name: 'Musky', strength: 35, color: ACCORD_COLORS.Musky },
      { name: 'Green', strength: 30, color: ACCORD_COLORS.Green },
    ],
    notes: {
      top: ['Sea Salt', 'Ambrette'],
      heart: ['Sage'],
      base: ['Driftwood', 'Ambergris'],
    },
    longevity: 3,
    sillage: 2,
    versatility: 5,
    seasons: ['spring', 'summer', 'fall'],
    timeOfDay: ['day'],
    tags: ['Fresh', 'Effortless', 'Unisex', 'British'],
    similarFragrances: ['maison-margiela-beach-walk', 'acqua-di-parma-colonia', 'le-labo-santal-33'],
  },
  {
    name: 'Colonia',
    slug: 'acqua-di-parma-colonia',
    brand: 'Acqua di Parma',
    year: 1916,
    gender: 'unisex',
    description:
      "Acqua di Parma Colonia has been in continuous production since 1916, making it one of the oldest continuously produced fragrances in the world. Its hesperidic structure — a brilliant top of lemon and bergamot over a base of vetiver, patchouli, and sandalwood — is the archetype of the Italian cologne tradition. Elegant, clean, and utterly unimposing, it represents a different philosophy from the statement fragrances of the modern era: the idea that a good scent should enhance, not announce. In heat testing, it outperforms almost every other summer fragrance on the market.",
    bottleImage: BOTTLE_IMAGES[11],
    concentration: 'EDC',
    priceRange: '$$',
    mainAccord: 'Citrus',
    accords: [
      { name: 'Citrus', strength: 92, color: ACCORD_COLORS.Citrus },
      { name: 'Aromatic', strength: 60, color: ACCORD_COLORS.Aromatic },
      { name: 'Woody', strength: 45, color: ACCORD_COLORS.Woody },
      { name: 'Musky', strength: 35, color: ACCORD_COLORS.Musky },
      { name: 'Floral', strength: 25, color: ACCORD_COLORS.Floral },
    ],
    notes: {
      top: ['Lemon', 'Bergamot', 'Grapefruit', 'Orange'],
      heart: ['Rose', 'Jasmine', 'Lavender', 'Rosemary', 'Cardamom'],
      base: ['Vetiver', 'Patchouli', 'Sandalwood', 'White Musk', 'Amber'],
    },
    longevity: 3,
    sillage: 2,
    versatility: 5,
    seasons: ['spring', 'summer'],
    timeOfDay: ['day'],
    tags: ['Classic', 'Italian', 'Heritage', 'Summer'],
    similarFragrances: ['jo-malone-wood-sage-sea-salt', 'maison-margiela-beach-walk', 'dior-sauvage'],
  },
  {
    name: 'Oud for Greatness',
    slug: 'initio-oud-for-greatness',
    brand: 'Initio',
    year: 2018,
    gender: 'unisex',
    description:
      "Initio Oud for Greatness has done the remarkable: a niche oud fragrance that has crossed over into mass recognition. Its secret is the generous Ambroxan base that amplifies the smokiness of the oud into something almost symphonic, while a vanilla-benzoin accord prevents the composition from becoming harsh. The result is bold, cinematic, and unmistakably present — the sort of fragrance that walks into a room before you do. Reader surveys consistently rank it among the most reliable compliment-generating fragrances available, regardless of price point.",
    bottleImage: BOTTLE_IMAGES[12],
    concentration: 'Parfum',
    priceRange: '$$$$',
    mainAccord: 'Oud',
    accords: [
      { name: 'Oud', strength: 88, color: ACCORD_COLORS.Oud },
      { name: 'Smoky', strength: 72, color: ACCORD_COLORS.Smoky },
      { name: 'Vanilla', strength: 60, color: ACCORD_COLORS.Vanilla },
      { name: 'Musky', strength: 50, color: ACCORD_COLORS.Musky },
      { name: 'Spicy', strength: 40, color: ACCORD_COLORS.Spicy },
    ],
    notes: {
      top: ['Saffron', 'Nutmeg'],
      heart: ['Oud', 'Olibanum'],
      base: ['Ambroxan', 'Vanilla', 'Benzoin'],
    },
    longevity: 5,
    sillage: 5,
    versatility: 2,
    seasons: ['fall', 'winter'],
    timeOfDay: ['night'],
    tags: ['Niche', 'Statement', 'Powerful', 'Compliment-getter'],
    similarFragrances: ['lattafa-oud-al-layl', 'amouage-interlude-man', 'tom-ford-black-orchid'],
  },
  {
    name: 'Flowerbomb',
    slug: 'viktor-rolf-flowerbomb',
    brand: 'Viktor&Rolf',
    year: 2005,
    gender: 'women',
    description:
      "Viktor&Rolf Flowerbomb lives up to its name: a concentrated explosion of floral notes wrapped in a sweet-powdery-patchouli base that reads as both romantic and formidably opulent. The opening is sharp and faceted — bergamot and tea — before collapsing into an overwhelming rose-jasmine-orchid heart that sweetens further into the dry-down. It is one of the most successful feminine launches of the 2000s, beloved for its unconditional femininity and for the hand-grenade bottle, one of the most recognisable in modern perfumery. Best suited to cooler months where its richness can fully develop.",
    bottleImage: BOTTLE_IMAGES[13],
    concentration: 'EDP',
    priceRange: '$$',
    mainAccord: 'Floral',
    accords: [
      { name: 'Floral', strength: 92, color: ACCORD_COLORS.Floral },
      { name: 'Sweet', strength: 70, color: ACCORD_COLORS.Sweet },
      { name: 'Powdery', strength: 60, color: ACCORD_COLORS.Powdery },
      { name: 'Woody', strength: 40, color: ACCORD_COLORS.Woody },
      { name: 'Musky', strength: 35, color: ACCORD_COLORS.Musky },
    ],
    notes: {
      top: ['Bergamot', 'Tea'],
      heart: ['Orchid', 'Jasmine', 'Freesia', 'Rose', 'Cattleya Orchid'],
      base: ['Patchouli', 'Musk'],
    },
    longevity: 4,
    sillage: 4,
    versatility: 3,
    seasons: ['fall', 'winter', 'spring'],
    timeOfDay: ['day', 'night'],
    tags: ['Romantic', 'Feminine', 'Floral-bomb', 'Evening'],
    similarFragrances: ['chanel-no5', 'ysl-black-opium', 'mfk-baccarat-rouge-540'],
  },
  {
    name: 'Interlude Man',
    slug: 'amouage-interlude-man',
    brand: 'Amouage',
    year: 2012,
    gender: 'men',
    description:
      "Amouage Interlude Man is frequently cited by perfume critics as one of the greatest masculine fragrances of the 21st century. It is uncompromising and complex — a smoky, incense-forward composition that opens with bergamot and oregano before revealing a labyrinthine heart of rose, oud, and tobacco, grounding out in sandalwood and amber. It takes a full day to fully appreciate its arc. Interlude Man is not for the casual fragrance enthusiast; it demands engagement and rewards it with something that feels genuinely rare. The Omani oud used in the base is of exceptional quality.",
    bottleImage: BOTTLE_IMAGES[14],
    concentration: 'EDP',
    priceRange: '$$$$',
    mainAccord: 'Smoky',
    accords: [
      { name: 'Smoky', strength: 82, color: ACCORD_COLORS.Smoky },
      { name: 'Oud', strength: 70, color: ACCORD_COLORS.Oud },
      { name: 'Spicy', strength: 65, color: ACCORD_COLORS.Spicy },
      { name: 'Floral', strength: 45, color: ACCORD_COLORS.Floral },
      { name: 'Amber/Warm', strength: 55, color: ACCORD_COLORS['Amber/Warm'] },
    ],
    notes: {
      top: ['Bergamot', 'Oregano', 'Labdanum', 'Cistus'],
      heart: ['Rose', 'Oud', 'Tobacco', 'Orris Root'],
      base: ['Amber', 'Sandalwood', 'Vetiver', 'Clearwood'],
    },
    longevity: 5,
    sillage: 4,
    versatility: 2,
    seasons: ['fall', 'winter'],
    timeOfDay: ['night'],
    tags: ['Niche', 'Complex', 'Statement', 'Connoisseur'],
    similarFragrances: ['tom-ford-black-orchid', 'initio-oud-for-greatness', 'lattafa-oud-al-layl'],
  },
];

// Helper functions
export function getPerfumeBySlug(slug: string): Perfume | undefined {
  return PERFUMES.find((p) => p.slug === slug);
}

export function getPerfumesByGender(gender: string): Perfume[] {
  if (gender === 'all' || !gender) return PERFUMES;
  return PERFUMES.filter((p) => p.gender === gender);
}

export function getPerfumesByMainAccord(accord: string): Perfume[] {
  return PERFUMES.filter((p) => p.mainAccord === accord);
}

export function searchPerfumes(query: string): Perfume[] {
  if (!query) return PERFUMES;
  const q = query.toLowerCase();
  return PERFUMES.filter((p) => {
    const inName = p.name.toLowerCase().includes(q);
    const inBrand = p.brand.toLowerCase().includes(q);
    const inAccords = p.accords.some((a) => a.name.toLowerCase().includes(q));
    const inTopNotes = p.notes.top.some((n) => n.toLowerCase().includes(q));
    const inHeartNotes = p.notes.heart.some((n) => n.toLowerCase().includes(q));
    const inBaseNotes = p.notes.base.some((n) => n.toLowerCase().includes(q));
    const inTags = p.tags.some((t) => t.toLowerCase().includes(q));
    return inName || inBrand || inAccords || inTopNotes || inHeartNotes || inBaseNotes || inTags;
  });
}

export function getSimilarPerfumes(slug: string): Perfume[] {
  const perfume = getPerfumeBySlug(slug);
  if (!perfume) return [];
  return perfume.similarFragrances
    .map((s) => getPerfumeBySlug(s))
    .filter((p): p is Perfume => p !== undefined);
}

export const ALL_BRANDS: string[] = Array.from(new Set(PERFUMES.map((p) => p.brand))).sort();

export const ALL_ACCORDS: string[] = Array.from(new Set(PERFUMES.map((p) => p.mainAccord))).sort();
