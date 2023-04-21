import React, { Component } from 'react';
import footerIcon from './images/icon.svg';
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
          Galcar Limited (t/a G&C) is a company registered in England and Wales (registered no. 11656491).
          G&C’s Payment and Foreign Currency Exchange Services are provided by Currency Cloud Limited
          (registered no. 06323311), whose office is at Stewardship Building, 1st Floor, 12 Steward Street,
          London, E1 6FQ. The Currency Cloud Limited is Authorised and Regulated by the Financial Conduct Authority
          under the Electronic Money Regulations 2011 for the issuing of electronic money. FCA registration no. 900100.
        </div>
      </div>
    );
  }
}

export default Footer;
