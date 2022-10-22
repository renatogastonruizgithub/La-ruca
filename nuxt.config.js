export default {
    generate: {
    fallback: true
  },  
  sitemap: {
    hostname: 'https://laruca.com.ar',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  loading: false,
  router: {
    prefetchLinks: false
  }, 
  target: 'static',
  head: {
    script: [{
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    }],
    __dangerouslyDisableSanitizers: ['script'],

    title: 'Irradiando',
    htmlAttrs: {
      lang: 'es-ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'logo2.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
   css: [
    '@assets/css/global.css',
    '@assets/css/flexboxgrid.css',
    '@assets/fontawesome-free/css/all.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [   
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
