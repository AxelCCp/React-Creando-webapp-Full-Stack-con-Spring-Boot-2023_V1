export const UserRow = ({handlerUserSelectedForm, handlerRemoveUser, id, username, email}) => {                                    // user desestructurado: se pone {user desestructurado} pq es solo un usuario por fila.             
    
   
    return(
        <tr>
            <td>{ id }</td>
            <td>{ username }</td>
            <td>{ email }</td>
            <td><button type="button" className="btn btn-secondary btn-sm" onClick={() => handlerUserSelectedForm({
                id : id,
                username : username,
                email : email
            })}>update</button></td>
            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handlerRemoveUser(id)}>remove</button></td>
        </tr>
    );
}