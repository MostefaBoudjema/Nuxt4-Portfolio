export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  
  // Find post by id or slug in the postsList array
  const post = postsList.find((p: any) => 
    String(p.id) === id || p.slug === id
  );
  
  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: `Post ${id} not found`,
    });
  }
  
  return post;
});
