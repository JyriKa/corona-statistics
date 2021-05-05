import React from 'react'
import ListItem from './ListItem'

const Regions = ({ regionNames, regions, enterHandler, leaveHandler, clickHandler }) => {
    const listedRegions = Object.keys(regionNames).map(e => <ListItem key={e} regionName={regionNames[e]} dataAttr={e} regions={regions}
        enterHandler={enterHandler} leaveHandler={leaveHandler} clickHandler={clickHandler} />)
    const style = {
        float: 'left'
    }
    return (
        <div style={style}>
            <ul className="region-list">
                {listedRegions}
            </ul>
        </div>
    )
}

export default Regions
