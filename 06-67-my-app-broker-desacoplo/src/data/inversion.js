export const inversion = {
    id : 1,
    account : '2636724',
    available : 57000,
    client : {
       clientname : 'Majin',
        lastname : 'Boo',
        address : {
            country : 'USA',
            state: 'California',
            city : 'Huntington beach',
            street : 'Beach boulevard',
            number : 77,
        },
        profile : 'conservador',
        date : '30-07-2023',
        taxid : '12.134.465-2',
    },
    contact : {
        phone : '180236464',
        email : 'majin@boo.jp'
    },
    itemsClose : [
        {
            id : 1,
            index: 'BIT',
            product : 'Bitcoin',
            inversion : 1000,
            quantity : 0.17,
            value_now : 1400, 
            profit : 400,
            coin : 'US$',
            unit :'bit'    
        },
        {
            id : 2,
            index: 'ETH',
            product : 'Ethereum',
            inversion : 1500,
            quantity : 2.0,
            value_now : 1400, 
            profit : 400,
            coin : 'US$',
            unit : 'eth'   
        },
        {
            id : 3,
            index: 'GLDM',
            product : 'Gold',
            inversion : 2000,
            quantity : 0.2,
            value_now : 3000, 
            profit : 1000,
            coin : 'US$',
            unit : 'gr'     
        }
    ],
    itemsOpen : [
        {
            id : 4,
            index: 'PLT',
            product : 'Plate',
            inversion : 500,
            quantity : 500,
            value_now : 400, 
            profit : -100,
            coin : 'US$',
            unit : 'gr' 
        },
        {
            id : 5,
            index: 'PLTN',
            product : 'Platino',
            inversion : 900,
            quantity : 300,
            value_now : 950, 
            profit : 50,
            coin : 'US$',
            unit : 'gr' 
        }
    ]
}