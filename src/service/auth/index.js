import store from "@/store";
// import { user } from "@/api/auth";

export const loadAuthenticatedUser = async (email, password) => {
    const userData = {
        name: 'Pera Peric',
        email: 'peraperic@gmail.com',
        password: 'nesto',
    }

    if(email === userData.email && password === userData.password) {
        console.log(email)
        console.log(password)
        let data = {
            userData,
            token: "4f2d4saf4d5sav4dfsav41dfsav4fdsvf9dsvf"
        }

        await store.dispatch('auth/setLoggedUser', data)

        return
    }else {
        console.log("nije")

        return false
    }
}