import React,{useEffect,useState} from 'react'
import ReactPaginate from 'react-paginate';

import './List.css'

function List() {
    const [addData,setAddData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(
        response=>{return response.json()}).then(
            data=>{ setAddData(data)})},[])

    console.log(addData)
  return (
    <div>
        <div className='list-content-'>
            {
                addData.map((value)=>{
                    return(<div>
                        <div className='list-main-'>
            <div className='list-image-'>{value.id}</div>
            <div className='list-news-'>
                <h5>{value.title}</h5>
                <p>{value.body}</p>
                <div className='list-date-'>{value.userId}</div>
            </div>
        </div>
        <div className='list-cancel-btn'>
        <button className='list-btn-list'><i class="fa-solid fa-xmark"></i></button>
        </div></div>

                    ) 

                })
            }
        
   </div>
   </div>
  )
}

export default List