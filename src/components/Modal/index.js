import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Portal } from 'react-portal';
import './styles.css';

const Modal = ({ isOpen, title, text, onClose }) => (
  <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
    <Portal>
      <div className="modal" onClick={onClose}>
        <div className="modal__container">
          <div className="modal__close" onClick={onClose} />

          <div className="modal__content">
            <span
              className="modal__title"
              dangerouslySetInnerHTML={{
                __html: title
              }}
            />

            <span
              className="modal__text"
              dangerouslySetInnerHTML={{
                __html: text
              }}
            />
          </div>
        </div>
      </div>
    </Portal>
  </CSSTransition>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool
};

Modal.defaultProps = {
  isOpen: false
};

export default Modal;
