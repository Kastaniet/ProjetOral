import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProduct/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type="Nouveau"/>
      <Categories />
      <Contact />
    </div>
  )
}

export default Home