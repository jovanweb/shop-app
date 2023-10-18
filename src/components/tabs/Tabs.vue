<template>
    <div class="tabs">
        <div class="tab-header">
            <slot name="header"></slot>
        </div>
        <div class="tab-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "Tabs",
    props: {
        title: {
            type: Array,
            default: [],
        }
    },
    data() {
        return {
            tabActive: 0,
        }
    },
    methods: {
        triggerButton(i) {
            console.log(i)
            this.tabActive = i;
        }
    }
}
</script>
<style lang="scss">

    .tab-link {
        color: #141C1D;
        font-size: 20px;
        line-height: 24px;
        text-decoration: none;
        padding: 17px 0;
        position: relative;

        &:before {
            position: absolute;
            left: 0;
            top: 100%;
            width: 100%;
            height: 2px;
            background-color: #088395;
            content: "";
            transition: all .3s ease;
            transform: translate(0, -1px);
            visibility: hidden;
            opacity: 0;
        }

        &.active {
            color: #088395;
            
            &:before {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    .tab-header {
        display: flex;
        gap: 30px;
        border-bottom: 1px solid rgba(163, 170, 171, 0.20);
    }

    .tab-body {
        padding: 20px 0;
    }
</style>