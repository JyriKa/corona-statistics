const RegCard = ({ name, data, regData }) => {
    const percentInfected = data.infected / data.population * 100
    const roundedPercentI = Math.round((percentInfected + Number.EPSILON) * 100) / 100
    const percentTested = data.tested / data.population * 100
    const roundedPercentT = Math.round((percentTested + Number.EPSILON) * 100) / 100
    return (
        <div style={{ margin: '10px', padding: '5px', textAlign: 'center', width: '18rem', border: '2px solid blue' }} >
            <b>{name}</b>
            <p>Sairastuneet: {data.infected} | {roundedPercentI}% </p>
            <p>Testatut: {data.tested} | {roundedPercentT}%</p>
            <p>Väkiluku: {data.population} </p>
        </div>
    )
}

export default RegCard