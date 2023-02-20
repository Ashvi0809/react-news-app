import React,{ useEffect, useState }  from 'react';
import  axios from 'axios'

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
      </div>
  )
}

export default Ahmedabad