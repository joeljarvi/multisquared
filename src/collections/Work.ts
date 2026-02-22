import { CollectionConfig } from 'payload'

export const Work: CollectionConfig = {
  slug: 'work',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'year', 'category'],
  },
  timestamps: true,
  fields: [
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
      type: 'select',
      options: [
        { label: 'Photo', value: 'photo' },
        { label: 'Video', value: 'video' },
        { label: 'Art Direction', value: 'art-direction' },
        { label: 'Production', value: 'production' },
        { label: 'Concept', value: 'concept' },
      ],
      required: true,
      admin: { width: '50%' },
    },

    {
      name: 'year',
      type: 'text',
      admin: { width: '50%' },
    },

    {
      name: 'media',
      type: 'array',
      label: 'Gallery',
      fields: [
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Supports images and videos',
          },
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
