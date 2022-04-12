import React from 'react'
import {useEffect, useState} from 'react'

function Dashboard() {

  const[data, setData] = useState();

  const fetchData = async(e) =>{
  
    const res = await fetch("http://localhost:5000/api/users/me",{
        method: "GET",
        headers: {'Content-Type':'application/json'},
        // body:JSON.stringify({
        //     email,
        //     password,
        // })
    })
    Console.log(res);
    // const data = await res.json()
    // if(res.status === 400 || !data){
    //     console.log("Login Failed")
    // }else{
    //     navigate("/Dashboard")
    // }
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div>
      <h1>Dashboard</h1>
      <div>

      </div>
    </div>
  )
}

export default Dashboard