import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PersonEdit(props) {
    let { id } = useParams();
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")
    const [user,setuser] = useState({});
    const nomRef = useRef(null);
    const prenomRef = useRef(null);
    const navigate = useNavigate()
    useEffect ( ()=>{
        getuser();
    },[])
    const getuser =  async ()=>{
        
        await axios.get(`http://localhost:9999/${id}`).then(res =>{
            setuser(res.data);
            setNom(res.data.nom);
            setPrenom(res.data.prenom);
            nomRef.current.value = res.data.nom;
            prenomRef.current.value = res.data.prenom;
            console.log(user);
        }).catch(e=>{
            console.log(e);
        });
    }
    const editUser = (e) => {
        e.preventDefault()
        
        axios({
          method: 'put',
          url: `http://localhost:9999/${id}`,
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
            <input  type='text' ref={nomRef}  placeholder='Nom' onChange={(e)=>{
            setNom(e.target.value)}}/>
            <input type='text' ref={prenomRef}  placeholder='Prenom' onChange={(e)=>{
            setPrenom(e.target.value)}}/>
            <button onClick={editUser}>Edit</button>
        </form>
        </div>
    )
}

export default PersonEdit
