export default defineEventHandler((event) => {
  const query = getQuery(event);
  if (query.type === 'private') {
    return privates;
  }
  if (query.type === 'all') {
    return postsList;
  }
  return posts;
});