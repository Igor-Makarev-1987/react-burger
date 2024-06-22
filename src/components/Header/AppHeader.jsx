import headerStyles from './header.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function CreateAppHeader() {
    return (
        <div className={headerStyles.layout}>
            <div className={headerStyles.container}>
                <div className={headerStyles.row}>
                    <span className={headerStyles.vertical}>
                        <BurgerIcon type="primary" /> <span className={`${headerStyles.pl6} ${headerStyles.typography}`}>Конструктор</span>
                    </span>
                    <span className={headerStyles.vertical}>
                        <ListIcon type="secondary" /> <span className={`${headerStyles.pl6} ${headerStyles.typography}`}>Лента заказов</span>
                    </span>
                    <Logo />
                    <span className={headerStyles.vertical}>
                        <ProfileIcon type="secondary"/> <span className={`${headerStyles.pl6} ${headerStyles.typography}`}>Личный кабинет</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CreateAppHeader;