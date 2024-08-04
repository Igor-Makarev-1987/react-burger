import { useSelector } from 'react-redux';
import downListStyle from './downList.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function DownList() {
  const constructorIngridient = useSelector( state => state.constructorIngridients.constructorIngridient)

  return (
      <div className={`${downListStyle.header} ${downListStyle.column}`}>
        {constructorIngridient.bun.length > 0 ? <ConstructorElement
                                  type="bottom"
                                  isLocked={true}
                                  text={constructorIngridient.bun[0].name}
                                  price={constructorIngridient.bun[0].price}
                                  thumbnail={constructorIngridient.bun[0].image}
                                /> 
                                  : 
                                null
      }
      </div>
    )
}


export default DownList