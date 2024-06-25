import React, {useEffect, useState} from 'react';
import burgerIngredientsStyle from './burgerIngredients.module.css';
import Menu from '../BurgerIngridientMenu/burgerIngridientMenu';
import Ingridients from '../Ingridients/ingredient';
import PropTypes from 'prop-types';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';
import Modal from '../Modal/modal';
import IngredientDetails from '../Ingridients/ingredientDetails';

function BurgerIngredients({data, isLoading, hasError}) {
    // const [state, setState] = useState({
    //     isLoading: false,
    //     hasError: false,
    //     data: []
    //   });

    //   const components = () => {
    //     fetch('https://norma.nomoreparties.space/api/ingredients')
    //     .then(res => res.json())
    //     .then(data => { 
    //         if(data.success) {
    //             setState({ ...state, data, isLoading: false })
    //         }
    //     }) 
    //     .catch(e => {
    //         setState({ ...state, hasError: true, isLoading: false });
    //     })
    // }

    // useEffect( () => {
    //     components()
    // }, [])

    // const { data, isLoading, hasError } = state

    const someBuns = data.success && data.data.filter( (el) => el.type == 'bun')
    const someSauces = data.success && data.data.filter( (el) => el.type == 'sauce')
    const someMains = data.success && data.data.filter( (el) => el.type == 'main')
    const [isOpen, setIsOpen] = useState(false);
    const [currentIngridient, setCurrentIngridient] = useState({})

    const openModal = (component) => {
        setCurrentIngridient(component)
        if(!isOpen) {
            setIsOpen(!isOpen);
        }
    }

    const closeModal = () => {
        if(!isOpen == false) {
            setIsOpen(!isOpen);
        }
    }
    
    return (
        <>
            <div className={burgerIngredientsStyle.container}>
                <h3 className={`${burgerIngredientsStyle.mt4} ${burgerIngredientsStyle.title} `}>Соберите бургер</h3>
                <Menu></Menu>

                {isLoading ? (<p>loading...</p>) :(
                <div className={burgerIngredientsStyle.scroll} >
                    <div className={burgerIngredientsStyle.titleText}>Булки</div>
                    <div className={burgerIngredientsStyle.row}>
                        {isLoading && 'Загрузка...'}
                        {hasError && 'Произошла ошибка'}
                        {data.success &&   
                        someBuns.map((component) => <Ingridients key={component._id} data={component} onClick={openModal}/>)}
                    </div>
                    <div className={burgerIngredientsStyle.titleText}>Соусы</div>
                    <div className={burgerIngredientsStyle.row}>
                        {isLoading && 'Загрузка...'}
                        {hasError && 'Произошла ошибка'}
                        {data.success &&   
                        someSauces.map((component) => <Ingridients key={component._id} data={component} onClick={openModal}/>)}
                    </div>
                    <div className={burgerIngredientsStyle.titleText}>Начинки</div>
                    <div className={burgerIngredientsStyle.row}>
                        {isLoading && 'Загрузка...'}
                        {hasError && 'Произошла ошибка'}
                        {data.success &&   
                        someMains.map((component) => <Ingridients key={component._id} data={component} onClick={openModal}/>)}
                    </div>
                </div>)}
            </div>
            {isOpen && <Modal isOpen={isOpen} onClose={closeModal}>
                <>                       
                    <IngredientDetails data={currentIngridient} onClose={closeModal}></IngredientDetails>
                </>
            </Modal>} 
        </>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.shape({
        success: PropTypes.bool,
        data: PropTypes.arrayOf( ingridientPropTypes.isRequired)
    }),

    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
}

export default BurgerIngredients