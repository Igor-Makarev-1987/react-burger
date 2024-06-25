import React, {useEffect, useState} from 'react';
import AppHeader from '../Header/appHeader';
import appStyles from './app.module.css';
import AppBurgerIngredients from '../BurgerIngredients/appBurgerIngredients'
import AppBurgerConstructor from '../BurgerConstructor/appBurgerConstructor';

function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: {}
  });

    const getComponents = () => {
      fetch('https://norma.nomoreparties.space/api/ingredients')
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(data => { 
          if(data.success) {
              setState({ ...state, data, isLoading: false })
          }
      }) 
      .catch(e => {
          setState({ ...state, hasError: true, isLoading: false });
      })
  }

  useEffect( () => {
      getComponents()
  }, [])

  const { data, isLoading, hasError } = state


  return (
    <div className={appStyles.layout}>
      <AppHeader></AppHeader>
      <div className={`${appStyles.mt12} ${appStyles.center}`}>
        <AppBurgerIngredients data={data} isLoading={isLoading} hasError={hasError}></AppBurgerIngredients>
        <AppBurgerConstructor data={data} isLoading={isLoading} hasError={hasError}></AppBurgerConstructor>
      </div>
    </div>
  );
}

export default App;
