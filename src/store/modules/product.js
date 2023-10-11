export default {
    namespaced: true,
    state: {
        product: {
            
        }
    },

    mutations: {
        setUser(state, user) {
            const { token, ...rest} = user
            state.auth.user = rest
        },

        setToken(state, token) {

            state.auth.token = token

            if(token) {

                localStorage.setItem('auth_token', token)
                state.auth.loggedin = true

            } else {

                localStorage.removeItem('auth_token')

            }

        },
    },
    actions: {
        setLoggedUser(context, payload) {
            context.commit('setUser', payload)
            context.commit('setToken', payload.token)
            console.log("payload",payload)
        },
    },
    getters: {
        auth(state) {
            return state.auth
        },
    },
}