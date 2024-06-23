import orderStyle from './order.module.css';
import modalStyle from '../Modal/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import  ModalOverlay from '../Modal/ModalOverlay';


const GetCurrentOrder = ({onClose}) => {
    return (
        <>
            <div className={`${modalStyle.mt4} ${modalStyle.title} ${modalStyle.row}`}>
                <span className={modalStyle.blockTitle}></span>
                <span className={modalStyle.closeButton} onClick={onClose}><CloseIcon type="primary" /></span>
            </div>
            <div className="body">
                <div className={`${modalStyle.row} ${orderStyle.numberOrder}`}>034536</div>
                <div className={`${orderStyle.mt2} ${modalStyle.row} ${orderStyle.identificatorOrder}`}>идентификатор заказа</div>
                <div className={`${orderStyle.mt4} ${modalStyle.row}`}>
                    <span className={orderStyle.borderRadius}>
                        <div className={orderStyle.iconPosition}> <CheckMarkIcon type="primary" /></div>
                    </span>
                </div>
                <div className={`${orderStyle.mt6} ${modalStyle.row} ${orderStyle.infoOrder}`}> Ваш заказ начали готовить</div>
                <div className={`${modalStyle.row} ${orderStyle.infoOrderGet}`}> Дождитесь готовности на орбитальной станции</div>
            </div> 
            <ModalOverlay onClose={onClose}></ModalOverlay>
        </>
    )
}

GetCurrentOrder.propTypes = {
    onClose: PropTypes.func,
}

export default GetCurrentOrder
