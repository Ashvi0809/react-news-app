import React, { useEffect, useState } from 'react'
import  axios from 'axios'

const Other = () => {
   const[tr,setTr] =useState([]);

    useEffect(() => {
        apidata();
        getdata();
       
    }, [],[]);
 
const apidata = async(data) => {
  await  axios.get("https://timenews.co.in/wp-json/wp/v2/posts?categories=14" ,data).then(res =>{
    console.log("res",res.data);
   
    setTr(res.data)
    
    })
}
    const getdata = async(data) => {
        await  axios.get("https://timenews.co.in/wp-json/wp/v2/posts?categories=14" ,data).then(res =>{
          console.log("res",res.data);
         
          setTr(res.data)
          
          })
        }





// console.log("tr",tr);
    
  return (
    <div>
 
         
           
        {
            tr.map((items) => (
            // <tr>
            //         <td>{items.yoast_head_json.title}</td>
            //     </tr>
            <div className="carousel-inner bg-dark">
            <div className="carousel-item active">
              <img src={items.yoast_head_json.og_image[0].url} className="d-block w-100" alt=""/>
              <div class="carousel-caption d-none d-md-block">
                <h5>{items.title.rendered}</h5>
                <p>{items.excerpt.rendered}</p>
              </div>
            </div>
            </div>
               
            ))
        }
      

    </div>
  )
}

export default Other