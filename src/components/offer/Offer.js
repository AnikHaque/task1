import React from 'react';
import Banner from '../banner/Banner';
import Domain from '../domain/Domain';
import Happy from '../happy/Happy';
import Navigation from '../navigation/Navigation';
import Pricing from '../pricing/Pricing';
import Services from '../services/Services';
import Offer1 from '../../folder/offer.png'
import './Offer.css';
const Offer = () => {
    return (
        <div>
            <p className='text-center'>Choose Your Best Pricing Package</p>
            <h2 className='text-center'>What More We Offer</h2>
            <div className='text-center fs-5'>
            <i class="fa-solid fa-paintbrush me-4"></i>
            <i class="fa-solid fa-square-code me-4"></i>
            <i class="fa-solid fa-chart-line me-4"></i>
            <i class="fa-brands fa-android me-4"></i>
            <i class="fa-solid fa-chart-area"></i>
            </div>
            <br></br>
            <br></br>
            <div class="container text-center bg-light graphics">
  <div class="row">
    <div class="col-12 col-md-12 col-sm-12 col-lg-6">
      <h2 className='pt-5'>Graphics Design</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <div>
      <a href='#'>Learn More <i class="fa-solid fa-arrow-right-long px-2"></i></a>
      </div>
    
    </div>
    <div class="col-12 col-md-12 col-sm-12 col-lg-6">
 <img src={Offer1} className='img-fluid w-50'></img>
    </div>
   
  </div>
</div>
        </div>
    );
};

export default Offer;