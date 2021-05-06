import RegCard from './RegCard'
import PickDate from './PickDate'

const CardRay = ({ regions, regionNames, coData, handleDateChange, startDate, endDate, handleEndDateChange }) => {
    const style = {
        float: 'right'
    }
    const cards = regions.map(e => <RegCard key={e} name={regionNames[e]} regData={coData.confirmed[regionNames[e]]} />)
    return (
        <div style={style}>
            <div>
                {cards}
            </div>
            <PickDate label='Aloituspäivämäärä' handleDateChange={handleDateChange} startDate={startDate} />
            <PickDate label='Lopetuspäivämäärä' handleDateChange={handleEndDateChange} startDate={endDate} />
        </div>
    )
}

export default CardRay