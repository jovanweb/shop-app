<template>
    <div class="payment-method">
        <h6><strong>Select a payment method</strong></h6>

        <ul>
            <li>
                <Checkbox class="mb" :nameId="'card'" :type="'radio'" :style="'radio'" :radioName="'payment-method'" :text="'Debit/Credit Card'"/>
                <div class="Add-card">
                    <div class="input-box">
                        <p>Card Number</p>
                        <input type="text" class="input input--primary">
                    </div>
                    <div class="input-box">
                        <p>Card Name</p>
                        <input type="text" class="input input--primary">
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <div class="input-box">
                                <p>Expiry Date</p>
                                <input type="text" class="input input--primary">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="input-box">
                                <p>CVV</p>
                                <input type="text" class="input input--primary">
                            </div>
                        </div>
                    </div>
                    <button class="button button--primary button--width-big">Add Card</button>
                </div>
            </li>
            <li>
                <Checkbox :nameId="'google-pay'" :type="'radio'" :style="'radio'" :radioName="'payment-method'" :text="'Google Pay'"/>
            </li>
            <li>
                <Checkbox :nameId="'paypal'" :type="'radio'" :style="'radio'" :radioName="'payment-method'" :text="'Paypal'"/>
            </li>
            <li>
                <Checkbox :nameId="'cod'" :type="'radio'" :style="'radio'" :radioName="'payment-method'" :text="'Cash on Delivery'"/>
            </li>
        </ul>
        <button class="button button--primary button--width-big">Continue</button>
    </div>
</template>
<script>
import Checkbox from "../../components/Checkbox.vue"
export default {
    name:"PaymentMethod",
    components: {
        Checkbox
    }
}
</script>
<style lang="scss" scoped>
    
</style>