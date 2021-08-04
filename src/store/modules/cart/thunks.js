import { addToCart, removeFromCart } from "./actions"
import { toast } from 'react-toastify'

export const addToCartThunk = (product) => (dispatch, getStore) => {
    const { cart } = getStore()

    const exist = cart.find(prod => prod.id === product.id)
    
    if(exist) {
        toast.error("Produto já existe, por favor adicione outro")

    } else {
        const list = JSON.parse(localStorage.getItem("cart")) || []
        list.push(product)
        localStorage.setItem("cart", JSON.stringify(list))
        dispatch(addToCart(product))
        toast.success("Produto adicionado ao carrinho")
    }
}

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
    
    const { cart } = getStore()
    const list = cart.filter(product => product.id !== id)
    localStorage.setItem("cart", JSON.stringify(list))
    dispatch(removeFromCart(list))
}