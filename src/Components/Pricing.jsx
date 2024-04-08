import React from 'react'

import PriceBox from './PriceBox'

function Pricing() {
  const pricingObject = [
    
    {
      priceType: 'Basic',
      price: 0,
      description: "Essential simplicity",
      featuresIncluded : ['Note Making','Cross Platform','5GB Storage'],
      isBestValued: false,
    },
    {
      priceType: 'Pro',
      price: 499,
      description: "Advanced efficiency",
      featuresIncluded : ['All Included in Basics','100GB Storage','Collaborate Writing upto 2 people','Unlimited note sharing','Voice to Text'],
      isBestValued: true,
    },
    {
      priceType: 'Premium',
      price: 999,
      description: "Excellence assured",
      featuresIncluded : ['All Included in Pro','Unlimited Storage','Unlimited Collaboration','AI Writing','Spelling and grammer',],
      isBestValued: false,
    },
  ]
  return (
    <div className='pricing-container'>
        <h1>Pricing</h1>
        <span>Maximize the capabilities of our notes and document generator through our subscription plans. Tailored for academic and professional needs, our AI adeptly crafts and improves documents, promoting effective organization and understanding for users across various domains.</span>
        <div className='price-box-container'>
          {
            pricingObject.map((price)=>{
              return (<PriceBox 
                price={price} key={price.priceType}/>)
            })
          }
        </div>
    </div>
  )
}

export default Pricing