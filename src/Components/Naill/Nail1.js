import React from "react";

const Nail1 = () => {
  return (
    <div style={{fontFamily:"Besley"}}>
      <div>
        <h1
          className="text-center mb-4 pb-4 mt-5 "
          style={{ color: "#303f9f" }}
        >
          <br />
          Trending Products of the year
        </h1>
        <hr />
       <div className="ps-5 pe-5">
        <p className="text-center ps-5 pe-5" style={{ color: "#555555" }}>
          But black nail polish is actually associated with positive personality
          traits.Wearing black is a way of rebelling against the norm and
          showing off a daring aspect of your personality," she explained.
        </p>
       
       </div>
      </div>

      <div class="row">
        <div class="col">
          <img
            style={{ height: "280px", width: "230px", objectFit: "cover" }}
            src="https://m.media-amazon.com/images/I/717XUT1sZQL._SY355_.jpg"
            alt=""
          />
          <div className="ms-5 ps-2 mt-3">
            <h6 className="" style={{ color: "#555555" }}>
              Base Coat
            </h6>
            <h6 style={{ color: "#555555" }}>Film shadow / No.5 oz</h6>
          </div>
        </div>
        <div class="col">
          <img
            style={{ height: "260px", width: "230px", objectFit: "cover" }}
            src="https://i.ebayimg.com/images/g/acIAAOSwEm5fK8Zm/s-l1600.jpg"
            alt=""
          />
          <div className="ms-5 ps-2 mt-3">
            <h6 className="" style={{ color: "#555555" }}>
              Gel Polish
            </h6>
            <h6 style={{ color: "#555555" }}>Sorbet fine / No.5 oz</h6>
          </div>
        </div>

        <div class="col">
          <img
            style={{ height: "260px", width: "230px", objectFit: "cover" }}
            src="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw2682d6e7/products/L8344293/large/L8344293.JPG"
            alt=""
          />
          <div className="ms-5 ps-2 mt-3">
            <h6 className="" style={{ color: "#555555" }}>
              Top Coat
            </h6>
            <h6 style={{ color: "#555555" }}>Red Sorbet/ No.5 oz</h6>
          </div>
        </div>

        <div class="col">
          <img
            style={{ height: "260px", width: "230px", objectFit: "cover" }}
            src="https://m.media-amazon.com/images/I/31xiSP3pQkS.jpg"
            alt=""
          />
          <div className="ms-5 ps-2 mt-3">
            <h6 className="" style={{ color: "#555555" }}>
              Matte Polish
            </h6>
            <h6 style={{ color: "#555555" }}>Blue Paletts / No.5 oz</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nail1;
