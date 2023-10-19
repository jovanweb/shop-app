<template>
  <ul class="pagination">
    <li>
      <a
        @click="pageTrigger(currentPage - 1)"
        :class="{ disabled: currentPage === 1 }"
        href="javascript:;"
        class="arrow-btn"
      >
        <svg width="24" height="24" fill="none">
          <path
            d="m10 8-4 4m0 0 4 4m-4-4h12"
            stroke="#141C1D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </li>
    <li v-for="(page, index) in visiblePages" :key="index">
      <a
        @click="pageTrigger(page)"
        :class="{ 'is-active': currentPage === page }"
        href="javascript:;"
      >{{ page }}</a>
    </li>
    <li>
      <a
        @click="pageTrigger(currentPage + 1)"
        :class="{ disabled: currentPage === calcPages }"
        href="javascript:;"
        class="arrow-btn"
      >
        <svg width="24" height="24" fill="none">
          <path
            d="m14 16 4-4m0 0-4-4m4 4H6"
            stroke="#141C1D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageParams: {
      type: Object,
      required: true,
    },
    pageNumb: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
  },
  emits: ['setPage'],
  data() {
    return {
      currentPage: null,
    };
  },
  computed: {
    calcPages() {
      return Math.ceil(this.pageParams.total / this.limit);
    },
    visiblePages() {
      const pageCount = Math.min(this.calcPages, 4); // Number of pages to show
      const firstPage = Math.max(1, this.currentPage - 1);
      return Array.from({ length: pageCount }, (_, i) => firstPage + i);
    },
  },
  methods: {
    pageTrigger(page) {
      if (page > this.calcPages) {
        this.currentPage = this.calcPages;
      } else if (page <= this.calcPages && page > 0) {
        this.currentPage = page;
      } else {
        this.currentPage = 1;
      }
      this.$emit('setPage', this.currentPage);
    },
  },
  mounted() {
    this.currentPage = this.pageNumb;
  },
};
</script>
<style lang="scss" scoped>
    .pagination {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 0;

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

            &.arrow-btn {
                &.disabled {
                    pointer-events: none;
                    opacity: .5;
                }
            }
        }
    }
</style>