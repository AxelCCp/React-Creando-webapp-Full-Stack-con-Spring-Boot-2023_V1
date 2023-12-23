import { UserForm } from "./UserForm";

export const UserModalForm = ({userSelected, initialUseForm, handlerAddUser, handlerCloseForm}) => {

    return (

        <div className="abrir-modal animacion fadeIn"> 
            <div className="modal" tabIndex="-1" style={ {display: "block"} }>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                            { userSelected.id > 0 ? 'Editar' : 'Crear' } Modal usuarios
                            </h5>
                        </div>
                        <div className="modal-body">
                            <UserForm initialUseForm={initialUseForm} handlerAddUser={handlerAddUser} userSelected={userSelected} handlerCloseForm={handlerCloseForm}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}