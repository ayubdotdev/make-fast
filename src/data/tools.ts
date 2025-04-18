export type Tool = {
  id: string;
  name: string;
  category: 'tech-stack' | 'database' | 'ui-libraries' | 'animations';
  commands: {
    npm: string;
    yarn: string;
    pnpm: string;
    bun: string;
  };
};

export const tools: Tool[] = [
  // 🚀 Tech Stack
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'tech-stack',
    commands: {
      npm: 'npm create next-app@latest',
      yarn: 'yarn create next-app',
      pnpm: 'pnpm create next-app',
      bun: 'bunx create-next-app@latest',
    },
  },
  {
    id: 'react-vite',
    name: 'React (Vite)',
    category: 'tech-stack',
    commands: {
      npm: 'npm create vite@latest my-react-app -- --template react',
      yarn: 'yarn create vite my-react-app --template react',
      pnpm: 'pnpm create vite my-react-app --template react',
      bun: 'bunx create-vite@latest my-react-app --template react',
    },
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tech-stack',
    commands: {
      npm: 'npm create vite@latest',
      yarn: 'yarn create vite',
      pnpm: 'pnpm create vite',
      bun: 'bunx create-vite@latest',
    },
  },
  {
    id: 'express',
    name: 'Express',
    category: 'tech-stack',
    commands: {
      npm: 'npm install express',
      yarn: 'yarn add express',
      pnpm: 'pnpm add express',
      bun: 'bun add express',
    },
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'tech-stack',
    commands: {
      npm: 'npm i -g @nestjs/cli',
      yarn: 'yarn global add @nestjs/cli',
      pnpm: 'pnpm add -g @nestjs/cli',
      bun: 'bun add -g @nestjs/cli',
    },
  },
  {
    id: 'django',
    name: 'Django',
    category: 'tech-stack',
    commands: {
      npm: 'pip install django',
      yarn: 'pip install django',
      pnpm: 'pip install django',
      bun: 'pip install django',
    },
  },
  {
    id: 'sveltekit',
    name: 'SvelteKit',
    category: 'tech-stack',
    commands: {
      npm: 'npm create svelte@latest',
      yarn: 'yarn create svelte',
      pnpm: 'pnpm create svelte',
      bun: 'bunx create-svelte@latest',
    },
  },
  {
    id: 'nuxtjs',
    name: 'Nuxt.js',
    category: 'tech-stack',
    commands: {
      npm: 'npx nuxi init my-nuxt-app',
      yarn: 'yarn create nuxt-app',
      pnpm: 'pnpm create nuxt-app',
      bun: 'bunx nuxi init my-nuxt-app',
    },
  },
  {
    id: 'astro',
    name: 'Astro',
    category: 'tech-stack',
    commands: {
      npm: 'npm create astro@latest',
      yarn: 'yarn create astro',
      pnpm: 'pnpm create astro',
      bun: 'bunx create-astro@latest',
    },
  },
  {
    id: 'remix',
    name: 'Remix',
    category: 'tech-stack',
    commands: {
      npm: 'npx create-remix',
      yarn: 'yarn create remix',
      pnpm: 'pnpm create remix',
      bun: 'bunx create-remix',
    },
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'tech-stack',
    commands: {
      npm: 'npm install -g @angular/cli',
      yarn: 'yarn global add @angular/cli',
      pnpm: 'pnpm add -g @angular/cli',
      bun: 'bun add -g @angular/cli',
    },
  },
  {
    id: 'solidjs',
    name: 'SolidJS',
    category: 'tech-stack',
    commands: {
      npm: 'npm create vite@latest my-solid-app -- --template solid',
      yarn: 'yarn create vite my-solid-app --template solid',
      pnpm: 'pnpm create vite my-solid-app --template solid',
      bun: 'bunx create-vite@latest my-solid-app --template solid',
    },
  },
  {
    id: 'electron',
    name: 'Electron',
    category: 'tech-stack',
    commands: {
      npm: 'npm install electron',
      yarn: 'yarn add electron',
      pnpm: 'pnpm add electron',
      bun: 'bun add electron',
    },
  },
  {
    id: 'qwik',
    name: 'Qwik',
    category: 'tech-stack',
    commands: {
      npm: 'npm create qwik@latest',
      yarn: 'yarn create qwik',
      pnpm: 'pnpm create qwik',
      bun: 'bunx create-qwik@latest',
    },
  },
  {
    id: 'blitz',
    name: 'Blitz.js',
    category: 'tech-stack',
    commands: {
      npm: 'npm install -g blitz',
      yarn: 'yarn global add blitz',
      pnpm: 'pnpm add -g blitz',
      bun: 'bun add -g blitz',
    },
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'tech-stack',
    commands: {
      npm: 'npx react-native init MyApp',
      yarn: 'yarn create react-native-app',
      pnpm: 'pnpm dlx react-native init MyApp',
      bun: 'bunx react-native init MyApp',
    },
  },
  

  // 🛢️ Database
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    commands: {
      npm: 'npm install mongodb',
      yarn: 'yarn add mongodb',
      pnpm: 'pnpm add mongodb',
      bun: 'bun add mongodb',
    },
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'database',
    commands: {
      npm: 'npm install firebase',
      yarn: 'yarn add firebase',
      pnpm: 'pnpm add firebase',
      bun: 'bun add firebase',
    },
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'database',
    commands: {
      npm: 'npm install @supabase/supabase-js',
      yarn: 'yarn add @supabase/supabase-js',
      pnpm: 'pnpm add @supabase/supabase-js',
      bun: 'bun add @supabase/supabase-js',
    },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    commands: {
      npm: 'npm install pg',
      yarn: 'yarn add pg',
      pnpm: 'pnpm add pg',
      bun: 'bun add pg',
    },
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    commands: {
      npm: 'npm install mysql',
      yarn: 'yarn add mysql',
      pnpm: 'pnpm add mysql',
      bun: 'bun add mysql',
    },
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    category: 'database',
    commands: {
      npm: 'npm install sqlite3',
      yarn: 'yarn add sqlite3',
      pnpm: 'pnpm add sqlite3',
      bun: 'bun add sqlite3',
    },
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    category: 'database',
    commands: {
      npm: 'npm install prisma --save-dev',
      yarn: 'yarn add prisma -D',
      pnpm: 'pnpm add -D prisma',
      bun: 'bun add -d prisma',
    },
  },
  {
    id: 'mongoose',
    name: 'Mongoose',
    category: 'database',
    commands: {
      npm: 'npm install mongoose',
      yarn: 'yarn add mongoose',
      pnpm: 'pnpm add mongoose',
      bun: 'bun add mongoose',
    },
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    commands: {
      npm: 'npm install redis',
      yarn: 'yarn add redis',
      pnpm: 'pnpm add redis',
      bun: 'bun add redis',
    },
  },
  {
    id: 'neondb',
    name: 'NeonDB',
    category: 'database',
    commands: {
      npm: 'npm install neon',
      yarn: 'yarn add neon',
      pnpm: 'pnpm add neon',
      bun: 'bun add neon',
    },
  },
  {
    id: 'dynamodb',
    name: 'DynamoDB',
    category: 'database',
    commands: {
      npm: 'npm install @aws-sdk/client-dynamodb',
      yarn: 'yarn add @aws-sdk/client-dynamodb',
      pnpm: 'pnpm add @aws-sdk/client-dynamodb',
      bun: 'bun add @aws-sdk/client-dynamodb',
    },
  },
  {
    id: 'drizzle',
    name: 'Drizzle ORM',
    category: 'database',
    commands: {
      npm: 'npm install drizzle-orm',
      yarn: 'yarn add drizzle-orm',
      pnpm: 'pnpm add drizzle-orm',
      bun: 'bun add drizzle-orm',
    },
  },
  {
    id: 'surrealdb',
    name: 'SurrealDB',
    category: 'database',
    commands: {
      npm: 'npm install surrealdb.js',
      yarn: 'yarn add surrealdb.js',
      pnpm: 'pnpm add surrealdb.js',
      bun: 'bun add surrealdb.js',
    },
  },
  {
    id: 'typeorm',
    name: 'TypeORM',
    category: 'database',
    commands: {
      npm: 'npm install typeorm reflect-metadata',
      yarn: 'yarn add typeorm reflect-metadata',
      pnpm: 'pnpm add typeorm reflect-metadata',
      bun: 'bun add typeorm reflect-metadata',
    },
  },
  {
    id: 'planetscale',
    name: 'PlanetScale',
    category: 'database',
    commands: {
      npm: 'npm install @planetscale/database',
      yarn: 'yarn add @planetscale/database',
      pnpm: 'pnpm add @planetscale/database',
      bun: 'bun add @planetscale/database',
    },
  },
  {
    id: 'faunadb',
    name: 'FaunaDB',
    category: 'database',
    commands: {
      npm: 'npm install faunadb',
      yarn: 'yarn add faunadb',
      pnpm: 'pnpm add faunadb',
      bun: 'bun add faunadb',
    },
  },
  
  // 🎨 UI Libraries
  {
    id: 'tailwind',
    name: 'TailwindCSS',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install -D tailwindcss postcss autoprefixer',
      yarn: 'yarn add -D tailwindcss postcss autoprefixer',
      pnpm: 'pnpm add -D tailwindcss postcss autoprefixer',
      bun: 'bun add -D tailwindcss postcss autoprefixer',
    },
  },
  {
    id: 'shadcn',
    name: 'ShadCN UI',
    category: 'ui-libraries',
    commands: {
      npm: 'npx shadcn-ui@latest init',
      yarn: 'npx shadcn-ui@latest init',
      pnpm: 'npx shadcn-ui@latest init',
      bun: 'bunx shadcn-ui@latest init',
    },
  },
  {
    id: 'mui',
    name: 'Material UI',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install @mui/material @emotion/react @emotion/styled',
      yarn: 'yarn add @mui/material @emotion/react @emotion/styled',
      pnpm: 'pnpm add @mui/material @emotion/react @emotion/styled',
      bun: 'bun add @mui/material @emotion/react @emotion/styled',
    },
  },
  {
    id: 'chakra',
    name: 'Chakra UI',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion',
      yarn: 'yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion',
      pnpm: 'pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion',
      bun: 'bun add @chakra-ui/react @emotion/react @emotion/styled framer-motion',
    },
  },
  {
    id: 'mantine',
    name: 'Mantine',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install @mantine/core @mantine/hooks',
      yarn: 'yarn add @mantine/core @mantine/hooks',
      pnpm: 'pnpm add @mantine/core @mantine/hooks',
      bun: 'bun add @mantine/core @mantine/hooks',
    },
  },
  {
    id: 'antdesign',
    name: 'Ant Design',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install antd',
      yarn: 'yarn add antd',
      pnpm: 'pnpm add antd',
      bun: 'bun add antd',
    },
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install bootstrap',
      yarn: 'yarn add bootstrap',
      pnpm: 'pnpm add bootstrap',
      bun: 'bun add bootstrap',
    },
  },
  {
    id: 'daisyui',
    name: 'DaisyUI',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install daisyui',
      yarn: 'yarn add daisyui',
      pnpm: 'pnpm add daisyui',
      bun: 'bun add daisyui',
    },
  },
  {
    id: 'radixui',
    name: 'Radix UI',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install @radix-ui/react-*',
      yarn: 'yarn add @radix-ui/react-*',
      pnpm: 'pnpm add @radix-ui/react-*',
      bun: 'bun add @radix-ui/react-*',
    },
  },
  {
    id: 'headlessui',
    name: 'Headless UI',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install @headlessui/react',
      yarn: 'yarn add @headlessui/react',
      pnpm: 'pnpm add @headlessui/react',
      bun: 'bun add @headlessui/react',
    },
  },
  {
    id: 'geist',
    name: 'Geist UI',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install @geist-ui/react',
      yarn: 'yarn add @geist-ui/react',
      pnpm: 'pnpm add @geist-ui/react',
      bun: 'bun add @geist-ui/react',
    },
  },
  {
    id: 'semanticui',
    name: 'Semantic UI',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install semantic-ui-react semantic-ui-css',
      yarn: 'yarn add semantic-ui-react semantic-ui-css',
      pnpm: 'pnpm add semantic-ui-react semantic-ui-css',
      bun: 'bun add semantic-ui-react semantic-ui-css',
    },
  },
  {
    id: 'elementplus',
    name: 'Element Plus (Vue)',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install element-plus',
      yarn: 'yarn add element-plus',
      pnpm: 'pnpm add element-plus',
      bun: 'bun add element-plus',
    },
  },
  {
    id: 'vuetify',
    name: 'Vuetify (Vue)',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install vuetify',
      yarn: 'yarn add vuetify',
      pnpm: 'pnpm add vuetify',
      bun: 'bun add vuetify',
    },
  },
  {
    id: 'naiveui',
    name: 'Naive UI (Vue)',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install naive-ui',
      yarn: 'yarn add naive-ui',
      pnpm: 'pnpm add naive-ui',
      bun: 'bun add naive-ui',
    },
  },
  {
    id: 'primevue',
    name: 'PrimeVue',
    category: 'ui-libraries',
    commands: {
      npm: 'npm install primevue primeicons',
      yarn: 'yarn add primevue primeicons',
      pnpm: 'pnpm add primevue primeicons',
      bun: 'bun add primevue primeicons',
    },
  },
  

  // ⚡ Animations
  {
    id: 'framer',
    name: 'Framer Motion',
    category: 'animations',
    commands: {
      npm: 'npm install framer-motion',
      yarn: 'yarn add framer-motion',
      pnpm: 'pnpm add framer-motion',
      bun: 'bun add framer-motion',
    },
  },
  {
    id: 'gsap',
    name: 'GSAP',
    category: 'animations',
    commands: {
      npm: 'npm install gsap',
      yarn: 'yarn add gsap',
      pnpm: 'pnpm add gsap',
      bun: 'bun add gsap',
    },
  },
  {
    id: 'lottie',
    name: 'Lottie',
    category: 'animations',
    commands: {
      npm: 'npm install lottie-react',
      yarn: 'yarn add lottie-react',
      pnpm: 'pnpm add lottie-react',
      bun: 'bun add lottie-react',
    },
  },
  {
    id: 'react-spring',
    name: 'React Spring',
    category: 'animations',
    commands: {
      npm: 'npm install @react-spring/web',
      yarn: 'yarn add @react-spring/web',
      pnpm: 'pnpm add @react-spring/web',
      bun: 'bun add @react-spring/web',
    },
  },
  {
    id: 'animejs',
    name: 'Anime.js',
    category: 'animations',
    commands: {
      npm: 'npm install animejs',
      yarn: 'yarn add animejs',
      pnpm: 'pnpm add animejs',
      bun: 'bun add animejs',
    },
  },
  {
    id: 'motion-one',
    name: 'Motion One',
    category: 'animations',
    commands: {
      npm: 'npm install motion',
      yarn: 'yarn add motion',
      pnpm: 'pnpm add motion',
      bun: 'bun add motion',
    },
  },
  {
    id: 'react-awesome-reveal',
    name: 'React Awesome Reveal',
    category: 'animations',
    commands: {
      npm: 'npm install react-awesome-reveal',
      yarn: 'yarn add react-awesome-reveal',
      pnpm: 'pnpm add react-awesome-reveal',
      bun: 'bun add react-awesome-reveal',
    },
  },
  {
    id: 'aos',
    name: 'AOS (Animate On Scroll)',
    category: 'animations',
    commands: {
      npm: 'npm install aos',
      yarn: 'yarn add aos',
      pnpm: 'pnpm add aos',
      bun: 'bun add aos',
    },
  },
  {
    id: 'scrollreveal',
    name: 'ScrollReveal',
    category: 'animations',
    commands: {
      npm: 'npm install scrollreveal',
      yarn: 'yarn add scrollreveal',
      pnpm: 'pnpm add scrollreveal',
      bun: 'bun add scrollreveal',
    },
  },
  {
    id: 'locomotive-scroll',
    name: 'Locomotive Scroll',
    category: 'animations',
    commands: {
      npm: 'npm install locomotive-scroll',
      yarn: 'yarn add locomotive-scroll',
      pnpm: 'pnpm add locomotive-scroll',
      bun: 'bun add locomotive-scroll',
    },
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: 'animations',
    commands: {
      npm: 'npm install three',
      yarn: 'yarn add three',
      pnpm: 'pnpm add three',
      bun: 'bun add three',
    },
  },
  {
    id: 'react-lottie-player',
    name: 'React Lottie Player',
    category: 'animations',
    commands: {
      npm: 'npm install react-lottie-player',
      yarn: 'yarn add react-lottie-player',
      pnpm: 'pnpm add react-lottie-player',
      bun: 'bun add react-lottie-player',
    },
  },
  {
    id: 'react-motion',
    name: 'React Motion',
    category: 'animations',
    commands: {
      npm: 'npm install react-motion',
      yarn: 'yarn add react-motion',
      pnpm: 'pnpm add react-motion',
      bun: 'bun add react-motion',
    },
  },
  {
    id: 'scrollmagic',
    name: 'ScrollMagic',
    category: 'animations',
    commands: {
      npm: 'npm install scrollmagic',
      yarn: 'yarn add scrollmagic',
      pnpm: 'pnpm add scrollmagic',
      bun: 'bun add scrollmagic',
    },
  },
  {
    id: 'tsparticles',
    name: 'tsParticles',
    category: 'animations',
    commands: {
      npm: 'npm install tsparticles',
      yarn: 'yarn add tsparticles',
      pnpm: 'pnpm add tsparticles',
      bun: 'bun add tsparticles',
    },
  },
  {
    id: 'react-reveal',
    name: 'React Reveal',
    category: 'animations',
    commands: {
      npm: 'npm install react-reveal',
      yarn: 'yarn add react-reveal',
      pnpm: 'pnpm add react-reveal',
      bun: 'bun add react-reveal',
    },
  },
  
];
