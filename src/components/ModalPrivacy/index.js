import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Portal } from 'react-portal';
import './styles.css';

class ModalPrivacy extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    activeBlock: PropTypes.string,
    togglePopup: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isOpen: false,
    activeBlock: ''
  };

  state = {
    activeBlock: ''
  };

  constructor(props) {
    super(props);

    this.modal = React.createRef();
    this.privacy = React.createRef();
    this.security = React.createRef();
    this.terms = React.createRef();
  }

  componentDidMount() {
    const { state, props } = this;
    if (props.isOpen && props.activeBlock !== state.activeBlock) {
      this.scrollToActiveBlock();
    }
  }

  componentDidUpdate() {
    const { state, props } = this;
    if (props.isOpen && props.activeBlock !== state.activeBlock) {
      this.scrollToActiveBlock();
    }
  }

  scrollToActiveBlock = () => {
    const { activeBlock } = this.props;
    this.setState({ activeBlock });
    this.modal.current.scrollTop = this[activeBlock].current.offsetTop - 60;
  };

  render() {
    const { togglePopup, isOpen } = this.props;

    return (
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal-privacy"
        unmountOnExit
      >
        <Portal>
          <div className="modal-privacy" ref={this.modal}>
            <div className="modal-privacy__container">
              <div
                className="modal-privacy__close"
                onClick={() => togglePopup('')}
              />
              <div className="modal-privacy__paragraph" ref={this.privacy}>
                <span className="modal-privacy__title">Privacy</span>

                <span className="modal-privacy__text">
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                </span>
              </div>

              <div className="modal-privacy__paragraph" ref={this.security}>
                <span className="modal-privacy__title">Security</span>

                <span className="modal-privacy__text">
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                </span>
              </div>

              <div className="modal-privacy__paragraph" ref={this.terms}>
                <span className="modal-privacy__title">Terms & Conditions</span>

                <span className="modal-privacy__text">
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                </span>
              </div>
            </div>
          </div>
        </Portal>
      </CSSTransition>
    );
  }
}

export default ModalPrivacy;
