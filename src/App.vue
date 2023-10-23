
<template>
  <component :is="$route.meta.layout">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </component>
</template>

<script>
  import { RouterView } from 'vue-router'
  export default {
        name: "App",
        components: {
          RouterView, 
        }
    }

</script>

<style lang="scss" scoped>

</style>
