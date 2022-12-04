import styles from "./burger-constructor.module.css"
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ burger, handleClick }) => {

    if (burger == null || burger.top == null || burger.bottom == null) return null

    const getSum = () => {
        return burger.top.price + burger.bottom.price + burger.ingredients.map(x => x.price).reduce((partialSum, a) => partialSum + a, 0)
    }

    return (
        <div className={`pt-10 ml-5 mt-25 ${styles.constructor}`}>
            <div className={`mb-4 ${styles.item}`}>
                <span className={styles.hiddenDrag}>
                    <DragIcon type={'primary'}/>
                </span>
                <ConstructorElement extraClass={`pt-4 pb-4`} text={burger.top.name} thumbnail={burger.top.image} isLocked={true} price={burger.top.price} type={'top'}/>
            </div>
            <div className={styles.ingredients}>
                {
                    burger.ingredients.map((x, index) =>
                        <div key={index} className={`mb-4 ${styles.item}`}>
                            <DragIcon type={'primary'}/>
                            <ConstructorElement extraClass={`pt-4 pb-4`} text={x.name} thumbnail={x.image} price={x.price}/>
                        </div>
                    )
                }
            </div>
            <div className={`mb-4 ${styles.item} `}>
                <span className={styles.hiddenDrag}>
                    <DragIcon type={'primary'}/>
                </span>
                <ConstructorElement extraClass={`pt-4 pb-4`} text={burger.bottom.name} thumbnail={burger.bottom.image} isLocked={true} price={burger.bottom.price} type={'bottom'}/>
            </div>
            <div className={`${styles.order} mt-10`}>
                <div className={`${styles.price} mr-10`}>
                    <p className={'mr-1 text text_type_digits-default'}>{getSum()}</p>
                    <CurrencyIcon type={'primary'}/>
                </div>
                <Button htmlType={"button"} onClick={handleClick}>Оформить заказ</Button>
            </div>
        </div>
    )
}


export default BurgerConstructor;