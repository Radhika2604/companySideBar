import React, { useState,useEffect } from 'react'
import './Feedback.css'

function Feedback() {

  const initialvalues={
    firstName:"",
    lastName:"",
    address:"",
    country:"",
    emailId:"",
    countryCode:"",
    phoneNumber:""
  }
  const [formvalues, setformvalues]=useState(initialvalues)
  const [formerror,seterror]=useState({})
  const [issubmit,setissubmit]=useState(false)

 const handlechange=(e)=>{
 const {name,value}= e.target;
 setformvalues({...formvalues, [name]:value})
 console.log(formvalues)
  }

  const submitform=(e)=>{
e.preventDefault();
seterror(validate(formvalues))
setissubmit(true)
  }

useEffect(()=>{
  console.log(formerror)
if(Object.keys(formerror).length===0 && issubmit){
  console.log(formvalues)
}
},[formerror])


  const validate=(values)=>{
    const errors={};
    const regex='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
    if(!values.emailId){
      errors.emailId="Email ID is required";

    }else if(!regex(values.emailId)){
      errors.emailId="Please Enter Valid Email ID";


    }
     if(!values.phoneNumber){
      errors.phoneNumber="Phone Number is required"
    }else if(!values.phoneNumber===10){
      errors.phoneNumber="Please Enter Valid Phone Number"

    }
     if(!values.countryCode){
      errors.countryCode="Country code is required"

    }
    return errors;

  }




  return (
    <div>
        <div className='feedback-main'>
        {Object.keys(formerror).length===0 && issubmit ? (<div className='Feedback submitted successfully'>
          Feedback submitted successfully       
        </div>) : null}
        

            <h4>Thank you so much for taking the time!</h4>
            <p>Please Provide the below details!</p>

            <form>
                <input type="text" placeholder='First Name' name='firstName' value={formvalues.firstName} onChange={handlechange}
></input><br />

                <input type="text" placeholder='Last Name' name='lastName' value={formvalues.lastName}
                onChange={handlechange}></input><br />

                <input type="text" placeholder='Enter your postal Address' name='address'
                value={formvalues.address} onChange={handlechange}
                className='address'></input><br />

                <input type="Search" placeholder='Country' name='country' value={formvalues.country}
                onChange={handlechange}></input><br />

                <input type="email" placeholder='Enter Example@sample.com' name='emailId'
                value={formvalues.emailId} onChange={handlechange}
                ></input> <br />              
                 <p className='error'>{formerror.emailId}</p>
    
                <input type="number" placeholder='+91' className='countrycode' name='countryCode'
                value={formvalues.countryCode} onChange={handlechange}></input>
               
                <input type="number" placeholder='123456789' className='number' name='phoneNumber'
                 value={formvalues.phoneNumber} onChange={handlechange}></input>
                                 <p className='error'>{formerror.phoneNumber}</p>

                <button className='submit-btn' onClick={submitform}>Submit Feedback</button>
            
            </form>

        </div>
    </div>
  )
}

export default Feedback