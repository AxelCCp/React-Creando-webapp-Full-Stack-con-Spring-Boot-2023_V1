import './App.css'
import { getInversion} from "./service/getInversion";
import { InversionView } from "./components/inversionView";
import { ClientView } from "./components/ClientView";
import { ContactView } from "./components/ContactView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";
import { useState } from 'react';
import { ItemsOpenView} from './components/ItemsOpenView';

export const App = () => {

  const {id, account, available, client, contact, itemsClose, totalInversion, totalValorAct, totalProfit, itemsOpen : itemsOpenInitial} = getInversion();


  const[indexValue, setIndexValue] = useState('');
  const[productValue, setProductValue] = useState('');
  const[inversionValue, setInversionValue] = useState('');
  const[quantityValue, setQuantityValue] = useState('');
  const[value_nowValue, setValue_nowValue] = useState('');
  const[profitValue, setProfitValue] = useState('');
  const[coinValue, setCoinValue] = useState('');
  const[unitValue, setUnitValue] = useState('');

  const[itemsOpen, setItemsOpen] = useState(itemsOpenInitial)
  const[counter, setCounter] = useState(6);


  return(
    <>
        <div className='container'>
        <h3>Broker</h3>

            <div className='card my-3'>

              <div className='card-header'>
                Tu registro de inversiones
              </div>
              
              <div className='card-body'>
                  <InversionView id={id} account={account} available={available}/>
              </div>

              <div className="row my-3">

                <div className="col">
                    <ClientView client={client}/>
                </div>

                <div className="col">     
                    <ContactView contact={contact}/>
                </div>

              </div>

              <div className='my-3'>
                <TableItemsView title="Detalle de inversiones:" itemsClose={itemsClose}/>
                <TotalView totalInversion={totalInversion} totalValorAct={totalValorAct} totalProfit={totalProfit} />
              </div>

              <div className='my-3'>
                <ItemsOpenView itemsOpen={itemsOpen}/>
              </div>

              <form onSubmit={event => {
                  event.preventDefault(); 

                  if(indexValue.trim().length < 1) return;
                  if(productValue.trim().length < 1) return;

                  if(isNaN(inversionValue.trim().length < 1)) return;
                  if(isNaN(inversionValue.trim())) return;

                  if(isNaN(quantityValue.trim().length < 1)) return;
                  if(isNaN(quantityValue.trim())) return;

                  if(isNaN(value_nowValue.trim().length < 1)) return;
                  if(isNaN(value_nowValue.trim())) return;

                  if(isNaN(profitValue.trim().length < 1)) return;
                  if(isNaN(profitValue.trim())) return;

                  if(coinValue.trim().length < 1) return;
                  if(unitValue.trim().length < 1) return;

                  setItemsOpen([...itemsOpen, {                                                                                  
                    id : counter,
                    index: indexValue.trim(),
                    product : productValue.trim(),
                    inversion : parseFloat(inversionValue,10),
                    quantity : parseFloat(quantityValue,10),
                    value_now : parseFloat(value_nowValue,10), 
                    profit : parseFloat(profitValue, 10),
                    coin : coinValue.trim(),
                    unit : unitValue.trim() 
                }]);

                setIndexValue('');
                setProductValue('');
                setInversionValue('');
                setQuantityValue('');
                setValue_nowValue('');
                setProfitValue('');
                setCoinValue('');
                setUnitValue('');
                setCounter(counter+1);
              }}>

                <input type="text" name="index" 
                          placeholder="index" 
                          value={indexValue} 
                          className="form-control m-3" 
                          onChange={event => {
                            console.log(event.target.value); 
                            setIndexValue(event.target.value); 
                          }}/>

<               input type="text" name="product" 
                          placeholder="activo" 
                          value={productValue} 
                          className="form-control m-3" 
                          onChange={event => {
                            console.log(event.target.value); 
                            setProductValue(event.target.value); 
                          }}/>

                <input type="text" name="inversion" 
                          placeholder="inversion" 
                          value={inversionValue} 
                          className="form-control m-3" 
                          onChange={event => {
                            console.log(event.target.value); 
                            setInversionValue(event.target.value); 
                          }}/>
                
                <input type="text" name="quantity" 
                          placeholder="cantidad" 
                          value={quantityValue} 
                          className="form-control m-3" 
                          onChange={event => {
                            console.log(event.target.value); 
                            setQuantityValue(event.target.value); 
                          }}/>
                
                <input type="text" name="value_now" 
                          placeholder="valor actual" 
                          value={value_nowValue} 
                          className="form-control m-3" 
                          onChange={event => {
                            console.log(event.target.value); 
                            setValue_nowValue(event.target.value); 
                          }}/>

                <input type="text" name="profit" 
                          placeholder="ganancia" 
                          value={profitValue} 
                          className="form-control m-3" 
                          onChange={event => {
                            console.log(event.target.value); 
                            setProfitValue(event.target.value); 
                          }}/>

                <input type="text" name="coin" 
                          placeholder="moneda" 
                          value={coinValue} 
                          className="form-control m-3" 
                          onChange={event => {
                            console.log(event.target.value); 
                            setCoinValue(event.target.value); 
                          }}/>

                <input type="text" name="unit" 
                          placeholder="unidad" 
                          value={unitValue} 
                          className="form-control m-3" 
                          onChange={event => {
                            console.log(event.target.value); 
                            setUnitValue(event.target.value); 
                          }}/>

                <button type="submit" className="btn btn-primary m-3">Nuevo activo</button>

              </form>

            </div>

        </div>

    </>
  )

}
