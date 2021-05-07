import { useState } from 'react'
import { useHistory } from "react-router-dom";
import Regions from './Regions'
import Map from './Map'
import CardRay from './CardRay'

const HomeView = ({ regionNames, regionData, coData, chosenRegions, setChosenRegions }) => {
    const history = useHistory()
    const defaultColor = '#fff'
    const hoverColor = '#ff0000'
    const chosenColor = '#990000'

    const [regions, setRegions] = useState({
        ahvenanmaa: defaultColor,
        etelaKarjala: defaultColor,
        etelaPohjanmaa: defaultColor,
        etelaSavo: defaultColor,
        kainuu: defaultColor,
        kantaHame: defaultColor,
        keskiPohjanmaa: defaultColor,
        keskiSuomi: defaultColor,
        kymenlaakso: defaultColor,
        lappi: defaultColor,
        pirkanmaa: defaultColor,
        pohjanmaa: defaultColor,
        pohjoisKarjala: defaultColor,
        pohjoisPohjanmaa: defaultColor,
        pohjoisSavo: defaultColor,
        paijatHame: defaultColor,
        satakunta: defaultColor,
        uusimaa: defaultColor,
        varsinaisSuomi: defaultColor
    })

    const getRegionId = (event) => {
        const id = event.target.id
        if (id !== '') return id
        const dataAttr = event.target.getAttribute('data-region')
        if (dataAttr !== '') return dataAttr
        return ''
    }

    const changeRegionColor = (regId, color) => {
        const newRegions = Object.assign({}, regions)
        newRegions[regId] = color
        setRegions(newRegions)
    }

    const handleMouseClick = (event) => {
        const regId = getRegionId(event)
        if (regions[regId] === chosenColor) {
            changeRegionColor(regId, hoverColor)
            const newChosen = chosenRegions.filter(e => e !== regId)
            setChosenRegions(newChosen)
        }
        else if (regions[regId] !== chosenColor) {
            changeRegionColor(regId, chosenColor)
            setChosenRegions(chosenRegions.concat(regId))
        }
    }

    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        console.log(newDate)
        setStartDate(newDate)
    }

    const [endDate, setEndDate] = useState(new Date());

    const handleEndDateChange = (newDate) => {
        setEndDate(newDate)
    }

    const handleMouseEnter = (event) => {
        const regId = getRegionId(event)
        if (regions[regId] === chosenColor) return
        else {
            changeRegionColor(regId, hoverColor)
        }
    }

    const handleMouseLeave = (event) => {
        const regId = getRegionId(event)
        if (regions[regId] === chosenColor) return
        else {
            changeRegionColor(regId, defaultColor)
        }
    }

    return (
        <div>
            <Regions regionNames={regionNames} regions={regions} enterHandler={handleMouseEnter}
                leaveHandler={handleMouseLeave} clickHandler={handleMouseClick} />
            <Map width='750' height='750' regions={regions} enterHandler={handleMouseEnter}
                leaveHandler={handleMouseLeave} clickHandler={handleMouseClick} />
            <CardRay regions={chosenRegions} regionNames={regionNames} regionData={regionData} coData={coData}
                startDate={startDate} handleDateChange={handleDateChange} endDate={endDate} handleEndDateChange={handleEndDateChange} />
            <div>
                <button onClick={() => { history.push('/kayra') }}>KÄYRÄ NÄKYMÄ</button>
            </div>
        </div>
    )
}

export default HomeView