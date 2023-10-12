export default {
    namespaced: true,
    state: {
        subtotal: 400,
        deliveryCharge: 5,
        grandTotal: 405,
        products: [
            {
                image: '',
                name: 'Modern Sofa Chair',
                price: '$300',
                quantity: 2
            },
            {
                image: '',
                name: 'Modern Sofa Chair',
                price: '$300',
                quantity: 3
            },
        ],
        payment: {
            step: 1,
            step1: {
                deliveryAddress: [
                    {
                        name: 'Kristin Watson',
                        address: '4140 Parker Rd. Allentown, New Mexico 31134',
                        active: true
                    },
                    {
                        name: 'Annette Black',
                        address: '4140 Parker Rd. Allentown, New Mexico 31134',
                        active: false
                    },
                ]
            },
            step2: {
                paymentMethod: 'card',
            },
            step3: {
                shippingAddress: {
                    name: '',
                    address: '',
                }
            }
        }
    },

    mutations: {

    },
    actions: {

    },
    getters: {
        products(state) {
            return state.products
        },
    },
}