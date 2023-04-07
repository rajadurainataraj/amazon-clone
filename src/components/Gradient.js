import { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../utils/bodySlice";

const color = [
  "bg-gradient-to-b from-indigo-500 h-96",
  "bg-gradient-to-b from-orange-500 h-96",
  "bg-gradient-to-b from-yellow-500 h-96",
  "bg-gradient-to-b from-blue-500 h-96",
  "bg-gradient-to-b from-pink-500 h-96",

];
const Gradient= () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.body.count);
  console.log(count);

  useEffect(() => {
    
    let timer = setInterval(()=>inc(),4000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  
  const inc = () => {
    dispatch(increment())
  };
  
  const dec = () => {
    dispatch(decrement())
  };

  return (
    <div className="w-full flex item-center justify-between">
      <div className="h-64 w-20 flex items-center m-2 text-9xl text-zinc-700 hover:border border-red-500">
        <MdNavigateBefore
          onClick={() => {
            dec();
          }}
        />
      </div>
      <div className={"w-3/4 h-screen bg-gradient-to-t " + color[count]}>
        Body
      </div>
      <div className="h-64 m-2 w-20 flex items-center  text-9xl text-zinc-700 hover:border border-red-500">
        <MdNavigateNext
          onClick={() => {
            inc();
          }}
        />
      </div>
    </div>
  );
};
export default Gradient;
