import ReactDOM from 'react-dom'
import ModalOverlay from './modalOverlay';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import modalStyle from '../Modal/modal.module.css';
import { useSelector } from 'react-redux';

const modalRoot = document.querySelector('#modals');

const Modal = ({children, isOpen, onClose}) => {
    const onKey = (e) => {
        if(e.keyCode == 27) {
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
