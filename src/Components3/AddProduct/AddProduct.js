


import { useForm } from "react-hook-form";

import "../../Components2/Review/Review.css"


const AddProduct = () => {

  

 

  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {

      

 if (window.confirm("Do you want to add it?") == true) {
    fetch("https://arcane-bayou-73846.herokuapp.com/addnailpolishOne", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("succefully done");
           window.location.reload();
      })
  }else {
		alert("Cancel Oder...");
		}
  
  }

  return (
    <div style={{fontFamily:"Besley"}}>
     

      <div className="lipstick">
      <h2 className="text-center">Add Product..</h2>

       
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="img">Image Link</label>
          <input
           
            placeholder=""
            {...register("img",{
                    required: true,
                  })}
          />
          {errors.img && <p>{errors.img.message}</p>}

          <label htmlFor="name">Name product</label>
          <input placeholder="" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor="amount">Price </label>
          <input
            
            placeholder="amount"
            {...register("amount",{
                    required: true,
                  })}
          />
          {errors.amount && <p>{errors.amount.message}</p>}

          <label htmlFor="value">Rating value</label>
          <input
            
            placeholder="1-5"
            {...register("value",{
                    required: true,
                  })}
          />
          {errors.value && <p>{errors.value.message}</p>}

          <label htmlFor="description">Description</label>
          <input
            placeholder="description"
            {...register("description", {
              required: "this is required",
            })}
          />
          {errors.description && <p>{errors.description.message}</p>}

          <input type="submit" />
        </form>
      </div>

     
    </div>
  );
};

export default AddProduct;
