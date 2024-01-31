import { useEffect } from "react";
import { getProducts } from "./services/productService"
import { useState } from "react";


export const CartApp = () => {

    //se usa el useeffect para q el metodo se ejecute solo una vez, cuando se inicia el componente,  de otro modo , si se  llama a la funcion así nomas "const products = getProducts();" con cada cambio q se haga en la pagina, va a estar llamando al back.
    //hay q manejar un usestate ,  un state para productos. los productos se le pasan al estado de react.
    
    const [products, setProducts] = useState([]);
    
    useEffect(
        () => {
            setProducts(getProducts());
        }, []                                                                                    // []  con los corchetes se dice q solo se va a ejecutar el useEffect cuando se inicie el componente.
    )

    return(
        <>
        
            <div className="container">
                <h3>Cart app</h3>
                <div className="row">
                    { products.map(prod => (

                        <div className="col-4 my-2" key={prod.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text">{prod.description}</p>
                                <p className="card-text">$ {prod.price}</p>      
                                <button className="btn btn-primary">agregar</button>  
                            </div>
                        </div>
                    </div>

                    ))}
                    

                </div>

                <div className="my-4 w-50">
                    <h3>Carro de compras</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nombre</td>
                                <td>precio</td>
                                <td>cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-center fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}