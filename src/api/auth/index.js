let userData = {
    name: 'Pera Peric',
    email: 'peraperic@gmail.com',
    password: 'nesto',
}

export const user = (email, password) => {

    if(email === userData.email && password === userData.password) {
        return {
            data: {
                userData,
                token: "4f2d4saf4d5sav4dfsav41dfsav4fdsvf9dsvf"
            }
        }
    }else {
        console.log("error")
    }
}

