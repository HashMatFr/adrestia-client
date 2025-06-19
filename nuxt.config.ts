import packageJson from './package.json'

export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },

  // builder: 'webpack',
  sourcemap: {
    server: true,
    client: true,
  },

  components: [
    {
      path: '~/components', // will fetch nested components too
      pathPrefix: false,
    },
  ],

  // filenames: {
  //   app: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
  //   chunk: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
  // },
  css: ['~/assets/css/style.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-simple-vars': {},
    },
  },

  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png',
        },
        {
          rel: 'mask-icon',
          href: '/favicons/safari-pinned-tab.svg',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '128x128',
          href: '/favicons/favicon-128x128.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '152x152',
          href: '/favicons/favicon-152x152.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '167x167',
          href: '/favicons/favicon-167x167.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '180x180',
          href: '/favicons/favicon-180x180.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '196x196',
          href: '/favicons/favicon-196x196.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/favicons/site.webmanifest',
        },
        {
          rel: 'shortcut icon',
          href: '/favicons/favicon.ico',
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/i18n',
    'nuxt-security',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],

  plugins: [],

  i18n: {
    fallbackLocale: 'fr',
    detectBrowserLanguage: false,
    defaultLocale: 'fr',
    compilation: { jit: true, strictMessage: false, escapeHtml: false },
    locales: [
      {
        code: 'fr',
        language: 'fr-FR',
        file: 'fr_FR.js',
      },
      {
        code: 'en',
        language: 'en-US',
        file: 'en_US.js',
      },
    ],
    lazy: true,
  },

  security: {
    csrf: false, // no need for mobile app
    headers: {
      crossOriginResourcePolicy: 'cross-origin',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginEmbedderPolicy: 'credentialless',
      contentSecurityPolicy: {
        'script-src': [
          "'self'", // Fallback value, will be ignored by most modern browsers (level 3)
          '*.monaco-gouvernement.mc', // Fallback value, will be ignored by most modern browsers (level 3)
          '*.gouv.mc',
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          // Remove strict dynamic and nonce because of F5 WAF, which inject JS scripts without nonce
          // "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          // "'nonce-{{nonce}}'", // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
          "'unsafe-eval'",
        ],
        'style-src': [
          "'self'", // Enables loading of stylesheets hosted on same origin
          'https:', // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'", // Recommended default for most Nuxt apps
        ],
        'img-src': ["'self'", 'data:', 'blob:'], // Add relevant https://... sources if you load images from external sources
        'font-src': ["'self'", 'https:', 'data:'], //  For increased security, replace by the specific sources for fonts
        'base-uri': ["'none'"],
        'object-src': ["'none'"],
        'script-src-attr': ["'self'", "'nonce-{{nonce}}'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'worker-src': ['blob:'],
        'upgrade-insecure-requests': true,
      },
      originAgentCluster: '?1',
      referrerPolicy: 'strict-origin-when-cross-origin',
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
      },
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'SAMEORIGIN',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '0',
      permissionsPolicy: {
        camera: [],
        'display-capture': [],
        fullscreen: [],
        geolocation: [],
        microphone: [],
      },
    },
    rateLimiter: false,
  },

  runtimeConfig: {
    public: {
      appName: '',
      keycloakRemoteHost: '',
      keycloakRealm: '',
      keycloakClientId: '',
      baseUrl: '',
      apiUrl: '',
      apiPrefix: '',
      appVersion: 'V' + packageJson.version,
      currentYear: '',
    },
  },

  ssr: false,
  telemetry: false,
  compatibilityDate: '2024-11-24',
})
