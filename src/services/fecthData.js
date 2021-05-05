import axios from 'axios'

const baseUrl = 'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/processedThlData'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => { return response.data })
}

const fecthData = { getAll }

export default fecthData
