import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PersonList = () => {
 
  const [users,setUsers]=useState([])
 const navigate = useNavigate();
  const getUsers = ()=>{
    axios.get("http://localhost:9999")
    .then(async res =>{
      const dt =await res.data
      await setUsers(dt)
      
      console.log(users);
    }).catch(e=>{
      console.log(e);
    })
  }
 
  useEffect(()=>{
    getUsers();
  },[])
  const deleteUser = (id) => {
    
    axios.delete(`http://localhost:9999/${id}`).then(res=>{
      console.log(res);
      getUsers();
    }).catch(e=>{
      console.log(e);
    })
  }
  const editUser = (id) => {
      navigate(`/edit/${id}`);
  }
  return (
    <center>
    <div style={{background:"yellow", width:"11%", margin:"10px"}}>
      <Link to={"/add"}>new user</Link>
      <ul>
      {users.map(user=>{
            return(
              <div key={user.id}><li >{user.nom}  {user.prenom}</li>
              <button style={{background:'green'}} onClick={()=>{editUser(user.id)}}>edit</button>
              <button   style={{ 
                        background:'red'
                    }} onClick={()=>{deleteUser(user.id)}}>delete</button>
              </div>
            
            )
        })}
        
      </ul>

     
    </div>
    </center>
  )
}

export default PersonList
