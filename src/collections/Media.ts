import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },

    {
      name: 'externalUrl',
      type: 'text',
      label: 'Supabase Image URL',
    },
  ],
  upload: true,
}
