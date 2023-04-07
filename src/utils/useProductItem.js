import { useEffect, useState } from "react"
import { FAKEAPI, PRODUCT } from "../components/Const"
import { useSelector } from "react-redux"

const useProductItem = (id) => {
    const [getItem, setGetItem] = useState()
    const getInput = useSelector(store => store.header.item)
    useEffect(() => {
        getProductData()
    }, [])

    const getProductData = async () => {
        const data = await fetch(FAKEAPI + id)
        const result = await data.json()
        console.log(result)

        setGetItem(result)
    }
    // let findData = () => {
    //         const data = getItem.filter((item) => {
    //             return item.title.toLowerCase().includes(getInput.toLowerCase())
    //     })
    //         console.log(data)
    //     }

    return { getItem }
}
export default useProductItem