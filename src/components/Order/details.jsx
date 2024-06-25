import orderStyle from './order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useState} from 'react';
import Modal from '../Modal/modal';
import modalStyle from '../Modal/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../Modal/modalOverlay';
import OrderDetails from './orderDetails';


const Order = () => {
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
                        <OrderDetails onClose={closeModal}></OrderDetails>
                    </>
                </Modal>}         
            </div>
        </div>
    )
}

export default Order