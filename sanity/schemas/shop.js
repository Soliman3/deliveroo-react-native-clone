export default ({
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Shop name',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'short description',
      validation: (Rule)=> Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Shop Image',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Shop Latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Shop Longitude',
    },
    {
      name: 'address',
      type: 'string',
      title: 'shop address',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter Rating between (1-5 stars)',
      validation: (Rule)=> Rule.required().min(1).max(5).error("Enter value between one and five"),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Section',
      type: 'reference',
      to: [{type: 'section'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    },
  ],
})
