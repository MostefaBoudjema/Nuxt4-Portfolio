import heroImage from '/images/developer.svg';
import heroImageDark from '/images/developer-dark.svg';
import logoDarkAr from '/images/logo-dark-ar.svg';
import logoLightAr from '/images/logo-light-ar.svg';
import logoDark from '/images/logo-dark.svg';
import logoLight from '/images/logo-light.svg';
import page404 from '/images/404-page.png';
import profilePhoto from '/images/me3.webp';
import whatsapp from '/images/whatsapp2.svg';

const configs={
  name: 'Mostefa Boudjema',
  jobTitle: 'Job Title4',
  hero_image: heroImage,
  hero_image_dark: heroImageDark,
  logo_dark: logoDark,
  logo_light: logoLight,
  logo_dark_ar: logoDarkAr,
  logo_light_ar: logoLightAr,
  page_404: page404,
  profile_photo: profilePhoto,
  whatsapp: whatsapp,
  cv_path: import.meta.env.VITE_CV_PATH||'/files/MostefaBoudjema-Resume.pdf',
  videoLinkEn: import.meta.env.VITE_VIDEO_LINK_EN||"https://www.youtube.com/embed/CMu_27ZURwA?si=sriXHIbvcos5620e",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER||"213793692289",
  full_list: JSON.parse(import.meta.env.VITE_FULL_LIST||'[30,3,10,29,14,19,27,18,9,26,15,24,22,12,11,5,23,4,6,28,7,24,8,2,25,1,13,21,16,17,20]'),
  home_list: JSON.parse(import.meta.env.VITE_HOME_LIST||'[30,3,10,29,14,19]'),
  show_cv: import.meta.env.VITE_SHOW_CV==='true'||false,
  show_pricing: import.meta.env.VITE_SHOW_SHOW_PRICING==='true'||false,
  show_multi_lang: import.meta.env.SHOW_MULTI_LANG==='true'||false,
  show_hire_me: import.meta.env.VITE_SHOW_HIRE_ME==='true'||false,
  show_contact_form: import.meta.env.VITE_SHOW_CONTACT_FORM==='true'||false,
  show_blog: import.meta.env.VITE_SHOW_BLOG==='true'||false,
  contacts: [
    {
      id: 1,
      name: 'Annaba, Algeria',
      icon: 'map-pin',
    },
    {
      id: 2,
      name: 'mostefa.boudjema.dev@gmail.com',
      icon: 'mail',
    },
    {
      id: 3,
      name: '+213 793 69 22 89',
      icon: 'phone',
    },
  ],
  socials: [
    {
      id: 1,
      name: 'Telegram',
      link: 'Telegram',
      icon: 'map-pin',
    },
  ],
  categories: [
    {
      id: 1,
      value: "Laravel Application",
      name: "Laravel Application",
    },
    {
      id: 2,
      value: "Laravel Vue Application",
      name: "Laravel Vue Application",
    },
    {
      id: 3,
      value: "Wordpress site",
      name: "Wordpress site",
    },
    {
      id: 4,
      value: "Vue App",
      name: "Vue App",
    },
  ],
}

export default configs;
