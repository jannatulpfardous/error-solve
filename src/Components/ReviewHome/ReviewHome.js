import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepPurple } from '@mui/material/colors';
import Carousel from "react-elastic-carousel";

import ReactStars from "react-rating-stars-component";


const ReviewHome = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://arcane-bayou-73846.herokuapp.com/nailpolishReview`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);

  
 

  return (

    <div style={{fontFamily:"Besley"}}>
    <h4 className="text-center">Review List Here.....</h4>
    <Carousel>

    



      {data.map((i) => (
        <div className="row">
        


           <div className=" border  rounded shadow" style ={{height:"180px", width:"500px"}}>
           <div className="d-flex justify-content-center mt-3">
            <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
     
    </Stack>
           
           
           </div>
            <div className="text-center text-primary mt-2"><h5>{i.Name}</h5></div>
            <div className="text-center text-dark mt-2 ">{i.description}</div>
             <div className="d-flex justify-content-center">
             <ReactStars  className=""
              {...{
                size: 30,
                value: parseInt(i.rating),
                edit: false,
              }}
            />
             
             </div>

            
           
          </div>




        
        </div>
      ))}
    </Carousel>

    </div>
  );
};

export default ReviewHome;
