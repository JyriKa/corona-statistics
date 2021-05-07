import { LineChart, Line, ResponsiveContainer } from 'recharts';

const LinerChart = ({ }) => {
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 100, pv: 1400, amt: 2100 }, { name: 'Page C', uv: 100, pv: 1400, amt: 2100 }];
    return (
        <ResponsiveContainer width={'100%'} height={500}>
            <LineChart data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LinerChart