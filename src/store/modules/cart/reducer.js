import { cartAdd, cartRemove } from "./actionTypes"
const defaultStore = JSON.parse(localStorage.getItem("cart")) || []

export const cartReducer = (state = defaultStore, action) => {
    switch(action.type) {
        case cartAdd:
            return [...state, action.product]

        case cartRemove: 
            return action.list

        default:
            return state;
    }
}