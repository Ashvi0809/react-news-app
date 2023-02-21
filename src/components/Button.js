import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Button = () => {

   const params =useParams();
    const {id} = params;
   const [one,setOne] = useState({})
    useEffect(() => {
        getDatabyId()
    })
    const getDatabyId =async(data) =>{
        await axios.get("https://timenews.co.in/wp-json/wp/v2/posts/"+id,data).then(res =>{
            // console.log(res.data)
            setOne(res.data)
        }).catch(err=> {
            console.log(err)
        })
    }
  return (
    <p dangerouslySetInnerHTML={{__html: one?.content?.rendered}}></p>
  )
}
//content.rendered
export default Button