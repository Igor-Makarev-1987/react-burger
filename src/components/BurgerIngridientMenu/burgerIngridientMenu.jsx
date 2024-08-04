import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import burgerIngredientsMenu from './burgerIngridientMenu.module.css';
import PropTypes from 'prop-types';

const Menu = (props) => {
    const [current, setCurrent] = useState('buns')
    const handleClick = (param) => {
        setCurrent(param)
    }

    return (
        <div className={burgerIngredientsMenu.container}>
            <Tab value="buns" active={'buns' === props.current} onClick={() => handleClick('buns')}>
                Булки
            </Tab>
            <Tab value="sauces" active={'sauces' === props.current} onClick={() => handleClick('sauces')}>
                Соусы
            </Tab>
            <Tab value="fillings" active={'fillings' === props.current} onClick={() => handleClick('fillings')}>
                Начинки
            </Tab>
        </div>
    )
  }

Menu.propTypes = {
    current: PropTypes.string.isRequired,
}

  export default Menu;