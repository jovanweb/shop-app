<template>
    <transition name="fade" mode="out-in">
        <AddToCartAside @hideAsideCart="triggerCartAside" v-if="showCheckoutAside"/>
    </transition>
    <Header @showAsideCart="triggerCartAside"/>
    <slot></slot>
    <!-- <Footer/> -->
</template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import AddToCartAside from '../components/AddToCartAside.vue'

export default {
    name:"PagesLayout",
    components: {Header, Footer, AddToCartAside},
    data() {
        return {
            showCheckoutAside: false
        }
    },
    methods: {
        triggerCartAside(trigger) {
            this.showCheckoutAside = trigger;
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>