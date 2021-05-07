import PickDate from './PickDate'

const Dates = ({ startDate, endDate, handleStart, handleEnd }) => {
    return (
        <div>
            <PickDate style={{float: 'left'}} label='Aloituspäivämäärä' handleDateChange={handleStart} startDate={startDate} />
            <PickDate style={{float: 'right'}} label='Lopetuspäivämäärä' handleDateChange={handleEnd} startDate={endDate} />
        </div>
    )
}

export default Dates
