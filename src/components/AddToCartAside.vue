<template>
    <div class="cart-aside">
        <div class="overlay" @click="hideAsideCart"></div>
        <aside class="aside">
            <div class="aside-header">
                <p class="mb0">You have <strong>2 items</strong> in your cart</p>
            </div>
            <div class="aside-body">
                <ul>
                    <li>
                        <div class="flag">
                            <div class="flag__img">
                                <img src="../assets/images/chair.png" alt="">
                            </div>
                            <div class="flag__body">
                                <p>Modern Sofa Chair</p>
                                <p><strong>$300</strong></p>
                                <p class="o-flex o-flex--center o-flex--justify">QTY: 1 
                                    <a href="#">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M11.6667 9.16699V14.167M8.33333 9.16699L8.33333 14.167M13.3333 4.16699L12.1614 2.40916C11.8523 1.94549 11.3319 1.66699 10.7747 1.66699H9.22531C8.66805 1.66699 8.14767 1.94549 7.83856 2.40916L6.66667 4.16699M13.3333 4.16699H6.66667M13.3333 4.16699H17.5M6.66667 4.16699H2.5" stroke="#FF7262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> 
                                    </a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flag">
                            <div class="flag__img">
                                <img src="../assets/images/chair.png" alt="">
                            </div>
                            <div class="flag__body">
                                <p>Modern Sofa Chair</p>
                                <p><strong>$300</strong></p>
                                <p class="o-flex o-flex--center o-flex--justify">QTY: 1 
                                    <a href="#">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M11.6667 9.16699V14.167M8.33333 9.16699L8.33333 14.167M13.3333 4.16699L12.1614 2.40916C11.8523 1.94549 11.3319 1.66699 10.7747 1.66699H9.22531C8.66805 1.66699 8.14767 1.94549 7.83856 2.40916L6.66667 4.16699M13.3333 4.16699H6.66667M13.3333 4.16699H17.5M6.66667 4.16699H2.5" stroke="#FF7262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> 
                                    </a>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="aside-footer">
                <p class="o-flex o-flex--center o-flex--justify"><strong>Subtotal</strong><strong>$440.00</strong></p>
                <a href="javascript:;" class="button button--secondary o-flex--justify-center w-100 mb-">View Cart</a>
                <router-link to="/checkout" class="button button--primary o-flex--justify-center w-100" @click="hideAsideCart">Checkout</router-link>
            </div>
        </aside>
    </div>
</template>
<script>
export default {
    name: "AddToCartAside",
    emits: ['hideAsideCart'],
	methods: {

		hideAsideCart() {
			this.$emit('hideAsideCart', false)
		}
	}
}
</script>
<style lang="scss" scoped>
    .cart-aside {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
    }

    .overlay {
        background-color: rgba(20, 28, 29, 0.10);
        width: 100%;
        height: 100%;
    }

    .aside {
        padding: 20px;
        background-color: #fff;
        width: 352px;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        z-index: 5;
        display: flex;
        flex-direction: column;
    }

    .aside-header,
    .aside-footer {
        flex: 0 0 auto;
    }

    .aside-body {
        flex:1;
        overflow: auto;

        li {
            padding: 20px 0;
            border-bottom: 1px solid rgba(163, 170, 171, 0.20);

        }
    }

    .flag {
        display: flex;
        gap: 10px;
        align-items: center;

        p {
            color: #141C1D;
            font-size: 14px;
            margin-bottom: 0;
            line-height: 22px;
        }

        .flag__img {
            width: 70px;
            flex: 0 0 70px;
            aspect-ratio: 1 / 1;
            border-radius: 5px; 
            border: 1px solid rgba(163, 170, 171, 0.20);
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 60%;
            }
        }

        .flag__body {
            flex: 1;
        }
    }
</style>