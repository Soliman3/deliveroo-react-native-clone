export default ({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured section name',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule)=> Rule.max(200),
    },
    {
      name: 'shops',
      type: 'array',
      title: 'Shops',
      of: [{type: 'reference', to: [{type: 'shop'}]}],
      },
  ]
})
