import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/order-details";
import {getIngredients} from "../../utils/burger-api";
import {OrderNumContext} from "../../services/appContext";


function App() {


    const [data, setData] = useState([])

    useEffect(() => {
        if (data != null) {
            const bun = data.find(x => x.type === "bun");
            setBurger({
                bun: bun,
                ingredients: data.filter(x => x.type !== "bun")
            })
        }
    }, [data])

    useEffect(() => {
        getIngredients(setData)
    }, [])

    const [burger, setBurger] = useState({
        bun: null,
        ingredients: [],
    })


    const [ingredient, setIngredient] = useState(null)

    const handleClick = id => {
        setIngredient(data.find(x => x["_id"] === id) || null);
    }

    const handleCloseIngredient = () => {
        setIngredient(null)
    }

    const [orderInfo, setOrderInfo] = useState(false)
    const [orderNum, setOrderNum] = useState(null)

    const handleOpenOrderInfo = () => {
        setOrderInfo(true)
    }

    const handleCloseOrderInfo = () => {
        setOrderInfo(false)
    }

    return (
        <div className="App">
            <AppHeader/>
            <main className="main">
                <section>
                    <BurgerIngredients handleClick={handleClick} data={data}/>
                </section>
                <section>

                    {burger.bun &&
                        <OrderNumContext.Provider value={{orderNum, setOrderNum}}>
                            <BurgerConstructor handleClick={handleOpenOrderInfo} burger={burger}/>
                        </OrderNumContext.Provider>
                    }

                </section>
            </main>
            <div className='ingredient-modal'>
                {
                    ingredient &&
                    <Modal onClose={handleCloseIngredient} header={'Детали ингредиента'}>
                        <IngredientDetails item={ingredient}/>
                    </Modal>
                }
            </div>
            <div className='order-modal'>
                {
                    orderNum &&
                    <Modal onClose={handleCloseOrderInfo} header={''}>
                        <OrderNumContext.Provider value={{orderNum}}>
                            <OrderDetails/>
                        </ OrderNumContext.Provider>
                    </Modal>

                }
            </div>
        </div>
    );
}

export default App;
