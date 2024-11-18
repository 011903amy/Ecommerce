import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import NewCollection from './NewCollection'
import WeddingBanner from './WeddingBanner'
import Category from './Category'

const HomePage = () => {
  return (
   <>
   <Header />
   <Hero img="banner.jpg" header="tolus spring collection" subheader="Find out our best spring collection. Offering our best quality products in a Tolus Spring Collection."/>
   <NewCollection/>
   <WeddingBanner />
   <Category />
   <Footer/>
   </>
  )
}

export default HomePage