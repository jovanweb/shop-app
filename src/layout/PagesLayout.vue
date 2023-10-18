<template>
    <transition name="fade" mode="out-in">
        <AddToCartAside @hideAsideCart="triggerCartAside" v-if="getCartProducts"/>
    </transition>
    <Header @showAsideCart="triggerCartAside"/>
    <slot></slot>
    <!-- <Footer/> -->
</template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import AddToCartAside from '../components/AddToCartAside.vue'
import store from "@/store";
import { mapGetters } from "vuex";

export default {
    name:"PagesLayout",
    components: {Header, Footer, AddToCartAside},
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            getCartProducts: 'cart/asideCart',
        }),
    },
    methods: {
        triggerCartAside(trigger) {
            store.dispatch('cart/setAside', trigger)
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>