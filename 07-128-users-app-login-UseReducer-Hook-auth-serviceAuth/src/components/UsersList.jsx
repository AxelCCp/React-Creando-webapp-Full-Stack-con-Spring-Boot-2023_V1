import { UserRow } from "./UserRow";

export const UsersList = ({handlerUserSelectedForm, handlerRemoveUser, users = []}) => {                                                    //user se pasa como un arreglo, para pasarlo con elmap a una estructura jsx

    return(
        <table className="table table-over table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, username, email}) => (
                      <UserRow 
                            key={id} 
                            id={id} 
                            username={username} 
                            email={email} 
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUserSelectedForm = {handlerUserSelectedForm} />
                    ))
                }
            </tbody>
        </table>
    );
}