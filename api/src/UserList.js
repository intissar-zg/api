import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
            axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
            setData(res.data)})
            .catch(err=>{console.log(err)})
            
        }
    ,[]);
    return (
        <div>
         <ul>
       {data.map(dt=><li key={dt.id}>{dt.name}</li>)}
         </ul>
        </div>
    )
}

export default UserList
