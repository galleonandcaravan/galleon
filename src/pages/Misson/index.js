import React from 'react';
import PropTypes from 'prop-types';
import MainContent from '../../components/MainContent';
import ImagesSwitcher from '../../components/ImagesSwitcher';
import { PAGES_IMAGES } from '../../constants';
import './styles.css';

const Mission = ({ switcherImagesVisible }) => (
  <div className="mission" id="page-mission">
    <MainContent
      title="We have<br /><b>a&nbsp;Mission</b>"
      text="Today, we want to continue that tradition and<br class='desktop' />help our clients take the risk out of trading<br class='desktop' />across borders."
    />
    <ImagesSwitcher
      imageTop={PAGES_IMAGES.MISSION.TOP}
      imageBottom={PAGES_IMAGES.MISSION.BOTTOM}
      imageTopClassName="mission__image-top"
      imageBottomClassName="mission__image-bottom"
      switcherImagesVisible={switcherImagesVisible}
    />
  </div>
);

Mission.propTypes = {
  switcherImagesVisible: PropTypes.bool,
}

Mission.defaultProps = {
  switcherImagesVisible: false,
}

export default Mission;
