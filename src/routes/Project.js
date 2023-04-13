import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Card from '../components/Card';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2  heading="PROJECTS."  text ="SOME OF MY MOST RECENT WORKS." />
      <Work />
      <Card />
      <Footer />
    </div>
  )
}

export default Project