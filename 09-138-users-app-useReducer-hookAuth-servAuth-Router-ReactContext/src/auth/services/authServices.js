export const loginUser = (userLogin) => {

    //Se retorna true o false, dependiendo de si se cumple la condición.
    //esto se desacopló ya q en la practica esto viene de un backend

    return (userLogin.username === 'admin' && userLogin.password === '12345');

}