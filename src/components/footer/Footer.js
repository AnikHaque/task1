import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-white p-5">
      
      <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
    <a class="navbar-brand" href="#"> <i class="fa-solid fa-list-ul text-primary"></i> <b className='text-white'>OMR<span className='text-primary'>HOST</span></b></a>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <a className='text-primary'>Learn More</a>
    <p>Follow Us <i class="fa-brands fa-facebook-f mx-2 me-2"></i> <i class="fa-brands fa-twitter me-2"></i> <i class="fa-brands fa-linkedin-in me-2"></i> <i class="fa-brands fa-google me-2"></i> <i class="fa-brands fa-pinterest-p me-2"></i> <i class="fa-solid fa-wifi me-2"></i> <i class="fa-brands fa-youtube"></i></p>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
    <h5 className='px-4'>Useful Links</h5>
    <ul className='footer-ul'>
        <li><i class="fa-solid fa-arrow-right"></i> Terms of conditions of this company</li>
        <li><i class="fa-solid fa-arrow-right"></i> Knowledge Base</li>
        <li><i class="fa-solid fa-arrow-right"></i> Live Chat/Support</li>
        <li><i class="fa-solid fa-arrow-right"></i> Transfer your Domain Name</li>
        <li><i class="fa-solid fa-arrow-right"></i> Trafic Booster</li>
        <li><i class="fa-solid fa-arrow-right"></i> Twebsite builder with our great team</li>
        <li><i class="fa-solid fa-arrow-right"></i> Data Center</li>
    </ul>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
    <h5 className='px-4'>Services</h5>
    <ul className='footer-ul'>
        <li><i class="fa-solid fa-arrow-right"></i> Terms of conditions of this company</li>
        <li><i class="fa-solid fa-arrow-right"></i> Knowledge Base</li>
        <li><i class="fa-solid fa-arrow-right"></i> Live Chat/Support</li>
        <li><i class="fa-solid fa-arrow-right"></i> Transfer your Domain Name</li>
        <li><i class="fa-solid fa-arrow-right"></i> Trafic Booster</li>
        <li><i class="fa-solid fa-arrow-right"></i> Twebsite builder with our great team</li>
        <li><i class="fa-solid fa-arrow-right"></i> Data Center</li>
    </ul>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
      <h5>Email-Newsletter</h5>
      <p>Subscribe to get exclusive offer & update in your email</p>
      <input type='text' placeholder='Your Email Address'></input>
      <input type='submit' value='subscribe'></input>
      <br></br>
      <br></br>
      <p>We Accept</p>
      <i class="fa-brands fa-cc-visa fs-3"></i>
      <i class="fa-brands fa-cc-mastercard fs-3"></i>
      <i class="fa-brands fa-cc-discover fs-3"></i>
      <i class="fa-brands fa-cc-amex fs-3"></i>
      <i class="fa-brands fa-cc-paypal fs-3"></i>
    </div>
  </div>
</div>
<p className="text-center mt-5 py-3 fs-5 mb-0 border-top">&copy; Copyright 2017  <a class="navbar-brand" href="#"><b className='text-primary'>OMR<span className='text-primary'>HOST</span></b></a>.All Rights Reserved. Designed by Themelooks</p>
    </div>
    );
};

export default Footer;