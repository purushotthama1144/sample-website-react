import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer" className="bg-black">
        <div className="container container-medium-width">
            <div  className="footer-logo" style={{ backgroundImage: "url(images/aloha-footer.svg)" }}>
            </div>
        </div>
    </footer>
  )
}

export default Footer