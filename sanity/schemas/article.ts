export default {
  name: 'article',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: (R: any) => R.required().max(100) },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'heroImage', type: 'image', options: { hotspot: true } },
    { name: 'heroImageAlt', type: 'string' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'metaDescription', type: 'string', validation: (R: any) => R.max(160) },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'isFeatured', type: 'boolean' },
    { name: 'isBreaking', type: 'boolean' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'affiliateProducts',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'productName', type: 'string' },
          { name: 'productSlug', type: 'string' },
          { name: 'price', type: 'string' },
          { name: 'buttonLabel', type: 'string', initialValue: 'Buy Now' },
        ],
      }],
    },
  ],
};
