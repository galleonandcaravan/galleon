import React from 'react';
import PropTypes from 'prop-types';
import MainContent from '../../components/MainContent';
import ImagesSwitcher from '../../components/ImagesSwitcher';
import './styles.css';

const Contact = ({ switcherImagesVisible }) => (
  <div className="contact" id="page-contact">
    <MainContent
      title="Contact us"
      text="If you have a foreign exchange requirement<br class='desktop' /> above £1m per annum, say <br class='desktop' /><br class='desktop' /><a href='mailto:hello@galleonandcaravan.com' class='main-content__email'>hello@galleonandcaravan.com</a><a href='tel:+44 020 8075 5665' class='main-content__tel'>+44 020 8075 5665</a>"
    />
    <ImagesSwitcher
      imageTopClassName="contact__image-top"
      imageBottomClassName="contact__image-bottom"
      switcherImagesVisible={switcherImagesVisible}
    />
  </div>
);

Contact.propTypes = {
  switcherImagesVisible: PropTypes.bool,
}

Contact.defaultProps = {
  switcherImagesVisible: false,
}

export default Contact;
