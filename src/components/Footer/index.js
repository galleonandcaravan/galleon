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
          - For clients based in the European Economic Area, payment services for Galcar Limited (t/a G&C) are provided
          by CurrencyCloud B.V.. Registered in the Netherlands No. 72186178. Registered Office: Nieuwezijds Voorburgwal
          296 - 298, Mindspace Nieuwezijds Office 001 Amsterdam. CurrencyCloud B.V. is authorised by the DNB under the
          Wet op het financieel toezicht to carry out the business of an electronic-money institution (Relation Number:
          R142701).Б<br/>
          - For clients based in the United States, payment services for Galcar Limited (t/a G&C) are provided by The
          Currency Cloud Inc. which operates in partnership with Community Federal Savings Bank (CFSB) to facilitate
          payments in all 50 states in the US. CFSB is registered with the Federal Deposit Insurance Corporation (FDIC
          Certificate# 57129). The Currency Cloud Inc is registered with FinCEN and authorised in 39 states to transmit
          money (MSB Registration Number: 31000206794359). Registered Office: 104 5th Avenue, 20th Floor, New York , NY
          10011.<br/>
          - For clients based in the United Kingdom and rest of the world, payment services for Galcar Limited (t/a G&C)
          are provided by The Currency Cloud Limited. Registered in England and Wales No. 06323311. Registered Office:
          Stewardship Building 1st Floor, 12 Steward Street London E1 6FQ. The Currency Cloud Limited is authorised by
          the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of electronic
          money (FRN: 900199).
        </div>
      </div>
    );
  }
}

export default Footer;
