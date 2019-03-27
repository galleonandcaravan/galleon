import React, { Component } from 'react';
import { Portal } from 'react-portal';
import { PAGES } from '../../constants';
import './styles.css';

class HeaderMobile extends Component {
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
    const { menuVisible } = this.state;

    return (
      <div className="header-mobile">
        {menuVisible ? (
          <Portal>
            <div className="header-mobile__menu-container">
              <div
                className="header-mobile__close"
                onClick={this.toggleMenuVisible}
              />

              <ul className="header-mobile__menu">
                <li>
                  <a href={`#${PAGES.ABOUT}`} onClick={this.toggleMenuVisible}>
                    about us
                  </a>
                </li>

                <li>
                  <a href={`#${PAGES.STORY}`} onClick={this.toggleMenuVisible}>
                    story
                  </a>
                </li>

                <li>
                  <a href={`#${PAGES.MISSION}`} onClick={this.toggleMenuVisible}>
                    misson
                  </a>
                </li>

                <li>
                  <a
                    href={`#${PAGES.EXPERTISE}`}
                    onClick={this.toggleMenuVisible}
                  >
                    expertise
                  </a>
                </li>

                <li>
                  <a href={`#${PAGES.CONTACT}`} onClick={this.toggleMenuVisible}>
                    contact us
                  </a>
                </li>
              </ul>
            </div>
          </Portal>
        ) : (
          <button
            className="header-mobile__hamburger"
            onClick={this.toggleMenuVisible}
            type="button"
          >
            <span />
          </button>
        )}
      </div>
    );
  }
}

export default HeaderMobile;
