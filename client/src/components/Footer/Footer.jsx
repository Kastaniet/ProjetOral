import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Best Seller</span>
          <span>Nouveauté</span>
          <span>Précommande</span>
          <span>Retro</span>
          <span>Accesories</span>
          <span>Occasion</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta id massa nec rhoncus. In sem est, finibus vel varius a, feugiat id sem. Morbi quis malesuada enim. Donec quis interdum erat. Sed risus sem, porttitor a libero sit amet, iaculis pharetra ante. Vestibulum at metus ac elit elementum eleifend non in mi. Ut pellentesque et arcu nec lacinia. Nunc porttitor laoreet elit id rutrum. Mauris vel neque nulla. </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta id massa nec rhoncus. In sem est, finibus vel varius a, feugiat id sem. Morbi quis malesuada enim. Donec quis interdum erat. Sed risus sem, porttitor a libero sit amet, iaculis pharetra ante. Vestibulum at metus ac elit elementum eleifend non in mi. Ut pellentesque et arcu nec lacinia. Nunc porttitor laoreet elit id rutrum. Mauris vel neque nulla. </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo"><img src="/img/Symply-logo.png" alt=""/></span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer