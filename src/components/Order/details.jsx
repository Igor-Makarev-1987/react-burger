import orderStyle from './order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useMemo, useState} from 'react';
import Modal from '../Modal/Modal';
import modalStyle from '../Modal/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../Modal/ModalOverlay';
import OrderDetails from './OrderDetails';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../services/actions/orderAction';


const Order = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const openModal = () => {
        setIsOpen(!isOpen);
        checkout();
    }

    const closeModal = () => {
        setIsOpen(!isOpen);
    }

    // const constructorIngridients = useSelector( state => state.ingridients.constructorIngridient)
    const constructorIngridients = useSelector( state => state.constructorIngridients.constructorIngridient)

    const checkout = async () => {
        const ingridients_Id = constructorIngridients.ingridients.map( value => value._id)
        // переделать под чистую функцию!!!
        if(constructorIngridients.bun.length > 0) {
            ingridients_Id.push(constructorIngridients.bun[0]._id)
        }
        
        if (ingridients_Id.length > 0) {
            dispatch(postOrder(ingridients_Id));
        }

    }

    const disabledButton = constructorIngridients.bun.length === 0 ? true : false

    // const constructorIngridient = useSelector( state => state.ingridients.constructorIngridient)
   
    const totalSum = useMemo( () => {
        let total = 0;
        let totalBun = 0
        let totalIngridients = 0;
        if(constructorIngridients.bun.length > 0) {
            totalBun = constructorIngridients.bun[0].price * 2 
        } 

        if(constructorIngridients.ingridients.length > 0) {
            totalIngridients =  constructorIngridients.ingridients.reduce( 
                (sum, current) => sum + current.price, 0
            )
        }

        total = totalBun + totalIngridients;
        return total;
    }, [constructorIngridients])

    return (
        <div>
            <div className={orderStyle.container}>
                <div className={`${orderStyle.row} ${orderStyle.pricePosition}`}>
                    <span className={`${orderStyle.price}`}>
                        <span className={`${orderStyle.mr3}`}>
                            {totalSum} 
                        </span>
                        <span className={`${orderStyle.icon}`}>                            
                            <CurrencyIcon type="primary" />
                        </span>
                    </span>
                    <span className={orderStyle.button}>
                        <Button htmlType="button" disabled={disabledButton} type="primary" size="large" onClick={openModal}>
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