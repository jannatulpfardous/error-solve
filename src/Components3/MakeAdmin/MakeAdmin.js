import React from "react";
import { useForm } from "react-hook-form";

import "../../Components2/Review/Review.css";

function MakeAdmin() {
  const { register, handleSubmit, } = useForm();
  
const onSubmit = (data) => {

    

    fetch('https://arcane-bayou-73846.herokuapp.com/nailpolishAdmin', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{
   alert("succefully done")
     window.location.reload();
   
    }
    );
   }






  return (
    <div className="lipstick" style={{fontFamily:"Besley"}}>
    <h4 className="text-center">Make admin</h4>

    <form onSubmit={handleSubmit(onSubmit)}>
      

      <label htmlFor="email">Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register("email")}
      />

      <label>Is admin?</label>
      <input type="checkbox" {...register("isAdmin")} />

     

    
      <input type="submit" />
    </form>


    </div>
  );
}

export default MakeAdmin;