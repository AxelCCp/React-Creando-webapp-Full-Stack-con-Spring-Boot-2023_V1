import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { Cartview } from "../components/CartView"

export const CartRoutes = ({handlerAddProductCart, handlerDeleteProductCart, cartItems}) => {
    return(
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
    )
}