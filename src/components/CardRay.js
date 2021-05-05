import RegCard from "./RegCard"

const CardRay = ({regions, regionNames, coData}) => {
    const style = {
        float: 'right'
    }
    const cards = regions.map(e => <RegCard key={e} name={regionNames[e]} regData={coData.confirmed[regionNames[e]]} />)
    return (
        <div style={style}>
            {cards}
        </div>
    )
}

export default CardRay