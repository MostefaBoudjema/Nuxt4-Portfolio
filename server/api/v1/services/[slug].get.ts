export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const query = getQuery(event);
  const lang = query.lang ? String(query.lang) : 'en';

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Service Slug is required' });
  }

  const service = servicesList.find((s: any) => s.slug === slug);
  if (!service) {
    throw createError({ statusCode: 404, statusMessage: `Service ${slug} not found` });
  }

  const localeData = service.locales[lang] || service.locales['en'];
  return {
    slug: service.slug,
    icon: service.icon,
    gradient: service.gradient,
    color: service.color,
    ...localeData
  };
});
