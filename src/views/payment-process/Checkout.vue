<template>
    <main>
        <section class="checkout">
            <div class="o-container">
                <h3><strong>Checkout</strong></h3>

                <div class="grid">
                    <div class="checkout-content">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="flag">
                                                <div class="flag__img">
                                                    <img src="../../assets/images/chair.png" alt="">
                                                </div>
                                                <div class="flag__body">
                                                    <p><strong>Modern Sofa Chair</strong></p>
                                                    <p>Color: Grey</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$300.00</td>
                                        <td>
                                            <InputNumber/>
                                        </td>
                                        <td>$300.00</td>
                                        <td>
                                            <a href="#">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M11.6667 9.16699V14.167M8.33333 9.16699L8.33333 14.167M13.3333 4.16699L12.1614 2.40916C11.8523 1.94549 11.3319 1.66699 10.7747 1.66699H9.22531C8.66805 1.66699 8.14767 1.94549 7.83856 2.40916L6.66667 4.16699M13.3333 4.16699H6.66667M13.3333 4.16699H17.5M6.66667 4.16699H2.5" stroke="#FF7262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg> 
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="flag">
                                                <div class="flag__img">
                                                    <img src="../../assets/images/chair.png" alt="">
                                                </div>
                                                <div class="flag__body">
                                                    <p><strong>Modern Sofa Chair</strong></p>
                                                    <p>Color: Grey</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$300.00</td>
                                        <td>
                                            <InputNumber/>
                                        </td>
                                        <td>$300.00</td>
                                        <td>
                                            <a href="#">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M11.6667 9.16699V14.167M8.33333 9.16699L8.33333 14.167M13.3333 4.16699L12.1614 2.40916C11.8523 1.94549 11.3319 1.66699 10.7747 1.66699H9.22531C8.66805 1.66699 8.14767 1.94549 7.83856 2.40916L6.66667 4.16699M13.3333 4.16699H6.66667M13.3333 4.16699H17.5M6.66667 4.16699H2.5" stroke="#FF7262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg> 
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Subtotal/>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
    import Subtotal from "../../components/Subtotal.vue"
    import InputNumber from "../../components/InputNumber.vue"
    export default {
        name:"Checkout",
        components: {
            Subtotal, InputNumber,
        }
    }
</script>
<style lang="scss" scoped>
    .checkout {
        h3 {
            margin-bottom: 50px;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 366px;
        gap: 80px;
        align-items: start;
    }

    .table {

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