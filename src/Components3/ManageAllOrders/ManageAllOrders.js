import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const ManageAllOrders = () => {
    const history = useHistory()


  let user = JSON.parse(localStorage.getItem("user"));

    const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://arcane-bayou-73846.herokuapp.com/nailpolishbuy`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, [user.email]);


  const deleteBtn =(id)=>{

     if (window.confirm("Do you want to buy it?") == true) {
      
      fetch(`https://arcane-bayou-73846.herokuapp.com/nailpolishbuydelete/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Your item has been deleted SUCCESSFULLY");
        history.replace("/pay");
      })} else {
		alert("Cancel DELETE...");
		}
  }

   const proceesOder =(id)=>{
    fetch(`https://arcane-bayou-73846.herokuapp.com/nailpolishProcess/${id}`, {
  method: 'PATCH',
})
  .then((response) => response.json())
  .then((data) => {
       
        window.location.reload();
       

      });
  }

  

  
    return (
        <div style={{fontFamily:"Besley"}}>
           <h3 className="text-center">All orderded item here ....</h3>

            <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
                {
                    data.map(v =>

                        <div className="col-lg-4  col-md-12 col-sm-12 rounded" style={{ fontFamily: 'Besley' }}>

                            <div className="m-2" style={{ color: "black" }}>

                                <div className="rounded-3 shadow ">


                                    <div className="p-4">


                                        <img style={{ height: "200px", width: "200px" }} src={v.image} alt="" />
                                        <p>Name : {v.productName}</p>
                                        <p style={{ color: "red" }}>Amount : {v.price}</p>
                                        <p>Place : {v?.place}</p>
                                        <p>email : {v?.email}</p>
                                        
                                        <p>{v?._id}</p>
                                        <p><span class="text-danger">Process status</span> : <span class="text-success">{v?.value}</span> </p>

                                        <div className="row">


                                          <div className="col">  <button onClick={()=>proceesOder(v._id)} className="btn btn-info"><CheckCircleIcon/>{ v?.value}  </button></div>



                                          <div className="col"><button className="btn btn-danger" onClick={()=>deleteBtn(v._id)}>delete <DeleteForeverIcon/></button></div>
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

export default ManageAllOrders;