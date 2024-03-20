import React from 'react';

function Product() {

     const products = ["banane","potato","Tomato"]
     const cities = ['erfoud',"Oujda","Errachidia"]

     {
        var test="fdggd";
     }

     console.log(test);


    return (
      <>
      <form>
        
      </form>
    <div>
      <ul>
        {cities.filter(e => e.length < 6).map((e) => {
          return  e
        })}
      </ul>
    </div>
    </>
  )
}

export default Product
