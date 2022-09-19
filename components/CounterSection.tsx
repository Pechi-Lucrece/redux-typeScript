import React from "react";
import { useAppSelector } from "../store/hooks/hooks";

export default function CounterSection(){

  const count = useAppSelector((state) => state.counter.value)
    return(
        <div className="flex flex-wrap justify-content-center">
        <div className="border-circle w-6rem h-6rem bg-red-500 text-black flex align-items-center justify-content-center font-bold">
          <p>{count}</p>
          
        </div>
      </div>
    )
}