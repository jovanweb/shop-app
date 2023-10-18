export default {
    namespaced: true,
    state: {
        aside:false,
        cartProducts: [],
    },

    mutations: {
        setAside(state, payload) {
            state.aside = payload
        },

        // addFavorite(state, payload) {
        //     const productExists = state.favoriteProducts.some((product) => product.id === payload.id);

        //     if (!productExists) {
        //         state.favoriteProducts.push(payload);
        //     } else {
        //         console.log("Product with the same ID already exists in favoriteProducts.");
        //     }
        // },

        // removeFavorite(state, payload) {
        //     const indexToRemove = state.favoriteProducts.findIndex(product => product.id === payload.id);

        //     if (indexToRemove !== -1) {
        //         state.favoriteProducts.splice(indexToRemove, 1);
        //     }
        // }
    },
    actions: {
        setAside(context, payload) {
            context.commit('setAside', payload)
        },

        // addFavorite(context, payload) {
        //     context.commit('addFavorite', payload)
        // },

        // removeFavorite(context, payload) {
        //     context.commit('removeFavorite', payload)
        // },
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