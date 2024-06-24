import burgerConstructorStyle from './burgerConstructor.module.css';
import UpList from '../UpList/upList';
import List from '../List/list';
import DownList from '../DownList/downList';
import Order from '../Order/details';
import listStyle from '../List/list.module.css';
import PropTypes from 'prop-types';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';

function BurgerConstructor({data, isLoading, hasError}) {
    const unbun = data.success && data.data.filter( (el) => el.type != 'bun')
    return (
        <div className={burgerConstructorStyle.container}>
            <UpList></UpList>
            <>
                <div className={listStyle.container} >
                    <div className={`${listStyle.scroll} ${burgerConstructorStyle.column}`}>
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
    data: PropTypes.shape({
        success: PropTypes.bool,
        data: PropTypes.arrayOf( ingridientPropTypes.isRequired)
    }),
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
}


export default BurgerConstructor