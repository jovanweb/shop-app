<template>
    <section class="hero">
        <div class="image-aside"></div>
        <div class="hero-content">
            <slot></slot>
        </div>
    </section>
</template>
<script>
export default {
    name:"authLayout"
}
</script>
<style lang="scss" scoped>
    .hero {
        height: 100vh;
        display: flex;
        overflow: hidden;
    }

    .image-aside {
        height: 100%;
        flex: 60%;
        background-image: url('../assets/images/auth-image.jpg');
        background-size: cover;
        background-position: 50% 50%;
        img {
            width: 100%;
            object-fit: cover;
            object-position: 50% bottom;
        }
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px 100px 50px 50px;
        flex: 40%;
    }
</style>