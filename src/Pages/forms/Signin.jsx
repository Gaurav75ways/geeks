import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  let name, value;

  const onChange = (e) => {
    name = e.target.name; //name will be replaced by the value of name of the form element
    value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };
  let data;
  // const modalCheck = () =>{
  //   if(formData.email === ""){
  //     data = `
  //     Please type in your email first.`
  //   }else{
  //     data = `
  //     A password reset link has been sent to your email address.`
  //   }
  // }

  const signin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    //store in env and make services directory
    const res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      console.log('Login Failed');
    } else {
      navigate('/Dashboard');
    }
  };
  return (
    <>
      <div className='box container'>
        <div className='row'>
          <div className='container d-flex flex-column justify-content-center align-items-center mb-5'>
            <h2>Login</h2>
            <div className='bar'></div>
            <form method='POST'>
              <div class='col d-flex justify-content-center align-items-center'>
                <div className='selection-box container col-lg-12'>
                  <div className='row mb-4'>
                    <h3>Welcome Back!</h3>
                    <p>Please login to your account.</p>
                  </div>
                  <div className='row mb-4'>
                    <div>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email*'
                        required
                        id='email'
                        label='Email'
                        name='email'
                        onChange={onChange}
                        value={formData.email}
                      />
                    </div>
                  </div>
                  <div className='row mb-4'>
                    <div>
                      <input
                        className='form-control'
                        placeholder='Password*'
                        required
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        onChange={onChange}
                        value={formData.password}
                      />
                    </div>
                  </div>

                  <div className='row mb-4'>
                    <a
                    // onClick={modalCheck}
                      data-bs-toggle='modal'
                      data-bs-target='#passwordModal'
                      href='/signin'
                      style={{ color: '#818992', textDecoration: 'none' }}
                    >
                      Forgot Password?
                    </a>
                  </div>

                    {/* modal */}
                  <div
                    className='modal fade'
                    id='passwordModal'
                    tabindex='-1'
                    aria-labelledby='passwordModalLabel'
                    aria-hidden='true'
                  >
                    <div className='modal-dialog'>
                      <div className='modal-content'>
                        <div className='modal-body'>
                          A password reset link has been sent to your email address
                        </div>
                        <div class="modal-footer">

                          <button
                            type='button'
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                          >
                            Ok
                          </button>
                          </div>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col'>
                      <div className='d-flex justify-content-center  mt-3 mb-4'>
                        <Button
                          className='cnt-btn'
                          type='submit'
                          onClick={signin}
                        >
                          <p>LOGIN NOW!</p>
                        </Button>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='d-flex justify-content-center  mt-3 mb-4'>
                        <a href='http://localhost:5000/auth/google'>
                          <Button className='cnt-btn'>
                            <p className='fs-3 my-0 mx-3'>G</p>
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-4'>
                    <p>
                      New User?
                      <Link
                        to='/signup'
                        style={{ color: '#ff8a73', textDecoration: 'none' }}
                      >
                        {' '}
                        Sign Up!
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
