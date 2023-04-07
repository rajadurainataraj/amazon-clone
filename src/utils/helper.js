import { useDispatch, useSelector } from "react-redux";
import { increment } from "./bodySlice";



export const Inc = () => {

    const dispatch = useDispatch()
    const inc1 = () => {
        dispatch(increment())
    }
return <div>hello</div>   

}

