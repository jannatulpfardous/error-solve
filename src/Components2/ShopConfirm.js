import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useForm } from "react-hook-form";
import "../Components2/Review/Review.css"
const ShopConfirm = () => {

     const history = useHistory();
  let user = JSON.parse(localStorage.getItem("user"));

  let { id } = useParams();

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://arcane-bayou-73846.herokuapp.com/addnailpolish`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);

  let newvalue = data.filter((d) => d._id == id);

  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {

      // alert(JSON.stringify(data));

      let newdata =({...data, value : 'Pending'})


      if (window.confirm("Do you want to buy it?") == true) {
		         fetch("https://arcane-bayou-73846.herokuapp.com/nailpolishbuy", {
      method: "POST",
      body: JSON.stringify(newdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("SUCCESSFULLY done");
          window.location.reload();
      });
		} else {
		alert("Cancel Oder...");
		}




  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="lipstick">
      <h2 className="text-center">Confirm Buy product..</h2>

       
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="productName">Product Name</label>
          <input
            value={newvalue[0]?.name}
            placeholder=""
            {...register("productName",{
                    required: true,
                  })}
          />
          {errors.Name && <p>{errors.Name.message}</p>}

          <label htmlFor="email">Email</label>
          <input value={user.email} placeholder="" {...register("email")} />
          {errors.Name && <p>{errors.Name.message}</p>}

          <label htmlFor="image">Image Link </label>
          <input
            value={newvalue[0]?.img}
            placeholder="image"
            {...register("image",{
                    required: true,
                  })}
          />
          {errors.description && <p>{errors.description.message}</p>}

          <label htmlFor="price">Price</label>
          <input
            value={newvalue[0]?.amount}
            placeholder=""
            {...register("price",{
                    required: true,
                  })}
          />
          {errors.price && <p>{errors.price.message}</p>}

          <label htmlFor="place">Place</label>
          <input
            placeholder=""
            {...register("place", {
              required: "this is required",
            })}
          />
          {errors.place && <p>{errors.place.message}</p>}

          <input type="submit" />
        </form>
      </div>
      <div className="text-center text-bold">
       <small > Submit Button Click 4 Times.. </small>
      
      </div>
     

      <Footer></Footer>
    </div>
  );
};

export default ShopConfirm;
