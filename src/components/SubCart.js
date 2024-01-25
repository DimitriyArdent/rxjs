import React,{useRef} from 'react'
import { communicationObservable } from '../observables/observable';

 function SubCart() {
      const ref = useRef()

function handleSubmit(e){
    e.preventDefault()
    communicationObservable.next(ref.current.value)
    
}
  return (
    <form onSubmit={(e)=>handleSubmit(e)}> 
         <label>text</label>
         <input ref={ref}  ></input>
         <button type='submit'>submit</button>
    </form>
  )
}

export default SubCart
