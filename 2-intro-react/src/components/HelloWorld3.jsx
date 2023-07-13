
import PropTypes from 'prop-types'

export const HelloWorld3 = ({user, id, title='hola mundo!', title2}) => {

    return (
        <>
            <h3>xxxxxxxxxxxxxxxxxxxxxxx</h3>
            <h3>{title}</h3>
            <h3>user: {user.name} {user.lastname}</h3>
            <h3>user json: {JSON.stringify(user)}</h3>
            <h3>id: {id + 10}</h3>
            <h4>{title2}</h4>
            <h3>xxxxxxxxxxxxxxxxxxxxxxx</h3>
        </> 
    );
}

//ESTO ES PARA VALIDAR
HelloWorld3.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,

    title2: PropTypes.string.isRequired,
}

//PARAMETROS POR DEFECTO
HelloWorld3.defaultProps = {
    title: 'title 1 defecto',
    title2: 'title 2 defecto'
}