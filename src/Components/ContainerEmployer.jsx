import React from 'react';
import EmployersBanner from '../assets/employers.png';
import { Button } from 'react-bootstrap';

function ContainerEmployer() {
  return (
    <>
    <section className='space'>
    </section>
      <div className='box container-md'>
        <div className='row'>
          <div className='container d-flex flex-column justify-content-center align-items-center mb-5'>
            <h2>What do we do for employers</h2>
            <div className='bar'></div>
          </div>
          <div className='col-lg-6 col-md-12 d-flex align-items-center'>
            <img src={EmployersBanner} className='img-fluid' alt='banner' />
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='services container'>
              <h3>
                Free Applicant Tracking System, or integrate with your ATS.
              </h3>
              <p>
                We created the perfect ATS for startups to start their hiring
                and never lose sight of where candidates are in the process. If
                you already have an ATS, we can do an integration and you will
                receive and manage our candidates in your ATS.
              </p>

              <h3>Experienced recruiters + AI matching</h3>
              <p>
                Recruiters cannot be replaced by AI because resumes are not
                enough to know the true talent of candidates, but AI can help
                speed up the process where possible. GeekSpotters has built
                tools to match candidates to your jobs, and then our recruiters
                will make sure that they are a perfect match.
              </p>

              <h3>{'Flexible service & support'}</h3>
              <p>
                You can have your own dedicated talent specialist, or a more
                cost-effective way to manage our candidates from either our free
                ATS or your ATS if you already have one.
              </p>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <Button className='cnt-btn'>LEARN MORE</Button>
        </div>
      </div>
    </>
  );
}

export default ContainerEmployer;
