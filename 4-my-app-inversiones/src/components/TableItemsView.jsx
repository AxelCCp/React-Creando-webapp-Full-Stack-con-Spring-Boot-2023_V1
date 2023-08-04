import PropTypes from  'prop-types';

export const TableItemsView = ({items}) => {

    return(

        <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Producto</th>
                            <th>Inversion</th>
                            <th>Cantidad</th>
                            <th>Valor actual</th>
                            <th>Ganancia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(({id, product, inversion, quantity, value_now, profit}) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>                                       
                                    <td>{product}</td>
                                    <td>{inversion}</td>
                                    <td>{quantity}</td>
                                    <td>{value_now}</td>
                                    <td>{profit}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
    )
    TableItemsView.propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
    }
}