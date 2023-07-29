import PropTypes from  'prop-types'

export const SubRowItemView = ({product, price, quantity}) => {

    return(
        <>
            <tr>                                       
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantity}</td>
            </tr>
        </>
    )
}


SubRowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}


