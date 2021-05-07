import { useHistory } from 'react-router-dom';
import LinerChart from './LinerChart'

const GraphView = ({ regionNames, coData, chosenRegions, startDate, endDate, calcBetween }) => {
    const history = useHistory()
    const rName = 'Kaikki sairaanhoitopiirit'
    const region = coData.confirmed[rName]
    const startD = Date.parse(region[0].date)
    const dataByDates = region.slice(calcBetween(startD, startDate), calcBetween(startD, endDate))
    return (
        <div>
            <h1>jaajajja</h1>
            <LinerChart data={dataByDates} />
            <button onClick={() => { history.push('/') }}> Aloitusnäkymä </button>
        </div>
    )
}

export default GraphView
