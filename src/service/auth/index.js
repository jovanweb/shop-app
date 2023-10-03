import { user } from "@/api/auth";

export const loadAuthenticatedUser = async (email, password) => {
    try {

        console.log(email, password)
        const { data } = await user(email, password)
        console.log(data)


    } catch (e) {
        console.log('Error loading authenticated user', e)
    }
}

// export const setAuthenticatedUser = async(user) => {

//     await store.dispatch('auth/setLoggedUser', {user: user, token: localStorage.getItem('auth_token')})

// }