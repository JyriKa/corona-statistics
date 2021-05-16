import { useHistory } from 'react-router-dom';
import LinerChart from './LinerChart'
import Button from 'react-bootstrap/Button'

const GraphView = ({ regionNames, coData, chosenRegions, startDate, endDate, calcBetween }) => {
    const history = useHistory()
    if (chosenRegions.length === 0) {
        return (
            <div>
                <p>Ei valittuja maakuntia! Siirry takaisin karttanäkymään valitaksesi</p>
                <Button onClick={() => { history.push('/') }} variant="outline-dark">Karttanäkymä</Button>
            </div>
        )
    }
    if (coData === undefined) {
        return (
            <div>
                <p>Ladataan tietoja</p>
                <Button onClick={() => { history.push('/') }} variant="outline-dark">Karttanäkymä</Button>
            </div>
        )
    }
    const colors = ['#3DB1B8', '#30913D', '#995833', '#BF9F40', '#323D95', '#66CCB3', '#6B2724', '#6E66CC',
        '#CC7466', '#CBBEE9', '#322311', '#BD6ECF', '#E0DDA3', '#20604B', '#91D175', '#8E2F61', '#111432', '#E0C6A3', '#9FA4DF', '#4463C1']
    const formatted = []
    const chosenRegionNames = chosenRegions.map(elem => regionNames[elem])
    const rName = chosenRegionNames[0]
    const region = coData[rName]
    const startD = Date.parse(region[0].date)
    let startIndex = calcBetween(startD, startDate)
    let topValue = 0
    let topValueReg = chosenRegionNames[0]
    const firstReg = region.slice(startIndex, calcBetween(startD, endDate))
    firstReg.forEach(fElem => {
        const newFormat = { date: fElem.date }
        chosenRegionNames.forEach(elem => {
            const regByIndex = coData[elem][startIndex]
            const regValue = regByIndex.value
            if (regValue > topValue) {
                topValue = regValue
                topValueReg = regByIndex.healthCareDistrict
            }
            newFormat[regByIndex.healthCareDistrict] = regValue
        })
        startIndex++
        formatted.push(newFormat)
    });
    return (
        <div>
            <LinerChart data={formatted} chosenRegions={chosenRegionNames} topValueReg={topValueReg} colors={colors} />
            <Button onClick={() => { history.push('/') }} variant="outline-dark">Karttanäkymä</Button>
        </div>
    )
}

export default GraphView
