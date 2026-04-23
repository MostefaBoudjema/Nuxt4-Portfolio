export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Project ID is required',
    });
  }

  // Find project by id or link in the allProjects array
  // Added defensive check for p to avoid "Cannot read properties of undefined (reading 'id')"
  const project = (allProjects || []).find((p: any) =>
    p && (String(p.id) === id || p.link === id)
  );

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project ${id} not found`,
    });
  }

  
  return project;
});
