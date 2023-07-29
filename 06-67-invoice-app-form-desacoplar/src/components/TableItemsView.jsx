import { SubRowItemView } from "./SubRowItemView"
import PropTypes from  'prop-types'

export const TableItemsView = ({title, items}) => {

    return(
        <>
             <h3>{title}</h3>
                        
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(({id, product, price, quantity}) => {        //ESTA LINEA ESTA DESESTRUCTURADA, SE PODRIA PONER MAP(ITEM)  //EL ID SE AGREGÓ PQ DA UN ERROR EN EL FRONT. PIDE UN ID UNICO PARA EL TR, KEY = {ID}
                            return (

                                /*ESTE ES UN SUB-ELEMENTO*/
                                <SubRowItemView key={id} product={product} price={price} quantity={quantity}/>
                                /*
                                <tr key={id}>                                       
                                    <td>{product}</td>
                                    <td>{price}</td>
                                    <td>{quantity}</td>
                                </tr>
                                */
                            )
                        })}
                    </tbody>
                </table>
        </>
    )
} 

TableItemsView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}