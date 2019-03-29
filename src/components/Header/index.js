import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import logo from './images/logo.png';
import logoMobile from './images/logo-mobile.png';
import { HEADER_AUTH_LINKS, PAGES } from '../../constants';
import HeaderMobile from '../HeaderMobile';
import './styles.css';

class Header extends Component {
  static propTypes = {
    activePage: PropTypes.string,
    popupVisibleBlock: PropTypes.string.isRequired,
    togglePopup: PropTypes.func.isRequired
  };

  static defaultProps = {
    activePage: ''
  };

  handleMenuItem = () => {
    const { popupVisibleBlock, togglePopup } = this.props;
    if (popupVisibleBlock) {
      togglePopup();
    }
  };

  render() {
    const { activePage, popupVisibleBlock, togglePopup } = this.props;

    return (
      <div className="header">
        <div className="header__container">
          <img
            className="header-logo"
            src={logo}
            alt=""
            onClick={() => {
              window.location.hash = '';
            }}
          />
          <img className="header-logo_mobile" src={logoMobile} alt="" />

          <ul className="header-menu">
            <li
              className={cn('header-menu__item', {
                'header-menu__item-active': activePage === PAGES.ABOUT
              })}
            >
              <a href={`#${PAGES.ABOUT}`} onClick={this.handleMenuItem}>
                about us
              </a>
            </li>

            <li
              className={cn('header-menu__item', {
                'header-menu__item-active': activePage === PAGES.STORY
              })}
            >
              <a href={`#${PAGES.STORY}`} onClick={this.handleMenuItem}>
                story
              </a>
            </li>

            <li
              className={cn('header-menu__item', {
                'header-menu__item-active': activePage === PAGES.MISSION
              })}
            >
              <a href={`#${PAGES.MISSION}`} onClick={this.handleMenuItem}>
                misson
              </a>
            </li>

            <li
              className={cn('header-menu__item', {
                'header-menu__item-active': activePage === PAGES.EXPERTISE
              })}
            >
              <a href={`#${PAGES.EXPERTISE}`} onClick={this.handleMenuItem}>
                expertise
              </a>
            </li>

            <li
              className={cn('header-menu__item', {
                'header-menu__item-active': activePage === PAGES.CONTACT
              })}
            >
              <a href={`#${PAGES.CONTACT}`} onClick={this.handleMenuItem}>
                contact us
              </a>
            </li>
          </ul>

          <ul className="header-auth">
            <li className="header-auth__item">
              <a href={HEADER_AUTH_LINKS.REGISTER}>Register</a>
            </li>

            <li className="header-auth__item">
              <a href={HEADER_AUTH_LINKS.LOGIN}>Log In</a>
            </li>
          </ul>
        </div>

        <HeaderMobile
          activePage={activePage}
          popupVisibleBlock={popupVisibleBlock}
          togglePopup={togglePopup}
        />
      </div>
    );
  }
}

export default Header;
