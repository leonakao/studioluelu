<template>
    <div>
        <section id="home">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                    src="/fachada.jpg"
                >
                    <v-theme-provider dark>
                        <v-container fill-height>
                            <v-row
                                align="center"
                                class="primary--text mx-auto"
                                justify="center"
                            >
                                <v-col
                                    class="primary--text text-center"
                                    cols="12"
                                    tag="h1"
                                >
                                    <span
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                                        class="font-weight-light"
                                    >
                                        BEM VINDO AO
                                    </span>

                                    <br>

                                    <span
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                                        class="font-weight-black"
                                    >
                                        STUDIO LU & LU
                                    </span>
                                </v-col>

                                <v-btn
                                    class="align-self-end"
                                    fab
                                    outlined
                                    color="primary"
                                    @click="$vuetify.goTo('#about')"
                                >
                                    <v-icon color="primary">
                                        mdi-chevron-double-down
                                    </v-icon>
                                </v-btn>
                            </v-row>
                        </v-container>
                    </v-theme-provider>
                </v-img>
            </v-row>
        </section>

        <section id="about">
            <div class="py-12" />

            <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">
                    SOBRE NÓS
                </h2>

                <v-responsive
                    class="mx-auto mb-8"
                    width="56"
                >
                    <v-divider class="mb-1" />

                    <v-divider />
                </v-responsive>

                <v-responsive
                    class="mx-auto title font-weight-light mb-8"
                    max-width="720"
                >
                    Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.
                </v-responsive>
            </v-container>

            <div class="py-12" />
        </section>

        <section
            id="features"
            class="grey lighten-3"
        >
            <div class="py-12" />

            <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">
                    NOSSOS SERVIÇOS
                </h2>

                <v-responsive
                    class="mx-auto mb-12"
                    width="56"
                >
                    <v-divider class="mb-1" />

                    <v-divider />
                </v-responsive>

                <v-row>
                    <v-col
                        v-for="({ img, title, text }, i) in features"
                        :key="i"
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="mx-auto"
                            flat
                        >
                            <v-img
                                :src="img"
                                class="align-end"
                            >
                                <v-card-title
                                    class="white--text justify-center font-weight-black text-uppercase feature-title"
                                    v-text="title"
                                />
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <div class="py-12" />
        </section>

        <section id="contact">
            <div class="py-12" />

            <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">
                    CONTATO E LOCALIZAÇÃO
                </h2>

                <v-responsive
                    class="mx-auto mb-12"
                    width="56"
                >
                    <v-divider class="mb-1" />

                    <v-divider />
                </v-responsive>

                <v-row>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            height="100%"
                            class="d-flex flex-column justify-space-between"
                        >
                            <v-container class="text-center">
                                <h2 class="display-2 primary--text font-weight-bold mb-3">
                                    STUDIO LU & LU
                                </h2>

                                <v-responsive
                                    class="mx-auto mb-8"
                                    width="56"
                                >
                                    <v-divider class="mb-1" />

                                    <v-divider />
                                </v-responsive>

                                <v-responsive
                                    class="mx-auto title font-weight-light mb-8"
                                    max-width="720"
                                >
                                    Cuidando da sua beleza a mais de 25 anos.
                                </v-responsive>

                                <v-responsive
                                    class="mx-auto mt-8"
                                >
                                    <v-img class="mx-auto" src="/logo.png" width="200px" height="200px" />
                                </v-responsive>
                            </v-container>
                            <v-list>
                                <v-list-item
                                    v-for="({ title, icon, link }) in contacts"
                                    :key="title"
                                    :href="link || ''"
                                    target="blank"
                                >
                                    <v-list-item-icon>
                                        <v-icon color="black" x-large>
                                            {{ icon }}
                                        </v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title class="text-left title" v-text="title" />
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        md="8"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.351789025408!2d-49.06968258441239!3d-22.30253152219643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67c4bc290e4f%3A0xbc41585285753f6b!2sSTUDIO%20LU%20%26%20LU!5e0!3m2!1spt-BR!2sbr!4v1591830277444!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style="border:0;"
                            allowfullscreen="true"
                            tabindex="0"
                        />
                    </v-col>
                </v-row>
            </v-container>

            <div class="py-12" />
        </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            features: [
                {
                    img: "https://images.unsplash.com/photo-1581674210501-c760093514e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    title: "Cabelo"
                },
                {
                    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
                    title: "Estética"
                },
                {
                    img: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    title: "Unhas"
                }
            ],
            contacts: [
                {
                    icon: "mdi mdi-whatsapp",
                    title: "(14) 98182-7055",
                    link: "https://api.whatsapp.com/send?phone=5514981827055"
                },
                {
                    icon: "mdi mdi-phone",
                    title: "(14) 3239-7055"
                },
                {
                    icon: "mdi mdi-instagram",
                    title: "studioluelu",
                    link: "https://www.instagram.com/studioluelu/"
                },
                {
                    icon: "mdi mdi-facebook",
                    title: "Studio Lu & Lu",
                    link: "https://www.facebook.com/studioluelu/"
                },
                {
                    icon: "mdi mdi-map-marker",
                    title: "Alameda das Crisandálias 5-7",
                    link: "https://goo.gl/maps/G3YtLd6EXxLjM8F97"
                }
            ]
        };
    }
};
</script>

<style>
.feature-title {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
