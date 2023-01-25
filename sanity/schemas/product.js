export default ({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule)=> Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Dish Price in Dollar',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Dish Image',
    },
  ]
})
