import { inversion } from "../data/inversion"

export const getInversion = () => {

    const totalInversion = inversion.items
            .map(items => items.inversion)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalValorAct = inversion.items
            .map(items => items.value_now)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const totalProfit = inversion.items
            .map(items => items.profit)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    return {...inversion, totalInversion : totalInversion, totalValorAct : totalValorAct, totalProfit : totalProfit};
}