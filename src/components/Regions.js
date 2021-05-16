import React from 'react'
import ListItem from './ListItem'
import Dates from './Dates'

const Regions = ({ regionNames, regions, enterHandler, leaveHandler, clickHandler, handleDateChange, 
    startDate, endDate, handleEndDateChange, daysBetween }) => {
    const listedRegions = Object.keys(regionNames).map(e => <ListItem key={e} regionName={regionNames[e]} dataAttr={e} regions={regions}
        enterHandler={enterHandler} leaveHandler={leaveHandler} clickHandler={clickHandler} />)
    const style = {
        float: 'left'
    }
    return (
        <div style={style}>
            <Dates startDate={startDate} endDate={endDate} handleStart={handleDateChange} handleEnd={handleEndDateChange} daysBetween={daysBetween} />
            <ul className="region-list">
                {listedRegions}
            </ul>
        </div>
    )
}

export default Regions
