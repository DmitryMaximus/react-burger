import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import Modal from "./components/modal/modal";
import IngredientDetails from "./components/modal/ingredient-details";
import OrderDetails from "./components/modal/order-details";


function App() {


    const [data, setData] = useState([])

    useEffect(() => {
        if (data != null) {
            const bun = data.filter((x: any) => x.type === "bun")[Math.random()<0.5?0:1];
            setBurger({
                top: bun,
                bottom: bun,
                ingredients: data.filter((x: any) => x.type !== "bun")
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
        top: null,
        ingredients: [],
        bottom: null
    })


    const [info, setInfo] = useState(false)
    const [ingredient, setIngredient] = useState(null)
    const handleClick = (id: any) => {
        setIngredient(data.find(x => x["_id"] === id) || null);
        setInfo(true)
    }

    const handleClose = () => {
        setInfo(false)
        setIngredient(null)
    }

    const [orderInfo, setOrderInfo] = useState(false)

    useEffect(() => {
        function handleEscapeKey(event: KeyboardEvent) {
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
            <div style={{overflow: 'hidden'}}>
                {
                    info &&
                    <Modal onClose={handleClose} header={'Детали ингредиента'} children={<IngredientDetails item={ingredient}/>}/>
                }
            </div>
            <div style={{overflow: 'hidden'}}>
                {
                    orderInfo &&
                    <Modal onClose={handleCloseOrderInfo} header={''} children={<OrderDetails/>}/>

                }
            </div>
        </div>
    );
}

export default App;
