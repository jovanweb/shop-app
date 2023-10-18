<template>
  <div class="input-number">
    <a href="javascript:;" class="minus" @click="decrement"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="15" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"><path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/></svg></a>
    <input type="number" class="input" :value="number" @input="inputHandler" />
    <a href="javascript:;" class="plus" @click="increment"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="15" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"><path d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/></svg></a>
  </div>
</template>

<script>
export default {
  name: "InputNumber",

  props: {
    max: {
      type: Number,
      required: false,
    },
  },

  data() {
    return {
      number: 1,
    };
  },

  methods: {
    decrement() {
      this.number = Math.max(1, this.number - 1);
    },

    increment() {
      if (this.max === undefined || this.number < this.max) {
        this.number++;
      }
    },

    inputHandler() {
      if (this.max !== undefined) {
        this.number = Math.max(0, Math.min(this.number, this.max));
      }
    },
  },
};
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