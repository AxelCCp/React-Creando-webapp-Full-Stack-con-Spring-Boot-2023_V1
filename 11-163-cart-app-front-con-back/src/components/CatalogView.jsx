import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);                                       //para añadir un loading mientras se carga se obtienen los datos desde el back. 

    const findAll = async() => {                                                            //dentro de findAll() se obtiene la promesa de productos que devuelve getProducts().
        const prods = await getProducts();                                                  //la promesa se pasa a producto.
        setProducts(prods);                                                                 //se pasan los productos al estado de react.
        setIsLoading(false);                                                                //usa vez que se obtienen los datos desde el back se quita el loading.
    }

    useEffect(
        () => {
            findAll();                                                                      //no se puede poner un async dentro del useEffect, por eso se pone el findAll().
        }, []);
    
    return (
        <>  
        
            {/*siempre que isLoading sea true,  se va a poner el DIV de cargando...*/}
            
            {
                isLoading &&
                <div className="alert alert-info">Cargando ...</div>
            }
            
            <div className="row">
                {products.map(prod => (
                    <div className="col-4 my-2"
                        key={prod.id}>
                        <ProductCardView
                            handler={ handler }
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}