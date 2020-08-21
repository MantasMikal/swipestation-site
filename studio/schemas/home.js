import { MdMenu } from 'react-icons/md'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: MdMenu,
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'hero',
      title: 'Hero Image',
      type: 'figure'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      description: 'Extra sections for the homepage',
      of: [{ type: 'section' }]
    },
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'array',
      of: [{ type: 'card' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title = 'Home Page' }) {
      return {
        title: title
      }
    }
  }
}
