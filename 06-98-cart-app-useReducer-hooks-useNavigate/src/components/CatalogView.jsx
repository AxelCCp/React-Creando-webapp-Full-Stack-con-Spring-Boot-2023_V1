import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({handler}) => {

    //se usa el useeffect para q el metodo se ejecute solo una vez, cuando se inicia el componente,  de otro modo , si se  llama a la funcion así nomas "const products = getProducts();" con cada cambio q se haga en la pagina, va a estar llamando al back.
    //hay q manejar un usestate ,  un state para productos. los productos se le pasan al estado de react.
    
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            setProducts(getProducts());
        }, []
    )

    return(
        <>
            <div className="row">
                { products.map(prod => (
                <div className="col-4 my-2" 
                    key={prod.id}>
                    <ProductCardView 
                              handler = {handler}                       //se pasa la funcion handler  
                              id={prod.id}
                              name={prod.name} 
                              description={prod.description} 
                              price={prod.price}/>
                </div>
                ))}
            </div>
        </>
    )
}