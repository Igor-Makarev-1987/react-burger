import React, {useEffect} from 'react';
import AppHeader from '../Header/appHeader';
import appStyles from './app.module.css';
import AppBurgerIngredients from '../BurgerIngredients/appBurgerIngredients'
import AppBurgerConstructor from '../BurgerConstructor/appBurgerConstructor';
import { useDispatch } from 'react-redux';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { loadAllIngredients } from '../../services/actions/ingridientAction';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( loadAllIngredients() )
  }, [dispatch])

  return (
    <div className={appStyles.layout}>
      <AppHeader></AppHeader>
      <div className={`${appStyles.mt12} ${appStyles.center}`}>
        <DndProvider backend={HTML5Backend}>
          <AppBurgerIngredients></AppBurgerIngredients>
          <AppBurgerConstructor></AppBurgerConstructor>
        </DndProvider>  
      </div>
    </div>
  );
}

export default App;
