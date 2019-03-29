import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Header from '../Header';
import Footer from '../Footer';
import GCLine from '../GCLine';
import Dots from '../Dots';
import { isMobile } from '../../utils/media';
import './styles.css';

class Layout extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    activePage: PropTypes.string,
    popupVisibleBlock: PropTypes.string,
    togglePopup: PropTypes.func.isRequired,
    gcLineHidden: PropTypes.bool,
    dotsHidden: PropTypes.bool
  };

  static defaultProps = {
    gcLineHidden: false,
    dotsHidden: false,
    popupVisibleBlock: '',
    className: '',
    activePage: '',
    children: null
  };

  state = {
    pageMounted: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        pageMounted: true
      });
    }, 0);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate();
  };

  render() {
    const {
      children,
      activePage,
      className,
      popupVisibleBlock,
      togglePopup,
      gcLineHidden,
      dotsHidden
    } = this.props;

    const { pageMounted } = this.state;

    return (
      <div className={cn('layout', className)}>
        <div className="layout__container">
          <Header
            activePage={activePage}
            popupVisibleBlock={popupVisibleBlock}
            togglePopup={togglePopup}
          />
          {!isMobile() && (
            <GCLine activePage={activePage} isHidden={gcLineHidden} />
          )}
          <div
            className={cn('layout-page', {
              'layout-page_mounted': pageMounted
            })}
          >
            {children}
          </div>
          <Dots activePage={activePage} isHidden={dotsHidden} />
          <Footer
            popupVisibleBlock={popupVisibleBlock}
            togglePopup={togglePopup}
          />
        </div>
      </div>
    );
  }
}

export default Layout;
