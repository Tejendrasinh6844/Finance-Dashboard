import { RiProgress3Line } from "react-icons/ri"
import Title from "./title"
import { IoCheckmarkDoneCircle } from "react-icons/io5"
import { TiWarning } from "react-icons/ti"
const data = [
  {
    date:"2024-04-08",
    name:"Online Shopping",
    contact:"7226866844",
    status:"Completed",
    source:"Credit Card",
    amount:180
  },
  {
    date:"2024-04-08",
    name:"Online Shopping",
    contact:"7226866844",
    status:"Pending",
    source:"Credit Card",
    amount:180
  },
  {
    date:"2024-04-08",
    name:"Online Shopping",
    contact:"7226866844",
    status:"Rejected",
    source:"Credit Card",
    amount:180
  },
]

const Transactions = () => {
  return (
    <div className=" py-20 w-full md:w-2/3">
      <Title title="Latest Transactions" />

      <div className=" overflow-x-auto mt-5">
        <table className=" w-full">
          <thead className=" w-full border-b border-gray-300 dark:border-gray-700">
            <tr className=" w-full text-black dark:text-gray-400 text-left">
              <th className=" py-2">Date</th>
              <th className=" py-2">Name</th>
              <th className=" py-2">Status</th>
              <th className=" py-2">Source</th>
              <th className=" py-2">Amount</th>

            </tr>

          </thead>
          <tbody>
            {
              data.map((item,index)=>(
                <tr key={index} className=" border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-500 hover:bg-gray-300/10">
                   <td className=" py-2 px-2">{item.date}</td>
                   <td className=" py-2 px-2">{
                     <div>
                      <p className=" font-medium text-lg text-black dark:text-gray-400">{item.name}</p>
                      <span className=" text-sm text-gray-600">{item.contact}</span>
                    </div>
                    }</td>
                    <td className=" py-2 px-2 flex items-center gap-2">
                      {item.status === "Pending" && <RiProgress3Line className=" text-amber-600" size={22}/>}
                      {item.status === "Completed" && <IoCheckmarkDoneCircle className=" text-emerald-600" size={22}/>}
                      {item.status === "Rejected" && <TiWarning className=" text-red-600" size={22}/>}

                    <span>{item.status}</span> 
                    </td>
                    <td className=" py-2 px-2">{item.source}</td>
                    <td className=" py-2 px-2 text-black dark:text-gray-400 text-base md:text-lg font-medium">${item.amount}.00</td>


                </tr>

              ))
            }
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default Transactions