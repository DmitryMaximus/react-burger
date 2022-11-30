import React, {useState} from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import {data} from "./utils/data";


function App() {

    const [burger, setBurger] = useState<{
        top: any,
        filling: any,
        bottom: any
    }>(
        {
            top: null,
            filling: [],
            bottom: null
        }
    )

    const handleAddBun = (id: string) => {
        const item = data.find(x => x["_id"] === id);
        if (burger.bottom === null) {
            setBurger({...burger, bottom: item})
            return
        }
        if (burger.top === null) {
            setBurger({...burger, top: item})
            return
        }
        if (burger.top != null && burger.bottom != null) {
            setBurger({...burger, bottom: item, top: burger.bottom})
        }
    }

    const handleAddInner = (id: string) => {
        const item = {...data.find(x => x["_id"] === id)};
        const fillingList = [...burger.filling]
        fillingList.push(item)
        setBurger({...burger, filling: fillingList})
    }

    return (
        <div className="App">
            <AppHeader/>
            <div style={{display: "flex"}}>
                <BurgerIngredients handleAddInner={handleAddInner} handleAddBun={handleAddBun}/>
                <BurgerConstructor burger={burger}/>
            </div>
        </div>
    );
}

export default App;
