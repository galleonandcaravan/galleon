import React from 'react';
import PropTypes from 'prop-types';
import MainContent from '../../components/MainContent';
import ImagesSwitcher from '../../components/ImagesSwitcher';
import './styles.css';

const Expertise = ({ switcherImagesVisible }) => (
  <div className="expertise" id="page-expertise">
    <MainContent
      title="We have <br class='desktop' /><b>expertise</b>"
      text="By partnering with an award-winning fintech <br class='desktop' />firm, we offer innovative products and <br class='desktop' />tailored and personalised service that get your funds where <br class='desktop' />they need to be, seamlessly."
    />
    <ImagesSwitcher
      imageTopClassName="expertise__image-top"
      imageBottomClassName="expertise__image-bottom"
      switcherImagesVisible={switcherImagesVisible}
    />
  </div>
);

Expertise.propTypes = {
  switcherImagesVisible: PropTypes.bool,
}

Expertise.defaultProps = {
  switcherImagesVisible: false,
}

export default Expertise;
