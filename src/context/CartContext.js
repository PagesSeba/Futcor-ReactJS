import React, {createContext, useState} from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductsToCart = (product) =>{
        let repetido= cartProducts.find(cartProducts => cartProducts.id === product.id)

        !repetido && setCartProducts(cartProducts =>[...cartProducts, product])

    }
 const deleteProducts = (product) => {
     setCartProducts(cartProducts.filter((cartProducts) =>{
         return cartProducts.id !== product.id
     }))
    }
    const clearCart = () => {
        setCartProducts([]);
    }

    const totalPrice = () => {
        let total = 0
        cartProducts.map((cartProduct) => {
            total = cartProduct.precio + total
        })
        return total
    }

const data = {
    cartProducts,
    addProductsToCart,
    deleteProducts,
    totalPrice,
    clearCart
}
    


    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext