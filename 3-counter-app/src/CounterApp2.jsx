import { useState } from "react";

export const CounterApp2 = () => {

    const [counter, setCounter] = useState(0);      //CONTADOR PARTE EN 0

    const counterIncrement = () => {
        //setCounter(counter + 1);
        setCounter(c => c + 1);
        console.log('click ' + counter + '!')
    }

    return <>
        <h3>Constador {counter}</h3>
        <button onClick= {() => {
            counterIncrement();
        }}> Contador +1 </button>
    </> 
}