import listStyle from './list.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';

const List = ({data}) => {
    return (
 
        <div className={`${listStyle.row} ${listStyle.constructorElement}`}>
            <span className={listStyle.paramsWidth} >
                <DragIcon></DragIcon>
                <ConstructorElement
                    text={data.name}
                    price={data.price}
                    thumbnail={data.image}
                ></ConstructorElement>
            </span>
        </div>
    )
}

List.propTypes = {
    data: ingridientPropTypes.isRequired
  }

export default List; 