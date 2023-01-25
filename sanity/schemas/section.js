export default ({
  name: 'section',
  title: 'Section Menu',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Section name',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Section Image',
    },
  ],
})
