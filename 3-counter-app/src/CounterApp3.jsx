import { useState } from "react";

export const CounterApp3 = ({value}) => {

    const [counter, setCounter] = useState(value);      //CONTADOR PARTE EN 0

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