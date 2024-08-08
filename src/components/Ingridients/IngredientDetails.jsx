import modalStyle from '../Modal/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const IngredientDetails = ({ onClose}) => {
    const data = useSelector(state => state.viewedIngridient.currentIngridient)

    return (
        <>
            <div className={`${modalStyle.mt4} ${modalStyle.title} ${modalStyle.row}`}>
                                        Детали ингридиента 
                </div>
            <div className="body">
                <img className={modalStyle.picture} src={data.image_mobile} alt={data.name}/>
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
        </>
    )
}

IngredientDetails.propTypes = {
    // data: ingridientPropTypes.isRequired,
    closeModal: PropTypes.func,
}

export default IngredientDetails