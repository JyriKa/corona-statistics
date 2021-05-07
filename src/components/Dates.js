import PickDate from './PickDate'

const Dates = ({ startDate, endDate, handleStart, handleEnd }) => {
    return (
        <div>
            <PickDate label='Aloituspäivämäärä' handleDateChange={handleStart} startDate={startDate} />
            <PickDate label='Lopetuspäivämäärä' handleDateChange={handleEnd} startDate={endDate} />
        </div>
    )
}

export default Dates
