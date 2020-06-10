<template>
    <v-app v-cloak>
        <v-app-bar
            v-model="appBar"
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
                <v-btn
                    v-for="({text, action}, i) in options"
                    :key="i"
                    text
                    color="black"
                    @click="action()"
                >
                    {{ text }}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            mini-variant
            mini-variant-width="150"
            hide-overlay
            app
        >
            <v-list
                dense
                rounded
                class="py-0"
            >
                <v-list-item class="d-flex justify-center">
                    <v-list-item-avatar>
                        <v-img src="/logo.png" />
                    </v-list-item-avatar>
                </v-list-item>

                <v-divider />
                <v-list-item
                    v-for="({text, action}, i) in options"
                    :key="i"
                    link
                    @click="action"
                >
                    <v-list-item-content class="text-center">
                        <v-list-item-title>{{ text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <nuxt />
        </v-content>
        <v-footer
            class="justify-center"
            color="#292929"
        >
            <div class="title font-weight-light grey--text text--lighten-1 text-center">
                Studio Lu & Lu - &copy; {{ (new Date()).getFullYear() }}
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
            appBar: false,
            fixed: false,
            options: [
                {
                    action: () => { this.$vuetify.goTo("#home"); },
                    text: "Início"
                },
                {
                    action: () => { this.$vuetify.goTo("#about"); },
                    text: "Sobre"
                },
                {
                    action: () => { this.$vuetify.goTo("#features"); },
                    text: "Serviços"
                },
                {
                    action: () => { this.$vuetify.goTo("#contact"); },
                    text: "Contato"
                }
            ],
            title: "Studio Lu & Lu"
        };
    },
    created () {
        this.appBar = this.$vuetify.breakpoint.smAndUp;
        this.drawer = this.appBar ? false : null;
    }
};
</script>
