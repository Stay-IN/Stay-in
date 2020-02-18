import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import RoomsContainer from '../Components/RoomsContainer';

import { Footer } from 'Components';

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at  &#8377;500"
        ></Banner>
      </Hero>
      <RoomsContainer />
      <Services />
      <FeaturedRooms />
      <Footer />
    </>
  );
};

export default home;
