import { useState, useEffect } from 'react'
import fetchData from './services/fecthData'
import Regions from './components/Regions'
import Map from './components/Map'
import CardRay from './components/CardRay'

const App = () => {
  const defaultColor = '#fff'
  const hoverColor = '#ff0000'
  const chosenColor = '#990000'
  const regionNames = {
    ahvenanmaa: 'Ahvenanmaa',
    etelaKarjala: 'Etelä-Karjala',
    etelaPohjanmaa: 'Etelä-Pohjanmaa',
    etelaSavo: 'Etelä-Savo',
    kainuu: 'Kainuu',
    kantaHame: 'Kanta-Häme',
    keskiPohjanmaa: 'Keski-Pohjanmaa',
    keskiSuomi: 'Keski-Suomi',
    kymenlaakso: 'Kymenlaakso',
    lappi: 'Lappi',
    pirkanmaa: 'Pirkanmaa',
    pohjanmaa: 'Vaasa',
    pohjoisKarjala: 'Pohjois-Karjala',
    pohjoisPohjanmaa: 'Pohjois-Pohjanmaa',
    pohjoisSavo: 'Pohjois-Savo',
    paijatHame: 'Päijät-Häme',
    satakunta: 'Satakunta',
    uusimaa: 'HUS',
    varsinaisSuomi: 'Varsinais-Suomi'
  }
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

  const [coData, setCoData] = useState({})

  useEffect(() => {
    fetchData.getAll().then(data => setCoData(data))
  }, [])

  const [chosenRegions, setChosenRegions] = useState([])

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

  return (
    <div className="App" >
      <Regions regionNames={regionNames} regions={regions} enterHandler={handleMouseEnter}
        leaveHandler={handleMouseLeave} clickHandler={handleMouseClick} />
      <Map width="800" height="800" regions={regions} enterHandler={handleMouseEnter}
        leaveHandler={handleMouseLeave} clickHandler={handleMouseClick} />
      <CardRay regions={chosenRegions} regionNames={regionNames} coData={coData} />
    </div>
  )
}

export default App
