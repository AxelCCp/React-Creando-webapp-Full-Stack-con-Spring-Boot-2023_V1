import PropTypes from  'prop-types';

export const TableItemsView = ({itemsClose}) => {

    return( 
        <>
        <h4>Histórico de inversiones:</h4>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>Id</th>
                    <th>Índice</th>
                    <th>Activo</th>
                    <th>Inversion inicial</th>
                    <th>Cantidad compra</th>
                    <th>Valor actual</th>
                    <th>Ganancia</th>
                </tr>
            </thead>
            <tbody>
                {itemsClose.map(({id, index, product, inversionInit, quantity, value_now, profit, coin, unit}) => {
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{index}</td>                                       
                            <td>{product}</td>
                            <td>{coin} {inversionInit}</td>
                            <td>{quantity} {unit}</td>
                            <td>{coin} {value_now}</td>
                            <td>{coin} {profit}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )   
}

TableItemsView.propTypes = {
    itemsClose: PropTypes.array.isRequired,
}