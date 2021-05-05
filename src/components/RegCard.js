const RegCard = ({ name, regData }) => {
    return (
        <div style={{ margin: '10px', padding: '5px', textAlign: 'center', width: '18rem', border: '2px solid blue' }} >
            <b>{name}</b>
            <p>{regData[0].date}</p>
        </div>
    )
}

export default RegCard