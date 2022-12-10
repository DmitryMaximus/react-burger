import styles from './order-details.module.css'
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import image from '../../../images/tick.png'
import {useContext} from "react";
import {OrderNumContext} from "../../../services/appContext";

const OrderDetails = () => {
    const {orderNum}  = useContext(OrderNumContext)
    console.log(orderNum)
    return (
        <div>
            <p className={`text text_type_digits-large ${styles.number}`}>{orderNum}</p>
            <p className={`text text_type_main-medium mt-8 ${styles.center}`}>идентификатор заказа</p>
            <div className={`mt-15 mb-15 ${styles.checkWrapper}`}>
                <div className={styles.check}>
                    <CheckMarkIcon type={'secondary'} />
                </div>
                <img alt={'tick'} src={image} width={100} height={100}/>
            </div>
            <p className={`text text_type_main-default ${styles.center}`}>Ваш заказ начали готовить</p>
            <p className={`mt-2 text text_type_main-default text_color_inactive ${styles.center}`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails