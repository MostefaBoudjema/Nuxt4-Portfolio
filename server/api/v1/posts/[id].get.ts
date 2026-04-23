export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Post ID is required',
    });
  }

  // Find post by id or slug in the postsList array
  // Added defensive check for p to avoid potential "Cannot read properties of undefined"
  const post = (postsList || []).find((p: any) =>
    p && (String(p.id) === id || p.slug === id)
  );

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: `Post ${id} not found`,
    });
  }
  
  return post;
});
