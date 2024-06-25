import React, {useState} from 'react';
import ingridientsStyle from './ingridients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';
import PropTypes from 'prop-types';

const Ingridient = ({data, onClick}) => {
    const handleClick = () => {
        onClick(data)
    }
    
    return (
        <div className={ingridientsStyle.product} onClick={handleClick}>
            <div className={ingridientsStyle.card}>
                <img className={ingridientsStyle.picture} src={data.image} />
                <div className={ingridientsStyle.price}>{data.price} <span className={ingridientsStyle.icon}><CurrencyIcon type="primary" /></span></div> 
                <div className={ingridientsStyle.price}>{data.name}</div> 
            </div>
        </div>
  
    )
  }

Ingridient.propTypes = {
    data: ingridientPropTypes.isRequired,
    onClick: PropTypes.func
}

  export default Ingridient;