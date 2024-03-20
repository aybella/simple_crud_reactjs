import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PersonAdd = () => {
  const [nom,setNom]=useState("")
  const [prenom,setPrenom]=useState("")
  const navigate = useNavigate();
  const addUser = (e) => {
    e.preventDefault()
    
    axios({
      method: 'post',
      url: 'http://localhost:9999/AddUser',
      data: {
        prenom:prenom,
        nom:nom
      }
    }).then(res=>{
      //routing to personlistComp
      navigate("/")
    }).catch(e=>{
      console.log(e);
    })
  }
  return (
    <div>
       <form >
        <input type='text'  placeholder='Nom' onChange={(e)=>{
          setNom(e.target.value)
        }}/>
        <input type='text' placeholder='Prenom' onChange={(e)=>{
          setPrenom(e.target.value)}}/>
        <button onClick={addUser}>Add</button>
      </form>
    </div>
  )
}

export default PersonAdd
