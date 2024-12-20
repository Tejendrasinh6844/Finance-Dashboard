import { ResponsiveContainer, LineChart, CartesianGrid, YAxis, XAxis, Legend, Line } from "recharts"
import Title from "./title"

const data = [
  {lable:"January", income:5000, expense:3000},
  {lable:"February", income:5200, expense:3200},
  {lable:"March", income:5500, expense:3500},
  {lable:"April", income:4800, expense:2900},
  {lable:"May", income:5100, expense:3100},
  {lable:"June", income:5300, expense:3300},
  {lable:"July", income:5400, expense:3400},
  {lable:"August", income:5600, expense:3600},
  {lable:"September", income:5700, expense:3700},
  {lable:"October", income:5900, expense:3900},
  {lable:"November", income:6000, expense:4000},
  {lable:"December", income:6100, expense:4100},
]

const Chart = () => {
  return (
    <div className="w-full md:w-2/3">
      <Title title="Transaction activity" />

      <ResponsiveContainer
      width={"100%"}
      height={500}
      className=" mt-5">
      <LineChart height={300} width={500} data={data}>
        <CartesianGrid strokeDasharray='3 3'/>
        <YAxis/>
        <XAxis/>
        <Legend/>
        <Line type="monotone" dataKey={"income"} stroke="#8884d8"/>
        <Line type="monotone" dataKey={"expense"} stroke="#82ca9d"/>
      </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

export default Chart