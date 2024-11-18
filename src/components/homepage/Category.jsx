import React from 'react'
import CategoryCard from './CategoryCard'

const Category = () => {
  const categoryArray=[
    {
      img:"man.png",
      title:"MAN",
    },
    {
      img:"woman.jpg",
      title:"WOMAN",
    },
    {
      img:"kid.jpg",
      title:"KIDS",
    }
  ]
  return (
    <section>
      <div className="container">
        <div className=' flex flex-col gap-5 md:grid md:grid-cols-3 gap-5 mt-[10rem] mb-[5rem]'>
          {categoryArray.map((item,key) => (
           <CategoryCard item={item} key={key} /> 
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default Category