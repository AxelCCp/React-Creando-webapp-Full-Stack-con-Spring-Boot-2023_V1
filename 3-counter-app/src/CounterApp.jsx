export const CounterApp = () => {

    let counter = 0;

    const counterIncrement = () => {
        counter += 1; 
        console.log('click ' + counter + '!')
    }

    return <>
        <h3>Constador {counter}</h3>
        <button onClick= {() => {
            counterIncrement();
        }}> Contador +1 </button>
    </> 
}