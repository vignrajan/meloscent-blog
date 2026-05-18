export const featuredArticleQuery = `
  *[_type == "article" && isFeatured == true] | order(publishedAt desc) [0] {
    title, slug, heroImage, heroImageAlt, publishedAt,
    "excerpt": array::join(string::split(pt::text(body), "")[0..200], ""),
    author->{ name, slug, photo },
    category->{ name, slug, colorKey }
  }
`;

export const recentArticlesQuery = (limit = 9) => `
  *[_type == "article"] | order(publishedAt desc) [0...${limit}] {
    title, slug, heroImage, publishedAt,
    author->{ name, slug, photo },
    category->{ name, slug, colorKey }
  }
`;

export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    title, slug, heroImage, heroImageAlt, publishedAt, metaDescription, body,
    tags, affiliateProducts,
    author->{ name, slug, photo, bio, specialisation },
    category->{ name, slug, colorKey }
  }
`;

export const articlesByCategoryQuery = `
  *[_type == "article" && category->slug.current == $category]
  | order(publishedAt desc) [0...$limit] {
    title, slug, heroImage, publishedAt,
    author->{ name, slug, photo },
    category->{ name, slug, colorKey }
  }
`;

export const authorBySlugQuery = `
  *[_type == "author" && slug.current == $slug][0] {
    name, slug, photo, bio, specialisation, linkedin, instagram
  }
`;
