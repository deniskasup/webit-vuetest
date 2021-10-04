<template>
    <BaseSlider :slider-items="sliderData"/>
    <LastNews :news-cards="lastNewsData"/>
</template>

<script>
import BaseSlider from "@/components/BaseSlider";
import LastNews from "@/components/LastNews";
import Fetch from "@/utils/Fetch";

export default {
    name: "MainPage",
    components: {LastNews, BaseSlider},
    data() {
        return {
            sliderData: [],
            lastNewsData: [],

        }
    },
    mounted() {
        this.loadSliderImages()
        this.loadLastNews()
    },
    methods: {
        async loadSliderImages() {
            const response = await Fetch('slider')
            if(response && response.length) {
                this.sliderData = response
            }
        },
        async loadLastNews() {
            const response = await Fetch('news?limit=5')
            if(response && response.length) {
                this.lastNewsData = response
            }
        }
    }
}
</script>

<style lang="sass" scoped>

</style>