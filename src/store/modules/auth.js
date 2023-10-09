export default {
    namespaced: true,
    state: {
        auth: {
            user: {
                name: "",
                email: "",
                id: 0,
                password: ""
            },
            token: null

        },
    },

    mutations: {
        setUser(state, user) {
            state.auth.user = user
        },

        setToken(state, token) {

            state.auth.token = token

            if(token) {

                localStorage.setItem('auth_token', token)

            } else {

                localStorage.removeItem('auth_token')

            }

        },
    },
    actions: {
        setLoggedUser(context, payload) {
            context.commit('setUser', payload.userData)
            context.commit('setToken', payload.token)
            console.log(payload)
        },
    },
    getters: {
        auth(state) {
            return state.auth
        },
    },
}