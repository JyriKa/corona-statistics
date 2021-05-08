import { useHistory } from "react-router-dom";
import CardRay from './CardRay'
import { Button } from 'react-bootstrap'

const CardRayHolder = ({ chosenRegions, regionNames, regionData, coData }) => {
    const history = useHistory()
    if (chosenRegions.length === 0) return <div><p>Valitse maakuntia klikkaamalla nähdäksesi tietoja!</p></div>
    return (
        <div style={{ float: 'right', textAlign: 'center' }}>
            <CardRay
                regions={chosenRegions}
                regionNames={regionNames}
                regionData={regionData}
                coData={coData} />
            <Button onClick={() => { history.push('/kayra') }} variant="outline-dark">Käyränäkymä</Button>
        </div>
    )
}

export default CardRayHolder