import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";

export const Cartview = ({items, handlerDelete}) => {

    const [total, setTotal] = useState(0);                                                      //recibe un valor por defecto de 0.
    
    useEffect(() => {                                                                           //cuando cambien los items, se debe recalcular el total, por eso se usa [items].    
        setTotal(calculateTotal(items));
        sessionStorage.setItem('cart', JSON.stringify(items))                                   //junto con calcular el total, se guarda el obj item como string en la session del navegador. Luego los items se deben inicializar en el cart app.   
    }, [items])

    const onDeleteProduct = (id) => {
        console.log('eliminando producto');
        handlerDelete(id);
    }

  return (
    <>
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
                {items.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.product.price}</td>
                        <td><button 
                            className="btn btn-danger"
                            onClick={()=>onDeleteProduct(item.product.id)}>eliminar</button></td>
                    </tr>
                ))}
                
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" className="text-end fw-bold">Total</td>
                    <td colSpan="2" className="text-center fw-bold">{total}</td>
                </tr>
            </tfoot>
        </table>
    </>
  )
}
