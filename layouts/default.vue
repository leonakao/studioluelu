<template>
    <v-app>
        <v-app-bar
            app
            color="white"
            height="100"
        >
            <a
                @click="$vuetify.goTo('main')"
            >
                <v-avatar
                    class="mr-3"
                    color="grey lighten-5"
                    size="70"
                >
                    <v-img
                        contain
                        max-height="70%"
                        src="/logo.png"
                    />
                </v-avatar>
            </a>
            <v-spacer />
            <v-toolbar-items>
                <v-divider vertical />
                <v-btn
                    text
                    color="black"
                    @click="$vuetify.goTo('#home')"
                >
                    Inicio
                </v-btn>

                <v-divider vertical />
                <v-btn
                    text
                    color="black"
                    @click="$vuetify.goTo('#about')"
                >
                    Sobre
                </v-btn>

                <v-divider vertical />
                <v-btn
                    text
                    color="black"
                    @click="$vuetify.goTo('#features')"
                >
                    Produtos
                </v-btn>

                <v-divider vertical />
                <v-btn
                    text
                    color="black"
                    @click="$vuetify.goTo('#contact')"
                >
                    Contato
                </v-btn>
                <v-divider vertical />
            </v-toolbar-items>
        </v-app-bar>
        <v-content>
            <nuxt />
        </v-content>
        <v-footer
            class="justify-center"
            color="#292929"
            height="100"
        >
            <div class="title font-weight-light grey--text text--lighten-1 text-center">
                &copy; {{ (new Date()).getFullYear() }} — STUDIO LU & LU
            </div>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/"
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire"
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js"
        };
    }
};
</script>
