import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import logo from './images/logo.png';
import logoMobile from './images/logo-mobile.png';
import { HEADER_AUTH_LINKS, PAGES } from '../../constants';
import HeaderMobile from '../HeaderMobile';
import './styles.css';

const Header = ({ activePage }) => {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header-logo" src={logo} alt=""/>
        <img className="header-logo_mobile" src={logoMobile} alt=""/>

        <ul className="header-menu">
          <li
            className={cn('header-menu__item', {
              'header-menu__item-active': activePage === PAGES.ABOUT,
            })}
          >
            <a href={`#${PAGES.ABOUT}`}>about us</a>
          </li>

          <li
            className={cn('header-menu__item', {
              'header-menu__item-active': activePage === PAGES.STORY,
            })}
          >
            <a href={`#${PAGES.STORY}`}>story</a>
          </li>

          <li
            className={cn('header-menu__item', {
              'header-menu__item-active': activePage === PAGES.MISSION,
            })}
          >
            <a href={`#${PAGES.MISSION}`}>misson</a>
          </li>

          <li
            className={cn('header-menu__item', {
              'header-menu__item-active': activePage === PAGES.EXPERTISE,
            })}
          >
            <a href={`#${PAGES.EXPERTISE}`}>expertise</a>
          </li>

          <li
            className={cn('header-menu__item', {
              'header-menu__item-active': activePage === PAGES.CONTACT,
            })}
          >
            <a href={`#${PAGES.CONTACT}`}>contact us</a>
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
      />
    </div>
  );
}

Header.propTypes = {
  activePage: PropTypes.string,
}

Header.defaultProps = {
  activePage: '',
}

export default Header;
