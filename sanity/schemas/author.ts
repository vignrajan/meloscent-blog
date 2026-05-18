export default {
  name: 'author',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'photo', type: 'image' },
    { name: 'bio', type: 'text', validation: (R: any) => R.max(300) },
    { name: 'specialisation', type: 'string' },
    { name: 'linkedin', type: 'url' },
    { name: 'instagram', type: 'url' },
  ],
};
