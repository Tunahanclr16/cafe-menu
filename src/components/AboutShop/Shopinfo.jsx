import { useState } from "react"
import Modal from "./Modal"

export default function Shopinfo() {
    const [modal,setModal]=useState(false)

    const openModal=()=>{
        setModal(true)
        console.log("açık")
    }
    const closeModal=()=>{
        setModal(false)
    }
  return (
    <div className="border-t border-b border-r border-gray-4   max-w-[1700px] mt-2 mx-auto">
        <div className="flex items-center sm:flex-row flex-col p-4">
        <div className="p-4 ">
        <img className="object-cover w-[400px] h-[250px] rounded" src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/restaurants/8369df07-525b-4817-9b29-fa93fcd15333.png" alt="" />
        </div>
        <div>
            <h3 className=" text-2xl font-bold sm:text-4xl">CAFE</h3>
            <p className="text-base text-gray-600">Kafemizin özellikleri için tıkla</p>
            <button onClick={openModal} className="bg-red-500 px-8 p-3 rounded text-white hover:bg-red-600 transition-all mt-2">
  Hakkımızda
</button>
{modal ? (
  <div>
    <Modal/>
  </div>
) : (
  <div>
    adsdsa
  </div>
)}
        </div>
        </div>
     
    </div>
  )
}
