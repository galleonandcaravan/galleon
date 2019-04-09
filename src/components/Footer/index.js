import React, { Component } from 'react';
import PropTypes from 'prop-types';
import footerIcon from './images/icon.png';
import './styles.css';

class Footer extends Component {
  static propTypes = {
    togglePopup: PropTypes.func.isRequired
  };

  render() {
    const { togglePopup } = this.props;

    return (
      <div className="footer">
        <img
          src={footerIcon}
          className="footer-logo"
          alt=""
          onClick={() => {
            window.location.hash = '';
          }}
        />

        <ul className="footer-menu">
          <li className="footer-menu__item">
            <span onClick={() => togglePopup('privacy')}>privacy</span>
          </li>

          <li className="footer-menu__item">
            <span onClick={() => togglePopup('security')}>security</span>
          </li>

          <li className="footer-menu__item">
            <span onClick={() => togglePopup('terms')}>terms & conditions</span>
          </li>
        </ul>

        <div className="footer-copyright">
          Galleon & Caravan is the trading name of Galcar Limited, a company registered in
          England and Wales (no. 11656491) and whose registered office is at Flat 15, 1
          Bramshaw Road, London, E9 5BF. Galleon & Caravan's payment, foreign currency
          exchange services and e-money accounts are provided by Ebury Partners UK
          Limited. Ebury Partners UK Limited is authorised and regulated by the Financial
          Conduct Authority as an Electronic Money Institution (no. 900797).
        </div>
      </div>
    );
  }
}

export default Footer;
