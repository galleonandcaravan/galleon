import React from 'react';
import PropTypes from 'prop-types';
import MainContent from '../../components/MainContent';
import ImagesSwitcher from '../../components/ImagesSwitcher';
import { PAGES_IMAGES } from '../../constants';
import './styles.css';

const Story = ({ switcherImagesVisible }) => (
  <div className="story" id="page-story">
    <MainContent
      title="We have <b>a&nbsp;Story</b>"
      text="Many moons ago, galleons and caravans<br class='desktop' />helped facilitate the exchange of goods,<br class='desktop' />services and ideas."
    />
    <ImagesSwitcher
      imageTop={PAGES_IMAGES.STORY.TOP}
      imageBottom={PAGES_IMAGES.STORY.BOTTOM}
      imageTopClassName="story__image-top"
      imageBottomClassName="story__image-bottom"
      switcherImagesVisible={switcherImagesVisible}
    />
  </div>
);

Story.propTypes = {
  switcherImagesVisible: PropTypes.bool,
}

Story.defaultProps = {
  switcherImagesVisible: false,
}

export default Story;
