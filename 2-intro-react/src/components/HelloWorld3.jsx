export const HelloWorld3 = ({user, id, title='hola mundo!'}) => {

    return (
        <>
            <h3>{title}</h3>
            <h3>..........</h3>
            <h3>Hola! {user.name} {user.lastname}</h3>
            <h3>Hola! {JSON.stringify(user)}</h3>
            <h3>id: {id + 10}</h3>
        </> 
    );
}

