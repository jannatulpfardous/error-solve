import React,{useState,useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const ManageProducts = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
       fetch("https://arcane-bayou-73846.herokuapp.com/addnailpolish")
       .then(data =>data.json())
       .then(value =>setdata(value))
    }, [])


    const deletebtn =(id)=>{
         if (window.confirm("Do you want to buy it?") == true) {
         fetch(`https://arcane-bayou-73846.herokuapp.com/nailpolishdeleteProduct/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Your item has been deleted");
         window.location.reload();
      });

    }else {
		alert("Cancel Oder...");
		}}


    return (


        <div style={{fontFamily:"Besley"}}>
            
            <h2 className="text-center">All Available Products</h2>


            <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
                {
                    data.map(v =>

                        <div className="col-lg-4  col-md-12 col-sm-12 rounded" style={{ fontFamily: 'Besley' }}>

                            <div className="m-2" style={{ color: "black" }}>

                                <div className="rounded-3 shadow ">


                                    <div className="p-2">


                                       <div className="text-center pt-2 "> <img  style={{ height: "200px", width: "200px" }} src={v.img} alt="" /></div> <br />
                                       <div className="ps-3"> <p>Name : {v.name}</p>
                                        <p style={{ color: "red" }}>Amount : {v.amount}</p>
                                        <p>{v.description}</p>
                                       
                                       <div className="ps-2">
                                        <ReactStars {...{
                                            size: 30,
                                            value: v.value,
                                            edit: false
                                        }} />
                                       </div>

                                        
                                       <button  onClick={()=>deletebtn(v._id)}  className=" btn btn-danger">delete <DeleteForeverIcon/></button>
                                       </div>
                                       <div className="pb-2"></div>


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

export default ManageProducts;
