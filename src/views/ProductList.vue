<template>
  <main>
    <section class="products">
      <div class="o-container">
        <Breadcrumb/>
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
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
            <SingleProductType2/>
          </div>
        </article>
        <div class="u-text-right">
          <Pagination/>
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

  export default {
      name:"ProductList",
      components: {AsideAccordion, Checkbox, Breadcrumb, SingleProductType2, Pagination}
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
