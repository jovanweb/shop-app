<template>
    <div class="modal-mask" @click.self="$emit('close')">
        <div class="modal-wrapper" @click.self="$emit('close')">
            <div class="modal-container">
                <div class="modal-header">
                    <a v-if="closable" class="close" @click="$emit('close')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10"><g data-name="Group 101"><path data-name="Icon ionic-ios-close" d="M6.187 5 9.76 1.427A.837.837 0 0 0 8.576.243L5.003 3.811 1.43.238A.837.837 0 1 0 .246 1.422L3.815 5 .242 8.573a.837.837 0 1 0 1.184 1.184l3.573-3.573 3.573 3.573a.837.837 0 1 0 1.184-1.184Z"/></g></svg>
                    </a>
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        closable: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        document.getElementsByTagName('body')[0].classList.add('modal-active')
    },
    beforeUnmount() {
        document.getElementsByTagName('body')[0].classList.remove('modal-active')
    }
}
</script>

<style scoped lang="scss">

    .modal-mask {
        position: fixed;
        z-index: 999999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        min-height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-wrapper {
        width: 100%;
    }

    .modal-container {
        max-width: 412px;
        width: calc(100% - 20px);
        margin: 0px auto;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        font-family: Helvetica, Arial, sans-serif;
        padding: 20px;
        border-radius: 16px;
        max-height: calc(100vh - 60px);
        overflow: auto;

        .close {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
        }

        @media(max-width: 991px) {
            padding: 20px;
            box-shadow: none;
        }
    }

    .modal-header {
        position: relative;

    }
</style>
