import React from 'react';
import WorkBanner from '../assets/work.png';
import { Button } from 'react-bootstrap';

function ContainerWork() {
  return (
    <>
    <section className='space'>
    </section>
      <div className='box container-md'>
        <div className='row'>
          <div className='container d-flex flex-column justify-content-center align-items-center mb-5'>
            <h2>Why work with us, and what sets us apart?</h2>
            <div className='bar'></div>
          </div>
          <div className='col-lg-6 col-md-12 d-flex align-items-center'>
            <img src={WorkBanner} className='img-fluid' alt='banner' />
          </div>
          <div className='col-lg-6 col-md-12 d-flex align-items-center'>
            <div className='services container'>
              <h3>
              We know what works in each step of the recruiting process
              </h3>
              <p>
              Securing the best candidates in today’s competitive market requires a talented recruiting team, an efficient hiring process, and a delightful candidate experience. GeekSpotters recruiters have hired thousands of engineers in Silicon Valley, we offer a free yet powerful ATS that is simple to use, and we are the only recruiting firm offering perks and sign-on bonuses to our candidates.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button className='cnt-btn'>GET IN CONTACT</Button>
        </div>
      </div>
    </>
  );
}

export default ContainerWork;
