export const addToCart = (product) => ({ type: "@cart/ADD", product })

export const removeFromCart = (list) => ({ type: "@cart/REMOVE", list })