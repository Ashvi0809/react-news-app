import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import { Link } from 'react-router-dom';


const Other = (props) => {
   const[tr,setTr] =useState([]);

    useEffect(() => {
        apidata();
    });
 
const apidata = async(data) => {
  await  axios.get(props.id,data).then(res =>{
    console.log("res",res.data);
   
    setTr(res.data)
    
    })
} 
  return (
    <div>
 
        
           
        {
            tr.map((items) => (
         
            <>
            <div class="card mx-auto rounded pd-3 mt-2 text-light " style={{width: 700}} >
  <img src={items.yoast_head_json.og_image[0].url} class="card-img-top" alt='' />
  <div class="card-body" style={{backgroundColor:'RebeccaPurple'}}>
      <h5 class="card-title" dangerouslySetInnerHTML={{__html: items.title.rendered}}></h5>
      <p class="card-text" dangerouslySetInnerHTML={{__html: items.excerpt.rendered}}></p>
      <Link to={`/button/${items.id}`} ><button>Read more</button></Link>
    </div>
</div>
            </>
               
            ))
        }
      

    </div>
  )
}

export default Other