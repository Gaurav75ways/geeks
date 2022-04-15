import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/styles.components/container.css';
import Banner1 from '../assets/banner1.png';

function ContainerPrimary() {
  return (
    <div className='box container' >
      <div className='row'>
        <div className='col-lg-6 col-md-12 d-flex align-items-center'>
          <div className='container'>
            <h1 className = "head">Connect your startup to the best tech talent</h1>
            <p className='head-text'>
              GeekSpotters is a technical recruiting firm that is transforming
              the process to hire the best tech talent. Through innovation and
              experience we are making hiring simpler and faster.
            </p>
            <Button className='cnt-btn'>GET IN CONTACT</Button>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 d-flex align-items-center'>
          <img src={Banner1} className='img-fluid' alt='banner' />
        </div>
      </div>
    </div>
  );
}

export default ContainerPrimary;
