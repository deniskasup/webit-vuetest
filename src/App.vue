<template>
    <PageHeader/>
    <main>
        <router-view/>
    </main>
    <PageFooter/>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

export default {
    name: 'App',
    components: {PageFooter, PageHeader},
    mounted() {
        Fancybox.bind("[data-fancybox]");
    }
}
</script>

<style lang="sass">
@import "@/assets/sass/main"
#app
    min-height: 100%
    display: flex
    flex-direction: column

    & main
        padding: 50px 0 0
        flex-grow: 1
        display: flex
        flex-direction: column
        position: relative
        +until-tablet
            padding: 35px 0 0

</style>