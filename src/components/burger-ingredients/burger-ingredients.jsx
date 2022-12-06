import styles from './burger-ingredients.module.css'
import {CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {getTypeLabel} from "../../utils/get-label-type";
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/ingredient-type";
import {createRef, useEffect, useState} from "react";
import React from "react";



const BurgerIngredients = ({ data, handleClick }) => {

    const types = [...new Set(data.map(x => x.type))]

    const parsedData = types.map(x => ({
        name: x,
        ref: createRef(),
        values: data.filter(z => z.type === x)
    }))


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
            <p style={{display: "flex"}} className="text text_type_main-large">Соберите бургер</p>
            <div className={'mt-5'} style={{display: 'flex'}}>
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
                                <p ref={x.ref} className={"text text_type_main-medium"}
                                   style={{display: "flex"}}>{getTypeLabel(x.name)} </p>
                                <div className={`${styles.items} pt-6`}>
                                    {x.values.map((i, index) =>
                                        <div key={index}
                                             onClick={() => handleClick(i["_id"])}
                                             className={`${styles.item} pl-4 pr-4 mt-6 ${index % 2 === 0 ? "mr-3" : "ml-3"}`}>
                                            <img src={i.image} alt={'ingredient'}/>
                                            <div className={`${styles.price} mt-1 mb-1`}>
                                                <p className={'mr-1 text text_type_digits-default'}>{i.price}</p>
                                                <CurrencyIcon type={"primary"}/>
                                            </div>
                                            <p className={`${styles.name} text text_type_main-small mb-10`}>
                                                {i.name}
                                            </p>
                                        </div>
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

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({...ingredientType
    }).isRequired).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default BurgerIngredients;