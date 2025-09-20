import React from 'react'
import './Hero.css'
import pic from '../assests/pic.png'

const Hero = () => {
  return (
    <section className="hero">
      <img src={pic} alt="Sale visual left" className="hero-side hero-left" />
      <div className="hero-inner">
        <p className="hero-kicker">Last Chance</p>
        <h1 className="hero-title">END OF SEASON SALE UP TO <br /> 50% OFF</h1>
        <button className="hero-cta" aria-label="Check it now">Check It Now</button>
      </div>
      <img src={pic} alt="Sale visual right" className="hero-side hero-right" />
    </section>
  )
}

export default Hero
