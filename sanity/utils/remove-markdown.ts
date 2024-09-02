export const removeMarkdown = (markdown: string) =>
  markdown?.replace(/\*\*(.*?)\*\*|\*(.*?)\*/g, '$1$2').replace(/(&nbsp;)+/g, ' ');
