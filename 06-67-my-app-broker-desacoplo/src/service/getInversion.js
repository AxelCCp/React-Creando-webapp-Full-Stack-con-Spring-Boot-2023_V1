import { inversion } from "../data/inversion"

export const getInversion = () => {

    const totalInversion = inversion.itemsClose
            .map(itemsClose => itemsClose.inversion)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalValorAct = inversion.itemsClose
            .map(itemsClose => itemsClose.value_now)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalProfit = inversion.itemsClose
            .map(itemsClose => itemsClose.profit)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalInversionOpen = inversion.itemsOpen
            .map(itemsOpen => itemsOpen.inversion)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalValorActOpen = inversion.itemsOpen
            .map(itemsOpen => itemsOpen.value_now)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalProfitOpen = inversion.itemsOpen
            .map(itemsOpen => itemsOpen.profit)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)


    return {...inversion, totalInversion : totalInversion, totalValorAct : totalValorAct, totalProfit : totalProfit, totalInversionOpen : totalInversionOpen, totalValorActOpen : totalValorActOpen, totalProfitOpen : totalProfitOpen};
}