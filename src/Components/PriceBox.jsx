import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

import '../Styles.scss';
import included from "../assets/included.svg";



function PriceBox({price}) {
    let priceTypeColor = '';

  // Set color based on priceType
  switch (price.priceType) {
    case 'Basic':
      priceTypeColor = '#FDC071';
      break;
    case 'Pro':
      priceTypeColor = '#FC7676';
      break;
    case 'Premium':
      priceTypeColor = '#9552F8';
      break;
    default:
      priceTypeColor = 'inherit'; // fallback to default color
  }
  return (
    <motion.div 
    initial = {{opacity: 0}}
    whileInView = {{opacity: 1}}
    transition={{duration: 2}}
    >
        <div className='price-box'>
            {price.isBestValued && <div className='best-valued'><span className='badge text-bg-primary badge-text'>Best Valued</span></div>}
            <div className='price-label' style={{color: priceTypeColor}}>
                <h3>{price.priceType}</h3>
                <span>{price.description}</span>
            </div>
            <div className='price'>
                <h2>{`₹${price.price}`}<span className='sub-price'> /month</span></h2>
            </div>
            <div className='features-list'>
                <ul>
                    {price.featuresIncluded.map((feature, index) => (
                    <div style={{display: 'flex',gap: 10}} key={feature}>
                        <img src={included} alt={included} height={24}/> <li key={index} style={{color: priceTypeColor}}>{feature}</li>
                    </div>
                    ))}
                </ul>
            </div>
            <div className='subscribe-button'>
                <button className='btn btn-outline-primary'>Subscribe</button>
            </div>

        </div>
    </motion.div>
  )
}

export default PriceBox