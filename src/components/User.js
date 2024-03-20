import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function User(props) {
    const navigate = useNavigate()
    const [user,userSet] = useState(props.users)
    
    const editUser = (id) => {
        navigate(`/edit/${id}`);
    }
    const deleteUser = (id) => {
    
        axios.delete(`http://localhost:9999/${id}`).then(res=>{
          console.log(res);
        //  getUsers();
        }).catch(e=>{
          console.log(e);
        })
      }
  return (
    
     <div key={props.id}><li >{props.nom}  {props.prenom}</li>
    <button onClick={()=>{editUser(props.id)}}>edit</button>
    <button onClick={()=>{deleteUser(props.id)}}>delete</button>
    </div>
        
    
   
  )
}

export default User
