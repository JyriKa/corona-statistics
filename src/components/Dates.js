import PickDate from './PickDate'

const Dates = ({ startDate, endDate, handleStart, handleEnd, daysBetween }) => {
    return (
        <div>
            <PickDate style={{float: 'left'}} label='Aloituspäivämäärä' handleDateChange={handleStart} startDate={startDate} />
            <PickDate style={{float: 'right'}} label='Lopetuspäivämäärä' handleDateChange={handleEnd} startDate={endDate} />
            <b>Päiviä valittu: {daysBetween}</b>
        </div>
    )
}

export default Dates
