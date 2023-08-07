import { useState } from "react";


export  const FormItemsView = ({handler}) => {


    const [formItemsState, setFormItemsState] = useState({
        index: '',                                                                              
        product: '',
        inversion: '',
        quantity: '',
        value_now: '',
        profit: '',
        coin: '',
        unit: '',
    });


    const{index, product, inversionInit, quantity, value_now, profit, coin, unit} = formItemsState;


    const onInputChange = ({target: {name, value}}) => {                                                                                         
        setFormItemsState({
            ...formItemsState,
            [name] : value                                                                                                                      
        }); 
    } 

    const onInversionItemsOpenSubmit = (event) => {
  
        event.preventDefault(); 

        if(index.trim().length < 1) return;
        if(product.trim().length < 1) return;

        if(isNaN(inversionInit.trim().length < 1)) return;
        if(isNaN(inversionInit.trim())) return;

        if(isNaN(quantity.trim().length < 1)) return;
        if(isNaN(quantity.trim())) return;

        if(isNaN(value_now.trim().length < 1)) return;
        if(isNaN(value_now.trim())) return;

        if(isNaN(profit.trim().length < 1)) return;
        if(isNaN(profit.trim())) return;

        if(coin.trim().length < 1) return;
        if(unit.trim().length < 1) return;

        handler(formItemsState);

        setFormItemsState({
        index: '',                                                                              
        product: '',
        inversionInit: '',
        quantity: '',
        value_now: '',
        profit: '',
        coin: '',
        unit: '',
        });
    }


  return(
    <>
         <form onSubmit={event => onInversionItemsOpenSubmit(event)}>

            <input type="text" name="index" 
                    placeholder="index" 
                    value={index} 
                    className="form-control m-3" 
                    onChange={event => onInputChange(event)}/>

            <input type="text" name="product" 
                    placeholder="activo" 
                    value={product} 
                    className="form-control m-3" 
                    onChange={event => onInputChange(event)}/>

            <input type="text" name="inversionInit" 
                    placeholder="inversionInit" 
                    value={inversionInit} 
                    className="form-control m-3" 
                    onChange={event => onInputChange(event)}/>

            <input type="text" name="quantity" 
                    placeholder="cantidad" 
                    value={quantity} 
                    className="form-control m-3" 
                    onChange={event => onInputChange(event)}/>

            <input type="text" name="value_now" 
                    placeholder="valor actual" 
                    value={value_now} 
                    className="form-control m-3" 
                    onChange={event => onInputChange(event)}/>

            <input type="text" name="profit" 
                    placeholder="ganancia" 
                    value={profit} 
                    className="form-control m-3" 
                    onChange={event => onInputChange(event)}/>

            <input type="text" name="coin" 
                    placeholder="moneda" 
                    value={coin} 
                    className="form-control m-3" 
                    onChange={event => onInputChange(event)}/>

            <input type="text" name="unit" 
                    placeholder="unidad" 
                    value={unit} 
                    className="form-control m-3" 
                    onChange={event => onInputChange(event)}/>

            <button type="submit" className="btn btn-primary m-3">Nuevo activo</button>

            </form>
    </>
  )

}
