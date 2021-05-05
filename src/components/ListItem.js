import React from 'react'

const ListItem = ({regionName, regions, dataAttr, enterHandler, leaveHandler, clickHandler}) => {
    return (
        <li onMouseEnter={enterHandler} onMouseOutCapture={leaveHandler}
            onClick={clickHandler} data-region={dataAttr} style={{ background: regions[dataAttr] }} >
            {regionName}
        </li>
    )
}

export default ListItem