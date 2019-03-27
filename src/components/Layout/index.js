import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Header from "../Header";
import Footer from "../Footer";
import GCLine from "../GCLine";
import Dots from "../Dots";
import './styles.css';

class Layout extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    activePage: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    activePage: '',
    children: null,
  };

  state = {
    childrenVisible: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ childrenVisible: true });
    }, 800);
  }

  render() {
    const { children, activePage, className } = this.props;
    const { childrenVisible } = this.state;

    return (
      <div className={cn('layout', className)}>
        <div className="layout__container">
          <Header activePage={activePage} />
          <GCLine activePage={activePage} />
          <CSSTransition in={childrenVisible} timeout={1000} classNames="children" unmountOnExit>
            <Fragment>{children}</Fragment>
          </CSSTransition>
          <Dots activePage={activePage} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
