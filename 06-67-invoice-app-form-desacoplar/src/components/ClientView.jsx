import PropTypes from  'prop-types'

export const ClientView = ({client}) => {

    //DESESTRUCTURACIÓN DESACOPLADA DE INVOICEAPP.JSX
    const {name: nameClient, lastname, address: {country, city, street, number}} = client;               //nameClient es un alias de name.
    
    //const {country, city, street, number} = address;

    return(
        <>
            <ul className="list-group">
                <li className="list-group-item active">{nameClient} {lastname}</li>
                <li className="list-group-item">{country} / {city}</li>
                <li className="list-group-item">{street} {number}</li>
            </ul>
        </>
    )
}

ClientView.propTypes = {
    client : PropTypes.object.isRequired
}