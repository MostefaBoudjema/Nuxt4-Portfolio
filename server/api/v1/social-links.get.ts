export default defineEventHandler((event) => {
  const query = getQuery(event);
  const lang = query.lang || 'en';
  
  let message = "Hello, I am interested in a free consultation.";
  if (lang === 'ar') message = "مرحباً، أنا مهتم بالحصول على استشارة مجانية.";
  if (lang === 'fr') message = "Bonjour, je suis intéressé par une consultation gratuite.";

  const whatsappMessage = encodeURIComponent(message);
  // Using the number that was originally in this file
  const whatsappUrl = `https://wa.me/2130793692289?text=${whatsappMessage}`;

  return [
    {
      id: 1,
      name: 'Website',
      icon: 'globe',
      url: 'https://mostefa-boudjema.vercel.app/',
    },
    {
      id: 2,
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/MostefaBoudjema',
    },
    {
      id: 3,
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/mostefa-boudjema',
    },
    {
      id: 4,
      name: 'Telegram',
      icon: 'telegram',
      url: 'https://t.me/mostefa28',
    },
    {
      id: 5,
      name: 'Whatsapp',
      icon: 'whatsapp',
      url: whatsappUrl,
    },
  ];
});
