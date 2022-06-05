import React from 'react';

import './Search.css'
const Search = () => {
    return (
        <div className='bg-dark text-white p-5'>
            <p className='text-center'>Domain Search Here</p>
            <h1 className='text-center fw-bold'>Find Your Domain Name</h1>
            <div class="container">
  <div class="row">
    <div class="col">
      <p>.com</p>
      <p>$2.99/year</p>
    </div>
    <div class="col">
    <p>.com</p>
      <p>$2.99/year</p>
    </div>
    <div class="col">
    <p>.com</p>
      <p>$2.99/year</p>
    </div>
    <div class="col">
    <p>.com</p>
      <p>$2.99/year</p>
    </div>
    <div class="col">
    <p>.com</p>
      <p>$2.99/year</p>
    </div>
  </div>
</div>
<br></br>
<br></br>
<input type='text' placeholder='Enter Your Domain Name Here' className='search-input1'></input>
<input type='submit' value='.com' className='bg-dark text-white search-input2'></input>
<button className='btn btn-primary text-white d-flex mx-auto mt-3 '>Search Now</button>
        </div>
    );
};

export default Search;