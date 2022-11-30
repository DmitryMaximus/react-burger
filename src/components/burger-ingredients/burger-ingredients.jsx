import {CurrencyIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from "../app-header/app-header";
import styles from './burger-ingredients.module.css'
import {useEffect, useRef} from "react";
import {data} from "../../utils/data";

const BurgerIngredients = ({handleAddBun, handleAddInner}) => {
    const getTypeLabel = (type) => {
        switch (type) {
            case "bun":
                return "Булки"
            case "main":
                return "Начинки"
            case "sauce":
                return "Соусы"
        }
    }

    const handleClick = (type, id) => {
        switch (type) {
            case "bun":
                handleAddBun(id)
                break;
            case "main":
                handleAddInner(id)
                break;
        }
    }

    return (
        <div className={`${styles.ingredients} pt-10`}>
            <p style={{display: "flex"}} className="text text_type_main-large">Соберите бургер</p>
            <div className={'mt-5 mb-10'} style={{display: 'flex'}}>
                <Tab value="Булки" active={true}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={false}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={false}>
                    Начинки
                </Tab>
            </div>
            <div className={`${styles.list} pl-4 pr-4`}>
                <div className={`${styles.setListWrapper} pt-10`}>
                    {
                        [...new Set(data.map(x => x.type))].map(x =>
                            <div className={styles.setList}>
                                <p className={"text text_type_main-medium"}
                                   style={{display: "flex"}}>{getTypeLabel(x)}</p>
                                <div className={`${styles.items} pt-6`}>
                                    {data.filter(z => z.type === x).map((i, index) =>
                                        <div onClick={() => handleClick(x, i["_id"])}
                                             className={`${styles.item} pl-4 pr-4 mt-6 ${index % 2 === 0 ? "mr-3" : "ml-3"}`}>
                                            <img src={i.image}/>
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
export default BurgerIngredients;