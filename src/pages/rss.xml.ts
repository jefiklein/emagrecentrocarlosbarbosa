import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sortedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Blog Emagrecentro Carlos Barbosa',
    description:
      'Dicas de emagrecimento, nutrição, saúde e bem-estar. Conteúdo exclusivo da Emagrecentro Carlos Barbosa.',
    site: context.site || 'https://emagrecentrocarlosbarbosa.com.br',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
      categories: post.data.tags,
    })),
    customData: `<language>pt-BR</language>`,
  });
}
