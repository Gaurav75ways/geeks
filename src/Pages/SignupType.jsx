import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignupType() {
  return (
    <>
      <div className='box container'>
        <div className='row'>
          <div className='container d-flex flex-column justify-content-center align-items-center mb-5'>
            <h2>Sign Up</h2>
            <div className='bar'></div>
          </div>
          <div class='col d-flex justify-content-center align-items-center'>
            <div className='selection-box container col-lg-12'>
              <div className='d-flex justify-content-center'>
                <h4 class='fw-bolder text-center'>How would you like to register?</h4>
              </div>
              <div className='d-flex justify-content-center mt-5 mb-2'>
                <Button className='cnt-btn'> <p>AS AN EMPLOYER</p> </Button>
              </div>
              <div className='d-flex justify-content-center mt-5 mb-2'>
              <Link to="/signup">
                <Button className='cnt-btn'><p> AS A CANDIDATE</p> </Button>
                </Link>
              </div>
              <div className='d-flex justify-content-center  mt-5 mb-4'>
                <Button className='cnt-btn'> <p>AS A RECRUITER</p> </Button>
              </div>
              <div className='d-flex justify-content-center'>
                <span style={{ display: 'block', color: '#818992' }}>
                  Already a registered user?{' '}
                  <Link
                    to='/signin'
                    style={{ color: '#ff8a73', textDecoration: 'none' }}
                  >
                    {' '}
                    Login!
                  </Link>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupType;
