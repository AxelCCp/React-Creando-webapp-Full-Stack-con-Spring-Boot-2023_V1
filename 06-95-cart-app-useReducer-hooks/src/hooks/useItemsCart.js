import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

// LOS HOOKS SON PARA IMPLEMENTAR CIERTA LOGICA DE NEGOCIO EN EL FRONT - CON ESTE HOOKS DESACOPLAMOS EL CÓDIGO QUE ESTABA EN CARTAPP.

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];                                              //initialCartItems va a ser esto sies q contiene algo "JSON.parse(sessionStorage.getItem('cart'))"  o esto "[]" si esta vació lo anterior.   

export const useItemsCart = () => {

    const [cartItems, dispatch ] = useReducer(itemsReducer, initialCartItems);                                          //dispatch en la palabra clave q recibirá el switch en itemsreducer.  a usereducer se le pasa la funcion itemsreducer. y se le pasa el estado inicial del carro.
    
                                                                                                                        //94 - cuando cambia cartitems, se actualiza el carro en el sessionstorage. se usa para q al eliminar todos los item y lugo actualizar, no vuelva a aparecer el ultimo item q ya se habia eliminado.
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const handlerAddProductCart = (product) => {
        
        const hasItem = cartItems.find((i) => i.product.id === product.id);                                             //valida si el item ya existe. si existem aumenta la cantidad, sino lo agrega al carro.
        
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


    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}