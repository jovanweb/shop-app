<template>
    <div class="input-number">
        <a href="javascript:;" class="minus" @click="changeValue('-1')">-</a>
        <input type="number" class="input" :value="number">
        <a href="javascript:;"  class="plus" @click="changeValue('1')">+</a>
    </div>
</template>
<script>
export default {
    name: "InputNumber",
    data() {
        return {
            number: 0,
        }
    },
    methods: {
        changeValue(numb) {
            this.number += +numb
            this.number > 0 ? this.number : this.number = 0;
        }
    }
}
</script>
<style lang="scss" scoped>

    .input-number {
        display: inline-flex;
        height: 56px;
        border-radius: 10px;
        border: 1px solid rgba(163, 170, 171, 0.20);
    }

    input {
        width: 40px;
        -moz-appearance:textfield;
        text-align: center;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    .minus, .plus {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

    }

    .minus {
        border-right: 1px solid rgba(163, 170, 171, 0.20);
    }

    .plus {
        border-left: 1px solid rgba(163, 170, 171, 0.20);
    }
</style>