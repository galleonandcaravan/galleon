import React from 'react';
import PropTypes from 'prop-types';
import MainContent from '../../components/MainContent';
import ImagesSwitcher from '../../components/ImagesSwitcher';
import './styles.css';

const Story = ({ switcherImagesVisible }) => (
  <div className="story" id="page-story">
    <MainContent
      title="We have <br /><b>a&nbsp;Story</b>"
      text="Many moons ago, galleons and caravans<br class='desktop' />helped facilitate the exchange of goods,<br class='desktop' />services and ideas."
    />
    <ImagesSwitcher
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
