export default defineEventHandler(async (event) => {
  // In Nuxt, we can use $fetch to call other internal API routes
  const projects = await $fetch('/api/v1/projects');
  
  return {
    relatedProjectsHeading: "Related Projects",
    relatedProjects: projects,
  };
});
