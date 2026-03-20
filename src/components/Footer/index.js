import React, { Component } from 'react';
import PropTypes from "prop-types";
import './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  static propTypes = {
    activePage: PropTypes.string,
    popupVisibleBlock: PropTypes.string.isRequired,
    togglePopup: PropTypes.func.isRequired
  };

  static defaultProps = {
    activePage: ''
  };

  render() {
    return (
      <div className="footer">
        <div className="footer-copyright footer-copyright__left">
          <p>
            - For clients based in the European Economic Area, <strong>the issuance of e-money and the provision of related</strong>
            payment services for Galcar Limited (t/a G&C) are provided by CurrencyCloud B.V. <strong>CurrencyCoud B.V.
            is registered with the Dutch Chamber of Commerce</strong> in the Netherlands <strong>under number</strong> 72186178.
            Registered <strong>office Mr. Treublaan 7, 1097 DP, Amsterdam, Netherlands</strong>. CurrencyCloud B.V. is <strong>licensed and
            regulated by De Nederlandsche Bank as an Electronic Money Institution</strong> (Relation Number: R142701)
          </p>
          <p>
            - For United States, Payment services for Galcar Limited (T/a G&C) are provided by Visa Global Services Inc.
            (VGSI), a licensed money transmitter (NMLS ID 181032) in the states listed <a href='https://usa.visa.com/legal/visa-global-services-licenses.html'>here</a>.
            VGSI is licensed as a money transmitter by the New York Department of Financial Services.
            Mailing address: 900 Metro Center Blvd, Mailstop 1Z, Foster City, CA 94404. VGSI is also a registered
            Money Services Business (“MSB”) with FinCEN and a registered Foreign MSB with FINTRAC.
            For live customer support contact VGSI at (888) 733-0041.
          </p>
        </div>

        <div className="footer-copyright footer-copyright__right">
          <p>
            Payment and e-money services are provided by The Currency Cloud Limited. Registered in England No. 06323311.
            Registered Office: 1 Sheldon Square, London, W2 6TT, United Kingdom. The Currency Cloud Limited is authorized
            by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of
            electronic money (FRN: 900199)
          </p>
          <p>
            - Galcar Limited (Registered Office: Unit 15, 1 Bramshaw Road, London, E9 5BF). Payment and e-money services
            are provided by The Currency Cloud Limited. Registered in England No. 06323311. The Currency Cloud Limited
            is authorized by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the
            issuing of electronic money (FRN: 900199)
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Please see Currencycloud's Terms of Use page here: <a href='https://www.currencycloud.com/legal/terms/'>https://www.currencycloud.com/legal/terms/</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
