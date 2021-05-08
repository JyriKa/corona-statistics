import RegCard from './RegCard'

const CardRay = ({ regions, regionNames, regionData, coData }) => {
    const cards = regions.map(e => <RegCard key={e} name={regionNames[e]} data={regionData[regionNames[e]]} regData={coData.confirmed[regionNames[e]]} />)
    return (
        <div>
            <div style={{overflowY: 'scroll', maxHeight: '80vh'}}>
                {cards}
            </div>
        </div>
    )
}

export default CardRay