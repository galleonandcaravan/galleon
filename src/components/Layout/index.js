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
    popupsVisible: PropTypes.shape({}).isRequired,
    togglePopup: PropTypes.func.isRequired,
  };

  state = {
    pageMounted: false
  };

  static defaultProps = {
    className: '',
    activePage: '',
    children: null
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
      popupsVisible,
      togglePopup
    } = this.props;

    const { pageMounted } = this.state;

    return (
      <div className={cn('layout', className)}>
        <div className="layout__container">
          <Header
            activePage={activePage}
            popupsVisible={popupsVisible}
            togglePopup={togglePopup}
          />
          {!isMobile() && <GCLine activePage={activePage} />}
          <div
            className={cn('layout-page', {
              'layout-page_mounted': pageMounted
            })}
          >
            {children}
          </div>
          <Dots activePage={activePage} />
          <Footer popupsVisible={popupsVisible} togglePopup={togglePopup} />
        </div>
      </div>
    );
  }
}

export default Layout;
