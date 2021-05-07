import axios from 'axios'

const baseUrl = 'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/'

const getRegional = () => {
    const uri = `${baseUrl}hcdTestData`
    const request = axios.get(uri)
    return request.then(response => { return response.data })
}

const getAll = () => {
    const uri = `${baseUrl}processedThlData`
    const request = axios.get(uri)
    return request.then(response => { return response.data })
}

const fecthData = { getRegional, getAll }

export default fecthData
