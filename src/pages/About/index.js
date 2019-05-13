import React from 'react';
import PropTypes from 'prop-types';
import MainContent from '../../components/MainContent';
import ImagesSwitcher from '../../components/ImagesSwitcher';
import { PAGES_IMAGES } from '../../constants';
import './styles.css';

const About = ({ switcherImagesVisible }) => (
  <div className="about" id="page-about">
    <MainContent
      title="We are <br /><b>Galleon & <br class='desktop' />Caravan</b>"
      text="A boutique payment services firm working <br class='desktop' />primarily within the arts, media and ] class='desktop' />entertainment sectors."
    />
    <ImagesSwitcher
      imageTop={PAGES_IMAGES.ABOUT.TOP}
      imageBottom={PAGES_IMAGES.ABOUT.BOTTOM}
      imageTopClassName="about__image-top"
      imageBottomClassName="about__image-bottom"
      switcherImagesVisible={switcherImagesVisible}
    />
  </div>
);

About.propTypes = {
  switcherImagesVisible: PropTypes.bool,
}

About.defaultProps = {
  switcherImagesVisible: false,
}
export default About;
