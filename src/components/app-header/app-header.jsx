import {BurgerIcon, Button, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./app-header.module.css"

const AppHeader = () => {


    return (
        <header className={styles.header}>
            <div className={styles.links}>
                <Button htmlType="button" type="secondary" size="large"
                        extraClass={`pl-5 pr-5 mr-2 mt-4 mb-4 ${styles.link}`}>
                    <BurgerIcon type={"primary"}/>
                    <p className="m-2 text text_type_main-small">Конструктор</p>
                </Button>
                <Button htmlType="button" type="secondary" size="large"
                        extraClass={`pl-5 pr-5 mr-2 mt-4 mb-4 ${styles.link}`}>
                    <ListIcon type={"secondary"}/>
                    <p className="m-2 text text_type_main-default ">Лента заказов</p>
                </Button>
            </div>
            <Logo/>
            <div>
                <Button htmlType="button" type="secondary" size="large"
                        extraClass={`pl-5 pr-5 mr-2 mt-4 mb-4 ${styles.link}`}>
                    <ProfileIcon type={"secondary"}/>
                    <p className="m-2 text text_type_main-default ">Личный кабинет</p>
                </Button>
            </div>
        </header>
    )
}
export default AppHeader;