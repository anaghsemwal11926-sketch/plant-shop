// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(){
  return (
    <div style={{
      height:'60vh', display:'flex', alignItems:'center', justifyContent:'center',
      backgroundImage: "url('/assets/landing-bg.jpg')", backgroundSize:'cover', color:'white'
    }}>
      <div style={{background:'rgba(0,0,0,0.45)', padding:24, borderRadius:10, textAlign:'center'}}>
        <h1>GreenShop</h1>
        <p>Fresh houseplants delivered to your home — healthy plants, happier homes.</p>
        <Link to="/products"><button style={{marginTop:12}}>Get Started</button></Link>
      </div>
    </div>
  );
}
