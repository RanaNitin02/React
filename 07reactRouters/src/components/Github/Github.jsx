// import React , { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className="bg-gray-600 p-4 text-2xl text-white">Github followers : {data.followers}</div>
  )
}

export default Github


export const githubInfoLoader = async () => {

    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()

}