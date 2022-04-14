import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Drawer from './Drawer';

function Navigation() {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light static-top'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
        <img src={Logo} className='img-fluid' alt='banner' style={{display:'block', height:'2em'}}/>
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
        <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-end' style={{width:'100%'}}>
            <li class='nav-item mx-3'>
              <a class='nav-link' href='#'>
                Hire Talent
              </a>
            </li>
            <li class='nav-item mx-3'>
              <a class='nav-link' href='#'>
                I'm a Geek
              </a>
            </li>
            <li class='nav-item mx-3'>
              <a class='nav-link' href='#'>
                Find Jobs
              </a>
            </li>
            <li class='nav-item mx-3'>
            <Link to='signuptype'>
                <button type="button" class="btn btn-outline-secondary">Login or Sign Up</button>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
