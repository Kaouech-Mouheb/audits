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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',


  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
    'bootstrap-vue/nuxt',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
    'nuxt-compress',
    ['nuxt-canonical', {
      baseUrl: 'https://auditsrenovation.fr'
    }],

  ],

  sitemap: {
    path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    hostname: 'https://auditsrenovation.fr', // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,

    routes: [{
        url: '/isolation-thermique',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: '2022-03-07T14:14:05+00:00'
      },
      {
        url: '/toiture',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: '2022-03-07T14:14:05+00:00'
      }, {
        url: '/renovation',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: '2022-03-07T14:14:05+00:00'
      }, {
        url: '/',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: '2022-03-07T14:14:05+00:00'
      }
    ]
  },
  robots: {
    UserAgent: '*',
    Sitemap: 'https://auditsrenovation.fr/sitemap'
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
