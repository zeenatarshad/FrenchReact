import React from "react";
import eiffeltower from "../Images/eiffeltower.png";
import gradient from "../Images/bannergradient.png";
import flags from "../Images/flags.png";
import maam from "../Images/tahere1.png";
import blue from "../Images/bluearrow.png";
import red from "../Images/redarrow.png";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <div className="d-flex align-items-start">
            <img src={eiffeltower} className="d-block" alt="Eiffel Tower" style={{ height: '500px', objectFit: 'cover', marginLeft: '-20px' }} />
            <div style={{ marginLeft: '20px', paddingTop: '20px', position: 'relative', width: '50%' }}>
              <h1 style={{ fontFamily: 'Lemon Milk', fontSize: '48px', margin: '0', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>LEARN A NEW</h1>
              <h1 style={{ fontFamily: 'Lemon Milk', fontSize: '48px', margin: '0', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>LANGUAGE</h1>
              <p style={{ fontFamily: 'Nunito', fontSize: '24px', margin: '20px 0', textWrap: 'balance' }}>A learning system based on formalized teaching with the help of resources.</p>
              <button className="btn btn-danger mt-3" style={{ backgroundColor: '#ED2939' }}>New Courses</button>
            </div>
            <img src={flags} alt="Flags" style={{ position: 'absolute', top: '25%', left: '55%', height: '60%', zIndex: '-1' }} />
            <img src={maam} alt="Maam" style={{ position: 'absolute', top: '7%', left: '75%', height: '80%', zIndex: '1' }} />
            <img src={blue} alt="bluearrow" style={{ position: 'absolute', top: '10%', left: '55%', height: '7%'}}/>
            <img src={red} alt="redarrow" style={{ position: 'absolute', top: '90%', left: '65%', height: '7%'}}/>

          </div>
        </div>

        {/* Second Slide */}
        {/* <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div> */}

        {/* Third Slide */}
        {/* <div className="carousel-item">
          img src="..." className="d-block w-100" alt="..." />
        </div> */}
      </div>

      {/* Positioning the gradient image slightly above and on the right */}
      <img src={gradient} alt="Gradient" style={{ position: 'absolute', top: '-40px', right: '0', height: '100%', zIndex: '-1' }} />

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
