import {BurgerIcon, Button, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import styles from "./app-header.module.css"

const AppHeader = () => {

    return (
        <header className={`${styles.header} pt-4 pb-4`}>
            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <a className={`${styles.active} pl-5 pr-5 mr-2`} href='' >
                        <BurgerIcon type={"primary"}/>
                        <p className=" ml-2 text text_type_main-small">Конструктор</p>
                    </a>
                    <a className={`${styles.active} pl-5 pr-5 mr-2`}>

                        <ListIcon type={"secondary"}/>
                        <p className={`${styles.inActive} ml-2 text text_type_main-small`}>Лента заказов</p>
                    </a>
                </nav>
                <Logo/>
                <a className={styles.active} type={'secondary'}>
                    <ProfileIcon type={'secondary'}/>
                    <p className={`${styles.inActive} ml-2 text text_type_main-small`}>Личный кабинет</p>
                </a>
            </div>
        </header>
    )
}
export default AppHeader;