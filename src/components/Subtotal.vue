<template>
    <aside class="subtotal">
        <p class="o-flex o-flex--center o-flex--justify pb- heading-subtotal"><strong>Subtotal</strong> <strong>$440.00</strong></p>
        <div class="o-flex o-flex--end mb">
            <div class="input-box mb0 o-flex--1">
                <p>Enter Discount Code</p>
                <input type="text" class="input--primary  u-border-right-top-none u-border-right-bottom-none w-100">
            </div>
            <button class="button button--primary u-border-left-top-none u-border-left-bottom-none">Apply</button>
        </div>

        <p class="o-flex o-flex--center o-flex--justify pb- u-border-bottom mb-"><span>Delivery Charge</span><span>$5.00</span></p>
        <p class="o-flex o-flex--center o-flex--justify mb0"><strong>Grand Total</strong><strong>$445.00</strong></p>

        <router-link to="/payment_steps" class="button button--primary w-100 o-flex--justify-center mt">Proceed to Checkout</router-link>
    </aside>
</template>
<script>
export default {
    name:"Subtotal",
}
</script>
<style lang="scss" scoped>
    .subtotal {
        padding: 20px;
        background-color: #fff;
        box-shadow: 0px 55px 109.99999px 0px rgba(0, 0, 0, 0.04), 0px 55px 109.99999px 0px rgba(0, 0, 0, 0.05);
    }

    .heading-subtotal {
        border-bottom: 1px solid rgba(163, 170, 171, 0.20);
    }
</style>