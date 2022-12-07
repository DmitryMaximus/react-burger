import styles from './burger-ingredients.module.css'
import {CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {getTypeLabel} from "../../utils/get-label-type";
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/ingredient-type";
import {createRef, useEffect, useMemo, useState} from "react";
import React from "react";


const BurgerIngredients = ({data, handleClick}) => {

    const types = [...new Set(data.map(x => x.type))]

    const parsedData = useMemo(() => {

        return types.map(x => ({
            name: x,
            ref: createRef(),
            values: data.filter(z => z.type === x)
        }))
    }, [types, data])


    const [activeTab, setActiveTab] = useState(null)

    useEffect(() => {
        if (parsedData[0] && parsedData[0].name) setActiveTab(parsedData[0].name)
    }, [data])

    const handleTabClick = (event) => {
        setActiveTab(event)
        parsedData.find(x => x.name === event).ref.current?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className={`mr-5 pt-10 ${styles.ingredients}`}>
            <p className="create-burger text text_type_main-large">Соберите бургер</p>
            <div className={`mt-5 ${styles.burgerTextAlign}`}>
                {
                    parsedData.map(x => x.name).map((z, index) =>
                        <Tab key={index} value={z} active={activeTab === z} onClick={handleTabClick}>
                            {getTypeLabel(z)}
                        </Tab>
                    )
                }
            </div>
            <div className={`${styles.list} pl-4 pr-4`}>
                <div className={`${styles.setListWrapper} pt-10`}>
                    {
                        parsedData.map((x, index) =>
                            <div key={index} className={styles.setList}>
                                <p ref={x.ref}
                                   className={`${styles.burgerTextAlign} text text_type_main-medium `} >{getTypeLabel(x.name)} </p>

                                <div className={`${styles.items} pt-6`}>
                                    {x.values.map((i, index) =>
                                        <IngredientItem key={index} index={index} item={i} handleClick={handleClick}/>
                                    )}
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    )

}

const IngredientItem = ({index, item, handleClick}) => {
    return (
        <div key={index}
            onClick={() => handleClick(item["_id"])}
            className={`${styles.item} pl-4 pr-4 mt-6 ${index % 2 === 0 ? "mr-3" : "ml-3"}`}>
            <img src={item.image} alt={'ingredient'}/>
            <div className={`${styles.price} mt-1 mb-1`}>
                <p className={'mr-1 text text_type_digits-default'}>{item.price}</p>
                <CurrencyIcon type={"primary"}/>
            </div>
            <p className={`${styles.name} text text_type_main-small mb-10`}>
                {item.name}
            </p>
        </div>
    )
}


IngredientItem.propTypes = {
    index: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    item: ingredientType.isRequired
};


BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default BurgerIngredients;