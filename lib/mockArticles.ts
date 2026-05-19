export interface ArticleBody {
  type: 'p' | 'h2' | 'h3' | 'quote' | 'tip';
  text: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  readTime: number;
  image: string;
  featured: boolean;
  tags: string[];
  body: ArticleBody[];
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'baccarat-rouge-540-review',
    title: 'Baccarat Rouge 540: Why Everyone Is Wearing the Same Perfume',
    excerpt: "The fragrance that took over the world — we break down why MFK's masterpiece has become a cultural phenomenon and whether it still deserves the hype.",
    category: 'Reviews',
    author: 'Sophie Laurent',
    authorSlug: 'sophie-laurent',
    date: '2026-05-10',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=1200&q=85',
    featured: true,
    tags: ['baccarat-rouge', 'mfk', 'review', 'luxury'],
    body: [
      { type: 'p', text: 'Walk into any upscale bar, airport lounge, or first-class cabin and you will smell it. That warm, slightly metallic, crystalline amber — unmistakable, omnipresent, polarising. Baccarat Rouge 540 by Maison Francis Kurkdjian has become the defining fragrance of the 2020s, and yet ten years after its launch, people are still arguing about whether that is a compliment.' },
      { type: 'h2', text: 'What is Baccarat Rouge 540, exactly?' },
      { type: 'p', text: 'Created in 2015 as a collaboration between MFK and the legendary crystal house Baccarat, BR540 was originally an exclusive gift — only available to Baccarat VIP clients. Its democratisation (if you can call €325 democratic) turned it into the most imitated and discussed fragrance of the decade.' },
      { type: 'p', text: 'Perfumer Francis Kurkdjian built it around two synthetic molecules: ambroxan, which gives that skin-like amber warmth, and Clearwood, a woody-earthy effect. Over these, he layered saffron and jasmine top notes and a dry cedar-oakmoss base. The result is something that smells neither floral nor woody nor oriental in the traditional sense — it sits somewhere between all three, which is precisely why it fascinates.' },
      { type: 'h2', text: 'Performance: genuinely excellent' },
      { type: 'p', text: 'On longevity and sillage, BR540 is hard to fault. A single spray in the morning will still be detectable on your clothing the next day. The projection is substantial without being aggressive — it fills a room without announcing itself rudely. On skin, it morphs beautifully: the saffron-jasmine opening gives way within an hour to that warm, almost caramelised amber, and then settles into a soft, slightly smoky cedar in the dry-down.' },
      { type: 'quote', text: "It does not smell like anything else. That is both its genius and the reason some people find it overwhelming — it is genuinely unlike any reference point they have." },
      { type: 'h2', text: 'The ubiquity problem' },
      { type: 'p', text: 'Here is the honest truth: Baccarat Rouge 540 has become a victim of its own success. In 2018, it was the fragrance of the discerning few. By 2024, TikTok had turned it into shorthand for "I bought an expensive perfume." The scent has not changed. What has changed is the cultural weight it carries.' },
      { type: 'p', text: "If you love the smell, you should still buy it — the fragrance itself is a genuine masterpiece. If you are buying it because it is the bottle everyone recognises, you might be disappointed to find that the signal it sends has shifted considerably from what you intended." },
      { type: 'tip', text: 'Pro tip: The Extrait de Parfum version is significantly darker, richer, and less transparent than the EDP. If you find the EDP too sheer, try the extrait before writing it off.' },
      { type: 'h2', text: 'Verdict' },
      { type: 'p', text: 'A 9.2 out of 10. The craft is exceptional, the longevity is among the best in any fragrance at this price point, and the scent profile is genuinely unlike anything else. Whether it is right for you depends less on the perfume itself and more on how you feel about wearing the same fragrance as a significant fraction of the global luxury consumer market. We do not mark it down for that — perfume should be judged on what is in the bottle.' },
    ],
  },
  {
    id: '2',
    slug: 'best-oud-fragrances-2026',
    title: 'The 10 Best Oud Fragrances of 2026, Ranked',
    excerpt: "From the affordable to the astronomical, we've tested every major oud release. Here's our definitive guide to the most captivating resinous scents.",
    category: 'Guides',
    author: 'James Harlow',
    authorSlug: 'james-harlow',
    date: '2026-05-08',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=1200&q=85',
    featured: true,
    tags: ['oud', 'guide', 'ranking', 'niche'],
    body: [
      { type: 'p', text: "Oud — agarwood resin harvested from infected Aquilaria trees — has been the foundation of Middle Eastern perfumery for centuries. In the past decade, Western fragrance houses have embraced it wholesale, with results ranging from transcendent to frankly absurd. We tested 24 oud-centric fragrances this year. Here are the ten you actually need to know about." },
      { type: 'h2', text: '1. Tom Ford Oud Wood — The Gateway' },
      { type: 'p', text: "Tom Ford's 2007 release remains the benchmark for oud crossover appeal. It made oud approachable for Western noses by softening its animalic edges with cardamom and sandalwood. Still excellent, still worth your money at £195." },
      { type: 'h2', text: '2. Roja Dove Aoud — The Pinnacle' },
      { type: 'p', text: "At £560, Roja Dove's Aoud is not for the faint-hearted or the shallow-pocketed. But it is one of the finest fragrances made this century. The oud here is raw, powerful, and complex — rose and saffron circling it like attendants at a royal court. This is oud as it was meant to be experienced." },
      { type: 'quote', text: "Real oud should make you feel something — awe, discomfort, longing. If your oud fragrance just smells 'nice', it is probably not real oud." },
      { type: 'h2', text: '3. Maison Margiela Replica Jazz Club — The Approachable' },
      { type: 'p', text: "Jazz Club is not strictly an oud fragrance — it leads with tobacco and rum — but the oud in its base gives it that smoky depth that makes it uniquely compelling. At £160 and wearable in almost any context, it is one of the best entry points into resinous perfumery." },
      { type: 'tip', text: "If you are new to oud, start with Tom Ford Oud Wood or Maison Margiela Jazz Club. Both soften the animalic qualities while preserving the warmth and depth that makes oud so compelling." },
      { type: 'h2', text: 'On authenticity' },
      { type: 'p', text: "A note on ingredient sourcing: genuine oud is extraordinarily expensive and increasingly rare. Many 'oud' fragrances from mass-market houses contain synthetic oud alternatives like Iso E Super or Oud Molecule. This is not inherently dishonest — synthetics can be beautiful — but it explains the enormous price variance between a £70 'oud' from a high street brand and a £400 oud from a niche house. You are often paying for the real thing." },
    ],
  },
  {
    id: '3',
    slug: 'dupe-guide-tom-ford',
    title: 'Tom Ford Dupes That Actually Smell the Same',
    excerpt: "We compared 15 budget alternatives to Tom Ford's Private Blend collection. Some were shockingly close — others were embarrassingly far off.",
    category: 'Dupes',
    author: 'Sophie Laurent',
    authorSlug: 'sophie-laurent',
    date: '2026-05-05',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=85',
    featured: false,
    tags: ['dupes', 'tom-ford', 'budget', 'comparison'],
    body: [
      { type: 'p', text: "Tom Ford's Private Blend line sits at a particularly awkward price point: expensive enough that most people cannot buy freely, famous enough that everyone has an opinion. It makes the collection ideal dupe territory. We bought 15 supposed dupes and wore them blind against the originals for two weeks. Here is what we found." },
      { type: 'h2', text: 'Our methodology' },
      { type: 'p', text: "Each dupe was worn on one wrist while the original was worn on the other. We assessed opening, heart, dry-down, longevity, and projection independently, then compared. A 'good dupe' in our rating means it shares enough DNA to satisfy someone who enjoys the original's general scent profile. A 'perfect dupe' means we had to check labels to be sure which was which." },
      { type: 'h2', text: 'Tobacco Vanille: The hardest to copy' },
      { type: 'p', text: "Tobacco Vanille is the white whale of dupes. Its combination of tobacco leaf, tonka bean, and genuine vanilla absolute is extraordinarily complex. Of the five dupes we tested, three were laughably distant and two were genuinely interesting on their own terms — but none passed the blind test. If you love Tobacco Vanille, there is no real shortcut. Save up." },
      { type: 'h2', text: 'Oud Wood: Several credible alternatives' },
      { type: 'p', text: "Oud Wood has a more streamlined accord that lends itself better to approximation. Zara's Vibrant Leather and several Arabian house alternatives captured the cardamom-rosewood-oud opening convincingly. The dry-downs diverge — the originals have a richer, more complex base — but at 10% of the price, the opening similarity is remarkable." },
      { type: 'quote', text: "A good dupe should smell like the same perfume wearing different shoes. Not the same pair — but the same person." },
      { type: 'tip', text: "The best time to test a dupe is two hours after application — that is when the base notes have settled and you can really judge the similarity. Opening notes are easy to approximate; base notes are where the real cost of quality shows." },
      { type: 'h2', text: 'The honest verdict' },
      { type: 'p', text: "No dupe is the same as the original. But several are 80-85% of the way there for 10-15% of the price. If you are buying perfume to enjoy privately, a good dupe is perfectly rational. If you are buying it to signal taste or investment to others, the dupe defeats the purpose — and they will likely be able to tell." },
    ],
  },
  {
    id: '4',
    slug: 'perfume-layering-guide',
    title: 'The Art of Perfume Layering: Create Your Signature Scent',
    excerpt: "Layering perfumes is an art form. We'll teach you the rules — and when to break them — to build something completely your own.",
    category: 'Tips',
    author: 'Aisha Mensah',
    authorSlug: 'aisha-mensah',
    date: '2026-04-28',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6b?w=1200&q=85',
    featured: false,
    tags: ['layering', 'tips', 'guide', 'beginner'],
    body: [
      { type: 'p', text: "Every perfumer layers materials to build a fragrance. There is no reason you cannot do the same with finished fragrances. Layering is one of the most powerful ways to personalise your scent, extend longevity, and create something genuinely unique — but it requires understanding a few basic principles before you start spraying things together randomly." },
      { type: 'h2', text: 'The foundation principle' },
      { type: 'p', text: "Apply your heavier, richer fragrance first. Oud, musks, and deep orientals should go on skin before lighter citrus or aquatic fragrances. The heavier scent acts as a base that the lighter scent floats over — this is exactly how fine perfumers structure their accords, and it works just as well when the components are in separate bottles." },
      { type: 'h2', text: 'Classic combinations that work' },
      { type: 'p', text: "Rose with oud is the classic Middle Eastern pairing — the rose softens the animalic edge of the oud while the oud gives the rose depth and longevity. Try applying an oud single-note (or Oud Wood) first, then a rose-forward fragrance like Portrait of a Lady over the top. The result is usually more complex than either alone." },
      { type: 'p', text: "Vanilla with citrus is the other reliable combination. A citrus-forward fragrance on its own tends to have poor longevity — the top notes evaporate quickly. Layering it over a vanilla or musk base dramatically extends how long you will smell the citrus brightness." },
      { type: 'quote', text: "The rule I give to everyone who asks: if the two fragrances share a common note, they will almost certainly layer well. Shared DNA is the easiest path to harmony." },
      { type: 'h2', text: 'The body lotion trick' },
      { type: 'p', text: "Unscented body lotion applied before your fragrance creates a lipid layer that fragrance molecules cling to far better than dry skin. This is one of the easiest longevity hacks in perfumery, and it also softens the overall scent profile slightly — useful if you find a particular fragrance too sharp or too sweet on your skin." },
      { type: 'tip', text: "Start conservative: one spray of each. Layering tends to amplify both fragrances, and it is much easier to add more than to neutralise an overloaded combination." },
    ],
  },
  {
    id: '5',
    slug: 'niche-perfume-brands-to-know',
    title: '12 Niche Perfume Houses You Need to Know in 2026',
    excerpt: "Beyond Creed and Le Labo, there's a whole world of independent perfumers pushing boundaries. These are the ones worth your attention.",
    category: 'Guides',
    author: 'James Harlow',
    authorSlug: 'james-harlow',
    date: '2026-04-20',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=85',
    featured: false,
    tags: ['niche', 'brands', 'guide', 'artisan'],
    body: [
      { type: 'p', text: "The niche fragrance market has exploded. Fifteen years ago, 'niche' meant perhaps two dozen houses whose fragrances were impossible to find outside specialist retailers. Today the category encompasses hundreds of brands at vastly different quality levels. We have done the curation work so you do not have to." },
      { type: 'h2', text: "Frédéric Malle: The editor's house" },
      { type: 'p', text: "Frédéric Malle's concept is unique: he commissioned the world's greatest perfumers and put their names on the bottle. The result is a catalogue of genre-defining works. Portrait of a Lady (Dominique Ropion), Carnal Flower (Dominique Ropion), and Musc Ravageur (Maurice Roucel) are essential. Entry price is steep at around £300+, but these are genuine masterpieces." },
      { type: 'h2', text: 'Le Labo: The minimalists' },
      { type: 'p', text: "Le Labo built a business on the idea that fragrance should be fresh-blended in front of you. Their stripped-back aesthetic and heavy use of natural materials resonates with a post-maximalism sensibility. Santal 33 is their most famous work — it became the unofficial scent of a certain creative-class lifestyle — but Rose 31 and Patchouli 24 are arguably more interesting." },
      { type: 'h2', text: 'Byredo: Scandinavian restraint' },
      { type: 'p', text: "Ben Gorham founded Byredo in Stockholm in 2006 with a background in basketball, not perfumery — a fact that somehow makes the house more interesting. Their fragrances are quiet, considered, and often built around unusual concepts. Bal d'Afrique and Gypsy Water are the signatures, but Bibliothèque deserves more attention than it gets." },
      { type: 'quote', text: "The best niche houses do not chase trends — they create a world and invite you into it. The fragrance is the entry ticket." },
      { type: 'tip', text: "Before buying any niche fragrance, order a sample first. Most online retailers stock 2ml samples for £5-8. The premium over buying blind is the best money you will spend in fragrance." },
      { type: 'h2', text: 'Roja Parfums: Ultra-luxury done right' },
      { type: 'p', text: "Roja Dove is perhaps the most decorated perfumer working today, and his eponymous house is uncompromising in its use of natural materials. Prices start at around £350 and climb towards four figures for the ultra-rare editions. The quality justifies it — these are among the finest fragrances available at any price. Elysium, Reckless, and Enigma are the entry points." },
    ],
  },
  {
    id: '6',
    slug: 'summer-fragrances-2026',
    title: 'The Best Summer Fragrances for 2026',
    excerpt: "Hot days call for fresh, light, and irresistible scents. We've rounded up the finest summer fragrances to keep you smelling incredible in the heat.",
    category: 'Seasonal',
    author: 'Aisha Mensah',
    authorSlug: 'aisha-mensah',
    date: '2026-04-15',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffbb6d0ef44?w=1200&q=85',
    featured: false,
    tags: ['summer', 'fresh', 'guide', 'seasonal'],
    body: [
      { type: 'p', text: "Summer fragrance is a different discipline from the rest of the year. Heat amplifies everything — a fragrance that is perfectly proportioned in winter can become overwhelming in 35°C sun. The best summer fragrances share a common trait: they leave room to breathe." },
      { type: 'h2', text: 'The chemistry of summer fragrance' },
      { type: 'p', text: "Warm skin and hot air accelerate molecular evaporation. Top notes that might last 20 minutes in February will disappear in 5 in August. This means projection is paradoxically higher in summer while overall longevity is lower. Apply more conservatively than you normally would, and expect to reapply more often." },
      { type: 'h2', text: 'Our picks for 2026' },
      { type: 'p', text: "Tom Ford Neroli Portofino remains our benchmark summer fragrance — the bergamot-neroli opening is the olfactory equivalent of a cold drink on a hot day. For something more affordable, Acqua di Gio continues to be one of the finest marine-citrus fragrances ever made. Jo Malone's Lime Basil and Mandarin is the ideal office-safe summer choice." },
      { type: 'quote', text: "Summer is the season for generosity — both in what you wear and how lightly you wear it. A single spray of the right fragrance will do more than three of the wrong one." },
      { type: 'h2', text: 'What to avoid in summer' },
      { type: 'p', text: "Heavy orientals, thick musks, and dense oud fragrances are generally poor summer choices — not because they are inherently wrong, but because heat amplifies their intensity beyond what is comfortable in close quarters. If you love these scents year-round, switch to their lighter iterations in summer: many houses offer lighter EdT versions of their richer EdPs." },
      { type: 'tip', text: "Apply summer fragrances to pulse points that will not be in direct sun — inside the wrists, behind the ears, the backs of the knees. Fragrance exposed to direct sunlight degrades faster and can cause photosensitivity reactions with certain citrus compounds." },
    ],
  },
  {
    id: '7',
    slug: 'how-to-store-perfume',
    title: 'How to Store Your Perfume Collection (The Right Way)',
    excerpt: "Heat, light and air are your perfume's enemies. Learn exactly how to keep your fragrances in perfect condition for years to come.",
    category: 'Tips',
    author: 'Sophie Laurent',
    authorSlug: 'sophie-laurent',
    date: '2026-04-10',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1582402891898-4e73e8b97d2c?w=1200&q=85',
    featured: false,
    tags: ['storage', 'tips', 'beginner', 'care'],
    body: [
      { type: 'p', text: "Fragrance molecules are delicate chemical compounds. Expose them to the wrong conditions and they break down — the scent shifts, discolours, or simply fades. Good storage is not about aesthetics. It is about preserving the investment you have made." },
      { type: 'h2', text: 'The three enemies' },
      { type: 'p', text: "Heat, light, and oxygen are the primary degradation agents. Heat accelerates chemical reactions that break down fragrance molecules. UV light, particularly from direct sunlight, causes photo-oxidation that changes scent profiles dramatically. Oxygen enters through improperly sealed bottles and reacts with the fragrance itself." },
      { type: 'h2', text: 'The bathroom is the worst place' },
      { type: 'p', text: "Most people store fragrance in the bathroom because that is where they use it. This is exactly backwards. Bathrooms combine all three enemies: temperature fluctuations from showers, humidity, and often direct light. A collection stored in a bathroom for five years will be noticeably degraded compared to one stored properly." },
      { type: 'h2', text: 'The correct approach' },
      { type: 'p', text: "Store fragrances in their original boxes in a cool, dark, stable-temperature location. A bedroom drawer or wardrobe shelf is ideal. Temperature consistency matters as much as average temperature — fluctuations cause the fragrance to expand and contract inside the bottle, accelerating oxidation." },
      { type: 'quote', text: "A fragrance stored well in its original box will last decades without significant degradation. The same fragrance left on a sunny windowsill might last two years." },
      { type: 'tip', text: "For fragrances you use rarely, consider decanting a small amount into a sample vial for everyday use. This limits the number of times the main bottle is opened, dramatically reducing oxidation over time." },
    ],
  },
  {
    id: '8',
    slug: 'sillage-longevity-explained',
    title: 'Sillage vs Longevity: What Do They Actually Mean?',
    excerpt: "Two of the most used terms in fragrance — but what do they really mean, how are they measured, and why should you care when buying?",
    category: 'Education',
    author: 'James Harlow',
    authorSlug: 'james-harlow',
    date: '2026-04-05',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1200&q=85',
    featured: false,
    tags: ['education', 'sillage', 'longevity', 'beginner'],
    body: [
      { type: 'p', text: "If you spend any time reading fragrance reviews, you will encounter these two terms constantly. They are often conflated or used interchangeably — incorrectly. Understanding the difference between sillage and longevity will make you a significantly more informed buyer." },
      { type: 'h2', text: 'Longevity: how long it lasts' },
      { type: 'p', text: "Longevity is simple: it measures how long you can still smell the fragrance on your skin after application. A fragrance with poor longevity might last two to three hours. An exceptional one might be detectable 12 to 24 hours later. Longevity is primarily determined by the concentration of aromatic compounds and the specific materials used — heavy base notes like musks, woods, and resins linger far longer than volatile top notes." },
      { type: 'h2', text: 'Sillage: the trail you leave' },
      { type: 'p', text: "Sillage (pronounced see-yazh, from the French for 'wake' or 'slipstream') measures projection — how far from your skin the fragrance travels, and what trail it leaves behind you. High-sillage fragrances announce your presence before you arrive and linger in a room after you leave. Low-sillage fragrances are intimate — detectable only by someone close enough to touch you." },
      { type: 'quote', text: "Neither high sillage nor poor longevity is inherently bad. The right choice depends entirely on context — a date night fragrance and an office fragrance should have completely different sillage profiles." },
      { type: 'h2', text: 'They do not always correlate' },
      { type: 'p', text: "This is where many buyers go wrong. A fragrance can have excellent longevity but low sillage — it stays on your skin for 12 hours but only you can smell it. Conversely, a fragrance can project powerfully for two hours then essentially disappear. Understanding which quality matters more in a given context will save you money and disappointment." },
      { type: 'tip', text: "To test sillage: spray on your wrist, then walk across a room. Ask someone to tell you if they can smell it. To test longevity: apply in the morning and check how it has developed by evening." },
    ],
  },
  {
    id: '9',
    slug: 'office-perfumes-guide',
    title: "The 8 Best Office Perfumes (That Won't Offend Anyone)",
    excerpt: "Finding a fragrance that's professional, pleasant, and not overwhelming is trickier than it sounds. Here's our curated office-approved list.",
    category: 'Guides',
    author: 'Aisha Mensah',
    authorSlug: 'aisha-mensah',
    date: '2026-03-28',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1616739919219-bf4832db0afe?w=1200&q=85',
    featured: false,
    tags: ['office', 'guide', 'work', 'versatile'],
    body: [
      { type: 'p', text: "The office is a shared olfactory space. Your colleagues have not consented to smelling your fragrance choices, and some of them may be sensitive to strong scents. The ideal office fragrance is perceptible to you and those immediately beside you — and essentially invisible to anyone else. That is a tighter brief than most people realise." },
      { type: 'h2', text: 'The office fragrance rules' },
      { type: 'p', text: "One spray, maximum. Apply to the chest rather than the neck to reduce projection. Avoid anything with very high sillage, heavy musks, or dense orientals — these are wonderful fragrances in the right context, but a boardroom is not that context. Fresh, clean, and light are the target qualities." },
      { type: 'h2', text: 'Our recommendations' },
      { type: 'p', text: "Hermès Terre d'Hermès is our top pick for men: the mineral-earthy quality is distinctive without being demanding, and the projection is courteous. Chanel Chance Eau Tendre occupies the same space for women — universally pleasant, expertly balanced, impossible to object to." },
      { type: 'p', text: "Jo Malone's Lime Basil and Mandarin earns its place on this list through sheer restraint. It has enough personality to be interesting and enough quiet to be inoffensive. Bleu de Chanel is another reliable choice — its versatility across contexts is one of its defining strengths." },
      { type: 'quote', text: "The best office fragrance is one that prompts a compliment, not a complaint. That is the entire brief, and it is harder to fulfil than it sounds." },
      { type: 'tip', text: "Keep a travel spray of your office fragrance in your desk and apply just before your most important meetings — not first thing in the morning when you will wear it through a commute that amplifies everything." },
    ],
  },
  {
    id: '10',
    slug: 'fragrance-notes-explained',
    title: 'Top, Heart and Base Notes: The Perfume Pyramid Explained',
    excerpt: "Understanding the three-layer structure of every perfume will transform how you smell, choose, and experience fragrance forever.",
    category: 'Education',
    author: 'Sophie Laurent',
    authorSlug: 'sophie-laurent',
    date: '2026-03-20',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1621634002586-6d26b2fc2b55?w=1200&q=85',
    featured: false,
    tags: ['education', 'notes', 'pyramid', 'beginner'],
    body: [
      { type: 'p', text: "Every fragrance is a story told in three acts. The opening — what you smell first — gives way to the heart, which defines the character of the fragrance, which in turn settles into the base, the memory it leaves. Understanding this structure will transform how you evaluate a fragrance before you buy it." },
      { type: 'h2', text: 'Top notes: the first impression' },
      { type: 'p', text: "Top notes are the most volatile aromatic compounds — they evaporate fastest and are what you smell immediately after application. Citrus notes, light herbs, and certain florals typically occupy this tier. They last anywhere from 15 minutes to an hour. The critical mistake most buyers make: they assess a fragrance only on its top notes, then are surprised when it changes after an hour of wearing." },
      { type: 'h2', text: 'Heart notes: the true character' },
      { type: 'p', text: "Heart notes emerge as the top notes fade, usually within 20-30 minutes of application. They form the core of the fragrance and represent its true personality. Heavier florals, spices, and soft woods typically occupy this tier. The heart notes are what you should evaluate most carefully when testing a fragrance — they are what you will primarily experience after the first hour." },
      { type: 'h2', text: 'Base notes: the memory' },
      { type: 'p', text: "Base notes are the lowest-volatility compounds — they are the last to appear and the longest to linger. Resins, musks, heavy woods, and vanilla typically form the base. They provide depth and longevity to the fragrance as a whole, and they are often what remains on your clothing the next day." },
      { type: 'quote', text: "Never buy a fragrance based on five minutes at a counter. The fragrance you smell there is almost entirely top notes. Come back an hour later, or spray on a card and revisit it when you are elsewhere." },
      { type: 'tip', text: "When testing a new fragrance, apply to your wrist and set a timer for 30 minutes before smelling again. This is the heart note phase — the most honest representation of what the fragrance actually is." },
    ],
  },
  {
    id: '11',
    slug: 'louis-vuitton-imagination-clones',
    title: 'Louis Vuitton Imagination Clones: 7 Dupes That Nail the Scent at a Fraction of the Price',
    excerpt: "LV Imagination is a $320 masterpiece built on rare CO₂-extracted black tea and industrial quantities of Ambroxan. We tested every major clone on the market to find out which ones actually smell the same — and which disappoint.",
    category: 'Dupes',
    author: 'James Harlow',
    authorSlug: 'james-harlow',
    date: '2026-05-19',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffbb6d0ef44?w=1200&q=85',
    featured: true,
    tags: ['louis-vuitton', 'imagination', 'dupe', 'clone', 'ambroxan', 'citrus'],
    body: [
      { type: 'p', text: "Louis Vuitton Imagination — launched in 2021 by Master Perfumer Jacques Cavallier Belletrud — has become one of the most-cloned fragrances of the decade. At $320 for 100ml (available exclusively at LV boutiques), it sits well beyond what most people will spend on a bottle of perfume. And yet the fragrance community can't stop talking about it. Clones have multiplied in its wake, from Dubai attar houses to US-based indie perfumers, all chasing the same sparkling citrus-tea-ambroxan blueprint. We tested seven of the most discussed to find out which ones actually deliver." },
      { type: 'h2', text: "What makes Imagination worth understanding" },
      { type: 'p', text: "Before you can evaluate any clone, you need to know what you are chasing. Imagination opens with a genuinely natural-smelling burst of bergamot, citron, and Sicilian orange — not the synthetic lemon-cleaner effect that plagues lesser citrus fragrances, but something that smells like the actual rind of a fruit being zested in Mediterranean sunlight. Within 20 minutes, Nigerian ginger and Tunisian neroli soften the citrus edges into something warm, slightly floral, and remarkably soapy in the most elegant way imaginable." },
      { type: 'p', text: "The base is where Imagination earns its reputation. Cavallier Belletrud used CO₂-extracted Chinese black tea — a rare and expensive process that preserves the dry, grassy, faintly smoky soul of the leaf rather than the generic 'tea note' found in mass-market fragrances. Over this sits an unusually high concentration of Ambroxan, the synthetic molecule derived from ambergris that creates a crystalline, skin-like warmth and is primarily responsible for Imagination's remarkable 8–12 hour longevity on skin. Most citrus fragrances evaporate within three hours. Imagination does not." },
      { type: 'quote', text: "The only fragrance where I get a compliment almost every time I wear it. The Ambroxan aura just radiates off you all day." },
      { type: 'p', text: "That is the technical case for Imagination. The commercial reality is that at $320, it is priced as a luxury object — part fragrance, part Louis Vuitton status signal. The question the fragrance community has been asking since 2021 is: can you get 90% of the experience for $30? After extensive testing, the honest answer is: sometimes. Here is what we found." },
      { type: 'h2', text: "1. Arabiyat Prestige Marwa — The Closest Scent Match" },
      { type: 'p', text: "Community consensus consistently places Marwa at the top of the accuracy rankings. The note pyramid is virtually identical — bergamot, citron, and orange on top; ginger, neroli, and cinnamon in the heart; ambroxan, guaiac wood, and olibanum in the base. On skin, the resemblance is striking enough that a blind sniff test would confuse many people who have not worn the original side-by-side. The opening citrus burst is slightly less vibrant — a touch more synthetic — but the heart and drydown genuinely capture the spirit of Imagination." },
      { type: 'p', text: "The significant caveat is performance variability. Some batches deliver 6–8 hours on skin; others become a skin scent within two hours. At ~$45 for 100ml on Amazon, Jomashop, and FragranceNet, Marwa is the obvious first stop for anyone seeking a 1:1 clone. Buy it expecting the scent to be right; do not buy it expecting Imagination's longevity guarantee." },
      { type: 'h3', text: "Verdict: Best scent accuracy. Inconsistent longevity. Price: ~$45." },
      { type: 'h2', text: "2. Jo Milano Paris Game of Spades Full House — The 98% Match" },
      { type: 'p', text: "Game of Spades Full House carries one of the most precise fragrance similarity scores we have seen: 98% on Fragplace's comparison tool. The note list is note-for-note identical to Imagination — down to the provenance labels (Nigerian ginger, Tunisian neroli, Calabrian bergamot, Chinese black tea, Ceylon cinnamon). Released in 2024, it represents the most technically deliberate Imagination clone on the market." },
      { type: 'p', text: "In practice, the opening is marginally soapier and less spicy — the cinnamon and ginger are slightly muted in the first 15 minutes before the fragrance finds its stride. After 30 minutes, the resemblance is close enough to be genuinely impressive. Longevity is around 6 hours — shorter than Imagination but respectable for this price category. Available at Jomashop for as little as $20 on sale, it represents extraordinary value for what it delivers." },
      { type: 'h3', text: "Verdict: Technically closest formula. Excellent value. Price: ~$20–$50." },
      { type: 'h2', text: "3. Volaré Arctic Breeze — The Stealth Challenger" },
      { type: 'p', text: "Volaré is a sister brand of Lattafa — one of the most respected Middle Eastern fragrance houses. Arctic Breeze carries the identical note pyramid to Imagination and is generating some of the most enthusiastic reviews in the TikTok fragrance community, where it has been described as 'the best Imagination clone I have ever smelled.' The opening requires patience — there is a slightly sharp, synthetic edge for the first 15–20 minutes before the fragrance settles into recognisably Imagination territory. Once it does, the drydown is excellent." },
      { type: 'p', text: "At $30–$45 on The Oud Store or eBay, Arctic Breeze is our pick for the best combination of scent accuracy, performance, and brand pedigree. Being a Lattafa-adjacent product means quality control is more reliable than some smaller clone houses." },
      { type: 'tip', text: "Wait 20 minutes before judging Arctic Breeze. The opening has a slight harshness that fades completely — the drydown is where this fragrance proves itself." },
      { type: 'h3', text: "Verdict: Best for TikTok-era fragrance fans. Reliable quality. Price: ~$30–$45." },
      { type: 'h2', text: "4. ALT. Fragrances Reality — The American Alternative" },
      { type: 'p', text: "ALT. Fragrances is a US-based house positioning itself as a premium alternative to Middle Eastern clone brands. Reality is their Imagination interpretation, available as an Extrait de Parfum concentration — which means more fragrance oil per spray and theoretically better longevity. At ~$49 for 60ml, it is more expensive than the Dubai alternatives per millilitre, but the branding is sophisticated, the materials are US-sourced, and reviewers consistently describe the scent as 'exactly like the real deal.'" },
      { type: 'p', text: "Reality is the obvious choice if you want an Imagination alternative with clean, Western brand aesthetics — no Arabic calligraphy on the box, no heavy oud undertones in the accord, just a straight interpretation of the original. Longevity is 6–8 hours, which is competitive with most of the field." },
      { type: 'h3', text: "Verdict: Best for US buyers who prefer Western brand aesthetics. Price: ~$49/60ml." },
      { type: 'h2', text: "5. Khadlaj Karus Blu Spice — The Longevity Surprise" },
      { type: 'p', text: "Karus Blu Spice is not the closest scent match — at roughly 70–80% similarity, it is more 'inspired by' than 'clone of.' The opening diverges from Imagination's pure citrus blast, leaning heavier on cinnamon and tea from the start. But here is the statistic that demands attention: multiple independent reviewers report 12 hours of longevity on bare skin. From a $28 fragrance available at Walmart." },
      { type: 'p', text: "If your primary frustration with citrus fragrances is that they disappear by lunchtime, Karus Blu Spice is the answer — even if it is not a 1:1 replica of Imagination. One Fragrantica reviewer: 'Trust me, this is the best imagination clone I have put my nose on.' A separate reviewer qualifies that statement: 'Best for longevity — not the closest scent.' Both are right." },
      { type: 'h3', text: "Verdict: Best longevity of any clone tested. 70–80% scent match. Price: ~$28." },
      { type: 'h2', text: "6. Ard Al Zaafaran Saheb Intense — The Budget Entry Point" },
      { type: 'p', text: "Saheb Intense has the identical note list to Imagination — same provenance labels, same structure. At $15–$25 for 70ml, it is the cheapest way to know what Imagination smells like. Scent accuracy is approximately 90% — the citrus opening and spiced heart are genuinely impressive for the price point. The drydown captures the black tea character, though with less Ambroxan depth than the original." },
      { type: 'p', text: "The critical problem is performance. Projection is weak — under half a metre — and the fragrance flattens out within 2–3 hours, losing the radiating Ambroxan aura that makes Imagination so addictive to wear. Think of Saheb Intense as a 'sample' of Imagination: it tells you what the DNA smells like, but it cannot replicate the full wearing experience." },
      { type: 'h3', text: "Verdict: Best for first-time testers on a strict budget. Not a daily driver. Price: ~$15–$25." },
      { type: 'h2', text: "7. Maison Alhambra Jean Lowe Fantasme — The Closest, Most Frustrating Clone" },
      { type: 'p', text: "Jean Lowe Fantasme is the newest entry on this list (2026) and, by scent accuracy alone, arguably the best. Multiple reviewers describe it as 'virtually indistinguishable' from Imagination, and at least one side-by-side test rates it as slightly more accurate than Arabiyat Prestige Marwa. The note structure is identical. The execution is remarkable for a $30–$43 fragrance." },
      { type: 'p', text: "And then the longevity problem. Fantasme has the worst performance of any Imagination clone we tested — significantly worse than the original and worse than every other clone on this list. For a fragrance that lives and breathes through its Ambroxan base, running out of steam in 2–3 hours is a fundamental failure. It is the most heartbreaking result on this list: the right scent, entirely the wrong staying power. Worth sampling. Not worth buying as a daily driver until Maison Alhambra improves the formula." },
      { type: 'quote', text: "Most accurate clone I have ever smelled — and the longevity absolutely sucks. The worst of all the Imagination clones on this metric. It is genuinely maddening." },
      { type: 'h3', text: "Verdict: Highest scent accuracy, catastrophic longevity. A cautionary tale. Price: ~$30–$43." },
      { type: 'h2', text: "So is the original worth $320?" },
      { type: 'p', text: "The honest answer is: it depends what you are buying. As a fragrance — a liquid that smells good — Imagination is exceptional but not irreplaceable. The clones in this list collectively demonstrate that its DNA can be approximated at under $50. If smelling like Imagination is the goal, you do not need to spend $320 to achieve it." },
      { type: 'p', text: "But Imagination offers things the clones cannot. The CO₂-extracted black tea accord smells genuinely different from the versions in the clones — more nuanced, more alive, with a subtle grassy smokiness that the cheaper alternatives flatten. The Ambroxan concentration is higher, giving the 8–12 hour longevity that no clone fully matches. And there is the object itself: the bottle, the LV packaging, the boutique experience. For fragrance enthusiasts who understand and appreciate the craft, Imagination is worth buying at least once. For everyone else, the clones deliver." },
      { type: 'tip', text: "Our recommended buying strategy: start with Ard Al Zaafaran Saheb Intense (~$20) to test whether you actually like the Imagination DNA. If you love it, upgrade to Arabiyat Prestige Marwa or Volaré Arctic Breeze for daily wear. Save the LV original for special occasions — or save up for the bottle if you want the full experience." },
    ],
  },
];

export const AUTHORS = [
  {
    slug: 'sophie-laurent',
    name: 'Sophie Laurent',
    bio: 'Sophie has been writing about fragrance for 8 years and has reviewed over 600 perfumes. She specialises in niche houses and luxury oriental fragrance.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    twitter: '@sophiescent',
  },
  {
    slug: 'james-harlow',
    name: 'James Harlow',
    bio: 'A former perfume buyer for a London department store, James brings insider knowledge and a razor-sharp nose to every review.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    twitter: '@jamesharlow',
  },
  {
    slug: 'aisha-mensah',
    name: 'Aisha Mensah',
    bio: 'Aisha is a certified perfumer and fragrance educator. She loves finding brilliant budget options and making perfume accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    twitter: '@aishamensah',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAuthorBySlug(slug: string) {
  return AUTHORS.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return ARTICLES.filter((a) => a.featured);
}

export function getRecentArticles(count = 6): Article[] {
  return ARTICLES.slice(0, count);
}

export function getArticlesByCategory(category: string): Article[] {
  return ARTICLES.filter((a) => a.category.toLowerCase() === category.toLowerCase());
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return ARTICLES
    .filter((a) => a.slug !== slug && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, count);
}
