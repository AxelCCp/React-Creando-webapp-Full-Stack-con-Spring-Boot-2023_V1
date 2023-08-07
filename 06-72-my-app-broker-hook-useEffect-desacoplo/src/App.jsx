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
import { FormItemsView} from './components/FormItemsView';

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

  const[activeForm, setActiveForm] = useState(false);   

  const [totalInversionOpen, setTotalInversionOpen] = useState(0);
  const [totalValorActOpen, setTotalValorActOpen] = useState(0);
  const [totalProfitOpen, setTotalProfitOpen] = useState(0);

  const[counter, setCounter] = useState(6);

  const [inversion, setInversion] = useState(inversionInitial); 

  const[itemsOpen, setItemsOpen] = useState([]); 

  const {id, account, available, client, contact, itemsClose, totalInversion, totalValorAct, totalProfit} = inversion;          //, totalInversionOpen, totalValorActOpen, totalProfitOpen
  

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
  


//---
const handlerAddItems = ({index, product, inversionInit, quantity, value_now, profit, coin, unit}) => {                                                                                                   
  setItemsOpen([...itemsOpen, {                                                                                                                    
      id:counter, 
      index: index.trim(),
      product: product.trim(),                                                                                                          
      inversionInit: parseInt(inversionInit, 10), 
      quantity: parseInt(quantity, 10),
      value_now: parseInt(value_now, 10),
      profit: parseInt(profit, 10),
      coin: coin.trim(),
      unit: unit.trim()
  }]);                                                                                                                                    
  setCounter(counter+1);
}


const handlerDeleteitem = (id) => {
  setItemsOpen(itemsOpen.filter(itemsOpen => itemsOpen.id !== id))
}

const onActiveForm = () => {
  setActiveForm(!activeForm);
}
//---

  


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
                <ItemsOpenView itemsOpen={itemsOpen} handlerDeleteitem={id => handlerDeleteitem(id)}/>
                <TotalOpenView totalInversionOpen={totalInversionOpen} totalValorActOpen={totalValorActOpen} totalProfitOpen={totalProfitOpen} />
              </div>

              <button className="btn btn-secondary" onClick={onActiveForm}>{ !activeForm ? 'Agregar activo' : 'Ocultar formulario' }</button>

              { !activeForm ? '' : <FormItemsView handler={(newItem) => handlerAddItems(newItem)} /> }

            </div>

        </div>

    </>
  )

}
