import React from 'react';
import PropTypes from "prop-types";
import './styles.css';

const ModalContent = ({ title, text, children, toggleModal }) => {
  return (
    <div className="modal-content">
      <div className="modal-content__container">
        <div
          className="modal-content__close"
          onClick={() => toggleModal()}
        />

        <div className="modal-content__top">
      <span
        className="modal-content__title"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
        </div>

        <div className="modal-content__bottom">
          {children ? (
            <div
              className="modal-content__text"
            >{children && (<>{children}</>)}</div>
          ) : (
            <div
              className="modal-content__text"
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

ModalContent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.any,
  isActive: PropTypes.bool,
};

ModalContent.defaultProps = {
  text: '',
  children: undefined,
  isActive: false,
};

export default ModalContent;
