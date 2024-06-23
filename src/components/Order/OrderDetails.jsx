import orderStyle from './order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import modalStyle from '../Modal/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../Modal/ModalOverlay';
import GetCurrentOrder from './CurrentOrder';


const CreateOrder = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(!isOpen);
    }

    const closeModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div className={orderStyle.container}>
                <div className={`${orderStyle.row} ${orderStyle.pricePosition}`}>
                    <span className={`${orderStyle.price}`}>
                        610 <span className={orderStyle.icon}><CurrencyIcon type="primary" /></span>
                    </span>
                    <span className={orderStyle.button}>
                        <Button htmlType="button" type="primary" size="large" onClick={openModal}>
                            Оформить заказ
                        </Button>
                    </span>
                </div>

                {isOpen && <Modal isOpen={isOpen} onClose={closeModal}>
                    <>
                        {/* <div className={`${modalStyle.container} ${orderStyle.heightBlock}`}>
                            <div className="modal-wrapper" className={orderStyle.heightBlock}>
                                <div className="modal"> */}
                                    <GetCurrentOrder onClose={closeModal}></GetCurrentOrder>
                                    {/* <div className={`${modalStyle.mt4} ${modalStyle.title} ${modalStyle.row}`}>
                                        <span className={modalStyle.blockTitle}></span>
                                        <span className={modalStyle.closeButton} onClick={closeModal}><CloseIcon type="primary" /></span>
                                    </div>
                                    <div className="body">
                                        <div className={`${modalStyle.row} ${orderStyle.numberOrder}`}>034536</div>
                                        <div className={`${orderStyle.mt2} ${modalStyle.row} ${orderStyle.identificatorOrder}`}>идентификатор заказа</div>
                                        <div className={`${orderStyle.mt4} ${modalStyle.row}`}>
                                            <span className={orderStyle.borderRadius}>
                                                <div className={orderStyle.iconPosition}>  <CheckMarkIcon type="primary" /></div>
                                            </span>
                                        </div>
                                        <div className={`${orderStyle.mt6} ${modalStyle.row} ${orderStyle.infoOrder}`}> Ваш заказ начали готовить</div>
                                        <div className={`${modalStyle.row} ${orderStyle.infoOrderGet}`}> Дождитесь готовности на орбитальной станции</div>
                                    </div>  */}
                                {/* </div>
                            </div>
                        </div> */}
                        {/* <ModalOverlay onClose={closeModal}></ModalOverlay> */}
                    </>
                </Modal>}         
            </div>
        </div>
    )
}

export default CreateOrder