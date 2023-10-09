import {createStore} from 'vuex'
import auth from "@/store/modules/auth";
// import cart from "@/store/modules/cart";
// import payment from "@/store/modules/payment";
// import product from "@/store/modules/product";


export default createStore({
    state: {},
    modules: {
        auth
    }
})
