import React from 'react'

function surfing() {
  return (
    <div id="banner" className="banner">
      <div className="bg-image bg-desktop" style={{ backgroundImage: "url(images/banner.png)" }}></div>
      <div className="bg-image bg-mobile" style={{ backgroundImage: "url(images/banner-mobile.png)" }}></div>
      <h1 className="banner_taital">Surfing</h1>
    </div>
  )
}

export default surfing