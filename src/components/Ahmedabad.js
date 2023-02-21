import React,{ useEffect, useState }  from 'react';
import  axios from 'axios'
import { Link } from 'react-router-dom'
const Ahmedabad = () => {
  const[data,setData] =useState([]);

  useEffect(() => {
      getdata()
  }, [])
const getdata = async(data) => {
await  axios.get("https://timenews.co.in/wp-json/wp/v2/posts?categories=3",data).then(res =>{
  console.log("res",res.data);
 
  setData(res.data)
})
}
  return (
    <div>
     
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
       
       {
              data.map((items) => (
          
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
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
          </div>

          <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <Link class="page-link" to="" tabindex="-1" aria-disabled="true">Previous</Link>
    </li>
    <li class="page-item disabled">
      <Link class="page-link" to="" tabindex="-1" aria-disabled="true">1</Link>
    </li>
  
    <li class="page-item"><Link class="page-link" to="/page2">2</Link></li>
    <li class="page-item"><Link class="page-link" to="/page3">3</Link></li>
    <li class="page-item">
      <Link class="page-link" to="/page2">Next</Link>
    </li>
  </ul>
</nav>
      </div>
  )
}

export default Ahmedabad