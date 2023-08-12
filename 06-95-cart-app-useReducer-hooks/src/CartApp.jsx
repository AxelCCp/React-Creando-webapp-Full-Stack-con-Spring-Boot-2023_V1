import { Cartview } from "./components/Cartview"
import { CatalogView } from "./components/CatalogView"
import { useItemsCart } from "./hooks/useItemsCart"

export const CartApp = () => {

    const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return(
        <>
            <div className="container my-4">
                <h3>Cart app</h3>

                <CatalogView 
                    handler = {product => handlerAddProductCart(product)}                                                //se pasa la funcion handler  para recibir el nuevo producto q se agrega al carro.
                />

               
                {cartItems?.length <= 0 || 
                (                                                                                                        //CLASE 88, MIN 6 //cartItems?.length > 0 ||  : si cartItems es null (esto con el "?")  o menor o igual a cero,  con el operador OR (||) se muestra el div.
                    <div className="my-4 w-50">
                        <Cartview items={cartItems} handlerDelete={id => handlerDeleteProductCart(id)}/>
                    </div>
                )} 
                
            </div>
        </>
    )
}