import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom"


import ReactStars from "react-rating-stars-component";



 




const Product = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://arcane-bayou-73846.herokuapp.com/addnailpolish`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);


    return (

        <div>
            <br />
            <h1 className="text-center mt-2" style={{ color: "#0a5fa2",fontFamily: 'Besley' }}>Beauty at pocket friendly price!</h1>
            <p style={{ textAlign: "center", color:"blue", fontFamily: 'Besley' }}>Polishes . Time</p>

            <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
                {
                    data.slice(0,6).map(v =>

                        <div className="col-lg-4  col-md-12 col-sm-12 rounded" style={{ fontFamily: 'Besley' }}>

                            <div className="mx-3  p-4" style={{ color: "black" }}>

                                <div className="rounded-3 shadow ">


                                    <div className="p-2">


                                      <div className="d-flex justify-content-center rounded" >  <img className="rounded shadow"  style={{ height: "200px", width: "200px" }} src={v.img} alt="" /></div> <br />
                                       <div className="text-center">
                                        <p>Name : {v.name}</p>
                                        <p style={{ color: "red" }}>Amount : {v.amount}</p>
                                        <p>{v.description}</p>
                                       
                                        <div className="d-flex justify-content-center">
                                        <ReactStars  {...{
                                            size: 30,
                                            value: v.value,
                                            edit: false
                                        }} />
                                        
                                        </div>
                                         <Link to={`/shopConfirm/${v._id}`}>  <button  className=" btn btn-danger">Buy Now</button> </Link>
                                       </div>


                                    </div>

                                    <div>


                                    </div>


                                </div>



                            </div>

                        </div>


                    )
                }
            </div>
        </div>

    );

};


export default Product;