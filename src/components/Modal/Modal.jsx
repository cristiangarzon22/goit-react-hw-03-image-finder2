import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
class Modal extends Component {
  render() {
    const {onClick,children} = this.props;

    return (
     <div className={css.Overlay}>
       <div className={css.Modal}>
       {children} 
       </div>
       <button type='button' onClick={onClick} className={css.btn}><span className={css.span}>x</span></button>
     </div>
        
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
