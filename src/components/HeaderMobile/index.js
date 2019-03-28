import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Portal } from 'react-portal';
import { HEADER_AUTH_LINKS, PAGES } from '../../constants';
import './styles.css';

class HeaderMobile extends Component {
  static propTypes = {
    activePage: PropTypes.string
  };

  static defaultProps = {
    activePage: ''
  };

  state = {
    menuVisible: false
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
                        activePage === PAGES.ABOUT
                    })}
                  >
                    <a
                      href={`#${PAGES.ABOUT}`}
                      onClick={this.toggleMenuVisible}
                    >
                      about us
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
                      onClick={this.toggleMenuVisible}
                    >
                      story
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
                      onClick={this.toggleMenuVisible}
                    >
                      misson
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
                      onClick={this.toggleMenuVisible}
                    >
                      expertise
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
                      onClick={this.toggleMenuVisible}
                    >
                      contact us
                    </a>
                  </li>
                </ul>

                <ul className="header-mobile-auth">
                  <li className="header-mobile-auth__item">
                    <a href={HEADER_AUTH_LINKS.REGISTER}>REGISTER</a>
                  </li>
                  <li className="header-mobile-auth__item">
                    <a href={HEADER_AUTH_LINKS.LOGIN}>LOG IN</a>
                  </li>
                </ul>
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
