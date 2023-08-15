import { Navigate, Route, Routes } from "react-router-dom";
import { Cartview } from "./components/Cartview"
import { CatalogView } from "./components/CatalogView"
import { useItemsCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/Navbar";

export const CartApp = () => {

    const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return(
        <>
            <Navbar/>


            <div className="container my-4">

                <h3>Cart app</h3>

                <Routes>

                    <Route path="/" element={ <Navigate to={'/catalog'} /> } />  

                    <Route 
                        path="catalog" 
                        element={<CatalogView handler = {product => handlerAddProductCart(product)} />}
                    />

                    <Route path="cart" element={(
                        cartItems?.length <= 0 ?
                            <div className="alert alert-warning">No hay productos en el carro de compras!</div>
                            : 
                            (                                                                                                        
                                <div className="my-4 w-50">
                                    <Cartview items={cartItems} handlerDelete={id => handlerDeleteProductCart(id)}/>
                                </div>
                            )
                    )}/>
                                                        
                    
                </Routes>

            </div>
        </>
    )
}