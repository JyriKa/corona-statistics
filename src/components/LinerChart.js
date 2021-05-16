import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line, ResponsiveContainer } from 'recharts'
import moment from 'moment'
import 'moment/locale/fi'

const LinerChart = ({ data, chosenRegions, topValueReg }) => {
    console.log(data)
    const lines = chosenRegions.map(elem => {
        return <Line key={elem} type="monotone" dataKey={elem} stroke="#3ef04a" />
    })
    return (
        <ResponsiveContainer width={'99%'} height={500}>
            <LineChart data={data}>
                <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                <XAxis
                    dataKey='date'
                    tickFormatter={(dateTime) => moment(Date.parse(dateTime)).format('MMM-DD')} ></XAxis>
                <YAxis
                    dataKey={chosenRegions[topValueReg]}
                ></YAxis>
                <Tooltip />
                <Legend />
                {lines}
            </LineChart>
        </ResponsiveContainer >
    )
}

export default LinerChart