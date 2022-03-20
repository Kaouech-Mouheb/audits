import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/'
  },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - AUDITS rénovation',
    title: 'AUDITS rénovation',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',




  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    'nuxt-robots',
    'nuxt-compress',
    ['nuxt-canonical', { baseUrl: 'https://auditsrenovation.fr' }],
    'nuxt-ssr-cache',

  ],


  sitemap: {
    hostname: 'https://auditsrenovation.fr',
    gzip: true,
    exclude: [
      '/mentions-legales',
    ],
    routes: [
      '/',
      '/isolation-thermique',
      '/toiture',
      '/renovation'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  robots: {
    /* module options */
    cacheTime: 1000 * 60 * 10,
    robots: () => {
      return []
    }
  },
  'nuxt-compress': {
    gzip: {
      threshold: 8192,
    },
  },
  cache: {

    useHostPrefix: false,
    pages: [
      '/'
    ],

    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return
      // falsy value to bypass the cache
    },

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl:1000 * 60 * 10,
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
