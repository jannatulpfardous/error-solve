import React from 'react';
import '../Carousel/Carousel.css';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators col-lg-6 col-md-12 col-sm-12">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active  img-car">
                        <img className=""

                            src="https://resources.stuff.co.nz/content/dam/images/1/d/s/3/2/v/image.related.StuffLandscapeThreeByTwo.1151x768.1drz50.png/1472180993382.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block">
                            <p style={{ color: "white", fontFamily: "Besley" }}> " Elegant . Naillpalish "</p>
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>" Shade Of Red "</h1>
                            <button class="btn btn-danger">View More</button>




                        </div>

                    </div>
                    <div class="carousel-item img-car">
                        <img className=""
                            src="https://thumbs.dreamstime.com/b/beautiful-face-woman-maroon-makeup-nails-young-100509586.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block">

                            <p style={{ color: "white", fontFamily: "Besley" }}> " Sparcle . Naillpalish "</p>
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>" Shade Of Rainbow "</h1>

                            <button class="btn btn-danger">View More</button>


                        </div>

                    </div>
                    <div class="carousel-item  img-car">
                        <img className=" "
                            src="https://previews.123rf.com/images/subbotina/subbotina1604/subbotina160400039/54898657-beauty-girl-face-with-colorful-nail-polish-manicure-and-makeup.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block">

                            <p style={{ color: "white", fontFamily: "Besley" }}>" Nude . Naillpalish "</p>
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>"  Shade Of Color "</h1>

                            <button class="btn btn-danger">View More</button>

                        </div>

                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Carousel;