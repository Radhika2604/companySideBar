import React,{useState,useEffect} from 'react'

function Paginate({showperpage}) {
const [counter,setcounter]=useState(1)
useEffect(()=>{
const value=showperpage*counter;
},[counter])
  
    return (
      <div className="d-flex justify-content-between">
        <button className='btn btn-primary'onClick={()=>{setcounter(counter-1)}}>Previous</button>
        <button className='btn btn-primary'onClick={()=>{setcounter(counter+1)}}>Next</button>
      </div>
    );
  }
export default Paginate