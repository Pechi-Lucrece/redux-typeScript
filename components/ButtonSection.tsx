import { Button } from 'primereact/button'
import React from 'react'
import { useAppDispatch } from '../store/hooks/hooks'
import { useAppSelector } from '../store/hooks/hooks'
import { add , multiplication, substract} from '../features/counter-slice'
import { useNameFetchQuery } from '../features/api-slice'
import { callHello } from '../features/setpage-slice'

export default function ButtonSection() {

   const dispatchOperation = useAppDispatch()
   const count = useAppSelector((state) => state.counter.value)

    function addition() {
       dispatchOperation(add())
      }
    
      function minus() {
        count == 0 ? count : dispatchOperation(substract()) 
      }
    
      function multiply() {
        dispatchOperation(multiplication(5))
      }

      const handlegetname = () => {
        dispatchOperation(callHello("hello"))
      }
    
    return(
      <>
        <div className={"flex-1 flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3 border-round"}>
          <Button label="Decrement" icon="pi pi-minus" iconPos="right" className="p-button-success m-2" onClick={minus} />
          <Button label="Multiply" icon="pi pi-times" iconPos="right"  className="p-button-info m-2" onClick={multiply} />
          <Button label="Increment" icon="pi pi-plus" iconPos="right" className="p-button-success m-2" onClick={addition} /> 
        </div>
        <Button label='Get name' onClick={handlegetname} />
      </>

    )
}