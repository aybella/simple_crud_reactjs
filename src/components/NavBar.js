import React from 'react';
import Card from './Card';
import "./NavBar.css";

const NavBar = (props) => {

   const products= ["apple","orange","banana"];

  return (
    <div>
     {
        products.map((p)=> {
            return (
                <Card name={p}/>
            )
        })
     }
    </div>
  )
}

export default NavBar
