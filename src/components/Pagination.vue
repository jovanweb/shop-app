<template>
    <ul class="pagination">
        <li><a @click="pageTrigger(this.currentPage - 1)" href="javascript:;" class="arrow-btn"><svg width="24" height="24" fill="none"><path d="m10 8-4 4m0 0 4 4m-4-4h12" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
        <li v-for="(page, index) in calcPages" :key="index"><a @click="pageTrigger(page)" :class="{'is-active' : currentPage === page}" href="javascript:;">{{page}}</a></li>
        <li><a @click="pageTrigger(this.currentPage + 1)"  href="javascript:;" class="arrow-btn"><svg width="24" height="24" fill="none"><path d="m14 16 4-4m0 0-4-4m4 4H6" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
    </ul>

    {{$route.params.page}}
</template>
<script>
import store from "@/store";
export default {
    name:"Pagination",
    props: {
        pageParams: {
            type: Object,
            required: true,
        },
    },
    emits: ['setPage'],
    data() {
        return {
            currentPage: 1,
            pages: null,
        }
    },
    computed: {
        calcPages() {
            let pages = Math.ceil(this.pageParams.total / this.pageParams.limit)
            this.pages = pages;
            return pages
        },
    },

    methods: {
        pageTrigger(page) {
            this.currentPage = page
            if(page > this.calcPages ) {
                this.currentPage = this.calcPages
                this.$router.push({name: 'product', query: {page: this.calcPages}})
                
            } else if (page <= this.calcPages && page > 0) {
                this.$router.push({name: 'product', query: {page: page}})
            } else {
                this.currentPage = 1
                this.$router.push({name: 'product', query: {page: this.currentPage}})
            }
            store.dispatch('product/setPage', this.currentPage)
            this.$emit("setPage", this.currentPage)
        }
    },

    mounted() {
        this.$router.push({name: 'product', query: {page: this.currentPage}})
    }
}   
</script>
<style lang="scss" scoped>
    .pagination {
        display: inline-flex;
        align-items: center;
        gap: 10px;

        a {
            width: 40px;
            height: 40px;
            border-radius: 5px;
            font-size: 16px; 
            color: #141C1D;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 16px;

            &:not(.arrow-btn) {
                border: 1px solid #141C1D;
                background-color: #fff;

                &:hover, &.is-active {
                    color: #fff;
                    background-color: #088395;
                    border-color: #088395;
                }
            }
        }
    }
</style>