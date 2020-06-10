<template>
    <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="zoom">
        <gmap-marker
            v-for="(item, index) in markers"
            :key="index"
            :position="item.position"
            @click="center = item.position"
        />
    </gmap-map>
</template>

<script>
export default {
    data () {
        return {
            center: { lat: -22.302563, lng: -49.067491 },
            mapTypeId: "terrain",
            markers: [
                { position: { lat: -22.302563, lng: -49.067491 } }
            ],
            zoom: 15
        };
    }
};
</script>

<style scoped>
.vue-map-container {
    height: 100%;
    min-height: 450px;
    max-width: 992px;
    width: 100%;
}
</style>
