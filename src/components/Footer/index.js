import React, { Component } from 'react';
import cn from 'classnames';
import footerIcon from './images/icon.svg';
import './styles.css';
import {PAGES} from "../../constants";
import PropTypes from "prop-types";

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

  handleMenuItem = event => {
    event.preventDefault();
    event.stopPropagation();
    const { popupVisibleBlock, togglePopup } = this.props;

    if (!window.disableLinks && !window.disableMouseWheel) {
      window.location.hash = event.target.href.split('#')[1];
      if (popupVisibleBlock) {
        togglePopup();
      }
    }
  };

  render() {
    const { activePage, popupVisibleBlock, togglePopup } = this.props;

    return (
      <div className="footer">
        {/*<img*/}
        {/*  src={footerIcon}*/}
        {/*  className="footer-logo"*/}
        {/*  alt=""*/}
        {/*  onClick={() => {*/}
        {/*    window.location.hash = '';*/}
        {/*  }}*/}
        {/*/>*/}

        <div className="footer-copyright footer-copyright__left">
          <p>
            - For clients based in the European Economic Area, payment services for Galcar Limited (t/a G&C) are
            provided
            by CurrencyCloud B.V.. Registered in the Netherlands No. 72186178. Registered Office: Nieuwezijds
            Voorburgwal
            296 - 298, Mindspace Nieuwezijds Office 001 Amsterdam. CurrencyCloud B.V. is authorised by the DNB under the
            Wet op het financieel toezicht to carry out the business of an electronic-money institution (Relation
            Number:
            R142701).Б
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

        {/*<div className="footer-menu">*/}
        {/*  <ul>*/}
        {/*    <li className={cn('footer-menu__item', {*/}
        {/*      'footer-menu__item-active':*/}
        {/*        (activePage === ADDITIONAL_PAGES.COMPLAINTS || !activePage) && !popupVisibleBlock*/}
        {/*    })}>*/}
        {/*      <a href={`#${ADDITIONAL_PAGES.COMPLAINTS}`} onClick={this.handleMenuItem}>Complaints</a></li>*/}
        {/*    <li className={cn('footer-menu__item', {*/}
        {/*      'footer-menu__item-active':*/}
        {/*        (activePage === ADDITIONAL_PAGES.SAFEGUARDING || !activePage) && !popupVisibleBlock*/}
        {/*    })}>*/}
        {/*      <a href={`#${ADDITIONAL_PAGES.SAFEGUARDING}`} onClick={this.handleMenuItem}>Safeguarding</a></li>*/}
        {/*  </ul>*/}
        {/*</div>*/}

        <div className="footer-copyright footer-copyright__right">
          <p>
            For clients based in the United Kingdom and rest of the world, payment services for Galcar Limited (t/a G&C)
            are provided by The Currency Cloud Limited. Registered in England and Wales No. 06323311.
            Registered Office: Stewardship Building 1st Floor, 12 Steward Street London E1 6FQ.
            The Currency Cloud Limited is authorised by the Financial Conduct Authority under the Electronic Money
            Regulations 2011 for the issuing of electronic money (FRN: 900199).
          </p>
          <p>
            - Galcar Limited (Registered Office: Unit 15, 1 Bramshaw Road, London, E9 5BF) is an EMD Agent of The
            Currency
            Cloud Limited. Payment and e-money services are provided by The Currency Cloud Limited. Registered in
            England No. 06323311. Registered Office: Stewardship Building 1st Floor, 12 Steward Street London E1 6FQ.
            The Currency Cloud Limited is authorized by the Financial Conduct Authority under the Electronic Money
            Regulations 2011 for the issuing of electronic money (FRN: 900199);
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
