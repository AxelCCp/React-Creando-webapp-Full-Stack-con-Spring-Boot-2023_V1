import PropTypes from  'prop-types'

export const SubRowItemView = ({id, product, price, quantity, handlerDeleteitem}) => {

    return(
        <>
            <tr>                                       
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button className='btn btn-danger' onClick={() => handlerDeleteitem(id)}>eliminar</button></td>
            </tr>
        </>
    )
}


SubRowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}


