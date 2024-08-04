import { useSelector } from 'react-redux';
import upListStyle from './upList.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function UpList() {

// const constructorIngridient = useSelector( state => state.ingridients.constructorIngridient)
const constructorIngridient = useSelector( state => state.constructorIngridients.constructorIngridient)
// console.log(constructorIngridient.bun);
// if(constructorIngridient.bun) {
//   console.log(constructorIngridient.bun[0].name)
// }

return (       
    <div className={`${upListStyle.header} ${upListStyle.column}`}>
      {constructorIngridient.bun.length > 0 ? <ConstructorElement
                                  type="top"
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


export default UpList