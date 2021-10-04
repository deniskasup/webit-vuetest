<template>
    <div class="news-card">
        <router-link :to="'/news/' + newsCard.id" class="news-card__photo">
            <picture>
                <source :srcset="'https://shop.anyprinter.ru/' + newsCard.small_photo" media="(max-width: 767px)">
                <img :src="'https://shop.anyprinter.ru/' + newsCard.normal_photo" :alt="newsCard.name">
            </picture>
        </router-link>
        <h3 class="news-card__title">{{ newsCard.name }}</h3>
        <em class="news-card__date">{{ newsCard.public_date }}</em>
        <div class="news-card__text">
            <div v-if="showFull" class="news-card__text-full">{{ newsCard.full_text }}</div>
            <div v-else class="news-card__text-shor">{{ newsCard.short_text }}</div>
            <small @click="showFull = !showFull" class="show-more">{{ showFull ? 'Скрыть' : 'Показть больше' }}</small>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        newsCard: {
            type: Object,
            default: () => {
            }
        }
    },
    data() {
        return {
            showFull: false
        }
    }
}
</script>

<style lang="sass" scoped>
.news-card
    width: 100%
    display: flex
    flex-direction: column

    &__photo
        position: relative
        padding-top: 70%
        margin-bottom: 10px

        & img
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            object-fit: cover

.show-more
    cursor: pointer
    display: block
    margin-top: 10px

</style>