import Regions from './Regions'
import Map from './Map'
import { Col, Container, Row } from 'react-bootstrap';
import CardRayHolder from './CardRayHolder';

const HomeView = ({ regionNames, regionData, coData, chosenRegions, setChosenRegions, handleDateChange, startDate, endDate, handleEndDateChange,
    defaultColor, hoverColor, chosenColor, regions, setRegions }) => {

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
        <Container fluid='xl'>
            <Row>
                <Col>
                    <Regions
                        regionNames={regionNames}
                        regions={regions}
                        enterHandler={handleMouseEnter}
                        leaveHandler={handleMouseLeave}
                        clickHandler={handleMouseClick}
                        startDate={startDate}
                        handleDateChange={handleDateChange}
                        endDate={endDate}
                        handleEndDateChange={handleEndDateChange} />
                </Col>
                <Col>
                    <Map width='450' height='750'
                        regions={regions}
                        enterHandler={handleMouseEnter}
                        leaveHandler={handleMouseLeave}
                        clickHandler={handleMouseClick} />
                </Col>
                <Col>
                    <CardRayHolder 
                        chosenRegions={chosenRegions}
                        regionNames={regionNames}
                        regionData={regionData}
                        coData={coData}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default HomeView