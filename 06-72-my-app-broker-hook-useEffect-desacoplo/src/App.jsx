import './App.css'
import { getInversion, calculatetotalInversionOpen, calculatetotalValorActOpen, calculatetotalProfitOpen} from "./service/getInversion";
import { InversionView } from "./components/inversionView";
import { ClientView } from "./components/ClientView";
import { ContactView } from "./components/ContactView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";
import { TotalOpenView } from "./components/TotalOpenView";
import { useEffect, useState } from 'react';
import { ItemsOpenView} from './components/ItemsOpenView';

const inversionInitial = {
  id : 0,
  account : '',
  available : 0,
  client : {
     clientname : '',
      lastname : '',
      address : {
          country : '',
          state: '',
          city : '',
          street : '',
          number : 0,
      },
      profile : '',
      date : '',
      taxid : '',
  },
  contact : {
      phone : '',
      email : ''
  },
  itemsClose : [],
  itemsOpen : []
}


export const App = () => {

  const [totalInversionOpen, setTotalInversionOpen] = useState(0);
  const [totalValorActOpen, setTotalValorActOpen] = useState(0);
  const [totalProfitOpen, setTotalProfitOpen] = useState(0);

  const[counter, setCounter] = useState(6);

  const [inversion, setInversion] = useState(inversionInitial); 

  const[itemsOpen, setItemsOpen] = useState([]); 

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

  const {id, account, available, client, contact, itemsClose, totalInversion, totalValorAct, totalProfit} = inversion;          //, totalInversionOpen, totalValorActOpen, totalProfitOpen
  
  const{index, product, inversionInit, quantity, value_now, profit, coin, unit} = formItemsState;

  useEffect(() => {                                                                               
    const data = getInversion();
    setInversion(data);
    setItemsOpen(data.itemsOpen);
}, []); 

useEffect(() => {   
  setTotalInversionOpen(calculatetotalInversionOpen(itemsOpen));
  setTotalValorActOpen(calculatetotalValorActOpen(itemsOpen)); 
  setTotalProfitOpen(calculatetotalProfitOpen(itemsOpen));                                      
}, [itemsOpen]);  
  

  const onInputChange = ({target: {name, value}}) => {                                                                                         
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

                  setItemsOpen([...itemsOpen, {                                                                                  
                    id : counter,
                    index: index.trim(),
                    product : product.trim(),
                    inversionInit : parseFloat(inversionInit,10),
                    quantity : parseFloat(quantity,10),
                    value_now : parseFloat(value_now,10), 
                    profit : parseFloat(profit, 10),
                    coin : coin.trim(),
                    unit : unit.trim() 
                }]);

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
                setCounter(counter+1);
              }}>

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

            </div>

        </div>

    </>
  )

}
