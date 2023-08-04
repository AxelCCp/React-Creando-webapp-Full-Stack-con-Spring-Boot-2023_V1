import PropTypes from  'prop-types';

export const ContactView = ({contact}) => {

    const {phone, email} = contact;

    return(
        <ul className="list-group">
            <li className="list-group-item text-start">Movil: {phone}</li>
            <li className="list-group-item text-start">Correo: {email}</li>
        </ul>
    )
}

ContactView.propTypes = {
    contact : PropTypes.object.isRequired
}