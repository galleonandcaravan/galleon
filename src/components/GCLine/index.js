/* eslint-disable prefer-const */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { GC_LINE_MARGIN_TOP } from './constants';
import gImage from './images/g.png';
import cImage from './images/c.png';
import {isTablet, isMobile, isDesktop, isIOS} from '../../utils/media';
import './styles.css';

const UP_ARROW_KEY_NUM = 38;
const DOWN_ARROW_KEY_NUM = 40;
const ARROW_LINE_MOVE_AMOUNT = 2;
const LINE_MOVE_SPEED = 10;

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
    mountAnimateStarted: false,
    animateTransformStop: false
  };

  constructor(props) {
    super(props);
    this.dragStarted = false;
    this.gcLineCenter = React.createRef();
    this.linePosY = 0;
    window.checkLinePositionPaused = false;
    this.moveLineIntervalUp = false;
    this.moveLineIntervalDown = false;
  }

  componentDidMount() {
    this.currentLinePositionY = this.getCenterLinePosY();
    this.nextLinePosY = this.currentLinePositionY;
    this.clientHeight = document.body.clientHeight;
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('hashchange', this.handleChangePage);
  
    this.imagesSwitcher = document.querySelector('.js-images-switcher');
  
    if (isTablet() || isMobile()) {
      if (this.gcLineCenter.current) {
        this.gcLineCenter.current.addEventListener('touchstart', this.mouseDown, false);
        this.gcLineCenter.current.addEventListener('touchend', this.mouseUp, false);
      }
    } else {
      if (this.gcLineCenter.current) {
        this.gcLineCenter.current.addEventListener('mousedown', this.mouseDown, false);
      }
      window.addEventListener('mouseup', this.mouseUp, false);
  
      document.addEventListener('keydown', this.handleKeyDownNav);
      document.addEventListener('keyup', this.handleKeyUpNav);
    }
    
    this.handleResize();
    this.getDOMNodes();

    setTimeout(() => {
      this.startMountAnimate();

      setTimeout(() => {
        this.setState({
          animateTransformStop: true,
        });
        
        if (this.gcLineCenter.current) {
          this.gcLineCenter.current.classList.add('gcLine__center--active');
        }
      }, !isMobile() ? 630 : 0);
    }, !isMobile() ? 1400 : 0);
    
    this.setLineAndImagesPosition(this.currentLinePositionY, true);
  }

  componentDidUpdate(prevProps) {
    const { activePage } = this.props;

    // Page changed, start pageChanged method in next tick
    if (prevProps.activePage !== activePage && !window.skipAnimation) {
      setTimeout(() => {
        this.pageChanged();
      }, 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('hashchange', this.handleChangePage);
    document.removeEventListener('keydown', this.handleKeyDownNav);
    document.removeEventListener('keyup', this.handleKeyUpNav);
    if (this.gcLineCenter.current) {
      this.gcLineCenter.current.removeEventListener('mousedown', this.mouseDown, false);
      this.gcLineCenter.current.removeEventListener('touchstart', this.mouseDown, false);
      this.gcLineCenter.current.removeEventListener('touchend', this.mouseUp, false);
    }
    clearInterval(this.checkLinePositionInterval);
  }

  resetPosition = () => {
    this.nextLinePosY = this.getCenterLinePosY();
  };

  pageChanged = () => {
    // Page changed. Detect position and start smoothly line move
    this.getDOMNodes();
    const { screenLinePaddingBottom } = this.getScreenLinePaddings();

    window.animateStep = 1;
    this.nextLinePosY = this.clientHeight - screenLinePaddingBottom;
    this.startMove = true;
    this.prevImageTopHeight = 0;
  };

  handleResize = () => {
    if (
      this.prevWindowWidth !== window.innerWidth ||
      this.clientHeight !== document.body.clientHeight
    ) {
      this.clientHeight = document.body.clientHeight;
      this.clientWidth = document.body.clientWidth;
      this.isTablet = isTablet();
      this.isMobile = isMobile();
      this.imagesSwitcherHeight = this.imagesSwitcher.offsetHeight;
      this.getDOMNodes();
      this.getGCLineMarginTop();
      this.resetPosition();
      this.setLineAndImagesPosition(this.nextLinePosY, true);
    }
    this.prevWindowWidth = window.innerWidth;
  };
  
  handleChangePage = () => {
    if (this.checkLinePositionInterval) {
      clearInterval(this.checkLinePositionInterval);
    }
    
    this.checkLinePositionInterval = setInterval(this.checkLinePosition, 10);
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

  getMinimumMobilePaddings = () => {
    return {
      minimumMobilePaddingTop:
        (this.clientHeight / 100) * 33,
      minimumMobilePaddingBottom:
        (this.clientHeight / 100) * 35
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
    const {
      minimumMobilePaddingTop,
      minimumMobilePaddingBottom
    } = this.getMinimumMobilePaddings();
    let screenLinePaddingTop = this.isTablet
      ? minimumTabletPaddingTop
      : minimumDesktopPaddingTop;
    let screenLinePaddingBottom = this.isTablet
      ? minimumTabletPaddingBottom
      : minimumDesktopPaddingBottom;

    if (this.isMobile) {
      screenLinePaddingTop = minimumMobilePaddingTop
      screenLinePaddingBottom = minimumMobilePaddingBottom
    }

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
    if (isMobile()) {
      gcLineMarginTop = GC_LINE_MARGIN_TOP.MOBILE;
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
    
    if (!window.enableLineAnimation) {
      clearInterval(this.checkLinePositionInterval);
    }
    
    if (window.checkLinePositionPaused) {
      return;
    }

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
          window.animateStep =
            window.animateStep === 1 // Change step of aniamtion
              ? 2
              : 4;

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
    const speed = Math.ceil(diffY / 30);
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
    let imageTopHeight = posY + 12 + this.gcLineMarginTop - clientHeight15Percent + 20;
    let imageBottomHeight = clientHeight - 12 - posY - this.gcLineMarginTop - clientHeight15Percent - 20;

    if (isTablet() || isMobile()) {
      imageTopHeight = posY - (clientHeight - this.imagesSwitcherHeight) / 2 + 15;
      imageBottomHeight = this.imagesSwitcherHeight - imageTopHeight;
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
  
      this.linePosY = linePosY;
    }

    this.prevImageTopHeight = imageTopHeight;
  };
  
  mouseDown = (event) => {
    if (isTablet() || isMobile()) {
      event.preventDefault();
      this.gcLineCenter.current.addEventListener('touchmove', this.lineMove, false);
    } else {
      window.addEventListener('mousemove', this.lineMove, true);
    }
    window.checkLinePositionPaused = true;
  };

  mouseUp = () => {
    if (isTablet() || isMobile()) {
      this.gcLineCenter.current.removeEventListener('touchmove', this.lineMove, false);
    } else {
      this.gcLineCenter.current.classList.remove('gcLine_dragged');
      window.removeEventListener('mousemove', this.lineMove, true);
    }
    window.checkLinePositionPaused = false;
  };
  
  getTouches = (event) => {
    return event.touches || event.originalEvent.touches;
  };
  
  lineMove = (event) => {
    const line = this.gcLineCenter.current;
    let movePositionTop = event.clientY;
  
    if (isTablet() || isMobile()) {
      let touches = this.getTouches(event);
      
      if (touches.length > 0) {
        movePositionTop = touches[0].clientY;
      }
    }
  
    if(window.scrollY > 0 && isIOS()) {
      movePositionTop += window.scrollY / 3;
    }
  
    line.classList.add('gcLine_dragged');
    this.setLineAndImagesPosition(movePositionTop, false);
  };
  
  moveLineUp = () => {
    if (this.moveLineIntervalUp) {
      return;
    }
    this.moveLineIntervalUp = setInterval(() => {
      let linePosition = this.linePosY - ARROW_LINE_MOVE_AMOUNT;
      this.setLineAndImagesPosition(linePosition, false);
    }, LINE_MOVE_SPEED);
  };
  
  moveLineDown = () => {
    if (this.moveLineIntervalDown) {
      return;
    }
    
    this.moveLineIntervalDown = setInterval(() => {
      let linePosition = this.linePosY + ARROW_LINE_MOVE_AMOUNT;
      this.setLineAndImagesPosition(linePosition, false);
    }, LINE_MOVE_SPEED);
  };
  
  handleKeyDownNav = event => {
    const { popupVisibleBlock } = this.state;
    const keyNum = event.keyCode ? event.keyCode : event.which;
    
    if (
      !window.disableLinks &&
      !window.disableKeyboardNav &&
      !popupVisibleBlock &&
      isDesktop() &&
      ( keyNum === UP_ARROW_KEY_NUM || keyNum === DOWN_ARROW_KEY_NUM )
    ) {
      switch (keyNum) {
        case UP_ARROW_KEY_NUM:
          this.moveLineUp();
          break;
        case DOWN_ARROW_KEY_NUM:
          this.moveLineDown();
          break;
        default:
          return;
      }
    }
    
    event.preventDefault();
  };
  
  handleKeyUpNav = event => {
    const keyNum = event.keyCode ? event.keyCode : event.which;
  
    switch (keyNum) {
      case UP_ARROW_KEY_NUM:
        clearInterval(this.moveLineIntervalUp);
        this.moveLineIntervalUp = false;
        break;
      case DOWN_ARROW_KEY_NUM:
        clearInterval(this.moveLineIntervalDown);
        this.moveLineIntervalDown = false;
        break;
      default:
      
    }
  };
  
  render() {
    const { isHidden } = this.props;
    const { mountAnimateStarted, animateTransformStop } = this.state;

    return (
      <Fragment>
        <div
          className={cn(
            'gcLine',
            { gcLine_hidden: isHidden || !mountAnimateStarted },
            { gcLine_animated: mountAnimateStarted }
          )}
        >
          <img src={gImage} className="gcLine__g" alt="" />
          <div
            className="gcLine__center js-gcLine"
            ref={this.gcLineCenter}
          >
            <div className="gcLine__line" />
          </div>

          <img src={cImage} className="gcLine__c" alt="" />
        </div>

        <svg
          className={cn('gcLine__logo', {
            hidden: animateTransformStop
          })}
          viewBox="0 0 42 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path d="M23.1668 20.9262H31.4284L36.1031 25.4971L41.601 20.1213L36.1031 14.7456L31.4284 19.3164H23.1668L29.635 12.992H36.2501V5.37392H28.4589V11.8421L21.9908 18.1665V8.50738C23.9606 8.13367 25.4601 6.43757 25.4601 4.36777C25.4601 2.03923 23.5196 0.170654 21.1676 0.170654C18.8155 0.170654 16.8751 2.06798 16.8751 4.36777C16.8751 6.40883 18.3745 8.10492 20.3443 8.50738V18.1665L13.9938 11.9571C15.111 10.3185 14.9346 8.07617 13.4646 6.6388C11.7887 5.00021 9.05448 5.00021 7.37864 6.6388C5.7028 8.2774 5.7028 10.9509 7.37864 12.5895C8.84867 14.0269 11.1419 14.1994 12.8178 13.107L19.1683 19.3164H9.28968C8.90747 17.3903 7.17285 15.9242 5.056 15.9242C2.67454 15.9242 0.763489 17.8215 0.763489 20.1213C0.763489 22.4498 2.70394 24.3184 5.056 24.3184C7.14345 24.3184 8.87807 22.8523 9.28968 20.9262H19.1683L12.8178 27.1357C11.1419 26.0433 8.84867 26.2157 7.37864 27.6531C5.7028 29.2917 5.7028 31.9652 7.37864 33.6038C9.05448 35.2424 11.7887 35.2424 13.4646 33.6038C14.9346 32.1664 15.111 29.9241 13.9938 28.2855L20.3443 22.0761V30.1541L15.6696 34.6962L21.1676 40.072L26.6655 34.6962L21.9908 30.1254V22.0474L28.4589 28.3718V34.8399H36.2501V27.2219H29.635L23.1668 20.9262Z" fill="#FFFFFF" />
        </svg>

        <div
          className={cn('gcLine__logo-transform', {
            hidden: animateTransformStop
          })}
        />
      </Fragment>
    );
  }
}

export default GCLine;
