export default {
    namespaced: true,
    state: {
        currentPage:1,
        product: {
            
        }
    },

    mutations: {
        setPage(state, currentPage) {
            
            state.currentPage = currentPage
        },

        // setToken(state, token) {

        //     state.auth.token = token

        //     if(token) {

        //         localStorage.setItem('auth_token', token)
        //         state.auth.loggedin = true

        //     } else {

        //         localStorage.removeItem('auth_token')

        //     }

        // },
    },
    actions: {
        setPage(context, payload) {
            context.commit('setPage', payload)
        },
    },
    getters: {
        currentPage(state) {
            return state.currentPage
        },
    },
}