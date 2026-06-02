export default defineEventHandler((event) => {
  const query = getQuery(event);
  const limit = query.limit ? Number(query.limit) : undefined;
  const lang = query.lang ? String(query.lang) : undefined;
  const sortDesc = (arr) => [...arr].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  
  let data = query.type === 'private' ? privates : (query.type === 'all' ? postsList : posts);
  
  if (lang) {
    data = data.filter(p => p.lang === lang);
  }
  
  data = sortDesc(data);
  return limit ? data.slice(0, limit) : data;
});