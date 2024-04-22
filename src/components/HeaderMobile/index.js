import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Portal } from 'react-portal';
import {ADDITIONAL_PAGES, HEADER_AUTH_LINKS, PAGES} from '../../constants';
import iconGcLite from './images/icon-gc-lite.svg';
import iconGcPro from './images/icon-gc-pro.svg';

import './styles.css';

class HeaderMobile extends Component {
  static propTypes = {
    activePage: PropTypes.string,
    togglePopup: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activePage: ''
  };

  state = {
    menuVisible: false,
  };

  changePage = (event) => {
    if (!window.disableLinks && !window.disableMouseWheel && event.target.href) {
      const hash = event.target.href.split('#')[1];
      window.location.hash = hash;
    }
    this.toggleMenuVisible();
  };

  toggleMenuVisible = () => {
    const { menuVisible } = this.state;
    const updatedMenuVisible = !menuVisible;
    this.setState({ menuVisible: updatedMenuVisible });

    if (updatedMenuVisible) {
      document.body.style['overflow-y'] = 'hidden';
    } else {
      document.body.style['overflow-y'] = 'auto';
    }
  };

  openModal = (activeBlock)  => {
    const { togglePopup } = this.props;
    togglePopup(activeBlock);
    this.toggleMenuVisible();
  };

  render() {
    const { activePage } = this.props;
    const { menuVisible } = this.state;

    return (
      <div className="header-mobile">
        <CSSTransition
          in={menuVisible}
          timeout={300}
          classNames="header-mobile-menu"
          unmountOnExit
        >
          <Portal>
            <div
              className="header-mobile-layout"
              onClick={this.toggleMenuVisible}
            >
              <div
                className="header-mobile-layout__in"
                onClick={event => event.stopPropagation()}
              >
                <button
                  className="header-mobile__close"
                  onClick={this.toggleMenuVisible}
                  type="button"
                >
                  <span />
                </button>

                <ul className="header-mobile-menu">
                  <li
                    className={cn('header-mobile-menu__item', {
                      'header-mobile-menu__item_active':
                        activePage === PAGES.ABOUT || !activePage
                    })}
                  >
                    <a
                      href={`#${PAGES.ABOUT}`}
                      onClick={this.changePage}
                    >
                      About
                    </a>
                  </li>

                  <li
                    className={cn('header-mobile-menu__item', {
                      'header-mobile-menu__item_active':
                        activePage === PAGES.STORY
                    })}
                  >
                    <a
                      href={`#${PAGES.STORY}`}
                      onClick={this.changePage}
                    >
                      Story
                    </a>
                  </li>

                  <li
                    className={cn('header-mobile-menu__item', {
                      'header-mobile-menu__item_active':
                        activePage === PAGES.MISSION
                    })}
                  >
                    <a
                      href={`#${PAGES.MISSION}`}
                      onClick={this.changePage}
                    >
                      Mission
                    </a>
                  </li>

                  <li
                    className={cn('header-mobile-menu__item', {
                      'header-mobile-menu__item_active':
                        activePage === PAGES.EXPERTISE
                    })}
                  >
                    <a
                      href={`#${PAGES.EXPERTISE}`}
                      onClick={this.changePage}
                    >
                      Expertise
                    </a>
                  </li>

                  <li
                    className={cn('header-mobile-menu__item', {
                      'header-mobile-menu__item_active':
                        activePage === PAGES.CONTACT
                    })}
                  >
                    <a
                      href={`#${PAGES.CONTACT}`}
                      onClick={this.changePage}
                    >
                      Contact
                    </a>
                  </li>

                  <li
                    className={cn('header-mobile-menu__item', {
                      'header-mobile-menu__item_active':
                        activePage === ADDITIONAL_PAGES.COMPLAINTS
                    })}
                  >
                    <a
                      href={`#${ADDITIONAL_PAGES.COMPLAINTS}`}
                      onClick={this.changePage}
                    >
                      Complaints
                    </a>
                  </li>

                  <li
                    className={cn('header-mobile-menu__item', {
                      'header-mobile-menu__item_active':
                        activePage === ADDITIONAL_PAGES.SAFEGUARDING
                    })}
                  >
                    <a
                      href={`#${ADDITIONAL_PAGES.SAFEGUARDING}`}
                      onClick={this.changePage}
                    >
                      Safeguarding
                    </a>
                  </li>
                </ul>

                <ul className="header-mobile-auth">
                  <li className="header-mobile-auth__item">
                    <a href={HEADER_AUTH_LINKS.LOGIN}>
                      <img src={iconGcPro} alt='galcarpro.com' />
                    </a>
                  </li>
                  <li className="header-mobile-auth__item">
                    <a href={HEADER_AUTH_LINKS.REGISTER}>
                      <img src={iconGcLite} alt='galcarlite.com' />
                    </a>
                  </li>
                </ul>

                <div className="header-mobile-copyright">
                  Galleon & Caravan, GC Lite & GC Pro are trading names of
                  Galcar Limited, a company registered in England & Wales
                  (no. 11656491) and whose registered office is at Unit 15, 1
                  Bramshaw Road, London, E9 5BF.
                </div>
              </div>
            </div>
          </Portal>
        </CSSTransition>
        <button
          className="header-mobile__hamburger"
          onClick={this.toggleMenuVisible}
          type="button"
        >
        </button>

      </div>
    );
  }
}

export default HeaderMobile;
