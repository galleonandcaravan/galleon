import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import About from '../pages/About';
import Mission from '../pages/Misson';
import Story from '../pages/Story';
import Expertise from '../pages/Expertise';
import Contact from '../pages/Contact';
import Layout from '../components/Layout';
import { PAGES } from '../constants';
import ModalPrivacy from '../components/ModalPrivacy';
import { isDesktop } from '../utils/media';
import './styles/app.css';
import './styles/fonts.css';

const PAGES_COUNT = 5;
const LOAD_NEXT_SWITCH_IMAGES_INTERVAL = 1000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.getPage(),
      switcherImagesVisibleByPageIndex: {},
      switcherImagesIncrement: 0,
      pageIndex: 0,
      popupVisibleBlock: ''
    };

    this.switcherImagesVisible = {};
    this.switcherImagesVisible = {};
  }

  componentDidMount() {
    this.handleMouseWheelThrottle = throttle(this.handleMouseWheel, 100);
    window.addEventListener('hashchange', this.handleChangePage);
    window.addEventListener('mousewheel', this.handleMouseWheelThrottle);

    // Load next switcher images after 5 sec (smart precache)
    this.loadSwitcherImagesInterval = setInterval(() => {
      this.loadNextSwitcherImages();
    }, LOAD_NEXT_SWITCH_IMAGES_INTERVAL);
    this.handleChangePage();
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleChangePage);
    window.removeEventListener('mousewheel', this.handleMouseWheelThrottle);
  }

  handleChangePage = () => {
    const page = this.getPage();
    const pageIndex = this.getPageIndex(page);

    this.setState({
      page,
      pageIndex,
      popupVisibleBlock: ''
    });
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

  getPage = () => {
    return window.location.hash.replace('#', '');
  };

  handleMouseWheel = event => {
    const { popupVisibleBlock } = this.state;

    if (!popupVisibleBlock && !this.disableMouseWheel && isDesktop()) {
      const delta = Math.sign(event.deltaY);
      if (delta === 1) {
        this.goToNextPage();
      } else {
        this.goToPrevPage();
      }

      this.disableMouseWheel = true;
      setTimeout(() => {
        this.disableMouseWheel = false;
      }, 1000);
    }
  };

  goToPrevPage = () => {
    const page = this.getPage();
    const pageIndex = this.getPageIndex(page);
    if (pageIndex - 1 >= 0) {
      this.goToPageByIndex(pageIndex - 1);
    }
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

  loadNextSwitcherImages = () => {
    // Set flag for load next switcher images (smart precache)
    const {
      switcherImagesVisibleByPageIndex,
      switcherImagesIncrement
    } = this.state;

    if (switcherImagesIncrement <= PAGES_COUNT - 2) {
      this.setState({
        switcherImagesIncrement: switcherImagesIncrement + 1,
        switcherImagesVisibleByPageIndex: {
          ...switcherImagesVisibleByPageIndex,
          [switcherImagesIncrement]: true
        }
      });
    } else {
      // All images loaded
      clearInterval(this.loadSwitcherImagesInterval);
    }
  };

  togglePopup = activeBlock => {
    const { popupVisibleBlock } = this.state;

    this.setState({
      popupVisibleBlock: popupVisibleBlock === activeBlock ? '' : activeBlock
    });
  };

  render() {
    const {
      page,
      pageIndex,
      switcherImagesVisibleByPageIndex,
      popupVisibleBlock
    } = this.state;
    const aboutPageIsActive = page === PAGES.ABOUT;
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
        <div
          className={cn(
            'page',
            { page_hidden: popupVisibleBlock },
            `active-page-${pageIndex + 1}`
          )}
        >
          <div className={cn('section', { section_active: aboutPageIsActive })}>
            <About
              switcherImagesVisible={
                aboutPageIsActive || switcherImagesVisibleByPageIndex[0]
              }
            />
          </div>

          <div className={cn('section', { section_active: storyPageIsActive })}>
            <Story
              switcherImagesVisible={
                storyPageIsActive || switcherImagesVisibleByPageIndex[1]
              }
            />
          </div>

          <div
            className={cn('section', { section_active: missionPageIsActive })}
          >
            <Mission
              switcherImagesVisible={
                missionPageIsActive || switcherImagesVisibleByPageIndex[2]
              }
            />
          </div>

          <div
            className={cn('section', { section_active: expertisePageIsActive })}
          >
            <Expertise
              switcherImagesVisible={
                expertisePageIsActive || switcherImagesVisibleByPageIndex[3]
              }
            />
          </div>

          <div
            className={cn('section', { section_active: contactPageIsActive })}
          >
            <Contact
              switcherImagesVisible={
                contactPageIsActive || switcherImagesVisibleByPageIndex[4]
              }
            />
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
