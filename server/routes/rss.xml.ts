import RSS from 'rss';
import { defineEventHandler, appendHeader } from 'h3';

export default defineEventHandler(async (event) => {
    // Fetch all posts from your data source or API
    // Since we are in Nitro server context, we can import from server utils
    // Or call our own API
    const posts = await $fetch('/api/v1/posts');

    const feed = new RSS({
        title: 'Mostefa Boudjema Blog',
        description: 'Latest blog posts about Laravel, Vue.js, and Web Development.',
        feed_url: 'https://mostefa-webdev.vercel.app/rss.xml',
        site_url: 'https://mostefa-webdev.vercel.app',
        language: 'en',
    });

    if (Array.isArray(posts)) {
        posts.filter((post: any) => post.published && !post.private).forEach((post: any) => {
            feed.item({
                title: post.title,
                description: post.summary || post.excerpt || '',
                url: `https://mostefa-webdev.vercel.app/blog/${post.slug}`,
                date: post.date,
                author: post.author?.name || 'Mostefa Boudjema',
            });
        });
    }

    appendHeader(event, 'Content-Type', 'application/xml');
    return feed.xml({ indent: true });
});
