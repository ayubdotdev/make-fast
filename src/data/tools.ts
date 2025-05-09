export type Tool = {
  id: string;
  name: string;
  logo:string;
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
    logo: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
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
    logo: 'https://vitejs.dev/logo.svg',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
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
    logo: 'https://nestjs.com/img/logo-small.svg',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
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
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
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
    logo: 'https://nuxt.com/icon.png',
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
    logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Astro.png',
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
    logo: 'https://imgs.search.brave.com/F35tFgaSvfIrjFlUiiS47oh_ZuRMQx8kR8I1PvrqCPo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWRjYzFlMDVj/NzJiNmY2OTIwNjE4/Zjc5MDQ3NWFjOTll/MDBjNzg4MDkxYjQ1/YWZjY2UzMzQ4NGQz/MmFhMDEyNS9yZW1p/eC5ydW4v',
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
    logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
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
    logo: "https://icon.icepanel.io/Technology/svg/Solid.js.svg",
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
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
    logo: 'https://imgs.search.brave.com/vg_Wvk-VOtkRu3fplByPO_ys7QCFlpeQf6tefxTyXDE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTI4YjViYWRl/YzY3YTQ4MjljOTYz/MDc3MDhjZTRhZjY0/MWZlOGUwYjExMmUz/NGY0YWZjODMyODQz/NzJhOTllNi9xd2lr/LmRldi8',
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
    logo: 'https://imgs.search.brave.com/vHLEF96rWvNeDvlBtM1I21IQ9q6-LukExMUHjhA0fIw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzkzNmNlMDFl/ZmNlYTAxZWFiYTk2/NGZkZWM1ZGIxMjA1/MTI3OThjMWZkZmJk/MWI0MTVmMDFiMzBh/NTgxYjQ4Mi9ibGl0/empzLmNvbS8',
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
    logo: 'https://reactnative.dev/img/header_logo.svg',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
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
    logo: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/24ec268ff10aafc47182fc9ce5ac0bd8fdd84b9e/remix.svg',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/a545c2692f1a32446f74f387cf02ba4346d35518/remix.svg',
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
    logo: 'https://avatars.githubusercontent.com/u/7552965?s=200&v=4',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
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
    logo: 'https://imgs.search.brave.com/EtX6NalpbuMIWXMZMVikFjxzRChIR-G1mDhfH0iKTog/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjg0OGM0YzEz/Mjk2NWMyNzRkY2Vi/OTRmZmYxYTA3YWZh/NWY1NGYyZTE3MGY2/Y2NlYzYwZWU5NzUx/Mzg2NWRjZC9uZW9u/LnRlY2gv',
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
    logo: 'https://imgs.search.brave.com/Qj55FBfudXtWGU-gpayCqUplypiuFfKkDKG7mtYE-ls/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZkL0R5/bmFtb0RCLnBuZy8y/MjBweC1EeW5hbW9E/Qi5wbmc',
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
    logo: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
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
    logo: 'https://avatars.githubusercontent.com/u/102252348?s=200&v=4',
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
    logo: 'https://imgs.search.brave.com/MaOrgA13p19_TqUAOLWxWbI42Fwj9JmO4wZIr_EDavQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjA5ZTRlZGNj/M2JhODhiNzljOTNj/YTY2MDBjZWJiZjQ3/Njc0NDc1NWIyMWVl/ZmNjNzNiZGYyYzE0/MDlkN2RmMS90eXBl/b3JtLmlvLw',
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
    logo: 'https://avatars.githubusercontent.com/u/41822171?s=200&v=4',
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
    logo: 'https://avatars.githubusercontent.com/u/17115069?s=200&v=4',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/940064952294ae443fd4f0f190fd144b46680db2/remix.svg',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/f84703d1ea38e82e06737318d46e5f086d16a867/remix.svg',
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
    logo: 'https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/logo.png',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/e1bd767f61eb135a761cec3308b08ff20459dd28/remix.svg',
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
    logo: 'https://imgs.search.brave.com/P1kdvPbkkE2HChVEoh17mNqhyE-5jZ2SeQBNb_rb9X0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDM2MWE1MzZm/MGI0MTM4YjFkYjc5/MTc3NmEwYWI3ZGVk/NDg1NTk3YzVjNTgy/MmMyYTA3ODI3N2Zk/Y2ZlOTEwNC91aS5t/YW50aW5lLmRldi8',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg',
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
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
    logo: 'https://imgs.search.brave.com/8aigMURSbMIkkQ5wd-dJouQdLf2LJ_Ojk550LRGyLV0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzA0MmQ3NTVj/YjczNDc3OTZhYTE2/ZDlmYWNlZTE2MTg0/N2VkNTU1NDRkZDIw/MTIwODhlNzM2MDQ5/M2ZmYjJlYS9kYWlz/eXVpLmNvbS8',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/d25df6ee3316eba769ebe36c97a6af7b9de32b2f/remix.svg',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/0c65669e3797565d09c63d04b907a1162a5449b3/remix.svg',
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
    logo: 'https://imgs.search.brave.com/xqBHQJQvtYpl4R9jzNxjmC6hi52bID0OMh2Csanfqw4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjg1NDViOTQw/MTZjY2M3NzYwMWFk/Njg5ZWQ5ODMyNWYx/OWI0OTE1ODBlNDBk/YjQzYTk1ZGMwYWMw/ODc4NDQ5OS9nZWlz/dC11aS5kZXYv',
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
    logo: 'https://raw.githubusercontent.com/Semantic-Org/Semantic-UI-React/master/docs/public/logo.png',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/7b3b9993149e197b0016e4df986352e1878ceeb0/remix.svg',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/49d1910f2700cbef7729d5578001f0476ac4bbb9/remix.svg',
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
    logo: 'https://imgs.search.brave.com/Rp5Wc4v2V83jVp6Wk6vFQeDOEV4bt6qNyYqvNt1GfTU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2NhMTg5Y2U2/MDI4MzU3YWM2YmIz/ZDE4ZmFkMjQ3MmVi/NTMyODgzYTliNmZh/ZWE4MGQxYmIzMmNl/NTVmOTYyMy93d3cu/bmFpdmV1aS5jb20v',
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
    logo: 'https://imgs.search.brave.com/tFpVNdL6L6Co2UXXjsIGfCw4p4d3Wh2M6tm3r_dgK0M/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGRjZGM2NDg2/NzAxNGUyNDVjODc4/NjE4NTMyYjFiNThl/Y2I5YmYwYmI0YmQy/NjUyNjljZmI0YmZi/MTNlNWU1NC9wcmlt/ZXZ1ZS5vcmcv',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/5ca1a0b5c5d3fa03a89d927f82a9d47eddbe2c27/remix.svg',
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
    logo: 'https://raw.githubusercontent.com/ayubdotdev/make-fast/2d146ae7d27e3215fd4f73ee5f62620d674ba60e/remix.svg',
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
    logo: 'https://dg0np5s1f9lxp.cloudfront.net/img/logo/MotionElements-logo-masthead-220503-inverse.svg',
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
    logo: 'https://avatars.githubusercontent.com/u/61993507?s=200&v=4',
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
    logo: 'https://animejs.com/assets/images/anime-js-logo-v4.svg',
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
    logo: 'https://motion.dev/images/logos/logo.svg',
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
    logo: 'https://imgs.search.brave.com/Rk3ZZj45ERaEVrb9rYQb-4YP3BzbFV7xubF3qWEbqJs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjkxMTU2MGU5/NDM3N2ZiYjhjOTk1/YmM1MzQ0MGUzZDQz/YjFhMGE1ODExYTc3/MjVmODc4OTgzZjEz/YWU0NGZlMi9yZWFj/dC1hd2Vzb21lLXJl/dmVhbC5tb3JlbGxv/LmRldi8',
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
    logo: 'https://imgs.search.brave.com/wTuPDXivvwNCvjFhmh7rxgQvP4kWvRtuwnRXAiELJ7E/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWJiYTgyMmM5/MzU2ODNiYTc1OGE4/MWRjZGFiZTRhMmY1/MTc2MjM1ZWE1NjVh/ZmI3N2U2NzRmYmI0/NjBlYTgzNS9jb2Rl/cGVuLmlvLw',
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
    logo: 'https://imgs.search.brave.com/ZrDwANIatap5teRDTUQf3hjSJzCbV_zuP8cDMgacWC0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTZjMWFmZTFl/ZWQ2OWVmZTg1OWEw/ZTYzODc1OGNhOGVh/OTkzYWYwYTE4ZmEw/NDgyNGI0NDViMGE5/ZmJjYmI2OS9zY3Jv/bGxyZXZlYWxqcy5v/cmcv',
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
    logo:"https://imgs.search.brave.com/bn76MfaRVIPSlSnhylv5DiVvF52uL6IVkDfp8RN5T4A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmY4OWFiNjAx/MzEwMzc0YjdkMDY0/OWIxZTlhNjg2NmY0/MGJiNWNhYzZkNzhk/MDFjMDQyNzQ5N2U4/YTRmZjMxYS9sb2Nv/bW90aXZlbXRsLmdp/dGh1Yi5pby8",
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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
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
    logo: 'https://imgs.search.brave.com/9JHaQAfJxToaRCbQgW2AztHIOA35yh5QXc2gtoA8EAA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGQzMjNiNDk2/ZjdlMjNjYjI3ZWZh/NjE1OGJlYmIzN2Q5/MDk1OWRkMTc2YjE3/NDdmYzNjZWMzZDA5/YTBkMWRkZC9kZXZl/bG9wZXJzLmxvdHRp/ZWZpbGVzLmNvbS8',
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
    logo: 'https://imgs.search.brave.com/MD8mMpPY5Lxm8GEaHn6YHgxndul7RTbAdTWtrUpWAIs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmRiMDJlMmUz/MzcxZTAwM2QxZmRm/Njk3OTQ1YzUyMjc4/NDA3ZDNlNjY4MTYy/YzdmZGU1MzdhMWRi/YjA0YjQ3ZC9tb3Rp/b24uZGV2Lw',
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
    logo: 'https://imgs.search.brave.com/xrJl2t3GFKLlS7jlMbHL6nLKCbry5ctALyr-GxbIgKA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjU3ZTk1OWUz/NDZiMDhlZjIzMTZk/ODM1MjYzMjZkMzc4/Y2E4ODg0YmM1NTU5/NDA4Y2Q5Yzk0Yjg3/NWQ1MDY0MS9zY3Jv/bGxtYWdpYy5pby8',
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
    logo: 'https://imgs.search.brave.com/2T6IyJTE8G07aadCBwkVXRt4y9bVLF5MUnzPXslYVPU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTE2OGVjZjM2/MGY5YTVlOWJmODQ1/OTIxYTZlZWYwNDQy/NTg4OTgwNDFmNjdl/NWNkNzlhMzhiZGJl/NmNjNjM1Ny9wYXJ0/aWNsZXMuanMub3Jn/Lw',
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
    logo: 'https://imgs.search.brave.com/P4BBOnBY9gS9FD91B5CfvR4miL1VmABHDPopQ1TjhyM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzEyMzRjMjhj/MzZmYzYzMzAzNGM1/ZTIzYmRiOWFlYTU5/MmE5NDVkYzg3YTFk/MDU5ZTYwODkzMDIz/MTQxMmIxNy9yZXZl/YWxqcy5jb20v',
    commands: {
      npm: 'npm install react-reveal',
      yarn: 'yarn add react-reveal',
      pnpm: 'pnpm add react-reveal',
      bun: 'bun add react-reveal',
    },
  },
  
  
];
