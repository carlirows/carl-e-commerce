//busco en mi array de items si tengo algo con el mismo id que quiero agregar
//si SI exite lo guardo como existing cartItem
//vuelvo a pasar sobre el array para comprobar que el item que ya quiero agregar ya lo tengo
// le modifico la propiedad 'quantity' al item 
//si NO existe 
export const addItemToCart = (cartItems, cartItemToAdd) => { 
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id           
    )

    if(existingCartItem) {
       return cartItems.map(cartItem => 
            cartItem.id === existingCartItem.id
            ? {...cartItem, quantity: cartItem.quantity +1}
            : cartItem
        )
    }
    //este es el codigo que se ejecuta cuando añado el item por primera vez
    // esparzo mi array de objetos cartItems, y le añado un nuevo objeto, esparciendo sus propiedades
    // y añadiendole la cantidad de 1 puesto que es la primera vez que lo añado
    return [...cartItems, { ...cartItemToAdd , quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToRemove.id 
    )

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem =>
            cartItem.id !== cartItemToRemove.id      
        ) 
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity : cartItem.quantity -1}
            : cartItem
    )
    

   /*  if (existingCartItem && existingCartItem.quantity === 1) cartItems.filter(item => item.id !== existingCartItem.id)
    existingCartItem.quantity = existingCartItem.quantity - 1 */
    
}