import {BurgerIcon, Button, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import styles from "./app-header.module.css"

const AppHeader = () => {

    return (
        <header className={`${styles.header} pt-4 pb-4`}>
            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <Button extraClass={`${styles.button} pl-5 pr-5 mr-2`} type={'secondary'} size={'small'} htmlType={'button'}>
                        <BurgerIcon type={"primary"}/>
                        <p className=" ml-2 text text_type_main-small">Конструктор</p>
                    </Button>
                    <Button extraClass={`${styles.button} pl-5 pr-5 mr-2`} type={'secondary'} size={'small'} htmlType={'button'}>
                        <ListIcon type={"secondary"}/>
                        <p className={`${styles.inActive} ml-2 text text_type_main-small`}>Лента заказов</p>
                    </Button>
                </nav>
                <Logo/>
                <Button extraClass={styles.button} type={'secondary'} size={'small'} htmlType={'button'}>
                    <ProfileIcon type={'secondary'}/>
                    <p className={`${styles.inActive} ml-2 text text_type_main-small`}>Личный кабинет</p>
                </Button>
            </div>
        </header>
    )
}
export default AppHeader;