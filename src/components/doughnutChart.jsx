import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import Title from "./title"

const data = [
  {name:"income", value:15500 },
  {name:"expense", value:4500 },
]

const COLORS = ["#0088fe","#ffbb28","#ff8042","#00c49f"]

const DoughnutChart = () => {
  return (
    <div className=" w-full md:w-1/3 flex flex-col items-center bg-gray-50 dark:bg-transparent">
      <Title title="Summary"/>

      <ResponsiveContainer height={500} width={"100%"}>
        <PieChart width={500} height={400}>
          <Tooltip/>
          <Legend/>
          <Pie data={data} innerRadius={110} outerRadius={180} fill="#8884d8" paddingAngle={5} dataKey={"value"}>
{
  data.map((entry,index)=>(
   <Cell key={ "cell" + index} fill={COLORS[index % COLORS.length]} />
  ))
}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DoughnutChart