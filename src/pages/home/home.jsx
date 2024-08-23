import React, {useEffect} from 'react';
import AppHeader from '../../components/Header/AppHeader';
import appStyles from '../../components/app/app.module.css';
import AppBurgerIngredients from '../../components/BurgerIngredients/AppBurgerIngredients'
import AppBurgerConstructor from '../../components/BurgerConstructor/AppBurgerConstructor';
import { useDispatch } from 'react-redux';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { loadAllIngredients } from '../../services/actions/ingridientAction';

function HomePage() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( loadAllIngredients() )
  }, [dispatch])

  return (
    <div className={appStyles.layout}>
      <AppHeader></AppHeader>
      <main className={`${appStyles.mt12} ${appStyles.center}`}>
        <DndProvider backend={HTML5Backend}>
          <AppBurgerIngredients />
          <AppBurgerConstructor />
        </DndProvider>  
      </main>
    </div>
  );
}

export default HomePage;