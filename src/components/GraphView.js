import { useHistory } from 'react-router-dom';
import LinerChart from './LinerChart'

const GraphView = ({ }) => {
    const history = useHistory()
    return (
        <div>
            <h1>jaajajja</h1>
            <LinerChart />
            <button onClick={() => { history.push('/') }}> Aloitusnäkymä </button>
        </div>
    )
}

export default GraphView
