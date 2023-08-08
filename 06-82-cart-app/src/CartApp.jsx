import { useState } from "react"
import { Cartview } from "./components/Cartview"
import { CatalogView } from "./components/CatalogView"
import { products } from "./data/products"

const initialCartItems = [
    /*{
        product:{

        },
        quantity: 0,
        total: 0
    }*/
]

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);                                           //se le pasan los datos por defecto q va a tener el car items.

    const handlerAddProductCart = (product) => {
        setCartItems([
            ...cartItems,                       //se conservan los datos q ya se tienen en el carro de compras.
            {
                product,                        // esto es igual a product : product.
                quantity: 1,
                total: product.price * 1
            }
        ]);
    }

    return(
        <>
            <div className="container">
                <h3>Cart app</h3>

                <CatalogView 
                    handler = {product => handlerAddProductCart(product)}                         //se pasa la funcion handler  para recibir el nuevo producto q se agrega al carro.
                />

                <div className="my-4 w-50">
                    <Cartview items={cartItems}/>
                </div>
            </div>
        </>
    )
}