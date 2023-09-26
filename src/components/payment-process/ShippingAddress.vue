<template>
    <div class="shipping-address">
        <h6 class="mb0"><strong>Select a delivery address</strong></h6>
        <p>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new delivery address.</p>

        <div class="grid">
            <div class="grid-item">
                <div class="o-flex o-flex--center o-flex--justify grid-item__heading">
                    <h6 class="mb0"><strong>Kristin Watson</strong></h6>
                    <Checkbox :nameId="'delivery-address-1'" :checked="true" :type="'radio'" :radioName="'select-address'"/>
                </div>
                <p class="mb--">4140 Parker Rd. Allentown, New Mexico 31134</p>

                <div class="button-wrapper">
                    <button class="button button--secondary button--sm w-100">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#edit)">
                                <path d="M16.5 9V13.5C16.5 15.1569 15.1569 16.5 13.5 16.5H4.5C2.84315 16.5 1.5 15.1569 1.5 13.5V4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H9M11.7648 3.01706C11.7648 3.01706 11.7648 4.08978 12.8375 5.16251C13.9102 6.23523 14.9829 6.23523 14.9829 6.23523M6.866 11.9922L9.11872 11.6704C9.44367 11.6239 9.7448 11.4734 9.9769 11.2413L16.0557 5.1625C16.6481 4.57006 16.6481 3.60951 16.0557 3.01706L14.9829 1.94434C14.3905 1.35189 13.4299 1.35189 12.8375 1.94434L6.75873 8.0231C6.52663 8.2552 6.37606 8.55633 6.32964 8.88128L6.00783 11.134C5.93631 11.6346 6.3654 12.0637 6.866 11.9922Z" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round"/>
                            </g>
                            <defs>
                                <clipPath id="edit">
                                <rect width="18" height="18" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg> 
                        <span>Edit</span>
                    </button>
                    <button class="button button--danger button--sm w-100">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.25 6V13.5C4.25 15.1569 5.59315 16.5 7.25 16.5H11.75C13.4069 16.5 14.75 15.1569 14.75 13.5V6M11 8.25V12.75M8 8.25L8 12.75M12.5 3.75L11.4453 2.16795C11.1671 1.75065 10.6988 1.5 10.1972 1.5H8.80278C8.30125 1.5 7.8329 1.75065 7.5547 2.16795L6.5 3.75M12.5 3.75H6.5M12.5 3.75H16.25M6.5 3.75H2.75" stroke="#FF7262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                        <span>Delete</span>
                    </button>
                </div>
            </div>
            <div class="grid-item">
                <div class="o-flex o-flex--center o-flex--justify grid-item__heading">
                    <h6 class="mb0"><strong>Annette Black</strong></h6>
                    <Checkbox :nameId="'delivery-address-2'" :type="'radio'" :radioName="'select-address'"/>
                </div>
                <p class="mb--">4140 Parker Rd. Allentown, New Mexico 31134</p>

                <div class="button-wrapper">
                    <button class="button button--secondary button--sm w-100">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#edit)">
                                <path d="M16.5 9V13.5C16.5 15.1569 15.1569 16.5 13.5 16.5H4.5C2.84315 16.5 1.5 15.1569 1.5 13.5V4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H9M11.7648 3.01706C11.7648 3.01706 11.7648 4.08978 12.8375 5.16251C13.9102 6.23523 14.9829 6.23523 14.9829 6.23523M6.866 11.9922L9.11872 11.6704C9.44367 11.6239 9.7448 11.4734 9.9769 11.2413L16.0557 5.1625C16.6481 4.57006 16.6481 3.60951 16.0557 3.01706L14.9829 1.94434C14.3905 1.35189 13.4299 1.35189 12.8375 1.94434L6.75873 8.0231C6.52663 8.2552 6.37606 8.55633 6.32964 8.88128L6.00783 11.134C5.93631 11.6346 6.3654 12.0637 6.866 11.9922Z" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round"/>
                            </g>
                            <defs>
                                <clipPath id="edit">
                                <rect width="18" height="18" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg> 
                        <span>Edit</span>
                    </button>
                    <button class="button button--danger button--sm w-100">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.25 6V13.5C4.25 15.1569 5.59315 16.5 7.25 16.5H11.75C13.4069 16.5 14.75 15.1569 14.75 13.5V6M11 8.25V12.75M8 8.25L8 12.75M12.5 3.75L11.4453 2.16795C11.1671 1.75065 10.6988 1.5 10.1972 1.5H8.80278C8.30125 1.5 7.8329 1.75065 7.5547 2.16795L6.5 3.75M12.5 3.75H6.5M12.5 3.75H16.25M6.5 3.75H2.75" stroke="#FF7262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>

        <button class="button button--primary button--width-big">Deliver Here</button>

        <div class="u-border-bottom mt+ mb+"></div>

        <h6 class="mb+"><strong>Add a new address</strong></h6>

        <div class="input-box">
            <p>Name</p>
            <input type="text" class="input input--primary" placeholder="Enter Name">
        </div>
        <div class="input-box">
            <p>Mobile Number</p>
            <input type="text" class="input input--primary" placeholder="Enter Mobile Number">
        </div>
        <div class="input-box">
            <p>Flat, House no., Building, Company, Apartment</p>
            <input type="text" class="input input--primary">
        </div>
        <div class="input-box">
            <p>Area, Colony, Street, Sector, Village</p>
            <input type="text" class="input input--primary">
        </div>
        <div class="input-box">
            <p>City</p>
            <input type="text" class="input input--primary" placeholder="">
        </div>
        <div class="input-box">
            <p>Pin Code</p>
            <input type="text" class="input input--primary" placeholder="">
        </div>
        <div class="input-box">
            <p>State</p>
            <input type="text" class="input input--primary" placeholder="">
        </div>
        <Checkbox class="mb+" :nameId="'defaultAddress'" :checked="true" :text="'Use as my default address'"/>
        <button class="button button--primary button--width-big">Add New Address</button>
    </div>
</template>
<script>
import Checkbox from "../Checkbox.vue"
export default {
    name:"ShippingAddress",
    components: {Checkbox}
}
</script>
<style lang="scss" scoped>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-bottom: 30px;
    }

    .grid-item {
        padding: 16px;
        background-color: rgba(163, 170, 171, 0.05);
        transition: all .3s ease-out;
        border-radius: 10px;

        &:hover {
            background-color: rgba(163, 170, 171, 0.1);
        }
    }

    .grid-item__heading {
        margin-bottom: 15px;
    }

    .button-wrapper {
        display: flex;
        gap: 20px;
    }
</style>