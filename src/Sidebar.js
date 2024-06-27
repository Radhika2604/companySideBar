import React,{useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';
import './Sidebar.css';
import List from './List';
import Grid from './Grid';
import Feedback from './Feedback';




const Sidebar = () => {

    //Toggle area

    const [listshow,setlistshow]=useState(true)
    const [gridShow,setGridShow]=useState(true)
    const [feedbackshow,setfeedbackshow]=useState(false);
    const [open, setOpen] = useState(false);



    const isGrid=()=>{
        setGridShow(true)
        setlistshow(false)
    }
    const isList=()=>{
        setlistshow(true)
        setGridShow(false)
    }
    const feedbackToggle=()=>{
        feedbackshow ? setfeedbackshow(false):setfeedbackshow(true)
    }


  return (
    <div>
        <div className='main'>
   
            <div className='left'>        
                <div className='Reader'>
                    <div className='userimage'><i class="fa-solid fa-user"></i></div>

                    <div className='image-content'>
                    <h4>Hi Reader,</h4>
                    <p>Here's Your News!</p></div>
                </div>

                <div className='View-Toggle'>
                    <h3>View Toggle</h3>

                    <button className='grid' onClick={isGrid}><i class="fa-solid fa-bars-staggered"></i></button>
                    <button className='list' onClick={isList}><i class="fa-solid fa-list"></i></button>
                </div>

                <div className='Feedback'>
                <h3>Have a Feedback?</h3>
                <button className='btn-feedback' onClick={feedbackToggle}>We're Listening!</button>
                </div>

            </div>
            <div className='middle'>
      
                {feedbackshow ? <Feedback />:null}
            </div>
            <div className='right'>
                {listshow?<Grid  /> :<List />}

         </div>
        </div>
    </div>
  )
}

export default Sidebar;