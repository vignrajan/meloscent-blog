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
  content?: string;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'baccarat-rouge-540-review',
    title: 'Baccarat Rouge 540: Why Everyone Is Wearing the Same Perfume',
    excerpt: 'The fragrance that took over the world — we break down why MFK\'s masterpiece has become a cultural phenomenon and whether it still deserves the hype.',
    category: 'Reviews',
    author: 'Sophie Laurent',
    authorSlug: 'sophie-laurent',
    date: '2026-05-10',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80',
    featured: true,
    tags: ['baccarat-rouge', 'mfk', 'review', 'luxury'],
  },
  {
    id: '2',
    slug: 'best-oud-fragrances-2026',
    title: 'The 10 Best Oud Fragrances of 2026, Ranked',
    excerpt: 'From the affordable to the astronomical, we\'ve tested every major oud release. Here\'s our definitive guide to the most captivating resinous scents.',
    category: 'Guides',
    author: 'James Harlow',
    authorSlug: 'james-harlow',
    date: '2026-05-08',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&q=80',
    featured: true,
    tags: ['oud', 'guide', 'ranking', 'niche'],
  },
  {
    id: '3',
    slug: 'dupe-guide-tom-ford',
    title: 'Tom Ford Dupes That Actually Smell the Same',
    excerpt: 'We compared 15 budget alternatives to Tom Ford\'s Private Blend collection. Some were shockingly close — others were embarrassingly far off.',
    category: 'Dupes',
    author: 'Sophie Laurent',
    authorSlug: 'sophie-laurent',
    date: '2026-05-05',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80',
    featured: false,
    tags: ['dupes', 'tom-ford', 'budget', 'comparison'],
  },
  {
    id: '4',
    slug: 'perfume-layering-guide',
    title: 'The Art of Perfume Layering: Create Your Signature Scent',
    excerpt: 'Layering perfumes is an art form. We\'ll teach you the rules — and when to break them — to build something completely your own.',
    category: 'Tips',
    author: 'Aisha Mensah',
    authorSlug: 'aisha-mensah',
    date: '2026-04-28',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6b?w=800&q=80',
    featured: false,
    tags: ['layering', 'tips', 'guide', 'beginner'],
  },
  {
    id: '5',
    slug: 'niche-perfume-brands-to-know',
    title: '12 Niche Perfume Houses You Need to Know in 2026',
    excerpt: 'Beyond Creed and Le Labo, there\'s a whole world of independent perfumers pushing boundaries. These are the ones worth your attention.',
    category: 'Guides',
    author: 'James Harlow',
    authorSlug: 'james-harlow',
    date: '2026-04-20',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
    featured: false,
    tags: ['niche', 'brands', 'guide', 'artisan'],
  },
  {
    id: '6',
    slug: 'summer-fragrances-2026',
    title: 'The Best Summer Fragrances for 2026',
    excerpt: 'Hot days call for fresh, light, and irresistible scents. We\'ve rounded up the finest summer fragrances to keep you smelling incredible in the heat.',
    category: 'Seasonal',
    author: 'Aisha Mensah',
    authorSlug: 'aisha-mensah',
    date: '2026-04-15',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffbb6d0ef44?w=800&q=80',
    featured: false,
    tags: ['summer', 'fresh', 'guide', 'seasonal'],
  },
  {
    id: '7',
    slug: 'how-to-store-perfume',
    title: 'How to Store Your Perfume Collection (The Right Way)',
    excerpt: 'Heat, light and air are your perfume\'s enemies. Learn exactly how to keep your fragrances in perfect condition for years to come.',
    category: 'Tips',
    author: 'Sophie Laurent',
    authorSlug: 'sophie-laurent',
    date: '2026-04-10',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1582402891898-4e73e8b97d2c?w=800&q=80',
    featured: false,
    tags: ['storage', 'tips', 'beginner', 'care'],
  },
  {
    id: '8',
    slug: 'sillage-longevity-explained',
    title: 'Sillage vs Longevity: What Do They Actually Mean?',
    excerpt: 'Two of the most used terms in fragrance — but what do they really mean, how are they measured, and why should you care when buying?',
    category: 'Education',
    author: 'James Harlow',
    authorSlug: 'james-harlow',
    date: '2026-04-05',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80',
    featured: false,
    tags: ['education', 'sillage', 'longevity', 'beginner'],
  },
  {
    id: '9',
    slug: 'office-perfumes-guide',
    title: 'The 8 Best Office Perfumes (That Won\'t Offend Anyone)',
    excerpt: 'Finding a fragrance that\'s professional, pleasant, and not overwhelming is trickier than it sounds. Here\'s our curated office-approved list.',
    category: 'Guides',
    author: 'Aisha Mensah',
    authorSlug: 'aisha-mensah',
    date: '2026-03-28',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1616739919219-bf4832db0afe?w=800&q=80',
    featured: false,
    tags: ['office', 'guide', 'work', 'versatile'],
  },
  {
    id: '10',
    slug: 'fragrance-notes-explained',
    title: 'Top, Heart and Base Notes: The Perfume Pyramid Explained',
    excerpt: 'Understanding the three-layer structure of every perfume will transform how you smell, choose, and experience fragrance forever.',
    category: 'Education',
    author: 'Sophie Laurent',
    authorSlug: 'sophie-laurent',
    date: '2026-03-20',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1621634002586-6d26b2fc2b55?w=800&q=80',
    featured: false,
    tags: ['education', 'notes', 'pyramid', 'beginner'],
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
