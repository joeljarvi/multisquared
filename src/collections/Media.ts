import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',

  access: {
    read: () => true,
  },

  upload: true,

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'externalUrl',
      type: 'text',
      label: 'Large Image URL (Supabase)',
      admin: {
        description: 'Use this for images over 5MB or uploaded directly to Supabase',
      },
    },
  ],
}
