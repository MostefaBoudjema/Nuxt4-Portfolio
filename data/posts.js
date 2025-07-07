// Blog posts data
const posts=[
  {
    id: 1,
    title: 'Getting Started with Laravel 11: A Step-by-Step Guide',
    summary: 'A beginner-friendly walkthrough to set up, configure, and run your first Laravel 11 application.',
    date: '2025-07-02',
    tags: ['laravel', 'php', 'getting started'],
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
    
    Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser — you should see Laravel's default welcome page.
    
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
    
    Let's edit the default route in \`routes/web.php\`:
    
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
    
    You've just created and configured a Laravel 11 application, set up your first route, created a controller, and built a basic view.
    
    Laravel's learning curve is smooth, and the ecosystem is incredibly rich. Stick with it, build real things, and you'll master backend development in no time.
    
    > ⭐ Bonus tip: Follow Laravel News and the official docs to stay updated.
    
    Happy coding! 🚀
    `
    ,
    slug: 'getting-started-laravel-11',
    author: {
      name: 'Mostefa Boudjema',
      avatar: '/assets/images/me1.webp',
      bio: 'Laravel dev'
    },
    coverImage: '/assets/images/posts/getting-started-laravel-11.jpg',
    readingTime: '4 min read',
    published: true,
    category: 'Backend',
    updatedAt: '2025-07-02',
    metaDescription: 'Learn how to install and run your first Laravel 11 project step-by-step.',
    excerpt: 'Kickstart your Laravel 11 journey with this beginner-friendly guide to installation, configuration, and setup.'
  },

  {
    id: 2,
    title: 'Best Technology to Learn in 2025',
    summary: 'Explore the top technologies you should master in 2025 to stay ahead in tech.',
    date: '2025-07-05',
    tags: ['trending tech', 'career growth', 'web development'],
    content: `## Best Technologies to Learn in 2025

    Technology is evolving faster than ever, and staying updated is critical for every developer. Whether you're starting out or looking to upskill, here are the top tech trends to invest in for 2025.
    
    ---
    
    ### 🚀 1. **AI & Machine Learning**
    
    AI is no longer optional — it's shaping industries. From AI coding assistants to intelligent automation and data prediction, tools like **OpenAI**, **TensorFlow**, and **PyTorch** are leading the way.
    
    > **Tip:** Start by learning Python, then move into model training and deployment using cloud tools like AWS Sagemaker or Google AI Studio.
    
    ---
    
    ### 🕸️ 2. **WebAssembly (Wasm)**
    
    WebAssembly allows you to run low-level code in the browser at near-native speed. This is a game changer for performance-critical applications like gaming, video editing, or 3D modeling in the browser.
    
    > **Why it matters:** It expands what's possible with JavaScript and allows languages like Rust or C++ to run in the browser.
    
    ---
    
    ### 🌐 3. **Edge Computing**
    
    Data is moving closer to the user. With **Edge Computing**, apps become faster and more scalable by processing data at the source (user's location) instead of the central server.
    
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
    
    - Flutter's UI engine gives native-like experience.
    - React Native has a larger ecosystem and third-party libraries.
    
    ---
    
    ### 🎯 Final Thoughts
    
    Don't chase hype — choose based on your goals.
    
    - Want backend mastery? Laravel + Octane + Filament.
    - Want performance? WebAssembly + Bun.
    - Want to break into AI? Python + TensorFlow + OpenAI APIs.
    
    **Master fewer tools deeply**, rather than skimming the surface of too many. 2025 is all about smart specialization and adapting fast.
    
    ---
    
    _"Learning never exhausts the mind." – Leonardo da Vinci_
    `,
    slug: 'best-technology-to-learn-2025',
    author: {
      name: 'Mostefa Boudjema',
      avatar: '/assets/images/me1.webp',
      bio: 'Laravel dev'
    },
    coverImage: '/assets/images/posts/best-tech-2025.webp',
    readingTime: '4 min read',
    published: true,
    category: 'Tech Trends',
    updatedAt: '2025-07-05',
    metaDescription: 'Discover the best technologies to learn in 2025 for developers and tech enthusiasts.',
    excerpt: 'Top skills to stay ahead in the rapidly evolving tech industry.'
  },
  {
    id: 3,
    title: 'Best Laravel-Related Technologies to Learn in 2025',
    summary: 'Explore top Laravel-related tools and technologies that will boost your productivity and job prospects in 2025.',
    date: '2025-07-07',
    tags: ['laravel', 'php', 'backend', 'productivity'],
    content: `
  ## Introduction
  
  Laravel keeps evolving, and the ecosystem around it is getting more powerful. In 2025, mastering Laravel alone isn't enough — you need to embrace the tools and packages that supercharge development.
  
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
  
  Laravel isn't just a framework — it's a whole ecosystem.
  
  By mastering tools like Livewire, Filament, Octane, and Vapor, you position yourself as a **modern Laravel developer** — one who can build, ship, and scale full-featured apps efficiently.
  
  > Focus on the tools that align with your goals (SaaS, APIs, admin panels), and go deep. Laravel in 2025 is all about productivity and performance.
  
  `,
    slug: 'best-laravel-related-tech-2025',
    author: {
      name: 'Mostefa Boudjema',
      avatar: '/assets/images/me1.webp',
      bio: 'Laravel dev'
    },
    coverImage: '/assets/images/posts/best-laravel-tech-2025.webp',
    readingTime: '10 min read',
    published: true,
    category: 'Backend',
    updatedAt: '2025-07-07',
    metaDescription: 'Discover the top Laravel-related tools and technologies to learn in 2025 — from Livewire and Filament to Octane and Vapor.',
    excerpt: 'Master the Laravel ecosystem in 2025 with these powerful tools and frameworks.'
  }


];

// Sort by updatedAt (descending: newest first)
posts.sort((a, b) => new Date(b.updatedAt)-new Date(a.updatedAt));

export default posts; 