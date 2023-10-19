<template>
    <main>
        <section class="single-product">
            <div class="o-container">
                <Breadcrumb/>
                <article>
                    <div class="product-wrapper" v-if="singleProduct">
                        <div class="big-image-wrapper" :style="'background-image: url(' + singleProduct.thumbnail + ');'"></div>
                        <div class="small-image-wrapper">
                            <div class="img-item" v-for="(image, index) in singleProduct.images" :key="index">
                                <img :src="image" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="product-info" v-if="singleProduct">
                        <h6 class="mb-">{{singleProduct.title}}</h6>
                        <h4 class="mb-"><strong>{{singleProduct.brand}}</strong></h4>
                        <div class="o-flex o-flex--center mb" v-if="singleProduct.rating">
                            <RatingStars class="mr-" :rating="3.5"/>
                            <!-- <p class="mb0">{{singleProduct.rating}} ({{params?.total}} Reviews)</p> -->
                        </div>
                        <p class="h6">${{singleProduct.price}}</p>
                        <p>{{singleProduct.description}}</p>

                        <!-- <p class="text-medium mb-"><strong>Color</strong></p>

                        <ul class="colors-options o-flex o-flex--center">
                            <li><Checkbox :type="'radio'" :color="'gray'" :nameId="'gray'"/></li>
                            <li><Checkbox :type="'radio'" :color="'orange'" :nameId="'orange'"/></li>
                            <li><Checkbox :type="'radio'" :color="'black'" :nameId="'black'"/></li>
                            <li><Checkbox :type="'radio'" :color="'green'" :nameId="'green'"/></li>
                        </ul> -->

                        <p class="text-medium mb-"><strong>Stock: </strong>{{singleProduct.stock}}</p>

                        <div class="o-flex o-flex--center mb+">
                            <InputNumber class="mr" :max="singleProduct.stock"/>
                            <button class="button button--primary o-flex--1 o-flex--justify-center mr" @click="triggerCartAside">Add to Cart</button>
                            <FavoriteButton :active="favoriteProduct" @like="like"/>
                        </div>
                        <p class="text-medium mb-"><strong>Share</strong></p>
                        <ul class="share-list">
                            <li>
                                <a href="javascript:;">
                                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0H9C6.23858 0 4 2.23858 4 5V7H0V11H4V18H8V11H12V7H8V5C8 4.44772 8.44771 4 9 4H12V0Z" fill="#141C1D"/>
                                    </svg> 
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2861 0C10.1822 0 8.47671 1.79086 8.47671 4C8.47671 4.33382 8.51565 4.65809 8.58903 4.96808C6.56611 4.96808 3.51914 4.55908 0.974438 2.00961C0.636055 1.67059 0.0120846 1.89726 0.035556 2.37567C0.412681 10.0627 3.70477 12.3049 5.4001 12.4444C4.30535 13.5257 2.7151 14.3791 1.11489 14.7622C0.692564 14.8633 0.588236 15.3256 1.0012 15.4599C2.14623 15.8323 3.78516 15.9758 4.66735 16C10.9082 16 15.9806 10.7471 16.0935 4.22229C16.9129 3.68945 17.4377 2.5325 17.7326 1.71291C17.8044 1.5133 17.4773 1.28073 17.2815 1.36226C16.6694 1.61708 15.8923 1.67749 15.2304 1.46181C14.5318 0.569266 13.4722 0 12.2861 0Z" fill="#141C1D"/>
                                    </svg> 
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5C20 2.23858 17.7614 0 15 0H5ZM16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="#141C1D"/>
                                    </svg> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
                <Tabs class="mb++">
                    <template v-slot:header>
                        <a href="javascript:;" class="tab-link" :class="{'active':tabComponent === 'Description'}" @click="tabComponent = 'Description'">Description</a>
                        <!-- <a href="javascript:;" class="tab-link" :class="{'active':tabComponent === 'AdditionalInformation'}" @click="tabComponent = 'AdditionalInformation'">Additional Information</a> -->
                        <a href="javascript:;" class="tab-link" :class="{'active':tabComponent === 'Reviews'}" @click="tabComponent = 'Reviews'">Reviews</a>
                    </template>
                    <template v-slot:body>
                        <component v-if="singleProduct" :data="singleProduct" :is="tabComponent"></component>
                    </template>
                </Tabs>
                <div v-if="favoriteProd.length">
                    <h3><strong>Related Products</strong></h3>
                    <div class="grid">
                        <SingleProductType2 v-for="(product, index) in favoriteProd" :key="index" :data="product"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import Breadcrumb from "../components/Breadcrumb.vue"
import Checkbox from "../components/Checkbox.vue"
import InputNumber from "../components/InputNumber.vue"
import RatingStars from "../components/RatingStars.vue"
import FavoriteButton from "../components/FavoriteButton.vue"
import Tabs from "../components/tabs/Tabs.vue"
import Description from "../components/tabs/Description.vue"
import Reviews from "../components/tabs/Reviews.vue"
import SingleProductType2 from "../components/SingleProductType2.vue"
import { singleProduct } from "@/api/products"
import store from "@/store";
import { mapGetters } from "vuex";


export default {
    name: "SingleProduct",
    components: {Breadcrumb, Checkbox, InputNumber, Tabs, Description, Reviews, SingleProductType2, RatingStars, FavoriteButton},
    data() {
        return {
            tabComponent: "Description",
            singleProduct: null,
        }
    },
    methods: {

        async getProduct() {
            try {
                const {data} = await singleProduct(this.productId)
                this.singleProduct = data;
            } catch (e) {
                console.log(e)
                toastr.error(e.response.data.message);
            }
        }, 

        like(active) {
            if(active) {
                store.dispatch('product/addFavorite', this.singleProduct)
            }else {
                store.dispatch('product/removeFavorite', this.singleProduct)
            }
        },

        triggerCartAside() {
            store.dispatch('cart/setAside', true)
        }
    },

    computed: {

        ...mapGetters({
            favoriteProd: 'product/favoriteProduct',
        }),
        favoriteProduct() {
            return this.favoriteProd.some(e => e.id === this.singleProduct.id)
        },
        productId() {
            return this.$route.params.id;
        },
    },
    mounted() {
        this.getProduct()
    }
}
</script>
<style lang="scss" scoped>

    article {
        padding-top: 50px;
        margin-bottom: 40px;
        display: flex;
        gap: 30px;

        >div {
            flex: 50%;
        }
    }

    .product-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .big-image-wrapper {
        width: 100%;
        aspect-ratio: 1 / 1;
        border: 1px solid rgba(20, 28, 29, 0.10);
        display: flex;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
        
        img {
            width: 60%;
        }
    }

    .small-image-wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    .img-item {
        width: 100%;
        aspect-ratio: 1 / 1;
        border: 1px solid rgba(20, 28, 29, 0.10);
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 60%;
        }
    }

    .share-list {
        display: flex;
        gap: 10px;

        a {
            border: 1px solid rgba(163, 170, 171, 0.20); 
            display: flex;
            width: 56px;
            height: 56px;
            justify-content: center;
            align-items: center;
            border-radius: 10px; 

            &:hover {
                background-color: rgba(163, 170, 171, 0.20); 
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
    }

    .colors-options {
        gap: 10px;
    }
</style>