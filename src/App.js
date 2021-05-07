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

  useEffect(() => {
    fetchData.getRegional().then(data => setRegionData(data))
  }, [])

  useEffect(() => {
    fetchData.getAll().then(data => setCoData(data))
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/kayra">
          <GraphView />
        </Route>
        <Route path="/">
          <HomeView regionNames={regionNames} regionData={regionData} coData={coData}
            chosenRegions={chosenRegions} setChosenRegions={setChosenRegions} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
