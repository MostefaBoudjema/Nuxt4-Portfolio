export default defineEventHandler((event) => {
  const query = getQuery(event);
  const lang = query.lang ? String(query.lang) : 'en';

  return servicesList.map((service: any) => {
    const localeData = service.locales[lang] || service.locales['en'];
    return {
      slug: service.slug,
      icon: service.icon,
      gradient: service.gradient,
      color: service.color,
      meta: localeData.meta,
      hero: localeData.hero
    };
  });
});
