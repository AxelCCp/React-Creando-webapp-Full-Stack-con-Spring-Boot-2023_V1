import { useEffect, useReducer, useState } from "react"
import { Cartview } from "./components/Cartview"
import { CatalogView } from "./components/CatalogView"
import { products } from "./data/products"
import { itemsReducer } from "./reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];      //initialCartItems va a ser esto sies q contiene algo "JSON.parse(sessionStorage.getItem('cart'))"  o esto "[]" si eta vació lo anterior.   

export const CartApp = () => {

    const [cartItems, dispatch ] = useReducer(itemsReducer, initialCartItems);                           //dispatch en la palabra clave q recibirá el switch en itemsreducer.  a usereducer se le pasa la funcion itemsreducer. y se le pasa el estado inicial del carro.
    
    //94 - cuando cambia cartitems, se actualiza el carro en el sessionstorage. se usa para q al eliminar todos los item y lugo actualizar, no vuelva a aparecer el ultimo item q ya se habia eliminado.
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const handlerAddProductCart = (product) => {
        
        const hasItem = cartItems.find((i) => i.product.id === product.id);                                 //valida si el item ya existe. si existem aumenta la cantidad, sino lo agrega al carro.
        
        if(hasItem){
           
            dispatch({
                type : UpdateQuantityProductCart,
                payload : product
            });

        }else{

            dispatch({
                type : AddProductCart,
                payload : product
            });

        }
    }


    const handlerDeleteProductCart = (id) => {
        dispatch({
            type : DeleteProductCart,
            payload : id
        });
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