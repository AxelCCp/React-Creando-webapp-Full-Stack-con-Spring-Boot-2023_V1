import { Fragment } from "react";

export const HelloWorld2 = ({user, id, title='hola mundo!'}) => {

    return (
        <>
            <h3>{title}</h3>
            <h3>..........</h3>
            <h3>Hola! {user}</h3>
            <h3>id: {id + 10}</h3>
        </> 
    );
}

