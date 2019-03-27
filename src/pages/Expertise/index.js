import React from 'react';
import PropTypes from 'prop-types';
import MainContent from '../../components/MainContent';
import ImagesSwitcher from '../../components/ImagesSwitcher';
import { PAGES_IMAGES } from '../../constants';
import './styles.css';

const Expertise = ({ switcherImagesVisible }) => (
  <div className="expertise" id="page-expertise">
    <MainContent
      title="We have<br /><b>an Expertise</b>"
      text="By partnering with an award-winning fintech<br />firm, we offer innovative products and<br />strategic solutions that get your funds where<br />they need to be, seamlessly."
    />
    <ImagesSwitcher
      imageTop={PAGES_IMAGES.EXPERTISE.TOP}
      imageBottom={PAGES_IMAGES.EXPERTISE.BOTTOM}
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
