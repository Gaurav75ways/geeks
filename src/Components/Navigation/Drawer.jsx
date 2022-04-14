import React from 'react';
import Logo from '../../assets/logo.png'
import {Link} from "react-router-dom"

function Drawer() {
  return (
    <>
      <a href="#sidebar" class="d-block mt-3" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar">
            toggle
    </a>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="sidebar" aria-labelledby="sidebar-label">
    <div class="offcanvas-header">
      {/* <h5 class="offcanvas-title" id="sidebar-label">geeks</h5> */}
      <img class="img-fluid offcanvas-title" id="sidebar-label" src={Logo} alt="logo" style={{display:'block', height:'2em'}}></img>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div className="wrapper">
        <div className="container">
          <div className='container '>
              <h4>Additional Links</h4>
          <div className='bar-small'></div>
          <div className="links" style={{}}>
          <nav class="nav flex-column my-4">
            <Link to='signin'>
              <p>Login</p>
            </Link>
            <Link to='signup'>
              <p>Sign Up</p>
            </Link>
            <Link to="#">
            <p>FAQ</p>
            </Link>
          </nav>
          </div>
          </div>
        </div>

        <div className="container">
          <div className='container '>
              <h4>Contact Info</h4>
          <div className='bar-small'></div>
          
          <div className="card my-4" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">ADDRESS</h6>
                  <p className="card-text"><small className="text-muted">Sunny Isles Beach, Florida</small></p>
                </div>
              </div>
            </div>
          </div>

          <div className="card my-4" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">Email</h6>
                  <p className="card-text"><small className="text-muted">recruiting@geekspotters.com</small></p>
                </div>
              </div>
            </div>
          </div>

          <div className="card my-4" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">Phone</h6>
                  <p className="card-text"><small className="text-muted">833.425.2900</small></p>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  </div>
    </>

  );
}

export default Drawer;
