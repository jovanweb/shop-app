<template>
    <div class="accordion" :class="{'show': dropdownTransition}">
        <span class="menu-link" @click="dropdownTransition = !dropdownTransition">
            <slot name="link"></slot>
            <svg width="24" height="24" fill="none"><path d="m17 14-5-4-5 4" stroke="#141C1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <div class="menu-sub menu-sub-accordion">
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AsideAccordion",
        data() {
            return {
                dropdownTransition: false
            }
        },
    }
</script>

<style lang="scss" scoped>

    .menu-link {
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
    }

    .accordion {
        
        svg {
            transition: all .3s ease;
        }

        &.show {
            svg {
                transform: rotate(-180deg);
            }
        }
    }

    .menu-sub-accordion {
        display: flex!important;
        height: auto;
        transition: max-height 0.5s cubic-bezier(0,1,0,1);
        max-height: 0;
        overflow: hidden;

        .show & {
            max-height: 99999px;
            transition: max-height 0.5s cubic-bezier(1,0,1,0);
        }
    }
</style>