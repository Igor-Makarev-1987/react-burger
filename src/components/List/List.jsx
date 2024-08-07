import listStyle from './list.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';
import { useDispatch } from 'react-redux';
import { deleteIngridients, moveIngredients } from '../../services/slices/constructorIngridientsSlice';
import { useRef } from 'react';
import { useDrag, useDrop } from "react-dnd";
import PropTypes from 'prop-types';

const List = ({data, orderIndex}) => {
    const dispatch = useDispatch();
    const ACCEPTED_TYPE = "selectedIngredient";
    const ref = useRef(null);
    const [, dragRef] = useDrag({
        type: ACCEPTED_TYPE,
        item: { data, orderIndex },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });

    const [, drop] = useDrop({
        accept: ACCEPTED_TYPE,
        hover(item) {
          if (!ref.current) {
            return;
          }

          const dragIndex = item.orderIndex;
          const hoverIndex = orderIndex;

          if (dragIndex === hoverIndex) {
            return;
          }

          if (dragIndex !== undefined && hoverIndex !== undefined) {
            dispatch(moveIngredients({ dragIndex, hoverIndex }));
            item.orderIndex = hoverIndex;
          }
        },
      });

    dragRef(drop(ref));

    const handleIngredientRemoval = (id) => () => {
        dispatch(deleteIngridients(id));
    };
    return (
 
        <div ref={ref} className={`${listStyle.row} ${listStyle.constructorElement}`}>
            <span className={`${listStyle.paramsWidth} ${listStyle.cursor}`} >
                <DragIcon></DragIcon>
                <ConstructorElement
                    text={data.name}
                    price={data.price}
                    thumbnail={data.image}
                    handleClose={handleIngredientRemoval(data.id)}
                ></ConstructorElement>
            </span>
        </div>
    )
}

List.propTypes = {
    data: ingridientPropTypes.isRequired,
    orderIndex: PropTypes.number.isRequired,
  }

export default List; 