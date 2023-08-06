import { inversion } from "../data/inversion"

export const getInversion = () => {

        const totalInversion = inversion.itemsClose
        .map(itemsClose => itemsClose.inversionInit)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        const totalValorAct = inversion.itemsClose
        .map(itemsClose => itemsClose.value_now)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        const totalProfit = inversion.itemsClose
        .map(itemsClose => itemsClose.profit)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        const totalInversionOpen = calculatetotalInversionOpen(inversion.itemsOpen);
        
        const totalValorActOpen = calculatetotalValorActOpen(inversion.itemsOpen);

        const totalProfitOpen = calculatetotalProfitOpen(inversion.itemsOpen)


    return {...inversion, totalInversion : totalInversion, totalValorAct : totalValorAct, totalProfit : totalProfit, totalInversionOpen : totalInversionOpen, totalValorActOpen : totalValorActOpen, totalProfitOpen : totalProfitOpen};
}


export const calculatetotalInversionOpen = (itemsOpen=[]) => {
        return itemsOpen
            .map(itemsOpen => itemsOpen.inversionInit)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

export const calculatetotalValorActOpen = (itemsOpen=[]) => {
        return itemsOpen
                .map(itemsOpen => itemsOpen.value_now)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

export const calculatetotalProfitOpen = (itemsOpen=[]) => {
        return itemsOpen
                .map(itemsOpen => itemsOpen.profit)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}


/*
  const totalInversion = inversion.itemsClose
            .map(itemsClose => itemsClose.inversionInit)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalValorAct = inversion.itemsClose
            .map(itemsClose => itemsClose.value_now)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalProfit = inversion.itemsClose
            .map(itemsClose => itemsClose.profit)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        //-------

    const totalInversionOpen = inversion.itemsOpen
            .map(itemsOpen => itemsOpen.inversionInit)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalValorActOpen = inversion.itemsOpen
            .map(itemsOpen => itemsOpen.value_now)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalProfitOpen = inversion.itemsOpen
            .map(itemsOpen => itemsOpen.profit)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

*/