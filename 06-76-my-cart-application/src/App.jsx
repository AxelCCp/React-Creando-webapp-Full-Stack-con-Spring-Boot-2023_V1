import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getProducts } from './service/productService';

export const App = () => {
  
  const[products, setProducts] = useState([]);

  useEffect(
    () => {
      setProducts(getProducts());
    }, []
  )


  return (

    <>
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
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

export default App
