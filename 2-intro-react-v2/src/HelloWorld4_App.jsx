
import PropTypes from 'prop-types'
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';
import { Book } from './components/Book';

export const HelloWorld4_App = ({user, id, title='hola mundo!', title2, book}) => {

    return (
        <>
            <h3>-----------4------------</h3>
            <h3>{title}</h3>
            <h3>user: {user.name} {user.lastname}</h3>
            <h3>user json: {JSON.stringify(user)}</h3>
            <h3>id: {id + 10}</h3>
            <h4>{title2}</h4>
            <br/>
            <h4>Etiqueta Title:</h4>
            <Title title='* etiqueta titulo'/>
            <br/>
            <h4>Etiqueta UserDetails:</h4>
            <UserDetails user={user} id={id}/>
            <br/>
            <h4>Etiqueta Book:</h4>
            <Book book={book}/>
            <h3>-----------4------------</h3>
        </> 
    );
}

//ESTO ES PARA VALIDAR
HelloWorld4_App.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    title2: PropTypes.string.isRequired,
}

//PARAMETROS POR DEFECTO
HelloWorld4_App.defaultProps = {
    title: 'title 1 defecto',
    title2: 'title 2 defecto'
}