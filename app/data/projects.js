
// Define all smallImages as constants for reuse
const SMALL_IMAGE_URLS={
  react: {
    alt: "react",
    src: '/images/technology/react.webp',
    width: '60px',
  },
  api: {
    alt: "api",
    src: '/images/technology/api.webp',
    width: '60px',
  },
  bootstrap: {
    alt: "bootstrap",
    src: '/images/technology/bootstrap.webp',
    width: '60px',
  },
  laravel: {
    alt: "laravel",
    src: '/images/technology/laravel.webp',
    width: '60px',
  },
  php: {
    alt: "php",
    src: '/images/technology/php.webp',
    width: '60px',
  },
  jquery: {
    alt: "jquery",
    src: '/images/technology/jquery.webp',
    width: '60px',
  },
  wordpress: {
    alt: "wordpress",
    src: '/images/technology/wordpress.webp',
    width: '60px',
  },
  vue: {
    alt: "vue",
    src: '/images/technology/vue.webp',
    width: '60px',
  },
  tailwind: {
    alt: "tailwind",
    src: '/images/technology/tailwind.webp',
    width: '60px',
  },
  next: {
    alt: "next",
    src: '/images/technology/next.webp',
    width: '60px',
  },
  nuxt: {
    alt: "nuxt",
    src: '/images/technology/nuxt.webp',
    width: '60px',
  },
  supabase: {
    alt: "supabase",
    src: '/images/technology/supabase.webp',
    width: '60px',
  },
  firebase: {
    alt: "firebase",
    src: '/images/technology/firebase.webp',
    width: '60px',
  },
};

// Define all project images as constants for reuse
const PROJECT_IMAGE_URLS={
  mymviez: {
    img: '/images/projects/movie-db/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/movie-db/0.webp' },
      { id: 1, img: '/images/projects/movie-db/1.webp' },
      { id: 2, img: '/images/projects/movie-db/2.webp' },
      { id: 3, img: '/images/projects/movie-db/3.webp' },
      { id: 4, img: '/images/projects/movie-db/4.webp' },
      { id: 5, img: '/images/projects/movie-db/5.webp' },
      { id: 6, img: '/images/projects/movie-db/6.webp' },
      { id: 7, img: '/images/projects/movie-db/7.webp' },
    ],
  },
  tamtamtools: {
    img: '/images/projects/tamtamtools/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/tamtamtools/0.webp' },
      { id: 1, img: '/images/projects/tamtamtools/1.webp' },
      { id: 2, img: '/images/projects/tamtamtools/2.webp' },
      { id: 3, img: '/images/projects/tamtamtools/3.webp' },
    ],
  },
  elearn: {
    img: '/images/projects/Elearn/1.webp',
    projectImages: [
      { id: 1, img: '/images/projects/Elearn/1.webp' },
      { id: 2, img: '/images/projects/Elearn/2.webp' },
      { id: 3, img: '/images/projects/Elearn/3.webp' },
    ],
  },
  iauto: {
    img: '/images/projects/iauto/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/iauto/0.webp' },
      { id: 1, img: '/images/projects/iauto/1.webp' },
      { id: 2, img: '/images/projects/iauto/2.webp' },
      { id: 3, img: '/images/projects/iauto/3.webp' },
      { id: 4, img: '/images/projects/iauto/4.webp' },
      { id: 5, img: '/images/projects/iauto/5.webp' },
      { id: 6, img: '/images/projects/iauto/6.webp' },
    ],
  },
  business: {
    img: '/images/projects/Business/1.webp',
    projectImages: [
      { id: 1, img: '/images/projects/Business/1.webp' },
      { id: 2, img: '/images/projects/Business/2.webp' },
      { id: 3, img: '/images/projects/Business/3.webp' },
    ],
  },
  blog: {
    img: '/images/projects/Blog/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/Blog/0.webp' },
      { id: 1, img: '/images/projects/Blog/1.webp' },
      { id: 2, img: '/images/projects/Blog/2.webp' },
      { id: 3, img: '/images/projects/Blog/3.webp' },
    ],
  },
  clothesStore: {
    img: '/images/projects/ClothesStore/1.webp',
    projectImages: [
      { id: 1, img: '/images/projects/ClothesStore/1.webp' },
      { id: 2, img: '/images/projects/ClothesStore/2.webp' },
      { id: 3, img: '/images/projects/ClothesStore/3.webp' },
    ],
  },
  portfolio: {
    img: '/images/projects/Portfolio/1.webp',
    projectImages: [
      { id: 1, img: '/images/projects/Portfolio/1.webp' },
      { id: 2, img: '/images/projects/Portfolio/2.webp' },
      { id: 3, img: '/images/projects/Portfolio/3.webp' },
    ],
  },
  aiImageGen: {
    img: '/images/projects/ImageGeneratorOpenAI/1.png',
    projectImages: [
      { id: 1, img: '/images/projects/ImageGeneratorOpenAI/1.png' },
      { id: 2, img: '/images/projects/ImageGeneratorOpenAI/2.png' },
      { id: 3, img: '/images/projects/ImageGeneratorOpenAI/3.png' },
    ],
  },
  laravelVueEcommercePhone: {
    img: '/images/projects/LaravelVueEcommercePhone/A.webp',
    projectImages: [
      { id: 0, img: '/images/projects/LaravelVueEcommercePhone/A.webp' },
      { id: 1, img: '/images/projects/LaravelVueEcommercePhone/A (1).webp' },
      { id: 2, img: '/images/projects/LaravelVueEcommercePhone/A (2).webp' },
      { id: 3, img: '/images/projects/LaravelVueEcommercePhone/A (3).webp' },
      { id: 4, img: '/images/projects/LaravelVueEcommercePhone/A (4).webp' },
      { id: 5, img: '/images/projects/LaravelVueEcommercePhone/A (5).webp' },
      { id: 6, img: '/images/projects/LaravelVueEcommercePhone/A (6).webp' },
      { id: 7, img: '/images/projects/LaravelVueEcommercePhone/A (7).webp' },
      { id: 8, img: '/images/projects/LaravelVueEcommercePhone/B (1).webp' },
      { id: 9, img: '/images/projects/LaravelVueEcommercePhone/B (2).webp' },
      { id: 10, img: '/images/projects/LaravelVueEcommercePhone/B (3).webp' },
      { id: 11, img: '/images/projects/LaravelVueEcommercePhone/B (4).webp' },
    ],
  },
  phonesStore: {
    img: '/images/projects/PhonesStore/1.webp',
    projectImages: [
      { id: 1, img: '/images/projects/PhonesStore/1.webp' },
      { id: 2, img: '/images/projects/PhonesStore/2.webp' },
      { id: 3, img: '/images/projects/PhonesStore/3.webp' },
      { id: 4, img: '/images/projects/PhonesStore/4.webp' },
      { id: 5, img: '/images/projects/PhonesStore/5.webp' },
      { id: 6, img: '/images/projects/PhonesStore/6.webp' },
      { id: 7, img: '/images/projects/PhonesStore/7.webp' },
      { id: 8, img: '/images/projects/PhonesStore/8.webp' },
      { id: 9, img: '/images/projects/PhonesStore/9.webp' },
      { id: 10, img: '/images/projects/PhonesStore/10.webp' },
      { id: 11, img: '/images/projects/PhonesStore/11.webp' },
    ],
  },
  landingPage: {
    img: '/images/projects/react-landing/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/react-landing/0.webp' },
      { id: 1, img: '/images/projects/react-landing/1.webp' },
      { id: 2, img: '/images/projects/react-landing/2.webp' },
      { id: 3, img: '/images/projects/react-landing/3.webp' },
      { id: 4, img: '/images/projects/react-landing/4.webp' },
      { id: 5, img: '/images/projects/react-landing/5.webp' },
    ],
  },
  infogate: {
    img: '/images/projects/infogate/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/infogate/0.webp' },
      { id: 1, img: '/images/projects/infogate/1.webp' },
      { id: 2, img: '/images/projects/infogate/2.webp' },
      { id: 3, img: '/images/projects/infogate/3.webp' },
      { id: 4, img: '/images/projects/infogate/4.webp' },
      { id: 5, img: '/images/projects/infogate/5.webp' },
      { id: 6, img: '/images/projects/infogate/6.webp' },
    ],
  },
  stockifly: {
    img: '/images/projects/stockifly/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/stockifly/0.webp' },
      { id: 1, img: '/images/projects/stockifly/1.webp' },
      { id: 2, img: '/images/projects/stockifly/2.webp' },
      { id: 3, img: '/images/projects/stockifly/3.webp' },
      { id: 4, img: '/images/projects/stockifly/4.webp' },
      { id: 5, img: '/images/projects/stockifly/5.webp' },
    ],
  },
  roxboro: {
    img: '/images/projects/roxboro/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/roxboro/0.webp' },
      { id: 1, img: '/images/projects/roxboro/1.webp' },
      { id: 2, img: '/images/projects/roxboro/2.webp' },
      { id: 3, img: '/images/projects/roxboro/3.webp' },
      { id: 4, img: '/images/projects/roxboro/4.webp' },
      { id: 5, img: '/images/projects/roxboro/5.webp' },
      { id: 6, img: '/images/projects/roxboro/6.webp' },
    ],
  },
  garage: {
    img: '/images/projects/garage/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/garage/0.webp' },
      { id: 1, img: '/images/projects/garage/1.webp' },
      { id: 2, img: '/images/projects/garage/2.webp' },
      { id: 3, img: '/images/projects/garage/3.webp' },
      { id: 4, img: '/images/projects/garage/4.webp' },
      { id: 5, img: '/images/projects/garage/5.webp' },
    ],
  },
  alphanex: {
    img: '/images/projects/alphanex/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/alphanex/1.webp' },
      { id: 2, img: '/images/projects/alphanex/2.webp' },
      { id: 3, img: '/images/projects/alphanex/3.webp' },
      { id: 4, img: '/images/projects/alphanex/4.webp' },
    ],
  },

  eventManagement: {
    img: '/images/projects/event-management/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/event-management/1.webp' },
      { id: 2, img: '/images/projects/event-management/2.webp' },
      { id: 3, img: '/images/projects/event-management/3.webp' },
      { id: 4, img: '/images/projects/event-management/4.webp' },
      { id: 5, img: '/images/projects/event-management/5.webp' },
      { id: 6, img: '/images/projects/event-management/6.webp' },
      { id: 7, img: '/images/projects/event-management/7.webp' },
      { id: 8, img: '/images/projects/event-management/8.webp' },
      { id: 9, img: '/images/projects/event-management/9.webp' },
      { id: 10, img: '/images/projects/event-management/10.webp' },
      { id: 11, img: '/images/projects/event-management/11.webp' },
      { id: 12, img: '/images/projects/event-management/12.webp' },
      { id: 13, img: '/images/projects/event-management/13.webp' },
      { id: 14, img: '/images/projects/event-management/14.webp' },
      { id: 15, img: '/images/projects/event-management/15.webp' },
    ],
  },
  medicio: {
    img: '/images/projects/medicio/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/medicio/1.webp' },
      { id: 2, img: '/images/projects/medicio/2.webp' },
      { id: 3, img: '/images/projects/medicio/3.webp' },
      { id: 4, img: '/images/projects/medicio/4.webp' },
      { id: 5, img: '/images/projects/medicio/5.webp' },
      { id: 6, img: '/images/projects/medicio/6.webp' },
      { id: 7, img: '/images/projects/medicio/7.webp' },
      { id: 8, img: '/images/projects/medicio/8.webp' },
    ],
  },
  medilab: {
    img: '/images/projects/medilab/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/medilab/1.webp' },
      { id: 2, img: '/images/projects/medilab/2.webp' },
      { id: 3, img: '/images/projects/medilab/3.webp' },
      { id: 4, img: '/images/projects/medilab/4.webp' },
    ],
  },
  dentistcare: {
    img: '/images/projects/dentistcare/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/dentistcare/1.webp' },
      { id: 2, img: '/images/projects/dentistcare/2.webp' },
      { id: 3, img: '/images/projects/dentistcare/3.webp' },
      { id: 4, img: '/images/projects/dentistcare/4.webp' },
    ],
  },
  mellow: {
    img: '/images/projects/mellow/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/mellow/1.webp' },
      { id: 2, img: '/images/projects/mellow/2.webp' },
      { id: 3, img: '/images/projects/mellow/3.webp' },
      { id: 4, img: '/images/projects/mellow/4.webp' },
    ],
  },
  novara: {
    img: '/images/projects/novara/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/novara/1.webp' },
      { id: 2, img: '/images/projects/novara/2.webp' },
      { id: 3, img: '/images/projects/novara/3.webp' },
      { id: 4, img: '/images/projects/novara/4.webp' },
      { id: 5, img: '/images/projects/novara/5.webp' },
    ],
  },
  restaurantly: {
    img: '/images/projects/restaurantly/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/restaurantly/1.webp' },
      { id: 2, img: '/images/projects/restaurantly/2.webp' },
      { id: 3, img: '/images/projects/restaurantly/3.webp' },
      { id: 4, img: '/images/projects/restaurantly/4.webp' },
      { id: 5, img: '/images/projects/restaurantly/5.webp' },
    ],
  },
  platia: {
    img: '/images/projects/platia/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/platia/1.webp' },
      { id: 2, img: '/images/projects/platia/2.webp' },
      { id: 3, img: '/images/projects/platia/3.webp' },
      { id: 4, img: '/images/projects/platia/4.webp' },
      { id: 5, img: '/images/projects/platia/5.webp' },
      { id: 6, img: '/images/projects/platia/6.webp' },
      { id: 7, img: '/images/projects/platia/7.webp' },
    ],
  },
  pizzalicious: {
    img: '/images/projects/pizzalicious/0.webp',
    projectImages: [
      { id: 1, img: '/images/projects/pizzalicious/1.webp' },
      { id: 2, img: '/images/projects/pizzalicious/2.webp' },
      { id: 3, img: '/images/projects/pizzalicious/3.webp' },
      { id: 4, img: '/images/projects/pizzalicious/4.webp' },
    ],
  },
  orthoDental: {
    img: '/images/projects/orthoDental/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/orthoDental/0.webp' },
      { id: 1, img: '/images/projects/orthoDental/1.webp' },
      { id: 2, img: '/images/projects/orthoDental/2.webp' },
      { id: 3, img: '/images/projects/orthoDental/3.webp' },
    ],
  },
  ta3limi: {
    img: '/images/projects/ta3limi/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/ta3limi/0.webp' },
      { id: 1, img: '/images/projects/ta3limi/1.webp' },
      { id: 2, img: '/images/projects/ta3limi/2.webp' },
      { id: 3, img: '/images/projects/ta3limi/3.webp' },
      { id: 4, img: '/images/projects/ta3limi/4.webp' },
    ],
  },
  mpa: {
    img: '/images/projects/mpa/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/ta3limi/0.webp' },
      { id: 1, img: '/images/projects/ta3limi/1.webp' },
      { id: 2, img: '/images/projects/ta3limi/2.webp' },
      { id: 3, img: '/images/projects/ta3limi/3.webp' },
    ],
  },
  shifaacare: {
    img: '/images/projects/shifaacare/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/shifaacare/0.webp' },
      { id: 1, img: '/images/projects/shifaacare/1.webp' },
      { id: 2, img: '/images/projects/shifaacare/2.webp' },
      { id: 3, img: '/images/projects/shifaacare/3.webp' },
      { id: 4, img: '/images/projects/shifaacare/4.webp' },
    ],
  },
  nzidoo: {
    img: '/images/projects/nzidoo/0.webp',
    projectImages: [
      { id: 0, img: '/images/projects/nzidoo/0.webp' },
      { id: 1, img: '/images/projects/nzidoo/1.webp' },
      { id: 2, img: '/images/projects/nzidoo/2.webp' },
      { id: 3, img: '/images/projects/nzidoo/3.webp' },
      { id: 4, img: '/images/projects/nzidoo/4.webp' },
      { id: 5, img: '/images/projects/nzidoo/5.webp' },
      { id: 6, img: '/images/projects/nzidoo/6.webp' },
      { id: 7, img: '/images/projects/nzidoo/7.webp' },
      { id: 8, img: '/images/projects/nzidoo/8.webp' },
      { id: 9, img: '/images/projects/nzidoo/9.webp' },
      { id: 10, img: '/images/projects/nzidoo/10.webp' },
      { id: 11, img: '/images/projects/nzidoo/11.webp' },
      { id: 12, img: '/images/projects/nzidoo/12.webp' },
      { id: 13, img: '/images/projects/nzidoo/13.webp' },
      { id: 14, img: '/images/projects/nzidoo/14.webp' },
      { id: 15, img: '/images/projects/nzidoo/15.webp' },
      { id: 16, img: '/images/projects/nzidoo/16.webp' },
      { id: 17, img: '/images/projects/nzidoo/17.webp' },
    ],
  },
};

const allProjects=[
  {
    id: 0,
    title: 'Mymoviez - Popular shows listing Website',
    hide: false,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.react },
      { id: 2, ...SMALL_IMAGE_URLS.api },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    category: 'React App',
    img: PROJECT_IMAGE_URLS.mymviez.img,
    link: 'Mymviez',
    singleProjectHeader: {
      singleProjectTitle: "Mymoviez - Popular shows listing Website",
      singleProjectDate: "09 august 2023",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.mymviez.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Moviez",
      },
      {
        id: 2,
        title: "Services",
        details: "movie ranking services",
      },
      {
        id: 3,
        title: "Website",
        details: "https://mymoviez.vercel.app/",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective0",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Bootstrap5",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details0A",
      },
      {
        id: 2,
        details: "details0B",
      },
      {
        id: 3,
        details: "details0C",
      },
      {
        id: 4,
        details: "details0D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },
  },
  {
    id: 1,
    title: 'tamtamtools - Business Website',
    hide: true,
    category: 'Laravel Application',
    img: PROJECT_IMAGE_URLS.tamtamtools.img,
    link: 'tamtamtools',
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.laravel },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.jquery },
      { id: 4, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "tamtamtools - Business Website",
      singleProjectDate: "02 Apr 2023",
      singleProjectTag: " Frontend / Backend",
    },
    projectImages: PROJECT_IMAGE_URLS.tamtamtools.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Tamtam tools Ltd",
      },
      {
        id: 2,
        title: "Services",
        details: "Campaign generation services",
      },
      {
        id: 3,
        title: "Website",
        details: "#",
      },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective1",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Laravel",
          "PHP",
          "JavaScript",
          "Jquery",
          "CSS",
          "HTML",
          "Bootstrap",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details1A",
      },
      {
        id: 2,
        details: "details1B",
      },
      {
        id: 3,
        details: "details1C",
      },
      {
        id: 4,
        details: "details1D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com/tamtamgestioncreativa",
      },
      {
        id: 2,
        name: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com/profile.php?id=100086499687468",
      },
      {
        id: 3,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/company/tamtamtools",
      },
      ],
    },
  },

  {
    id: 2,
    title: 'Elearn - Online Learning Platform',
    hide: true,
    category: 'Wordpress site',
    link: 'Elearn',
    img: PROJECT_IMAGE_URLS.elearn.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.wordpress },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.jquery },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Elearn - Online Learning Platform",
      singleProjectDate: "16 Jan 2023",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.elearn.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "eLearn",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://websitedemos.net/online-courses-02/",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective2",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "Wordpress",
          "PHP",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details2A",
      },
      {
        id: 2,
        details: "details2B",
      },
      {
        id: 3,
        details: "details2C",
      },
      {
        id: 4,
        details: "details2D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },

  },

  {
    id: 3,
    title: 'iAuto - Car dealership web app',
    hide: false,
    category: 'Laravel Vue Application',
    // video: require('@/assets/videos/iauto/0.mp4'),
    img: PROJECT_IMAGE_URLS.iauto.img,
    link: 'iauto',
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.laravel },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.vue },
      { id: 4, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "iAuto - Car dealership web app",
      singleProjectDate: "04 mai 2023",
      singleProjectTag: " Frontend / Backend",
    },
    projectImages: PROJECT_IMAGE_URLS.iauto.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "iAuto",
      },
      {
        id: 2,
        title: "Services",
        details: "Car store services",
      },
      {
        id: 3,
        title: "Website",
        details: "#",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective3",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Laravel",
          "Vue.js",
          "PHP",
          "Bootstrap",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details3A",
      },
      {
        id: 2,
        details: "details3B",
      },
      {
        id: 3,
        details: "details3C",
      },
      {
        id: 4,
        details: "details3D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },
  },
  {
    id: 4,
    title: 'Business - Wordpress site',
    hide: true,
    category: 'Wordpress site',
    link: 'Business',
    img: PROJECT_IMAGE_URLS.business.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.wordpress },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.jquery },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Business - Wordpress site",
      singleProjectDate: "18 Sep 2017",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.business.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "eBook",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://websitedemos.net/kathryn-ebook-author-02/",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective4",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Wordpress",
          "PHP",
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details4A",
      },
      {
        id: 2,
        details: "details4B",
      },
      {
        id: 3,
        details: "details4C",
      },
      {
        id: 4,
        details: "details4D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },

  },
  {
    id: 5,
    title: 'Saadaahnews - Blog website',
    category: 'Vue App',
    hide: false,
    link: 'Blog',
    img: PROJECT_IMAGE_URLS.blog.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.vue },
      { id: 2, ...SMALL_IMAGE_URLS.api },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Saadaahnews - Blog website",
      singleProjectDate: "08 Mar 2020",
      singleProjectTag: " Frontend / Backend",
    },
    projectImages: PROJECT_IMAGE_URLS.blog.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Saadaah News",
      },
      {
        id: 2,
        title: "Services",
        details: "Blog Services",
      },
      {
        id: 3,
        title: "Website",
        details: "https://saadaahnews.com/",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective5",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Vue.js",
          "JavaScript",
          "TailwindCSS",
          "HTML",
          "CSS",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details5A",
      },
      {
        id: 2,
        details: "details5B",
      },
      {
        id: 3,
        details: "details5C",
      },
      {
        id: 4,
        details: "details5D",
      },
      {
        id: 4,
        details: "details5E",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },

  },
  {
    id: 6,
    title: 'DNK - Clothes Store',
    hide: true,
    category: 'Wordpress site',
    link: 'ClothesStore',
    img: PROJECT_IMAGE_URLS.clothesStore.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.wordpress },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.jquery },
    ],
    singleProjectHeader: {
      singleProjectTitle: "DNK - Clothes Store",
      singleProjectDate: "24 Sep 2022",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.clothesStore.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Clothes Store",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://websitedemos.net/brandstore-02/",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective6",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Wordpress",
          "PHP",
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details6A",
      },
      {
        id: 2,
        details: "details6B",
      },
      {
        id: 3,
        details: "details6C",
      },
      {
        id: 4,
        details: "detailsCD",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },

  },
  {
    id: 7,
    title: 'Mostefa - Portfolio website',
    hide: true,
    category: 'Vue App',
    link: 'Portfolio',
    img: PROJECT_IMAGE_URLS.portfolio.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.vue },
      { id: 2, ...SMALL_IMAGE_URLS.tailwind },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Mostefa - Portfolio website",
      singleProjectDate: "20 Mar 2023",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.portfolio.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Portfolio",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://webpress-annaba.netlify.app/",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective7",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Vue.js",
          "HTML",
          "CSS",
          "JavaScript",
          "TailwindCSS",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details7A",
      },
      {
        id: 2,
        details: "details7B",
      },
      {
        id: 3,
        details: "details7C",
      },
      {
        id: 4,
        details: "details7D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },

  },

  {
    id: 8,
    title: 'Image Generator OpenAI',
    hide: true,
    category: 'Vue App',
    img: PROJECT_IMAGE_URLS.aiImageGen.img,
    link: 'ai-image-generation',
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.vue },
      { id: 2, ...SMALL_IMAGE_URLS.api },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Image Generator OpenAI",
      singleProjectDate: "02 Apr 2023",
      singleProjectTag: "Frontend / API",
    },
    projectImages: PROJECT_IMAGE_URLS.aiImageGen.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Image Generator",
      },
      {
        id: 2,
        title: "Services",
        details: "AI image generation",
      },
      {
        id: 3,
        title: "Website",
        details: "#",
      },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective8",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Vue.js",
          "API",
          "JavaScript",
          "TailwindCSS",
          "CSS",
          "HTML",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details8A",
      },
      {
        id: 2,
        details: "details8B",
      },
      {
        id: 3,
        details: "details8C",
      },
      {
        id: 4,
        details: "details8D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },
  },
  {
    id: 9,
    title: 'Ecom - Ecommerce Phone Store',
    hide: false,
    category: 'Laravel Vue Application',
    link: 'LaravelVueEcommercePhone',
    img: PROJECT_IMAGE_URLS.laravelVueEcommercePhone.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.laravel },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.vue },
      { id: 4, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Ecom - Ecommerce Phone Store",
      singleProjectDate: "26 Jul 2021",
      singleProjectTag: " Frontend / Backend",
    },
    projectImages: PROJECT_IMAGE_URLS.laravelVueEcommercePhone.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "eCommerce phone Store",
      },
      {
        id: 2,
        title: "Services",
        details: "Phone store services",
      },
      {
        id: 3,
        title: "Website",
        details: "#",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective9",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Laravel",
          "Vue.js",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "HTML",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details9A",
      },
      {
        id: 2,
        details: "details9B",
      },
      {
        id: 3,
        details: "details9C",
      },
      {
        id: 4,
        details: "details9D",
      },
      {
        id: 5,
        details: "details9E",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },
  },

  {
    id: 10,
    title: 'AnnabaPhone - Phones Store',
    hide: false,
    category: 'Wordpress site',
    link: 'PhonesStore',
    img: PROJECT_IMAGE_URLS.phonesStore.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.wordpress },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.jquery },
    ],
    singleProjectHeader: {
      singleProjectTitle: "AnnabaPhone - Phones Store",
      singleProjectDate: "26 Jul 2021",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.phonesStore.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "eCommerce phone Store",
      },
      {
        id: 2,
        title: "Services",
        details: "Phone store services",
      },
      {
        id: 3,
        title: "Website",
        details: "#",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective10",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Wordpress",
          "PHP",
          "jQuery",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details10A",
      },
      {
        id: 2,
        details: "details10B",
      },
      {
        id: 3,
        details: "details10C",
      },
      {
        id: 4,
        details: "details10D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },

  },
  {
    id: 11,
    title: 'Startup - Landing Page',
    hide: false,
    category: 'React App',
    link: 'landing-page',
    img: PROJECT_IMAGE_URLS.landingPage.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.next },
      { id: 2, ...SMALL_IMAGE_URLS.react },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Startup - Landing Page",
      singleProjectDate: "26 Aug 2023",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.landingPage.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Landing Page",
      },
      {
        id: 2,
        title: "Services",
        details: "Landing Page",
      },
      {
        id: 3,
        title: "Website",
        details: "https://landing-page-next-react.netlify.app/",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective11",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "React",
          "Next",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details11A",
      },
      {
        id: 2,
        details: "details11B",
      },
      {
        id: 3,
        details: "details11C",
      },
      {
        id: 4,
        details: "details11D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "#",
      },
      ],
    },

  },
  {
    id: 12,
    title: 'Bash Gate - Landing Page',
    hide: false,
    category: 'React App',
    link: 'infogate',
    img: PROJECT_IMAGE_URLS.infogate.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.react },
      { id: 2, ...SMALL_IMAGE_URLS.laravel },
      { id: 3, ...SMALL_IMAGE_URLS.php },
      { id: 4, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Bash Gate - Landing Page",
      singleProjectDate: "31 Dec 2023",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.infogate.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Bash Gate",
      },
      {
        id: 2,
        title: "Services",
        details: "Online Services",
      },
      {
        id: 3,
        title: "Website",
        details: "https://infogate.sa",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective12",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "React",
          "Laravel",
          "PHP",
          "Bootstrap",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details12A",
      },
      {
        id: 2,
        details: "details12B",
      },
      {
        id: 3,
        details: "details12C",
      },
      {
        id: 4,
        details: "details12D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/BashGateSa",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com/bashgatesa",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com/bashgatesa",
      },
      {
        id: 4,
        name: "Whatsapp",
        icon: "phone",
        url: "https://api.whatsapp.com/send?phone=966503003675",
      },
      ],
    },

  },
  {
    id: 13,
    title: 'Stockifly - Stock management system',
    hide: true,
    category: 'Laravel Vue Application',
    link: 'stockifly',
    img: PROJECT_IMAGE_URLS.stockifly.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.laravel },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.php },
      { id: 4, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Stockifly - Stock management system",
      singleProjectDate: "16 Oct 2022",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.stockifly.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Stockifly",
      },
      {
        id: 2,
        title: "Services",
        details: "Online Services",
      },
      {
        id: 3,
        title: "Website",
        details: "#",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective13",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Laravel",
          "Vue",
          "PHP",
          "Bootstrap",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details13A",
      },
      {
        id: 2,
        details: "details13B",
      },
      {
        id: 3,
        details: "details13C",
      },
      {
        id: 4,
        details: "details13D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com",
      },
      {
        id: 4,
        name: "Whatsapp",
        icon: "phone",
        url: "https://api.whatsapp.com/",
      },
      ],
    },

  },
  {
    id: 14,
    title: 'Roxboro - Content Management System',
    hide: false,
    category: 'Laravel Application',
    link: 'roxboro',
    img: PROJECT_IMAGE_URLS.roxboro.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.laravel },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Roxboro - Content Management System",
      singleProjectDate: "03 Mar 2024",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.roxboro.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Roxboro",
      },
      {
        id: 2,
        title: "Services",
        details: "Online Services",
      },
      {
        id: 3,
        title: "Website",
        details: "https://roxboro.ca",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective14",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Laravel",
          "PHP",
          "Bootstrap",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details14A",
      },
      {
        id: 2,
        details: "details14B",
      },
      {
        id: 3,
        details: "details14C",
      },
      {
        id: 4,
        details: "details14D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com",
      },
      {
        id: 4,
        name: "Whatsapp",
        icon: "phone",
        url: "https://api.whatsapp.com/",
      },
      ],
    },

  },
  {
    id: 15,
    title: 'Garage - Stock management SaaS',
    hide: false,
    category: 'Laravel Application',
    link: 'garage',
    img: PROJECT_IMAGE_URLS.garage.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.laravel },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Garage - Stock management SaaS",
      singleProjectDate: "05 Dec 2023",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.garage.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Garage",
      },
      {
        id: 2,
        title: "Services",
        details: "Online Services",
      },
      {
        id: 3,
        title: "Website",
        details: "#",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective15",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Laravel",
          "PHP",
          "Bootstrap",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details15A",
      },
      {
        id: 2,
        details: "details15B",
      },
      {
        id: 3,
        details: "details15C",
      },
      {
        id: 4,
        details: "details15D",
      },
      {
        id: 5,
        details: "details15E",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com",
      },
      {
        id: 4,
        name: "Whatsapp",
        icon: "phone",
        url: "https://api.whatsapp.com/",
      },
      ],
    },

  },
  {
    id: 16,
    title: 'Alphanex - Portfolio website',
    hide: false,
    category: 'Wordpress site',
    link: 'Alphanex',
    img: PROJECT_IMAGE_URLS.alphanex.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.wordpress },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.jquery },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Alphanex - Portfolio website",
      singleProjectDate: "16 Jan 2023",
      singleProjectTag: "UI / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.alphanex.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Alphanex",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://alphanex.fr/",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective16",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Wordpress",
          "CSS",
          "JavaScript",
          "PHP",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details16A",
      },
      {
        id: 2,
        details: "details16B",
      },
      {
        id: 3,
        details: "details16C",
      },
      {
        id: 4,
        details: "details16D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      ],
    },

  },
  {
    id: 17,
    title: 'Event Management - Management dashboard',
    hide: false,
    category: 'Laravel React Web App',
    link: 'event-management',
    img: PROJECT_IMAGE_URLS.eventManagement.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.react },
      { id: 2, ...SMALL_IMAGE_URLS.laravel },
      { id: 3, ...SMALL_IMAGE_URLS.php },
      { id: 4, ...SMALL_IMAGE_URLS.tailwind },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Event Management - Management dashboard",
      singleProjectDate: "22 Feb 2025",
      singleProjectTag: "Backend / Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.eventManagement.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "NewDay",
      },
      {
        id: 2,
        title: "Services",
        details: "Backend & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "#",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective17",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "React",
          "Laravel",
          "Tailwind CSS",
          "PHP",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details17A",
      },
      {
        id: 2,
        details: "details17B",
      },
      {
        id: 3,
        details: "details17C",
      },
      {
        id: 4,
        details: "details17D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      ],
    },

  },
  {
    id: 18,
    title: 'Medicio - Clinic Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'medicio',
    img: PROJECT_IMAGE_URLS.medicio.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Medicio - Clinic Landing Page",
      singleProjectDate: "01 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.medicio.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "Medicio",
      },
      {
        id: 2,
        title: "Services",
        details: "Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://nuxt4-medicio.vercel.app/en",
        detailsAr: "https://nuxt4-medicio.vercel.app",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective18",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Nuxt",
          "Vue",
          "Bootstrap",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details18A",
      },
      {
        id: 2,
        details: "details18B",
      },
      {
        id: 3,
        details: "details18C",
      },
      {
        id: 4,
        details: "details18D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      ],
    },

  },
  {
    id: 19,
    title: 'MediLab - Clinic Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'medilab',
    img: PROJECT_IMAGE_URLS.medilab.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "MediLab - Clinic Landing Page",
      singleProjectDate: "08 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.medilab.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [{
        id: 1,
        title: "Name",
        details: "MediLab",
      },
      {
        id: 2,
        title: "Services",
        details: "Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://nuxt4-medilab.vercel.app/en",
        detailsAr: "https://nuxt4-medilab.vercel.app",
      },

      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective19",
      technologies: [{
        title: "Tools & Technologies",
        techs: [
          "Nuxt",
          "Vue",
          "Bootstrap",
        ],
      },],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details19A",
      },
      {
        id: 2,
        details: "details19B",
      },
      {
        id: 3,
        details: "details19C",
      },
      {
        id: 4,
        details: "details19D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "#",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "#",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "#",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      ],
    },

  }, ,
  {
    id: 20,
    title: 'DentistCare - Dental Clinic Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'dentistcare',
    img: PROJECT_IMAGE_URLS.dentistcare.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "DentistCare - Dental Clinic Landing Page",
      singleProjectDate: "11 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.dentistcare.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "DentistCare",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://nuxt4-dentist.vercel.app/en",
          detailsAr: "https://nuxt4-dentist.vercel.app",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective20",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details20A",
      },
      {
        id: 2,
        details: "details20B",
      },
      {
        id: 3,
        details: "details20C",
      },
      {
        id: 4,
        details: "details20D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    },
  },
  {
    id: 21,
    title: 'Mellow - Hotel Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'mellow',
    img: PROJECT_IMAGE_URLS.mellow.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Mellow - Hotel Landing Page",
      singleProjectDate: "16 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.mellow.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Mellow",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://nuxt4-mellow.vercel.app/en",
          detailsAr: "https://nuxt4-mellow.vercel.app",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective21",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details21A",
      },
      {
        id: 2,
        details: "details21B",
      },
      {
        id: 3,
        details: "details21C",
      },
      {
        id: 4,
        details: "details21D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    }
  }, {
    id: 22,
    title: 'Novara - Private School Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'novara',
    img: PROJECT_IMAGE_URLS.novara.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Novara - Private School Landing Page",
      singleProjectDate: "22 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.novara.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Novara",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://nuxt4-novara.vercel.app/en",
          detailsAr: "https://nuxt4-novara.vercel.app",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective22",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details22A",
      },
      {
        id: 2,
        details: "details22B",
      },
      {
        id: 3,
        details: "details22C",
      },
      {
        id: 4,
        details: "details22D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    }
  }
  , {
    id: 23,
    title: 'Restaurantly - Restaurant Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'restaurantly',
    img: PROJECT_IMAGE_URLS.restaurantly.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Restaurantly - Restaurant Landing Page",
      singleProjectDate: "23 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.restaurantly.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Restaurantly",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://nuxt4-restaurantly.vercel.app/en",
          detailsAr: "https://nuxt4-restaurantly.vercel.app",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective23",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details23A",
      },
      {
        id: 2,
        details: "details23B",
      },
      {
        id: 3,
        details: "details23C",
      },
      {
        id: 4,
        details: "details23D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    }
  }
  , {
    id: 24,
    title: 'Platia - Restaurant Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'platia',
    img: PROJECT_IMAGE_URLS.platia.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Platia - Restaurant Landing Page",
      singleProjectDate: "24 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.platia.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Platia",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://nuxt4-platia.vercel.app/en",
          detailsAr: "https://nuxt4-platia.vercel.app",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective24",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details24A",
      },
      {
        id: 2,
        details: "details24B",
      },
      {
        id: 3,
        details: "details24C",
      },
      {
        id: 4,
        details: "details24D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    }
  }
  , {
    id: 25,
    title: 'PizzaLicious - Restaurant Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'pizzalicious',
    img: PROJECT_IMAGE_URLS.pizzalicious.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "PizzaLicious - Restaurant Landing Page",
      singleProjectDate: "25 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.pizzalicious.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "PizzaLicious",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://nuxt4-pizza-licious.vercel.app/en",
          detailsAr: "https://nuxt4-pizza-licious.vercel.app",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective25",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details25A",
      },
      {
        id: 2,
        details: "details25B",
      },
      {
        id: 3,
        details: "details25C",
      },
      {
        id: 4,
        details: "details25D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    }
  }, {
    id: 26,
    title: 'Ortho Dental - Orthodontic Training & Clinic Landing page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'ortho-dental',
    img: PROJECT_IMAGE_URLS.orthoDental.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Ortho Dental - Orthodontic Training & Clinic Landing page",
      singleProjectDate: "27 Aug 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.orthoDental.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Ortho Dental",
        },
        {
          id: 2,
          title: "Services",
          details: "Fullstack Development, Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://nuxt4-ortho-dental.vercel.app/en",
          detailsAr: "https://nuxt4-ortho-dental.vercel.app/ar",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective26",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [{
        id: 1,
        details: "details26A",
      },
      {
        id: 2,
        details: "details26B",
      },
      {
        id: 3,
        details: "details26C",
      },
      {
        id: 4,
        details: "details26D",
      },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://www.facebook.com/profile.php?id=100095235111131",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    },
  },
  {
    id: 27,
    title: 'Ta3limi - Kindergarten Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'ta3limi',
    img: PROJECT_IMAGE_URLS.ta3limi.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.tailwind },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Ta3limi - Kindergarten Landing Page",
      singleProjectDate: "02 Sep 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.ta3limi.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Ta3limi",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development, Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://nuxt4-ta3limi.vercel.app/en",
          detailsAr: "https://nuxt4-ta3limi.vercel.app",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective27",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "TailwindCSS",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [
        {
          id: 1,
          details: "details27A",
        },
        {
          id: 2,
          details: "details27B",
        },
        {
          id: 3,
          details: "details27C",
        },
        {
          id: 4,
          details: "details27D",
        },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    },
  },
  {
    id: 28,
    title: 'Medic People Academy - Course Landing Page',
    hide: false,
    category: 'Nuxt Vue Web App',
    link: 'mpa',
    img: PROJECT_IMAGE_URLS.mpa.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.nuxt },
      { id: 2, ...SMALL_IMAGE_URLS.vue },
      { id: 3, ...SMALL_IMAGE_URLS.tailwind },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Medic People Academy - Course Landing Page",
      singleProjectDate: "02 Sep 2025",
      singleProjectTag: "Frontend",
    },
    projectImages: PROJECT_IMAGE_URLS.mpa.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Medic-People Academy",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development, Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://medic-people-academie.vercel.app/en",
          detailsAr: "https://medic-people-academie.vercel.app/ar",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective28",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Vue",
            "TailwindCSS",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [
        {
          id: 1,
          details: "details28A",
        },
        {
          id: 2,
          details: "details28B",
        },
        {
          id: 3,
          details: "details28C",
        },
        {
          id: 4,
          details: "details28D",
        },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://www.facebook.com/profile.php?id=61556068952692#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    },
  },
  {
    id: 29,
    title: 'Shifaa Care - Medical cabinet App',
    hide: false,
    category: 'React Web App',
    link: 'shifaacare',
    img: PROJECT_IMAGE_URLS.shifaacare.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.react },
      { id: 2, ...SMALL_IMAGE_URLS.supabase },
      { id: 3, ...SMALL_IMAGE_URLS.tailwind },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Shifaa Care - Medical cabinet App",
      singleProjectDate: "17 Sep 2025",
      singleProjectTag: "Frontend/Backend",
    },
    projectImages: PROJECT_IMAGE_URLS.shifaacare.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Shifaa Care",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development, Web Design, Backend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://shifaa-care.vercel.app",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective29",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Nuxt",
            "Supabase",
            "TailwindCSS",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [
        {
          id: 1,
          details: "details29A",
        },
        {
          id: 2,
          details: "details29B",
        },
        {
          id: 3,
          details: "details29C",
        },
        {
          id: 4,
          details: "details29D",
        },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    },
  },
  {
    id: 30,
    title: 'Nzidoo - eCommerce App',
    hide: false,
    category: 'Laravel Vue Web App',
    link: 'nzidoo',
    img: PROJECT_IMAGE_URLS.nzidoo.img,
    smallImages: [
      { id: 1, ...SMALL_IMAGE_URLS.laravel },
      { id: 1, ...SMALL_IMAGE_URLS.vue },
      { id: 2, ...SMALL_IMAGE_URLS.php },
      { id: 3, ...SMALL_IMAGE_URLS.bootstrap },
    ],
    singleProjectHeader: {
      singleProjectTitle: "Nzidoo - eCommerce App",
      singleProjectDate: "20 Jan 2026",
      singleProjectTag: "Frontend/Backend",
    },
    projectImages: PROJECT_IMAGE_URLS.nzidoo.projectImages,
    projectInfo: {
      clientHeading: "About Client",
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Nzidoo",
        },
        {
          id: 2,
          title: "Services",
          details: "Frontend Development, Web Design, Backend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "http://109.123.243.14",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails: "Objective30",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Laravel",
            "Vue",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeading: "Challenge",
      projectDetails: [
        {
          id: 1,
          details: "details30A",
        },
        {
          id: 2,
          details: "details30B",
        },
        {
          id: 3,
          details: "details30C",
        },
        {
          id: 4,
          details: "details30D",
        },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "#",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "#",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "#",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "#",
        },
      ],
    },
  }




];

// Filter to only include projects where hide is false
const projects=allProjects.filter(project => !project.hide);


export function getProjects(t) {
  return projects;
}

export default getProjects;