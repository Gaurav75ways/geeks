import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/styles.components/form.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    email2: '',
    password: '',
    password2: '', // agreement:'',
  });

  let name, value;
  const onChange = (e) => {
    name = e.target.name; //name will be replaced by the value of name of the form element
    value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, email2, password, password2 } =
      formData;
    const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        email2,
        password,
        password2, // agreement,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      console.log('Registration Failed');
    } else {
      navigate('/Dashboard');
    }
  };

  return (
    <div className='form-container'>
      <div className='green-bar'></div>
      <div className='form-wrapper selection-box container'>
        <div className='row'>
          <div className='container d-flex flex-column justify-content-center align-items-center mb-5'>
            <div
              className='heading border-start border-success border-3 bg-light'
              style={{ width: '100%' }}
            >
              <h5 className='mx-1 my-1'>Create An Account</h5>
            </div>

            <form>
              <div className='mb-3'>
                <div className='controls-container container '>
                  <div className='row row-cols-2'>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='First Name*'
                        required
                        name='firstname'
                        id='firstname'
                        label='First Name'
                        onChange={onChange}
                        value={formData.firstname}
                      />
                    </div>

                    <div class='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Last Name*'
                        required
                        name='lastname'
                        id='lastname'
                        label='last Name'
                        onChange={onChange}
                        value={formData.lastname}
                      />
                    </div>

                    <div class='col'>
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

                    <div class='col'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Confirm Email*'
                        required
                        id='email2'
                        label='Confirm Email'
                        name='email2'
                        onChange={onChange}
                        value={formData.email2}
                      />
                    </div>

                    <div class='col'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password*'
                        required
                        id='password'
                        label='password'
                        name='password'
                        onChange={onChange}
                        value={formData.password}
                      />
                    </div>

                    <div class='col'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Confirm Password*'
                        required
                        id='password2'
                        label='password2'
                        name='password2'
                        onChange={onChange}
                        value={formData.password2}
                      />
                    </div>

                    <div class='col d-flex justify-content-end'>
                      <Button
                        className='btn'
                        type='submit'
                        onClick={register}
                        style={{ backgroundColor: '#22B573', border: 'none' }}
                      >
                        Sign Up
                      </Button>
                    </div>

                    <div className='col '>
                      <Link to='/signup'>
                        <Button className='btn-light'>Cancel</Button>
                      </Link>
                    </div>
                  </div>

                  <div className='row'>
                    <div class='col'>
                      <div className='d-flex justify-content-center mt-3 mb-4'>
                        <a href='http://localhost:5000/auth/google'>
                          <Button
                            className='btn'
                            style={{
                              backgroundColor: '#db4437',
                              border: 'none',
                            }}
                          >
                            <p className='fs-6 my-0 mx-3'>GOOGLE</p>
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='d-flex justify-content-center'>
                      Already a registered user?
                      <Link to='/signin'>Login!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
