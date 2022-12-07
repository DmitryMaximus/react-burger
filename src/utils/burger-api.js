import {checkResponse} from "./check-response";
import {BURGER_API_URL} from "./api-url";

export function getIngredients(func) {
    return fetch(`${BURGER_API_URL}/ingredients`)
        .then(checkResponse).then(result => func(result.data))
}




