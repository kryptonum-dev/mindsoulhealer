import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'Prosta lista z wezwaniem do działania';
const icon = () => '📜';

export default defineField({
  name: 'SimpleGridList',
  icon,
  title,
  type: 'document',
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Nagłówek sekcji',
      type: 'sectionHeading',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Obraz',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista paragrafów',
      validation: Rule => Rule.required().min(2).max(6).error('Lista musi zawierać od 2 do 6 elementów'),
      of: [
        defineField({
          name: 'paragraph',
          type: 'markdown',
          title: 'Paragraf',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'preCtaText',
      type: 'markdown',
      title: 'Tekst przed wezwaniem do działania',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'ctaButton',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeading.heading',
      subheading: 'sectionHeading.subheading',
      icon: 'icon',
    },
    prepare: ({ heading, subheading, icon }) => ({
      title: removeMarkdown(heading),
      subtitle: removeMarkdown(subheading),
      media: icon,
    }),
  },
});
