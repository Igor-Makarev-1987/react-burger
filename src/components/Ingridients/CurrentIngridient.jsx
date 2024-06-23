import modalStyle from '../Modal/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';
import PropTypes from 'prop-types';
import  ModalOverlay from '../Modal/ModalOverlay';

const GetCurrentIngridient = ({data, onClose}) => {
    return (
        <>
            <div className={`${modalStyle.mt4} ${modalStyle.title} ${modalStyle.row}`}>
                                        Детали ингридиента 
                <span className={modalStyle.closeButton} onClick={onClose}><CloseIcon type="primary" /></span>
                </div>
            <div className="body">
                <img className={modalStyle.picture} src={data.image_mobile}/>
                <div className={modalStyle.nameProduct}>{data.name}</div>
                <div className={modalStyle.rowPherments}>
                    <span>
                        <div className={modalStyle.fontPermentsName}>Каллорий,ккал</div>
                        <div className={modalStyle.fontPermentsNumber}>{data.calories}</div>
                    </span>
                    <span>
                        <div className={modalStyle.fontPermentsName}>Белки, г</div>
                        <div className={modalStyle.fontPermentsNumber}>{data.carbohydrates}</div>
                    </span>
                    <span>
                        <div className={modalStyle.fontPermentsName}>Жиры, г</div>
                        <div className={modalStyle.fontPermentsNumber}>{data.fat}</div>
                    </span>
                    <span>
                        <div className={modalStyle.fontPermentsName}>Углеводы, г</div>
                        <div className={modalStyle.fontPermentsNumber}>{data.proteins}</div>
                    </span>
                </div>
            </div> 
            <ModalOverlay onClose={onClose}></ModalOverlay>
        </>
    )
}

GetCurrentIngridient.propTypes = {
    data: ingridientPropTypes.isRequired,
    closeModal: PropTypes.func,
}

export default GetCurrentIngridient