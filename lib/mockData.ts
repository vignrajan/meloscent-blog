export interface Author {
  name: string;
  slug: { current: string };
  photo: string;
  bio: string;
  specialisation: string;
  linkedin?: string;
  instagram?: string;
}

export interface Category {
  name: string;
  slug: { current: string };
  description: string;
  colorKey: string;
}

export interface AffiliateProduct {
  productName: string;
  productSlug: string;
  price: string;
  buttonLabel: string;
}

export interface Article {
  title: string;
  slug: { current: string };
  heroImage: string;
  heroImageAlt: string;
  publishedAt: string;
  updatedAt?: string;
  metaDescription: string;
  excerpt: string;
  body: BodyBlock[];
  isFeatured?: boolean;
  isBreaking?: boolean;
  tags?: string[];
  affiliateProducts?: AffiliateProduct[];
  author: Author;
  category: Category;
}

export interface BodyBlock {
  _type: string;
  children?: { text: string }[];
  style?: string;
}

export const AUTHORS: Author[] = [
  {
    name: 'Sara Joshi',
    slug: { current: 'sara-joshi' },
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    bio: 'Sara has spent a decade tracking the niche fragrance world, from independent perfumers in Portland to heritage houses in Grasse. She believes scent is the most underrated form of self-expression.',
    specialisation: 'Niche & Artisan',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Kavya Pillai',
    slug: { current: 'kavya-pillai' },
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
    bio: 'Kavya has blind-tested over 400 fragrance dupes and developed a forensic nose for what separates a worthy clone from a cheap imitation. She writes about accessible luxury.',
    specialisation: 'Dupes & Clones',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Aisha Raza',
    slug: { current: 'aisha-raza' },
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    bio: 'Aisha covers the intersection of celebrity culture and fine fragrance. A former beauty editor at a major UK publication, she now writes exclusively about scent.',
    specialisation: 'Celebrity & Luxury',
    instagram: 'https://instagram.com',
  },
];

export const CATEGORIES: Category[] = [
  { name: 'News', slug: { current: 'news' }, description: 'The latest launches, reformulations, and industry developments in the fragrance world.', colorKey: 'news' },
  { name: 'Dupes', slug: { current: 'dupes' }, description: 'Find designer fragrance clones that smell identical — at a fraction of the price.', colorKey: 'dupes' },
  { name: 'Celebrity', slug: { current: 'celebrity' }, description: "Discover what the world's biggest stars actually wear — and where to buy it.", colorKey: 'celebrity' },
  { name: 'Arabic', slug: { current: 'arabic' }, description: 'Deep dives into oud, amber, and the rich tradition of Middle Eastern perfumery.', colorKey: 'arabic' },
  { name: 'Niche', slug: { current: 'niche' }, description: 'Independent and artisan perfumers pushing the boundaries of olfactory art.', colorKey: 'niche' },
  { name: 'Seasonal', slug: { current: 'seasonal' }, description: 'The best fragrances for every season — tested in real-world conditions.', colorKey: 'seasonal' },
  { name: 'TikTok', slug: { current: 'tiktok' }, description: 'Viral fragrance moments, trending scents, and the social media perfume community.', colorKey: 'tiktok' },
  { name: 'Luxury', slug: { current: 'luxury' }, description: 'Investment-worthy bottles, rare editions, and the fragrances worth saving up for.', colorKey: 'luxury' },
];

const makeBody = (paragraphs: string[]): BodyBlock[] =>
  paragraphs.map((text) => ({
    _type: 'block',
    style: 'normal',
    children: [{ text }],
  }));

export const ARTICLES: Article[] = [
  {
    title: 'Maison Margiela Launches Replica Beach Walk Summer Edition',
    slug: { current: 'maison-margiela-replica-beach-walk-summer-edition' },
    heroImage: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800',
    heroImageAlt: 'Maison Margiela Replica Beach Walk perfume bottle on sand',
    publishedAt: '2026-05-18T09:00:00Z',
    metaDescription: 'Maison Margiela has released a limited summer edition of their iconic Replica Beach Walk fragrance with a new coconut-forward twist.',
    excerpt: 'The cult Replica line gets a summer makeover — and the new Beach Walk Summer Edition is exactly what a long weekend at the coast smells like.',
    body: makeBody([
      'Maison Margiela has unveiled the Beach Walk Summer Edition, a limited-run flanker to one of the most beloved entries in their Replica collection. Where the original Beach Walk captured the essence of Île de Ré — sunscreen, warm skin, sea-salted air — this new iteration pushes further into summer fantasy territory.',
      'The reformulation introduces a coconut milk heart note that sits over the familiar base of cedar and musk. Perfumer Aliénor Massenet described it as "the feeling of stepping off a plane into warm air for the first time all year." Projection is moderate, which keeps it in line with the Replica ethos of intimate, skin-close scents.',
      'The summer edition ships in a frosted glass bottle with coral-coloured lettering — a departure from the usual minimalist label. It retails at £98 for 100ml and is available exclusively through Maison Margiela boutiques and their online store from 20 May 2026.',
      'Whether it eclipses the original is a matter of taste. The OG Beach Walk remains one of the most technically accomplished fresh-floral compositions of the last decade. The Summer Edition is lighter, more playful, and arguably more approachable for those new to the line.',
    ]),
    author: AUTHORS[0],
    category: CATEGORIES[0],
    tags: ['Maison Margiela', 'Replica', 'Summer', 'Launch'],
  },
  {
    title: "Chanel No.5 Just Got Its First Reformulation in 20 Years",
    slug: { current: 'chanel-no5-reformulation-2026' },
    heroImage: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800',
    heroImageAlt: 'Chanel No.5 perfume bottle',
    publishedAt: '2026-05-16T10:00:00Z',
    metaDescription: 'Chanel No.5 has been quietly reformulated for the first time in two decades. We compare old vs new across 48 hours of wear.',
    excerpt: 'The most famous fragrance in history has been quietly changed — and we wore both versions for 48 hours to find out what exactly is different.',
    body: makeBody([
      "Chanel No.5 is arguably the most scrutinised fragrance on earth. Every reformulation — driven by the EU's IFRA restrictions on materials like oakmoss and certain musks — is greeted with howls of protest from devotees. The latest adjustment, believed to involve the jasmine aldehyde accord in the top notes, is the first major change since 2004.",
      'We obtained a vintage bottle from 2005 and compared it with the current formulation across two days of skin-testing. The differences are genuinely subtle. The opening aldehydes on the new formulation are slightly less aggressive — some might say rounder. The powdery dry-down is largely intact, though older bottles tend to carry a deeper, almost dusty muscularity that the current version lacks.',
      'Chanel has not officially confirmed a reformulation. This is standard practice across the industry, where any change — however minor — is rarely publicised for fear of alienating loyal customers.',
      'The bottom line: if you have never worn No.5 before, the current version remains extraordinary. If you are a longtime devotee comparing against a bottle from pre-2010, you will notice the difference, but it is not the disaster some online forums suggest.',
    ]),
    author: AUTHORS[2],
    category: CATEGORIES[0],
    tags: ['Chanel', 'Reformulation', 'Classic', 'News'],
  },
  {
    title: 'The 5 Best Creed Aventus Dupes That Actually Smell Identical',
    slug: { current: 'best-creed-aventus-dupes' },
    heroImage: 'https://images.unsplash.com/photo-1590736969596-0c88d2a7a80f?w=800',
    heroImageAlt: 'Fragrance bottles lined up on a shelf',
    publishedAt: '2026-05-14T08:00:00Z',
    metaDescription: 'We blind-tested 18 Creed Aventus dupes. These 5 passed — smelling nearly identical to the £350 original at a fraction of the cost.',
    excerpt: 'After blind-testing 18 claimed Aventus clones, we found five that genuinely replicate the smoky pineapple DNA of the £350 original.',
    isFeatured: true,
    body: makeBody([
      'Creed Aventus has been the most-cloned fragrance on the planet for over a decade. Its formula — a smoky pineapple opening over a heart of rose and jasmine, grounding out in birch tar, oakmoss, and ambergris — is distinctive enough to recognise yet complex enough to make a convincing copy extraordinarily difficult.',
      'We blind-tested 18 dupes sourced from Amazon, FragranceNet, and specialist clone houses. Each was applied to skin (not paper) and evaluated at 30 minutes, 2 hours, and 6 hours. The testers did not know which was which. Five passed all three checkpoints.',
      'The standout is Armaf Club de Nuit Intense Man at £22 for 105ml. It captures the birch smoke and the sweet-tart pineapple in the opening with remarkable accuracy. The dry-down diverges slightly — it lacks the mineral quality of true Aventus — but 90% of the time, it is close enough to fool anyone who is not a Creed devotee. The second-best, Al Haramain Amber Oud, takes a slightly more Arabic direction but shares enough DNA to be worth the £18 asking price.',
      'The worst performers were the ones you will find for under £10 on marketplace sites. They capture the idea of Aventus — smoky, fruity — but smell thin and synthetic from the first spray. Save your money and go straight to the Armaf.',
    ]),
    author: AUTHORS[1],
    category: CATEGORIES[1],
    tags: ['Creed', 'Aventus', 'Dupes', 'Clones'],
    affiliateProducts: [
      { productName: 'Armaf Club de Nuit Intense Man', productSlug: 'armaf-club-de-nuit', price: '£22', buttonLabel: 'Buy Now' },
      { productName: 'Creed Aventus (Original)', productSlug: 'creed-aventus', price: '£350', buttonLabel: 'Shop Creed' },
    ],
  },
  {
    title: 'Baccarat Rouge 540 Dupe: The £18 Clone That Fools Everyone',
    slug: { current: 'baccarat-rouge-540-dupe-18-clone' },
    heroImage: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800',
    heroImageAlt: 'Amber coloured perfume bottle',
    publishedAt: '2026-05-12T09:30:00Z',
    metaDescription: 'The MFK Baccarat Rouge 540 dupe from Lattafa has gone viral for a reason — we tested it against the £300 original.',
    excerpt: 'At £18, the Lattafa dupe of Baccarat Rouge 540 has become the most-discussed fragrance in the clone community. We tested it side by side.',
    body: makeBody([
      'Maison Francis Kurkdjian Baccarat Rouge 540 has been the defining luxury fragrance of the last decade. Its ambergris and jasmine heart, with its peculiar sweetness that reads as simultaneously clean and carnal, has inspired more clones than any other modern fragrance except perhaps Aventus.',
      "The Lattafa version, sold as Bade'e Al Oud Amethyst, costs £18 and is available widely online. On first spray, the similarities are striking. The sweet, somewhat metallic jasmine note is present. The amber base is recognisable. But the longevity — where BR540 famously projects for 12+ hours — is the giveaway. The Lattafa dupe drops off around the 4-hour mark.",
      'What it does well: in the first two hours, at arm\'s length, you will struggle to tell the difference. What it does poorly: it lacks the depth and development of the original, which evolves through several distinct stages across a long day. The Lattafa stays relatively static.',
      'For £18, it is extraordinary value. For a night out where you want to smell like you spent £300, it delivers. For a fragrance you want to wear daily and appreciate over months of use, the original remains in a different league.',
    ]),
    author: AUTHORS[1],
    category: CATEGORIES[1],
    tags: ['Baccarat Rouge', 'MFK', 'Lattafa', 'Dupes'],
    affiliateProducts: [
      { productName: "Lattafa Bade'e Al Oud Amethyst", productSlug: 'lattafa-oud-al-layl', price: '£18', buttonLabel: 'Buy Now' },
      { productName: 'MFK Baccarat Rouge 540', productSlug: 'baccarat-rouge-540', price: '£300', buttonLabel: 'Shop Original' },
    ],
  },
  {
    title: "Zendaya's Signature Scent: What Perfumers Say She Actually Wears",
    slug: { current: 'zendaya-signature-scent-perfumers' },
    heroImage: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800',
    heroImageAlt: 'Luxury perfume bottles on a vanity',
    publishedAt: '2026-05-10T11:00:00Z',
    metaDescription: "We asked three fragrance experts to identify Zendaya's signature scent based on her fashion choices, interviews, and red carpet appearances.",
    excerpt: "Fragrance is the invisible part of a personal brand. Three perfumers analyse what Zendaya's aesthetic says about her olfactory world.",
    body: makeBody([
      "Celebrity fragrance speculation is a cottage industry, but it is rarely done seriously. We approached three working perfumers with a different methodology: instead of relying on paparazzi tips or fashion week gossip, we gave them a brief on Zendaya's aesthetic — her Valentino couture phase, her stated appreciation for understated luxury, her connection to the Lancôme brand — and asked them what fragrance profile she was likely drawn to.",
      'The consensus was surprisingly coherent. All three pointed toward a soft floral chypre — specifically, a rose-centred composition with a clean woody or mossy base. The sort of fragrance that reads as expensive at distance but intimate on skin. Two of the three independently mentioned Le Labo Rose 31 as a likely fit.',
      'One perfumer, who has worked with several major celebrities on private fragrance briefs, noted that in her experience, fashion-forward individuals tend to gravitate toward niche rather than designer fragrances precisely because of the lack of brand association. "They want the scent to be theirs, not a logo," she told us.',
      "Whether any of this is accurate is impossible to verify without a direct confirmation. But as an exercise in fragrance profiling, it reveals as much about the perfumers' craft — the ability to read a person's sensory world from their visible choices — as it does about celebrity culture.",
    ]),
    author: AUTHORS[2],
    category: CATEGORIES[2],
    tags: ['Celebrity', 'Zendaya', 'Signature Scent', 'Niche'],
  },
  {
    title: 'Oud Al Layl by Lattafa: Why This £20 Bottle Outsells Everything',
    slug: { current: 'lattafa-oud-al-layl-review' },
    heroImage: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800',
    heroImageAlt: 'Arabic perfume bottles with oud',
    publishedAt: '2026-05-08T08:00:00Z',
    metaDescription: "Lattafa's Oud Al Layl has become a fragrance community phenomenon. We find out why this £20 oud beats bottles ten times its price.",
    excerpt: "At £20, Lattafa's Oud Al Layl has been called the most democratic luxury fragrance in the world. We find out if the hype is deserved.",
    body: makeBody([
      'Lattafa Perfumes, founded in Dubai in 2004, has become arguably the most disruptive force in the global fragrance market. Their formula is straightforward: use high-quality agarwood-derived oud, combine it with classic Arabic amber and rose accords, and sell at a price point that European houses cannot match.',
      'Oud Al Layl — Night Oud in Arabic — is their best-selling fragrance globally. The opening is a dense, slightly smoky oud that is neither aggressive nor medicinal in the way that some Western interpretations of oud can be. The rose heart that follows is classical, inspired by the traditional attar-style perfumery of the Gulf. The base is a warm amber that persists well past the 8-hour mark.',
      'We tested it against two European oud fragrances at three times the price. In a blind test with five participants, three identified the Lattafa as the most pleasant overall. The two who preferred the European options cited complexity and development over time — fair points, as the Lattafa is relatively linear. But at £20 for 100ml, the equation is almost impossible to argue against.',
      'The fragrance community on Reddit and YouTube has been discussing Oud Al Layl for years. It regularly tops "best value" fragrance lists. Our conclusion: the reputation is entirely merited. If you have never tried Arabic perfumery, this is the ideal entry point.',
    ]),
    author: AUTHORS[0],
    category: CATEGORIES[3],
    tags: ['Lattafa', 'Oud', 'Arabic', 'Value'],
    affiliateProducts: [
      { productName: 'Lattafa Oud Al Layl 60ml', productSlug: 'lattafa-oud-al-layl', price: '£20', buttonLabel: 'Buy Now' },
    ],
  },
  {
    title: 'The TikTok Perfume That Sold Out in 48 Hours (And Is It Worth It?)',
    slug: { current: 'tiktok-perfume-sold-out-48-hours' },
    heroImage: 'https://images.unsplash.com/photo-1590736969596-0c88d2a7a80f?w=800',
    heroImageAlt: 'Viral perfume bottle from TikTok',
    publishedAt: '2026-05-06T14:00:00Z',
    metaDescription: "Kayali Vanilla 28 went viral on TikTok and sold out globally in 48 hours. We tested it for a week to find out if it lives up to the algorithm's hype.",
    excerpt: 'When a fragrance goes viral on TikTok, it sells out fast. But does the algorithm know good scent? We test the latest viral phenomenon.',
    body: makeBody([
      "Kayali Vanilla 28 has been circling TikTok's fragrance community for months. But when a 47-second video by creator @scentdiaryofficial crossed 12 million views in a weekend, the product — already beloved by a niche audience — went from cult to impossible to find in under two days.",
      "The fragrance itself is from the Huda Beauty founder's fragrance line, Kayali. Vanilla 28 is a warm, gourmand composition — benzoin, musk, and a tonka bean accord give it a baked sweetness that stops just short of cloying. The TikTok appeal makes sense: it photographs well (unusual for a scent) and it is, frankly, pleasant in a very accessible way.",
      'Is it worth the hype? That depends on what you are comparing it to. Against other mainstream gourmand fragrances — Thierry Mugler Angel, YSL Libre — it is perfectly good but not exceptional. Against the price point (£65 for 50ml) it offers solid value. The projection is impressive for the first four hours, then drops to a skin scent.',
      "The TikTok effect on fragrance is fascinating and slightly alarming. A genuinely niche composition can become a mass phenomenon based on a content creator's 47 seconds of footage. Vanilla 28 is a better outcome than most — it is a well-made fragrance — but it is worth noting that the algorithm's enthusiasm and olfactory quality are entirely unrelated variables.",
    ]),
    author: AUTHORS[2],
    category: CATEGORIES[6],
    tags: ['TikTok', 'Viral', 'Kayali', 'Vanilla'],
  },
  {
    title: 'Best Summer Fragrances 2026: 12 Scents Tested in 35°C Heat',
    slug: { current: 'best-summer-fragrances-2026' },
    heroImage: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800',
    heroImageAlt: 'Summer fragrances on a beach towel',
    publishedAt: '2026-05-04T09:00:00Z',
    metaDescription: 'We tested 12 summer 2026 fragrance releases in actual 35°C heat to find what actually performs when it matters.',
    excerpt: 'Most fragrance reviews happen at room temperature. We tested 12 summer releases during a heatwave to find out what actually works.',
    body: makeBody([
      'Heat changes everything in fragrance. A composition that smells balanced and elegant at 20°C can become cloying, sharp, or overwhelming at 35°C. The increased volatility of aromatic molecules in high temperatures accelerates the top notes brutally — what you get on paper in an air-conditioned office is not what you get on your skin in direct sunlight.',
      'We tested 12 summer 2026 releases over a two-week heatwave period in the south of France. Each fragrance was applied to the wrist and inner elbow on alternate arms and evaluated at 15 minutes, 1 hour, and 4 hours in ambient temperatures ranging from 32°C to 37°C.',
      'The clear winner was Acqua di Parma Colonia Essenza. Its hesperidic structure — bergamot, neroli, light musk — handles heat with aplomb, projecting cleanly without the headache-inducing sharpness that affects many citrus fragrances at high temperatures. Second was Diptyque Philosykos, which gains an almost edible warmth in heat that makes it one of the most sensual summer fragrances we have tested.',
      'The worst performer, despite significant hype, was a major designer aquatic that shall remain nameless. It smelled of nothing but cleaning product and headache-inducing musks at full heat. Aquatic fragrances, as a rule, tend to perform poorly in genuine summer conditions — they are designed for air-conditioned offices, not actual summer.',
    ]),
    author: AUTHORS[0],
    category: CATEGORIES[5],
    tags: ['Summer', 'Seasonal', 'Heat', 'Review'],
  },
  {
    title: 'Imaginary Authors: The Portland Perfumers Rewriting the Rules',
    slug: { current: 'imaginary-authors-portland-perfumers' },
    heroImage: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800',
    heroImageAlt: 'Imaginary Authors niche perfume bottles',
    publishedAt: '2026-05-02T10:00:00Z',
    metaDescription: 'Imaginary Authors, the Portland-based niche perfume house, has been quietly building one of the most distinctive fragrance libraries in the world.',
    excerpt: 'Each Imaginary Authors fragrance comes with a novella. We visit the Portland studio where literature and perfumery blur into something genuinely new.',
    body: makeBody([
      "Imaginary Authors operates on a simple premise: every fragrance should tell a story. Not in the vague, marketing-brochure sense that most fragrance houses use, but literally — each release comes with an original short novella, and the scent is designed to be the olfactory equivalent of reading that specific story. It sounds like a gimmick. It is not.",
      "Josh Meyer, the founder and nose behind the house, launched Imaginary Authors in Portland, Oregon in 2012. He came not from perfumery but from writing and art direction, and it shows in the packaging, the storytelling, and the unusual compositional choices. His fragrances reference specific literary moments — the damp Pacific Northwest forests of a particular kind of American noir; the sun-bleached California of an unreliable narrator's road trip.",
      "The standout in the current collection is 'The Cobra & The Canary' — a saffron and leather composition that manages to be simultaneously warm and unsettling. It smells like a story you are not sure you trust. 'Cape Heartache' takes a different approach, building a fog-heavy oceanic atmosphere around cypress, hay, and a touch of barnyard that somehow resolves into something profoundly beautiful.",
      'Imaginary Authors are not the cheapest niche house on the market, at around £110 for 50ml. But in a space cluttered with houses trying to be the next Le Labo, they are doing something genuinely original. The Portland studio ships internationally, and samples are widely available. Start with The Cobra & The Canary.',
    ]),
    author: AUTHORS[0],
    category: CATEGORIES[4],
    tags: ['Niche', 'Imaginary Authors', 'Portland', 'Artisan'],
  },
  {
    title: 'Compliment Magnets: The 7 Fragrances That Always Get Asked About',
    slug: { current: 'compliment-magnet-fragrances-2026' },
    heroImage: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800',
    heroImageAlt: 'Luxury perfume collection on marble',
    publishedAt: '2026-04-30T09:00:00Z',
    metaDescription: '7 fragrances that reliably generate compliments and "what are you wearing?" questions — tested over six months.',
    excerpt: 'Not all great fragrances get noticed. These seven are the ones that reliably stop conversations and generate genuine compliments.',
    body: makeBody([
      "There is a specific category of fragrance that operates differently from the rest. Most great fragrances are personal experiences — intimate, private, something between you and your skin. But some fragrances project outward in a way that invites comment. They are, in the community's parlance, compliment magnets.",
      'We identified seven fragrances that, based on six months of systematic wear-testing and community surveys across our reader base, consistently generate "what are you wearing?" moments. These are not necessarily the most complex or critically acclaimed compositions — they are the ones that communicate most effectively to a general audience.',
      "Number one, for the third year running, is Dior Sauvage Elixir. It is divisive among fragrance enthusiasts — too popular, too linear — but the general public responds to it with remarkable consistency. Its dense, almost resinous ambroxan-and-spice structure reads as expensive and confident in a way that a broad audience registers immediately.",
      'The surprise inclusion this year is Initio Oud for Greatness, a niche composition that has crossed over into mainstream recognition through social media. Its smoke-and-vanilla oud accord is immediately striking without being confrontational. At £215 for 90ml, it represents serious money, but of the seven fragrances on this list, it generates the most sustained interest from strangers.',
    ]),
    author: AUTHORS[2],
    category: CATEGORIES[7],
    tags: ['Luxury', 'Compliments', 'Dior', 'Investment'],
    affiliateProducts: [
      { productName: 'Dior Sauvage Elixir', productSlug: 'dior-sauvage', price: '£145', buttonLabel: 'Shop Dior' },
    ],
  },
];

export function getFeaturedArticle(): Article {
  return ARTICLES.find((a) => a.isFeatured) ?? ARTICLES[0];
}

export function getRecentArticles(limit = 9): Article[] {
  return ARTICLES.slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug.current === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((a) => a.category.slug.current === categorySlug);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug.current === slug);
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return ARTICLES.filter((a) => a.author.slug.current === authorSlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug.current === slug);
}
