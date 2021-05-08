import { useHistory } from 'react-router-dom';
import LinerChart from './LinerChart'
import Button from 'react-bootstrap/Button'

const GraphView = ({ regionNames, coData, chosenRegions, startDate, endDate, calcBetween }) => {
    const history = useHistory()
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
        const newFormat = {date: fElem.date}
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
            <LinerChart data={formatted} chosenRegions={chosenRegionNames} topValueReg={topValueReg} />
            <Button onClick={() => { history.push('/') }} variant="outline-dark">Aloitusnäkymä</Button>
        </div>
    )
}

export default GraphView
