import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import About from '../pages/About';
import Mission from '../pages/Misson';
import Story from '../pages/Story';
import Expertise from '../pages/Expertise';
import Contact from '../pages/Contact';
import Layout from '../components/Layout';
import { PAGES, PAGES_IMAGES, GC_LINE_ANIMATION_INTERVAL } from '../constants';
import ModalPrivacy from '../components/ModalPrivacy';
import { isDesktop, isMobile } from '../utils/media';
import './styles/app.css';
import './styles/fonts.css';

const PAGES_COUNT = 5;
const LOAD_NEXT_SWITCH_IMAGES_INTERVAL = 150;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      popupVisibleBlock: ''
    };

    this.switcherImagesVisible = {};
    this.switcherImagesVisible = {};
    window.location.hash = '';
  }

  componentDidMount() {
    this.handleMouseWheelThrottle = throttle(this.handleMouseWheel, 100);
    window.addEventListener('mousewheel', this.handleMouseWheelThrottle);

    this.getDOMNodes();
    this.contentTitleDOMNodes[0].style.opacity = '1';
    this.contentTextDOMNodes[0].style.opacity = '1';
    this.imagesSWitcherDOMNodes[0].style.display = 'block';

    this.prevPage = this.getPage();
    this.loadSwitcherImages();
    this.disableLinks();
    setTimeout(() => {
      window.addEventListener('hashchange', this.handleChangePage);
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleChangePage);
    window.removeEventListener('mousewheel', this.handleMouseWheelThrottle);
  }

  setMobileImages() {
    const nextPage = this.getPage().toUpperCase();
    const nextPageImages = PAGES_IMAGES[nextPage];

    this.imagesSWitcherDOMNodes.forEach((imagesSwitcherDOM, index) => {
      const imageTopDOM = imagesSwitcherDOM.querySelector('.js-image-switcher-top > div');
      const imageBottomDOM = imagesSwitcherDOM.querySelector('.js-image-switcher-bottom > div');
      imageTopDOM.style.backgroundImage = `url(${nextPageImages.TOP})`;
      imageBottomDOM.style.backgroundImage = `url(${nextPageImages.BOTTOM})`;
    });
  }

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

    Object.keys(PAGES).forEach((key, index) => {
      if (PAGES[key] === page) {
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
  };

  handleMouseWheel = event => {
    const { popupVisibleBlock } = this.state;

    if (!window.disableLinks && !popupVisibleBlock && isDesktop()) {
      const delta = Math.sign(event.deltaY);
      if (delta === 1) {
        this.goToNextPage();
      } else {
        this.goToPrevPage();
      }
      this.disableLinks();
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
    window.location.hash = nextPage;
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
    const pageIndex = this.getPageIndex(page);

    this.setState({
      page,
      pageIndex,
      popupVisibleBlock: ''
    });

    if (!isMobile()) {
      this.desktopAnimate(pageIndex);
    } else {
      this.setMobileImages();
    }
    this.prevPage = this.getPage();
  };

  disableLinks = () => {
    if (!isMobile()) {
      window.disableLinks = true;
      setTimeout(() => {
        window.disableLinks = false;
      }, 2000);
    }
  }

  desktopAnimate(pageIndex) {
    const nextPage = this.getPage().toUpperCase();
    const nextPageImages = PAGES_IMAGES[nextPage];
    const prevPage = (this.prevPage || 'ABOUT').toUpperCase();
    const prevPageImages = PAGES_IMAGES[prevPage];
    this.contentTitleDOMNodes.forEach(contentTitleDOM => {
      contentTitleDOM.style.opacity = '0';
    });
    this.contentTextDOMNodes.forEach(contentTextOOM => {
      contentTextOOM.style.opacity = '0';
    });
    setTimeout(() => {
      this.contentTitleDOMNodes[pageIndex].style.opacity = '1';
      this.contentTextDOMNodes[pageIndex].style.opacity = '1';
      this.imagesSWitcherDOMNodes[pageIndex].style.opacity = '0';

      this.imagesSWitcherDOMNodes.forEach((imagesSwitcherDOM, index) => {
        const imageTopDOM = imagesSwitcherDOM.querySelector('.js-image-switcher-top > div');
        const imageBottomDOM = imagesSwitcherDOM.querySelector('.js-image-switcher-bottom > div');
        imageTopDOM.style.backgroundImage = `url(${prevPageImages.TOP})`;
        imageBottomDOM.style.backgroundImage = `url(${nextPageImages.BOTTOM})`;

        if (index !== pageIndex) {
          imagesSwitcherDOM.style.opacity = '1';
        }

        setTimeout(() => {
          imageTopDOM.style.backgroundImage = `url(${nextPageImages.TOP})`;
        }, GC_LINE_ANIMATION_INTERVAL.TO_TOP)
      });
    }, GC_LINE_ANIMATION_INTERVAL.TO_BOTTOM);
  }

  render() {
    const { page, popupVisibleBlock } = this.state;
    const aboutPageIsActive = page === PAGES.ABOUT || !page;
    const missionPageIsActive = page === PAGES.MISSION;
    const storyPageIsActive = page === PAGES.STORY;
    const expertisePageIsActive = page === PAGES.EXPERTISE;
    const contactPageIsActive = page === PAGES.CONTACT;

    return (
      <Layout
        className="app"
        onChangePage={this.handleChangePage}
        popupVisibleBlock={popupVisibleBlock}
        togglePopup={this.togglePopup}
        activePage={page}
        gcLineHidden={!!popupVisibleBlock}
        dotsHidden={!!popupVisibleBlock}
      >
        <div className={cn('page', { page_hidden: popupVisibleBlock })}>
          <div className={cn('section', { section_active: aboutPageIsActive })}>
            <About switcherImagesVisible />
          </div>

          <div className={cn('section', { section_active: storyPageIsActive })}>
            <Story switcherImagesVisible />
          </div>

          <div
            className={cn('section', { section_active: missionPageIsActive })}
          >
            <Mission switcherImagesVisible />
          </div>

          <div
            className={cn('section', { section_active: expertisePageIsActive })}
          >
            <Expertise switcherImagesVisible />
          </div>

          <div
            className={cn('section', { section_active: contactPageIsActive })}
          >
            <Contact switcherImagesVisible />
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
