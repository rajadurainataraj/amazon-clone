import { useParams } from "react-router-dom"
import useProductItem from "../utils/useProductItem"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../utils/cartSlice"
import { useEffect } from "react"



const ProductShow = () => {
    const { id } = useParams()

 
    const { getItem } = useProductItem(id)
    const dispatch = useDispatch()
    const addItemSelector = useSelector(store => store.cart.item)
    
    const addToCart = (getItem) => {
        dispatch(addItem(getItem))
        console.log(addItemSelector.length)
    }
console.log("get data",getItem)
//     useEffect(() => {
//         getItem &&  findData()
// },[getInput])
    
    // const findData = () => {
    //     let data = getItem.filter(item => {
    //        return item.title.toLowerCase().includes(getInput.toLowerCase())
    //     })
    //     console.log(data)
    // }

    return (
        <div className="flex m-5">
            <img src={getItem?.image} alt="single Product" className="w-48 h-64" />
            <div className="m-5 ">
                <div className="font-semibold">{ getItem?.title}</div>
                <div className="mt-3 text-sm ">{getItem?.description}</div>
                <div className="flex mt-3">
                <di className="">❤ {getItem?.rating?.rate}</di>
                <div className="ml-5">₹ {(getItem?.price*70).toFixed(2)}</div>
                </div>
                <div onClick={()=>addToCart(getItem)} className="w-80 mt-5 cursor-pointer py-2 flex justify-center rounded-full bg-yellow-400 font-semibold text-black">Add to Cart</div>
                <div className="w-80 mt-5 cursor-pointer py-2 flex justify-center rounded-full bg-orange-400 font-semibold text-black">Buy Now</div>
                
                
            </div>
            </div>
    )
}
export default ProductShow