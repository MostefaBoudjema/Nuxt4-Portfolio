
export const useJsonLd = () => {
  const runtimeConfig = useRuntimeConfig();
  const { t, locale } = useI18n();

  const generatePersonSchema = (configs) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: configs.name,
      jobTitle: t(configs.jobTitle || 'Job Title4'),
      url: 'https://mostefaboudjema.com', // Replace with actual domain if known
      image: `https://mostefaboudjema.com${configs.profile_photo}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Annaba',
        addressCountry: 'DZ'
      },
      email: configs.contacts.find(c => c.icon === 'mail')?.name,
      telephone: configs.contacts.find(c => c.icon === 'phone')?.name,
      sameAs: configs.socials.map(s => s.link).filter(l => l && l !== 'Telegram'), // Filter out placeholders
      description: t('AboutMe1')
    };
  };

  const generateProjectSchema = (project) => {
    if (!project) return null;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.projectInfo?.objectivesDetails ? t(project.projectInfo.objectivesDetails) : project.title,
      image: `https://mostefaboudjema.com${project.img}`,
      author: {
        '@type': 'Person',
        name: 'Mostefa Boudjema'
      },
      datePublished: project.singleProjectHeader?.singleProjectDate,
      genre: project.category,
      keywords: project.projectInfo?.technologies?.[0]?.techs?.join(', ')
    };

    // If it's a web app, we can be more specific
    if (project.category?.toLowerCase().includes('app') || project.category?.toLowerCase().includes('application')) {
      schema['@type'] = 'SoftwareApplication';
      schema['applicationCategory'] = 'WebApplication';
      schema['operatingSystem'] = 'Web';
    }

    return schema;
  };

  const usePersonJsonLd = (configs) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(generatePersonSchema(configs))
        }
      ]
    });
  };

  const useProjectJsonLd = (project) => {
    if (!project) return;
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(generateProjectSchema(project))
        }
      ]
    });
  };

  return {
    generatePersonSchema,
    generateProjectSchema,
    usePersonJsonLd,
    useProjectJsonLd
  };
};
