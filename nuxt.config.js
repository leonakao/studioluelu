import colors from "vuetify/es5/util/colors";

export default {
    mode: "universal",
    server: {
        port: 3000, // default: 3000
        host: "10.10.10.7" // default: localhost
    },
    /*
  ** Headers of the page
  */
    head: {
        titleTemplate: "%s | Salão de Beleza",
        title: "Studio Lu & Lu",
        htmlAttrs: {
            lang: "pt-br"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: process.env.npm_package_description || "" },
            { name: "author", content: "Leonardo Nakao" },
            { name: "keywords", content: "cabelo, estetica, estética, depilação, tintura, reflexo, coloração, unha, artística, francesinha, peeling, limpeza, pele, corporal, massagem, pé, mão, sobrancelha, maquiagem, make, dia, da, noiva, corte, masculino, feminino, lavar, corrente, russa, drenagem, linfática" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ]
    },
    /*
  ** Customize the progress-bar color
  */
    loading: { color: "#fff" },
    /*
  ** Global CSS
  */
    css: [
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
    // Doc: https://github.com/nuxt-community/eslint-module
        "@nuxtjs/eslint-module",
        "@nuxtjs/vuetify",
        ["@nuxtjs/google-analytics", {
            id: "UA-169205525-1"
        }]
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
    // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "@nuxtjs/dotenv",
        "@nuxtjs/sitemap"
    ],
    /*
  ** Sitemap module configuration
  ** See https://github.com/nuxt-community/sitemap-module#sitemap-options
  */
    sitemap: {
        hostname: "https://www.studioluelu.com.br",
        cacheTime: 10 * 1000 * 60 * 60 * 2,
        trailingSlash: true,
        gzip: true
    },
    /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
    axios: {
    },
    /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: "#A70E0D"
                },
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
};
