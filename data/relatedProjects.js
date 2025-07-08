// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

import projects from '@/data/projects';

const relatedProject = {
    relatedProjectsHeading: "Related Projects", // Use as translation key in component
    relatedProjects: projects,
};

export default relatedProject;
