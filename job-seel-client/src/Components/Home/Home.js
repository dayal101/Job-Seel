import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Banner from './Partails/Banner';
import Category from './Partails/Category'

function Home() {
  return (
    <>
        <Header />
        <Banner />
        <Category />
        <Footer />
    </>
  )
}

export default Home
