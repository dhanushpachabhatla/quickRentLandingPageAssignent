import React from 'react'
import Image from 'next/image'
import "./styles.css"
const FeaturesSection = () => {
  return (
    <>
    <div className='features-container' >
      <div className='features-heading'>
        <h1>Features</h1>
      </div>
      <div className='features-box-container'>
        <div className='features-boxs'>
          <Image src="/varietyofimages.jpg" alt="Logo" width={350} height={200} />
          <h2 className='box-heading'>Wide Variety of Gadgets</h2>
          <div className='features-description'>Explore an extensive collection of laptops, cameras, gaming consoles, and more. 
          We ensure you find the perfect gadget for your needs.</div>
        </div>
        <div className='features-boxs'>
          <Image src="/affordable-price.svg" alt="Logo" width={350} height={200} />
          <h2 className='box-heading'>Affordable Pricing</h2>
          <div className='features-description'>Enjoy competitive rental rates designed to suit any budget. 
          Get premium gadgets without breaking the bank.</div>
        </div>
        <div className='features-boxs'>
          <Image src="/quickdelivery.jpg" alt="Logo" width={350} height={200} />
          <h2 className='box-heading'>Quick Delivery</h2>
          <div className='features-description'>Experience lightning-fast delivery services, ensuring your rented gadgets reach you right on time, every time.</div>
        </div>
        <div className='features-boxs'>
          <Image src="/customersupport.jpg" alt="Logo" width={350} height={200} />
          <h2 className='box-heading'>Exceptional Customer Support</h2>
          <div className='features-description'>Available 24/7, our team ensures quick resolutions through chat, email, and phone services.</div>
        </div>
        <div className='features-boxs'>
          <Image src="/securepayment.jpg" alt="Logo" width={350} height={200} />
          <h2 className='box-heading'>Secure Payment Options</h2>
          <div className='features-description'>Advanced encryption and trusted gateways provide safe, seamless transactions across multiple payment methods.</div>
        </div>
        <div className='features-boxs'>
          <Image src="/userfriendly.avif" alt="Logo" width={350} height={200} />
          <h2 className='box-heading'>User-Friendly Interface</h2>
          <div className='features-description'>Simple, intuitive design ensures effortless navigation for users across all devices and platforms.</div>
        </div>
      </div>
    </div>
    <hr/>
    </>
  )
}

export default FeaturesSection
