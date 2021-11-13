import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {

    return (


        <div className="mt-5" style={{fontFamily:"Besley"}}>

            <div className="footer-container">
                <div >
                    <div className="row row2">

                        <div className="col-md-5">
                            <div class="row g-3 align-items-center mt-3">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Search</label>
                                </div>
                                <div class="col-auto">
                                    <input type="Search" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                        Must Be 8-10 characters long.
                                    </span>
                                </div>
                            </div>


                            <div>
                                <div className="left-container text-start mt-4">
                                    <h1 style={{ fontFamily: "Besley", textAlign: "center" }}>Polish <span style={{ color: "blue", fontFamily: "Besley" }} >  Me </span> Pretty</h1>
                                    <div className="icons-container d-flex text-center ">

                                    </div>
                                    <p className="mt-5 ">
                                        <small style={{ fontFamily: "Besley" }}>
                                            Nail polish (also known as nail varnish or nail enamel) is a lacquer that can be applied to the human fingernail or toenails to decorate and protect the nail plates. The formula has been revised repeatedly to enhance its decorative effects and to suppress cracking or peeling. Nail polish consists of a mix of an organic polymer and several other components that give it colors and textures.
                                        </small>
                                    </p>


                                </div>
                            </div>
                        </div>




                        <div className="col-md-2">

                            <div className="footer-menu-container">
                                <ul className="mt-5">
                                    <h2>Our Salons</h2>
                                    <hr />
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Location and
                                        Favourite Place</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Our History</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Contact Us</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}> FAQ + Policies</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">

                            <div className="footer-menu-container">
                                <ul className="mt-5">
                                    <h2>Working Hours</h2>
                                    <hr />
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Monday - Friday</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>09:00 - 22:00</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Saturday - Sunday</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}> 11:00 - 00:00</li>
                                </ul>
                            </div>

                        </div>












                    </div>
                </div>
            </div>
            <p style={{ textAlign: "center", fontWeight: "bold", paddingTop: "30px", fontFamily: "Besley" }}><small> ©copyright  <span style={{ color: "blue" }}>Amily Shahrin</span>@Polish Me Pretty</small></p>


        </div>


    );

};

export default Footer;