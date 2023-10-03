export default {
    namespaced: true,
    state: {
        auth: {
            user: {
                name: "Pera Peric",
                email: "peraperic@gmail.com",
                avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
                id: 0,
                password: "Test123"
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
            context.commit('setUser', payload.user)
            context.commit('setToken', payload.token)
        },
    },
    getters: {
        auth(state) {
            return state.auth
        },
    },
}