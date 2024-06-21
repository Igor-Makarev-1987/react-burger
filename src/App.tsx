import React, {useEffect, useState} from 'react';
import AppHeader from './components/Header/AppHeader';
import appStyles from '../src/components/App/app.module.css';
import AppBurgerIngredients from '../src/components/BurgerIngredients/AppBurgerIngredients'
import AppBurgerConstructor from '../src/components/BurgerConstructor/AppBurgerConstructor';

function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: {}
  });

    const components = () => {
      fetch('https://norma.nomoreparties.space/api/ingredients')
      .then(res => res.json())
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
      components()
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
