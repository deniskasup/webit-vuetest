<template>
    <section class="news-inner">
        <div v-if="info" class="wrapper">
            <h1 class="news-inner__title">{{ info.h1 }}</h1>
            <div class="news-inner__info">
                <div class="news-inner__desc">{{ info.description }}</div>
                <div class="news-inner__date">{{ info.public_date }}</div>
            </div>
            <div v-html="info.full_text" class="news-inner__content">
            </div>
            <div class="news-inner__photos">
                <a :href="'https://shop.anyprinter.ru/' + photo.big_photo" data-fancybox="phot-gallery" class="news-inner__photo" v-for="photo in info.photos"
                   :key="photo.id">
                    <picture>
                        <source :srcset="'https://shop.anyprinter.ru/' + photo.small_photo" media="(max-width: 767px)">
                        <img :src="'https://shop.anyprinter.ru/' + photo.normal_photo" :alt="photo.name">
                    </picture>

                </a>
            </div>
        </div>
        <Loader v-else/>
    </section>
</template>

<script>
import Fetch from "@/utils/Fetch";
import Loader from "@/components/Loader";

export default {
    name: "InnerNewsPage",
    components: {Loader},
    data() {
        return {
            info: null
        }
    },

    mounted() {
        this.loadData()
    },

    methods: {
        async loadData() {
            const response = await Fetch("news/" + this.$route.params.id)
            if (response) {
                this.info = response
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.news-inner
    padding: 30px 0
    display: flex
    align-items: center

    & .wrapper
        display: flex
        flex-direction: column

    &__title
        margin-bottom: 30px

    &__info
        display: flex
        align-items: center
        justify-content: space-between

        margin-bottom: 30px

    &__photos
        grid-gap: 40px
        display: grid
        grid-template-columns: 1fr 1fr
        +until-tablet
            grid-template-columns: 100%

    &__photo
        & img
            width: 100%
            height: auto
            object-fit: cover
</style>