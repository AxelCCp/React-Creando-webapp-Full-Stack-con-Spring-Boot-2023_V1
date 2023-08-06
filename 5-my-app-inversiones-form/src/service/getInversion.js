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

    return {...inversion, totalInversion : totalInversion, totalValorAct : totalValorAct, totalProfit : totalProfit};
}