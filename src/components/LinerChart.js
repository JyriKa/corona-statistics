import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Label, CartesianGrid, Line, ResponsiveContainer } from 'recharts'
import moment from 'moment'
import 'moment/locale/fi'

const LinerChart = ({ data }) => {
    return (
        <ResponsiveContainer width={'99%'} height={500}>
            <LineChart width={400} height={400} data={data}>
                <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                <XAxis 
                    dataKey='date'
                    tickFormatter={(dateTime) => moment(Date.parse(dateTime)).format('MMM-DD')} ></XAxis>
                <YAxis
                    dataKey='value'
                ></YAxis>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer >
    )
}

export default LinerChart