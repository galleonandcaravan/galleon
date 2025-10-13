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
            - For clients based in the United States, payment services for Galcar Limited (t/a G&C) are provided by The
            Currency Cloud Inc. which operates in partnership with Community Federal Savings Bank (CFSB) to facilitate
            payments in all 50 states in the US. CFSB is registered with the Federal Deposit Insurance Corporation (FDIC
            Certificate# 57129). The Currency Cloud Inc is registered with FinCEN and authorised in 39 states to
            transmit
            money (MSB Registration Number: 31000206794359). Registered Office: 104 5th Avenue, 20th Floor, New York ,
            NY
            10011.</p>
        </div>

        <div className="footer-copyright footer-copyright__right">
          <p>
            Payment and e-money services are provided by The Currency Cloud Limited. Registered in England No. 06323311.
            Registered Office: Stewardship Building 1st Floor, 12 Steward Street London E1 6FQ. The Currency Cloud Limited
            is authorized by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing
            of electronic money (FRN: 900199)
          </p>
          <p>
            - Galcar Limited (Registered Office: Unit 15, 1 Bramshaw Road, London, E9 5BF) is an EMD Agent of The
            Currency
            Cloud Limited. Payment and e-money services are provided by The Currency Cloud Limited. Registered in
            England No. 06323311. Registered Office: Stewardship Building 1st Floor, 12 Steward Street London E1 6FQ.
            The Currency Cloud Limited is authorized by the Financial Conduct Authority under the Electronic Money
            Regulations 2011 for the issuing of electronic money (FRN: 900199);
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
