import upListStyle from './upList.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function CreateUpList() {
    return (
        <div className={`${upListStyle.header} ${upListStyle.column} `}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
      )
}


export default CreateUpList