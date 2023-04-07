import { useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeItem } from "../utils/cartSlice"
import { MdDelete } from "react-icons/md"

const CartItem = ({ quantity, image, title, price, rating, id, rate }) => {
    const dispatch = useDispatch()

    const addItemCart = (id) => {
        dispatch(increaseQuantity(id))
        console.log(quantity)
    }

    const decreaseItemCart = (id) => {
    dispatch(quantity===1 ? removeItem(id) : decreaseQuantity(id) )
    }

    const removeProduct = (id) => {
        dispatch(removeItem(id))
    }
    return (
        <div className="w-full flex">

            <div className="border-b border-gray-400 py-5 flex w-full">
                <img alt="product images" src={image} className="w-28 h-32" />
                <div className="w-2/3 h-32 ml-4 flex-col items-center justify-center">
                    <div className="font-semibold  flex w-full justify-between ">
                        <div> {title}</div>
                    </div>
                    <div className="mt-3 flex justify-between w-98">
                        <div> ❤ {rating?.rate}</div>
                        <div className="font-semibold "> ₹ {(price * 70).toFixed(2)}</div>
                    </div>
                    <div className="flex">
                    <div className="flex w-52 mt-3 py-1 bg-yellow-200 text-black rounded-full  justify-around">
                        <div className="cursor-pointer" onClick={()=>decreaseItemCart(id)}>-</div>
                        <div>{quantity}</div>
                        <div className="cursor-pointer" onClick={() => addItemCart(id)}>+</div>
                        </div>
                        <div onClick={()=>removeProduct(id)} className="flex cursor-pointer items-center pt-2 text-red-500 ml-2"><MdDelete/> <span className="text-gray-500">delete</span></div>
                        </div>
                    <div className="flex ml-4">
                     
                        </div>
                </div>
              
            </div>

        </div>

    )
}
export default CartItem