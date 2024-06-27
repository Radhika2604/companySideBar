import React,{useEffect,useState} from 'react'

function Api() {
    //https://saurav.tech/NewsAPI/sources.json

    const [addData,setAddData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(
        response=>{return response.json()}).then(
            data=>{ setAddData(data)})},[])

    console.log(addData)

  return (
    <div>
        <table>
                {
                addData.map((value)=>{
                    return(
                        <tr>
                    <td>{value.body}</td>
                    <td>{value.id}</td>
                    <td>{value.title}</td>
                    <td>{value.userId}</td>
                </tr>

                    ) 

                })
            }
        </table>
            </div>
  )
}

export default Api