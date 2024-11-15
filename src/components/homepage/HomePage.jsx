import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import NewCollection from './NewCollection'
import WeddingBanner from './WeddingBanner'

const HomePage = () => {
  return (
   <>
   <Header />
   <Hero img="banner.jpg" header="tolus spring collection" subheader="Find out our best spring collection. Offering our best quality products in a Tolus Spring Collection."/>
   <NewCollection/>
   <WeddingBanner img="secondbanner.png"/>
   <Footer/>
   </>
  )
}

export default HomePage