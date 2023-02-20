import React,{ useEffect, useState }  from 'react';
import  axios from 'axios'
import { Link } from 'react-router-dom'



const Home = () => {
  const[data,setData] =useState([]);

  useEffect(() => {
      getdata()
  }, [])
const getdata = async(data) => {
await  axios.get("https://timenews.co.in/wp-json/wp/v2/posts",data).then(res =>{

 
  setData(res.data)
})
}
  return (
    <div>
     
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
     
     {
            data.map((items) => (
        
          <>
           <div className="carousel-inner bg-dark">
    <div className="carousel-item active">
      <img src={items.yoast_head_json.og_image[0].url} className="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5>{items.title.rendered}</h5>
        <p>{items.excerpt.rendered}</p>
      </div>
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

export default Home