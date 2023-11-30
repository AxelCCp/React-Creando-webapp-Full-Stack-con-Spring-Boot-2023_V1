import PropTypes from  'prop-types'

export const InvoiceView = ({id, name}) => {

    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">id: {id}</li>
                <li className="list-group-item">name: {name}</li>
            </ul>
        </>
    )
}


InvoiceView.propTypes = {                                                                               //valida que vengan los datos desde invoice app.
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}