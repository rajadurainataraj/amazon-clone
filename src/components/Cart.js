import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.item)
    console.log(cartItems)
    const totalPrice = cartItems.reduce((previous, current) => previous + (current.price * current.quantity), 0)
    const totalQuantity = cartItems.reduce((previous, current) => previous + current.quantity, 0)

    return (
        <div className="m-4">
            <div className="py-5  flex border-b border-gray-500">
                {
                    totalQuantity !== 0 ?
                        <div className="text-3xl">Shopping Cart</div>
                        : <div className="text-3xl">Your Amazon Cart is empty.</div>
                }


                <div className="ml-[26rem] flex items-end text-gray-400 text-xl ">price</div>
            </div>
            <div className="flex">
                <div className="w-4/6 shadow-lg">
                    {
                        cartItems.map((item, i) => <CartItem key={i} {...item} />)
                    }
                </div>
                {totalQuantity !== 0 &&
                    <div className="flex-col mx-auto">
                        <div className="font-semibold py-4 text-2xl">SubTotal({totalQuantity} items):₹{(totalPrice * 70).toFixed(2)}</div>
                        <div className="bg-yellow-200 rounded-full mt-3 text-black w-64 text-center py-1 px-2">Proceed to Buy ({totalQuantity} items)</div>
                    </div>
                }
            </div>
            <div className="font-semibold text-right w-2/3 pt-3 text-2xl">SubTotal({totalQuantity} items):₹{(totalPrice * 70).toFixed(2)}</div>
        </div>
    )
}
export default Cart