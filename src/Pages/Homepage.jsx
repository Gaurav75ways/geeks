import React from 'react';
import ContainerPrimary from '../Components/ContainerPrimary';
import ContainerEmployer from '../Components/ContainerEmployer';
import ContainerWork from '../Components/ContainerWork';
import Footer from "../Components/Footer"

function Homepage() {
  return (
    <>
      <ContainerPrimary />
      <ContainerEmployer />
      <ContainerWork />
      <Footer />
    </>
  );
}

export default Homepage;
