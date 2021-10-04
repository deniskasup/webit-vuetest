<template>
    <header class="header">
        <div class="wrapper">
            <router-link to="/">
                Logo
            </router-link>
            <nav class="header__nav">
                <router-link to="/news">Новости</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "PageHeader"
}
</script>

<style lang="sass" scoped>
.header
    display: flex
    align-items: center
    background-color: #B8B8B8
    height: 50px

    & .wrapper
        justify-content: space-between
        align-items: center
</style>