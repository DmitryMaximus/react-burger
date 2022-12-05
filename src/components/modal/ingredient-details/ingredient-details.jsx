import styles from './ingredient-details.module.css'

const IngredientDetails = ({ item }) => {
    return (
        <div className={styles.ingredientDetails}>
           <div className={styles.imageWrapper}>
               <img className={styles.image} src={item.image} alt={'ingredient'}/>
           </div>
            <p className={`mt-4 text text_type_main-medium ${styles.name}`}>{item.name}</p>
            <div className={`mt-8 ${styles.details} `}>
                <div className={`mr-5 ${styles.detail} `}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{item.calories}</p>
                </div>
                <div className={`mr-5 ${styles.detail} `}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{item.proteins}</p>
                </div>
                <div className={`mr-5 ${styles.detail} `}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{item.fat}</p>
                </div>
                <div className={`${styles.detail}`}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{item.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

// {
//     "_id": "60666c42cc7b410027a1a9b7",
//     "name": "Соус Spicy-X",
//     "type": "sauce",
//     "proteins": 30,
//     "fat": 20,
//     "carbohydrates": 40,
//     "calories": 30,
//     "price": 90,
//     "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
//     "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
//     "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
//     "__v": 0
// },

export default IngredientDetails;