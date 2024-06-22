import React, {useState} from "react";
import modalOverlayStyle from './modalOverlay.module.css'
import PropTypes from 'prop-types';

const CreateModalOverlay = ({onClose}) => {

    return (
        <div className={modalOverlayStyle.container} onClick={() => onClose()}>
                
        </div>
    )
}

CreateModalOverlay.propTypes = {
    onClose: PropTypes.func
  }

export default CreateModalOverlay