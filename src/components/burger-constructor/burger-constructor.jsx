import styles from "./burger-constructor.module.css"
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../utils/ingredient-type";
import * as propTypes from "prop-types";
import PropTypes from "prop-types";
import React, {useContext, useMemo} from "react";
import {OrderNumContext} from "../../services/appContext";
import {getOrder} from "../../utils/burger-api";

const BurgerConstructor = ({burger, handleClick}) => {

    const {setOrderNum} = useContext(OrderNumContext)
    const getOrderNum = () => {
        handleClick()
        const orderBody = []
        orderBody.push(burger.bun['_id'], ...burger.ingredients.map(x => x['_id']))
        getOrder(setOrderNum, orderBody)
    };
    const getSum = useMemo(() => {
        if (burger.bun !== null) return () => {
            return burger.bun.price + burger.bun.price + burger.ingredients.map(x => x.price).reduce((partialSum, a) => partialSum + a, 0)
        }
        return 0
    }, [burger])


    if (burger == null || burger.bun == null) return null


    return (
        <div className={`pt-10 ml-5 mt-25 ${styles.constructor}`}>
            <div className={`mb-4 ${styles.item}`}>
                <span className={styles.hiddenDrag}>
                    <DragIcon type={'primary'}/>
                </span>
                <ConstructorElement extraClass={`pt-4 pb-4`} text={`${burger.bun.name} (верх)`}
                                    thumbnail={burger.bun.image} isLocked={true} price={burger.bun.price} type={'top'}/>
            </div>
            <div className={styles.ingredients}>
                {
                    burger.ingredients.map((x, index) =>
                        <div key={index} className={`mb-4 ${styles.item}`}>
                            <DragIcon type={'primary'}/>
                            <ConstructorElement extraClass={`pt-4 pb-4`} text={x.name} thumbnail={x.image}
                                                price={x.price}/>
                        </div>
                    )
                }
            </div>
            <div className={`mb-4 ${styles.item} `}>
                <span className={styles.hiddenDrag}>
                    <DragIcon type={'primary'}/>
                </span>
                <ConstructorElement extraClass={`pt-4 pb-4`} text={`${burger.bun.name} (низ)`}
                                    thumbnail={burger.bun.image} isLocked={true} price={burger.bun.price}
                                    type={'bottom'}/>
            </div>
            <div className={`${styles.order} mt-10`}>
                <div className={`${styles.price} mr-10`}>
                    <p className={'mr-1 text text_type_digits-default'}>{getSum()}</p>
                    <CurrencyIcon type={'primary'}/>
                </div>
                <Button htmlType={"button"} onClick={getOrderNum}>Оформить заказ</Button>
            </div>
        </div>
    )
}

BurgerConstructor.propTypes = {
    burger: propTypes.shape({
        bun: ingredientType.isRequired,
        ingredients: propTypes.arrayOf(ingredientType.isRequired).isRequired,
    }).isRequired,
    handleClick: PropTypes.func.isRequired

};

export default BurgerConstructor;