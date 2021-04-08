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

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuatity, cartItem) => 
            accumulatedQuatity + cartItem.quantity, 0)
)