<template>
    <div class="single-product-wrapper">
        <div class="img-wrapper" :style="'background-image:url('+ data.thumbnail +');'">
            <!-- <img :src="" :alt="data.title"> -->
            <ul class="action-list">
                <li>
                    <a href="javascript:;">
                        <svg width="40" height="40" fill="none"><rect width="40" height="40" rx="20" fill="#fff"/><g clip-path="url(#a)"><path d="M18.36 12.726a1.798 1.798 0 0 1 3.28 0l1.158 2.441c.267.562.781.95 1.377 1.04l2.591.392c1.5.226 2.098 2.142 1.013 3.242l-1.875 1.9a1.948 1.948 0 0 0-.526 1.683l.443 2.683c.256 1.553-1.311 2.737-2.652 2.004l-2.318-1.267a1.767 1.767 0 0 0-1.702 0l-2.317 1.267c-1.342.733-2.91-.451-2.653-2.004l.443-2.683a1.948 1.948 0 0 0-.526-1.683l-1.875-1.9c-1.085-1.1-.486-3.016 1.013-3.242l2.591-.392a1.834 1.834 0 0 0 1.377-1.04l1.159-2.441Z" stroke="#141C1D" stroke-width="1.5" stroke-linejoin="round"/></g><defs><clipPath id="a"><path fill="#fff" d="M10 10h20v20H10z"/></clipPath></defs></svg>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <svg width="40" height="40" fill="none"><rect y="40" width="40" height="40" rx="20" transform="rotate(-90 0 40)" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.558 22.892a.625.625 0 0 0 0 .883l2.5 2.5a.625.625 0 1 0 .884-.883l-1.433-1.433H25a.625.625 0 1 0 0-1.25h-8.491l1.433-1.434a.625.625 0 1 0-.884-.883l-2.5 2.5Zm8.384-3.283 2.5-2.5a.625.625 0 0 0 0-.884l-2.5-2.5a.625.625 0 1 0-.884.884l1.433 1.433H15a.625.625 0 0 0 0 1.25h8.491l-1.433 1.433a.625.625 0 0 0 .884.884Z" fill="#141C1D"/></svg>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <svg width="20" height="20" fill="none"><path d="M17.609 8.21a2.57 2.57 0 0 1 0 3.579c-1.63 1.715-4.43 4.044-7.609 4.044-3.18 0-5.979-2.33-7.608-4.044a2.57 2.57 0 0 1 0-3.578C4.021 6.496 6.82 4.166 10 4.166c3.18 0 5.979 2.33 7.609 4.045Z" stroke="#141C1D" stroke-width="1.5"/><path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="#141C1D" stroke-width="1.5"/></svg>
                    </a>
                </li>
            </ul>
        </div>
        <router-link to="/single_product" class="u-text-decoration-none">
            <p class="mb0">{{data.title}}</p>
            <p class="mb0"><strong>{{data.description}}</strong></p>
            <p class="mb0">${{data.price}}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    name: "SingleProductType2",
    props: {
        data: {
            type: Object,
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>
    .single-product-wrapper {
        
        .img-wrapper {
            transition: all .3s ease;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
            width: 100%;
            aspect-ratio: 1 / 1.2;
            position: relative;
            border: 1px solid rgba(20, 28, 29, 0.10);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;

            &:hover {
                background-color: rgba(163, 170, 171, 0.10);

                .action-list {
                    visibility: visible;
                    opacity: 1;
                }
            }
        }

        p {
            line-height: 1.5;
        }

        
    }

    .action-list {
        position: absolute;
        right: 16px;
        top: 16px;
        display: flex;
        flex-direction: column;
        gap: 10px; 
        transition: all .3s ease;
        visibility: hidden;
        opacity: 0;

        a {
            display: flex;
            width: 40px;
            height: 40px;
            justify-content: center;
            align-items: center; 
            border-radius: 50%;
            background-color: #fff;
        }
    }
</style>