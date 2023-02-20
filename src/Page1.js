import React from 'react'
import  axios from 'axios'
const Page1 = () => {
 
    const submit = async(data) =>{
        // console.log(data)
        await axios.post("https://timenews.co.in/wp-json/wp/v2/categories",data).then(res=>{
            console.log(res.data.id)
        })
    }
  return (
    <div>
      <button onClick={submit}>plashjb</button>
    </div>
  )
}

export default Page1