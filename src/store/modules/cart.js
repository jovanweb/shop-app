import toastr from "toastr";

export default {
    namespaced: true,
    state: {
        aside:false,
        subtotal: 0,
        cartProducts: [
        ],
    },

    mutations: {
        setAside(state, payload) {
            state.aside = payload
        },

        addToCart(state, payload) {

            const productExists = state.cartProducts.some((product) => product.id === payload.id);

            if (!productExists) {
                state.cartProducts.push(payload);
            } else {
                toastr.error("nesto");
            }
        },

        removeFromCart(state, payload) {
            const indexToRemove = state.cartProducts.findIndex(product => product.id === payload.id);
            if (indexToRemove === -1) {
                state.cartProducts.splice(indexToRemove, 1);
            }
        },

        addSubtotal(state, payload) {
            state.subtotal = payload
        }
    },
    actions: {
        setAside(context, payload) {
            context.commit('setAside', payload)
        },

        addToCart(context, payload) {
            context.commit('addToCart', payload)
        },

        removeFromCart(context, payload) {
            context.commit('removeFromCart', payload)
            
        },
        addSubtotal(context, payload) {
            context.commit("addSubtotal", payload)
        }
    },
    getters: {
        asideCart(state) {
            return state.aside
        },
        getCartProducts(state) {
            return state.cartProducts
        },
    },
}