import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    hidden: true
}
//mi reducer recibe el estado actual y una accion
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            default: 
            return state            
    }
}

export default cartReducer