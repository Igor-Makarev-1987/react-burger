import {useEffect} from "react"
import modalStyle from '../Modal/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadAllIngredients } from "../../services/actions/ingridientAction";

const IngredientDetails = () => {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( loadAllIngredients() )
    }, [dispatch])
    const data = useSelector(state => state.viewedIngridient.currentIngridient)
    const id = useParams()
    const ingridients  = useSelector( (state) => 
        state.ingridients.ingridients
    )
  
    const currentIngridient = id ? ingridients.find(item => {
        return item._id === id.id
    }) : data;

    const generateMarkup = element => {
        return (
            <>
                <div className={`${modalStyle.mt4} ${modalStyle.title} ${modalStyle.row}`}>
                                            Детали ингридиента 
                    </div>
                <div className="body">
                    <img className={modalStyle.picture} src={element.image_mobile} alt={data.name}/>
                    <div className={modalStyle.nameProduct}>{element.name}</div>
                    <div className={modalStyle.rowPherments}>
                        <span>
                            <div className={modalStyle.fontPermentsName}>Каллорий,ккал</div>
                            <div className={modalStyle.fontPermentsNumber}>{element.calories}</div>
                        </span>
                        <span>
                            <div className={modalStyle.fontPermentsName}>Белки, г</div>
                            <div className={modalStyle.fontPermentsNumber}>{element.carbohydrates}</div>
                        </span>
                        <span>
                            <div className={modalStyle.fontPermentsName}>Жиры, г</div>
                            <div className={modalStyle.fontPermentsNumber}>{element.fat}</div>
                        </span>
                        <span>
                            <div className={modalStyle.fontPermentsName}>Углеводы, г</div>
                            <div className={modalStyle.fontPermentsNumber}>{element.proteins}</div>
                        </span>
                    </div>
                </div> 
            </>
        )
    }
    const modalBody = currentIngridient && generateMarkup(currentIngridient)

    return (
        modalBody
    )
}

IngredientDetails.propTypes = {
    // data: ingridientPropTypes.isRequired,
    // closeModal: PropTypes.func,
}

export default IngredientDetails