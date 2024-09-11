import React , {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // one method
  
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/ihba-123')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // })

  const data = useLoaderData();   

  return (
    <div className='bg-yellow-200 text-amber-950 p-2   text-center font-bold'>
      Github : {data.followers}
      <img src={data.avatar_url} alt="Avatar" className='flex justify-center mt-6 w-32 '/>
    </div>
  )
}

export default Github

// newmethod for calling api using loader
export const gitResponse = async () =>{
  const response = await fetch('https://api.github.com/users/ihba-123')
  return response.json();
}