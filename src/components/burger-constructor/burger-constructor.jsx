import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'

const BurgerConstructor = ({burger}) => {
    const getSum = () => {
        let sum = 0;
        if (burger.top != null) sum += burger.top.price;
        if (burger.bottom != null) sum += burger.bottom.price;
        if (burger.filling) sum += burger.filling.map(x => x.price).reduce((a, b) => a + b, 0)
        return sum;
    }
    return (
        <div className={`${styles.constructor} pt-25 pl-10`}>
            <div className={'pl-4 mb-4'}>
                {burger.top != null &&
                <ConstructorElement thumbnail={burger.top.image} text={burger.top.name} price={burger.top.price}
                                    type={'top'}/>}
            </div>
            {
                burger.filling && burger.filling.map(x =>
                    <div className={`mb-4 ${styles.fillingItem}`}>
                        <DragIcon type={'primary'}/>
                        <ConstructorElement text={x.name} thumbnail={x.image} price={x.price}/>
                    </div>
                )
            }
            <div className={'pl-4'}>
                {burger.bottom != null && <ConstructorElement thumbnail={burger.bottom.image} text={burger.bottom.name}
                                                              price={burger.bottom.price} type={'bottom'}/>}
            </div>
            <div className={`${styles.order} mt-10`}>
                <div className={`${styles.price} mr-10`}>
                    <p className={'mr-1 text text_type_digits-default'}>{getSum()}</p>
                    <CurrencyIcon type={'primary'}/>
                </div>
                <Button htmlType={"button"}>Оформить заказ</Button>
            </div>
        </div>
    )
}
export default BurgerConstructor;