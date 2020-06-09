<template>
    <div>
        <section id="home">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
                        cols="4"
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
                                    v-for="({ title, icon }) in contacts"
                                    :key="title"
                                >
                                    <v-list-item-icon>
                                        <v-icon color="black" x-large>
                                            {{ icon }}
                                        </v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title class="d-none d-sm-flex text-left title" v-text="title" />
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="8"
                    >
                        <v-card
                            class="mx-auto"
                            flat
                        >
                            <v-img
                                src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
                            />
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <div class="py-12" />
        </section>
    </div>
</template>

<script>
export default {
    components: {

    },
    data () {
        return {
            features: [
                {
                    img: "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80-outline",
                    title: "Cabelo"
                },
                {
                    img: "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
                    title: "Pele"
                },
                {
                    img: "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
                    title: "Unhas"
                }
            ],
            contacts: [
                {
                    icon: "mdi mdi-whatsapp",
                    title: "(14) 98102-8845"
                },
                {
                    icon: "mdi mdi-phone",
                    title: "(14) 3239-7055"
                },
                {
                    icon: "mdi mdi-instagram",
                    title: "studioluelu"
                },
                {
                    icon: "mdi mdi-facebook",
                    title: "Studio Lu & Lu"
                },
                {
                    icon: "mdi mdi-map-marker",
                    title: "Alameda das Crisandálias 5-7"
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
