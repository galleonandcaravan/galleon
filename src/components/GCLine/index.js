import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import throttle from 'lodash.throttle';
import {
  SCREEN_LINE_PADDING_DESKTOP_TOP,
  SCREEN_LINE_PADDING_DESKTOP_BOTTOM
} from './constants';
import gImage from './images/g.png';
import cImage from './images/c.png';
import { isMobileOrTablet } from '../../utils/mobile';
import './styles.css';

class GCLine extends Component {
  static propTypes = {
    activePage: PropTypes.string
  };

  static defaultProps = {
    activePage: ''
  };

  state = {
    animateStarted: false
  };

  constructor(props) {
    super(props);
    this.center = React.createRef();
    this.dragStarted = false;
  }

  componentDidMount() {
    // Start animate in next tick
    setTimeout(() => {
      this.startAnimate();
    }, 0);

    // Set line position after finish start animation
    setTimeout(() => {
      this.setLineAndImagesPosition(document.body.clientHeight / 2);
    }, 850);

    // Add mouseMove listener after 2 sec
    setTimeout(() => {
      document.addEventListener('mousemove', this.handleMouseMoveWithThrottle);
    }, 2000);

    this.handleMouseMoveWithThrottle = throttle(this.handleMouseMove, 10);
    this.checkMousePosition = setInterval(this.checkMousePosition, 10);
    this.lineMouseY = document.body.clientHeight / 2;
    this.clientHeight = document.body.clientHeight;
    this.handleResize();

    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps) {
    const { activePage } = this.props;

    // Page changed
    if (prevProps.activePage !== activePage) {
      setTimeout(() => {
        this.getImagesDOMNodes();
        this.setLineAndImagesPosition(this.currentMouseY, true);
      }, 0);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMoveWithThrottle);
    window.removeEventListener('resize', this.handleResize);
    clearInterval(this.checkMousePosition);
  }

  handleResize = () => {
    this.clientHeight = document.body.clientHeight;
    this.isMobile = isMobileOrTablet();
  };

  startAnimate = () => {
    this.setState({
      animateStarted: true
    });
  };

  getImagesDOMNodes = () => {
    const { activePage } = this.props;
    this.imageTopDOM = document.querySelector(
      `#page-${activePage || 'about'} #js-bg-image-top`
    );
    this.imageBottomDOM = document.querySelector(
      `#page-${activePage || 'about'} #js-bg-image-bottom`
    );
  };

  handleMouseMove = event => {
    // Save current position of mouse Y
    this.currentMouseY = event.clientY + window.pageYOffset;
  };

  checkMousePosition = () => {
    // Check position of mouse Y and calc position of line

    let lineMouseYChanged = false;
    if (this.currentMouseY) {
      if (this.currentMouseY < this.lineMouseY) {
        // Calc speed
        const speed = this.getMoveSpeed(this.lineMouseY - this.currentMouseY);
        this.lineMouseY += -speed;
        lineMouseYChanged = true;
      }

      if (this.currentMouseY > this.lineMouseY) {
        // Calc speed
        const speed = this.getMoveSpeed(this.currentMouseY - this.lineMouseY);
        this.lineMouseY += speed;
        lineMouseYChanged = true;
      }

      if (lineMouseYChanged) {
        // Set position of line and images
        this.setLineAndImagesPosition(this.lineMouseY);
      }
    }
  };

  getMoveSpeed = diffY => {
    const speed = Math.ceil(diffY / 10);
    return speed < 2 ? 2 : speed;
  };

  setLineAndImagesPosition = (mousePosY, force) => {
    // Set position of line and height of images
    if (!this.imageTopDOM) {
      this.getImagesDOMNodes();
    }
    const { clientHeight } = this;
    const halfScreenHeight = clientHeight / 2;

    const screenLinePaddingTop = this.isMobile
      ? clientHeight / 100 * 33
      : SCREEN_LINE_PADDING_DESKTOP_TOP;
    const screenLinePaddingBottom = this.isMobile
      ? clientHeight / 100 * 26
      : SCREEN_LINE_PADDING_DESKTOP_BOTTOM

    let posY = mousePosY - 10;
    if (posY <= screenLinePaddingTop) {
      posY = screenLinePaddingTop;
    }

    if (posY >= clientHeight - screenLinePaddingBottom) {
      posY = clientHeight - screenLinePaddingBottom;
    }

    // Calc line pos y
    const centerLinePosY = posY - halfScreenHeight;

    // Calc height of images containers
    const imageTopHeight = posY + 12;
    const imageBottomHeight = clientHeight - posY - 12;

    // Set styles
    if (
      (force || this.prevImageTopHeight !== imageTopHeight) &&
      (this.center || {}).current &&
      this.imageTopDOM &&
      this.imageBottomDOM
    ) {
      this.center.current.style.transform = `translateY(${centerLinePosY}px)`;
      this.imageTopDOM.style.height = `${imageTopHeight}px`;
      this.imageBottomDOM.style.height = `${imageBottomHeight}px`;
    }

    this.prevImageTopHeight = imageTopHeight;
  };

  render() {
    const { animateStarted } = this.state;

    return (
      <div className={cn('gcLine', { gcLine__animated: animateStarted })}>
        <img src={gImage} className="gcLine__g" alt="" />
        <div
          className="gcLine__center"
          onMouseDown={this.handleStartDrag}
          onTouchStart={this.handleStartDrag}
          ref={this.center}
        >
          <div className="gcLine__line" />
        </div>
        <img src={cImage} className="gcLine__c" alt="" />
      </div>
    );
  }
}

export default GCLine;
