<template>
    <ul class="breadcrumb">
        <li>Shop</li>
        <li v-for="(crumb, index) in crumbs" :key="index">
            <svg width="6" height="10" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M.943.345a.625.625 0 0 0-.098.879L3.866 5 .846 8.776a.625.625 0 0 0 .975.781L5.155 5.39a.625.625 0 0 0 0-.78L1.82.443A.625.625 0 0 0 .943.345Z" fill="#141C1D"/></svg>
            <!-- <router-link :to="crumb.to"></router-link> -->
            {{ crumb.label }}
        </li>
    </ul>
</template>
<script>
export default {
    name: 'Breadcrumb',
    computed: {
        crumbs() {
            const route = this.$route;
            const matched = route.matched;
            const crumbs = matched.map(record => ({
                to: record.path,
                label: record.meta && record.meta.breadcrumb ? record.meta.breadcrumb : record.name,
            }));
            return crumbs;
        },
    },
}
</script>
<style lang="scss" scoped>
    .breadcrumb {
        display: flex;
        align-items: center;
        margin-bottom: 0;

        svg {
            margin-left: 8px;
            margin-right: 8px;
        }

        a {
            text-decoration: none;
        }

        li {
            display: flex;
            align-items: center;
        }
    }
</style>