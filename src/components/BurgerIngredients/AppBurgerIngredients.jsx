import React, {useState, useRef} from 'react';
import burgerIngredientsStyle from './burgerIngredients.module.css';
import Menu from '../BurgerIngridientMenu/BurgerIngridientMenu';
import Ingridients from '../Ingridients/Ingredient';
import PropTypes from 'prop-types';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Ingridients/IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { currentIngridient } from '../../services/slices/viewedIngridient';

function BurgerIngredients() {
    const [current, setCurrent] = useState("buns");
    const [isModal, setIsModal] = useState(false);

    const dispatch = useDispatch();
    // тестовый вариант
    // const { 
    //     ingridients,
    //     isLoading,
    //     error
    // } = useSelector( (state) => ({
    //     ingridients: state.ingridients.ingridients,
    //     isLoading: state.ingridients.isLoading,
    //     error: state.ingridients.error
    // }))

    const { 
        ingridients,
        isLoading,
        error
    } = useSelector( (state) => 
        state.ingridients
    )

    const someBuns = !isLoading && ingridients.filter( (el) => el.type === 'bun')
    const someSauces = !isLoading && ingridients.filter( (el) => el.type === 'sauce')
    const someMains = !isLoading && ingridients.filter( (el) => el.type === 'main')
   
    const openModal = (ingridient) => {
        setIsModal(true)
        dispatch(currentIngridient(ingridient))
    }

    const closeModal = () => {
        setIsModal(false)
    }

    const burgerIngredientsContainerRef = useRef(null);
    const bunsHeaderRef = useRef(null);
    const sauceHeaderRef = useRef(null);
    const fillingsHeaderRef = useRef(null);
    const handleScroll = (e) => {
        const containerPos =
            burgerIngredientsContainerRef.current?.getBoundingClientRect();
        const bunsHeaderPos = bunsHeaderRef.current?.getBoundingClientRect();
        const sauceHeaderPos = sauceHeaderRef.current?.getBoundingClientRect();
        const fillingsHeaderPos =
        fillingsHeaderRef.current?.getBoundingClientRect();
        let closestHeaderElement = null;
        if (containerPos && bunsHeaderPos && sauceHeaderPos && fillingsHeaderPos) {
            const allDistances = [
              {
                distance: Math.abs(containerPos.top - bunsHeaderPos?.top),
                id: 'buns',
              },
              {
                distance: Math.abs(containerPos.top - sauceHeaderPos?.top),
                id: 'sauces',
              },
              {
                distance: Math.abs(containerPos.top - fillingsHeaderPos?.top),
                id: 'fillings',
              },
            ];
            closestHeaderElement = allDistances.sort(
              (a, b) => a.distance - b.distance
            )[0];
          }
          if (!closestHeaderElement) {
            return;
          }
          setCurrent(closestHeaderElement.id);
    }
    
    return (
        <>
            <div className={burgerIngredientsStyle.container}>
                <h3 className={`${burgerIngredientsStyle.mt4} ${burgerIngredientsStyle.title} `}>Соберите бургер</h3>
                <Menu
                    current={current}
                ></Menu>

                {isLoading ? (<p>loading...</p>) :(
                    <section 
                        className={burgerIngredientsStyle.scroll}
                        onScroll={handleScroll}
                        ref={burgerIngredientsContainerRef}
                    >
                        <div>
                            <div className={burgerIngredientsStyle.titleText} ref={bunsHeaderRef}>Булки</div>
                            <div className={burgerIngredientsStyle.row} id='buns'>
                                {isLoading && 'Загрузка...'}
                                {error && 'Произошла ошибка'}
                                {!isLoading &&   
                                    someBuns.map((component) => <Ingridients key={component._id} data={component} onClick={openModal}/>)}
                            </div>
                            <div className={burgerIngredientsStyle.titleText} ref={sauceHeaderRef}>Соусы</div>
                            <div className={burgerIngredientsStyle.row} id='sauces'>
                                {isLoading && 'Загрузка...'}
                                {error && 'Произошла ошибка'}
                                {!isLoading &&   
                                    someSauces.map((component) => <Ingridients key={component._id} data={component} onClick={openModal}/>)}
                            </div>
                            <div className={burgerIngredientsStyle.titleText} ref={fillingsHeaderRef}>Начинки</div>
                            <div className={burgerIngredientsStyle.row} id='fillings'>
                                {isLoading && 'Загрузка...'}
                                {error && 'Произошла ошибка'}
                                {!isLoading &&   
                                    someMains.map((component) => <Ingridients key={component._id} data={component} onClick={openModal}/>)}
                            </div>
                        </div>
                    </section>)}
            </div>
            {/* {isModal && 
                <Modal isOpen={isModal} onClose={closeModal}>
                    <>                       
                        <IngredientDetails onClose={closeModal}></IngredientDetails>
                    </>
                </Modal>
            }  */}
        </>
    )
}

BurgerIngredients.propTypes = {
    // data: PropTypes.shape({
    //     isLoading: PropTypes.bool,
    //     data: PropTypes.arrayOf( ingridientPropTypes.isRequired)
    // }),

    // isLoading: PropTypes.bool.isRequired,
    // error: PropTypes.string.isRequired
}

export default BurgerIngredients