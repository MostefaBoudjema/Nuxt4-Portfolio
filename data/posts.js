// Blog posts data
import me1 from '/images/me1.webp';
import cover1 from '/images/posts/getting-started-laravel-11.webp';
import cover2 from '/images/posts/best-tech-2025.webp';
import cover3 from '/images/posts/best-laravel-tech-2025.webp';
import cover4 from '/images/posts/Best-Sites-for-Finding-Remote-Work-Online.webp';
import cover5 from '/images/posts/laravel-packages-you-must-know.webp';
import cover6 from '/images/posts/best-mvc-frameworks-2025.webp';
import cover7 from '/images/posts/vuejs-beginner-guide.webp';
import cover8 from '/images/posts/advanced-vuejs-features.webp';
import cover9 from '/images/posts/react-for-beginners.webp';
import cover10 from '/images/posts/advanced-react-performance-patterns.webp';
import cover11 from '/images/posts/algorithm-patterns-dev-interview.webp';
import cover12 from '/images/posts/laravel-advanced-tips.webp';
import cover13 from '/images/posts/common-web-dev-interview-questions.webp';
import cover14 from '/images/posts/eager-vs-lazy-loading-laravel.webp';
import cover15 from '/images/posts/laravel-pulse-vs-telescope.webp';
import cover16 from '/images/posts/find-website-clients.webp';
import cover17 from '/images/posts/laravel-filament-guide.webp';
import cover18 from '/images/posts/laravel-nova-guide.webp';
import cover19 from '/images/posts/laravel-multi-tenancy-guide.webp';
import cover20 from '/images/posts/laravel-dto-vs-model.webp';
import cover21 from '/images/posts/firebase-vs-supabase.webp';
import cover22 from '/images/posts/laravel-service-container-vs-provider.webp';

// Nuxt 3: Use runtime config for useAllPosts
import { useRuntimeConfig } from '#imports'

let postsList=[
  {
    id: 1,
    lang: 'en',
    title: 'Getting Started with Laravel 11: A Step-by-Step Guide',
    summary: 'A beginner-friendly walkthrough to set up, configure, and run your first Laravel 11 application.',
    date: '2025-07-02',
    tags: ['laravel', 'php', 'getting started'],
    slug: 'getting-started-laravel-11',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover1,
    readingTime: '4 min read',
    published: true,
    category: 'Backend',
    updatedAt: '2025-07-02',
    metaDescription: 'Learn how to install and run your first Laravel 11 project step-by-step.',
    excerpt: 'Kickstart your Laravel 11 journey with this beginner-friendly guide to installation, configuration, and setup.',
    content: `
    ## Introduction
    
    Laravel 11 is a powerful and elegant PHP framework built to make web development faster and cleaner. Whether you're building a personal project or an enterprise-level app, Laravel provides a rich set of tools to speed up development.
    
    In this guide, you'll learn how to set up Laravel 11 from scratch, run your first app, and understand the basic file structure and flow of a Laravel project.
    
    ---
    
    ## Step 1: Install Laravel
    
    Before starting, make sure you have Composer installed globally. Composer is a PHP package manager used to install Laravel and its dependencies.
    
    To create a new Laravel 11 project, run:
    
    \`\`\`bash
    composer create-project laravel/laravel:^11.0 my-app
    \`\`\`
    
    This command creates a new Laravel project in the \`my-app\` directory.
    
    > ✅ **Tip:** Laravel 11 requires PHP 8.2+.
    
    ---
    
    ## Step 2: Serve the App
    
    Navigate into your newly created project directory:
    
    \`\`\`bash
    cd my-app
    \`\`\`
    
    Now start the development server:
    
    \`\`\`bash
    php artisan serve
    \`\`\`
    
    Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser — you should see Laravel’s default welcome page.
    
    ---
    
    ## Step 3: Set Up Environment Configuration
    
    Open the \`.env\` file — this contains all your app's environment-specific settings.
    
    For example, to configure your database connection:
    
    \`\`\`env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=myapp_db
    DB_USERNAME=root
    DB_PASSWORD=
    \`\`\`
    
    Run migrations to prepare the default tables:
    
    \`\`\`bash
    php artisan migrate
    \`\`\`
    
    ---
    
    ## Step 4: Understand the Folder Structure
    
    Laravel has a clean and intuitive structure:
    
    - \`app/\`: Contains your core app logic (models, controllers).
    - \`routes/web.php\`: Define your web routes here.
    - \`resources/views/\`: Blade templates go here.
    - \`database/migrations/\`: DB schema definitions.
    - \`public/\`: Web-accessible directory.
    
    Understanding this layout early will help you navigate and scale your project smoothly.
    
    ---
    
    ## Step 5: Create Your First Route
    
    Let’s edit the default route in \`routes/web.php\`:
    
    \`\`\`php
    Route::get('/', function () {
        return view('welcome');
    });
    \`\`\`
    
    To return custom content:
    
    \`\`\`php
    Route::get('/hello', function () {
        return 'Hello, Laravel 11!';
    });
    \`\`\`
    
    Visit [http://127.0.0.1:8000/hello](http://127.0.0.1:8000/hello) — you should see your custom message.
    
    ---
    
    ## Step 6: Generate a Controller
    
    You can create a controller to handle business logic using Artisan:
    
    \`\`\`bash
    php artisan make:controller HomeController
    \`\`\`
    
    This creates \`app/Http/Controllers/HomeController.php\`.
    
    Edit it like so:
    
    \`\`\`php
    public function index()
    {
        return view('home');
    }
    \`\`\`
    
    Then register it in your routes:
    
    \`\`\`php
    Route::get('/home', [HomeController::class, 'index']);
    \`\`\`
    
    ---
    
    ## Step 7: Blade Templates
    
    Create a new view file:
    
    \`\`\`
    resources/views/home.blade.php
    \`\`\`
    
    Add some HTML:
    
    \`\`\`blade
    <!DOCTYPE html>
    <html>
    <head>
        <title>My First Page</title>
    </head>
    <body>
        <h1>Welcome to Laravel 11!</h1>
    </body>
    </html>
    \`\`\`
    
    Blade is Laravel's templating engine and supports conditionals, loops, and includes.
    
    ---
    
    ## Step 8: What's Next?
    
    Now that you're up and running, here are some next steps:
    
    - Learn about **Eloquent** ORM for working with databases.
    - Use **middleware** to protect routes.
    - Add **authentication** using Laravel Breeze or Jetstream.
    - Try building a simple CRUD app.
    - Explore **queues**, **events**, and **notifications**.
    
    ---
    
    ## Conclusion
    
    You’ve just created and configured a Laravel 11 application, set up your first route, created a controller, and built a basic view.
    
    Laravel's learning curve is smooth, and the ecosystem is incredibly rich. Stick with it, build real things, and you’ll master backend development in no time.
    
    > ⭐ Bonus tip: Follow Laravel News and the official docs to stay updated.
    
    Happy coding! 🚀
    `
  },

  {
    id: 2,
    lang: 'en',
    title: 'Best Technology to Learn in 2025',
    summary: 'Explore the top technologies you should master in 2025 to stay ahead in tech.',
    date: '2025-07-05',
    tags: ['trending tech', 'career growth', 'web development'],
    slug: 'best-technology-to-learn-2025',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover2,
    readingTime: '4 min read',
    published: true,
    category: 'Tech Trends',
    updatedAt: '2025-07-05',
    metaDescription: 'Discover the best technologies to learn in 2025 for developers and tech enthusiasts.',
    excerpt: 'Top skills to stay ahead in the rapidly evolving tech industry.',
    content: `## Best Technologies to Learn in 2025

    Technology is evolving faster than ever, and staying updated is critical for every developer. Whether you're starting out or looking to upskill, here are the top tech trends to invest in for 2025.
    
    ---
    
    ### 🚀 1. **AI & Machine Learning**
    
    AI is no longer optional — it's shaping industries. From AI coding assistants to intelligent automation and data prediction, tools like **OpenAI**, **TensorFlow**, and **PyTorch** are leading the way.
    
    > **Tip:** Start by learning Python, then move into model training and deployment using cloud tools like AWS Sagemaker or Google AI Studio.
    
    ---
    
    ### 🕸️ 2. **WebAssembly (Wasm)**
    
    WebAssembly allows you to run low-level code in the browser at near-native speed. This is a game changer for performance-critical applications like gaming, video editing, or 3D modeling in the browser.
    
    > **Why it matters:** It expands what’s possible with JavaScript and allows languages like Rust or C++ to run in the browser.
    
    ---
    
    ### 🌐 3. **Edge Computing**
    
    Data is moving closer to the user. With **Edge Computing**, apps become faster and more scalable by processing data at the source (user’s location) instead of the central server.
    
    - Frameworks to explore: **Cloudflare Workers**, **AWS Lambda@Edge**, **Vercel Edge Functions**.
    - Ideal for: IoT apps, real-time dashboards, location-aware services.
    
    ---
    
    ### ⚡ 4. **Bun & Deno**
    
    Node.js has competition. **Bun** and **Deno** are modern runtimes that offer better speed, built-in TypeScript support, and simpler tooling.
    
    > **Why switch?** Bun is 3x faster than Node in many tasks, and Deno prioritizes security and modern APIs.
    
    ---
    
    ### 🔧 5. **Laravel + Livewire / Filament**
    
    Laravel remains dominant in PHP. In 2025, tools like **Livewire**, **Filament**, and **Laravel Octane** are making full-stack development even smoother and faster.
    
    - **Livewire**: Build interactive UIs without leaving PHP.
    - **Filament**: Admin panels and custom dashboards in minutes.
    - **Laravel Octane**: Supercharge performance with Swoole or RoadRunner.
    
    ---
    
    ### 📱 6. **Cross-Platform Mobile: Flutter & React Native**
    
    Businesses want fast deployment across platforms. **Flutter** (by Google) and **React Native** (by Meta) are still top picks for writing once and deploying to iOS & Android.
    
    - Flutter’s UI engine gives native-like experience.
    - React Native has a larger ecosystem and third-party libraries.
    
    ---
    
    ### 🎯 Final Thoughts
    
    Don’t chase hype — choose based on your goals.
    
    - Want backend mastery? Laravel + Octane + Filament.
    - Want performance? WebAssembly + Bun.
    - Want to break into AI? Python + TensorFlow + OpenAI APIs.
    
    **Master fewer tools deeply**, rather than skimming the surface of too many. 2025 is all about smart specialization and adapting fast.
    
    ---
    
    _“Learning never exhausts the mind.” – Leonardo da Vinci_
    `
  },
  {
    id: 2,
    lang: 'ar',
    title: 'أفضل التقنيات لتعلمها في 2025',
    summary: 'اكتشف أبرز التقنيات اللي لازم تتعلمها في 2025 باش تبقى دايمًا مواكب.',
    date: '2025-07-05',
    tags: ['تقنية حديثة', 'تطوير المهارات', 'تطوير الويب', 'laravel'],
    slug: 'best-technology-to-learn-2025-ar',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'مطور لارافيل'
    },
    coverImage: cover2,
    readingTime: '4 دقائق قراءة',
    published: true,
    category: 'اتجاهات تقنية',
    updatedAt: '2025-07-05',
    metaDescription: 'تعرف على أفضل التقنيات اللي لازم تتعلمها في 2025 كمطور أو هاوي للتكنولوجيا.',
    excerpt: 'مهارات أساسية باش تبقى سابق في عالم التقنية المتطور.',
    content: `## أفضل التقنيات لتعلمها في 2025

التكنولوجيا راهي تتطور بسرعة كبيرة، ولازم كل مطور يكون دايمًا على الخط. سواء كنت مبتدئ أو حاب تطور مهاراتك، هاذي أبرز المجالات اللي تستاهل تعطيها من وقتك في 2025.

---

### 🚀 1. **الذكاء الاصطناعي وتعلم الآلة**

الذكاء الاصطناعي ما بقاش حاجة ثانوية، راهو يغيّر في مجالات كاملة. من مساعدات البرمجة إلى التنبؤ وتحليل البيانات، أدوات كيما **OpenAI**، **TensorFlow** و **PyTorch** راهي رائدة.

> **نصيحة:** تعلم Python كبداية، وبعدها ادخل لعالم تدريب النماذج وخدم Deployment على أدوات سحابية كيف AWS Sagemaker أو Google AI Studio.

---

### 🕸️ 2. **WebAssembly (Wasm)**

تخيل تخدم كود منخفض المستوى مباشرة في المتصفح وبسرعة قريبة من native! WebAssembly ولىّ ضروري لتطبيقات الأداء العالي كيما الألعاب أو تعديل الفيديو.

> **واش الفايدة؟** يخليك تستعمل لغات كيما Rust أو C++ فالـ browser ويزيد لك إمكانيات JavaScript.

---

### 🌐 3. **الحوسبة الطرفية (Edge Computing)**

وش نقصد بـ Edge Computing؟ معناها البيانات تتعالج قريب من المستخدم، ماش في الخوادم المركزية. هكذا تولي التطبيقات أسرع وأسهل في التوسع.

- جرب: **Cloudflare Workers**، **AWS Lambda@Edge**، **Vercel Edge Functions**.
- تخدم مليح مع: تطبيقات إنترنت الأشياء، لوحات تحكم حية، وخدمات تعتمد على الموقع.

---

### ⚡ 4. **Bun و Deno**

Node.js ولى عندو منافسين. **Bun** و **Deno** يوفروا أداء أعلى، دعم TypeScript مباشر، وأدوات أسهل.

> **علش تبدل؟** Bun أسرع 3 مرات في بزاف المهام، وDeno يركز على الأمان ودعم حديث للـ APIs.

---

### 🔧 5. **Laravel + Livewire / Filament**

Laravel مازال ملك في عالم PHP. أدوات كيما **Livewire**، **Filament**، و **Laravel Octane** سهّلت بزاف خدمة الواجهات والإدارة.

- **Livewire**: واجهات تفاعلية بلا ما تخرج من PHP.
- **Filament**: لوحات إدارة جميلة في وقت قصير.
- **Laravel Octane**: أداء عالي مع Swoole ولا RoadRunner.

---

### 📱 6. **Flutter و React Native**

الشركات تحب تطبيقات تخدم على iOS وAndroid في نفس الوقت. **Flutter** من Google و**React Native** من Meta مازالو خيارات ممتازة.

- Flutter يعطي تجربة شبه أصلية.
- React Native عندو مجتمع ضخم ومكتبات كثيرة.

---

### 🎯 خلاصة

ما تروحش تجري ورا الترندات فقط — ختار حسب أهدافك.

- باغي تتقن الباك؟ Laravel + Octane + Filament.
- باغي أداء؟ WebAssembly + Bun.
- حاب تدخل عالم الذكاء الاصطناعي؟ Python + TensorFlow + OpenAI APIs.

**تعلم أقل، لكن بعمق**. سنة 2025 تتطلب تخصص ذكي وتطور سريع.

---

_“العقل لا يتعب من التعلم.” – ليوناردو دا فينشي_
`
  }
  ,
  {
    id: 3,
    lang: 'en',
    title: 'Best Laravel-Related Technologies to Learn in 2025',
    summary: 'Explore top Laravel-related tools and technologies that will boost your productivity and job prospects in 2025.',
    date: '2025-07-07',
    tags: ['laravel', 'php', 'backend', 'productivity'],
    slug: 'best-laravel-related-tech-2025',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover3,
    readingTime: '10 min read',
    published: true,
    category: 'Backend',
    updatedAt: '2025-07-07',
    metaDescription: 'Discover the top Laravel-related tools and technologies to learn in 2025 — from Livewire and Filament to Octane and Vapor.',
    excerpt: 'Master the Laravel ecosystem in 2025 with these powerful tools and frameworks.',
    content: `
  ## Introduction
  
  Laravel keeps evolving, and the ecosystem around it is getting more powerful. In 2025, mastering Laravel alone isn’t enough — you need to embrace the tools and packages that supercharge development.
  
  Here are the **top Laravel-related technologies** you should learn this year to stay relevant and efficient.
  
  ---
  
  
  ### 1. **Laravel Livewire**
  
  Livewire lets you build dynamic, reactive interfaces using only Blade and PHP — no JavaScript needed. Perfect for building dashboards, admin panels, or interactive components without switching stacks.
  
  > 🔥 Bonus: Pair it with Alpine.js for extra interactivity.
  
  ---
  
  
  ### 2. **Filament PHP**
  
  Filament is the go-to tool in 2025 for building beautiful admin panels, forms, and tables — fast.
  
  - Built on top of Livewire and Tailwind.
  - Includes support for multi-tenancy, custom widgets, and actions.
  - Great for internal tools, SaaS dashboards, and CMS-like interfaces.
  
  ---
  
  
  ### 3. **Laravel Octane**
  
  Need speed? Octane boosts your Laravel app performance by running it using Swoole or RoadRunner.
  
  - Up to 10x faster response time.
  - Ideal for high-traffic APIs and real-time apps.
  
  ---
  
  
  ### 4. **Laravel Pulse**
  
  A new, elegant way to monitor your app's health and performance — without third-party services.
  
  - See queue times, slow queries, and more.
  - Integrated with Laravel, no external config needed.
  
  ---
  
  
  ### 5. **Laravel Breeze + API Stack**
  
  For lightweight authentication and a solid API foundation, Laravel Breeze is now commonly used with:
  
  - Sanctum (token-based auth)
  - Inertia.js (for full-stack apps)
  - Tailwind (for styling)
  
  Want to build a modern SPA or hybrid app with Laravel? This is your starter pack.
  
  ---
  
  
  ### 6. **Pest PHP**
  
  Forget clunky PHPUnit syntax. Pest is a modern, readable PHP testing framework built for humans.
  
  - Simple syntax
  - Fast feedback loop
  - Built for Laravel out of the box
  
  ---
  
  
  ### 7. **Laravel Forge / Vapor**
  
  DevOps for developers. Forge (for traditional servers) and Vapor (for serverless on AWS) make deployment painless.
  
  - Forge is great for VPS hosting (DigitalOcean, Linode, etc.)
  - Vapor scales apps on demand, ideal for startups
  
  ---
  
  
  ### 8. **Tailwind CSS & Blade Components**
  
  If you're still writing vanilla CSS with Blade — stop. Tailwind + reusable Blade components = clean, consistent UIs fast.
  
  > Tip: Combine with Laravel's \`@props\` syntax to build modular UI kits.
  
  ---
  
  
  ## Conclusion
  
  Laravel isn’t just a framework — it's a whole ecosystem.
  
  By mastering tools like Livewire, Filament, Octane, and Vapor, you position yourself as a **modern Laravel developer** — one who can build, ship, and scale full-featured apps efficiently.
  
  > Focus on the tools that align with your goals (SaaS, APIs, admin panels), and go deep. Laravel in 2025 is all about productivity and performance.
  
  `
  },
  {
    id: 3,
    lang: 'fr',
    title: 'Les Meilleures Technologies Liées à Laravel à Apprendre en 2025',
    summary: 'Découvrez les meilleurs outils et technologies autour de Laravel qui boosteront votre productivité et vos opportunités en 2025.',
    date: '2025-07-07',
    tags: ['laravel', 'php', 'backend', 'productivité'],
    slug: 'meilleures-technos-laravel-2025',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Développeur Laravel'
    },
    coverImage: cover3,
    readingTime: '10 min de lecture',
    published: true,
    category: 'Backend',
    updatedAt: '2025-07-07',
    metaDescription: 'Découvrez les outils et technologies Laravel les plus puissants à maîtriser en 2025 — Livewire, Filament, Octane, Vapor et plus encore.',
    excerpt: 'Maîtrisez l’écosystème Laravel en 2025 avec ces outils et frameworks incontournables.',
    content: `
## Introduction

Laravel évolue constamment, et son écosystème devient de plus en plus riche. En 2025, il ne suffit plus de connaître Laravel — il faut aussi maîtriser les outils qui accélèrent le développement.

Voici les **technologies incontournables liées à Laravel** à apprendre cette année.

---

### 1. **Laravel Livewire**

Livewire vous permet de créer des interfaces réactives en utilisant uniquement Blade et PHP — pas besoin de JavaScript.

> 🔥 Bonus : utilisez-le avec Alpine.js pour encore plus d’interactivité.

---

### 2. **Filament PHP**

Filament est l’outil phare de 2025 pour créer rapidement des interfaces admin élégantes.

- Basé sur Livewire et Tailwind.
- Supporte la multi-location, les widgets personnalisés et les actions.
- Parfait pour des outils internes, backoffices SaaS, CMS, etc.

---

### 3. **Laravel Octane**

Besoin de performances ? Octane booste vos apps Laravel grâce à Swoole ou RoadRunner.

- Jusqu’à 10 fois plus rapide.
- Idéal pour des APIs à fort trafic ou apps en temps réel.

---

### 4. **Laravel Pulse**

Un moyen élégant de surveiller la performance de votre app — sans service externe.

- Données sur les files d’attente, requêtes lentes, etc.
- Aucune configuration, intégré nativement.

---

### 5. **Laravel Breeze + API Stack**

Pour un démarrage API léger mais solide : Breeze est souvent combiné avec :

- Sanctum (auth par token)
- Inertia.js (full-stack)
- Tailwind CSS (style)

Un pack idéal pour créer une SPA moderne.

---

### 6. **Pest PHP**

Pest simplifie les tests en PHP avec une syntaxe claire et moderne.

- Simple et lisible
- Rapide à exécuter
- Intégré à Laravel

---

### 7. **Laravel Forge / Vapor**

Des outils DevOps faits pour les devs : déploiement facile avec Forge (VPS) ou Vapor (serverless AWS).

- Forge : simple et rapide pour VPS.
- Vapor : scalable et parfait pour startups.

---

### 8. **Tailwind CSS & Composants Blade**

Tailwind + Blade Components = développement d’interfaces cohérentes et rapides.

> Astuce : combinez avec \`@props\` pour des composants modulaires.

---

## Conclusion

Laravel, c’est plus qu’un framework : c’est un écosystème complet.

Maîtriser Livewire, Filament, Octane et Vapor fera de vous un **développeur Laravel moderne** — rapide, efficace et prêt à scaler.

> Choisissez les outils selon vos objectifs (SaaS, API, outils internes) et allez en profondeur.
`
  }
  ,
  {
    id: 3,
    lang: 'ar',
    title: 'أهم التقنيات المرتبطة بلارافيل لي لازمك تتعلمها في 2025',
    summary: 'شوف الأدوات والتقنيات لي مع لارافيل باش تزيد في الإنتاجية وتفتح بيبان جديدة في خدمتك كمطور.',
    date: '2025-07-07',
    tags: ['laravel', 'php', 'backend', 'إنتاجية'],
    slug: 'تقنيات-لارافيل-2025',
    author: {
      name: 'مصطفى بوجمعة',
      avatar: me1,
      bio: 'مطور لارافيل'
    },
    coverImage: cover3,
    readingTime: '10 دقايق قراية',
    published: true,
    category: 'الخلفية',
    updatedAt: '2025-07-07',
    metaDescription: 'تعرف على الأدوات والتقنيات المهمة لي تخليك قوي في لارافيل في عام 2025 — كيف Livewire، Filament، Octane، Vapor، وغيرهم.',
    excerpt: 'تحكم في منظومة لارافيل في 2025 بهذو الأدوات القوية وسهّل حياتك كمطور.',
    content: `
## المقدمة

لارافيل راهو يتطور من عام لعام، واللي يخدمو بيه ويفهمو النظام اللي معاه، ديما يكونو سابقين بخطوة. في 2025، ما يكفيش تعرف تخدم غير لارافيل — لازمك تتعلم الأدوات لي تعاونك تخدم أسرع وبطريقة أنظف.

هاك **أهم الأدوات والتقنيات** المرتبطة بلارافيل لي ننصحك تتعلمهم هاد العام.

---

### 1. **Laravel Livewire**

Livewire يسمحلك تبني واجهات تفاعلية بلا ما تمس الجافاسكريبت — غير Blade وPHP.

> 🔥 نصيحة: زيدلو Alpine.js وراح تولي عندك واجهات خفيفة وتخدم بنينة.

---

### 2. **Filament PHP**

Filament ولا اليوم هو الحل السريع والجميل باش تبني لوحات تحكم ونماذج وجدوال.

- مبني فوق Livewire وTailwind.
- يدعم Multi-tenancy، Widgets، وActions مخصصة.
- ممتاز لأدوات داخلية، SaaS، ولوحات الإدارة.

---

### 3. **Laravel Octane**

حاب تطبيقك يكون سريع؟ Octane يخلي استجابة لارافيل أسرع حتى 10 مرات باستعمال Swoole ولا RoadRunner.

- مثالي للتطبيقات لي فيها ضغط كبير أو حية (real-time).

---

### 4. **Laravel Pulse**

أداة جديدة باش تراقب أداء التطبيق ديالك بلا ما تستعمل خدمات خارجية.

- تشوف الطوابير، الاستعلامات الثقيلة، والبطء في العمليات.
- كلشي مدمج في لارافيل بلا صداع راس.

---

### 5. **Laravel Breeze + API Stack**

بغيت تبدأ API نظيف وخفيف؟ استعمل Breeze مع:

- Sanctum (توثيق بالتوكن)
- Inertia.js (لو بغيت Full-stack app)
- Tailwind (للتصميم)

هدومة يخلوك تنطلق في بناء SPA عصري بلا مشاكل.

---

### 6. **Pest PHP**

Pest جا باش يسهل علينا كتابة التستات. بسيط، واضح، ويدعم لارافيل 

- الكود مفهوم، سهل القراءة.
- التجارب أسرع من PHPUnit.
- مثالي لمطوري لارافيل.

---

### 7. **Laravel Forge / Vapor**

Forge وVapor يخلوك تنشر التطبيقات بلا ما تدخل في مشاكل DevOps:

- Forge: يخدم مع VPS كيما DigitalOcean وLinode.
- Vapor: scalable على AWS، مثالي للي يخدمو SaaS.

---

### 8. **Tailwind CSS + Blade Components**

كفاك من CSS العشوائي! Tailwind + Blade Components يخلوك تبني واجهات واضحة وسريعة.

> نصيحة: استعمل \`@props\` وديّر مكونات تعاود تستعملها وين ما حبيت.

---

## الخاتمة

لارافيل ماشي غير فريمورك — راهو نظام كامل يخليك تبني وتنشر وتطور مشاريع قوية.

إذا ركزت على الأدوات الصح كيما Livewire، Filament، Octane وVapor، راك تولي مطور لارافيل عصري يخدم بذكاء وسرعة.

> نصيحة أخوية: شوف انت وين حاب تروح (SaaS؟ APIs؟ لوحات تحكم؟) وخدم صح على الأدوات لي تخدم مصلحتك.
`
  }

  ,
  {
    id: 4,
    lang: 'en',
    title: 'Top Remote Job Platforms for Full-Stack Developers (International-Friendly)',
    summary: 'A curated list of the best remote job platforms that hire full-stack developers globally — no entry fees, no location bias.',
    date: '2025-07-09',
    tags: ['remote work', 'full-stack', 'job search', 'laravel', 'vue', 'freelance'],
    slug: 'top-remote-job-platforms-fullstack-developers',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover4,
    readingTime: '5 min read',
    published: true,
    category: 'Career',
    updatedAt: '2025-07-09',
    metaDescription: 'Explore the top international-friendly remote job platforms for full-stack developers. Laravel, Vue, and React developers welcome.',
    excerpt: 'Best remote job platforms for full-stack developers that support international applicants without fees. Includes curated dev boards and freelance sites.',
    content: `
  ## Introduction
  
  Remote work is booming, but finding the **right platforms** that accept **international applicants** without charging upfront fees can be tricky — especially as a **full-stack developer** working with stacks like Laravel, Vue, or React.
  
  Here’s a curated, no-fluff list of the best platforms that support **international full-stack devs**, including from countries like Algeria.
  
  ---
  
  ## 🏆 Top Picks for Full-Stack Developers
  
  ### 1. **Toptal** – [toptal.com](https://www.toptal.com)
  - 🔍 Highly selective (you’ll need to pass tests)
  - 💼 Enterprise clients + top startups
  - 💰 Very high-paying contracts
  - 📍 Global — open to devs from anywhere
  
  ---
  
  ### 2. **Turing** – [turing.com](https://www.turing.com)
  - 🤖 AI matches your profile with U.S. companies
  - 🧪 Technical skill assessment required
  - 🔥 Full-time, long-term remote roles
  - ✅ Laravel + Vue/React stacks are in demand
  
  ---
  
  ### 3. **Arc** – [arc.dev](https://arc.dev)
  - 🔎 Focused on remote developers only
  - 👌 Offers freelance and full-time positions
  - 🌍 International applicants welcome
  - 🧠 Curated roles for mid/senior devs
  
  ---
  
  ## 💻 Dev-Friendly Job Boards
  
  ### 4. **We Work Remotely** – [weworkremotely.com](https://weworkremotely.com)
  - 📄 Simple, effective remote job listings
  - 📦 Dedicated full-stack section
  - ✅ No sign-up required
  - 🗺 Most roles are open globally
  
  ---
  
  ### 5. **Remote OK** – [remoteok.com](https://remoteok.com)
  - 🔍 Tags like “Laravel”, “Vue”, “Full-stack”
  - 🛠 Startups, tech companies, and SaaS
  - 💬 No login required
  - 🌍 International-friendly by default
  
  ---
  
  ### 6. **Remotive** – [remotive.io](https://remotive.io)
  - 🧭 Easy filters by job type, stack, and location
  - 💼 Good quality control on listings
  - 🌎 Most companies support async and global teams
  
  ---
  
  ## 🌍 Freelance Marketplaces (Free to Join)
  
  ### 7. **Upwork** – [upwork.com](https://upwork.com)
  - 💼 Massive client base
  - 📈 Laravel/Vue/React full-stack gigs in abundance
  - ⚠️ Competitive early on, but scalable
  - ✅ Open to developers from anywhere
  
  ---
  
  ### 8. **Lemon.io** – [lemon.io](https://lemon.io)
  - 🧠 You’ll need to pass vetting tests
  - 🤑 Matches with EU/US-based clients
  - 📦 Laravel + React/Vue = strong demand
  
  ---
  
  ### 9. **Freelancer.com** – [freelancer.com](https://freelancer.com)
  - 🎯 Tons of Laravel/React/Vue full-stack projects
  - 📉 Lower budgets common, but good exposure
  - ✅ Global access and easy sign-up
  
  ---
  
  ## 🎯 Bonus Options
  
  ### 10. **Jobspresso** – [jobspresso.co](https://jobspresso.co)
  - 🔍 Fully remote, dev-heavy listings
  - 🌍 Offers roles in dev, design, product
  - ✅ Works well for full-stack roles
  
  ### 11. **Working Nomads** – [workingnomads.co](https://www.workingnomads.co)
  - 📧 Job alerts by category (dev, full-stack, etc.)
  - 📊 Aggregates quality listings across the web
  - ✅ Global-friendly filters
  
  ---
  
  ## Conclusion
  
  If you're a **full-stack developer** with Laravel, Vue, React, or similar in your stack, you don't need to limit your job search to local markets or low-paying freelance sites. These platforms connect you with **real remote jobs** from reputable companies, without charging you to apply.
  
  > 🚀 Tip: Focus on 2–3 platforms, polish your profile, and apply consistently. Remote work rewards persistence.
  
  ---
  
  ## What’s Next?
  
  - Want a guide on writing a killer Upwork/Lemon.io profile?
  - Need help building a portfolio or CV for Arc/Toptal?
  
  Let me know — I’ve got you covered.
    `
  },
  {
    id: 5,
    lang: 'en',
    title: 'Laravel Packages You Must Know as a Developer',
    summary: 'Level up your Laravel development by using the best community-supported packages for performance, security, and productivity.',
    date: '2025-07-13',
    tags: ['laravel', 'php', 'backend', 'tools', 'packages'],
    slug: 'laravel-packages-you-must-know',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover5,
    readingTime: '6 min read',
    published: true,
    category: 'Backend',
    updatedAt: '2025-07-13',
    metaDescription: 'Discover the top Laravel packages that every backend developer should know. Boost performance, security, and productivity in your projects.',
    excerpt: 'A practical list of essential Laravel packages that solve real problems — from debugging and security to file uploads and APIs.',
    content: `
  ## Introduction
  
  Laravel is great out of the box — but the ecosystem around it is even better. With thousands of open-source packages, you can boost productivity, reduce boilerplate, and solve complex tasks in minutes.
  
  Here are the **Laravel packages you must know** — whether you're building a startup MVP, managing a SaaS app, or freelancing.
  
  ---
  
  ## 🧰 Top Laravel Packages Every Dev Should Know
  
  ### 1. **Spatie Laravel Permission**
  - 🔒 Role and permission management
  - 📦 Easy integration with users and guards
  - 🧠 Clear API for assigning roles and checking permissions
  
  \`\`\`bash
  composer require spatie/laravel-permission
  \`\`\`
  
  ---
  
  ### 2. **Laravel Debugbar**
  - 🛠 Adds a debug toolbar to your app
  - 🔍 View queries, request data, route info, and more
  - ✅ Great for local development
  
  \`\`\`bash
  composer require barryvdh/laravel-debugbar --dev
  \`\`\`
  
  ---
  
  ### 3. **Laravel IDE Helper**
  - 💡 Improves code completion in editors like VSCode or PHPStorm
  - 📚 Generates helpful docblocks for models, facades, routes
  - 👌 Works great for large projects
  
  \`\`\`bash
  composer require barryvdh/laravel-ide-helper --dev
  \`\`\`
  
  ---
  
  ### 4. **Laravel Excel**
  - 📊 Import/export Excel/CSV with ease
  - ✅ Simple syntax to read/write data
  - 🔄 Good for reporting, data migration
  
  \`\`\`bash
  composer require maatwebsite/excel
  \`\`\`
  
  ---
  
  ### 5. **Laravel Backup (Spatie)**
  - 💾 Automatically backup your database/files
  - 🌍 Supports multiple storage locations (local, S3, Dropbox)
  - 📬 Notifies on failures via Slack, mail, etc.
  
  \`\`\`bash
  composer require spatie/laravel-backup
  \`\`\`
  
  ---
  
  ### 6. **Laravel Media Library (Spatie)**
  - 📁 Manage file uploads like a pro
  - 🖼 Easily associate images/files with Eloquent models
  - 🔄 Automatic conversions (thumbnails, PDFs, etc.)
  
  \`\`\`bash
  composer require spatie/laravel-medialibrary
  \`\`\`
  
  ---
  
  ### 7. **Laravel Socialite**
  - 🔐 OAuth authentication with Facebook, Google, GitHub, etc.
  - 🧱 Perfect for apps with social login
  - ⚡ Speeds up user onboarding
  
  \`\`\`bash
  composer require laravel/socialite
  \`\`\`
  
  ---
  
  ### 8. **Laravel Sanctum**
  - 🔑 API token authentication for SPAs and mobile apps
  - 🧼 Simple and clean compared to Passport
  - ✅ Ideal for Laravel+Vue or Laravel+React apps
  
  \`\`\`bash
  composer require laravel/sanctum
  \`\`\`
  
  ---
  
  ### 9. **Laravel Telescope**
  - 🔭 Debug assistant for Laravel apps
  - 🧠 Logs exceptions, requests, database queries, jobs, etc.
  - 🛠 Built and maintained by Laravel team
  
  \`\`\`bash
  composer require laravel/telescope --dev
  \`\`\`
  
  ---
  
  ### 10. **Laravel Horizon**
  - 🌀 Beautiful dashboard for managing queues
  - ✅ Built-in analytics, retry/fail handling
  - 📦 Works with Redis queues
  
  \`\`\`bash
  composer require laravel/horizon
  \`\`\`
  
  ---
  
  ## Conclusion
  
  These packages are must-haves in any serious Laravel dev's toolbox. They save you hours, prevent bugs, and add advanced capabilities with little effort.
  
  > 🛠 Tip: Don’t install every package blindly. Add them when needed, and always test for conflicts or performance hits.
  
  ---
  
  ## What’s Next?
  
  - Want a curated Laravel starter template with the best packages pre-installed?
  - Need tips on writing your own Laravel packages?
  
  Let me know — happy to help.
    `
  }
  ,
  {
    id: 6,
    lang: 'en',
    title: 'Best MVC Frameworks Developers Should Know in 2025',
    summary: 'Explore the top MVC frameworks used by developers in 2025 — whether you’re building web apps, APIs, or full-stack projects.',
    date: '2025-07-15',
    tags: ['mvc', 'frameworks', 'laravel', 'backend', 'architecture'],
    slug: 'best-mvc-frameworks-2025',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover6,
    readingTime: '6 min read',
    published: true,
    category: 'Architecture',
    updatedAt: '2025-07-15',
    metaDescription: 'Discover the best MVC frameworks in 2025 including Laravel, Django, Rails, and more. A practical guide for modern web developers.',
    excerpt: 'A curated list of top MVC frameworks developers should learn in 2025 — from Laravel and Django to Rails and Spring Boot.',
    content: `
  ## Introduction
  
  The MVC (Model-View-Controller) pattern is still one of the most widely used architectural patterns in modern web development. It helps separate concerns, organize logic, and scale applications more efficiently.
  
  Whether you’re a backend developer, full-stack engineer, or just getting started, here’s a breakdown of the best MVC frameworks you should consider using in 2025.
  
  ---
  
  ## 🏆 Top MVC Frameworks in 2025
  
  ### 1. **Laravel (PHP)**
  - 🌍 One of the most popular MVC frameworks worldwide
  - 🧰 Built-in tools like routing, authentication, queues, and more
  - 💎 Elegant syntax, active community, massive ecosystem
  
  \`\`\`bash
  composer create-project laravel/laravel my-app
  \`\`\`
  
  > ✅ Ideal for full-stack apps, REST APIs, or admin panels.
  
  ---
  
  ### 2. **Ruby on Rails (Ruby)**
  - 🚅 Convention over configuration
  - 🧠 Built-in generators, scaffolding, and testing support
  - ✅ Great for startups and fast MVPs
  
  \`\`\`bash
  rails new my-app
  \`\`\`
  
  > 🔥 Still relevant in 2025 thanks to its simplicity and productivity.
  
  ---
  
  ### 3. **Django (Python)**
  - 🐍 Secure, batteries-included framework
  - 📦 Comes with ORM, admin panel, and user auth out of the box
  - 📈 Great for data-heavy apps, dashboards, and backend APIs
  
  \`\`\`bash
  django-admin startproject myapp
  \`\`\`
  
  > 📊 Often used in analytics tools, fintech, and ed-tech platforms.
  
  ---
  
  ### 4. **Spring (Java)**
  - ☕ Powerful framework for building robust, scalable enterprise apps
  - 🔒 Strong focus on security, testing, and dependency injection
  - 📦 Spring Boot simplifies configuration and microservice architecture
  
  > 💼 Commonly used in banking, insurance, and enterprise platforms.
  
  ---
  
  ### 5. **ASP.NET Core MVC (C#)**
  - 🖥 Microsoft’s modern web framework
  - ⚙️ Fast, secure, and scalable
  - ☁️ Great integration with Azure and other MS tools
  
  \`\`\`bash
  dotnet new mvc -n MyApp
  \`\`\`
  
  > 🧱 Solid choice for corporate apps, CRMs, and internal systems.
  
  ---
  
  ## ⚙️ Bonus Picks
  
  ### 6. **AdonisJS (Node.js)**
  - 🔄 Inspired by Laravel — brings MVC structure to Node
  - ✅ TypeScript-first, CLI support, built-in ORM
  - 🔧 Suitable for API-driven apps and SPAs
  
  ---
  
  ### 7. **Symfony (PHP)**
  - 🧱 Component-based PHP framework
  - 🧠 Used under the hood by Laravel
  - 📦 Perfect for large, modular apps or legacy migrations
  
  ---
  
  ## Conclusion
  
  If you're building a modern web app and want structure, scalability, and community support, MVC frameworks are still the way to go.
  
  Each of these frameworks fits a different use case, but all of them follow the same core principle: separate concerns and keep your codebase clean.
  
  > 💡 My top pick? Laravel — for its simplicity, power, and growing ecosystem.
  
  ---
  
  ## What’s Next?
  
  - Want a Laravel vs Django vs Rails breakdown?
  - Need help choosing the right framework for your next project?
  
  Check out more guides on my blog:  
  🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  
  Happy building! 🚀
    `
  },
  {
    id: 6,
    lang: 'ar',
    title: 'أفضل أطر MVC لي لازمك تعرفهم كمطور في 2025',
    summary: 'تعرف على أقوى أطر MVC المستخدمة من طرف المطورين في 2025 — سواء كنت تبني تطبيقات ويب، APIs، ولا مشاريع Full Stack.',
    date: '2025-07-15',
    tags: ['mvc', 'إطارات العمل', 'laravel', 'backend', 'الهندسة المعمارية'],
    slug: 'افضل-mvc-frameworks-2025',
    author: {
      name: 'مصطفى بوجمعة',
      avatar: me1,
      bio: 'مطور لارافيل'
    },
    coverImage: cover6,
    readingTime: '6 دقايق قراية',
    published: true,
    category: 'الهندسة',
    updatedAt: '2025-07-15',
    metaDescription: 'اكتشف أفضل أطر عمل MVC في 2025 مثل Laravel وDjango وRails وغيرها. دليل عملي للمطورين العصريين.',
    excerpt: 'قائمة منتقاة لأهم أطر MVC لي يستحق كل مطور يتعلمها في 2025 — من Laravel وDjango إلى Rails وSpring Boot.',
    content: `
## المقدمة

نمط MVC (Model-View-Controller) مازال من أكثر الأنماط استخدامًا في تطوير الويب الحديث. ينظم الكود، يفصل المهام، ويسهل عليك توسعة التطبيق بدون ما تدوّخ.

سواء كنت مطور Backend، ولا Full Stack، ولا حتى مزال في بداية الطريق، هذي قائمة بأهم أطر MVC لي تستحق تجربها في 2025.

---

## 🏆 أفضل أطر MVC في 2025

### 1. **Laravel (PHP)**
- 🌍 من أكثر الأطر شهرة في العالم
- 🧰 فيه كلش: الراوتينغ، التوثيق، الكيوز، والمزيد
- 💎 كود أنيق، مجتمع نشيط، ونظام ضخم من الحزم

\`\`\`bash
composer create-project laravel/laravel my-app
\`\`\`

> ✅ مثالي لتطبيقات كاملة، REST APIs، أو لوحات الإدارة.

---

### 2. **Ruby on Rails (روبي)**
- 🚅 يعتمد على مبدأ "الاتفاق بدل التهيئة"
- 🧠 فيه أدوات توليد تلقائي، scaffold، ودعم اختبارات جاهز
- ✅ مثالي للشركات الناشئة ولي حابة MVP سريع

\`\`\`bash
rails new my-app
\`\`\`

> 🔥 مازال في 2025 فريمورك خفيف وفعّال.

---

### 3. **Django (بايثون)**
- 🐍 آمن ويجي مع كلشي "بطاريات مشحونة"
- 📦 ORM، لوحة إدارة، توثيق المستخدم — كلشي جاهز
- 📈 رائع للتطبيقات الثقيلة، الداشبورد، والـ APIs

\`\`\`bash
django-admin startproject myapp
\`\`\`

> 📊 يستعملوه كثير في التحليلات، التعليم الإلكتروني، والـ fintech.

---

### 4. **Spring (جافا)**
- ☕ إطار قوي لبناء تطبيقات مؤسساتية قابلة للتوسعة
- 🔒 فيه تركيز كبير على الأمان، التستينغ، والـ Dependency Injection
- 📦 Spring Boot يسهل التهيئة ويخدم مع الميكروسيرفيس

> 💼 كثير الاستعمال في البنوك، التأمينات، وأنظمة المؤسسات.

---

### 5. **ASP.NET Core MVC (C#)**
- 🖥 فريمورك الويب العصري من Microsoft
- ⚙️ سريع، آمن، ويقبل التوسعة
- ☁️ يندمج بسهولة مع Azure وأدوات مايكروسوفت

\`\`\`bash
dotnet new mvc -n MyApp
\`\`\`

> 🧱 ممتاز لتطبيقات الشركات، الأنظمة الداخلية، وCRMs.

---

## ⚙️ إضافات تستحق التجربة

### 6. **AdonisJS (Node.js)**
- 🔄 مستوحى من Laravel — جاب روح MVC للـ Node
- ✅ TypeScript أولاً، واجهة CLI، ORM مدمج
- 🔧 يخدم مليح في APIs وتطبيقات الـ SPA

---

### 7. **Symfony (PHP)**
- 🧱 إطار PHP مبني من مكونات قابلة لإعادة الاستخدام
- 🧠 Laravel مبني عليه جزئياً
- 📦 قوي في المشاريع الكبيرة أو التحديث من كود قديم

---

## الخلاصة

لو راك تخدم على تطبيق ويب حديث وتحب التنظيم، التوسعة، والدعم المجتمعي — أطر MVC تبقى الحل الأمثل.

كل واحد من هذو عندو حالة استخدام خاصة، بصح القاعدة وحدة: نظم الكود، وخليه نظيف وسهل الصيانة.

> 💡 ترشيحي الأول؟ Laravel — لأنه بسيط، قوي، والمجتمع ديالو كبير ويتطور يوم بعد يوم.

---


شوف باقي المقالات في المدونة تاعي:  
🔗 [https://mostefa-boudjema.vercel.app/ar/blog](https://mostefa-boudjema.vercel.app/ar/blog)

بالتوفيق في مشروعك! 🚀
`
  }

  ,
  {
    id: 7,
    lang: 'en',
    title: 'Vue.js: A Beginner\'s Guide to Getting Started',
    summary: 'Learn how to set up and start building with Vue.js, the popular JavaScript framework for creating interactive user interfaces.',
    date: '2025-06-17',
    tags: ['vuejs', 'javascript', 'frontend', 'framework', 'getting started'],
    slug: 'vuejs-beginner-guide',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover7,
    readingTime: '5 min read',
    published: true,
    category: 'Frontend',
    updatedAt: '2025-06-17',
    metaDescription: 'Learn how to get started with Vue.js in this beginner’s guide, including setup and creating your first app.',
    excerpt: 'A beginner’s guide to Vue.js, helping you get started with this powerful JavaScript framework.',
    content: `
  ## Introduction
  
  Vue.js is a progressive JavaScript framework used for building interactive web interfaces. Whether you're starting from scratch or integrating it into an existing project, Vue.js offers flexibility and simplicity.
  
  In this guide, you'll learn the basics of setting up Vue.js and building your first app.
  
  ---
  
  ## 🛠 Step 1: Installing Vue.js
  
  To get started, install Vue via npm or use Vue CLI for an easier setup.
  
  \`\`\`bash
  npm install vue
  \`\`\`
  
  For a full project setup, install Vue CLI:
  
  \`\`\`bash
  npm install -g @vue/cli
  \`\`\`
  
  Then, create a new project:
  
  \`\`\`bash
  vue create my-vue-app
  \`\`\`
  
  ---
  
  ## 💡 Step 2: Setting Up Your First Component
  
  Create a simple component:
  
  \`\`\`javascript
  <template>
    <div>
      <h1>Hello, Vue!</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  \`\`\`
  
  ---
  
  ## 🔄 Step 3: Vue Router and State Management
  
  You can also set up Vue Router and Vuex for routing and state management.
  
  Install Vue Router:
  
  \`\`\`bash
  npm install vue-router
  \`\`\`
  
  Then, configure routes in your project.
  
  ---
  
  ## Conclusion
  
  Vue.js is perfect for building simple to complex applications. By breaking your app into components, managing state, and using Vue Router, you’ll have a solid foundation to work with.
  
  ---
  
  ## What’s Next?
  
  - Need more advanced Vue techniques, like using Vue 3's Composition API?
  - Interested in integrating Vue with Laravel or React?
  
  Check out more guides on my blog:  
  🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
    `
  },
  {
    id: 8,
    lang: 'en',
    title: 'Advanced Vue.js Features You Should Know',
    summary: 'Explore advanced features in Vue.js that can help you scale your apps, from Vue Router to Vuex and dynamic components.',
    date: '2025-07-19',
    tags: ['vuejs', 'advanced', 'frontend', 'javascript', 'router', 'vuex'],
    slug: 'advanced-vuejs-features',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover8,
    readingTime: '6 min read',
    published: true,
    category: 'Frontend',
    updatedAt: '2025-07-19',
    metaDescription: 'Explore advanced Vue.js features like Vue Router, Vuex, and dynamic components in this post.',
    excerpt: 'Take your Vue.js skills to the next level with advanced techniques for routing, state management, and dynamic components.',
    content: `
## Introduction

Once you’re comfortable with Vue.js basics, it’s time to explore some advanced features that can take your app to the next level. These features make Vue.js a powerful tool for complex, large-scale applications.

---

## 🔑 Advanced Feature 1: Vue Router

Vue Router allows you to manage app navigation. It’s essential for building single-page apps (SPAs).

To start, you need to set up your routes in a dedicated file:

\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
\`\`\`

---

## 🧠 Advanced Feature 2: Vuex for State Management

Managing state across components in large applications can be tricky. Vuex provides a centralized store that helps you manage the state of your app.

\`\`\`javascript
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
\`\`\`

---

## 🎨 Advanced Feature 3: Dynamic Components

Dynamic components let you switch components dynamically based on your application’s state.

Use the '<component>' tag to dynamically load a component:

\`\`\`html
<component :is="currentComponent"></component>
\`\`\`

---

## Conclusion

By mastering Vue Router, Vuex, and dynamic components, you’ll be ready to tackle more complex projects and build large-scale, scalable apps.

---

## What’s Next?

- Want to learn how to integrate Vue with Laravel or React?
- Interested in building a Vue.js app with real-time features?

Check out more guides on my blog:  
🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  `
  },
  {
    id: 9,
    lang: 'en',
    title: 'React for Beginners: A Quick Start Guide',
    summary: 'Learn how to get started with React and build your first interactive web app.',
    date: '2025-05-21',
    tags: ['react', 'javascript', 'frontend', 'getting started'],
    slug: 'react-for-beginners',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover9,
    readingTime: '5 min read',
    published: true,
    category: 'Frontend',
    updatedAt: '2025-05-21',
    metaDescription: 'A beginner’s guide to getting started with React, including components and state management.',
    excerpt: 'Learn how to build your first interactive web app with React in this quick start guide.',
    content: `
## Introduction

React is one of the most popular JavaScript libraries for building user interfaces. In this guide, we’ll show you how to get started with React by building your first app.

---

## Step 1: Setting Up React

To get started, you can create a new React app with **Create React App**.

\`\`\`bash
npx create-react-app my-react-app
\`\`\`

---

## Step 2: Understanding Components

React is all about **components**. Here’s a simple component:

\`\`\`jsx
import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}

export default App;
\`\`\`

---

## Step 3: Using State in React

React allows you to manage state in your components. Here's how you can use the useState hook:

\`\`\`jsx
import React, { useState } from 'react';
const [count, setCount] = useState(0);

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
\`\`\`

---

## Conclusion

With React, building interactive UIs becomes much easier. Once you’ve built a basic app, you can dive deeper into React's ecosystem like React Router and Redux.

---

## What’s Next?

- Want to explore React hooks and context API?
- Interested in using React with Laravel?

Check out more on my blog:  
🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  `
  },
  {
    id: 10,
    lang: 'en',
    title: 'Advanced React: Optimizing Performance and Advanced Patterns',
    summary: 'Dive deeper into React with performance optimization techniques, hooks, and advanced patterns.',
    date: '2025-07-23',
    tags: ['react', 'performance', 'javascript', 'advanced', 'react hooks'],
    slug: 'advanced-react-performance-patterns',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover10,
    readingTime: '6 min read',
    published: true,
    category: 'Frontend',
    updatedAt: '2025-07-23',
    metaDescription: 'Learn advanced React patterns and performance optimization techniques in this detailed guide.',
    excerpt: 'Take your React skills to the next level with these performance optimizations and advanced patterns.',
    content: `
## Introduction

React is fast, but as your app grows, you’ll need to pay attention to performance and best practices. In this post, we’ll cover advanced techniques and patterns to optimize your React app.

---

## 1. Performance Optimization with React.memo

React.memo is a higher-order component that helps you optimize rendering performance by preventing unnecessary re-renders.

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>;
});
\`\`\`

---

## 2. Lazy Loading Components with React.lazy

To improve initial load time, use React.lazy to dynamically import components only when needed:

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));
\`\`\`

---

## 3. Using Context API for Global State

React's Context API is great for sharing state across multiple components. Here’s a basic setup:

\`\`\`jsx
const MyContext = React.createContext();

function App() {
  const [value, setValue] = useState('Hello, Context!');
  return (
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
}
\`\`\`

---

## Conclusion

By using tools like 'React.memo','React.lazy', and the Context API, you can make your React apps more performant and scalable.

---

## What’s Next?

- Want more advanced React patterns and performance tuning tips?
- Need help integrating React with Laravel?

Visit my blog for in-depth React tutorials:  
🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  `
  },
  {
    id: 11,
    lang: 'en',
    title: '7 Algorithm Patterns Every Developer Should Master for Interviews',
    summary: 'Learn the most common algorithmic patterns that appear in coding interviews. Mastering these will help you solve 80% of LeetCode-style problems.',
    date: '2025-07-25',
    tags: ['algorithms', 'interview prep', 'leetcode', 'coding', 'developer job', 'javascript'],
    slug: 'algorithm-patterns-dev-interview',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover11,
    readingTime: '6 min read',
    published: true,
    category: 'Career',
    updatedAt: '2025-07-25',
    metaDescription: 'Master the 7 algorithm patterns most commonly used in developer interviews — with examples and practical tips.',
    excerpt: 'Stop solving random LeetCode questions. Focus on these 7 algorithm patterns that show up in most dev interviews.',
    content: `
## Introduction

Tech interviews are tough — but not random. Most algorithm problems fall under a handful of **core patterns**. If you can recognize these, you can solve almost anything on LeetCode, HackerRank, or Codeforces.

Here are the **7 most popular algorithm problem patterns** that show up across frontend, backend, and full-stack developer interviews.

---

## 🧩 1. Sliding Window

Used for subarray or substring problems — typically involving sums, lengths, or frequencies.

📌 Common question: *Find the longest substring without repeating characters*

**When to use:** Fixed-size or dynamic size window problems involving arrays or strings.

---

## 🔁 2. Two Pointers

Involves iterating from both ends of a structure (like arrays or strings) and moving inward or outward.

📌 Common question: *Container with most water*

**When to use:** Sorted arrays, palindromes, merging, reversing in-place.

---

## 🧠 3. Fast and Slow Pointers

A variation of two pointers used to detect cycles or middle elements.

📌 Common question: *Linked List Cycle*

**When to use:** Linked lists, circular arrays, Floyd’s cycle detection.

---

## 🔁 4. Depth-First Search (DFS)

Recursively explores all paths — often used in trees and graphs.

📌 Common question: *Number of Islands*

**When to use:** Tree traversal, graph connectivity, backtracking.

---

## 🌊 5. Breadth-First Search (BFS)

Explores level-by-level — useful for shortest path and spreading processes.

📌 Common question: *Minimum depth of binary tree*

**When to use:** Shortest paths, social networks, grid problems.

---

## 📊 6. Hash Map + Set

Optimizes brute-force solutions by using fast lookup structures.

📌 Common question: *Two Sum*, *Group Anagrams*

**When to use:** Lookups, duplicates, frequency counts.

---

## 📐 7. Binary Search

Cuts search space in half — not just for numbers, also for optimization problems.

📌 Common question: *Find minimum in rotated sorted array*

**When to use:** Sorted arrays, partitioning, search-based optimization.

---

## Conclusion

Don’t memorize 500 LeetCode problems. **Master these 7 patterns** and you’ll start to see the structure behind almost every interview question.

> 🎯 Tip: Try solving 3–5 problems for each pattern to lock in the concepts.

---

## What’s Next?

- Want a curated list of sliding window problems in JavaScript?
- Need mock interview prep focused on Laravel/JS full-stack roles?

Check out the blog for focused guides and coding patterns:  
🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  `
  },
  {
    id: 12,
    lang: 'en',
    title: 'Laravel: Advanced Tips and Techniques for Power Users',
    summary: 'Take your Laravel skills to the next level with these advanced tips and techniques.',
    date: '2025-07-27',
    tags: ['laravel', 'php', 'backend', 'advanced', 'tips'],
    slug: 'laravel-advanced-tips',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover12,
    readingTime: '6 min read',
    published: true,
    category: 'Backend',
    updatedAt: '2025-07-27',
    metaDescription: 'Advanced Laravel tips and techniques for experienced developers, covering Artisan commands, broadcasting, and policies.',
    excerpt: 'Take your Laravel skills to the next level with these advanced tips and techniques for power users.',
    content: `
## Introduction

Laravel offers a lot out of the box, but as you become more comfortable with it, you’ll want to explore some of its advanced features and techniques. This post will dive deeper into Laravel’s power features and help you optimize your workflow.

---

## 1. Custom Artisan Commands

Laravel’s Artisan CLI is a powerful tool for developers. You can create your own custom Artisan commands to automate repetitive tasks.

To create a custom command:

\`\`\`bash
php artisan make:command CustomCommand
\`\`\`

Then, define the command’s functionality in the 'handle()' method.

---

## 2. Event Broadcasting with Laravel Echo

Laravel Echo makes it easy to broadcast events and update your front-end in real time. This is perfect for applications with live notifications, chats, or real-time dashboards.

\`\`\`bash
composer require pusher/pusher-php-server
\`\`\`

Configure the broadcaster in 'config/broadcasting.php' and emit events to the front end using Laravel Echo.

---

## 3. Using Policies for Authorization

Instead of using gates, you can create **policies** to organize your authorization logic for specific models. Create a policy for your model:

\`\`\`bash
php artisan make:policy PostPolicy
\`\`\`

Then, register the policy in 'AuthServiceProvider'.

---

## Conclusion

With these advanced tips, you'll be able to create more efficient and scalable Laravel applications, from automating tasks to handling real-time events.

---

## What’s Next?

- Want to dive deeper into Laravel queues and background jobs?
- Need help optimizing your app’s performance?

Visit my blog for more advanced Laravel tutorials:  
🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  `
  },
  {
    id: 13,
    lang: 'en',
    title: 'Top Web Development Interview Questions (And How to Answer Them Right)',
    summary: 'Get ready for your next frontend, backend, or full-stack interview with this list of real web dev questions and the best ways to answer them.',
    date: '2025-07-29',
    tags: ['web development', 'interview', 'frontend', 'backend', 'career', 'javascript', 'laravel'],
    slug: 'common-web-dev-interview-questions',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover13,
    readingTime: '6 min read',
    published: true,
    category: 'Career',
    updatedAt: '2025-07-29',
    metaDescription: 'Be ready for your next web dev interview with these real questions and smart, no-fluff answers.',
    excerpt: 'Get the top web dev interview questions and how to answer them clearly. Frontend, backend, and full-stack covered.',
    content: `
## Introduction

Web development interviews don’t just test your skills — they test your communication, reasoning, and confidence.

Here’s a list of **real web developer interview questions** (for frontend, backend, and full-stack roles) and **the best way to approach each one** — without sounding robotic or rehearsed.

---

## 🧠 1. “What’s the difference between '==' and '===' in JavaScript?”

**What they want:** Understanding of type coercion and strict comparison.

**Good answer:**  
\`\`\`
== checks for value equality, allowing type conversion. === checks for both value and type, no conversion. Always prefer === to avoid unexpected bugs.
\`\`\`

---

## 🔄 2. “Explain how the MVC architecture works.”

**What they want:** Practical knowledge of frameworks like Laravel or Rails.

**Good answer:**  
\`\`\`
MVC separates concerns: Models handle data, Views handle UI, Controllers handle requests and glue everything together. It makes apps easier to maintain and scale.
\`\`\`

---

## ⚡ 3. “What happens when you enter a URL in the browser?”

**What they want:** Understanding of HTTP, DNS, rendering.

**Good answer:**  
\`\`\`
The browser looks up the domain via DNS, makes an HTTP request, receives HTML/CSS/JS, and starts parsing. It builds the DOM, runs scripts, and renders the page.
\`\`\`

---

## 🔐 4. “How do you prevent SQL injection in a backend app?”

**What they want:** Secure coding practices.

**Good answer:**  
\`\`\`
Use parameterized queries or ORM methods that handle escaping. Never trust user input directly. Laravel’s Eloquent and query builder handle this automatically.
\`\`\`

---

## 🚀 5. “How would you optimize a slow web page?”

**What they want:** Real-world performance techniques.

**Good answer:**  
\`\`\`
Start with auditing tools like Lighthouse. Minimize CSS/JS, lazy-load images, use caching and a CDN. Avoid render-blocking assets and optimize backend queries.
\`\`\`

---

## 📦 6. “What’s the difference between REST and GraphQL?”

**What they want:** API design understanding.

**Good answer:**  
\`\`\`
REST uses multiple endpoints, each returning fixed data. GraphQL has one endpoint, and clients request exactly what they need — it’s more flexible for modern apps.
\`\`\`

---

## 📚 7. “Tell me about a project you’re proud of.”

**What they want:** Real experience, not textbook talk.

**Good answer:**  
\`\`\`
On my last Laravel + Vue project, I built a booking system for clinics. I integrated Stripe, Twilio SMS, and WhatsApp API — end-to-end. It’s now used by 5+ clinics daily.
\`\`\`

---

## Conclusion

Don’t memorize answers. Understand the **why** behind each question, and always give answers based on **what you’ve done**, not what you’ve read.

> 🎯 Tip: Use the STAR method (Situation, Task, Action, Result) when explaining your experience.

---

## What’s Next?

- Want mock answers tailored to your Laravel/Vue full-stack experience?
- Need help preparing for a real job opportunity?

Visit my blog for more real-world prep tips and example answers:  
🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  `
  },
  {
    id: 14,
    lang: 'en',
    title: 'Eager vs Lazy Loading in Laravel (Clear, Practical Guide)',
    summary: 'Avoid N+1 query issues and speed up your Laravel app. Learn the difference between eager and lazy loading, with simple examples.',
    date: '2025-07-31',
    tags: ['laravel', 'php', 'eloquent', 'performance', 'backend', 'web development'],
    slug: 'eager-vs-lazy-loading-laravel',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover14,
    readingTime: '5 min read',
    published: true,
    category: 'Laravel',
    updatedAt: '2025-07-31',
    metaDescription: 'Learn the difference between eager and lazy loading in Laravel, how to avoid N+1 problems, and when to use each technique for better app performance.',
    excerpt: 'Speed up your Laravel app by mastering the difference between eager and lazy loading. Avoid N+1 queries with clear examples.',
    content: `
  ## Introduction
  
  Loading relationships in Laravel can either make your app fly or crawl.
  
  This guide breaks down **eager vs lazy loading in Laravel**, how they impact performance, and **when to use each** — with real examples.
  
  ---
  
  ## 🐢 What Is Lazy Loading?
  
  **What it means:** Laravel loads related data **only when you access it** — not before.
  
  **Example:**
  \`\`\`php
  $posts = Post::all(); // no relations yet
  
  foreach ($posts as $post) {
      echo $post->user->name; // triggers a separate query per post
  }
  \`\`\`
  
  🔴 **Problem:** This causes the **N+1 query issue** — one query for all posts, then one extra for each post’s user.
  
  ---
  
  ## ⚡ What Is Eager Loading?
  
  **What it means:** You tell Laravel up front to load relationships **in the same query**.
  
  **Example:**
  \`\`\`php
  $posts = Post::with('user')->get();
  
  foreach ($posts as $post) {
      echo $post->user->name; // already loaded
  }
  \`\`\`
  
  ✅ **Advantage:** Cuts the number of queries down to 2 (posts + users). Much faster for lists.
  
  ---
  
  ## 🔄 When Should You Use Each?
  
  ### Use **lazy loading** when:
  - You only need the relation in rare cases
  - You’re loading just one model, not a list
  
  ### Use **eager loading** when:
  - You’re looping over many models with related data
  - You care about performance and want to avoid N+1
  
  ---
  
  ## 🎯 Bonus: Eager Load Multiple or Nested Relations
  
  **Multiple relations:**
  \`\`\`php
  $posts = Post::with(['user', 'comments'])->get();
  \`\`\`
  
  **Nested relations:**
  \`\`\`php
  $posts = Post::with('comments.user')->get();
  \`\`\`
  
  ---
  
  ## 🧪 Pro Tip: Debug with Laravel Debugbar or Telescope
  
  They’ll show you exactly **how many queries are being run**, and if you’re accidentally lazy-loading inside a loop.
  
  ---
  
  ## Conclusion
  
  Lazy loading is simple, but dangerous in loops. Eager loading is your best friend for performance — if you use it smartly.
  
  > 💡 Tip: Always check your query count when dealing with Eloquent relationships.
  
  ---
  
  ## What’s Next?
  
  - Want real project examples where eager loading saved performance?
  - Need help optimizing a slow Laravel app?
  
  Check out more Laravel deep-dives on my blog:  
  🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  `
  },
  {
    id: 15,
    lang: 'en',
    title: 'Laravel Pulse vs Telescope: Best Monitoring Tool for Production',
    summary: 'Confused between Laravel Pulse and Telescope? This post compares both tools and helps you decide which one fits your app’s needs.',
    date: '2025-08-01',
    tags: ['laravel', 'monitoring', 'pulse', 'telescope', 'debugging', 'performance', 'backend'],
    slug: 'laravel-pulse-vs-telescope',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover15,
    readingTime: '6 min read',
    published: true,
    category: 'Laravel',
    updatedAt: '2025-08-01',
    metaDescription: 'Laravel Pulse vs Telescope — which one is better for production? Learn the key differences, use cases, and when to use each.',
    excerpt: 'Compare Laravel Pulse and Telescope. See which one is better for monitoring your Laravel app in development vs production.',
    content: `
  ## Introduction
  
  When your Laravel app hits production, you need solid monitoring. 
  
  Two first-party tools stand out: **Laravel Pulse** and **Laravel Telescope**. But they’re not the same — and using the wrong one in production could backfire.
  
  Let’s break down what each tool does best, and when to use them.
  
  ---
  
  ## 🔍 What is Laravel Telescope?
  
  **Telescope is a powerful debugging assistant** for Laravel apps.
  
  It tracks:
  - Requests
  - Exceptions
  - Queries
  - Jobs
  - Events
  - Cache
  - Mail
  - Notifications
  - Auth
  
  **Good for:** Development environments, QA, local debugging
  
  **Example use case:**
  \`\`\`php
  Route::get('/telescope', function () {
      // Monitor incoming requests, exceptions, DB queries
  });
  \`\`\`
  
  🔴 **Downside:** Telescope stores *a lot* of data. Not ideal for production unless it’s a private/internal app.
  
  ---
  
  ## 📊 What is Laravel Pulse?
  
  **Pulse is a lightweight production-ready monitoring tool**, built for performance insights.
  
  It tracks:
  - HTTP traffic
  - Queries
  - Queue jobs
  - Exceptions
  - Logs
  - Cache usage
  - App load & memory
  
  **Good for:** Monitoring real-time performance and health in production.
  
  **Example use case:**
  \`\`\`bash
  php artisan pulse:install
  # View metrics via /pulse dashboard
  \`\`\`
  
  ✅ **Designed to be fast, low-overhead, and safe for production use.**
  
  ---
  
  ## ⚔️ Telescope vs Pulse: Key Differences
  
  | Feature            | Telescope               | Pulse                    |
  |--------------------|--------------------------|---------------------------|
  | Purpose            | Debugging during dev     | Monitoring in production  |
  | Performance impact | Heavy                    | Lightweight               |
  | Data stored        | Detailed per-request logs| Aggregated metrics        |
  | UI                 | Rich debugger UI         | Clean real-time dashboard |
  | Use in production  | Not recommended          | Yes, designed for it      |
  
  ---
  
  ## 🤔 Which One Should You Use?
  
  | Environment | Use        |
  |-------------|------------|
  | Local dev   | Telescope  |
  | Staging     | Telescope  |
  | Production  | Pulse      |
  | Debugging   | Telescope  |
  | Live monitoring | Pulse  |
  
  ---
  
  ## 🧪 Can You Use Both?
  
  Yes — use **Telescope for debugging during dev**, and **Pulse for performance in production**.
  
  Just don’t keep Telescope running in production unless you lock it behind auth and limit data collection.
  
  ---
  
  ## Conclusion
  
  Both tools serve different purposes.
  
  > 🧠 Use **Telescope** when you're building and debugging.  
  > 🚀 Use **Pulse** when you're live and need insight without slowing down your app.
  
  ---
  
  ## What’s Next?
  
  - Want help setting up Pulse in your production server?
  - Need to debug performance issues in a live Laravel app?
  
  Check out my Laravel guides and real-world tips on the blog:  
  🔗 [https://mostefa-boudjema.vercel.app/blog](https://mostefa-boudjema.vercel.app/blog)
  `
  }
  , {
    id: 16,
    lang: 'en',
    title: 'How to Find People That Need a New Website or a Redesign',
    summary: 'Struggling to find web dev clients? Here’s a straight-to-the-point guide to help you identify and reach people who need a new website or a redesign.',
    date: '2025-08-02',
    tags: ['web development', 'freelance', 'marketing', 'portfolio', 'clients'],
    slug: 'find-website-clients',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover16,
    readingTime: '6 min read',
    published: true,
    category: 'Freelance',
    updatedAt: '2025-08-02',
    metaDescription: 'Learn practical strategies to find people or businesses that need a new website or a redesign. Perfect for freelance web developers looking to get more clients.',
    excerpt: 'If you’re a web developer looking for more clients, here’s how to find businesses that desperately need a website redesign — and how to pitch them.',
    content: `
  ## 🔎 How to Find People Who Need a New Website or Redesign
  
  Not enough clients? You're probably chasing the wrong ones.  
  Truth is, there are tons of people who need a new website or a redesign — they just don't know it yet.
  
  Here's how to find them, pitch them, and land the job.
  
  ---
  
  \`\`\`
  🏪 1 - Local Businesses with Bad or Outdated Websites
  
  What to look for:
  - Websites that look like they're from 2008
  - Not mobile-friendly
  - Slow to load
  - No HTTPS
  
  How to approach:
  Walk into the shop, call, or email.
  
  Example:
  “Hi, I noticed your website isn’t mobile-friendly. I build modern, mobile-first websites that help businesses get more clients. Want a quick audit?”
  \`\`\`
  
  ---
  
  \`\`\`
  💬 2 - Facebook Groups = Free Leads
  
  Join groups like:
  - Small Business Owners
  - Startups
  - Entrepreneurs in [Your City]
  
  How to offer value:
  “Free 2-minute website audit — drop your link below and I’ll tell you what’s working and what’s not.”
  
  This builds trust fast. Then pitch the redesign.
  \`\`\`
  
  ---
  
  \`\`\`
  💼 3 - Freelance Platforms (But Smarter)
  
  Use platforms like:
  - Upwork
  - Fiverr
  - Freelancer
  
  Search for:
  - “Website redesign”
  - “Modern landing page”
  - “Mobile-friendly website”
  
  Even if you're not active on those sites, you'll spot real pain points businesses are dealing with.
  \`\`\`
  
  ---
  
  \`\`\`
  🧑‍💼 4 - LinkedIn Cold Outreach
  
  Target industries:
  - Real estate agents
  - Dentists
  - Coaches
  - Local shop owners
  
  Message idea:
  “Hey [Name], I help businesses like yours modernize their websites to increase leads and trust. Want a free homepage review?”
  \`\`\`
  
  ---
  
  \`\`\`
  📧 5 - Cold Email Works (If You’re Not Spamming)
  
  Find leads with:
  - Google Maps
  - Yelp
  - Yellow Pages
  - Local directories
  
  Use Hunter.io or Apollo.io to grab emails.
  
  Simple email script:
  Subject: Quick Tip About Your Website
  
  Hi [Name],
  I noticed your website isn’t mobile-friendly or secure (no HTTPS). I specialize in redesigning websites that load fast and look modern. Want a quick free audit?
  
  Attach a before/after sample. That’s all.
  \`\`\`
  
  ---
  
  \`\`\`
  📝 6 - Google Hack: “Not Secure” Websites
  
  Search this in Google:
  site:.com "not secure" "contact us"
  
  These are businesses that haven’t added HTTPS — and if they missed that, their whole site is probably outdated.
  
  Great redesign targets.
  \`\`\`
  
  ---
  
  \`\`\`
  📲 7 - DM Small Brands on Instagram
  
  Perfect for:
  - Artists
  - Coaches
  - Creators
  - Small shops
  
  Message idea:
  “Love your brand. Just checked your website — a few tweaks could really boost your conversions. Want a quick look?”
  
  Keep it short, specific, and helpful.
  \`\`\`
  
  ---
  
  \`\`\`
  🎯 8 - Run Targeted Facebook/Instagram Ads
  
  Ad idea:
  “Still using a 2012-style website? I build modern, fast, mobile-first websites for small businesses.”
  
  Target audience:
  - Your city
  - Business interests
  - Age 30–50 (business owners)
  
  Even $20 can get you solid leads.
  \`\`\`
  
  ---
  
  \`\`\`
  🙋 9 - Referrals: Ask Every Single Client
  
  After delivering a website:
  “If you know someone else who needs a site refresh, let me know — I’ll give them a discount and you’ll get a referral bonus.”
  
  Don’t wait. Just ask.
  \`\`\`
  
  ---
  
  \`\`\`
  🌟 Final Tip
  
  You don’t need 100 leads — just 3–5 good ones who see the value in your work.  
  Focus on showing clear, simple value. Fix problems, don’t sell pixels.
    
  Check out more no-fluff freelance guides on the blog:
  https://mostefa-boudjema.vercel.app/blog
  \`\`\`
  `
  },

  {
    id: 17,
    lang: 'en',
    title: 'Laravel Filament: Powerful Admin Panels Made Easy',
    summary: 'Need a modern admin panel fast? Laravel Filament gives you beautiful dashboards, resource management, and more — with zero boilerplate. Here’s how to get started and when to use it.',
    date: '2025-08-05',
    tags: ['laravel', 'filament', 'php', 'admin panel', 'dashboard'],
    slug: 'laravel-filament-guide',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover17,
    readingTime: '10 min read',
    published: true,
    category: 'Laravel',
    updatedAt: '2025-08-05',
    metaDescription: 'A complete beginner-to-advanced guide on Laravel Filament. Learn how to install, integrate with existing projects, and use it to build powerful admin panels fast.',
    excerpt: 'Laravel Filament makes building admin dashboards ridiculously fast. In this guide, you’ll learn how to install it, use it with your current Laravel project, and the best use cases where it shines.',
    content: `
  ## 🚀 What is Laravel Filament?
  
  Filament is a **beautiful, fast, and highly extensible admin panel** for Laravel. It's built with TALL stack (Tailwind, Alpine.js, Laravel, Livewire), and it saves you hours building dashboards from scratch.
  
  Great for:
  - Admin panels
  - Internal dashboards
  - CMS-style management
  - CRUD for Eloquent models
  
  ---
  
  \`\`\`
  🧰 Installing Filament in a New Laravel Project
  
  1. Make sure you're on Laravel 10+.
  2. Install Filament via Composer:
  
  \`\`\`bash
  composer require filament/filament
  \`\`\`
  
  3. Publish the assets and config:
  
  \`\`\`bash
  php artisan filament:install
  \`\`\`
  
  4. Create a user:
  
  \`\`\`bash
  php artisan make:filament-user
  \`\`\`
  
  Done. Visit '/admin' and log in.
  
  
  ---
  
  🔁 Integrating Filament into an Existing Project
  
  Already have a Laravel app? No problem.
  
  Steps:
  - Run the install command: \`php artisan filament:install\`
  - Make sure your User model uses \`HasFilamentDefaultProfilePhoto\` and implements \`FilamentUser\` interface (optional)
  - Register resources using \`php artisan make:filament-resource ModelName\`
  
  Example:
  
  \`\`\`bash
  php artisan make:filament-resource Post
  \`\`\`
  
  You’ll get:
  - A resource class
  - Create/edit/delete forms
  - List table with search, filters, actions — all ready out of the box.
  
  
  ---
  
  📦 Best Use Cases for Filament
  
  🔹 CRUD for Eloquent models  
  🔹 Internal admin for clients  
  🔹 User management  
  🔹 Lightweight CMS features  
  🔹 Multi-tenant dashboards (yes, it supports that too)
  
  Avoid using it for:
  ❌ Public-facing pages  
  ❌ Complex frontend interactivity (use Vue/React there)
  
  
  ---
  
  🛠️ Customizing Filament Resources
  
  Each resource can be fully customized.
  
  - Change table columns
  - Add filters/sorting
  - Customize forms with relationships, toggles, uploads, repeaters
  
  Example: Add image upload to the Post form:
  
  \`\`\`php
  Forms\Components\FileUpload::make('thumbnail')->image()
  \`\`\`
  
  Need advanced logic? Use Livewire hooks inside the resource.
  
  
  ---
  
  🎨 Styling Filament (Yes, It’s Tailwind)
  
  Since it’s built on Tailwind, you can easily extend and customize styles.
  
  - Add your own Tailwind config
  - Override default views
  - Add custom components using Livewire + Blade
  
  Need dark mode, RTL, or theme switchers? Already built-in or supported via plugins.
  
  
  ---
  
  🔌 Useful Filament Plugins
  
  The Filament ecosystem is growing fast.
  
  Popular ones:
  - filament-spatie-laravel-permission: Easy role management
  - filament-log: View Laravel logs inside admin
  - filament-notifications: Push alerts to admins
  - filament-breezy: Laravel Breeze + Filament auth combo
  
  You can build your own plugins too.
  
  
  ---
  
  🌍 Filament in a Multi-Tenant App?
  
  Yes, it supports multi-tenancy.
  
  Use packages like:
  - \`stancl/tenancy\`
  - \`spatie/multitenancy\`
  
  Each tenant can have their own admin panel, or share one with scoped data. Depends on how you configure Filament’s global resources and auth.
  
  You can use:
  \`\`\`php
  Filament::getTenant()
  \`\`\`
  to get tenant context inside your resources.
  
  
  ---
  
  🧪 Filament vs Laravel Nova vs Voyager
  
  | Feature         | Filament     | Nova        | Voyager      |
  |----------------|--------------|-------------|--------------|
  | Open Source    | ✅ Free       | ❌ Paid      | ✅ Free       |
  | Modern UI      | ✅ Tailwind   | ✅ Tailwind  | ❌ Bootstrap  |
  | Extensible     | ✅ Plugins    | ✅ Fields    | ❌ Limited    |
  | Community      | 🔥 Growing    | 💤 Slower    | 🤷‍♂️ Aging     |
  
  For most Laravel devs in 2025 — **Filament is the best choice**.
  
  
  ---
  
  🧩 Final Tips
  
  ✅ Use Filament if:
  - You need CRUD fast  
  - You don’t want to build admin UI from scratch  
  - You want something customizable and clean  
  
  ❌ Skip it if:
  - Your app is 100% headless
  - You want a full CMS (try Statamic)
  
  Want a full working demo with roles, auth, plugins?
  
  📎 Download the Filament Starter Kit on my GitHub (coming soon)
  
  💬 Need help integrating Filament into a client project?
  Let’s chat: https://mostefa-boudjema.vercel.app
  
    `
  },
  {
    id: 18,
    lang: 'en',
    title: 'Laravel Nova: Setup, Integration & Best Use Cases',
    summary: 'Laravel Nova is a sleek admin panel for Laravel. Learn how to set it up, use it effectively, and decide when it’s the right tool for your project.',
    date: '2025-08-03',
    tags: ['laravel', 'nova', 'admin panel', 'dashboard', 'backend'],
    slug: 'laravel-nova-guide',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover18,
    readingTime: '10 min read',
    published: true,
    category: 'Laravel',
    updatedAt: '2025-08-03',
    metaDescription: 'Everything you need to know about Laravel Nova: what it is, how to install it, integrate it into existing projects, and when you should use it.',
    excerpt: 'Laravel Nova is a powerful admin panel that saves dev time. In this guide, learn how to install Nova, use it, and know when it’s the right tool for your Laravel project.',
    content: `
  ## ⚙️ What Is Laravel Nova?
  
  Laravel Nova is an official Laravel admin panel package.  
  It gives you a beautiful UI to manage your Eloquent models — without writing your own dashboard from scratch.
  
  Think of it like:
  - A Laravel-flavored CMS
  - A back-office tool for managing users, posts, orders, etc.
  - A data admin layer for your clients or internal team
  
  ---
  
  \`\`\`
  📦 How to Install Laravel Nova
  
  Nova is **not free**. It’s a paid product from Laravel (https://nova.laravel.com).
  
  Once purchased, you’ll get access to a private Nova repository.
  
  Steps:
  1. Add your Nova repo credentials to your 'auth.json' or 'composer config':
     \`\`\`bash
     composer config repositories.nova composer https://nova.laravel.com
     composer config --global --auth http-basic.nova.laravel.com your-email your-license-key
     \`\`\`
  
  2. Require Nova:
     \`\`\`bash
     composer require laravel/nova
     \`\`\`
  
  3. Publish assets and migrate:
     \`\`\`bash
     php artisan nova:install
     php artisan migrate
     \`\`\`
  
  4. Create your first Nova resource:
     \`\`\`bash
     php artisan nova:resource User
     \`\`\`
  
  That’s it. You’ll now see '/nova' in your browser.
  
  \`\`\`
  
  ---
  
  \`\`\`
  🔁 How to Add Nova to an Existing Project
  
  Nova works great in both new and old Laravel apps.
  
  If your project already has Eloquent models, just generate the resources:
  
  Example:
  \`\`\`bash
  php artisan nova:resource Product
  php artisan nova:resource Order
  \`\`\`
  
  This creates files like \`app/Nova/Product.php\`, where you can define fields, filters, cards, and actions.
  
  You can customize:
  - Fields: Text, Boolean, File, Image, etc.
  - Relationships: BelongsTo, HasMany, MorphMany, etc.
  - Metrics: Like number of new users this week
  - Actions: Like “Approve Order” or “Mark as Shipped”
    
  ---
  
  🎯 When Should You Use Laravel Nova?
  
  Nova shines when:
  - You want a quick admin dashboard for CRUD
  - You’re building internal tools or client portals
  - You don’t want to maintain your own admin UI
  - You’re already deep into Laravel and want a native experience
  
  Avoid Nova if:
  - You need heavy customization in the UI/UX
  - You want a free/open source alternative (look into Filament or Voyager)
  
  
  ---
  
  🔐 Securing Nova Access
  
  Out of the box, Nova is restricted to users who pass the \`Gate::allows('viewNova')\` check.
  
  To control access:
  1. Open \`app/Providers/NovaServiceProvider.php\`
  2. Modify the gate logic:
     \`\`\`php
     Gate::define('viewNova', function ($user) {
         return $user->is_admin;
     });
     \`\`\`
  
  Now only admin users can access '/nova'.
  
  
  ---
  
  🧩 Nova Custom Fields & Tools
  
  Nova lets you extend it via:
  - Custom fields (e.g., Color Picker, Markdown Editor)
  - Custom cards (e.g., Metrics)
  - Custom tools (e.g., whole Vue components)
  
  Install community packages or build your own:
  \`\`\`bash
  php artisan nova:field StatusToggle
  php artisan nova:tool CustomAnalytics
  \`\`\`
  
  It uses Vue under the hood, so frontend extensions are flexible.
  
  
  ---
  
  🗂 Example Use Cases
  
  Here’s where Nova works best:
  - CRM panels
  - Inventory dashboards
  - Blog/article admin
  - User management (for SaaS)
  - Order processing panel
  
  For client work, it’s a good way to hand over admin tools fast without building a custom backend.
  
  
  ---
  
  📌 Pros vs Cons
  
  ✅ Pros:
  - Built by Laravel team
  - Native Laravel experience
  - Beautiful UI
  - Great for CRUD + metrics
  
  ❌ Cons:
  - Paid (starts at $99)
  - UI is less customizable than Filament
  - Not ideal for frontend-heavy admin panels
  
 
  🚀 Final Tip
  
  Nova isn’t just for big enterprise dashboards. It’s great for small internal tools too.
  
  Start with a few resources, build actions, metrics, and filters — and you’ve got a full admin suite in days, not weeks.
  
  Need a Filament vs Nova comparison?  
  Want help building custom Nova tools?
  
  Check out more practical Laravel tips on the blog:  
  https://mostefa-boudjema.vercel.app/blog
 
  `
  },
  {
    id: 19,
    lang: 'en',
    title: 'Laravel Multi-Tenancy: How to Get Started and When to Use It',
    summary: 'Building a SaaS app? Laravel multi-tenancy might be what you need. Learn the core concepts, how to set it up, and when it actually makes sense to use.',
    date: '2025-08-04',
    tags: ['laravel', 'multi-tenancy', 'saas', 'architecture', 'database'],
    slug: 'laravel-multi-tenancy-guide',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover19,
    readingTime: '10 min read',
    published: true,
    category: 'Laravel',
    updatedAt: '2025-08-04',
    metaDescription: 'Learn how to set up multi-tenancy in Laravel using practical packages and clean architecture. Understand the different tenancy types and when you should (or shouldn’t) use them.',
    excerpt: 'Thinking about building a SaaS or client-facing app with isolated data? Laravel multi-tenancy is what you’re looking for. This guide walks you through setup, strategy, and best use cases.',
    content: `
  ## 🏢 What Is Multi-Tenancy?
  
  Multi-tenancy means a single app serves **multiple clients (tenants)** with isolated data.
  
  Example:
  - A SaaS CRM where each company has its own users, leads, and data.
  - A real estate system where each agency has separate listings.
  
  ---
  
  \`\`\`
  🧠 Multi-Tenancy Types in Laravel
  
  There are 3 main strategies:
  
  1. **Single Database – Shared Schema**  
     All tenants use the same DB and tables, identified by a \`tenant_id\` field.
  
  2. **Single Database – Separate Schemas**  
     One DB, but each tenant has their own schema (PostgreSQL only).
  
  3. **Multiple Databases**  
     Each tenant has their own database. Best for strong isolation and scaling.
  
  Pick based on:
  - # of tenants
  - Data isolation/security needs
  - App complexity
  
  \`\`\`
  
  ---
  
  \`\`\`
  🔧 Getting Started with Laravel Tenancy
  
  Use [stancl/tenancy](https://tenancyforlaravel.com) — it’s the most popular and well-documented package for Laravel multi-tenancy.
  
  Installation:
  
  \`\`\`bash
  composer require stancl/tenancy
  php artisan tenancy:install
  php artisan migrate
  \`\`\`
  
  This package supports:
  - Multiple DBs per tenant
  - Central and tenant-specific routes
  - Tenant-aware queues, events, jobs, and storage
  
  \`\`\`
  
  ---
  
  \`\`\`
  📁 Folder Structure Tips
  
  Your app will have:
  - **Central app**: authentication, tenant creation, billing, etc.
  - **Tenant app**: the actual business logic (dashboard, resources, etc.)
  
  Stancl keeps the structure simple:
  - \`routes/tenant.php\` – for tenant-specific routes
  - \`routes/web.php\` – for central app
  - Tenants auto-resolve based on domain or subdomain
  
  \`\`\`
  
  ---
  
  \`\`\`
  🌐 Route Handling (Central vs Tenant)
  
  Stancl automatically detects the tenant using domains or subdomains.
  
  Example:
  - \`yourapp.com\` → Central
  - \`client1.yourapp.com\` → Tenant 1
  - \`client2.yourapp.com\` → Tenant 2
  
  Tenant routes go inside:
  \`\`\`php
  // routes/tenant.php
  Route::middleware(['web', 'tenant'])->group(function () {
      Route::get('/dashboard', function () {
          return 'Tenant dashboard';
      });
  });
  \`\`\`
  
  \`\`\`
  
  ---
  
  \`\`\`
  🗃 Database Per Tenant (Best Isolation)
  
  This is the default and safest setup.
  
  Every tenant gets its own DB, which is created automatically:
  
  \`\`\`php
  Tenant::create([
    'id' => 'client1',
    'domain' => 'client1.yourapp.com',
  ]);
  \`\`\`
  
  You define what migrations run for tenants:
  \`\`\`bash
  php artisan tenants:migrate
  \`\`\`
  
  You can even seed data per tenant.
  
  \`\`\`
  
  ---
  
  \`\`\`
  ⚙️ Useful Stancl Commands
  
  - \`php artisan tenants:create\`
  - \`php artisan tenants:list\`
  - \`php artisan tenants:migrate\`
  - \`php artisan tenants:seed\`
  
  You can also dispatch jobs or queue events tenant-by-tenant.
  
  \`\`\`
  
  ---
  
  \`\`\`
  📦 When Should You Use Multi-Tenancy?
  
  Use multi-tenancy if:
  - You’re building a **SaaS**
  - You need data separation between clients
  - You want clients to have their own subdomain
  - You need to scale easily by moving tenants across DB servers
  
  Don’t use multi-tenancy if:
  - You’re building a simple one-client app
  - Your app only has different user roles (admin/user) — that’s **not** tenancy
  
  \`\`\`
  
  ---
  
  \`\`\`
  ⚠️ Challenges to Keep in Mind
  
  - Backups: each tenant DB needs its own backup routine
  - Migrations: test carefully before running tenant-wide
  - Caching: isolate tenant cache to avoid data leaks
  - Debugging: more moving parts = more complexity
  
  \`\`\`
  
  ---
  
  \`\`\`
  🌟 Final Tip
  
  Start simple — one DB per tenant is usually enough.  
  Use [stancl/tenancy](https://github.com/stancl/tenancy) for Laravel, and only introduce custom logic if you really need it.
  
  Need a starter template for Laravel SaaS with tenancy?  
  Want tips on user billing + tenant creation?
  
  Check out more Laravel SaaS tips on the blog:  
  https://mostefa-boudjema.vercel.app/blog
  \`\`\`
  `
  },
  {
    id: 20,
    lang: 'en',
    title: 'What Is the Advantage of DTO (Over Model Instances)?',
    summary: 'DTOs can make your Laravel app cleaner, more testable, and easier to scale. Here’s when and why to use Data Transfer Objects instead of Eloquent models directly.',
    date: '2025-08-06',
    tags: ['laravel', 'dto', 'architecture', 'clean code', 'best practices'],
    slug: 'laravel-dto-vs-model',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover20,
    readingTime: '7 min read',
    published: true,
    category: 'Laravel',
    updatedAt: '2025-08-06',
    metaDescription: 'Learn what DTOs are in Laravel, why they matter, and how they improve maintainability, testability, and decoupling over using raw model instances.',
    excerpt: 'Stop passing around Eloquent models like candy. Use DTOs to make your Laravel app more predictable, testable, and future-proof. Here’s the what, why, and how.',
    content: `
  ## 📦 What Is a DTO?
  
  DTO = **Data Transfer Object**  
  It's a simple object that holds **only data**, no logic or database access.
  
  Think of it as a plain container for structured data.
  
  Example:
  - Instead of passing an Eloquent model to a service/controller, you pass a DTO.
  - Instead of injecting request input directly into business logic, you wrap it in a DTO.
  
  ---
  
  \`\`\`
  🧠 Why Not Just Use Models Everywhere?
  
  Because models come with baggage:
  - Database logic
  - Relationships
  - Mutators
  - Lazy-loaded data
  
  Using them **everywhere** tightly couples your logic to the database.
  
  DTOs give you:
  - Clean boundaries
  - Predictable, fixed shape
  - No side effects or DB calls
  
  \`\`\`
  
  ---
  
  \`\`\`
  ✅ DTO vs Model: Quick Comparison
  
  | Feature        | DTO              | Model           |
  |----------------|------------------|-----------------|
  | Holds data     | ✅ Yes           | ✅ Yes         |
  | Has logic      | ❌ No            | ✅ Yes         |
  | Lazy loading   | ❌ No            | ✅ Yes         |
  | Tied to DB     | ❌ No            | ✅ Yes         |
  | Good for APIs  | ✅ Yes           | 🚫 Risky       |
  
  \`\`\`
  
  ---
  
  \`\`\`
  🧱 Where to Use DTOs in Laravel
  
  DTOs are great for:
  - Service layer inputs/outputs
  - Form requests → services
  - API responses
  - Jobs and Events
  - External APIs (normalizing structure)
  
  Example use case:
  Instead of passing the full \`User\` model:
  \`\`\`php
  $user = new UserData(
    name: 'John',
    email: 'john@example.com',
    role: 'admin'
  );
  \`\`\`
  
  Now your service or controller isn’t tied to the database anymore.
  
  
  ---
  
  📐 How to Build a Simple DTO in Laravel
  
  You can use plain PHP classes or Laravel Data tools (like Spatie or Laravel Data).
  
  Example using native PHP 8+:
  \`\`\`php
  class UserData
  {
    public function __construct(
      public string \$name,
      public string \$email,
      public string \$role,
    ) {}
  }
  \`\`\`
  
  Or make it immutable:
  \`\`\`php
  final readonly class UserData
  {
    public function __construct(
      public string \$name,
      public string \$email,
      public string \$role,
    ) {}
  }
  \`\`\`
  
  
  ---
  
  🔁 How to Convert Request to DTO
  
  Instead of this:
  \`\`\`php
  MyService::handle(\$request->all());
  \`\`\`
  
  Use:
  \`\`\`php
  $userData = new UserData(
    name: \$request->input('name'),
    email: \$request->input('email'),
    role: \$request->input('role'),
  );
  
  MyService::handle(\$userData);
  \`\`\`
  
  Cleaner. Explicit. Easier to test.
  
  
  ---
  
  📤 DTOs for API Responses
  
  You can also return DTOs instead of models in JSON APIs.
  
  Wrap your data:
  \`\`\`php
  return response()->json(new UserData(...));
  \`\`\`
  
  Or transform them into arrays using custom logic:
  \`\`\`php
  public function toArray(): array
  {
    return [
      'name' => \$this->name,
      'email' => \$this->email,
    ];
  }
  \`\`\`
  
  This protects your app from leaking model internals (timestamps, relationships, etc.).
  
  
  ---
  
  📦 DTO Tools for Laravel
  
  If you want better control, type safety, and transformations:
  
  - **spatie/data-transfer-object**  
  - **spatie/laravel-data** (most flexible)
  - **laravel-datafy** (lightweight)
  
  These help you validate, cast, and serialize DTOs easily.
  
  ---
  
  🌟 Final Tip
  
  Using DTOs feels like “extra work” at first. But long-term, it pays off.
  
  ✅ Better architecture  
  ✅ Loosely coupled logic  
  ✅ Easier testing  
  ✅ No accidental DB queries
  
  Still passing models around? Time to clean it up.
  
  Want real-world DTO examples for services, jobs, or APIs?  
  Check out more Laravel best practices on the blog:  
  https://mostefa-boudjema.vercel.app/blog

  `
  },
  {
    id: 21,
    lang: 'en',
    title: 'Firebase vs Supabase: Which One Should You Use?',
    summary: 'Both Firebase and Supabase offer backend-as-a-service tools — but they take very different approaches. Here’s a no-fluff comparison to help you choose.',
    date: '2025-08-07',
    tags: ['firebase', 'supabase', 'backend', 'baas', 'databases'],
    slug: 'firebase-vs-supabase',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover21,
    readingTime: '9 min read',
    published: true,
    category: 'Backend',
    updatedAt: '2025-08-07',
    metaDescription: 'A practical comparison of Firebase and Supabase for developers. Learn the key differences, when to choose one over the other, and which stacks they work best with.',
    excerpt: 'Firebase vs Supabase — which one fits your project better? We break down auth, databases, pricing, real-time features, and more. No fluff, just the facts.',
    content: `
  ## ⚔️ Firebase vs Supabase: The Showdown
  
  Both **Firebase** and **Supabase** are "backend-as-a-service" (BaaS) platforms. They help you build full-stack apps without writing your own backend from scratch.
  
  But they’re very different under the hood.
  
  ---
  
  \`\`\`
  🔥 Firebase Overview
  
  - Built by Google
  - Uses Firestore (NoSQL)
  - Real-time database
  - Auth, hosting, cloud functions, ML, analytics
  - Great for mobile apps
  
  \`\`\`
  
  ---
  
  \`\`\`
  🧊 Supabase Overview
  
  - Open-source Firebase alternative
  - Uses PostgreSQL (SQL)
  - Real-time via Postgres replication
  - Auth, storage, edge functions, admin UI
  - Great for web apps with relational data
  
  \`\`\`
  
  ---
  
  \`\`\`
  🗃️ Database Comparison
  
  Firebase:
  - Firestore (NoSQL)
  - Document-based
  - Scales easily
  - Not great for joins or relational data
  
  Supabase:
  - PostgreSQL (SQL)
  - Full relational support
  - Joins, triggers, views, constraints — everything SQL
  - Use raw SQL or client libraries
  
  💡 Pick Supabase if your data is relational (users, posts, comments...).
  
  \`\`\`
  
  ---
  
  \`\`\`
  🔐 Auth & Security
  
  Firebase:
  - Battle-tested Google auth system
  - Supports Google, Facebook, Apple, etc.
  - Rules-based access control (can get complex)
  
  Supabase:
  - Auth powered by GoTrue (like Netlify)
  - Also supports OAuth providers
  - Uses RLS (Row Level Security) — SQL-driven, powerful but requires SQL know-how
  
  💡 Firebase is easier for beginners. Supabase is more flexible for devs who know SQL.
  
  \`\`\`
  
  ---
  
  \`\`\`
  📡 Real-time Support
  
  Firebase:
  - Real-time is native (built-in to Firestore)
  - Push updates instantly to clients
  
  Supabase:
  - Real-time via Postgres' replication + websockets
  - Works well but slightly heavier setup
  - Great for collaborative apps
  
  💡 Both are solid. Firebase wins on speed, Supabase wins on structure.
  
  \`\`\`
  
  ---
  
  \`\`\`
  🧮 Functions (Serverless Logic)
  
  Firebase:
  - Cloud Functions
  - Deploy JS/TS to run backend logic
  
  Supabase:
  - Edge Functions (based on Deno)
  - Deploy logic close to the user
  - Lightweight, modern
  
  💡 Firebase is more mature, Supabase is faster and simpler for quick tasks.
  
  \`\`\`
  
  ---
  
  \`\`\`
  💰 Pricing
  
  Firebase:
  - Free tier is generous
  - Pay-as-you-go pricing
  - Firestore reads/writes can get expensive at scale
  
  Supabase:
  - Free tier includes Postgres, auth, and storage
  - Predictable pricing tiers
  - Full database access — no hidden costs on reads/writes
  
  💡 Firebase can surprise you with read/write costs. Supabase is more transparent.
  
  \`\`\`
  
  ---
  
  \`\`\`
  🔌 Ecosystem & Tooling
  
  Firebase:
  - Massive ecosystem
  - Well integrated with Android, Flutter, and web
  - Proprietary tech
  
  Supabase:
  - Growing fast (fully open-source)
  - Self-hosting possible
  - More control, but smaller ecosystem (for now)
  
  💡 Firebase is safer for enterprise apps, Supabase is developer-friendly and flexible.
  
  \`\`\`
  
  ---
  
  \`\`\`
  📊 TL;DR Comparison Table
  
  | Feature        | Firebase            | Supabase           |
  |----------------|---------------------|--------------------|
  | Database       | Firestore (NoSQL)   | PostgreSQL (SQL)   |
  | Auth           | Google Auth         | GoTrue + RLS       |
  | Real-time      | Built-in            | Postgres channels  |
  | Functions      | Cloud Functions     | Edge (Deno)        |
  | Hosting        | Yes                 | Yes (Vercel/Netlify-style) |
  | Open Source    | ❌                  | ✅                 |
  | Offline Support| ✅ Native           | ❌ Experimental     |
  | Pricing Model  | Pay-per-request     | Flat/Usage tiers   |
  
  \`\`\`
  
  ---
  
  \`\`\`
  🚀 When to Use Firebase
  
  ✅ Best for:
  - Mobile-first apps
  - MVPs that need fast real-time DB
  - Google Cloud-integrated workflows
  
  ❌ Not ideal for:
  - Complex queries
  - SQL-heavy apps
  - Multi-table joins
  
  \`\`\`
  
  ---
  
  \`\`\`
  🧠 When to Use Supabase
  
  ✅ Best for:
  - Web apps with structured data
  - Projects where you want full SQL
  - Self-hosted/controlled apps
  
  ❌ Not ideal for:
  - Mobile apps with heavy offline support
  - Real-time heavy apps at massive scale (yet)
  
  \`\`\`
  
  ---
  
  \`\`\`
  🧩 Final Thoughts
  
  Both are amazing. But they serve **different needs**.
  
  👉 Firebase is ideal when you need **speed and scalability** for unstructured data.  
  👉 Supabase is ideal when you want **relational power, open-source flexibility**, and full control.
  
  Still confused? Here’s the rule:
  
  If your schema looks like a SQL ERD → use Supabase.  
  If your data is loose, dynamic, and heavily real-time → use Firebase.
  
  Want starter templates for both? Check the blog:
  https://mostefa-boudjema.vercel.app/blog
  
  \`\`\`
    `
  },
  {
    id: 22,
    lang: 'en',
    title: 'Laravel Service Container vs Service Provider: What’s the Difference?',
    summary: 'Still confused between Laravel’s Service Container and Service Providers? This post clears it up with real examples and explains how they work together.',
    date: '2025-08-08',
    tags: ['laravel', 'php', 'dependency injection', 'service container', 'service provider'],
    slug: 'laravel-service-container-vs-provider',
    author: {
      name: 'Mostefa Boudjema',
      avatar: me1,
      bio: 'Laravel dev'
    },
    coverImage: cover22,
    readingTime: '7 min read',
    published: true,
    category: 'Laravel',
    updatedAt: '2025-08-08',
    metaDescription: 'Learn the real difference between Laravel’s service container and service providers. Understand how they work together with examples and practical use cases.',
    excerpt: 'Service Container? Service Provider? If these two concepts confuse you in Laravel, this article will finally clear things up with simple examples and real use cases.',
    content: `
## 🧠 Service Container vs Service Provider — What’s the Deal?

They sound similar, right?  
But they’re not the same thing.

In Laravel, **Service Container** is the *engine*, and **Service Providers** are the *fuel*. Let’s break it down.

---

\`\`\`
🔌 What is the Laravel Service Container?

The **Service Container** is Laravel’s dependency injection container.

It’s what resolves classes, dependencies, singletons, and bindings.

Example:

\`\`\`php
// Bind something manually
app()->bind('PaymentService', function () {
    return new StripePaymentService();
});

// Resolve it
$payment = app()->make('PaymentService');
\`\`\`

You can also use constructor injection:

\`\`\`php
public function __construct(StripePaymentService \$service) {
    \$this->service = \$service;
}
\`\`\`

💡 Think of it as the thing that **holds and resolves your dependencies**.


---

🛠️ What is a Service Provider?

A **Service Provider** is the class where you *register things* into the service container.

It’s like the container’s config file.

Example:

\`\`\`php
// app/Providers/PaymentServiceProvider.php

public function register() {
    \$this->app->singleton(PaymentService::class, function () {
        return new StripePaymentService();
    });
}
\`\`\`

And then register the provider in \`config/app.php\` or use package auto-discovery.

💡 It’s where you define how things get added to the container.

\`\`\`

---

\`\`\`
🧩 So What’s the Real Difference?

| Feature              | Service Container              | Service Provider                  |
|----------------------|--------------------------------|------------------------------------|
| Role                | Stores and resolves bindings   | Registers bindings into container |
| Used for            | Dependency injection           | Bootstrapping services            |
| When it runs        | Every time a class is resolved | At app startup                    |
| Common methods      | bind(), make(), singleton()    | register(), boot()                |

💡 You *use* the Service Container — but you *define things* in Service Providers.

\`\`\`

---

\`\`\`
⚙️ Real World Example: Registering a Custom Service

Let’s say you build a custom logger class.

1. Create your class:

\`\`\`php
class CustomLogger {
    public function log(\$msg) {
        file_put_contents('log.txt', \$msg);
    }
}
\`\`\`

2. Create a provider:

\`\`\`php
class LoggerServiceProvider extends ServiceProvider {
    public function register() {
        \$this->app->singleton(CustomLogger::class, function () {
            return new CustomLogger();
        });
    }
}
\`\`\`

3. Use it anywhere:

\`\`\`php
use App\\Services\\CustomLogger;

class ReportController {
    public function __construct(CustomLogger \$logger) {
        \$logger->log("Page loaded");
    }
}
\`\`\`

Laravel will resolve \`CustomLogger\` automatically using the Service Container.


---

🧠 When to Use Which?

✅ Use the **Service Container**:
- Inside controllers or services
- When you want to manually resolve something
- In tests or dynamic logic

✅ Use a **Service Provider**:
- When registering services, bindings, facades, singletons
- When building packages
- When bootstrapping app-wide logic

💡 TL;DR:
- Service Provider = where you **put things into** the container
- Service Container = where you **pull things out** of the container


---

🔁 How They Work Together

1. **You bind stuff** in the Service Provider.
2. Laravel adds it to the **Service Container**.
3. Later, you **resolve** it via injection or \`app()->make()\`.

They’re two halves of the same system.


---

✅ Final Tip

If you’re building Laravel apps:
- You’ll mostly *use* the Service Container without touching it directly
- But you’ll *write* bindings in a Service Provider for anything custom

Still unsure?

If you’ve ever used:
\`\`\`php
Route::get(...)
View::share(...)
Auth::guard(...)
\`\`\`
…you’ve already used things that were registered via **Service Providers** and resolved from the **Service Container**.

💬 Need real-world examples from your Laravel project?
Check out more Laravel deep dives here:  
https://mostefa-boudjema.vercel.app/blog

  `
  },




];

// Sort by updatedAt (descending: newest first)

postsList=postsList
  .filter(post => post.published===true)
  .sort((a, b) => new Date(b.updatedAt)-new Date(a.updatedAt));

// Export only posts published on or before today (dynamic date)
const today=new Date();
const yyyy=today.getFullYear();
const mm=String(today.getMonth()+1).padStart(2, '0');
const dd=String(today.getDate()).padStart(2, '0');
const todayStr=`${yyyy}-${mm}-${dd}`;

// Use Nuxt runtime config for useAllPosts
let useAllPosts=false;
try {
  const config=useRuntimeConfig&&useRuntimeConfig();
  if (config&&config.public&&(config.public.useAllPosts===true||config.public.useAllPosts==='true')) {
    useAllPosts=true;
  }
} catch (e) {
  // fallback for non-Nuxt environments (e.g. static build)
}

const posts=
  useAllPosts
    ? postsList
    :postsList.filter(post => new Date(post.updatedAt)<=new Date(todayStr));

export default posts; 