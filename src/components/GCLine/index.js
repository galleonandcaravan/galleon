import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import throttle from 'lodash.throttle';
import { GC_LINE_MARGIN_TOP } from './constants';
import gImage from './images/g.png';
import cImage from './images/c.png';
import { isTablet } from '../../utils/mobile';
import './styles.css';

class GCLine extends Component {
  static propTypes = {
    activePage: PropTypes.string
  };

  static defaultProps = {
    activePage: ''
  };

  state = {
    mountAnimateStarted: false
  };

  constructor(props) {
    super(props);
    this.dragStarted = false;
  }

  componentDidMount() {
    this.handleMouseMoveWithThrottle = throttle(this.handleMouseMove, 10);
    this.checkMousePositionInterval = setInterval(this.checkMousePosition, 10);
    this.lineY = this.getCenterLinePosY();
    this.clientHeight = document.body.clientHeight;

    window.addEventListener('resize', this.handleResize);
    document.addEventListener('mouseup', this.handleEndDrag);
    document.addEventListener('touchup', this.handleEndDrag);
    document.addEventListener('touchmove', this.handleMouseMoveWithThrottle);
    document.addEventListener('mousemove', this.handleMouseMoveWithThrottle);

    this.handleResize();
    this.getDOMNodes();
    this.resetPosition();

    // Start mount animate in next tick
    setTimeout(() => {
      this.startMountAnimate();
    }, 0);
  }

  componentDidUpdate(prevProps) {
    const { activePage } = this.props;

    // Page changed, start pageChanged method in next tick
    if (prevProps.activePage !== activePage) {
      setTimeout(() => {
        this.pageChanged();
      }, 0);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMoveWithThrottle);
    document.removeEventListener('touchmove', this.handleMouseMoveWithThrottle);
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('mouseup', this.handleEndDrag);
    document.removeEventListener('touchup', this.handleEndDrag);
    clearInterval(this.checkMousePositionInterval);
  }

  resetPosition = () => {
    this.lineY = this.getCenterLinePosY();
    this.setLineAndImagesPosition(this.lineY);
  };

  pageChanged = () => {
    // Page changed. Detect position and start smoothly line move
    this.getDOMNodes();
    const centerPositionY = this.getCenterLinePosY();
    this.moveSmoothly = true;
    const {
      screenLinePaddingTop,
      screenLinePaddingBottom
    } = this.getScreenLinePaddings();
    this.currentMouseY =
      !this.currentMouseY || this.currentMouseY > centerPositionY
        ? screenLinePaddingTop
        : this.clientHeight - screenLinePaddingBottom;
    this.lineY += 1;
    this.startMove = true;
    this.prevImageTopHeight = 0;
  };

  handleResize = () => {
    this.clientHeight = document.body.clientHeight;
    if (this.prevWindowWidth !== window.innerWidth) {
      this.lineY = this.getCenterLinePosY();
      this.clientWidth = document.body.clientWidth;
      this.isTablet = isTablet();
      this.getGCLineMarginTop();
      this.handleEndDrag();
      this.resetPosition();
    }
    this.prevWindowWidth = window.innerWidth;
  };

  startMountAnimate = () => {
    this.setState({
      mountAnimateStarted: true
    });
  };

  getMinimumDesktopPaddings = () => {
    const { clientHeight } = this;
    let minimumDesktopPaddingTop = (clientHeight - 650) / 2;
    let minimumDesktopPaddingBottom = (clientHeight - 650) / 2 + 70;

    if (minimumDesktopPaddingTop < 70) {
      minimumDesktopPaddingTop = 70;
    }

    if (minimumDesktopPaddingBottom < 140) {
      minimumDesktopPaddingBottom = 140;
    }
    return {
      minimumDesktopPaddingTop,
      minimumDesktopPaddingBottom
    };
  };

  getMinimumTabletPaddings = () => {
    return {
      minimumTabletPaddingTop:
        (this.clientHeight / 100) * 33 - this.gcLineMarginTop,
      minimumTabletPaddingBottom:
        (this.clientHeight / 100) * 24 + this.gcLineMarginTop
    };
  };

  getScreenLinePaddings = () => {
    // Get screen paddings for line
    const {
      minimumDesktopPaddingTop,
      minimumDesktopPaddingBottom
    } = this.getMinimumDesktopPaddings();
    const {
      minimumTabletPaddingTop,
      minimumTabletPaddingBottom
    } = this.getMinimumTabletPaddings();
    const screenLinePaddingTop = this.isTablet
      ? minimumTabletPaddingTop
      : minimumDesktopPaddingTop;
    const screenLinePaddingBottom = this.isTablet
      ? minimumTabletPaddingBottom
      : minimumDesktopPaddingBottom;

    return {
      screenLinePaddingTop,
      screenLinePaddingBottom
    };
  };

  getGCLineMarginTop = () => {
    let gcLineMarginTop = GC_LINE_MARGIN_TOP.DEFAULT;
    if (isTablet()) {
      gcLineMarginTop = GC_LINE_MARGIN_TOP.TABLET;
    }
    this.gcLineMarginTop = gcLineMarginTop;
  };

  getCenterLinePosY = () => {
    return document.body.clientHeight / 2;
  };

  getDOMNodes = () => {
    this.imagesTopDOM = [
      ...document.querySelectorAll('.js-image-switcher-top')
    ];
    this.imagesBottomDOM = [
      ...document.querySelectorAll('.js-image-switcher-bottom')
    ];
    this.gcLinesDOM = [...document.querySelectorAll('.js-gcLine')];
  };

  handleMouseMove = event => {
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    // Save current position of mouse Y
    if (this.dragStarted) {
      this.currentMouseY = clientY + window.pageYOffset - this.gcLineMarginTop;
    }
  };

  handleStartDrag = () => {
    this.currentMouseY = 0;
    this.dragStarted = true;
    this.startMove = true;
  };

  handleEndDrag = () => {
    this.dragStarted = false;
    this.startMove = false;
  };

  checkMousePosition = () => {
    // Check position of mouse Y and calc position of line

    if (this.startMove && this.currentMouseY) {
      let lineYChanged = false;

      if (this.currentMouseY) {
        if (this.currentMouseY < this.lineY) {
          // Calc speed
          const speed = this.getMoveSpeed(this.lineY - this.currentMouseY);
          this.lineY += -speed;
          lineYChanged = true;
        }

        if (this.currentMouseY > this.lineY) {
          // Calc speed
          const speed = this.getMoveSpeed(this.currentMouseY - this.lineY);
          this.lineY += speed;
          lineYChanged = true;
        }

        if (lineYChanged) {
          // Set position of line and images
          this.setLineAndImagesPosition(this.lineY);
        } else {
          // Stop smoothly move
          this.moveSmoothly = false;
        }
      }
    } else {
      this.moveSmoothly = false;
    }
  };

  getMoveSpeed = diffY => {
    const speed = this.moveSmoothly ? Math.ceil(diffY / 50) : diffY;
    return speed < 2 ? 2 : speed;
  };

  setLineAndImagesPosition = (mousePosY, force) => {
    // Set position of line and height of images
    if (!this.imageTopDOM) {
      this.getDOMNodes();
    }
    const { clientHeight } = this;
    const halfScreenHeight = clientHeight / 2;
    const {
      screenLinePaddingTop,
      screenLinePaddingBottom
    } = this.getScreenLinePaddings();
    const clientHeight15Percent = (clientHeight / 100) * 15;
    let posY = mousePosY - 12;
    if (posY <= screenLinePaddingTop) {
      posY = screenLinePaddingTop;
    }

    if (posY >= clientHeight - screenLinePaddingBottom) {
      posY = clientHeight - screenLinePaddingBottom;
    }

    // Calc line pos y
    const centerLinePosY = posY - halfScreenHeight;

    // Calc height of images containers
    let imageTopHeight =
      posY + 12 + this.gcLineMarginTop - clientHeight15Percent + 20;
    let imageBottomHeight =
      clientHeight -
      12 -
      posY -
      this.gcLineMarginTop -
      clientHeight15Percent -
      20;

    if (isTablet()) {
      imageTopHeight -= (clientHeight / 100) * 22.2;
      imageBottomHeight -= (clientHeight / 100) * 6.2;
    }

    // Set styles
    if (force || this.prevImageTopHeight !== imageTopHeight) {
      this.gcLinesDOM.forEach(gcLineDOM => {
        gcLineDOM.style.transform = `translateY(${centerLinePosY}px)`; // eslint-disable-line
      });
      this.imagesTopDOM.forEach(imageTopDOM => {
        imageTopDOM.style.height = `${imageTopHeight}px`; // eslint-disable-line
      });
      this.imagesBottomDOM.forEach(imageBottomDOM => {
        imageBottomDOM.style.height = `${imageBottomHeight}px`; // eslint-disable-line
      });
    }

    this.prevImageTopHeight = imageTopHeight;
  };

  render() {
    const { mountAnimateStarted } = this.state;

    return (
      <div className={cn('gcLine', { gcLine__animated: mountAnimateStarted })}>
        <img src={gImage} className="gcLine__g" alt="" />
        <div
          className="gcLine__center js-gcLine"
          onMouseDown={this.handleStartDrag}
          onTouchStart={this.handleStartDrag}
          onTouchEnd={this.handleEndDrag}
        >
          <div className="gcLine__line" />
        </div>
        <img src={cImage} className="gcLine__c" alt="" />
      </div>
    );
  }
}

export default GCLine;
