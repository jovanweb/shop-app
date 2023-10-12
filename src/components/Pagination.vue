<template>
    <ul class="pagination">
        <li><a @click="prevPages()" href="javascript:;" class="arrow-btn"><svg width="24" height="24" fill="none"><path d="m10 8-4 4m0 0 4 4m-4-4h12" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
        <li v-for="(page, index) in calcPages" :key="index"><a @click="pageTrigger()" href="javascript:;">{{page}}</a></li>
        <li><a @click="nextPages()" href="javascript:;" class="arrow-btn"><svg width="24" height="24" fill="none"><path d="m14 16 4-4m0 0-4-4m4 4H6" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
    </ul>
</template>
<script>
export default {
    name:"Pagination",
    props: {
        params: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            pages: null,
        }
    },
    computed: {
        calcPages() {
            let pages = Math.ceil(this.params.total / this.params.limit)
            this.pages = pages;
            console.log(pages)
            return pages
        },
        prevPages() {
            // return Math.cell()
        },
        nextPages() {

        }
    },

    methods: {
        pageTrigger() {
            // this.$emit('pageTrigger', 2)
        }
    },

    mounted() {
        
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