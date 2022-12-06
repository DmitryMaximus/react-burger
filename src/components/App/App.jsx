import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/order-details";


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
        const getProductData = async () => {
            await fetch('https://norma.nomoreparties.space/api/ingredients ')
                .then(res => res.json())
                .then(result => {
                    setData(result.data)
                })
                .catch(e => {
                    console.log(e)
                });
        };
        getProductData()
    }, [])

    const [burger, setBurger] = useState({
        bun: null,
        ingredients: [],
    })


    const [ingredient, setIngredient] = useState(null)
    const handleClick = id => {
        setIngredient(data.find(x => x["_id"] === id) || null);
    }

    const handleClose = () => {
        setIngredient(null)
    }

    const [orderInfo, setOrderInfo] = useState(false)

    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.code === 'Escape') {
                handleClose();
                handleCloseOrderInfo();
            }
        }

        document.addEventListener('keydown', handleEscapeKey)
    }, [])

    const handleOpenOrderInfo = () => {
        setOrderInfo(true)
    }

    const handleCloseOrderInfo = () => {
        setOrderInfo(false)
    }


    return (
        <div className="App">
            {/*использовать семантические HTML5-элементы,*/}
            {/*которые точно располагаются на главной странице:*/}
            {/*header, nav, main, section;*/}
            <AppHeader/>
            <main className="main">
                <section>
                    <BurgerIngredients handleClick={handleClick} data={data}/>
                </section>
                <section>
                    <BurgerConstructor handleClick={handleOpenOrderInfo} burger={burger}/>
                </section>
            </main>
            <div className='ingredient-modal'>
                {
                    ingredient &&
                    <Modal onClose={handleClose} header={'Детали ингредиента'}>
                        <IngredientDetails item={ingredient}/>
                    </Modal>
                }
            </div>
            <div className='order-modal'>
                {
                    orderInfo &&
                    <Modal onClose={handleCloseOrderInfo} header={''}>
                        <OrderDetails/>
                    </Modal>

                }
            </div>
        </div>
    );
}

export default App;