import burgerConstructorStyle from './burgerConstructor.module.css';
import UpList from '../UpList/UpList';
import List from '../List/List';
import DownList from '../DownList/DownList';
import Order from '../Order/Order';
import listStyle from '../List/list.module.css';
import PropTypes from 'prop-types';

function BurgerConstructor({data, isLoading, hasError}) {
    const unbun = data.success && data.data.filter( (el) => el.type != 'bun')
    return (
        <div className={burgerConstructorStyle.container}>
            <UpList></UpList>
            <>
                <div className={listStyle.container} >
                    <div className={listStyle.scroll} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {data.success && unbun.map( (component, index) => <List data={component} key={index}></List>)}
                    </div>
                </div>
            </>
            <DownList></DownList>
            <Order></Order>
        </div>
    )
}

// провверка на типизацию
BurgerConstructor.propTypes = {
    data: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
}


export default BurgerConstructor