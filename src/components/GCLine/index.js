import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { GC_LINE_MARGIN_TOP } from './constants';
import gImage from './images/g.png';
import cImage from './images/c.png';
import { isTablet } from '../../utils/media';
import './styles.css';

class GCLine extends Component {
  static propTypes = {
    activePage: PropTypes.string,
    isHidden: PropTypes.bool
  };

  static defaultProps = {
    activePage: '',
    isHidden: false
  };

  state = {
    mountAnimateStarted: false
  };

  constructor(props) {
    super(props);
    this.dragStarted = false;
  }

  componentDidMount() {
    this.checkLinePositionInterval = setInterval(this.checkLinePosition, 10);
    this.currentLinePositionY = this.getCenterLinePosY();
    this.nextLinePosY = this.currentLinePositionY;
    this.clientHeight = document.body.clientHeight;
    window.addEventListener('resize', this.handleResize);

    this.handleResize();
    this.getDOMNodes();

    // Start mount animate in next tick
    setTimeout(() => {
      this.startMountAnimate();
    }, 0);
    this.setLineAndImagesPosition(this.currentLinePositionY, true);
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
    window.removeEventListener('resize', this.handleResize);
    clearInterval(this.checkLinePositionInterval);
  }

  resetPosition = () => {
    this.nextLinePosY = this.getCenterLinePosY();
  };

  pageChanged = () => {
    // Page changed. Detect position and start smoothly line move
    this.getDOMNodes();
    const {
      screenLinePaddingBottom
    } = this.getScreenLinePaddings();

    window.animateStep = 1;
    this.nextLinePosY = this.clientHeight - screenLinePaddingBottom;
    this.startMove = true;
    this.prevImageTopHeight = 0;
  };

  checkAnimate = () => {
    if (window.animateStep === 2) {

    }
  }

  handleResize = () => {
    if (
      this.prevWindowWidth !== window.innerWidth ||
      this.clientHeight !== document.body.clientHeight
    ) {
      this.clientHeight = document.body.clientHeight;
      this.clientWidth = document.body.clientWidth;
      this.isTablet = isTablet();
      this.getGCLineMarginTop();
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

    if (minimumDesktopPaddingTop < 100) {
      minimumDesktopPaddingTop = 100;
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
    this.gcLineDOM = document.querySelector('.js-gcLine');
  };

  checkLinePosition = () => {
    const { screenLinePaddingTop } = this.getScreenLinePaddings();

    if (this.nextLinePosY && this.currentLinePositionY) {
      let lineYChanged = false;

      // To top
      if (window.animateStep === 2) {
        if (this.currentLinePositionY > this.nextLinePosY) {
          // Calc speed
          const speed = this.getMoveSpeed(
            this.currentLinePositionY - this.nextLinePosY
          );
          this.currentLinePositionY += -speed;
          lineYChanged = true;
        } else {
          window.animateStep = 3; // Change step of aniamtion
          this.nextLinePosY = this.getCenterLinePosY();
        }
      }

      // To bottom and to center
      if (window.animateStep === 1 || window.animateStep === 3) {
        if (this.currentLinePositionY < this.nextLinePosY) {
          // Calc speed
          const speed = this.getMoveSpeed(
            this.nextLinePosY - this.currentLinePositionY
          );
          this.currentLinePositionY += speed;
          lineYChanged = true;
        } else {
          window.animateStep = window.animateStep === 1 // Change step of aniamtion
            ? 2
            : 4

          if (window.animateStep === 2) {
            this.nextLinePosY = screenLinePaddingTop;
          }
        }
      }

      if (lineYChanged) {
        // Set position of line and images
        this.setLineAndImagesPosition(this.currentLinePositionY);
      }
    }
  };

  getMoveSpeed = diffY => {
    const speed = Math.ceil(diffY / 40);
    return speed < 2 ? 2 : speed;
  };

  setLineAndImagesPosition = (linePosY, force) => {
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
    let posY = linePosY - 12;
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
      imageTopHeight = posY - (clientHeight - 400) / 2 + 15;
      imageBottomHeight = 400 - imageTopHeight;
    }

    // Set styles
    if (force || this.prevImageTopHeight !== imageTopHeight) {
      this.gcLineDOM.style.transform = `translateY(${centerLinePosY}px)`;
      this.imagesTopDOM.forEach(imageTopDOM => {
        imageTopDOM.style.height = `${imageTopHeight}px`;
      });
      this.imagesBottomDOM.forEach(imageBottomDOM => {
        imageBottomDOM.style.height = `${imageBottomHeight}px`;
      });
    }

    this.prevImageTopHeight = imageTopHeight;
  };

  render() {
    const { isHidden } = this.props;
    const { mountAnimateStarted } = this.state;

    return (
      <div
        className={cn(
          'gcLine',
          { gcLine_hidden: isHidden },
          { gcLine_animated: mountAnimateStarted }
        )}
      >
        <img src={gImage} className="gcLine__g" alt="" />
        <div className="gcLine__center js-gcLine">
          <div className="gcLine__line" />
        </div>
        <img src={cImage} className="gcLine__c" alt="" />
      </div>
    );
  }
}

export default GCLine;
