import RegCard from './RegCard'

const CardRay = ({ regions, regionNames, regionData, coData, startDate, endDate, calcBetween }) => {
    const cards = regions.map(e => {
    return <RegCard key={e} name={regionNames[e]} data={regionData[regionNames[e]]} regData={coData} /> })
    return (
        <div>
            <div style={{overflowY: 'scroll', maxHeight: '80vh'}}>
                {cards}
            </div>
        </div>
    )
}

export default CardRay