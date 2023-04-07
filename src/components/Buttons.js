import { useState } from "react"
import { MdDensityMedium } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { showMenu } from "../utils/cartSlice"

const buttons=["Fresh","Amazon miniTV","Sell","Buy Again","Gift Ideas","Health, Household & Personal Care"]
const Buttons = () => {
    
    const dispatch = useDispatch()
    // const menu = useSelector(store => store.cart.toggle)
    // console.log(menu)
    
    const toggleMenu = () => {
        dispatch(showMenu())
    }
 
    return (
        <div className="flex items-center bg-slate-600 text-white  px-2 py-2" >
        <MdDensityMedium className="w-8 h-6 pr-1 text-white cursor-pointer" alt="menu items" onClick={() => toggleMenu()}  />
        <div className="font-bold cursor-pointer" >All</div>
        <div className="flex justify-between flex-1">
          
                <div className="flex">
                {
                    buttons.map((item,i) => {
                        return <div key={i} onClick={()=>toggleMenu()} className="pl-4">{item}</div>
                  })  
                }
           
            </div>
            <div>New Launches from Mobiles,Electronics & More | Shop now</div>
        </div>
    </div>
    )
}
export default Buttons