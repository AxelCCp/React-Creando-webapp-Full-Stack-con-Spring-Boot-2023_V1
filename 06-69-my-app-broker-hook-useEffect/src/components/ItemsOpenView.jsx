import PropTypes from  'prop-types';

export const ItemsOpenView = ({itemsOpen}) => {

    return( 
        <>
        <h4>Operaciones abiertas:</h4>
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
                {itemsOpen.map(({id, index, product, inversionInit, quantity, value_now, profit, coin, unit}) => {
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

ItemsOpenView.propTypes = {
    itemsOpen: PropTypes.array.isRequired,
}