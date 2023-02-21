import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import { Link } from 'react-router-dom'
const Business = () => {
   const[tr,setTr] =useState([]);

    useEffect(() => {
        apidata()
    }, [])
const apidata = async(data) => {
  await  axios.get("https://timenews.co.in/wp-json/wp/v2/posts?categories=7",data).then(res =>{
   
   
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
    
      
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <Link class="page-link" to="" tabindex="-1" aria-disabled="true">Previous</Link>
    </li>
    <li class="page-item disabled">
      <Link class="page-link" to="" tabindex="-1" aria-disabled="true">1</Link>
    </li>
  
    <li class="page-item"><Link class="page-link" to="/business2">2</Link></li>
    <li class="page-item"><Link class="page-link" to="/business3">3</Link></li>
    <li class="page-item">
      <Link class="page-link" to="/business2">Next</Link>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Business