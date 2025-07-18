// IMAGE PATH CONSTANTS
const IMG_TECH = {
  react: '/images/technology/react.png',
  api: '/images/technology/api.png',
  bootstrap: '/images/technology/bootstrap.png',
  laravel: '/images/technology/laravel.png',
  php: '/images/technology/php.png',
  jquery: '/images/technology/jquery.png',
  wordpress: '/images/technology/wordpress.png',
  vue: '/images/technology/vue.png',
  tailwind: '/images/technology/tailwind.png',
  next: '/images/technology/next.png',
};
const IMG_PROJECT = {
  movieDb: [
    '/images/movie-db/0.png', '/images/movie-db/1.png', '/images/movie-db/2.png', '/images/movie-db/3.png', '/images/movie-db/4.png', '/images/movie-db/5.png', '/images/movie-db/6.png', '/images/movie-db/7.png',
  ],
  tamtamtools: ['/images/tamtamtools/0.png', '/images/tamtamtools/1.png', '/images/tamtamtools/2.png', '/images/tamtamtools/3.png'],
  iauto: ['/images/iauto/0.png', '/images/iauto/1.png', '/images/iauto/2.png', '/images/iauto/3.png', '/images/iauto/4.png', '/images/iauto/5.png', '/images/iauto/6.png'],
  blog: ['/images/Blog/1.webp', '/images/Blog/2.webp', '/images/Blog/3.webp'],
  clothesStore: ['/images/ClothesStore/1.webp', '/images/ClothesStore/2.webp', '/images/ClothesStore/3.webp'],
  portfolio: ['/images/Portfolio/1.webp', '/images/Portfolio/2.webp', '/images/Portfolio/3.webp'],
  imageGen: ['/images/ImageGeneratorOpenAI/1.png', '/images/ImageGeneratorOpenAI/2.png', '/images/ImageGeneratorOpenAI/3.png'],
  laravelVueEcom: [
    '/images/LaravelVueEcommercePhone/A.png', '/images/LaravelVueEcommercePhone/A (1).png', '/images/LaravelVueEcommercePhone/A (2).png', '/images/LaravelVueEcommercePhone/A (3).png', '/images/LaravelVueEcommercePhone/A (4).png', '/images/LaravelVueEcommercePhone/A (5).png', '/images/LaravelVueEcommercePhone/A (6).png', '/images/LaravelVueEcommercePhone/A (7).png', '/images/LaravelVueEcommercePhone/B (1).png', '/images/LaravelVueEcommercePhone/B (2).png', '/images/LaravelVueEcommercePhone/B (3).png', '/images/LaravelVueEcommercePhone/B (4).png',
  ],
  phonesStore: [
    '/images/PhonesStore/1.webp', '/images/PhonesStore/2.webp', '/images/PhonesStore/3.webp', '/images/PhonesStore/4.webp', '/images/PhonesStore/5.webp', '/images/PhonesStore/6.webp', '/images/PhonesStore/7.webp', '/images/PhonesStore/8.webp', '/images/PhonesStore/9.webp', '/images/PhonesStore/10.webp', '/images/PhonesStore/11.webp',
  ],
  reactLanding: ['/images/react-landing/0.png', '/images/react-landing/1.png', '/images/react-landing/2.png', '/images/react-landing/3.png', '/images/react-landing/4.png', '/images/react-landing/5.png'],
  infogate: ['/images/infogate/0.png', '/images/infogate/1.png', '/images/infogate/2.png', '/images/infogate/3.png', '/images/infogate/4.png', '/images/infogate/5.png', '/images/infogate/6.png'],
  stockifly: ['/images/stockifly/0.png', '/images/stockifly/1.png', '/images/stockifly/2.png', '/images/stockifly/3.png', '/images/stockifly/4.png', '/images/stockifly/5.png'],
  roxboro: ['/images/roxboro/0.png', '/images/roxboro/1.png', '/images/roxboro/2.png', '/images/roxboro/3.png', '/images/roxboro/4.png', '/images/roxboro/5.png', '/images/roxboro/6.png'],
  garage: ['/images/garage/0.png', '/images/garage/1.png', '/images/garage/2.png', '/images/garage/3.png', '/images/garage/4.png', '/images/garage/5.png'],
  alphanex: ['/images/alphanex/0.webp','/images/alphanex/1.webp', '/images/alphanex/2.webp', '/images/alphanex/3.webp', '/images/alphanex/4.webp'],
  eventManagement: [
    '/images/event-management/0.png', '/images/event-management/1.png', '/images/event-management/2.png', '/images/event-management/3.png', '/images/event-management/4.png', '/images/event-management/5.png', '/images/event-management/6.png', '/images/event-management/7.png', '/images/event-management/8.png', '/images/event-management/9.png', '/images/event-management/10.png', '/images/event-management/11.png', '/images/event-management/12.png', '/images/event-management/13.png', '/images/event-management/14.png', '/images/event-management/15.png',
  ],
  business: ['/images/Business/1.webp', '/images/Business/2.webp', '/images/Business/3.webp'],
  elearn: ['/images/Elearn/1.webp', '/images/Elearn/2.webp', '/images/Elearn/3.webp'],
};
const WIDTH_60 = '60px';

const allProjects = [
  {
    id: 0,
	title: 'MyMoviez - Popular Movie Listing',
	hide: false,
	smallImages: [{
		id: 1,
		alt: "react",
		src: IMG_TECH.react,
		width: WIDTH_60,
	},
	{
		id: 2,
		alt: "api",
		src: IMG_TECH.api,
		width: WIDTH_60,
	},
	{
		id: 3,
		alt: "bootstrap",
		src: IMG_TECH.bootstrap,
		width: WIDTH_60,
	},
	],
	category: 'React App',
  
  img: IMG_PROJECT.movieDb[0],
	link: 'movie-db',
	singleProjectHeader: {
		singleProjectTitle: 'popularMyMoviezWebsite',
		singleProjectDate: "09 august 2023",
		singleProjectTag: 'frontend',
	},
	projectImages: [{
		id: 0,
		img: IMG_PROJECT.movieDb[0],
	},
	{
		id: 1,
		img: IMG_PROJECT.movieDb[1],
	},
	{
		id: 2,
		img: IMG_PROJECT.movieDb[2],
	},
	{
		id: 3,
		img: IMG_PROJECT.movieDb[3],
	},
	{
		id: 4,
		img: IMG_PROJECT.movieDb[4],
	},
	{
		id: 5,
		img: IMG_PROJECT.movieDb[5],
	},
	{
		id: 6,
		img: IMG_PROJECT.movieDb[6],
	},
	{
		id: 7,
		img: IMG_PROJECT.movieDb[7],
	},

	],
	projectInfo: {
		clientHeading: 'clientHeading',
		companyInfos: [{
			id: 1,
			title: 'name',
			details: 'MyMoviez',
		},
		{
			id: 2,
			title: 'services',
			details: 'movieRankingServices',
		},
		{
			id: 3,
			title: 'website',
			details: "https://mymoviez.vercel.app/",
		},

		],
		objectivesHeading: 'objectivesHeading',
		objectivesDetails: 'objective',
		technologies: [{
			title: 'technologiesTitle',
			techs: [
				"HTML",
				"CSS",
				"JavaScript",
				"React.js",
				"Bootstrap5",
			],
		},],
		projectDetailsHeading: 'challengeHeading',
		projectDetails: [{
			id: 1,
			details: 'details0A',
		},
		{
			id: 2,
			details: 'details0B',
		},
		{
			id: 3,
			details: 'details0C',
		},
		{
			id: 4,
			details: 'details0D',
		},
		],
		socialSharingsHeading: 'shareThis',
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},
},
  {
    id: 1,
    title: 'Business Website',
    hide: false,
    category: 'Laravel Application',
    img: IMG_PROJECT.tamtamtools[0],
    link: 'tamtamtools',
    smallImages: [{
      id: 1,
      alt: "laravel",
      src: IMG_TECH.laravel,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "jquery",
      src: IMG_TECH.jquery,
      width: WIDTH_60,
    },
    {
      id: 4,
      alt: "bootstrap",
      src: IMG_TECH.bootstrap,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'tamtamTools',
      singleProjectDate: "02 Apr 2023",
      singleProjectTag: 'frontend / backend',
    },
    projectImages: [{
      id: 0,
      img: IMG_PROJECT.tamtamtools[0],
    },
    {
      id: 1,
      img: IMG_PROJECT.tamtamtools[1],
    },
    {
      id: 2,
      img: IMG_PROJECT.tamtamtools[2],
    },
    {
      id: 3,
      img: IMG_PROJECT.tamtamtools[3],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'tamtamToolsLtd',
      },
      {
        id: 2,
        title: 'services',
        details: 'campaignGenerationServices',
      },
      {
        id: 3,
        title: 'website',
        details: "https://tamtamtools.com/",
      },
      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
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
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details1A',
      },
      {
        id: 2,
        details: 'details1B',
      },
      {
        id: 3,
        details: 'details1C',
      },
      {
        id: 4,
        details: 'details1D',
      },
      ],
      socialSharingsHeading: 'shareThis',
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
    title: 'Elearn',
    hide: true,
    category: 'Wordpress site',
    link: 'Elearn',
    img: IMG_PROJECT.elearn[0],
    smallImages: [{
      id: 1,
      alt: "wordpress",
      src: IMG_TECH.wordpress,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "jquery",
      src: IMG_TECH.jquery,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'elearn',
      singleProjectDate: "16 Jan 2023",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.elearn[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.elearn[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.elearn[2],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'eLearn',
      },
      {
        id: 2,
        title: 'services',
        details: 'uiDesignFrontendDevelopment',
      },
      {
        id: 3,
        title: 'website',
        details: "https://websitedemos.net/online-courses-02/",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "Wordpress",
          "PHP",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details2A',
      },
      {
        id: 2,
        details: 'details2B',
      },
      {
        id: 3,
        details: 'details2C',
      },
      {
        id: 4,
        details: 'details2D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },

  },

  {
    id: 3,
    title: 'iAuto - Car dealership web app',
    hide: false,
    category: 'Laravel Vue Application',
    // video: '@/assets/videos/iauto/0.mp4',
    img: IMG_PROJECT.iauto[0],
    link: 'iauto',
    smallImages: [{
      id: 1,
      alt: "laravel",
      src: IMG_TECH.laravel,
      width: WIDTH_60,
    },

    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "vue",
      src: IMG_TECH.vue,
      width: WIDTH_60,
    },
    {
      id: 4,
      alt: "bootstrap",
      src: IMG_TECH.bootstrap,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'iAutoBusinessWebsite',
      singleProjectDate: "04 mai 2023",
      singleProjectTag: 'frontend / backend',
    },
    projectImages: [{
      id: 0,
      img: IMG_PROJECT.iauto[0],
    },
    {
      id: 1,
      img: IMG_PROJECT.iauto[1],
    },
    {
      id: 2,
      img: IMG_PROJECT.iauto[2],
    },
    {
      id: 3,
      img: IMG_PROJECT.iauto[3],
    },
    {
      id: 4,
      img: IMG_PROJECT.iauto[4],
    },
    {
      id: 5,
      img: IMG_PROJECT.iauto[5],
    },
    {
      id: 6,
      img: IMG_PROJECT.iauto[6],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'iAuto',
      },
      {
        id: 2,
        title: 'services',
        details: 'carStoreServices',
      },
      {
        id: 3,
        title: 'website',
        details: "https://iauto.no/",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
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
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details3A',
      },
      {
        id: 2,
        details: 'details3B',
      },
      {
        id: 3,
        details: 'details3C',
      },
      {
        id: 4,
        details: 'details3D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },
  },
  {
    id: 4,
    title: 'Business',
    hide: true,
    category: 'Wordpress site',
    link: 'Business',
    img: IMG_PROJECT.business[0],
    smallImages: [{
      id: 1,
      alt: "wordpress",
      src: IMG_TECH.wordpress,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "jquery",
      src: IMG_TECH.jquery,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'business',
      singleProjectDate: "18 Sep 2017",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.business[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.business[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.business[2],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'eBook',
      },
      {
        id: 2,
        title: 'services',
        details: 'uiDesignFrontendDevelopment',
      },
      {
        id: 3,
        title: 'website',
        details: "https://websitedemos.net/kathryn-ebook-author-02/",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Wordpress",
          "PHP",
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details4A',
      },
      {
        id: 2,
        details: 'details4B',
      },
      {
        id: 3,
        details: 'details4C',
      },
      {
        id: 4,
        details: 'details4D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },

  },
  {
    id: 5,
    title: 'Blog',
    category: 'Vue App',
    hide: false,
    link: 'Blog',
    img: IMG_PROJECT.blog[0],
    smallImages: [{
      id: 1,
      alt: "vue",
      src: IMG_TECH.vue,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "api",
      src: IMG_TECH.api,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'blog',
      singleProjectDate: "08 Mar 2020",
      singleProjectTag: 'frontend / backend',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.blog[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.blog[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.blog[2],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'saadaahNews',
      },
      {
        id: 2,
        title: 'services',
        details: 'blogServices',
      },
      {
        id: 3,
        title: 'website',
        details: "https://saadaahnews.com/",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Vue.js",
          "JavaScript",
          "TailwindCSS",
          "HTML",
          "CSS",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details5A',
      },
      {
        id: 2,
        details: 'details5B',
      },
      {
        id: 3,
        details: 'details5C',
      },
      {
        id: 4,
        details: 'details5D',
      },
      {
        id: 4,
        details: 'details5E',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },

  },
  {
    id: 6,
    title: 'Clothes Store',
    hide: true,
    category: 'Wordpress site',
    link: 'ClothesStore',
    img: IMG_PROJECT.clothesStore[0],
    smallImages: [{
      id: 1,
      alt: "wordpress",
      src: IMG_TECH.wordpress,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "jquery",
      src: IMG_TECH.jquery,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'clothesStore',
      singleProjectDate: "24 Sep 2022",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.clothesStore[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.clothesStore[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.clothesStore[2],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'clothesStore',
      },
      {
        id: 2,
        title: 'services',
        details: 'uiDesignFrontendDevelopment',
      },
      {
        id: 3,
        title: 'website',
        details: "https://websitedemos.net/brandstore-02/",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Wordpress",
          "PHP",
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details6A',
      },
      {
        id: 2,
        details: 'details6B',
      },
      {
        id: 3,
        details: 'details6C',
      },
      {
        id: 4,
        details: 'detailsCD',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },

  },
  {
    id: 7,
    title: 'Portfolio',
    hide: true,
    category: 'Vue App',
    link: 'Portfolio',
    img: IMG_PROJECT.portfolio[0],
    smallImages: [{
      id: 1,
      alt: "vue",
      src: IMG_TECH.vue,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "tailwind",
      src: IMG_TECH.tailwind,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'portfolio',
      singleProjectDate: "20 Mar 2023",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.portfolio[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.portfolio[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.portfolio[2],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'portfolio',
      },
      {
        id: 2,
        title: 'services',
        details: 'uiDesignFrontendDevelopment',
      },
      {
        id: 3,
        title: 'website',
        details: "https://webpress-annaba.netlify.app/",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Vue.js",
          "HTML",
          "CSS",
          "JavaScript",
          "TailwindCSS",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details7A',
      },
      {
        id: 2,
        details: 'details7B',
      },
      {
        id: 3,
        details: 'details7C',
      },
      {
        id: 4,
        details: 'details7D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },

  },

  {
    id: 8,
    title: 'Image Generator OpenAI',
    hide: true,
    category: 'Vue App',
    img: IMG_PROJECT.imageGen[0],
    link: 'ai-image-generation',
    smallImages: [{
      id: 1,
      alt: "vue",
      src: IMG_TECH.vue,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "api",
      src: IMG_TECH.api,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "bootstrap",
      src: IMG_TECH.bootstrap,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'imageGeneratorOpenAI',
      singleProjectDate: "02 Apr 2023",
      singleProjectTag: 'frontend / api',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.imageGen[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.imageGen[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.imageGen[2],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'imageGenerator',
      },
      {
        id: 2,
        title: 'services',
        details: 'aiImageGeneration',
      },
      {
        id: 3,
        title: 'website',
        details: "#",
      },
      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Vue.js",
          "API",
          "JavaScript",
          "TailwindCSS",
          "CSS",
          "HTML",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details8A',
      },
      {
        id: 2,
        details: 'details8B',
      },
      {
        id: 3,
        details: 'details8C',
      },
      {
        id: 4,
        details: 'details8D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },
  },
  {
    id: 9,
    title: 'Ecommerce Phone Store',
    hide: false,
    category: 'Laravel Vue Application',
    link: 'LaravelVueEcommercePhone',
    img: IMG_PROJECT.laravelVueEcom[0],
    smallImages: [{
      id: 1,
      alt: "laravel",
      src: IMG_TECH.laravel,
      width: WIDTH_60,
    },

    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "vue",
      src: IMG_TECH.vue,
      width: WIDTH_60,
    },
    {
      id: 4,
      alt: "bootstrap",
      src: IMG_TECH.bootstrap,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'laravelVueEcommercePhone',
      singleProjectDate: "26 Jul 2021",
      singleProjectTag: 'frontend / backend',
    },
    projectImages: [{
      id: 0,
      img: IMG_PROJECT.laravelVueEcom[0],
    },
    {
      id: 1,
      img: IMG_PROJECT.laravelVueEcom[1],
    },
    {
      id: 2,
      img: IMG_PROJECT.laravelVueEcom[2],
    },
    {
      id: 3,
      img: IMG_PROJECT.laravelVueEcom[3],
    },
    {
      id: 4,
      img: IMG_PROJECT.laravelVueEcom[4],
    },
    {
      id: 5,
      img: IMG_PROJECT.laravelVueEcom[5],
    },
    {
      id: 6,
      img: IMG_PROJECT.laravelVueEcom[6],
    },
    {
      id: 7,
      img: IMG_PROJECT.laravelVueEcom[7],
    },
    {
      id: 1,
      img: IMG_PROJECT.laravelVueEcom[8],
    },
    {
      id: 2,
      img: IMG_PROJECT.laravelVueEcom[9],
    },
    {
      id: 3,
      img: IMG_PROJECT.laravelVueEcom[10],
    },
    {
      id: 4,
      img: IMG_PROJECT.laravelVueEcom[11],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'eCommercePhoneStore',
      },
      {
        id: 2,
        title: 'services',
        details: 'phoneStoreServices',
      },
      {
        id: 3,
        title: 'website',
        details: "#",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Laravel",
          "Vue.js",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "HTML",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details9A',
      },
      {
        id: 2,
        details: 'details9B',
      },
      {
        id: 3,
        details: 'details9C',
      },
      {
        id: 4,
        details: 'details9D',
      },
      {
        id: 5,
        details: 'details9E',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },
  },

  {
    id: 10,
    title: 'Phones Store',
    hide: false,
    category: 'Wordpress site',
    link: 'PhonesStore',
    img: IMG_PROJECT.phonesStore[0],
    smallImages: [{
      id: 1,
      alt: "wordpress",
      src: IMG_TECH.wordpress,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "jquery",
      src: IMG_TECH.jquery,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'phonesStore',
      singleProjectDate: "26 Jul 2021",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.phonesStore[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.phonesStore[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.phonesStore[2],
    },
    {
      id: 4,
      img: IMG_PROJECT.phonesStore[3],
    },
    {
      id: 5,
      img: IMG_PROJECT.phonesStore[4],
    },
    {
      id: 6,
      img: IMG_PROJECT.phonesStore[5],
    },
    {
      id: 6,
      img: IMG_PROJECT.phonesStore[6],
    },
    {
      id: 6,
      img: IMG_PROJECT.phonesStore[7],
    },
    {
      id: 6,
      img: IMG_PROJECT.phonesStore[8],
    },
    {
      id: 6,
      img: IMG_PROJECT.phonesStore[9],
    },
    {
      id: 6,
      img: IMG_PROJECT.phonesStore[10],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'eCommercePhoneStore',
      },
      {
        id: 2,
        title: 'services',
        details: 'phoneStoreServices',
      },
      {
        id: 3,
        title: 'website',
        details: "#",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective0',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Wordpress",
          "PHP",
          "jQuery",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details10A',
      },
      {
        id: 2,
        details: 'details10B',
      },
      {
        id: 3,
        details: 'details10C',
      },
      {
        id: 4,
        details: 'details10D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },

  },
  {
    id: 11,
    title: 'Landing Page',
    hide: false,
    category: 'React App',
    link: 'landing-page',
    img: IMG_PROJECT.reactLanding[0],
    smallImages: [{
      id: 1,
      alt: "next",
      src: IMG_TECH.next,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "react",
      src: IMG_TECH.react,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'landingPage',
      singleProjectDate: "26 Aug 2023",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 0,
      img: IMG_PROJECT.reactLanding[0],
    },
    {
      id: 1,
      img: IMG_PROJECT.reactLanding[1],
    },
    {
      id: 2,
      img: IMG_PROJECT.reactLanding[2],
    },
    {
      id: 3,
      img: IMG_PROJECT.reactLanding[3],
    },
    {
      id: 4,
      img: IMG_PROJECT.reactLanding[4],
    },
    {
      id: 5,
      img: IMG_PROJECT.reactLanding[5],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'landingPage',
      },
      {
        id: 2,
        title: 'services',
        details: 'landingPage',
      },
      {
        id: 3,
        title: 'website',
        details: "https://landing-page-next-react.netlify.app/",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective1',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "React",
          "Next",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details11A',
      },
      {
        id: 2,
        details: 'details11B',
      },
      {
        id: 3,
        details: 'details11C',
      },
      {
        id: 4,
        details: 'details11D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/",
      },
      ],
    },

  },
  {
    id: 12,
    title: 'Bash Gate Landing Page',
    hide: false,
    category: 'React App',
    link: 'infogate',
    img: IMG_PROJECT.infogate[0],
    smallImages: [{
      id: 1,
      alt: "react",
      src: IMG_TECH.react,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "laravel",
      src: IMG_TECH.laravel,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 4,
      alt: "bootstrap",
      src: IMG_TECH.bootstrap,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'bashGate',
      singleProjectDate: "31 Dec 2023",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 0,
      img: IMG_PROJECT.infogate[0],
    },
    {
      id: 1,
      img: IMG_PROJECT.infogate[1],
    },
    {
      id: 2,
      img: IMG_PROJECT.infogate[2],
    },
    {
      id: 3,
      img: IMG_PROJECT.infogate[3],
    },
    {
      id: 4,
      img: IMG_PROJECT.infogate[4],
    },
    {
      id: 5,
      img: IMG_PROJECT.infogate[5],
    },
    {
      id: 6,
      img: IMG_PROJECT.infogate[6],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'bashGate',
      },
      {
        id: 2,
        title: 'services',
        details: 'onlineServices',
      },
      {
        id: 3,
        title: 'website',
        details: "https://infogate.sa",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective2',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "React",
          "Laravel",
          "PHP",
          "Bootstrap",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details12A',
      },
      {
        id: 2,
        details: 'details12B',
      },
      {
        id: 3,
        details: 'details12C',
      },
      {
        id: 4,
        details: 'details12D',
      },
      ],
      socialSharingsHeading: 'shareThis',
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
    img: IMG_PROJECT.stockifly[0],
    smallImages: [{
      id: 1,
      alt: "laravel",
      src: IMG_TECH.laravel,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "vue",
      src: IMG_TECH.vue,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 4,
      alt: "bootstrap",
      src: IMG_TECH.bootstrap,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'stockifly',
      singleProjectDate: "16 Oct 2022",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 0,
      img: IMG_PROJECT.stockifly[0],
    },
    {
      id: 1,
      img: IMG_PROJECT.stockifly[1],
    },
    {
      id: 2,
      img: IMG_PROJECT.stockifly[2],
    },
    {
      id: 3,
      img: IMG_PROJECT.stockifly[3],
    },
    {
      id: 4,
      img: IMG_PROJECT.stockifly[4],
    },
    {
      id: 5,
      img: IMG_PROJECT.stockifly[5],
    }
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'stockifly',
      },
      {
        id: 2,
        title: 'services',
        details: 'onlineServices',
      },
      {
        id: 3,
        title: 'website',
        details: "#",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective3',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Laravel",
          "Vue",
          "PHP",
          "Bootstrap",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details13A',
      },
      {
        id: 2,
        details: 'details13B',
      },
      {
        id: 3,
        details: 'details13C',
      },
      {
        id: 4,
        details: 'details13D',
      },
      ],
      socialSharingsHeading: 'shareThis',
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
    img: IMG_PROJECT.roxboro[0],
    smallImages: [{
      id: 1,
      alt: "laravel",
      src: IMG_TECH.laravel,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "bootstrap",
      src: IMG_TECH.bootstrap,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'roxboro',
      singleProjectDate: "03 Mar 2024",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 0,
      img: IMG_PROJECT.roxboro[0],
    },
    {
      id: 1,
      img: IMG_PROJECT.roxboro[1],
    },
    {
      id: 2,
      img: IMG_PROJECT.roxboro[2],
    },
    {
      id: 3,
      img: IMG_PROJECT.roxboro[3],
    },
    {
      id: 4,
      img: IMG_PROJECT.roxboro[4],
    },
    {
      id: 5,
      img: IMG_PROJECT.roxboro[5],
    },
    {
      id: 6,
      img: IMG_PROJECT.roxboro[6],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'roxboro',
      },
      {
        id: 2,
        title: 'services',
        details: 'onlineServices',
      },
      {
        id: 3,
        title: 'website',
        details: "https://roxboro.ca",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective4',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Laravel",
          "PHP",
          "Bootstrap",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details14A',
      },
      {
        id: 2,
        details: 'details14B',
      },
      {
        id: 3,
        details: 'details14C',
      },
      {
        id: 4,
        details: 'details14D',
      },
      ],
      socialSharingsHeading: 'shareThis',
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
    title: 'Stock management SaaS Garage',
    hide: false,
    category: 'Laravel Application',
    link: 'garage',
    img: IMG_PROJECT.garage[0],
    smallImages: [{
      id: 1,
      alt: "laravel",
      src: IMG_TECH.laravel,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "bootstrap",
      src: IMG_TECH.bootstrap,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'garage',
      singleProjectDate: "05 Dec 2023",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 0,
      img: IMG_PROJECT.garage[0],
    },
    {
      id: 1,
      img: IMG_PROJECT.garage[1],
    },
    {
      id: 2,
      img: IMG_PROJECT.garage[2],
    },
    {
      id: 3,
      img: IMG_PROJECT.garage[3],
    },
    {
      id: 4,
      img: IMG_PROJECT.garage[4],
    },
    {
      id: 5,
      img: IMG_PROJECT.garage[5],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'garage',
      },
      {
        id: 2,
        title: 'services',
        details: 'onlineServices',
      },
      {
        id: 3,
        title: 'website',
        details: "#",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective5',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Laravel",
          "PHP",
          "Bootstrap",
          "JavaScript",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details15A',
      },
      {
        id: 2,
        details: 'details15B',
      },
      {
        id: 3,
        details: 'details15C',
      },
      {
        id: 4,
        details: 'details15D',
      },
      {
        id: 5,
        details: 'details15E',
      },
      ],
      socialSharingsHeading: 'shareThis',
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
    title: 'Alphanex',
    hide: false,
    category: 'Wordpress site',
    link: 'Alphanex',
    img: IMG_PROJECT.alphanex[0],
    smallImages: [{
      id: 1,
      alt: "wordpress",
      src: IMG_TECH.wordpress,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "jquery",
      src: IMG_TECH.jquery,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'alphanex',
      singleProjectDate: "16 Jan 2023",
      singleProjectTag: 'ui / frontend',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.alphanex[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.alphanex[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.alphanex[2],
    },
    {
      id: 4,
      img: IMG_PROJECT.alphanex[3],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'alphanex',
      },
      {
        id: 2,
        title: 'services',
        details: 'uiDesignFrontendDevelopment',
      },
      {
        id: 3,
        title: 'website',
        details: "https://alphanex.fr/",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective6',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "Wordpress",
          "CSS",
          "JavaScript",
          "PHP",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details16A',
      },
      {
        id: 2,
        details: 'details16B',
      },
      {
        id: 3,
        details: 'details16C',
      },
      {
        id: 4,
        details: 'details16D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      ],
    },

  },
  {
    id: 17,
    title: 'Event Management',
    hide: false,
    category: 'Laravel React Web App',
    link: 'event-management',
    img: IMG_PROJECT.eventManagement[0],
    smallImages: [{
      id: 1,
      alt: "react",
      src: IMG_TECH.react,
      width: WIDTH_60,
    },
    {
      id: 2,
      alt: "laravel",
      src: IMG_TECH.laravel,
      width: WIDTH_60,
    },
    {
      id: 3,
      alt: "php",
      src: IMG_TECH.php,
      width: WIDTH_60,
    },
    {
      id: 4,
      alt: "tailwind",
      src: IMG_TECH.tailwind,
      width: WIDTH_60,
    },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'eventManagement',
      singleProjectDate: "22 Feb 2025",
      singleProjectTag: 'backend / frontend',
    },
    projectImages: [{
      id: 1,
      img: IMG_PROJECT.eventManagement[0],
    },
    {
      id: 2,
      img: IMG_PROJECT.eventManagement[1],
    },
    {
      id: 3,
      img: IMG_PROJECT.eventManagement[2],
    },
    {
      id: 4,
      img: IMG_PROJECT.eventManagement[3],
    },
    {
      id: 5,
      img: IMG_PROJECT.eventManagement[4],
    },
    {
      id: 6,
      img: IMG_PROJECT.eventManagement[5],
    },
    {
      id: 7,
      img: IMG_PROJECT.eventManagement[6],
    },
    {
      id: 8,
      img: IMG_PROJECT.eventManagement[7],
    },
    {
      id: 9,
      img: IMG_PROJECT.eventManagement[8],
    },
    {
      id: 10,
      img: IMG_PROJECT.eventManagement[9],
    },
    {
      id: 11,
      img: IMG_PROJECT.eventManagement[10],
    },
    {
      id: 12,
      img: IMG_PROJECT.eventManagement[11],
    },
    {
      id: 13,
      img: IMG_PROJECT.eventManagement[12],
    },
    {
      id: 14,
      img: IMG_PROJECT.eventManagement[13],
    },
    {
      id: 15,
      img: IMG_PROJECT.eventManagement[14],
    },
    ],
    projectInfo: {
      clientHeading: 'clientHeading',
      companyInfos: [{
        id: 1,
        title: 'name',
        details: 'newDay',
      },
      {
        id: 2,
        title: 'services',
        details: 'backendFrontendDevelopment',
      },
      {
        id: 3,
        title: 'website',
        details: "#",
      },

      ],
      objectivesHeading: 'objectivesHeading',
      objectivesDetails: 'objective7',
      technologies: [{
        title: 'technologiesTitle',
        techs: [
          "React",
          "Laravel",
          "Tailwind CSS",
          "PHP",
        ],
      },],
      projectDetailsHeading: 'challengeHeading',
      projectDetails: [{
        id: 1,
        details: 'details17A',
      },
      {
        id: 2,
        details: 'details17B',
      },
      {
        id: 3,
        details: 'details17C',
      },
      {
        id: 4,
        details: 'details17D',
      },
      ],
      socialSharingsHeading: 'shareThis',
      socialSharings: [{
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/",
      },
      ],
    },

  },
];

// Filter out projects where hide is true before exporting
const projects = allProjects.filter(project => !project.hide);
export default projects;