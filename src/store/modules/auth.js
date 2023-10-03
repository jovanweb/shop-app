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
        },
    },

    mutations: {

    },
    actions: {

    },
    getters: {
        auth(state) {
            return state.auth
        },
    },
}