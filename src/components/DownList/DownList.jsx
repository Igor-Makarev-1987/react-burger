import downListStyle from './downList.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function DownList() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={downListStyle.header}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
      )
}


export default DownList