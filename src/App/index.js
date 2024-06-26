import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import About from '../pages/About';
import Mission from '../pages/Misson';
import Story from '../pages/Story';
import Expertise from '../pages/Expertise';
import Contact from '../pages/Contact';
import Complaints from '../pages/Complaints';
import Safeguarding from '../pages/Safeguarding';
import Layout from '../components/Layout';
import {ADDITIONAL_PAGES, PAGES, PAGES_IMAGES} from '../constants';
import ModalPrivacy from '../components/ModalPrivacy';
import { isDesktop, isMobile, isTablet } from '../utils/media';
import './styles/app.css';
import './styles/fonts.css';

const PAGES_COUNT = 5;
const LOAD_NEXT_SWITCH_IMAGES_INTERVAL = 150;
const LEFT_ARROW_KEY_NUM = 37;
const RIGHT_ARROW_KEY_NUM = 39;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      popupVisibleBlock: ''
    };

    this.switcherImagesVisible = {};
    this.switcherImagesVisible = {};
    window.animationTimers = [];
    window.enableLineAnimation = false;
    this.xDown = null;
    this.yDown = null;
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', this.handleLoadingPage);

    if (isTablet() || isMobile()) {
      this.layoutPage = document.querySelector('.js-layout-page');
      this.layoutPage.addEventListener('touchstart', this.handleTouchStart, false);
      this.layoutPage.addEventListener('touchmove', this.handleTouchMove, false);
    } else {
      this.handleMouseWheelThrottle = throttle(this.handleMouseWheel, 100);
      window.addEventListener('mousewheel', this.handleMouseWheelThrottle);

      this.handleKeyboardNavThrottle = throttle(this.handleKeyboardNav, 100);
      window.addEventListener('keydown', this.handleKeyboardNavThrottle);
    }

    this.getDOMNodes();
    this.contentTitleDOMNodes[0].style.opacity = '1';
    this.contentTextDOMNodes[0].style.opacity = '1';

    if (this.imagesSWitcherDOMNodes[0]) {
      this.imagesSWitcherDOMNodes[0].style.display = 'block';
    }

    this.loadSwitcherImages();
    window.disableMouseWheel = true;
    window.disableKeyboardNav = true;

    setTimeout(() => {
      window.addEventListener('hashchange', this.handleChangePage);
    }, 100);
    setTimeout(() => {
      window.disableMouseWheel = false;
      window.disableKeyboardNav = false;
    }, 4500);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleChangePage);

    if (isTablet() || isMobile()) {
      this.layoutPage.removeEventListener('touchstart', this.handleTouchStart, false);
      this.layoutPage.removeEventListener('touchmove', this.handleTouchMove, false);
    } else {
      window.removeEventListener('mousewheel', this.handleMouseWheelThrottle);
      window.removeEventListener('keydown', this.handleKeyboardNavThrottle);
    }

    clearInterval(this.checkAnimateStepInterval);
  }

  setMobileImages() {
    const nextPage = this.getPage().toUpperCase();
    const nextPageImages = PAGES_IMAGES[nextPage];

    // if (!this.imagesSWitcherDOMNodes || !nextPageImages) {
    //   return;
    // }

    this.imagesSWitcherDOMNodes.forEach((imagesSwitcherDOM) => {
      const imageTopDOM = imagesSwitcherDOM.querySelector(
        '.js-image-switcher-top > div'
      );
      const imageBottomDOM = imagesSwitcherDOM.querySelector(
        '.js-image-switcher-bottom > div'
      );
      imageTopDOM.style.backgroundImage = `url(${nextPageImages.TOP})`;
      imageBottomDOM.style.backgroundImage = `url(${nextPageImages.BOTTOM})`;
    });
  }

  setPageImages = () => {
    const page = this.getPage();
    const pageIndex = this.getPageIndex(page);
    const nextPage = this.getPage().toUpperCase();
    const nextPageImages = PAGES_IMAGES[nextPage];

    this.imagesSWitcherDOMNodes[pageIndex].style.opacity = '0';

    this.imagesSWitcherDOMNodes.forEach((imagesSwitcherDOM, index) => {
      const imageTopDOM = imagesSwitcherDOM.querySelector(
        '.js-image-switcher-top > div'
      );
      const imageBottomDOM = imagesSwitcherDOM.querySelector(
        '.js-image-switcher-bottom > div'
      );

      imageTopDOM.style.backgroundImage = `url(${
        nextPageImages.TOP
      })`;
      imageBottomDOM.style.backgroundImage = `url(${
        nextPageImages.BOTTOM
      })`;

      if (index !== pageIndex) {
        imagesSwitcherDOM.style.opacity = '1';
      }
    });
  };

  checkAnimateStep = () => {
    if (window.checkLinePositionPaused) {
      return;
    }

    if (window.skipAnimation) {
      this.setPageImages();
    }

    if (window.animateStep !== this.prevAnimateStep) {
      const page = this.getPage();
      const pageIndex = this.getPageIndex(page);

      // Start new animation
      const nextPage = this.getPage().toUpperCase();
      const nextPageImages = PAGES_IMAGES[nextPage];

      if (window.animateStep === 4) {
        setTimeout(() => {
          window.animateStep = 5; // Change step of animation
          window.disableMouseWheel = false;
          window.disableKeyboardNav = false;
          window.disableLinks = false;

          clearInterval(this.checkAnimateStepInterval);
          window.enableLineAnimation = false;
        }, 300)
      }

      if (window.animateStep === 2) {

        // Change image content after complete first step animation
        this.imagesSWitcherDOMNodes[pageIndex].style.opacity = '0';

        this.imagesSWitcherDOMNodes.forEach((imagesSwitcherDOM, index) => {
          const imageTopDOM = imagesSwitcherDOM.querySelector(
            '.js-image-switcher-top > div'
          );
          const imageBottomDOM = imagesSwitcherDOM.querySelector(
            '.js-image-switcher-bottom > div'
          );

          if (imageTopDOM) {
            imageTopDOM.style.backgroundImage = this.prevPageImageTopBackgroundImage;
          }

          if (imageBottomDOM && nextPageImages) {
            imageBottomDOM.style.backgroundImage = `url(${
              nextPageImages.BOTTOM
            })`;
          }

          if (index !== pageIndex) {
            imagesSwitcherDOM.style.opacity = '1';
          }
        });
      }

      if (window.animateStep === 3) {
        // Change image content after complete 2 steps animation
        this.imagesSWitcherDOMNodes.forEach((imagesSwitcherDOM) => {
          const imageTopDOM = imagesSwitcherDOM.querySelector(
            '.js-image-switcher-top > div'
          );

          if (imageTopDOM && nextPageImages) {
            imageTopDOM.style.backgroundImage = `url(${nextPageImages.TOP})`;
          }
        })
      }
    }

    this.prevAnimateStep = window.animateStep;
  };

  fadeContent = () => {
    const page = this.getPage();
    const pageIndex = this.getPageIndex(page);
    const isModalPage = page === ADDITIONAL_PAGES.COMPLAINTS || page === ADDITIONAL_PAGES.SAFEGUARDING;

    if (isModalPage) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    setTimeout(() => {
      window.disableLinks = false;
      window.disableMouseWheel = false;
      window.disableKeyboardNav = false;
    }, 500);

    if (!this.contentTitleDOMNodes || !this.contentTextDOMNodes) {
      return;
    }

    // Fade content after complete 3 steps of animation
    this.contentTitleDOMNodes.forEach(contentTitleDOM => {
      contentTitleDOM.style.opacity = '0';
    });
    this.contentTextDOMNodes.forEach(contentTextOOM => {
      contentTextOOM.style.opacity = '0';
    });

    if (!this.contentTitleDOMNodes[pageIndex] || !this.contentTextDOMNodes[pageIndex]) {
      return;
    }

    setTimeout(() => {
      this.contentTitleDOMNodes[pageIndex].style.opacity = '1';
      this.contentTextDOMNodes[pageIndex].style.opacity = '1';
    }, 500);
  };

  getDOMNodes = () => {
    this.contentTitleDOMNodes = [
      ...document.querySelectorAll('.js-content-title')
    ];
    this.contentTextDOMNodes = [
      ...document.querySelectorAll('.js-content-text')
    ];
    this.imagesSWitcherDOMNodes = [
      ...document.querySelectorAll('.js-images-switcher')
    ];
  };

  getPageIndex = page => {
    let pageIndex = 0;
    const pages = {...PAGES, ...ADDITIONAL_PAGES};

    Object.keys(pages).forEach((key, index) => {
      if (pages[key] === page) {
        pageIndex = index;
      }
    });

    return pageIndex;
  };

  loadSwitcherImages = () => {
    this.cacheImages = [];
    [
      PAGES_IMAGES.MISSION.TOP,
      PAGES_IMAGES.MISSION.BOTTOM,
      PAGES_IMAGES.STORY.TOP,
      PAGES_IMAGES.STORY.BOTTOM,
      PAGES_IMAGES.EXPERTISE.TOP,
      PAGES_IMAGES.EXPERTISE.BOTTOM,
      PAGES_IMAGES.CONTACT.TOP,
      PAGES_IMAGES.CONTACT.BOTTOM
    ].forEach((imageUrl, index) => {
      setTimeout(() => {
        this.cacheImages[index] = new Image();
        this.cacheImages[index].src = imageUrl;
      }, LOAD_NEXT_SWITCH_IMAGES_INTERVAL * (index + 1));
    });
  };

  togglePopup = activeBlock => {
    const { popupVisibleBlock } = this.state;

    this.setState({
      popupVisibleBlock: popupVisibleBlock === activeBlock ? '' : activeBlock
    });

    if (window.skipAnimation) {
      setTimeout(() => {
        window.skipAnimation = false;
        window.disableMouseWheel = false;
        window.disableKeyboardNav = false;
        window.disableLinks = false;
      }, 1000);

      this.goToPageByIndex(0);
    }
  };

  handleMouseWheel = event => {
    const { popupVisibleBlock } = this.state;

    if (
      !window.disableLinks &&
      !window.disableMouseWheel &&
      !popupVisibleBlock &&
      isDesktop()
    ) {
      const delta = Math.sign(event.deltaY);
      if (delta === 1) {
        this.goToNextPage();
      } else {
        this.goToPrevPage();
      }
    }
  };

  handleKeyboardNav = event => {
    const { popupVisibleBlock } = this.state;
    const keyNum = event.keyCode;

    if (
      !window.disableLinks &&
      !window.disableKeyboardNav &&
      !popupVisibleBlock &&
      isDesktop() &&
      ( keyNum === RIGHT_ARROW_KEY_NUM || keyNum === LEFT_ARROW_KEY_NUM )
    ) {
      switch (keyNum) {
        case RIGHT_ARROW_KEY_NUM:
          this.goToNextPage();
          break;
        case LEFT_ARROW_KEY_NUM:
          this.goToPrevPage();
          break;
        default:

      }
    }
  };

  getPage = () => {
    return window.location.hash.replace('#', '') || 'about';
  };

  goToNextPage = () => {
    const page = this.getPage();
    const pageIndex = this.getPageIndex(page);
    if (pageIndex + 1 <= PAGES_COUNT - 1) {
      this.goToPageByIndex(pageIndex + 1);
    }
  };

  goToPageByIndex = pageIndex => {
    const pages = Object.keys(PAGES).map(pageKey => PAGES[pageKey]);
    const nextPage = pages[pageIndex];

    if (nextPage) {
      window.location.hash = nextPage;
    }

    this.fadeContent();
  };

  goToPrevPage = () => {
    const page = this.getPage();
    const pageIndex = this.getPageIndex(page);
    if (pageIndex - 1 >= 0) {
      this.goToPageByIndex(pageIndex - 1);
    }
  };

  handleChangePage = () => {
    const page = this.getPage();

    this.prevAnimateStep = 0;
    window.enableLineAnimation = true;

    if (this.checkAnimateStepInterval){
      clearInterval(this.checkAnimateStepInterval);
    }
    this.checkAnimateStepInterval = setInterval(this.checkAnimateStep, 10);

    const prevPageImageTopDOM = document.querySelector('.section_active .js-image-switcher-top > div');

    if (prevPageImageTopDOM) {
      this.prevPageImageTopBackgroundImage = prevPageImageTopDOM.style.backgroundImage;
    }

    this.setState({
      page,
      popupVisibleBlock: ''
    });

    this.disableLinks();
    this.disableMouseWheel();
    this.disableKeyboardNav();

    this.fadeContent();
  };

  handleLoadingPage = () => {
    const page = this.getPage();

    this.prevAnimateStep = 0;
    window.enableLineAnimation = true;

    this.setState({
      page,
      popupVisibleBlock: ''
    });

    this.setPageImages();
    this.fadeContent();
  };

  disableLinks = () => {
    window.disableLinks = true;
  };

  disableMouseWheel = () => {
    window.disableMouseWheel = true;
  };

  disableKeyboardNav = () => {
    window.disableKeyboardNav = true;
  };

  getTouches = (evt) => {
    return evt.touches || evt.originalEvent.touches;
  };

  handleTouchStart = (evt) => {
    const firstTouch = this.getTouches(evt)[0];
    this.xDown = firstTouch.clientX;
    this.yDown = firstTouch.clientY;
  };

  handleTouchMove = (evt) => {
    if ( ! this.xDown || ! this.yDown ) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
      if ( xDiff > 0 ) {
        this.goToNextPage();
      } else {
        this.goToPrevPage();
      }
    } else {
      return;
    }

    this.xDown = null;
    this.yDown = null;
  };

  render() {
    const { page, popupVisibleBlock } = this.state;
    const aboutPageIsActive = page === PAGES.ABOUT || !page;
    const missionPageIsActive = page === PAGES.MISSION;
    const storyPageIsActive = page === PAGES.STORY;
    const expertisePageIsActive = page === PAGES.EXPERTISE;
    const contactPageIsActive = page === PAGES.CONTACT;
    const complaintsPageIsActive = page === ADDITIONAL_PAGES.COMPLAINTS;
    const safeguardingPageIsActive = page === ADDITIONAL_PAGES.SAFEGUARDING;

    const modalPagesIsActive = complaintsPageIsActive || safeguardingPageIsActive;

    return (
      <Layout
        className="app"
        onChangePage={this.handleChangePage}
        popupVisibleBlock={popupVisibleBlock}
        togglePopup={this.togglePopup}
        activePage={page}
        gcLineHidden={!!popupVisibleBlock || complaintsPageIsActive || safeguardingPageIsActive}
        dotsHidden={!!popupVisibleBlock}
      >
        <div className={cn('page js-layout-page', { page_hidden: popupVisibleBlock })}>
          <div className={cn('section', { section_active: aboutPageIsActive })}>
            <About switcherImagesVisible={!modalPagesIsActive} />
          </div>

          <div className={cn('section', { section_active: storyPageIsActive })}>
            <Story switcherImagesVisible={!modalPagesIsActive} />
          </div>

          <div
            className={cn('section', { section_active: missionPageIsActive })}
          >
            <Mission switcherImagesVisible={!modalPagesIsActive} />
          </div>

          <div
            className={cn('section', { section_active: expertisePageIsActive })}
          >
            <Expertise switcherImagesVisible={!modalPagesIsActive} />
          </div>

          <div
            className={cn('section', { section_active: contactPageIsActive })}
          >
            <Contact switcherImagesVisible={!modalPagesIsActive} />
          </div>

          <div
            className={cn('section', 'section_modal', { section_active: complaintsPageIsActive })}
          >
            <Complaints switcherImagesVisible={false} isActive={complaintsPageIsActive} />
          </div>

          <div
            className={cn('section', 'section_modal', { section_active: safeguardingPageIsActive })}
          >
            <Safeguarding switcherImagesVisible={false} isActive={safeguardingPageIsActive} />
          </div>

          <ModalPrivacy
            isOpen={!!popupVisibleBlock}
            activeBlock={popupVisibleBlock}
            togglePopup={this.togglePopup}
          />
        </div>
      </Layout>
    );
  }
}

export default App;
