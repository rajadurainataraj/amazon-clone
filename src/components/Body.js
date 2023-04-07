import { Outlet } from "react-router-dom";
import ProductContainer from "./ProductContainer";




const Body = () => {
  return (
    <div>
      {/* body */}
      {/* <ProductContainer/> */}
      <Outlet/>
    </div>
  );
};
export default Body;
