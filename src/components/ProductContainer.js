import { useEffect, useState } from "react";
import { FAKEAPI } from "./Const";
import Product from './Product'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductContainer = () => {
  const [product, setProduct] = useState([]);
  const getInput = useSelector(store => store.header.item)
  const [searchData,setSearchData] = useState([])
  useEffect(() => {
    products();
  }, []);

  useEffect(() => {
    filterData()
  }, [getInput])
  
  const products = async () => {
    const product = await fetch(FAKEAPI);
    const data = await product.json();
    console.log(data);
    setProduct(data);
    setSearchData(data)
  };


  const filterData = () => {
    const data = searchData.filter(item => item.title.toLowerCase().includes(getInput.toLowerCase()))
    setProduct(data) 
  } 
  


  return (
    <div className="flex flex-wrap justify-center mt-2">
      {
        product.length > 1 && product.map((item) => {
          return (
            <div key={item.id} className="flex w-60 m-2 shadow-lg">
              <Link to={"/productShow/" + item.id}>
                <Product {...item} />
              </Link>
            </div>
          )


        })
      }

    </div>
  );
};
export default ProductContainer;
