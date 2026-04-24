export const useJsonLd = () => {
  const runtimeConfig = useRuntimeConfig();
  const { t, locale } = useI18n();

  const generatePersonSchema = (configs) => {
    const contacts = configs.contacts || [];
    const socials = configs.socials || [];
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: configs.name,
      jobTitle: t(configs.jobTitle || 'Job Title4'),
      url: 'https://mostefaboudjema.com', // Replace with actual domain if known
      image: configs.profile_photo ? `https://mostefaboudjema.com${configs.profile_photo}` : undefined,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Annaba',
        addressCountry: 'DZ'
      },
      email: contacts.find(c => c.icon === 'mail')?.name,
      telephone: contacts.find(c => c.icon === 'phone')?.name,
      sameAs: socials.map(s => s.url || s.link).filter(l => l && !l.includes('Telegram')),
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

  const usePersonJsonLd = async (configs) => {
    const personConfigs = ref(configs);

    useHead(() => ({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(generatePersonSchema(personConfigs.value))
        }
      ]
    }));

    // If contacts/socials are missing, try to fetch them to enrich the schema
    if (!configs.contacts || !configs.socials) {
      try {
        const [ contacts, socials ] = await Promise.all([
          $fetch('/api/v1/contacts'),
          $fetch('/api/v1/social-links')
        ]);
        personConfigs.value = { ...personConfigs.value, contacts, socials };
      } catch (e) {
        console.error('Failed to fetch contacts/socials for JSON-LD:', e);
      }
    }
  };

  const useProjectJsonLd = (project) => {
    useHead(() => {
      const p = typeof project === 'function' ? project() : (project.value || project);
      if (!p) return {};
      
      return {
        script: [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(generateProjectSchema(p))
          }
        ]
      };
    });
  };

  return {
    generatePersonSchema,
    generateProjectSchema,
    usePersonJsonLd,
    useProjectJsonLd
  };
};
