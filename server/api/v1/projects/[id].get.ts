export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  
  // Find project by id or link in the allProjects array
  const project = allProjects.find((p: any) => 
    String(p.id) === id || p.link === id
  );
  
  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project ${id} not found`,
    });
  }

  
  return project;
});
