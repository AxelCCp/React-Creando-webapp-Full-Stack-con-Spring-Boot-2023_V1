import { useState } from "react"
import { Cartview } from "./components/Cartview"
import { CatalogView } from "./components/CatalogView"
import { products } from "./data/products"

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];                                  //inicialización del carro de compras con datos almacenado es session - se pasa de un string a un obj de javascript - initialCartItems va a ser esto si es q contiene algo "JSON.parse(sessionStorage.getItem('cart'))"  o esto "[]" si está vacio lo anterior.   

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);                                           //se le pasan los datos por defecto q va a tener el car items.
     
    const handlerAddProductCart = (product) => {
        
        const hasItem = cartItems.find((i) => i.product.id === product.id);                                 //valida si el item ya existe. si existem aumenta la cantidad, sino lo agrega al carro.
        
        if(hasItem){
           
            //CON FILTER 
            /*setCartItems([                                                                                //1ro se agregan todos los productos q son diferentes al producto q se agrega al carro de compra.                                                                    
                ...cartItems.filter((i) => i.product.id !== product.id), 
                {
                    product,                                                                                //luego agrega el item con la nueva cantidad.
                    quantity: hasItem.quantity + 1,
                }
            ])*/

            //COM MAP
            setCartItems(
                cartItems.map((i) => {
                    if(i.product.id === product.id){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            )

        }else{
            setCartItems([
                ...cartItems,                                                                               //se conservan los datos q ya se tienen en el carro de compras.
                {
                    product,                                                                                // esto es igual a product : product.
                    quantity: 1,
                }
            ]);
        }
    }


    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ])
    }


    return(
        <>
            <div className="container my-4">
                
                <h3>Cart app</h3>

                <CatalogView 
                    handler = {product => handlerAddProductCart(product)}                           //se pasa la funcion handler  para recibir el nuevo producto q se agrega al carro.
                />

               
                {cartItems?.length <= 0 || 
                (                                                                                   //CLASE 88, MIN 6 //cartItems?.length > 0 ||  : si cartItems es null (esto con el "?")  o menor o igual a cero,  con el operador OR (||) se muestra el div.
                    <div className="my-4 w-50">
                        <Cartview items={cartItems} handlerDelete={id => handlerDeleteProductCart(id)}/>
                    </div>
                )} 
                
            </div>
        </>
    )
}