import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MainContent = ({ title, text, children }) => (
  <div className="main-content">
    <div className="main-content__top">
      <span
        className="main-content__title js-content-title"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
    </div>

    <div className="main-content__bottom">
      {children ? (
        <div
          className="main-content__text js-content-text"
        >{children && (<>{children}</>)}</div>
      ) : (
        <div
          className="main-content__text js-content-text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      )}
    </div>
  </div>
);

MainContent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.any,
};

MainContent.defaultProps = {
  text: '',
  children: undefined,
};

export default MainContent;
