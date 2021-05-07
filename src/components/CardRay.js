import RegCard from './RegCard'
import Dates from './Dates'

const CardRay = ({ regions, regionNames, regionData, coData, handleDateChange, startDate, endDate, handleEndDateChange }) => {
    const style = {
        float: 'right'
    }
    const cards = regions.map(e => <RegCard key={e} name={regionNames[e]} data={regionData[regionNames[e]]} regData={coData.confirmed[regionNames[e]]} />)
    return (
        <div style={style}>
            <div style={{overflowY: 'scroll', maxHeight: '80vh'}}>
                {cards}
            </div>
            <Dates startDate={startDate} endDate={endDate} handleStart={handleDateChange} handleEnd={handleEndDateChange} />
        </div>
    )
}

export default CardRay