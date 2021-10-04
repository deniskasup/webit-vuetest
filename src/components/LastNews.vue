<template>
    <section class="last-news">
        <div class="wrapper">
            <h2 class="last-news__title">Последние новости</h2>
            <div class="last-news__cards">
                <Card v-for="newsCard in newsCards" :newsCard="newsCard" :key="newsCard.id"/>
            </div>
        </div>

    </section>
</template>

<script>
import Card from "@/components/News/Card";
export default {
    name: "LastNews",
    components: {Card},
    props: {
        newsCards: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="sass" scoped>
.last-news
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