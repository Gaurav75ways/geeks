import React from 'react';

function Footer() {
  return (
    <>
      <section className='space'></section>
      <div class='footer services container'>
        <div class='row'>
          <div class='col'>
            <div class='row'>Logo</div>
            <div class='row'>
              <p className='my-2'>
                We specialize in technical recruiting for growing startups. Our
                recruiters have extensive in-house and agency experience in
                Silicon Valley and have worked for big tech companies, as well
                as emerging startups.
              </p>
            </div>
            <div class='row'>social</div>
          </div>
          <div class='col'></div>
          <div class='col'>
            <ul class='nav flex-column'>
              <li class='nav-item'>
                <a class='nav-link mb-0' aria-current='page' href='#'>
                  Hire Talent
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mb-0' href='#'>
                  I'm a Geek
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mb-0' href='#'>
                  Become a spotter
                </a>
              </li>
            </ul>
          </div>
          <div class='col'>
            <ul class='nav flex-column'>
              <li class='nav-item'>
                <a class='nav-link mb-0' aria-current='page' href='#'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mb-0' href='#'>
                  Contact
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mb-0' href='#'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
