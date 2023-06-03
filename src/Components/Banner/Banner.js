import React from 'react'
import './Banner.css'

function Banner() {
  return (
    
    <div id="banner" className="banner">
        <div className="bg-image bg-desktop" style={{backgroundImage: "url(images/banner.png)"}}></div>
        <div className="bg-image bg-mobile" style={{backgroundImage: "url(images/banner-mobile.png)"}}></div>
        <h1 className="banner_taital"><span>Welcome</span><br/>to Hawaii</h1>
    </div>
  )
}

export default Banner