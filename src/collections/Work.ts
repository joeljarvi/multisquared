import { CollectionConfig } from 'payload'

export const Work: CollectionConfig = {
  slug: 'work',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'year', 'category', 'order'],
  },
  timestamps: true, // adds createdAt / updatedAt
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { position: 'sidebar' },
    },

    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'client',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'textarea',
      required: true,
    },

    {
      name: 'category',
      type: 'text',
    },

    {
      name: 'year',
      type: 'text',
      admin: { width: '50%' },
    },

    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Lower = earlier in list',
      },
    },

    {
      name: 'images',
      type: 'array',
      label: 'Gallery',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },

    {
      name: 'credits',
      type: 'textarea',
    },
  ],
}
