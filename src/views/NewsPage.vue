<template>
    <section class="news">
        <div class="wrapper">
            <h2 class="news__title">Новости</h2>
            <div class="news__cards">
                <Loader v-if="loading"/>
                <Card v-for="newsCard in newsList" :newsCard="newsCard" :key="newsCard.id"/>
            </div>
        </div>
    </section>
</template>

<script>
import Fetch from "@/utils/Fetch";
import Loader from "@/components/Loader";
import Card from "@/components/News/Card";

export default {
    name: "NewsPage",
    components: {Card, Loader},
    data() {
        return {
            newsList: [],
            loading: false,
        }
    },
    mounted() {
        this.loadNews()
    },

    methods: {
        async loadNews() {
            this.loading = true
            const response = await Fetch('news')
            if (response && response.length) {
                this.newsList = response
            }
            this.loading = false
        }
    }
}
</script>

<style lang="sass" scoped>
.news
    padding: 30px 0
    display: flex
    align-items: center
    & .wrapper
        display: flex
        flex-direction: column
    &__title
        margin-bottom: 30px
    &__cards
        display: grid
        grid-gap: 40px
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
</style>