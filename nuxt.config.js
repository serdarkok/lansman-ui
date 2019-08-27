
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arimo:400,700&display=swap&subset=latin-ext' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
        // Load a Node.js module directly (here it's a Sass file)
        'bootstrap-scss',
        // CSS file in the project
        '@/assets/css/bundle.css',
        // SCSS file in the project
        //'@/assets/scss/bootstrap.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-element-ui',
      {
        // components: ['Button', 'DatePicker', 'Card', 'Form', 'Input', 'Radio', 'Select'],
        locale: 'en',
      },
    ],
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    debug: true,
    credentials: true,
    proxy: true
  },

  proxy: {
    '/api/login/': 'http://localhost:3001',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
