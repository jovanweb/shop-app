<template>
    <div class="auth">
        <h4 class="mb--"><strong>Welcome 👋 </strong></h4>
        <p class="mb+">Please login here</p>

        <div class="input-box">
            <p>Email Address</p>
            <input type="email" class="input input--primary">
        </div>

        <div class="input-box">
            <p>Password</p>
            <input type="password" class="input input--primary">
        </div>

        <div class="o-flex o-flex--center o-flex--justify mb+">
            <Checkbox :text="'Remember Me'" :nameId="'remember-me'"/>
            <a href="javascript:;">Forgot Password?</a>
        </div>
        <button class="button button--primary w-100">Login</button>

        <div class="u-text-center">
            <a href="javascript:;">Register here...</a>
        </div>
    </div>
</template>
<script>
import Checkbox from "../../components/Checkbox.vue"

export default {
    name: "Login",
    components: {
        Checkbox
    }
}
</script>
<style lang="scss" scoped>
    .auth {
        max-height: 100%;
        overflow: auto;
    }
</style>