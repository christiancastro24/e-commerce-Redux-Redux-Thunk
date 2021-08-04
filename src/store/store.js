import { createStore, combineReducers, applyMiddleware } from "redux"

import { productsReducer } from "./modules/products/reducer"

import thunk from "redux-thunk"

import { cartReducer } from "./modules/cart/reducer"

const reducers = combineReducers({ products: productsReducer, cart: cartReducer })

export const store = createStore(reducers, applyMiddleware(thunk))