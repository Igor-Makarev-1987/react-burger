import React, {useState} from "react";
import modalOverlayStyle from './modalOverlay.module.css'
import PropTypes from 'prop-types';

const ModalOverlay = ({onClose}) => {

    return (
        <div className={modalOverlayStyle.container} onClick={() => onClose()}>
                
        </div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func
  }

export default ModalOverlay