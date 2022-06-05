import React from 'react';
import './Pricing.css';
const Pricing = () => {
    return (
        <div className='container-fluid pricing'>
             <p className='text-secondary text-center'>Choose Your Best Pricing Package</p>
              <h1 className='fw-bold text-center mb-5'>Pricing Plan</h1>
     <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
    <div className='bg-dark container-fluid pt-3 pb-5'>
         <h6 className='text-white text-center'>Shared Hosting</h6>
         <p className='text-white text-center'>Starting At</p>
         <h5 className='text-white text-center'>$15.99/m</h5>
         
     </div>
     <div className='price-icon'>
     <i class="fa-solid fa-list-ul text-white bg-dark p-4 price-i"></i>
     </div>
     
     <div>
         <ul className='text-center list'>
             <li><i class="fa-solid fa-delete-left"></i> Installation Charge</li>
             <li><i class="fa-solid fa-square-check"></i> 2gb DDR3 Ram</li>
             <li><i class="fa-solid fa-square-check"></i> 20gb SSD Charge Storage</li>
             <li><i class="fa-solid fa-square-check"></i> Weekly Backups</li>
             <li><i class="fa-solid fa-square-check"></i> 24/7/365 Tech Support</li>
             <li><i class="fa-solid fa-square-check"></i> Full Root Access</li>
             <li><i class="fa-solid fa-square-check"></i> Ddos Protection</li>
             <li><i class="fa-solid fa-square-check"></i> 30 Day Money Back Gurantee</li>
             
         </ul>
         <button className='btn btn-primary text-white d-flex mx-auto'>Order Now</button>
     </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
    <div className='bg-primary container-fluid pt-3 pb-5'>
         <h6 className='text-white text-center'>Reseller Hosting</h6>
         <p className='text-white text-center'>Starting At</p>
         <h5 className='text-white text-center'>$25.99/m</h5>
         
     </div>
     <div className='price-icon'>
     <i class="fa-solid fa-list-ul text-white bg-dark p-4 price-i"></i>
     </div>
     
     <div>
         <ul className='text-center list'>
             <li><i class="fa-solid fa-delete-left"></i> Installation Charge</li>
             <li><i class="fa-solid fa-square-check"></i> 2gb DDR3 Ram</li>
             <li><i class="fa-solid fa-square-check"></i> 20gb SSD Charge Storage</li>
             <li><i class="fa-solid fa-square-check"></i> Weekly Backups</li>
             <li><i class="fa-solid fa-square-check"></i> 24/7/365 Tech Support</li>
             <li><i class="fa-solid fa-square-check"></i> Full Root Access</li>
             <li><i class="fa-solid fa-square-check"></i> Ddos Protection</li>
             <li><i class="fa-solid fa-square-check"></i> 30 Day Money Back Gurantee</li>
         </ul>
         <button className='btn btn-dark text-white d-flex mx-auto'>Order Now</button>
     </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
    <div className='bg-dark container-fluid pt-3 pb-5'>
         <h6 className='text-white text-center'>Dedicated Hosting</h6>
         <p className='text-white text-center'>Starting At</p>
         <h5 className='text-white text-center'>$85.99/m</h5>
         
     </div>
     <div className='price-icon'>
     <i class="fa-solid fa-list-ul text-white bg-dark p-4 price-i"></i>
     </div>
     
     <div>
         <ul className='text-center list'>
             <li><i class="fa-solid fa-delete-left"></i> Installation Charge</li>
             <li><i class="fa-solid fa-square-check"></i> 2gb DDR3 Ram</li>
             <li><i class="fa-solid fa-square-check"></i> 20gb SSD Charge Storage</li>
             <li><i class="fa-solid fa-square-check"></i> Weekly Backups</li>
             <li><i class="fa-solid fa-square-check"></i> 24/7/365 Tech Support</li>
             <li><i class="fa-solid fa-square-check"></i> Full Root Access</li>
             <li><i class="fa-solid fa-square-check"></i> Ddos Protection</li>
             <li><i class="fa-solid fa-square-check"></i> 30 Day Money Back Gurantee</li>
         </ul>
         <button className='btn btn-primary text-white d-flex mx-auto'>Order Now</button>
     </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Pricing;