import PropTypes from  'prop-types'

export const InversionView = ({id, name}) => {
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Descripción: {name}</li>
            </ul>
        </>    
    )
}

InversionView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}
