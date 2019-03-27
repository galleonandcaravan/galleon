import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MainContent = ({ title, text }) => (
  <div className="main-content">
    <div className="main-content__top">
      <span
        className="main-content__title"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
    </div>

    <div className="main-content__bottom">
      <span
        className="main-content__text"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  </div>
);

MainContent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

MainContent.defaultProps = {
  text: '',
};

export default MainContent;
