// Footer (avec liens vers réseaux sociaux)

import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className="Footer">
      <nav className="Nav">
        <ul className="Menu">
          <li><a href='facebook.com'><span>&#127814; Facebook</span></a></li>
          <li><a href='twitter.com'><span>&#127814; Twitter</span></a></li>
          <li><a href='instagram.com'><span>&#127814; Instagram</span></a></li>
          <li><a href='linkedin.com'><span>&#127814; LinkedIn</span></a></li>
        </ul>
      </nav>
    </div>
  )
}



export default Footer;


