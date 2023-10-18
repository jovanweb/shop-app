export default {
    namespaced: true,
    state: {
        currentPage:1,
        product: [],
        favoriteProducts: []
    },

    mutations: {
        setPage(state, currentPage) {
            state.currentPage = currentPage
        },

        addFavorite(state, payload) {
            const productExists = state.favoriteProducts.some((product) => product.id === payload.id);

            if (!productExists) {
                state.favoriteProducts.push(payload);
            } else {
                console.log("Product with the same ID already exists in favoriteProducts.");
            }
        },

        removeFavorite(state, payload) {
            const indexToRemove = state.favoriteProducts.findIndex(product => product.id === payload.id);

            if (indexToRemove !== -1) {
                state.favoriteProducts.splice(indexToRemove, 1);
            }
        }
    },
    actions: {
        setPage(context, payload) {
            context.commit('setPage', payload)
        },

        addFavorite(context, payload) {
            context.commit('addFavorite', payload)
        },

        removeFavorite(context, payload) {
            context.commit('removeFavorite', payload)
        },
    },
    getters: {
        currentPage(state) {
            return state.currentPage
        },
        favoriteProduct(state) {
            return state.favoriteProducts
        },
    },
}