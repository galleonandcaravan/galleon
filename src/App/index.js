import React, { Component } from 'react';
import cn from 'classnames';
import About from '../pages/About';
import Mission from '../pages/Misson';
import Story from '../pages/Story';
import Expertise from '../pages/Expertise';
import Contact from '../pages/Contact';
import Layout from '../components/Layout';
import { PAGES } from '../constants';
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
    };

    this.switcherImagesVisible = {};
    this.switcherImagesVisible = {};
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleChangePage);

    // Load next switcher images after 5 sec (smart precache)
    this.loadSwitcherImagesInterval = setInterval(() => {
      this.loadNextSwitcherImages();
    }, LOAD_NEXT_SWITCH_IMAGES_INTERVAL);
    this.handleChangePage();
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleChangePage);
  }

  handleChangePage = () => {
    const page = this.getPage();
    let pageIndex = 0;

    Object.keys(PAGES).forEach((key, index) => {
      if (PAGES[key] === page) {
        pageIndex = index;
      }
    });

    this.setState({ page, pageIndex });
  };

  getPage = () => {
    return window.location.hash.replace('#', '');
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

  render() {
    const { page, pageIndex, switcherImagesVisibleByPageIndex } = this.state;
    const aboutPageIsActive = page === PAGES.ABOUT;
    const missionPageIsActive = page === PAGES.MISSION;
    const storyPageIsActive = page === PAGES.STORY;
    const expertisePageIsActive = page === PAGES.EXPERTISE;
    const contactPageIsActive = page === PAGES.CONTACT;

    return (
      <Layout
        className="app"
        onChangePage={this.handleChangePage}
        activePage={page}
      >
        <div className={cn('page', `active-page-${pageIndex + 1}`)}>
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

          <div className={cn('section', { section_active: missionPageIsActive })}>
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

          <div className={cn('section', { section_active: contactPageIsActive })}>
            <Contact
              switcherImagesVisible={
                contactPageIsActive || switcherImagesVisibleByPageIndex[4]
              }
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
