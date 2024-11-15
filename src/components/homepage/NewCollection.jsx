import React from 'react'
import CardItem from './CardItem'

const NewCollection = () => {

  const newCollectionArray =[
    {
      img:"card-1.png",
      title:"Loro Piana",
      description:"Slim-Fit Striped Silk and Linen-Blend Polo Shirt",
      price:"45",
    },
    {
      img:"card-2.png",
      title:"White Pants",
      description:"Slim-Fit Pants",
      price:"90",
    },
    {
      img:"card-3.png",
      title:"Bidha Glasses",
      description:"Black Galsses with luxury finishing",
      price:"50",
    },
    {
      img:"card-4.png",
      title:"Brown Bomber",
      description:"Luxury unisex bomber jacket",
      price:"52",
    },
    {
      img:"card-5.png",
      title:"Leather Shoes Jack",
      description:"Man leather shoes",
      price:"89",
    },
    {
      img:"card-6.png",
      title:"Grey Tshirt",
      description:"Unisex grey tshirt",
      price:"21",
    },
  ]
  return (
    <section>
      <div className="container">
        <h2 className='text-center mt-[15rem]'>new collection</h2>
        <p className='text-center mb-10'>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
        <div className=' grid grid-cols-3 gap-5'>
          {newCollectionArray.map((item,key) => (
         <CardItem item={item} key={key}/> 
        ))}
        </div>
        
        
      </div>
    </section>
  )
}

export default NewCollection