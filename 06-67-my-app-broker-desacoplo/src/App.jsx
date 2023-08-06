import './App.css'
import { getInversion} from "./service/getInversion";
import { InversionView } from "./components/inversionView";
import { ClientView } from "./components/ClientView";
import { ContactView } from "./components/ContactView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";
import { TotalOpenView } from "./components/TotalOpenView";
import { useState } from 'react';
import { ItemsOpenView} from './components/ItemsOpenView';

export const App = () => {

  const {id, account, available, client, contact, itemsClose, totalInversion, totalValorAct, totalProfit, totalInversionOpen, totalValorActOpen, totalProfitOpen, itemsOpen : itemsOpenInitial} = getInversion();

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

  const {index, product, inversion, quantity, value_now, profit, coin, unit} = formItemsState;
  const[itemsOpen, setItemsOpen] = useState(itemsOpenInitial);
  const[counter, setCounter] = useState(6);

  const onInputChange = ({target: {name, value}}) => {                                                                                         
        console.log(name); 
        console.log(value); 
        setFormItemsState({
            ...formItemsState,
            [name] : value                                                                                                                      
        }); 
    }


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
                <TotalOpenView totalInversionOpen={totalInversionOpen} totalValorActOpen={totalValorActOpen} totalProfitOpen={totalProfitOpen} />
              </div>

              <form onSubmit={event => {
                  event.preventDefault(); 

                  if(index.trim().length < 1) return;
                  if(product.trim().length < 1) return;

                  if(isNaN(inversion.trim().length < 1)) return;
                  if(isNaN(inversion.trim())) return;

                  if(isNaN(quantity.trim().length < 1)) return;
                  if(isNaN(quantity.trim())) return;

                  if(isNaN(value_now.trim().length < 1)) return;
                  if(isNaN(value_now.trim())) return;

                  if(isNaN(profit.trim().length < 1)) return;
                  if(isNaN(profit.trim())) return;

                  if(coin.trim().length < 1) return;
                  if(unit.trim().length < 1) return;

                  setItemsOpen([...itemsOpen, {                                                                                  
                    id : counter,
                    index: index.trim(),
                    product : product.trim(),
                    inversion : parseFloat(inversion,10),
                    quantity : parseFloat(quantity,10),
                    value_now : parseFloat(value_now,10), 
                    profit : parseFloat(profit, 10),
                    coin : coin.trim(),
                    unit : unit.trim() 
                }]);

                setFormItemsState({
                  index: '',                                                                              
                  product: '',
                  inversion: '',
                  quantity: '',
                  value_now: '',
                  profit: '',
                  coin: '',
                  unit: '',
              });
                setCounter(counter+1);
              }}>

                <input type="text" name="index" 
                          placeholder="index" 
                          value={index} 
                          className="form-control m-3" 
                          onChange={event => onInputChange(event)}/>

<               input type="text" name="product" 
                          placeholder="activo" 
                          value={product} 
                          className="form-control m-3" 
                          onChange={event => onInputChange(event)}/>

                <input type="text" name="inversion" 
                          placeholder="inversion" 
                          value={inversion} 
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

            </div>

        </div>

    </>
  )

}
