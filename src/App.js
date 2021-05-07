import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import fetchData from './services/fecthData'
import HomeView from './components/HomeView'
import GraphView from './components/GraphView'


const App = () => {
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

  const [regionData, setRegionData] = useState({})
  const [coData, setCoData] = useState({})
  const [chosenRegions, setChosenRegions] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [daysBetween, setDaysBetween] = useState(0)

  const calculateDaysBetween = (date1, date2) => {
    const timeDiff = date2 - date1
    const dayDiff = timeDiff / (1000 * 3600 * 24)
    return Math.ceil(dayDiff)
  }

  const handleDateChange = (newDate) => {
    const ahvenanmaa = coData.confirmed.Ahvenanmaa
    const startD = Date.parse(ahvenanmaa[0].date)
    if (newDate < startD || newDate > endDate) return
    setStartDate(newDate)
  }

  const handleEndDateChange = (newDate) => {
    const ahvenanmaa = coData.confirmed.Ahvenanmaa
    const endD = Date.parse(ahvenanmaa[ahvenanmaa.length - 1].date)
    if (newDate > endD || newDate < startDate) return
    setEndDate(newDate)
  }

  useEffect(() => {
    fetchData.getRegional().then(data => setRegionData(data))
  }, [])

  useEffect(() => {
    fetchData.getAll().then(data => {
      setCoData(data)
      const ahvenanmaa = data.confirmed.Ahvenanmaa
      const startD = Date.parse(ahvenanmaa[0].date)
      const endD = Date.parse(ahvenanmaa[ahvenanmaa.length - 1].date)
      setStartDate(startD)
      setEndDate(endD)
      const days = calculateDaysBetween(startD, endD)
      setDaysBetween(days)
      console.log(days)
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/kayra">
          <GraphView regionNames={regionNames} 
          coData={coData} 
          chosenRegions={chosenRegions} 
          startDate={startDate} 
          endDate={endDate} 
          calcBetween={calculateDaysBetween} />
        </Route>
        <Route path="/">
          <HomeView
            regionNames={regionNames}
            regionData={regionData}
            coData={coData}
            chosenRegions={chosenRegions}
            setChosenRegions={setChosenRegions}
            handleDateChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            handleEndDateChange={handleEndDateChange}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
