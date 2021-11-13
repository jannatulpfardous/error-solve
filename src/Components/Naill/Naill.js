import React from 'react';






const Naill = () => {


    return (

        <div className="my-5 " style={{ fontFamily: "Besley" }}>



            <div class="container my-5 py-5 ">
                <div class="row">
                    <div className="row">


                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="ms-5 mt-3 ps-5">
                                <img
                                    className="img-fluid"
                                    style={{ objectFit: "cover", height: "550px" }}
                                    src="https://st.depositphotos.com/1491329/2998/i/950/depositphotos_29984207-stock-photo-fashion-beauty-manicure-and-make.jpg"
                                    class="d-block w-100  se1"
                                    alt="..."
                                />
                            </div>

                        </div>




                        <div className="col-lg-6 col-md-12 col-sm-12 text-center">

                            <div className="m-4">



                                <div className="m-3">
                                    <h1 style={{ fontFamily: "Besley", color: "#0207a8" }}>
                                    Contact Our Salon
                                    <hr />
                                    </h1>
                                    <h5 style={{ fontFamily: "Besley", color: "deepPink" }}>
                                    *Or Give Us a Call To Schedule a Treatment (888)265-0000*
                                    </h5>


                                </div>
                            </div>


                            <form action="/action">
                                <div class="form-group">
                                    <label for="name">Full Name * </label>
                                    <input type="name" class="form-control" id="name" placeholder="Full Name" name="name" />
                                </div>
                                <div class="form-group">
                                    <label for="appointment">Appointment Date * </label>
                                    <input type="appointment" class="form-control" id="appointment" placeholder="Enter Appointment" name="appointment" />
                                </div>
                                <div class="form-group">
                                    <label for="number">Phone Number * </label>
                                    <input type="number" class="form-control" id="number" placeholder="Enter Phone Number" name="number" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email * </label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Password * </label>
                                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>

                                <div>
                                    <button type="submit" class="btn btn-primary mt-2">Send</button>
                                </div>
                            </form>




                        </div>




                    </div>





                   

                </div>
            </div>


        </div>

    );

};

export default Naill;