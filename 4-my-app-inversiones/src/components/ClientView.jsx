import PropTypes from  'prop-types'

export const ClientView = ({client}) => {

    const {clientname, lastname, address : {country, state, city, street, number}, profile, date, taxid} = client;
    
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item text-start">Nombre: {clientname} {lastname}</li>
                <li className="list-group-item text-start">País: {country} | Estado: {state} | Ciudad: {city}</li>
                <li className="list-group-item text-start">Dirección: {street} {number}</li>
            </ul>

            <h4>Datos adicionales:</h4>
            
            <ul className="list-group">
                <li className="list-group-item text-start">Perfil inversor: {profile}</li>
                <li className="list-group-item text-start">Fecha de registro: {date}</li>
                <li className="list-group-item text-start">Tax id: {taxid}</li>
            </ul>
        </>
    )

}

ClientView.propTypes = {
    client : PropTypes.object.isRequired
}