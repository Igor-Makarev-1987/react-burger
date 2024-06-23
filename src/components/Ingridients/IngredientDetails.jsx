import React, {useState} from 'react';
import ingridientsStyle from './ingridients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import modalStyle from '../Modal/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../Modal/ModalOverlay';
import { ingridientPropTypes } from '../PropsTypes/validateIngridients';
import CurrentIngridient from './CurrentIngridient';

const GetIngridients = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        if(!isOpen) {
            setIsOpen(!isOpen);
        }
    }

    const closeModal = () => {
        if(!isOpen == false) {
            setIsOpen(!isOpen);
        }
  
    }
    return (
        <div className={ingridientsStyle.product} >
            <div className={ingridientsStyle.card} onClick={openModal}>
                <img className={ingridientsStyle.picture} src={data.image} />
                <div className={ingridientsStyle.price}>{data.price} <span className={ingridientsStyle.icon}><CurrencyIcon type="primary" /></span></div> 
                <div className={ingridientsStyle.price}>{data.name}</div> 
                {isOpen && <Modal isOpen={isOpen} onClose={closeModal}>
                    {/* <> */}
                        {/* <div className={modalStyle.container}>
                            <div className="modal-wrapper"> */}
                                {/* <div className="modal"> */}
                                    <CurrentIngridient data={data} onClose={closeModal}></CurrentIngridient>
                                    {/* <div className={`${modalStyle.mt4} ${modalStyle.title} ${modalStyle.row}`}>
                                        Детали ингридиента 
                                        <span className={modalStyle.closeButton} onClick={closeModal}><CloseIcon type="primary" /></span>
                                        </div>
                                    <div className="body">
                                        <img className={modalStyle.picture} src={data.image_mobile}/>
                                        <div className={modalStyle.nameProduct}>{data.name}</div>
                                        <div className={modalStyle.rowPherments}>
                                            <span>
                                                <div className={modalStyle.fontPermentsName}>Каллорий,ккал</div>
                                                <div className={modalStyle.fontPermentsNumber}>{data.calories}</div>
                                            </span>
                                            <span>
                                                <div className={modalStyle.fontPermentsName}>Белки, г</div>
                                                <div className={modalStyle.fontPermentsNumber}>{data.carbohydrates}</div>
                                            </span>
                                            <span>
                                                <div className={modalStyle.fontPermentsName}>Жиры, г</div>
                                                <div className={modalStyle.fontPermentsNumber}>{data.fat}</div>
                                            </span>
                                            <span>
                                                <div className={modalStyle.fontPermentsName}>Углеводы, г</div>
                                                <div className={modalStyle.fontPermentsNumber}>{data.proteins}</div>
                                            </span>
                                        </div>
                                    </div>  */}
                                {/* </div> */}
                            {/* </div>
                        </div> */}
                        {/* <ModalOverlay onClose={closeModal}></ModalOverlay> */}
                    {/* </> */}
                </Modal>}         
            </div>
        </div>
  
    )
  }

GetIngridients.propTypes = {
    data: ingridientPropTypes.isRequired
}

  export default GetIngridients;