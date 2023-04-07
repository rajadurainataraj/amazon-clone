import { MdAccountCircle, MdClose, MdDensityMedium, MdKeyboardArrowDown, MdNavigateNext, MdOutlineLocationOn, MdOutlineShoppingCartCheckout, MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { hideMenu, showMenu } from '../utils/cartSlice'

const NavItems = () => {
    const dispatch = useDispatch()
    const menu = useSelector(store => store.cart.toggle)

    const toggleMenu = () => {
        dispatch(hideMenu())
    }
  
    if (!menu) return

    return (

        <div className='absolute flex top-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]' onClick={()=>toggleMenu()}>
            <div className='bg-white w-96 '>
                <div className="font-bold flex w-full py-4 pl-6 text-1xl  text-white bg-slate-800 ">
                    <MdAccountCircle className="text-3xl mr-1" />   Hello, rajadurai
                </div>
                <div className="pl-6 overflow-y-scroll h-screen ">
                    <div className="h-48 flex flex-col justify-evenly">
                        <div className="font-bold text-[20px] text-gray-800">Trending</div>
                        <div >Best Sellers</div>
                        <div>New Releases</div>
                        <div className=" border-b border-b-slate-500 pb-4 ">Movers and Shakers</div>
                    </div>
                    <div className="flex flex-col h-[22.5rem]  justify-evenly">
                        <div className="font-bold text-[20px] text-gray-800">Digital Content And Devices</div>
                        <div >Amazon miniTV-FREE Entertainment</div>
                        <div className="flex items-center justify-between ">
                            <div>Echo & Alexa</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Fire TV</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Kindle E-Readers & eBooks</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Audible Audiobooks</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Amazon Prime Video</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between border-b border-b-slate-500 pb-4">
                            <div>Amazon Prime Music</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                    </div>
                    <div className="flex flex-col h-72  justify-evenly">
                        <div className="font-bold text-[20px] text-gray-800">Shop By Category</div>

                        <div className="flex items-center justify-between ">
                            <div>Mobiles, Computers</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>TV, Appliances, Electronics</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Men's Fashion</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Women's Fashion</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center border-b border-b-slate-500 pb-4">
                            <div>See All</div>
                            <MdKeyboardArrowDown className="text-3xl text-gray-500 " />
                        </div>
                    </div>
                    <div className="flex flex-col h-48  justify-evenly">
                        <div className="font-bold text-[20px] text-gray-800">Programs & Features</div>

                        <div className="flex items-center justify-between ">
                            <div>Gift Cards & Mobile Recharges</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Flight Tickets</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between border-b border-b-slate-500 pb-4">
                            <div>Clearance store</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                    </div>
                    <div className="flex flex-col h-44  justify-evenly">
                        <div className="font-bold text-[20px] text-gray-800">Help & Settings</div>

                        <div className="flex items-center justify-between ">
                            <div>Your Account</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Customer Service</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between pb-4">
                            <div>Sign Out</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                    </div>
                    <div className="flex flex-col h-44  justify-evenly">
                        <div className="font-bold text-[20px] text-gray-800">Help & Settings</div>

                        <div className="flex items-center justify-between ">
                            <div>Your Account</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div>Customer Service</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                        <div className="flex items-center justify-between pb-4">
                            <div>Sign Out</div>
                            <MdNavigateNext className="text-3xl text-gray-500 " />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white flex items-center h-16 text-3xl cursor-pointer' onClick={() => toggleMenu()} ><MdClose /></div>

        </div>
    )
}
export default NavItems