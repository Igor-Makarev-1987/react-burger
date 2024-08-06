import ReactDOM from 'react-dom'
import ModalOverlay from './ModalOverlay';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import modalStyle from '../Modal/modal.module.css';
import { useSelector } from 'react-redux';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.querySelector('#modals');

const Modal = ({children, isOpen, onClose}) => {
    const onKey = (e) => {
        if(e.key == "Escape" ) {
            onClose()
        }
    }

    useEffect( () => {
        document.addEventListener('keydown', onKey)

        return () => {
            document.removeEventListener('keydown', onKey)
        }
    }, [])

    if (!isOpen) {
      return null;
    }
  
    return ReactDOM.createPortal(
        <>
            <div className={modalStyle.container}>
                <span className={modalStyle.closeButton} onClick={onClose}><CloseIcon type="primary" /></span>
                <div className="modal-wrapper">
                    <div className="modal">
                        <div>{children}</div>
                    </div>
                </div>
            </div>
            <ModalOverlay onClose={onClose}></ModalOverlay>
        </>,
        modalRoot
    );
  };

  Modal.propTypes = {
    children: PropTypes.node, 
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func
  }
  
  export default Modal;
