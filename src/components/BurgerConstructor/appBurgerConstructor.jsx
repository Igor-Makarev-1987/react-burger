import burgerConstructorStyle from './burgerConstructor.module.css';
import UpList from '../UpList/upList';
import List from '../List/list';
import DownList from '../DownList/downList';
import Order from '../Order/details';
import listStyle from '../List/list.module.css';
import PropTypes from 'prop-types';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';
import { useDispatch, useSelector } from 'react-redux';
import {ADD_INGRIDIENT} from '../../services/actions/ingridientsAction';
import {addIngridient} from '../../services/slices/constructorIngridientsSlice';
import {useDrop} from 'react-dnd';


function BurgerConstructor() {
    // const {data, isLoading, error} = useSelector( (state) => (state.ingridients.constructorIngridient
    //  убрано по причине warning
    //     {
    //     data: state.ingridients.constructorIngridient,
    //     isLoading: state.ingridients.isLoading,
    //     error: state.ingridients.error
    // }
    // ));
    const {constructorIngridient, isLoading, error} = useSelector( (state) => state.constructorIngridients);
    const isIngredientDragged = useSelector( (state) => state.constructorIngridients.isIngredientDragged);
    const dispatch = useDispatch();

    const [, dropRef] = useDrop({
        accept: 'ingridient',
        drop(item) {
          dispatch(addIngridient(item))
        } 
    })

    const outline = isIngredientDragged ? "1px dashed lightgreen" : "transparent";
    // перенос в constructorIngridient
    // const constructorIngridient = useSelector( state => state.ingridients.constructorIngridient)

    return (
        <div className={burgerConstructorStyle.container} ref={dropRef}>
            <>
                <UpList></UpList>
                <>
                    <div className={listStyle.container} >
                        <div className={`${listStyle.scroll} ${burgerConstructorStyle.column}`} style={{outline}}>
                            {!isLoading && constructorIngridient.ingridients && constructorIngridient.ingridients.map( 
                                (component, index) => <List data={component} key={index} orderIndex={index}></List>
                            )}
                        </div>
                    </div>
                </>
                <DownList></DownList>
                <Order></Order>
            </>
        </div>
    )
}

// проверка на типизацию
BurgerConstructor.propTypes = {
    // data: PropTypes.shape({
    //     success: PropTypes.bool,
    //     data: PropTypes.arrayOf( ingridientPropTypes.isRequired)
    // }),
    // isLoading: PropTypes.bool.isRequired,
    // hasError: PropTypes.bool.isRequired
}


export default BurgerConstructor