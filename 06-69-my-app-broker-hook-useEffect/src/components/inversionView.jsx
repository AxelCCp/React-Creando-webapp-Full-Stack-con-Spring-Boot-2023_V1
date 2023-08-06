import PropTypes from  'prop-types'

export const InversionView = ({id, account, available}) => {
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">Id correlativo: {id}</li>
                <li className="list-group-item">Cuenta: {account}</li>
                <li className="list-group-item">Fondos disponibles: US$ {available}</li>
            </ul>
        </>    
    )
}

InversionView.propTypes = {
    id: PropTypes.number.isRequired,
    account: PropTypes.string.isRequired,
}
