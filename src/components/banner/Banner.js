import React from 'react';
import banner1 from '../../folder/banner.PNG';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner-bg'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="container">
  <div class="row">
    <div class="col-12 col-md-12 col-sm-12 col-lg-6">
      <h1 className='pt-5 fw-bold fs-1 pb-3'>Build Your Dream Website With OMRhost</h1>
      <p className='pb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <div>
      <button className='btn btn-primary text-white'>Learn More <i class="fa-solid fa-arrow-right-long px-2"></i></button>
      </div>
    
    </div>
    <div class="col-12 col-md-12 col-sm-12 col-lg-6">
 <img src={banner1} className='img-fluid w-75'></img>
    </div>
   
  </div>
</div>
    </div>
   
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;