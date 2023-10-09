<template>
    <div class="auth">
        <h4 class="mb--"><strong>Welcome 👋 </strong></h4>
        <p class="mb+">Please login here</p>

        <div class="input-box">
            <p>Email Address</p>
            <input type="email" class="input input--primary" v-model="email">
        </div>

        <div class="input-box">
            <p>Password</p>
            <input type="password" class="input input--primary" v-model="password">
        </div>

        <div class="o-flex o-flex--center o-flex--justify mb+">
            <Checkbox :text="'Remember Me'" :nameId="'remember-me'"/>
            <a href="javascript:;">Forgot Password?</a>
        </div>
        <button class="button button--primary w-100" @click="login">Login <span class="loader" v-if="working"></span></button>

        <!-- <div class="u-text-center">
            <a href="javascript:;">Register here...</a>
        </div> -->
    </div>
</template>
<script>
import Checkbox from "../../components/Checkbox.vue"
import { loadAuthenticatedUser } from "@/service/auth";
import toastr from "toastr";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            working: false,
        }
    },
    components: {
        Checkbox
    },
    methods: {
        async login() {
            this.working = true

            try {
                await loadAuthenticatedUser(this.email,this.password)
                await this.$router.push('/')
                toastr.success('Success')
                this.working = false
            } catch (e) {
                toastr.error('Error')
            }

        }
    }
}
</script>
<style lang="scss" scoped>
    .auth {
        max-height: 100%;
        overflow: auto;
    }

    .loader {
        width: 20px;
        height: 20px;
        border: 2px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        margin-left: 10px;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>