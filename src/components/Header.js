
import { MdOutlineLocationOn, MdOutlineShoppingCartCheckout, MdSearch } from 'react-icons/md'
import { useEffect, useState } from "react"
import AMAZON_LOGO from "../assets/images/amazon1.png"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getInput } from '../utils/headerSlice'


const Header = () => {
    const [location, setLocation] = useState('')
    // const toggle = useSelector(store => store.cart.toggle)
    // const inputData = useSelector(store => store.header.item)
    // console.log("data",inputData)
    const quantity = useSelector(store => store.cart.item.length)
    const dispatch = useDispatch()
    
    useEffect(() => {
        getPosition()
    }, [])

    const getInputValue = (val) => {
        dispatch(getInput(val))
    }


    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position?.coords;
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            const response = await fetch(url)
            const data = await response.json()
            setLocation(data.address)

        })
    }

    return (
        <div>

            <div className="flex w-full bg-slate-800 h-20 items-center text-white px-2 ">
                <Link to="/">
                    <img className="h-12 flex hover:border border-white ml-2 p-1" src={AMAZON_LOGO} alt="amazon logo" />
                </Link>
                <div className="flex  pt-5 hover:border border-white ml-2 p-1">
                    <MdOutlineLocationOn className="h-12 pt-1" />
                    <div className="flex flex-col pl-1">
                        <span className="text-xs">Deliver to rajadurai</span>
                        <span className="text-sm font-bold">{location.county} {location?.postcode}</span>
                    </div>
                </div>
                <div className="ml-4 flex flex-1">
                    <div className="border px-3 bg-gray-300 flex items-center rounded-l-md">
                        <div className="text-gray-500 text-sm">All</div>
                    </div>
                    <input className="py-2 px-1 w-3/5 text-black outline-none placeholder-slate-400 font-semibold" onChange={(e)=>getInputValue(e.target.value)} placeholder="Search Amazon.in" />
                    <div className="border px-3 bg-orange-300 flex items-center rounded-r-md">
                        <MdSearch className="w-7 h-6" alt="search logo" />
                    </div>
                    <div className="flex justify-evenly flex-1">
                        <div className="flex flex-col pl-1">
                            <span className="text-xs">Hello, rajadurai</span>
                            <span className="text-sm font-bold">Accounts & Lists</span>
                        </div>
                        <div className="flex flex-col pl-1">
                            <span className="text-xs">Returns</span>
                            <span className="text-sm font-bold">& orders</span>
                        </div>
                        <div className="flex flex-col pl-1">
                            <span className="text-xs pl-3">{quantity}</span>
                            <Link to="/cart">
                                <div className="flex">
                                    <MdOutlineShoppingCartCheckout className="w-7 h-5 text-white" />
                                    <div className="pl-1 font-bold">Cart</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header 