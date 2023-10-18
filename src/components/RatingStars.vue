<template>
    <ul class="o-flex o-flex--center mb0">
        <li v-for="(star, index) in 5" :key="index">
            <svg :class="{'is-active' : rating > index}" width="20" height="20" fill="none"><path d="m11.442 2.925 1.466 2.934c.2.408.734.8 1.184.875l2.658.441c1.7.284 2.1 1.517.875 2.734l-2.067 2.066c-.35.35-.541 1.025-.433 1.508l.592 2.559c.466 2.025-.609 2.808-2.4 1.75l-2.492-1.475c-.45-.267-1.192-.267-1.65 0l-2.492 1.475c-1.783 1.058-2.866.266-2.4-1.75l.592-2.559c.108-.483-.083-1.158-.433-1.508L2.375 9.91c-1.217-1.217-.825-2.45.875-2.734l2.658-.441c.442-.075.975-.467 1.175-.875L8.55 2.925c.8-1.591 2.1-1.591 2.892 0Z" fill="#f1f1f1"/></svg>
        </li>
    </ul>
</template>
<script>
export default {
    name: "RatingStars",
    props: {
        rating: {
            type: Number,
            required: true,
        }
    },
}
</script>
<style lang="scss" scoped>
    svg {
        &.is-active {
            path {
                fill: #FFC560;
            }
        }
    }
</style>