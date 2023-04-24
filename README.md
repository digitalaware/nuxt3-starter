### Introducion
Hi bro

- Your friends says "REACT IS A BUSINSESS STANDART"?
- Tired of arguing, what is the performance difference between useCallback() and useMemo()?
- Don't want to be the "setState renders" magician?
- Want to build your own Full-Stack application without tears?
- Green is your favorite color?

THERE IS AN EXIT!
Try new version of fast SSR JS Framework based on Vue 3.:tw-1f680::tw-1f680::tw-1f680:

# Nuxt3 + MongoDB starter

![](https://static.cdnlogo.com/logos/n/96/nuxtjs-typo.svg)




## Features

- [x] [Element-plus UI](https://element-plus.org/en-US/)
- [x] [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] [Mongoose ORM + MongoDB in Docker](https://mongoosejs.com/)
- [x] [Nuxt Server Routes](https://nuxt.com/docs/guide/directory-structure/server)
- [x] [Auth & Protected Routes](https://sidebase.io/nuxt-auth/getting-started/)
- [x] [PWA]('https://pwa.nuxtjs.org/')
- [x] [Eslint]('https://eslint.org/') & [Prettier]('https://prettier.io/')
- [x] [Built-in Unit Test]('https://nuxt.com/docs/getting-started/testing')

## Getting started

First, you need to set up environment. Node >= 18.16.0 required
Also, need to install [docker-compose](https://docs.docker.com/compose/ "docker-compose").

Then, go to project folder, and run:

1. Install dependencies
   `yarn install // or npm install`

2. Create .env file with default env variables:
   `cp env.example .env`

3. Run MongoDB container
   `docker-compose up`

4. Run project
   `npm run dev`



## Description
You can test user authorization and watch registered user list in basic table.
Learn more about project structure [here]('https://nuxt.com/docs/guide/directory-structure/nuxt').

You can analyze project bundle:
`npm run analyze`

Build project:
`npm run build`

Test project with coverage using Vitest:
`npm run test`

- Use server route middleware to handle auth requests. *// server/middleware/auth*
- Use composable functions for reusable code. // *composables/* *
- Use $fetch interceptors to handle requests | responses. *// composables/useFetchConfig*
- Use Pinia store to app state management. *// store/* * . All your modules in store registered automatically.
- Use auto-generated html pages and routes with SSR | SSG in pages folder. *// pages* *
- Get access to your enviroment variables with useRuntimeConfig() hook
- No need to more import framework functions, just write to code!

##### Try it out and enjoy!

