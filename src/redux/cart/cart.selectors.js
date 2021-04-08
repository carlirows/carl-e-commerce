import {createSelector} from 'reselect'
//INPUT SELECTOR
//es una funcion que recibe el estado entero y devuleve solo un slice del mismo
const selectCart = state => state.cart
//createSelector toma dos valores, el primero es un array de input selectors
// el 2do es una funcion que devulve el valor que queremos del selector

//al hacer esto hemos creado un selector memoizado
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedPrice, cartItem) => 
            accumulatedPrice + (cartItem.quantity * cartItem.price),0)
)