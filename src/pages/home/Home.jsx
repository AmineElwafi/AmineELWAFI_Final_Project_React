import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Hero from './partials/slide'
import Categories from './partials/categories'
import FeaturedProducts from './partials/featuredProducts'

export default function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Categories/>
        <FeaturedProducts/>
        <Footer/>
    </div>
  )
}
