<template>
    <div class="review-order">

        <h6><strong>Estimated delivery:  23 July 2023</strong></h6>
        <ul class="mb+">
            <li>
                <div class="flag">
                    <div class="flag__img">
                        <img src="../../assets/images/chair.png" alt="">
                    </div>
                    <div class="flag__body">
                        <p>Modern Sofa Chair</p>
                        <p><strong>$300</strong></p>
                        <p class="o-flex o-flex--center o-flex--justify">QTY: 1</p>
                    </div>
                </div>
            </li> 
            <li>
                <div class="flag">
                    <div class="flag__img">
                        <img src="../../assets/images/chair.png" alt="">
                    </div>
                    <div class="flag__body">
                        <p>Modern Sofa Chair</p>
                        <p><strong>$300</strong></p>
                        <p class="o-flex o-flex--center o-flex--justify">QTY: 1</p>
                    </div>
                </div>
            </li>
        </ul>
        <h6 class="mb0"><strong>Shipping Address</strong></h6>
        <ul class="list-grid">
            <li>
                <div>
                    <p class="text-medium mb-"><strong>Kristin Watson</strong></p>
                    <p class="mb0">4140 Parker Rd. Allentown, New Mexico 31134</p>
                </div>
                <a href="javascript:;" class="edit">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#edit)">
                        <path d="M18.3334 10.0003V15.0003C18.3334 16.8413 16.841 18.3337 15.0001 18.3337H5.00008C3.15913 18.3337 1.66675 16.8413 1.66675 15.0003V5.00033C1.66675 3.15938 3.15913 1.66699 5.00008 1.66699H10.0001M13.072 3.35262C13.072 3.35262 13.072 4.54453 14.264 5.73644C15.4559 6.92836 16.6478 6.92836 16.6478 6.92836M7.62898 13.325L10.132 12.9674C10.493 12.9158 10.8276 12.7485 11.0855 12.4906L17.8397 5.73644C18.498 5.07817 18.498 4.01089 17.8397 3.35261L16.6478 2.1607C15.9895 1.50242 14.9222 1.50242 14.264 2.1607L7.50978 8.91488C7.25189 9.17277 7.0846 9.50736 7.03302 9.86841L6.67544 12.3714C6.59598 12.9277 7.07275 13.4044 7.62898 13.325Z" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="edit">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg> 
                </a>
            </li>
        </ul>
        <h6 class="mb0"><strong>Payment Method</strong></h6>
        <ul class="list-grid">
            <li>
                <div>
                    <p class="text-medium mb0"><strong>Debit Card (.... .... .... ..89)</strong></p>
                </div>
                <a href="javascript:;" class="edit">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#edit)">
                        <path d="M18.3334 10.0003V15.0003C18.3334 16.8413 16.841 18.3337 15.0001 18.3337H5.00008C3.15913 18.3337 1.66675 16.8413 1.66675 15.0003V5.00033C1.66675 3.15938 3.15913 1.66699 5.00008 1.66699H10.0001M13.072 3.35262C13.072 3.35262 13.072 4.54453 14.264 5.73644C15.4559 6.92836 16.6478 6.92836 16.6478 6.92836M7.62898 13.325L10.132 12.9674C10.493 12.9158 10.8276 12.7485 11.0855 12.4906L17.8397 5.73644C18.498 5.07817 18.498 4.01089 17.8397 3.35261L16.6478 2.1607C15.9895 1.50242 14.9222 1.50242 14.264 2.1607L7.50978 8.91488C7.25189 9.17277 7.0846 9.50736 7.03302 9.86841L6.67544 12.3714C6.59598 12.9277 7.07275 13.4044 7.62898 13.325Z" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="edit">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg> 
                </a>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    name:"ReviewOrder",
}
</script>
<style lang="scss" scoped>

    ul {
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

    .list-grid {

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        .edit {
            display: flex;
            width: 40px;
            height: 40px;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            background-color: rgba(163, 170, 171, 0.10);
        }
    }
</style>