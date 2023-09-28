<template>
    <main>
        <section>
            <div class="o-container">
                <a href="javascript:;" @click="paymentComponent = 'ShippingAddress'">Shipping Address </a> 
                <a href="javascript:;" @click="paymentComponent = 'PaymentMethod'">Payment Method </a> 
                <a href="javascript:;" @click="paymentComponent = 'ReviewOrder'">Review Order</a>
                <h3><strong>{{headingSteps}}</strong></h3>
                <article>
                    <div>
                        <div class="steps-nav step1-active" 
                            :class="{'step1-active': paymentComponent === 'ShippingAddress', 'step2-active': paymentComponent === 'PaymentMethod', 'step3-active': paymentComponent === 'ReviewOrder'}">
                            <div class="step step1">
                                <div class="icon-wrapper">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3333 18.3337V15.0003C13.3333 13.1594 11.8409 11.667 10 11.667C8.15905 11.667 6.66667 13.1594 6.66667 15.0003V18.3337M17.5 8.45894V14.9727C17.5 16.8289 16.0076 18.3337 14.1667 18.3337H5.83333C3.99238 18.3337 2.5 16.8289 2.5 14.9727V8.45894C2.5 7.4498 2.9497 6.49407 3.72488 5.85576L7.89155 2.42478C9.11859 1.4144 10.8814 1.41439 12.1084 2.42478L16.2751 5.85576C17.0503 6.49407 17.5 7.4498 17.5 8.45894Z" stroke="#141C1D" stroke-width="1.5"/>
                                    </svg> 
                                </div>
                                <p>Address</p>
                            </div>
                            <div class="step step2">
                                <div class="icon-wrapper">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66669 5.83333C1.66669 3.99238 3.15907 2.5 5.00002 2.5H15C16.841 2.5 18.3334 3.99238 18.3334 5.83333V14.1667C18.3334 16.0076 16.841 17.5 15 17.5H5.00002C3.15907 17.5 1.66669 16.0076 1.66669 14.1667V5.83333Z" stroke="#141C1D" stroke-width="1.5" stroke-linejoin="round"/>
                                        <path d="M1.66669 5.83301H18.3334V9.16634H1.66669V5.83301Z" stroke="#141C1D" stroke-width="1.5" stroke-linejoin="round"/>
                                        <path d="M6.66667 14.167H5" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg> 
                                </div>
                                <p>Payment Method</p>
                            </div>
                            <div class="step step3">
                                <div class="icon-wrapper">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33331 5.66699C3.33331 3.45785 5.12417 1.66699 7.33331 1.66699H12.5098C13.5707 1.66699 14.5881 2.08842 15.3382 2.83857L17.1617 4.66209C17.9119 5.41223 18.3333 6.42965 18.3333 7.49051V14.3337C18.3333 16.5428 16.5425 18.3337 14.3333 18.3337H7.33331C5.12417 18.3337 3.33331 16.5428 3.33331 14.3337V5.66699Z" stroke="#141C1D" stroke-width="1.5" stroke-linejoin="round"/>
                                        <path d="M7.5 5.83301L14.1667 5.83301" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M7.5 10H14.1667" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M7.5 14.167H10.8333" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg> 
                                </div>
                                <p>Review</p>
                            </div>
                        </div>
                        <transition name="fade" mode="out-in">
                            <component :is="paymentComponent"></component>
                        </transition>
                    </div>
                    <Subtotal/>
                </article>
            </div>
        </section>
        <transition name="fade">
            <teleport to="#modals">
                <Modal class="modal u-text-center" @close="showModal = false;" v-if="showModal">
                    <template #header>
                    </template>
                    <template #body>
                        <div class="icon-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg> 
                        </div>
                        <h5 class="mb-"><strong>Your order is confirmed</strong></h5>
                        <p>Thanks for shopping! <br>
                        your order hasn’t shipped yet, <br>
                        but we will send you and email when it done.</p>
                        <div class="button-wrapper o-flex o-flex--column">
                            <button class="button button--primary">View Order</button>
                            <button @click="showModal = false;" class="button button--primary-border">Back to Home</button>
                        </div>
                    </template>
                </Modal>
            </teleport>
        </transition>
    </main>
</template>
<script>
import ShippingAddress from '../../components/payment-process/ShippingAddress.vue'
import PaymentMethod from '../../components/payment-process/PaymentMethod.vue'
import ReviewOrder from '../../components/payment-process/ReviewOrder.vue'
import Subtotal from '../../components/Subtotal.vue'
import Modal from '../../components/Modal.vue'

export default {
    name:"PaymentSteps",
    components: {
        ShippingAddress, PaymentMethod, ReviewOrder, Subtotal, Modal
    },
    data() {
        return {
            paymentComponent: "ReviewOrder",
            showModal:false,
        }
    },
    computed: {
        headingSteps() {
            const componentToHeading = {
                ShippingAddress: "Shipping Address",
                PaymentMethod: "Payment Method",
                ReviewOrder: "Review Your Order"
            };
            return componentToHeading[this.paymentComponent] || "";
        }
    }
}
</script>
<style lang="scss" scoped>
    .steps-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 60px;

        .icon-wrapper {
            display: inline-flex;
            width: 40px;
            height: 40px;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            background-color: #f4f4f5;
            border-radius: 8px;
            z-index: 3;
            position: relative;
            transition: all .3s ease;
            margin-bottom: 10px;
        }

        &:before {
            position: absolute;
            width: 100%;
            content:"";
            height: 1px;
            border-bottom:1px dashed rgba(163, 170, 171, 0.20);
            left: 0;
            top: 20px;
            z-index: 2;
        }

        &:after {
            position: absolute;
            width: 0;
            content:"";
            height: 1px;
            background-color: #088395;
            left: 0;
            top: 20px;
            transition: all .3s ease;
        }

        .step {
            position: relative;

            p {
                position: absolute;
                left: 50%;
                transform: translate(-50%,0);
                top: 100%;
                white-space: nowrap;
                margin-bottom: 0;
            }
        }

        &.step1-active {
            .step1 {
                .icon-wrapper {

                    background-color: #088395;

                    path {
                        stroke: #fff;
                    }
                }
            }
        }

        &.step2-active {
            .step1, .step2 {
                .icon-wrapper {

                    background-color: #088395;

                    path {
                        stroke: #fff;
                    }
                }
            }

            &:after {
                width: 50%;
            }
        }
        &.step3-active {
            .step1, .step2, .step3 {
                .icon-wrapper {

                    background-color: #088395;

                    path {
                        stroke: #fff;
                    }
                }
            }

            &:after {
                width: 100%;
            }
        }
    }

    article {
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 80px;
        align-items: start;
    }

    .modal {

        .icon-wrapper {
            width: 64px;
            height: 64px; 
            border-radius: 50%;
            background-color: #088395;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-top: 50px;
            margin-bottom: 40px;
    
            &:before {
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 86px;
                height: 86px; 
                border-radius: 50%;
                background-color: rgba(8, 131, 149, 0.10);
            }
            &:after {
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 108px;
                height: 108px;  
                border-radius: 50%;
                background-color: rgba(8, 131, 149, 0.05);
            }
        }

        p {
            margin-bottom: 30px;
        }

        .button-wrapper {
            gap: 10px;
        }
    }

</style>