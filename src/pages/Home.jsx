import React from 'react'
import Search from '../components/Search';
import FeaturedPost from '../components/FeaturedPost';
import Blogs from '../components/Blogs';
import Author from '../components/Author';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Search />
        <FeaturedPost />
        <Blogs />
        <Author />
        <Footer />

    </>
    
  )
}

export default Home