import { Fragment } from "react";

export function HelloWorld1(props){

//const name = 'Pepe';

    return (
        /*
        <div>
            <div>Hola mundo!</div>
            <h1>..........</h1>
        </div>
        
        <Fragment>
            <div>Hola mundo!</div>
            <h1>..........</h1>
        </Fragment> 
        */   
        <>
            <h3>Hola mundo!</h3>
            <h3>..........</h3>
            <h3>Hola! ... {props.user}</h3>
            <h3>id: {props.id}</h3>
        </> 
    );
}

