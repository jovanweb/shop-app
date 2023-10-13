<template>
  <main>
    <section class="products">
      <div class="o-container">
        <Breadcrumb/>
        <!-- <a href="javascript:;" @click="nesto()">Next</a> -->

        {{$route.params.page}}
        <div class="u-text-right">
          <Pagination v-if="params" :pageParams="params" @setPage="getPage"/>
        </div>

        <article>
          <aside class="aside">
            <AsideAccordion>
              <template v-slot:link>
                <span><strong>Product Categories</strong></span>  
              </template>
              <template v-slot:list>
                  <ul class="list-options">
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Living Room'" :nameId="'living-room'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Bedroom'" :nameId="'bedroom'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Kitchen'" :nameId="'kitchen'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Decor'" :nameId="'decor'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Lighting'" :nameId="'lighting'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Lamps'" :nameId="'lamps'"/>
                      (5)
                    </li>
                  </ul>
              </template>
            </AsideAccordion>
            <AsideAccordion>
              <template v-slot:link>
                <span><strong>Filter by Brands</strong></span>  
              </template>
              <template v-slot:list>
                  <ul class="list-options">
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Rocker'" :nameId="'rocker'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Ashley'" :nameId="'ashley'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Just'" :nameId="'just'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Cube'" :nameId="'cube'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Arfical Melts'" :nameId="'arfical-melts'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Blind Store'" :nameId="'blind-store'"/>
                      (5)
                    </li>
                  </ul>
              </template>
            </AsideAccordion>
            <AsideAccordion>
              <template v-slot:link>
                <span><strong>Filter by Color</strong></span>  
              </template>
              <template v-slot:list>
                  <ul class="list-options">
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Blue'" :color="'blue'" :nameId="'blue'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Green'" :color="'green'" :nameId="'green'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Red'" :color="'red'" :nameId="'red'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Black'" :color="'black'" :nameId="'black'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Orange'" :color="'orange'" :nameId="'orange'"/>
                      (5)
                    </li>
                    <li class="o-flex o-flex--center o-flex--justify">
                      <Checkbox :text="'Yellow'" :color="'yellow'" :nameId="'yellow'"/>
                      (5)
                    </li>
                  </ul>
              </template>
            </AsideAccordion>
          </aside>
          <div class="product-list">
            <SingleProductType2 v-for="product in products" :key="product.id" :data="product"/>
          </div>
        </article>

        
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
  import {allProducts, paginationProduct} from "@/api/products"
  import toastr from "toastr";
  import {  mapGetters } from "vuex";

  export default {
    name:"ProductList",
    components: {AsideAccordion, Checkbox, Breadcrumb, SingleProductType2, Pagination},
    data() {
      return {
        products: null,
        params: null,
        currentPageNumb: null,
      }
    },

    computed: {
      ...mapGetters({
            pageNumber: 'product/currentPage',
      }),

    },

    methods: {
      async getProducts() {
        
        try {
            const { data } = await allProducts()
            const { products, ...rest} = data
            this.params = rest;
            this.products = data.products;
        } catch (e) {
            toastr.error(e.response.data.message);
        }
      },

      async getPage(page) {
        this.currentPageNumb = page;
        let skip = (page - 1) * this.params.limit
        try {
            const { data } = await paginationProduct(skip)
            this.products = data.products
        } catch (e) {
            toastr.error("No data");
        }
      },
    },
    mounted() {
      this.getProducts();
      // this.getPage();
      // const url = new URL('/product?page=1', window.location.href);
      // const pageNumber = url.searchParams.get('page');
      // console.log('Page Number:', pageNumber);
      

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
