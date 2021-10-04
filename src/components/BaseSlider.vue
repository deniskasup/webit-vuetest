<template>
    <section class="base-slider">
        <div class="wrapper">
            <swiper :slides-per-view="3" :space-between="50">
                <swiper-slide v-for="slide in sliderItems" :key="slide.id">
                    <picture>
                        <source :srcset="'https://shop.anyprinter.ru/' + slide.small_photo" media="(max-width: 767px)">
                        <img :src="'https://shop.anyprinter.ru/' + slide.normal_photo" :alt="slide.name">
                    </picture>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import SwiperCore, {Navigation} from "swiper"

SwiperCore.use([Navigation])
// Import Swiper styles
import 'swiper/swiper-bundle.css'

export default {
    name: "BaseSlider",
    props: {
        sliderItems: {
            type: Array,
            default: () => []
        }
    },
    components: {
        Swiper, SwiperSlide
    }
}
</script>

<style lang="sass">
.base-slider
    padding: 30px 0
    display: flex
    align-items: center
    background-color: #F2F2F2

    & .wrapper
        height: 100%

    & .swiper
        &-container
            height: 100%
            width: 100%

        &-slide
            overflow: hidden
            border-radius: 20px
            display: flex
            align-items: center

            & img
                width: 100%
                height: 100%
                object-fit: cover


</style>