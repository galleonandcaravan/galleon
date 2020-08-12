import React, { Component } from 'react';
import footerIcon from './images/icon.png';
import './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src={footerIcon}
          className="footer-logo"
          alt=""
          onClick={() => {
            window.location.hash = '';
          }}
        />

        <div className="footer-copyright">
          Galleon & Caravan, GC Lite & GC Pro are trading names of
          Galcar Limited, a company registered in England & Wales
          (no. 11656491) and whose registered office is at Unit 15, 1
          Bramshaw Road, London, E9 5BF.
        </div>
      </div>
    );
  }
}

export default Footer;
