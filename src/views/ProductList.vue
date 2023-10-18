<template>
  <main>
    <section class="products">
      <div class="o-container">
        <div class="o-flex o-flex--start o-flex--justify"> 
          <Breadcrumb/>
          <div class="input-select">
            <select name="" v-model="filterItems" class="input input--primary input--select" @change="getAllProducts(currentPageNumb)">
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
          </div>
        </div>
        <article>
          <aside class="aside">
            <AsideAccordion>
              <template v-slot:link>
                <span><strong>Product Categories</strong></span>  
              </template>
              <template v-slot:list>
                  <ul class="list-options">
                    <li>
                      <a href="javascript:;" @click="resetCategories">Reset Categories</a>
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify" v-for="(categoryItem, index) in productsCategories" :key="index">
                      <Checkbox :radioName="'categories'" :type="'radio'" :text="categoryItem" :nameId="categoryItem" @change="filterProducts(categoryItem)"/>
                      <!-- (5) -->
                    </li>
                  </ul>
              </template>
            </AsideAccordion>
          </aside>
          <div class="product-list">
            <SingleProductType2 v-for="product in products" :key="product.id" :data="product"/>
          </div>
        </article>
        <div class="u-text-right">
          <Pagination v-if="params" :pageParams="params" :limit="filterItems" :pageNumb="currentPageNumb" @setPage="getAllProducts"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import AsideAccordion from "../components/AsideAccordion.vue"
  import Checkbox from "../components/Checkbox.vue"
  import Breadcrumb from "../components/Breadcrumb.vue"
  import SingleProductType2 from "../components/SingleProductType2.vue"
  import Pagination from "../components/Pagination.vue"
  import {allProducts, productCategories, productFilter} from "@/api/products"
  import toastr from "toastr";
  import {  mapGetters } from "vuex";
  import store from "@/store";

  export default {
    name:"ProductList",
    components: {AsideAccordion, Checkbox, Breadcrumb, SingleProductType2, Pagination},
    data() {
      return {
        products: null,
        params: null,
        currentPageNumb: 1,
        filterItems: '30',
        productsCategories: '30',
        uncheckRadio: false
      }
    },

    computed: {
      ...mapGetters({
            pageNumber: 'product/currentPage',
      }),

    },

    methods: {

      resetCategories() {
        this.uncheckRadio= false;
        this.getAllProducts(1)
      },

      async getAllProducts(page = 1) {
        this.currentPageNumb = page;
        store.dispatch('product/setPage', this.currentPageNumb)

          try {
              const {data: {products, ...rest}} = await allProducts({skip: page * (this.filterItems || 0) - (this.filterItems || 0), limit: this.filterItems})
              this.params = rest;
              this.products = products;
              this.$router.push({name: 'product', query: {page: this.currentPageNumb}})
          } catch (e) {
            console.log(e)
              toastr.error(e.response.data.message);
          }
      },
      async getCategories() {
        try {
          const {data} = await productCategories();
          this.productsCategories = data;
        }catch (e) {
          console.log(e)
          toastr.error(e.response.data.message);
        }
      },

      async filterProducts(categoryItem) {
        console.log(categoryItem)
        try {
          const {data: {products, ...rest}} = await productFilter(categoryItem);
          this.params = rest;
          this.products = products;

        }catch (e) {
          console.log(e)
          toastr.error(e.response.data.message);
        }
      }
    },
    
    mounted() {
     
      const pageNumber = parseInt(new URLSearchParams(window.location.search).get('page'));
      this.getAllProducts(pageNumber || 1);
      this.getCategories()

    }
  }
</script>

<style lang="scss" scoped>
  article {
    display: flex;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .aside {
    flex: 0 0 220px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .list-options {
    width: 100%;
    margin-bottom: 0;

    li {
      margin: 11px 0;
    }
  }

  .product-list {
    display: grid;
    flex: 1;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
</style>
