import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Portal } from 'react-portal';
import { HEADER_AUTH_LINKS, PAGES } from '../../constants';
import './styles.css';

class HeaderMobile extends Component {
  static propTypes = {
    activePage: PropTypes.string,
    popupVisibleBlock: PropTypes.string.isRequired,
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
  }

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
                      About us
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
                      Contact us
                    </a>
                  </li>
                </ul>

                <ul className="header-mobile-auth">
                  <li className="header-mobile-auth__item">
                    <a
                      href={HEADER_AUTH_LINKS.REGISTER}
                      onClick={this.toggleMenuVisible}
                    >
                      Register
                    </a>
                  </li>
                  <li className="header-mobile-auth__item">
                    <a
                      href={HEADER_AUTH_LINKS.LOGIN}
                      onClick={this.toggleMenuVisible}
                    >
                      Log In
                    </a>
                  </li>
                </ul>

                <ul className="header-mobile-additional">
                  <li
                    className="header-mobile-additional__item"
                    onClick={() => this.openModal('privacy')}
                  >
                    Privacy
                  </li>

                  <li
                    className="header-mobile-additional__item"
                    onClick={() => this.openModal('security')}
                  >
                    Security
                  </li>

                  <li
                    className="header-mobile-additional__item"
                    onClick={() => this.openModal('terms')}
                  >
                    Terms & conditions
                  </li>
                </ul>

                <div className="header-mobile-copyright">
                  Galleon & Caravan is the trading name of Galcar Limited, a company registered in
                  England and Wales (no. 11656491) and whose registered office is at Flat 15, 1
                  Bramshaw Road, London, E9 5BF. Galleon & Caravan's payment, foreign currency
                  exchange services and e-money accounts are provided by Ebury Partners UK
                  Limited. Ebury Partners UK Limited is authorised and regulated by the Financial
                  Conduct Authority as an Electronic Money Institution (no. 900797).
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
          <span />
        </button>

      </div>
    );
  }
}

export default HeaderMobile;
